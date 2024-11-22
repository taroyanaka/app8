<script>
// ローカルで動くソート機能追加
// デザインをグリッドシステム準拠で変更


// 命名規則(prefix)
// auth => authentication関係の変数と関数
// test => テスト用の変数と関数
// design => デザイン関係の変数と関数
// web => webデータの変数と関数
// fetch => fetch関係の関数

let lang = "en";
const words = {
	"auth_login_result": {en:"Log in result", ja:"ログイン結果", zh:"登录结果", es:"resultado de inicio de sesión"},
	"auth_sign_out": {en:"Sign out", ja:"サインアウト", zh:"登出", es:"Cerrar sesión"},
	"web_data_tags": {en:"Web data tags", ja:"ウェブデータタグ", zh:"网页数据标签", es:"Etiquetas de datos web"},
	"any_user_new_all_descs_with_tags": {en:"Any user new all descriptions with tags", ja:"任意のユーザーの新しいすべてのタグ付き説明", zh:"任何用户的新所有带标签的描述", es:"Cualquier usuario nuevo todas las descripciones con etiquetas"},
	"all_descs": {en:"All descriptions", ja:"すべての説明", zh:"所有描述", es:"Todas las descripciones"},
	"filtered_all_descs": {en:"Filtered all descriptions", ja:"すべての説明をフィルター", zh:"过滤所有描述", es:"Todas las descripciones filtradas"},
	"web_data_edit": {en:"Web data edit", ja:"ウェブデータ編集", zh:"网页数据编辑", es:"Edición de datos web"},
	"title": {en:"Title", ja:"タイトル", zh:"标题", es:"Título"},
	"description": {en:"Description", ja:"説明", zh:"描述", es:"Descripción"},
	"tag": {en:"Tag", ja:"タグ", zh:"标签", es:"Etiqueta"},
	"set_desc_data": {en:"Set description data", ja:"説明データを設定", zh:"设置描述数据", es:"Establecer datos de descripción"},
	"delete_desc": {en:"Delete description", ja:"説明を削除", zh:"删除描述", es:"Eliminar descripción"},
	"add_tag_to_desc": {en:"Add tag to description", ja:"説明にタグを追加", zh:"添加标签到描述", es:"Agregar etiqueta a la descripción"},
	"update_desc": {en:"Update description", ja:"説明を更新", zh:"更新描述", es:"Actualizar descripción"},
	"insert_desc": {en:"Insert description", ja:"説明を挿入", zh:"插入描述", es:"Insertar descripción"},

	"errors": {en:"Errors", ja:"エラー", zh:"错误", es:"Errores"},
	"is_auth_uid_valid": {en:"Invalid auth_uid", ja:"無効なauth_uid", zh:"无效的auth_uid", es:"auth_uid no válido"},
	"is_title_valid": {ja: "タイトルは1文字以上100文字以下", en: "Title must be between 1 and 100 characters", zh: "标题必须在1到100个字符之间", es: "El título debe tener entre 1 y 100 caracteres"},
	"is_description_valid": {ja: "説明は1文字以上1000文字以下", en: "Description must be between 1 and 1000 characters", zh: "描述必须在1到1000个字符之间", es: "La descripción debe tener entre 1 y 1000 caracteres"},
	"are_tags_valid": {ja: "タグは1文字以上10文字以下", en: "Tags must be between 1 and 10 characters", zh: "标签必须在1到10个字符之间", es: "Las etiquetas deben tener entre 1 y 10 caracteres"},
	"confirm_clear_title_description_tags": {ja: "タイトル、説明、タグをクリアしますか？", en: "Clear title, description, and tags?", zh: "清除标题、描述和标签吗？", es: "¿Borrar título, descripción y etiquetas?"},
	"clear_title_description_tags": {ja: "タイトル、説明、タグをクリア", en: "Clear title, description, and tags", zh: "清除标题、描述和标签", es: "Borrar título, descripción y etiquetas"},
}

// descのidを指定してデータを更新する関数
let new_tag = "";
let all_tags = [];

let desc_id = null;
let title = "";
let description = "";
let tags = [];
let filter_tag_id_ary = [];
let filtered_all_descs = [];

let errors = [];
// const test_mode = true;
const test_mode = false;
let auth_login_result = 'Not logged in';
let web_endpoint = 'http://localhost:8000';
let web_data = 	{
};
let other_data = {};
let web_data_with_title = [];
let auth_uid = '';
let design_show_full_description = false;

function clear_title_description_tags() {
	if (confirm(words["confirm_clear_title_description_tags"][lang])) {
		title = '';
		description = '';
		tags = [];
		desc_id = null;
	}
}
function design_toggle_description() {
	design_show_full_description = !design_show_full_description;
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
const desc = web_data.all_descs.find(desc => desc.id === id);
if (desc) {
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
	const filtered_all_descs = web_data.all_descs.filter(desc => {
		const tag_id_exists = desc.tags.some(tag => filter_tag_id_ary.some(id => id === tag.id));
		return tag_id_exists;
	});
	web_data['filtered_all_descs'] = filtered_all_descs;

}
async function clear_filtered_all_descs(){
	filtered_all_descs = [];
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
	validate_auth_uid(uid) {
		const uidRegex = /^[a-zA-Z0-9_-]+$/;
		return uidRegex.test(uid);
	},
	validate_desc_id(id) {
		console.log('validate_desc_id', id);
		return Number.isInteger(id) && id > 0;
	},
	validate_iso_date(date) {
		const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
		return isoDateRegex.test(date);
	},
	validate_title(title) {
		console.log('validate_title', title);
		return typeof title === 'string' && title.length >= 1 && title.length <= 100;
	},
	validate_description(description) {
		console.log('validate_description', description);
		return typeof description === 'string' && description.length >= 1 && description.length <= 1000;
	},
	validate_tag_name(name) {
		return typeof name === 'string' && name.length >= 1 && name.length <= 10;
	},
	validate_data(data) {
		const { auth_uid, desc_id, title, description, tags } = data;

		// const is_desc_id_valid = this.validate_desc_id(desc_id);

		const is_auth_uid_valid = this.validate_auth_uid(auth_uid);
		const is_title_valid = this.validate_title(title);
		const is_description_valid = this.validate_description(description);
		const are_tags_valid = tags.every(tag => this.validate_tag_name(tag.name));
		
		return {
			is_auth_uid_valid,
			is_title_valid,
			is_description_valid,
			are_tags_valid
		};
	},
};
function valid_all(){
    const valid_data = {
        "auth_uid": auth_uid,
        "desc_id": desc_id,
        "title": title,
        "description": description,
        "tags": tags,
    };
    errors = [];
    // 全部のバリデーションを行い結果をerrorsに追加
    for(const [key, value] of Object.entries(validators.validate_data(valid_data))) {
        if(!value) {
            // errors.push(key);
errors.push(words[key][lang]);
        }
        if(key === "tags"){
            for(const [index, tag] of value.entries()) {
                for(const [key, value] of Object.entries(validators.validate_data(tag))) {
                    if(!value) {
                        errors.push(`tags[${index}].${key}`);
                    }
                }
            }
        }else{
            key === "auth_uid" ? validators.validate_auth_uid(auth_uid) : null;
            key === "desc_id" ? validators.validate_desc_id(desc_id) : null;
            key === "title" ? validators.validate_title(title) : null;
            key === "description" ? validators.validate_description(description) : null;
        }
    }
    if(errors.length > 0) {
        console.log(errors);
        return false;
    }
    return true;
}
async function fetch_insert_desc() {
try {
	if(!valid_all()) throw new Error('Validation failed');
	const response = await fetch('http://localhost:8000/insert_desc', {method: 'POST',headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			auth_uid: auth_uid,
			title: title,
			description: description,
			tags: tags
		})
	});
	await fetch_get_all_sequnce(response);
} catch (error) {
	console.error('Error:', error);
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
async function fetch_get_all_sequnce(Response) {
try {
	const data = await Response.json();
	// dataからall_descs, all_tags, any_user_new_all_descs_with_tags,以外のデータをother_dataに分離
	other_data = Object.fromEntries(Object.entries(data).filter(([key, _]) => key !== 'all_descs' && key !== 'all_tags' && key !== 'any_user_new_all_descs_with_tags'));
	// all_descs, all_tags, any_user_new_all_descs_with_tagsをweb_dataに追加(それ以外のプロパティはweb_dataに追加しない)
	web_data = Object.fromEntries(Object.entries(data).filter(([key, _]) => key === 'all_descs' || key === 'all_tags' || key === 'any_user_new_all_descs_with_tags'));
	all_tags = data.all_tags;
} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_get_all_descs_and_tags() {
try {
	const response = await fetch(web_endpoint + '/', {method: 'POST', headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				auth_uid: auth_uid
			})
	});
	await fetch_get_all_sequnce(response);
} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_update_desc() {
try {
	if(!valid_all()) {
		throw new Error('Validation failed');
	}
	const response = await fetch(web_endpoint + '/update_desc', {method: 'POST',headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			auth_uid: auth_uid,
			desc_id: desc_id,
			title: title,
			description: description,
			tags: tags
		})
	});
	await fetch_get_all_sequnce(response);
} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_delete_desc(id) {
try {
	const response = await fetch(web_endpoint + '/delete_desc', {method: 'POST',headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			id: id,
			auth_uid: auth_uid
		})
	});
	await fetch_get_all_sequnce(response);
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

		const current_user = await new Promise((resolve, reject) => {
			firebase.auth().onAuthStateChanged(resolve, reject);
		});
		console.log('Current user:', current_user);
	
		const auth_user = current_user;
		if (auth_user) {
			auth_uid = auth_user.uid;
			auth_login_result = 'Logged in';
		} else {
			console.log(2);
			auth_login_result = 'Not logged in';
			auth_uid = '';
		}
		if(test_mode) auth_login_result = 'Logged in';
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
	} catch (error) {
		console.error('Error during sign-out:', error);
		alert('Sign out failed. ' + error.message);
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
function run_boundary_tests() {
	const index = 1;
	title = boundary_test_data[index].title;
	description = boundary_test_data[index].description;
	tags = boundary_test_data[index].tags;
	fetch_insert_desc();
};
function design_scroll_to_id() {
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
	console.log("auth_check_login");
	await fetch_get_all_descs_and_tags();
	console.log("fetch_get_all_descs_and_tags");
	design_scroll_to_id();
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
.left_column, .right_column {
	flex: 1;
	padding: 10px;
}
.desc_tag {
/* text-align: right; */
/* font-size: 0.8rem; */
}
.fetch_insert_desc_button, .fetch_update_desc_button{
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
.all_descs {
	order: 4;
}
.all_tags {
	order: 2;
}
.any_user_new_all_descs_with_tags {
	order: 3;
}
.web_data_tags {
	order: 1;
}
</style>



<div class="container">

<div class="header">
	<div>
		<input type="radio" id="en" name="lang" value="en" bind:group={lang} />
		<label for="en">🇺🇸</label>
		<input type="radio" id="ja" name="lang" value="ja" bind:group={lang} />
		<label for="ja">🇯🇵</label>
		<input type="radio" id="zh" name="lang" value="zh" bind:group={lang} />
		<label for="zh">🇨🇳🇹🇼</label>
		<input type="radio" id="es" name="lang" value="es" bind:group={lang} />
		<label for="es">🇪🇸</label>
	</div>

	<div class="version">v1.1.0</div>
	<div>{words["auth_login_result"][lang]}: <span>{auth_login_result}</span></div>
	{#if auth_uid === ''}
	<div>auth_google_login: <button on:click={auth_google_login}>auth_google_login</button></div>
	{/if}
	{#if auth_uid !== ''}
	<div><button on:click={auth_sign_out}>{words["auth_sign_out"][lang]}</button></div>
	{/if}

	{#if test_mode}
	<div>auth_uid: {auth_uid}</div>
	<button on:click={run_boundary_tests}>run_boundary_tests</button>
	<button on:click={init_and_sample_insert}>init_and_sample_insert</button>
	<button on:click={fetch_init_db}>init_db</button>
	<button on:click={fetch_get_all_descs_and_tags}>get_all_descs_and_tags</button>
	{/if}
</div>

<div class="content">
	<div class="left_column server_side">
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
			{#if key !== "all_tags"}
				<div class={key}>
					<h1>{words[key][lang]}</h1>
					{#if key === "filtered_all_descs"}
						<button on:click={clear_filtered_all_descs}>clear_filtered_all_descs</button>
					{/if}
						{#each value as desc}
							<div>
								<p id={desc.id}>
								<button class="button_reset" on:click={() => copy_link(desc.id)}>id: {desc.id}</button>
								{#if key === "any_user_new_all_descs_with_tags" && auth_uid}
								<button on:click={() => set_desc_data(desc.id)}>{words["set_desc_data"][lang]}</button>
								<button on:click={() => fetch_delete_desc(desc.id)}>{words["delete_desc"][lang]}</button>
								{/if}
								</p>
								<p class="break_word">{desc.title}</p>
								<p class="break_word">
									<button class="button_reset" on:click={design_toggle_description}>{design_show_full_description ? '▲' : '▼'}</button>
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
					<h1>{words["web_data_tags"][lang]}</h1>
					{#if web_data.all_tags}
					{#each web_data.all_tags as tag}
						<button on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button>
					{/each}
					{/if}
				</div>
		</div>
	</div>

	<div class="right_column">
		{JSON.parse(JSON.stringify(web_data_with_title))}
		<h1>{words["web_data_edit"][lang]}</h1>
		{#if auth_uid !== ''}
		<p>id: {desc_id}</p>
		<button on:click={clear_title_description_tags}>{words["clear_title_description_tags"][lang]}</button>
		<div>title: </div>
		<textarea class="title" bind:value={title} minlength="1" maxlength="100" required placeholder="1_100"></textarea>
		<div>description: </div>
		<textarea class="description" bind:value={description} minlength="1" maxlength="1000" required placeholder="1_1000"></textarea>
		<div>
		{#each tags as tag}
			<button on:click={() => tags = tags.filter(t => t.id !== tag.id)}>{tag.name}</button>
		{/each}
		</div>

		<label for="my_all_tags">{words["tag"][lang]}</label>
		<input list="all_tags" id="my_all_tags" name="my_all_tags" bind:value={new_tag} minlength="1" maxlength="10" required placeholder="1_10"/>
		<datalist id="all_tags">
		{#each all_tags as tag}
			<option value={tag.name} />
		{/each}
		</datalist>
		<button on:click={() => add_tag_to_desc(desc_id, new_tag)}>{words["add_tag_to_desc"][lang]}</button>
		{#if errors.length > 0}
		<h2>{words["errors"][lang]}</h2>

		{#each errors as error}
			<p>{error}</p>
		{/each}
		{/if}
		<!-- <button on:click={fetch_insert_desc} class="fetch_insert_desc_button">{words["insert_desc"][lang]}</button> -->

		{#if desc_id === null}
		<button on:click={fetch_insert_desc} class="fetch_insert_desc_button">{words["insert_desc"][lang]}</button>
		{/if}
		{#if desc_id !== null}
		<!-- desc_idがnullならupdate -->
		 <!-- fetch_update_desc -->
		<button on:click={fetch_update_desc} class="fetch_update_desc_button">{words["update_desc"][lang]}</button>
		{/if}


		{/if}
	</div>
</div>


</div>