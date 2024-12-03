<script>
// デザインをグリッドシステム準拠で変更

// 命名規則(prefix)
// web => webデータの変数と関数
// design => デザイン関係の変数と関数
// test => テスト用の変数と関数
// fetch => fetch関係の関数
// auth => authentication関係の変数と関数

let desc_id = null;
let title = "";
let description = "";
let sort_kind_and_order = {kind: 'id', order: 'desc',};
const sort_kind = ["id","title","description","tags","created_at","updated_at",];
let new_tag = "";
let all_tags = [];
let new_tags_ary = [];
let filter_tag_name_ary = [];

let errors = [];

const web_endpoint = 'https://cotton-concrete-catsup.glitch.me/app8';
// const web_endpoint = 'http://localhost:8000/app8';
let web_data = 	{
	"all_descs": [],
	"all_tags": [],
	"any_user_new_all_descs_with_tags": [],
	"filtered_all_descs": [],	
};
let web_other_data = {};

let design_is_hidden = false;
let design_scroll_timeout;
let design_active_tab = 'all_descs';
let design_show_menu = false;
let design_only_column = "left";
// let design_only_column = "right";
let design_show_modal = false;
let design_lang = "en";
let design_show_full_description = false;
const design_words = {
	"auth_login_result": {en:"Log in result", ja:"ログイン結果", zh:"登录结果", es:"resultado de inicio de sesión"},
	"auth_sign_out": {en:"Sign out", ja:"サインアウト", zh:"登出", es:"Cerrar sesión"},
	"web_data_tags": {en:"Web data tags", ja:"ウェブデータタグ", zh:"网页数据标签", es:"Etiquetas de datos web"},
	"any_user_new_all_descs_with_tags": {en:"My data", ja:"自分のデータ", zh:"我的数据", es:"Mis datos"},
	"all_descs": {en:"All", ja:"すべて", zh:"所有", es:"Todos"},
	"filtered_all_descs": {ja:"絞り込み", en:"Filtered", zh:"过滤", es:"Filtrado"},
	"web_data_edit": {en:"Web data edit", ja:"ウェブデータ編集", zh:"网页数据编辑", es:"Edición de datos web"},
	"title": {en:"Title", ja:"タイトル", zh:"标题", es:"Título"},
	"description": {en:"Description", ja:"説明", zh:"描述", es:"Descripción"},
	"tag": {en:"Tag", ja:"タグ", zh:"标签", es:"Etiqueta"},
	"set_desc_data": {en:"Set", ja:"セット", zh:"设置", es:"Establecer"},
	"delete_desc": {en:"Delete", ja:"削除", zh:"删除", es:"Eliminar"},
	"confirm_delete_desc": {ja: "削除しますか？", en: "Delete?", zh: "删除？", es: "¿Eliminar?"},
	"add_tag_to_desc": {en:"Add tag to description", ja:"説明にタグを追加", zh:"添加标签到描述", es:"Agregar etiqueta a la descripción"},
	"update_desc": {en:"Update description", ja:"説明を更新", zh:"更新描述", es:"Actualizar descripción"},
	"insert_desc": {en:"Insert description", ja:"説明を挿入", zh:"插入描述", es:"Insertar descripción"},
	"clear_filtered_all_descs": {ja: "フィルターをクリア", en: "Clear filter", zh: "清除过滤器", es: "Borrar filtro"},
	"errors": {en:"Errors", ja:"エラー", zh:"错误", es:"Errores"},
	"is_auth_uid_valid": {en:"Invalid auth_uid", ja:"無効なauth_uid", zh:"无效的auth_uid", es:"auth_uid no válido"},
	"is_title_valid": {ja: "タイトルは1文字以上100文字以下", en: "Title must be between 1 and 100 characters", zh: "标题必须在1到100个字符之间", es: "El título debe tener entre 1 y 100 caracteres"},
	"is_description_valid": {ja: "説明は1文字以上1000文字以下", en: "Description must be between 1 and 1000 characters", zh: "描述必须在1到1000个字符之间", es: "La descripción debe tener entre 1 y 1000 caracteres"},
	"are_tags_valid": {ja: "タグは1文字以上10文字以下", en: "Tags must be between 1 and 10 characters", zh: "标签必须在1到10个字符之间", es: "Las etiquetas deben tener entre 1 y 10 caracteres"},
	"confirm_clear_title_description_tags": {ja: "タイトル、説明、タグをクリアしますか？", en: "Clear title, description, and tags?", zh: "清除标题、描述和标签吗？", es: "¿Borrar título, descripción y etiquetas?"},
	"clear_title_description_tags": {ja: "タイトル、説明、タグをクリア", en: "Clear title, description, and tags", zh: "清除标题、描述和标签", es: "Borrar título, descripción y etiquetas"},
	"sort": {ja: "並べ替え", en: "Sort", zh: "分类", es: "Clasificar"},
	"left": {ja: "-", en: "-", zh: "-", es: "-"},
	"right": {ja: "+", en: "+", zh: "+", es: "+"},
	"select_language": {ja: "言語を選択", en: "Select language", zh: "选择语言", es: "Seleccionar idioma"},
	"tab": {ja: "タブ", en: "Tab", zh: "标签", es: "Pestaña"},
	"link_copied_to_clipboard": {ja: "リンクをコピーしました", en: "Link copied to clipboard", zh: "链接已复制到剪贴板", es: "Enlace copiado al portapapeles"},
}

// const test_mode = true;
const test_mode = false;

let auth_login_result = 'Not logged in';
let auth_uid = '';


function add_tag_to_desc(desc_id, tag_name) {
try {
	const validate_tag_name = (tag_name) => validators.validate_tag_name(tag_name) ? true : (errors.push(design_words["are_tags_valid"][design_lang]), false);
	const filter_errors = () => errors = errors.filter(error => !error.includes(design_words["are_tags_valid"][design_lang]));
    const find_tag_in_all_tags = (tag_name) => all_tags.find(tag => tag.name === tag_name);
    const create_new_tag = (tag_in_all_tags, tag_name, desc_id) => tag_in_all_tags ? { ...tag_in_all_tags, desc_id } : { id: all_tags.length + 1, name: tag_name, desc_id, created_at: new Date().toISOString(), updated_at: new Date().toISOString() };
    const update_all_tags = (tag_in_all_tags, new_tag) => tag_in_all_tags ? all_tags : [...all_tags, new_tag];
    const update_new_tags_ary = (new_tag) => new_tags_ary.some(tags_tag => tags_tag.id === new_tag.id) ? new_tags_ary : [...new_tags_ary, new_tag];
    const clear_new_tag = () => new_tag = "";
    if (validate_tag_name(tag_name)) {
        filter_errors();
        validate_tag_name(tag_name);
        const tag_in_all_tags = find_tag_in_all_tags(tag_name);
        const new_tag = create_new_tag(tag_in_all_tags, tag_name, desc_id);
        all_tags = update_all_tags(tag_in_all_tags, new_tag);
        new_tags_ary = update_new_tags_ary(new_tag);
        clear_new_tag();
    }
} catch (error) {
	console.error('Error:', error);
}
}
function filtering_by_tag(tag_name) {
	const add_filter_tag_name = (tag_name) => filter_tag_name_ary = filter_tag_name_ary.includes(tag_name) ? filter_tag_name_ary : [...filter_tag_name_ary, tag_name];
	const update_filtered_descs = () => web_data['filtered_all_descs'] = web_data.all_descs.filter(desc => desc.tags.some(tag => filter_tag_name_ary.includes(tag.name)));
	add_filter_tag_name(tag_name);
	update_filtered_descs();
    design_active_tab = 'filtered_all_descs';
}
function remove_filter_tag_name(tag_name) {
	const remove_filter_tag_name = (tag_name) => filter_tag_name_ary = filter_tag_name_ary.filter(name => name !== tag_name);
	const update_filtered_descs = () => web_data['filtered_all_descs'] = web_data.all_descs.filter(desc => desc.tags.some(tag => filter_tag_name_ary.includes(tag.name)));
	remove_filter_tag_name(tag_name);
	update_filtered_descs();
}
function clear_title_description_tags({with_confirm = true} = {}) {
	if (with_confirm) {
		if (confirm(design_words["confirm_clear_title_description_tags"][design_lang])) {
		title = ''; description = ''; new_tags_ary = []; desc_id = null;
		}
	} else {
		title = ''; description = ''; new_tags_ary = []; desc_id = null;
	}
}
function set_desc_data(id){
try {
	const desc = web_data.all_descs.find(desc => desc.id === id);
	if (desc) {
		desc_id = desc.id;
		title = desc.title;
		description = desc.description;
		new_tags_ary = desc.tags;
	} else {
		console.error(`No description found with id: ${id}`);
	}
	design_only_column = "right";
} catch (error) {
	console.error('Error:', error);	
}
}
async function clear_filtered_all_descs(){
	web_data['filtered_all_descs'] = [];
	filter_tag_name_ary = [];
}
async function init_and_sample_insert(){
try {
	for(const data of test_sample_data) {
		auth_uid = data.auth_uid;
		desc_id = data.desc_id;
		title = data.title;
		description = data.description;
		new_tags_ary = data.tags;
		await fetch_insert_desc();
	}
} catch (error) {
	console.error('Error:', error);
}
}
function copy_link(id) {
	navigator.clipboard.writeText(`${window.location.href.split('#')[0]}#${id}`);
	alert(design_words["link_copied_to_clipboard"][design_lang]);
}
function sorter() {
try {
    if (sort_kind_and_order.kind === null || sort_kind_and_order.order === null) return;
    if (web_data.all_descs === undefined) return;
    if (web_data.any_user_new_all_descs_with_tags === undefined) return;
    const sort_function = (a, b) => {
        switch (sort_kind_and_order.kind) {
            case "id":
                return sort_kind_and_order.order === "asc" ? a.id - b.id : b.id - a.id;
            case "title":
                return sort_kind_and_order.order === "asc" ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
            case "description":
                return sort_kind_and_order.order === "asc" ? a.description.localeCompare(b.description) : b.description.localeCompare(a.description);
            case "tags":
                return sort_kind_and_order.order === "asc" ? a.tags.length - b.tags.length : b.tags.length - a.tags.length;
            case "created_at":
                return sort_kind_and_order.order === "asc" ? a.created_at.localeCompare(b.created_at) : b.created_at.localeCompare(a.created_at);
            case "updated_at":
                return sort_kind_and_order.order === "asc" ? a.updated_at.localeCompare(b.updated_at) : b.updated_at.localeCompare(a.updated_at);
            default:
                return 0;
        }
    };

    const res_all_descs = web_data.all_descs.sort(sort_function);
	const res_any_user_new_all_descs_with_tags = web_data.any_user_new_all_descs_with_tags.sort(sort_function);

	web_data = {
		...web_data,
		all_descs: res_all_descs,
		any_user_new_all_descs_with_tags: res_any_user_new_all_descs_with_tags,
	};
} catch (error) {
	console.error('Error:', error);
}
}

function design_handle_scroll() {
	design_is_hidden = true;
	clearTimeout(design_scroll_timeout);
	design_scroll_timeout = setTimeout(() => {
		design_is_hidden = false;
	}, 1000);
}
function design_toggle_menu() {
	design_show_menu = !design_show_menu;
}
function design_toggle_modal() {
	design_show_modal = !design_show_modal;
}
function design_toggle_description() {
	design_show_full_description = !design_show_full_description;
}
function design_scroll_to_id() {
	if (location.hash) {
		const id = location.hash.slice(1);
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
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
		console.log(1);
		console.log('validate_tag_name', name);
		console.log(2);
		return typeof name === 'string' && name.length >= 1 && name.length <= 10;
	},
	validate_data(data) {
		const { auth_uid, desc_id, title, description, tags } = data;

		// const is_desc_id_valid = this.validate_desc_id(desc_id);

		const is_auth_uid_valid = this.validate_auth_uid(auth_uid);
		const is_title_valid = this.validate_title(title);
		const is_description_valid = this.validate_description(description);
		console.log('tags', tags);
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
        "tags": new_tags_ary,
    };
    errors = [];
    // 全部のバリデーションを行い結果をerrorsに追加
    for(const [key, value] of Object.entries(validators.validate_data(valid_data))) {
        if(!value) {
            // errors.push(key);
errors.push(design_words[key][design_lang]);
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
const test_boundary_test_data = [
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
function test_run_boundary_tests() {
	const index = 1;
	title = test_boundary_test_data[index].title;
	description = test_boundary_test_data[index].description;
	new_tags_ary = test_boundary_test_data[index].tags;
	fetch_insert_desc();
};

async function fetch_insert_desc() {
try {
	if(!valid_all()) throw new Error('Validation failed');
	const response = await fetch(web_endpoint+ '/insert_desc', {method: 'POST',headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			auth_uid: auth_uid,
			title: title,
			description: description,
			tags: new_tags_ary
		})
	});
	await fetch_get_all_sequnce(response);
	design_only_column = "left";
	design_active_tab = 'all_descs';
	clear_title_description_tags({with_confirm: false});
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
	// dataにfiltered_all_descsを追加(既存のfiltered_all_descsがあればそれを保存)
	data['filtered_all_descs'] = web_data['filtered_all_descs'] ? web_data['filtered_all_descs'] : [];

	// dataからall_descs, all_tags, any_user_new_all_descs_with_tags,以外のデータをweb_other_dataに分離
	web_other_data = Object.fromEntries(Object.entries(data).filter(([key, _]) => key !== 'all_descs' && key !== 'all_tags' && key !== 'any_user_new_all_descs_with_tags'));
	// all_descs, all_tags, any_user_new_all_descs_with_tagsをweb_dataに追加(それ以外のプロパティはweb_dataに追加しない)
	web_data = Object.fromEntries(Object.entries(data).filter(([key, _]) => key === 'all_descs' || key === 'all_tags' || key === 'any_user_new_all_descs_with_tags' || key === 'filtered_all_descs'));

	all_tags = data.all_tags;
	sorter();
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
			tags: new_tags_ary
		})
	});
	await fetch_get_all_sequnce(response);
	design_only_column = "left";
	design_active_tab = 'all_descs';
	clear_title_description_tags({with_confirm: false});
} catch (error) {
	console.error('Error:', error);
}
}
async function fetch_delete_desc(id) {
try {
	if (!confirm(design_words["confirm_delete_desc"][design_lang])) {
		return;
	}
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

const auth_firebase_config = {
	apiKey: "AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",
	authDomain: "p2auth-ea50a.firebaseapp.com",
	projectId: "p2auth-ea50a",
	storageBucket: "p2auth-ea50a.appspot.com",
	messagingSenderId: "796225429484",
	appId: "1:796225429484:web:ece56ef2fc0be28cd6eac9"
}
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
		const auth_google_provider = new firebase.auth.GoogleAuthProvider();
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

window.addEventListener('scroll', design_handle_scroll);
firebase.initializeApp(auth_firebase_config);

$: (async () => {
	if (design_only_column === "left") {
            document.documentElement.style.setProperty('--display-left-column', 'block');
            document.documentElement.style.setProperty('--display-right-column', 'none');
        } else if (design_only_column === "right") {
            document.documentElement.style.setProperty('--display-left-column', 'none');
            document.documentElement.style.setProperty('--display-right-column', 'block');
        }
})();

import { onMount } from "svelte";

onMount(async () => {
	await auth_check_login();
	console.log("auth_check_login");
	await fetch_get_all_descs_and_tags();
	console.log("fetch_get_all_descs_and_tags");
	design_scroll_to_id();
	// My dataをクリック
	// design_active_tab = 'any_user_new_all_descs_with_tags';
	// right_columnに移動
	// design_only_column = "right";

});
</script>

<style>
    :root {
        --display-left-column: none;
        --display-right-column: none;
        --chars-per-100vw: 39ch;
        --mobile-font-size: 8px;
    }

    /* メディアクエリでipad以下のサイズは--mobile-font-sizeを適用 */
    @media (max-width: 1024px) {
        :root {
            font-size: var(--mobile-font-size);
        }
    }

    .hidden_when_scroll {
        display: none;
    }

    /* menu_listの上の要素 */
    .header {
        display: flex;
        justify-content: space-between;
        width: 100%;
        position: relative;
    }

    .design_toggle_menu {
        position: absolute;
        top: 0;
        left: 0;
    }

    .menu_list {
        display: block;
        position: absolute;
        top: 0rem;
        right: 10px;
        background-color: white;
        border: 1px solid #ccc;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .modal {
        display: block;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }

    .modal-content {
        background-color: #fefefe;
        padding: 20px;
        border: 1px solid #888;
		width: 50%;
		height: 10rem;
    }

    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .left_column {
        display: var(--display-left-column);
    }

    .right_column {
        display: var(--display-right-column);
    }

    .button_reset {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        font-size: 16px;
    }

    .break_word {
        word-break: break-all;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .break_word_title {
        word-break: break-all;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    .title:invalid,
    .description:invalid {
        /* background-color: lightgray; */
    }

    .title:valid,
    .description:valid {
        /* background-color: palegreen; */
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .content {
        margin-top: 3rem;
        display: flex;
        width: 100%;
    }

    .left_column,
    .right_column {
        flex: 1;
    }

    .fetch_insert_desc_button,
    .fetch_update_desc_button {
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 0;
        border: 0.08rem solid gray;
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
    .filtered_all_desc {
        order: 5;
    }

    .all_descs {
        order: 4;
    }

    .all_tags {
        order: 2;
    }

	.parent_tags, .desc_tags {
		display: flex;
		/* justify-content: space-around; */
		/* justify-content: space-evenly; */
		justify-content: start;
		/* background-color: palegoldenrod; */
		flex-wrap: wrap;
		column-gap: 2rem;
		row-gap: 1rem;

	}

	.tag {
		/* この要素同士の隙間を作る(flexで) */
		
		/* background-color: red; */
		/* gap: 5rem; */
		/* column-gap: 1em; */


	}

    .any_user_new_all_descs_with_tags {
        order: 3;
    }

    .web_data_tags {
        order: 1;
    }

    .edit_button,
    .list_button {
        position: fixed;
        top: 0rem;
        right: 0rem;
        z-index: 1000;
        width: 10rem;
        height: 4rem;
    }

    .edit_button {
        z-index: 100;
    }

    .tabs {
        position: fixed;
        bottom: 10px;
        z-index: 10;
        justify-content: space-around;
        width: 100%;
        display: flex;
		background-color: rgba(255, 255, 255, 0.8);
    }

    .tabs button {
        border-right: 1px solid black;
        border-bottom: none;
        font-size: 1.2rem;
        font-weight: bold;
        flex: 1;
        cursor: pointer;
        text-align: center;
    }

    /* 最後の.tabs buttonはborder不要 */
    .tabs button:last-child {
        border-right: none;
    }

    /* button reset css */
    /* ボタンをボタン的な表示でなくする */
    button {
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        color: inherit;
        cursor: pointer;
        font-size: 16px;
        border-bottom: 1px solid black;
    }

    /* 立体 / エンボスのボタンのスタイル */
    .set_desc_data,
    .fetch_delete_desc {
        border-left: 1px solid #f1f1f1;
        border-bottom: 1px solid #f1f1f1;
        border-radius: 5px;
        padding: 0.2rem 0.2rem;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: box-shadow 0.3s ease;
    }

    .set_desc_data:hover,
    .fetch_delete_desc:hover {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    }

    .set_desc_data:active,
    .fetch_delete_desc:active {
        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .each_desc_border {
        border-bottom: 1px solid #ccc;
        position: relative;
        margin-bottom: 4rem;
    }

    .id_and_set_delete {
        position: absolute;
        right: 0;
        top: -1rem;
        transform: translateY(-50%);
        background-color: white;
        padding: 0.5rem;
    }

    .id {
        padding: 10px;
        margin: 0 0;
        font-size: 0.6rem;
        font: lightgray;
    }

    h1 {
        font-size: 1.2rem;
    }

    .title {
        font-size: 1.2rem;
    }

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .active {
        background-color: #ddd;
    }

    .hidden_when_scroll {
        display: none;
    }
</style>



<div class="container">

<div class="header">
	<!-- columnをleft, rightを切り替えるラジオボタン -->
	<!-- <div>
		<input type="radio" id="left" name="design_only_column" value="left" bind:group={design_only_column} />
		<label for="left">left</label>
		<input type="radio" id="right" name="design_only_column" value="right" bind:group={design_only_column} />
		<label for="right">right</label>
	</div> -->


<button class="design_toggle_menu" on:click={design_toggle_menu}>≡</button>
{#if design_show_menu}
<div class="menu_list">
	<button on:click={design_toggle_modal}>{design_words["select_language"][design_lang]}</button>

	{#if design_show_modal}
    <div class="modal">
        <div class="modal-content">
            <button class="close" on:click={design_toggle_modal}>&times;</button>
            <h2>{design_words["select_language"][design_lang]}</h2>
            <div>
                <input type="radio" id="en" name="design_lang" value="en" bind:group={design_lang} />
                <label for="en">🇺🇸 English</label>
                <input type="radio" id="ja" name="design_lang" value="ja" bind:group={design_lang} />
                <label for="ja">🇯🇵 日本語</label>
                <input type="radio" id="zh" name="design_lang" value="zh" bind:group={design_lang} />
                <label for="zh">🇨🇳🇹🇼 中文</label>
                <input type="radio" id="es" name="design_lang" value="es" bind:group={design_lang} />
                <label for="es">🇪🇸 Español</label>
            </div>
        </div>
    </div>
	{/if}

	<!-- sort_kindとsort_orderを変更するボタン -->
	<div>
		<select bind:value={sort_kind_and_order.kind}>
			{#each sort_kind as kind}
				<option value={kind}>{kind}</option>
			{/each}
		</select>
		<select bind:value={sort_kind_and_order.order}>
			{#each ["desc", "asc"] as order}
				<option value={order}>{order}</option>
			{/each}
		</select>
		<button on:click={sorter}>{design_words["sort"][design_lang]}</button>
	</div>

	<div class="version">v1.2.3</div>


	<div>{design_words["auth_login_result"][design_lang]}: <span>{auth_login_result}</span></div>
	{#if auth_uid === ''}
	<div>auth_google_login: <button on:click={auth_google_login}>auth_google_login</button></div>
	{/if}
	{#if auth_uid !== ''}
	<div><button on:click={auth_sign_out}>{design_words["auth_sign_out"][design_lang]}</button></div>
	{/if}


	{#if test_mode}
	<div>auth_uid: {auth_uid}</div>
	<button on:click={test_run_boundary_tests}>test_run_boundary_tests</button>
	<button on:click={init_and_sample_insert}>init_and_sample_insert</button>
	<button on:click={fetch_init_db}>init_db</button>
	<button on:click={fetch_get_all_descs_and_tags}>get_all_descs_and_tags</button>
	{/if}
</div>
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
			<button class="edit_button {design_is_hidden ? 'hidden_when_scroll' : ''}" on:click={() => design_only_column = "right"}>
				<span class="material-icons">edit</span>
				{design_words["right"][design_lang]}
			</button>

			<div class="tabs">
			{#each Object.keys(web_data) as tab}
				{#if tab !== "all_tags"}
					<button on:click={() => design_active_tab = tab} class:active={design_active_tab === tab}>
						{#if tab === "all_descs"}
						<div class="material-icons">home</div>
						{/if}
						{#if tab === "any_user_new_all_descs_with_tags"}
						<div class="material-icons">person</div>
						{/if}
						{#if tab === "filtered_all_descs"}
						<div class="material-icons">filter</div>
						{/if}
						{design_words[tab] ? design_words[tab][design_lang] : tab}
					</button>





				{/if}
			{/each}
				
			</div>

			<div class="tab-content">
			{#each Object.entries(web_data) as [key, value]}
			{#if key !== "all_tags"}
			{#if design_active_tab !== "all_tags" && design_active_tab === key}
				<div class={key}>
<!-- <h1>{design_words[key][design_lang]}</h1> -->
					{#if key === "filtered_all_descs"}
					all_tags: 
					<div class="parent_tags">
					{#each all_tags as tag}
						<!-- <button class="tag" on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button> -->
						<button class="tag" on:click={() => filtering_by_tag(tag.name)}>{tag.name}</button>
					{/each}
					</div>
					<div class="each_desc_border"></div>



						<button on:click={clear_filtered_all_descs}>{design_words["clear_filtered_all_descs"][design_lang]}</button>
						{#each filter_tag_name_ary as tag_name}
							<div class="parent_tags">
							{#each all_tags as tag}
								<!-- {#if tag.id === tag_id} -->
								{#if tag.name === tag_name}
									<button class="tag" on:click={() => remove_filter_tag_name(tag.name)}>{tag.name}</button>
								{/if}
							{/each}
							</div>
						{/each}
					{/if}
						{#each value as desc}
							<div>
<p class="title break_word_title">{desc.title}</p>
								<p class="break_word">
									<button class="button_reset break_word" on:click={design_toggle_description}>
<!-- {desc.description.length > get_chars_per_100vw(70) && !design_show_full_description ? desc.description.slice(0, get_chars_per_100vw(70)) + '...▼' : desc.description} -->
{desc.description.length > 200 && !design_show_full_description ? desc.description.slice(0, 200) + '...▼' : desc.description}
									</button>
								</p>
								{#if desc.tags}
								<div class="desc_tags">
								{#each desc.tags as tag}
									<!-- <button class="tag" on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button> -->
									<button class="tag" on:click={() => filtering_by_tag(tag.name)}>{tag.name}</button>
								{/each}
								</div>
								{/if}
							</div>
							<!-- <p id={desc.id} class="id_and_set_delete">
								<button class="id button_reset" on:click={() => copy_link(desc.id)}>id: {desc.id}</button>
								{#if key === "any_user_new_all_descs_with_tags" && auth_uid}
								<button class="set_desc_data" on:click={() => set_desc_data(desc.id)}>{design_words["set_desc_data"][design_lang]}</button>
								<button class="fetch_delete_desc" on:click={() => fetch_delete_desc(desc.id)}>{design_words["delete_desc"][design_lang]}</button>
								{/if}
							</p>
							<div class="each_desc_border"></div> -->
							<div class="each_desc_border">
								<p id={desc.id} class="id_and_set_delete">
									<button class="id button_reset" on:click={() => copy_link(desc.id)}>id: {desc.id}</button>
									{#if key === "any_user_new_all_descs_with_tags" && auth_uid}
										<button class="set_desc_data" on:click={() => set_desc_data(desc.id)}>{design_words["set_desc_data"][design_lang]}</button>
										<button class="fetch_delete_desc" on:click={() => fetch_delete_desc(desc.id)}>{design_words["delete_desc"][design_lang]}</button>
									{/if}
								</p>
							</div>
						{/each}
				</div>
			{/if}
			{/if}
				{#if design_active_tab ===  "all_tags" && key === "all_tags"}
				<div class="web_data_tags">
					<h1>{design_words["web_data_tags"][design_lang]}</h1>
					{#if web_data.all_tags}
					<div class="parent_tags">
					{#each all_tags as tag}
						<!-- <button class="tag" on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button> -->
						<button class="tag" on:click={() => filtering_by_tag(tag.name)}>{tag.name}</button>
					{/each}
					</div>
					{/if}
				</div>
				{/if}

			{/each}


				
			</div>








		</div>
	</div>

	<div class="right_column">
		<h1>{design_words["web_data_edit"][design_lang]}</h1>
		<button class="list_button" on:click={() => design_only_column = "left"}>{design_words["left"][design_lang]}</button>

		{#if auth_uid !== ''}
		<!-- desc_idがnullの時は非表示 -->
		{#if desc_id !== null}
		<p>id: {desc_id}</p>
		{/if}
		<button on:click={() => clear_title_description_tags({with_confirm: true})}>{design_words["clear_title_description_tags"][design_lang]}</button>
		<div>title: </div>
		<textarea class="title" bind:value={title} minlength="1" maxlength="100" required placeholder="1_100"></textarea>
		<div>description: </div>
		<textarea class="description" bind:value={description} minlength="1" maxlength="1000" required placeholder="1_1000"></textarea>
		<div>
		{#each new_tags_ary as tag}
			<button on:click={() => new_tags_ary = new_tags_ary.filter(t => t.id !== tag.id)}>{tag.name}</button>
		{/each}
		</div>

		<label for="my_all_tags">{design_words["tag"][design_lang]}</label>
		<input list="all_tags" id="my_all_tags" name="my_all_tags" bind:value={new_tag} minlength="1" maxlength="10" required placeholder="1_10"/>
		<datalist id="all_tags">
		{#each all_tags as tag}
			<option value={tag.name} />
		{/each}
		</datalist>
		<button on:click={() => add_tag_to_desc(desc_id, new_tag)}>{design_words["add_tag_to_desc"][design_lang]}</button>
		{#if errors.length > 0}
		<h2>{design_words["errors"][design_lang]}</h2>

		{#each errors as error}
			<p>{error}</p>
		{/each}
		{/if}

		{#if desc_id === null}
		<button on:click={fetch_insert_desc} class="fetch_insert_desc_button">{design_words["insert_desc"][design_lang]}</button>
		{/if}
		{#if desc_id !== null}
		<!-- desc_idがnullならupdate -->
		 <!-- fetch_update_desc -->
		<button on:click={fetch_update_desc} class="fetch_update_desc_button">{design_words["update_desc"][design_lang]}</button>
		{/if}


		{/if}
	</div>
</div>


</div>