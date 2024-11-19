<script>
// 命名規則(prefix)
// auth => authentication関係の変数と関数
// test => テスト用の変数と関数
// design => デザイン関係の変数と関数
// web => webデータの変数と関数
// fetch => fetch関係の関数


// descのidを指定してデータを更新する関数
let new_tag = "";
let all_tags = [];

let desc_id = null;
let title = "";
let description = "";
let tags = [];
let filter_tag_id_ary = [];
let filtered_allDescs = [];

let errors = [];
const test_mode = true;
// const test_mode = false;
let auth_login_result = 'Not logged in';
let web_endpoint = 'http://localhost:8000';
let web_data = 	{
		"allDescs": [],
		"allTags": [],
		"any_user_new_allDescs_with_tags": [],
		"filtered_allDescs": [],
	};
let any_user_new_allDescs_with_tags = [];
let web_data_with_title = [];
const test_sampleUIDs = [
	'user1a34efgh5678ijkl9012mnop',
	'user2a34uvwx5678yzab9012cdef',
	'user3a34klmn5678opqr9012stuv'
];
let auth_uid = '';

let design_showFullDescription = false;
function design_toggleDescription() {
	design_showFullDescription = !design_showFullDescription;
}


function add_tag_to_desc(desc_id, tag_name) {
	try {
		// tag_nameからtag_idを取得
		const tag = all_tags.find(tag => tag.name === tag_name);
		// tagsに存在しないtag_nameの場合はtagsに追加。存在する場合は追加しない
		if (tag) {
			tag.desc_id = desc_id;
			const tag_already_exists = tags.some(tag => tag.id === tag.id);
			if (!tag_already_exists) {
				tags = [...tags, tag];
			}
			// tagのinputを空にする
			new_tag = "";
		} else {
			// If the tag does not exist, create a new tag and add it to the tags array
			const newTag = {
				id: all_tags.length + 1, // Assuming id is incremental
				name: tag_name,
				desc_id: desc_id,
				created_at: new Date().toISOString(),
				updated_at: new Date().toISOString()
			};
			all_tags = [...all_tags, newTag];
			tags = [...tags, newTag];
		}
	} catch (error) {
		console.error('Error:', error);
	}
}
function set_desc_data(id){
try {
const desc = web_data.allDescs.find(desc => desc.id === id);
if (desc) {
	auth_uid = desc.auth_uid;
	desc_id = desc.id;
	title = desc.title;
	description = desc.description;
	tags = desc.tags;
} else {
	console.error(`No description found with id: ${id}`);
}		
} catch (error) {
	console.error('Error:', error);	
}
}
function filtering_by_tag(tag_id) {
	const tag_id_exists = filter_tag_id_ary.some(id => id === tag_id);
	if (!tag_id_exists) {
		filter_tag_id_ary = [...filter_tag_id_ary, tag_id];
	}
	const filtered_allDescs = web_data.allDescs.filter(desc => {
		const tag_id_exists = desc.tags.some(tag => filter_tag_id_ary.some(id => id === tag.id));
		return tag_id_exists;
	});
	web_data['filtered_allDescs'] = filtered_allDescs;

}
async function clear_filtered_allDescs(){
	filtered_allDescs = [];
	filter_tag_id_ary = [];
	web_data_with_title = [];
	await fetch_get_all_descs_and_tags();
}
async function init_and_sample_insert(){
try {
	for(const data of test_sample_data) {
		auth_uid = data.auth_uid;
		desc_id = data.desc_id;
		title = data.title;
		description = data.description;
		tags = data.tags;
		await fetch_insert_desc();
	}
} catch (error) {
	console.error('Error:', error);
}
}
const validators = {
	validateAuthUid(uid) {
		const uidRegex = /^[a-zA-Z0-9_-]+$/;
		return uidRegex.test(uid);
	},
	validateDescId(id) {
		console.log('validateDescId', id);
		return Number.isInteger(id) && id > 0;
	},
	validateISODate(date) {
		const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
		return isoDateRegex.test(date);
	},
	validateTitle(title) {
		console.log('validateTitle', title);
		return typeof title === 'string' && title.length >= 1 && title.length <= 100;
	},
	validateDescription(description) {
		console.log('validateDescription', description);
		return typeof description === 'string' && description.length >= 1 && description.length <= 1000;
	},
	validateTagName(name) {
		return typeof name === 'string' && name.length >= 1 && name.length <= 10;
	},
	validateData(data) {
		const { auth_uid, desc_id, created_at, updated_at, title, description, tags } = data;

		const isAuthUidValid = this.validateAuthUid(auth_uid);
		const isDescIdValid = this.validateDescId(desc_id);
		// const isCreatedAtValid = this.validateISODate(created_at);
		// const isUpdatedAtValid = this.validateISODate(updated_at);
		const isTitleValid = this.validateTitle(title);
		const isDescriptionValid = this.validateDescription(description);
		const areTagsValid = tags.every(tag => this.validateTagName(tag.name));

		return {
			isAuthUidValid,
			// isDescIdValid,
			// isCreatedAtValid,
			// isUpdatedAtValid,
			isTitleValid,
			isDescriptionValid,
			areTagsValid
		};
	},
};
function valid_all(){
    console.log(
        "auth_uid", auth_uid,
        "desc_id", desc_id,
        "title", title,
        "description", description,
        "tags", tags,
    )
    const valid_data = {
        "auth_uid": auth_uid,
        "desc_id": desc_id,
        "title": title,
        "description": description,
        "tags": tags,
    };
    errors = [];
    // 全部のバリデーションを行い結果をerrorsに追加
    for(const [key, value] of Object.entries(validators.validateData(valid_data))) {
        if(!value) {
            errors.push(key);
        }
        if(key === "tags"){
            for(const [index, tag] of value.entries()) {
                for(const [key, value] of Object.entries(validators.validateData(tag))) {
                    if(!value) {
                        errors.push(`tags[${index}].${key}`);
                    }
                }
            }
        }else{
            key === "auth_uid" ? validators.validateAuthUid(auth_uid) : null;
            key === "desc_id" ? validators.validateDescId(desc_id) : null;
            key === "title" ? validators.validateTitle(title) : null;
            key === "description" ? validators.validateDescription(description) : null;
        }
    }
    // errorsが空でない場合はエラーを表示
    if(errors.length > 0) {
        console.log(errors);
        return false;
    }
    return true;
}
async function fetch_insert_desc() {
try {
	if(!valid_all()) {
		throw new Error('Validation failed');
	}
	const res = await fetch('http://localhost:8000/insert_desc', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			auth_uid: auth_uid,
			title: title,
			description: description,
			tags: tags
		})
	});
	const data = await res.json();
	console.log(data);
} catch (error) {
}
}
async function fetch_init_db() {
	try {
		const response = await fetch(web_endpoint+ '/init_db', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);
	} catch (error) {
		console.error('Error:', error);
	}
}
async function fetch_get_all_descs_and_tags() {
try {
	const response = await fetch(web_endpoint + '/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			auth_uid: auth_uid
		}) // 必要なデータをここに追加
	});
	const data = await response.json();
	console.log(data);
	web_data = data;
	all_tags = data.allTags;
	if(data.any_user_new_allDescs_with_tags){
		any_user_new_allDescs_with_tags = data.any_user_new_allDescs_with_tags;
	}

} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_update_desc() {
try {
	if(!valid_all()) {
		throw new Error('Validation failed');
	}
	const response = await fetch(web_endpoint + '/update_desc', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			auth_uid: auth_uid,
			desc_id: desc_id,
			title: title,
			description: description,
			tags: tags
		})
	});
	const data = await response.json();
} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_delete_desc(id) {
try {
	const response = await fetch(web_endpoint + '/delete_desc', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: id,
			auth_uid: auth_uid
		})
	});
	const data = await response.json();
} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_insert_desc_tag(desc_id, name) {
try {
	console.log(desc_id, name, 1);
	if(!validators.validateTagName(name)) {
		throw new Error('Validation failed');
	}
	console.log(desc_id, name, 2);

	const response = await fetch(web_endpoint + '/insert_desc_tag', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			desc_id: desc_id,
			name: name
		})
	});
	console.log(desc_id, name, 3);
	const data = await response.json();
	console.log(data);
	await fetch_get_all_descs_and_tags();
} catch (error) {
	console.error('Error:', error);
}
}
const test_all_validation_fn = {
	validateUser: (uid) => {
		const errors = [];
		const uidRegex = /^[a-zA-Z0-9_-]{28}$/; // Google Firebase Authentication UID format
		if (!uidRegex.test(uid)) {
			errors.push('Invalid UID format');
		}
		return errors;
	},
}
const auth_firebase_config = {
	apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
	authDomain: "p2auth-ea50a.firebaseapp.com",
	projectId: "p2auth-ea50a",
	storageBucket: "p2auth-ea50a.appspot.com",
	messagingSenderId: "796225429484",
	appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
}
firebase.initializeApp(auth_firebase_config);
const auth_google_provider = new firebase.auth.GoogleAuthProvider();
async function auth_check_login() {
	try {
		console.log('auth_check_login');
		const current_user = await new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged(resolve, reject);
		});
		console.log('Current user:', current_user);
	
		const auth_user = current_user;
		if (auth_user) {
			auth_uid = auth_user.uid;
			console.log(1);
			auth_login_result = 'Logged in';
		} else {
			console.log(2);
			auth_login_result = 'Not logged in';
			auth_uid = '';
			if(test_mode){
				console.log(3);
				console.log('test_mode');
				auth_login_result = 'Logged in';
			}
		}
	} catch (error) {
		console.error('Error during authentication:', error);
		auth_login_result = 'Authentication failed';
		auth_uid = "";
	}
}
async function auth_google_login() {
	try {
		console.log('auth_google_login');
		const result = await firebase.auth().signInWithPopup(auth_google_provider);
		const auth_user = result.user;
		console.log(4);
		auth_login_result = `Logged in as: ${auth_user.displayName}`;
	} catch (error) {
		console.error('Error during Google login:', error);
		alert('Google login failed. ' + error.message);
	}
}
async function auth_sign_out() {
	try {
		console.log(5);
		await firebase.auth().signOut();
		auth_login_result = 'Not logged in';
		await fetch_data();
	} catch (error) {
		console.error('Error during sign-out:', error);
		alert('Sign out failed. ' + error.message);
	}
}
async function fetch_data() {
	try {
		const response = await fetch(web_endpoint + '/', {method: 'GET'});
		web_data = await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
}
// 3つのテストデータを作成
const test_sample_data = [
	{
		"auth_uid": "user1",
		"desc_id": 1,
		"created_at": "2024-09-01T00:00:00",
		"updated_at": "2024-09-01T00:00:00",
		"title": "foo1",
		"description": "bar1",
		"tags": [
			{ "desc_id": 1, "id": 1, "name": "tag1", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" },
			{ "desc_id": 1, "id": 2, "name": "tag2", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" },
			{ "desc_id": 1, "id": 3, "name": "tag3", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" }
		]
	},
	{
		"auth_uid": "user1",
		"desc_id": 2,
		"created_at": "2024-09-01T00:00:00",
		"updated_at": "2024-09-01T00:00:00",
		"title": "foo2",
		"description": "bar2",
		"tags": [
			{ "desc_id": 2, "id": 1, "name": "tag1", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" },
			{ "desc_id": 2, "id": 2, "name": "tag2", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" },
			]
		},
		{
			"auth_uid": "user2",
			"desc_id": 3,
			"created_at": "2024-09-01T00:00:00",
			"updated_at": "2024-09-01T00:00:00",
			"title": "foo3",
			"description": "bar3",
			"tags": [
				{ "desc_id": 3, "id": 2, "name": "tag2", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" },
				{ "desc_id": 3, "id": 3, "name": "tag3", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" }
			]
		}
];
// 境界値テストデータ
const boundary_test_data = [
	{
		"auth_uid": "user1",
		"desc_id": 4,
		"created_at": "2024-09-01T00:00:00",
		"updated_at": "2024-09-01T00:00:00",
		"title": "a".repeat(100), // 最大長
		"description": "b".repeat(1000), // 最大長
		"tags": [
			{ "desc_id": 4, "id": 4, "name": "tag4", "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" }
		]
	},
	{
		"auth_uid": "user1",
		"desc_id": 5,
		"created_at": "2024-09-01T00:00:00",
		"updated_at": "2024-09-01T00:00:00",
		"title": "", // 最小長
		"description": "", // 最小長
		"tags": [
			{ "desc_id": 5, "id": 5, "name": "t".repeat(10), "created_at": "2024-09-01T00:00:00", "updated_at": "2024-09-01T00:00:00" } // 最大長
		]
	}
];
// 境界値テストを実行
function runBoundaryTests() {
	const index = 1;
	title = boundary_test_data[index].title;
	description = boundary_test_data[index].description;
	tags = boundary_test_data[index].tags;
	fetch_insert_desc();
};
function design_scrollToId() {
	// URLに#Nのようなidが存在する場合指定したid(#id)の要素にスクロールする
	if (location.hash) {
		const id = location.hash.slice(1);
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	}
}
function copy_link(id) {
	navigator.clipboard.writeText(`${window.location.href.split('#')[0]}#${id}`);
	alert('Link copied to clipboard');
}

$: (async () => {

})();

import { onMount } from "svelte";

onMount(async () => {
	await auth_check_login();
	console.log(auth_uid);
	await fetch_get_all_descs_and_tags();
	design_scrollToId();

});
</script>


<style>
.button_reset {
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	color: inherit;
	cursor: pointer;
}
h1{
	width: 50vw;
}
.break_word {
	background-color: lightgray;
	word-wrap: break-word;
	overflow-wrap: break-word;
	width: 50vw;
}
.title:invalid,
.description:invalid {
	background-color: lightgray;
}
.title:valid,
.description:valid {
  /* background-color: palegreen; */
}
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
}
.header {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.content {
	display: flex;
	width: 100%;
}
.left-column, .right-column {
	flex: 1;
	padding: 10px;
}

.desc_tag {
/* text-align: right; */
/* font-size: 0.8rem; */
}
.fetch_insert_desc_button{
	background-color: #4CAF50; /* Green */
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
}
.title {
	width: 100%;
	height: 2rem;
}
.description {
		width: 100%;
		height: 17rem;
}

.list {
	display: flex;
	flex-direction: column;
}
/* 順序を変更するためのクラス */
.allDescs {
	order: 4;
}
.allTags {
	order: 2;
}
.any_user_new_allDescs_with_tags {
	order: 3;
}
.web_data_tags {
	order: 1;
}
</style>



<div class="container">

<div class="header">
	<div class="version">v1.0.6</div>
	<div>auth_login_result: <span>{auth_login_result}</span></div>
	{#if auth_uid === ''}
	<div>auth_google_login: <button on:click={auth_google_login}>auth_google_login</button></div>
	{/if}
	{#if auth_uid !== ''}
	<div>auth_sign_out: <button on:click={auth_sign_out}>auth_sign_out</button></div>
	{/if}

	{#if test_mode}
	<div>auth_uid: {auth_uid}</div>
	<button on:click={runBoundaryTests}>runBoundaryTests</button>
	<button on:click={init_and_sample_insert}>init_and_sample_insert</button>
	<button on:click={fetch_init_db}>init_db</button>
	<button on:click={fetch_get_all_descs_and_tags}>get_all_descs_and_tags</button>
	{/if}
</div>

<div class="content">
	<div class="left-column server_side">
		<div class="console">
		{#if errors > 0}
		<p>Errors:</p>
		{#each errors as error}
			<div>{error}</div>
		{/each}
		{/if}
		</div>

		<div class="list">
			{#each Object.entries(web_data) as [key, value]}
			{#if key !== "allTags"}
				<div class={key}>
					<h1>{key}</h1>
					{#if key === "filtered_allDescs"}
						<button on:click={clear_filtered_allDescs}>clear_filtered_allDescs</button>
					{/if}
						{#each value as desc}
							<div>
								<p id={desc.id}>
								<button class="button_reset" on:click={() => copy_link(desc.id)}>id: {desc.id}</button>
								{#if key === "any_user_new_allDescs_with_tags"}
								<button on:click={() => set_desc_data(desc.id)}>set_desc_data</button>
								<button on:click={() => fetch_delete_desc(desc.id)}>delete_desc</button>
								{/if}
								</p>
								<!-- title:  -->
								<p class="break_word">{desc.title}</p>
								<!-- description:  -->
								<p class="break_word">
									{design_showFullDescription ? desc.description : `${desc.description.slice(0, 10)}...`}
									<button class="button_reset" on:click={design_toggleDescription}>{design_showFullDescription ? '▲' : '▼'}</button>
								</p>
								{#if desc.tags}
								{#each desc.tags as tag}
									<button on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button>
								{/each}
								{/if}
							</div>
						{/each}
				</div>
			{/if}
			{/each}
				<div class="web_data_tags">
					<h1>Web Data Tags</h1>
					{#if web_data.allTags}
					{#each web_data.allTags as tag}
						<button on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button>
					{/each}
					{/if}
				</div>
		</div>
	</div>

	<div class="right-column">
		{#if errors.length > 0}
		<h2>errors</h2>
		{#each errors as error}
			<p>{error}</p>
		{/each}
		{/if}

		<h1>Web Data Edit</h1>
		{#if auth_uid !== ''}
		<button on:click={fetch_update_desc}>update_desc</button>
		<p>id: {desc_id}</p>
		<div>title: </div>
		<textarea class="title" bind:value={title} minlength="1" maxlength="100" required placeholder="1_100"></textarea>
		<div>description: </div>
		<textarea class="description" bind:value={description} minlength="1" maxlength="1000" required placeholder="1_1000"></textarea>
		<div>
		{#each tags as tag}
			<button on:click={() => tags = tags.filter(t => t.id !== tag.id)}>{tag.name}</button>
		{/each}
		</div>

		<label for="my_all_tags">tag</label>
		<input list="all_tags" id="my_all_tags" name="my_all_tags" bind:value={new_tag} minlength="1" maxlength="10" required placeholder="1_10"/>
		<datalist id="all_tags">
		{#each all_tags as tag}
			<option value={tag.name} />
		{/each}
		</datalist>
		<button on:click={() => add_tag_to_desc(desc_id, new_tag)}>add_tag_to_desc</button>
		<button on:click={fetch_insert_desc} class="fetch_insert_desc_button">insert_desc</button>
		{/if}
	</div>
</div>


</div>