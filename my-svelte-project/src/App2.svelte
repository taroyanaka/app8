<script>
// e2eのテストコード作る

// app4形式のUIにする
// authの部分をtest_modeがfalseの時にfirebaseに変更

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
let created_at = new Date().toISOString();
let updated_at = new Date().toISOString();
let title = "";
let description = "";
let tags = [];

let errors = [];
// const test_mode = true;
const test_mode = false;
let auth_login_result = 'Not logged in';
let web_endpoint = 'http://localhost:8000';
let web_data = [];
let any_user_new_allDescs_with_tags = [];
const test_sampleUIDs = [
	'user1a34efgh5678ijkl9012mnop',
	'user2a34uvwx5678yzab9012cdef',
	'user3a34klmn5678opqr9012stuv'
];
let auth_uid = '';

// input type="datetime-local"の値をと、
// sqlite3のcreate_at(TEXT型)とupdate_at(TEXT型)に保存する際はISO8601形式で保存するため、
// それぞれの関数を作成create_project, create_packの2つの関数で使用
function toISOStringFromDatetimeLocal(datetimeLocalValue) {
	const date = new Date(datetimeLocalValue);
	return date.toISOString();
}
function toDatetimeLocalFromISOString(isoString) {
	return isoString.slice(0, 16); // 'YYYY-MM-DDTHH:MM' 形式を抽出
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
		console.log(desc.tags);
	if (desc) {
		auth_uid = desc.auth_uid;
		desc_id = desc.id;
		created_at = desc.created_at;
		updated_at = desc.updated_at;
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
async function init_and_sample_insert(){
try {
	// await fetch_init_db();
	for(const data of test_sample_data) {
		auth_uid = data.auth_uid;
		desc_id = data.desc_id;
		created_at = data.created_at;
		updated_at = data.updated_at;
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
		"created_at", created_at,
		"updated_at", updated_at,
		"title", title,
		"description", description,
		"tags", tags,
	)
		// validatorsでバリデーションを行う
		const valid_data = {
		"auth_uid": auth_uid,
		"desc_id": desc_id,
		"created_at": created_at,
		"updated_at": updated_at,
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
			key === "created_at" ? validators.validateISODate(created_at) : null;
			key === "updated_at" ? validators.validateISODate(updated_at) : null;
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
	// バリデーションを行いエラーがある場合エラースロー
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
			created_at: created_at,
			updated_at: updated_at,
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
        web_data = data;
        all_tags = data.allTags;
		console.log(1);
		if(web_data.any_user_new_allDescs_with_tags.length > 0){
			console.log(2);
			console.log('any_user_new_allDescs_with_tags');
			console.log(data.any_user_new_allDescs_with_tags);
			any_user_new_allDescs_with_tags = data.any_user_new_allDescs_with_tags;
		}
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
async function fetch_update_desc() {
	try {
		console.log('fetch_update_desc');
		console.log(auth_uid, desc_id, created_at, updated_at, title, description, tags);
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
		console.log(data);
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
		console.log(data);
	} catch (error) {
		console.error('Error:', error);
	}
}
async function fetch_delete_desc_tag(tag_id, desc_id) {
	try {
		console.log(tag_id, desc_id, auth_uid);
		const response = await fetch(web_endpoint + '/delete_desc_tag', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 
				id: tag_id,
				desc_id: desc_id,
				auth_uid: auth_uid
			})

		});
		const data = await response.json();
		console.log(data);
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
};

const auth_firebase_config = {
	apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
	authDomain: "p2auth-ea50a.firebaseapp.com",
	projectId: "p2auth-ea50a",
	storageBucket: "p2auth-ea50a.appspot.com",
	messagingSenderId: "796225429484",
	appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
};

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

$: (async () => {
	// inputタグにバインドされたデータは、inputタグの値が変更されるたびに更新される


})();

import { onMount } from "svelte";
onMount(async () => {
	await auth_check_login();
	await fetch_get_all_descs_and_tags();

});

</script>



<style>
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
	textarea {
		width: 100%;
		height: 50vh;
	}
		/* desc_tag */
/* 右寄せで文字を0.8remに */
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
</style>
		
<div class="container">

<div class="header">
	<div>
		<div class="version">v1.0.1</div>
		<div>auth_uid: {auth_uid}</div>
		<div>auth_login_result: <span>{auth_login_result}</span></div>

		{#if auth_uid === ''}
		<div>auth_google_login: <button on:click={auth_google_login}>auth_google_login</button></div>
		{/if}
		{#if auth_uid !== ''}
		<div>auth_sign_out: <button on:click={auth_sign_out}>auth_sign_out</button></div>
		{/if}
	</div>

	<button on:click={init_and_sample_insert}>init_and_sample_insert</button>
	<button on:click={fetch_init_db}>init_db</button>
	<button on:click={fetch_get_all_descs_and_tags}>get_all_descs_and_tags</button>
</div>

<div class="content">
	<div class="left-column server_side">
		<div class="console">
			{#if errors > 0}
			<!-- <button id="errors" on:click={() => errors = ''} on:keydown={(e) => { if (e.key === 'Enter' || e.key === ' ') errors = ''; }} style="background: none; border: none; padding: 0; margin: 0; color: inherit; font: inherit; cursor: pointer;">
				{errors}
			</button> -->
				<p>Errors:</p>
				{#each errors as error}
					<div>{error}</div>
				{/each}
			{/if}
			<!-- <p>auth_uid: {auth_uid.slice(0, 10)}...</p> -->
		</div>
		<div class="list">
			<h1>Your Web Data Descs</h1>
			<!-- any_user_new_allDescs_with_tagsが存在するならeachする -->
			{#if any_user_new_allDescs_with_tags.length > 0}
			{#each any_user_new_allDescs_with_tags as desc}
				<div>
					<p>id: {desc.id}</p>
					<!-- このidを現在のデータにセットする -->
					<button on:click={() => set_desc_data(desc.id)}>set_desc_data</button>
					<!-- idを指定して削除 -->
					<button on:click={() => fetch_delete_desc(desc.id)}>delete_desc</button>
						
					<p>auth_uid: {desc.auth_uid.slice(0, 10)}...</p>
					<p>title: {desc.title}</p>
					<p>description: {desc.description}</p>
					<div>tags:</div>
					{#each desc.tags as tag}
						<div class="desc_tag">
							<p>id: {tag.id}</p>
							<p>desc_id: {tag.desc_id}</p>
							<p>tag.name: {tag.name}</p>
							<!-- fetch_delete_desc_tag -->
							<button on:click={() => fetch_delete_desc_tag(tag.id, tag.desc_id)}>delete_desc_tag</button>
		
						</div>
					{/each}
				</div>
			{/each}
			{/if}

			<h1>Web Data Descs</h1>
			{#if web_data.allDescs}
			{#each web_data.allDescs as desc}
				<div>
					<p>id: {desc.id}</p>
					<!-- このidを現在のデータにセットする -->
					<button on:click={() => set_desc_data(desc.id)}>set_desc_data</button>
					<!-- idを指定して削除 -->
					<button on:click={() => fetch_delete_desc(desc.id)}>delete_desc</button>
						
					<p>auth_uid: {desc.auth_uid.slice(0, 10)}...</p>
					<p>title: {desc.title}</p>
					<p>description: {desc.description}</p>
					<div>tags:</div>
					{#each desc.tags as tag}
						<div class="desc_tag">
							<p>id: {tag.id}</p>
							<p>desc_id: {tag.desc_id}</p>
							<p>tag.name: {tag.name}</p>
							<!-- fetch_delete_desc_tag -->
							<button on:click={() => fetch_delete_desc_tag(tag.id, tag.desc_id)}>delete_desc_tag</button>
		
						</div>
					{/each}
				</div>
			{/each}
			{/if}
		</div>

		<div class="list2">
			<h1>Web Data Tags</h1>
			<!-- allTags -->
			{#if web_data.allTags}
				{#each web_data.allTags as tag}
					<div>
						<p>id: {tag.id}</p>
						<p>tag.name: {tag.name}</p>
						<!-- <p>created_at: {tag.created_at}</p> -->
						<!-- <p>updated_at: {tag.updated_at}</p> -->
					</div>
				{/each}
			{/if}
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
		<!-- fetch_update_desc -->

{#if auth_uid !== ''}
		<button on:click={fetch_update_desc}>update_desc</button>
		<!-- auth_user_id: <input type="number" value={auth_user_id} /><p>{auth_user_id}</p> -->
		<!-- auth_user_id: <p>{auth_user_id}</p> -->
		<!-- auth_uid: <input type="text" value={auth_uid} /><p>{auth_uid}</p> -->
		 <!-- auth_uidは文字数が10文字で折り返す -->
		auth_uid: <p>{auth_uid.slice(0, 10)}...</p>
		<p>id: {desc_id}</p>
		<!-- <input type="text" value={desc_id} /> -->
		<!-- created_at: <input type="datetime-local" bind:value={toDatetimeLocalFromISOString(created_at)} /><p>{created_at}</p> -->
		<!-- updated_at: <input type="datetime-local" bind:value={toDatetimeLocalFromISOString(updated_at)} /><p>{updated_at}</p> -->
		title: <input type="text" bind:value={title} /><p>{title}</p>
		description: <input type="text" bind:value={description} /><p>{description}</p>
		<div>tags:</div>
			{#each tags as tag}
			id: {tag.id}
			desc_id: {tag.desc_id}
			tag.name: <input type="text" value={tag.name} /><p>{tag.name}</p>
			{/each}				
				<!-- datalist要素でall_tags配列から取得 -->
				tagをdescに追加
				<label for="my_all_tags">all_tags</label>
				<!-- <input list="all_tags" id="my_all_tags" name="my_all_tags" /> -->
		<input list="all_tags" id="my_all_tags" name="my_all_tags" bind:value={new_tag} />
				<datalist id="all_tags">
					{#each all_tags as tag}
					<!-- add_tag_to_desc -->
						<option value={tag.name} />
					{/each}
				</datalist>
				<!-- add_tag_to_desc(desc_id, tag.id, tag.name) -->
		<button on:click={() => add_tag_to_desc(desc_id, new_tag)}>add_tag_to_desc</button>
		<!-- fetch_insert_desc -->
		<button on:click={fetch_insert_desc} class="fetch_insert_desc_button">insert_desc</button>
{/if}

	</div>
</div>


</div>