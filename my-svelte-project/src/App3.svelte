<script>
    let design_is_hidden = false;
    let design_scroll_timeout;

    function design_handle_scroll() {
        design_is_hidden = true;
        clearTimeout(design_scroll_timeout);
        design_scroll_timeout = setTimeout(() => {
            design_is_hidden = false;
        }, 1000); // スクロールが止まった後に表示するまでの遅延時間（ミリ秒）
    }
window.addEventListener('scroll', design_handle_scroll);
	// all_tagsとFiltered by tagを同じタブ内に表示する
	// id表示をタイトルの右側に表示に位置変更, editボタンとlistボタンをトランジションで表示変化を試す

	let design_active_tab = 'all_descs';
	function design_set_design_active_tab(tab) {
        design_active_tab = tab;

    }


	let design_show_menu = false;

    function design_toggle_menu() {
        design_show_menu = !design_show_menu;
    }
    let design_show_modal = false;
    let design_lang = "en";

    function design_toggle_modal() {
        design_show_modal = !design_show_modal;
    }

let design_only_column = "left";
// let design_only_column = "right";

const web_endpoint = 'https://cotton-concrete-catsup.glitch.me/app8';
// const web_endpoint = 'http://localhost:8000/app8';


// デザイン変える前にモバイル環境で本当に必要な見た目を確認する(そのためにプレリリース)
// デザインをグリッドシステム準拠で変更


// 命名規則(prefix)
// auth => authentication関係の変数と関数
// test => テスト用の変数と関数
// design => デザイン関係の変数と関数
// web => webデータの変数と関数
// fetch => fetch関係の関数


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

	// "left": {ja: "リスト表示", en: "List view", zh: "列表视图", es: "Vista de lista"},
	"left": {ja: "-", en: "-", zh: "-", es: "-"},
	// "right": {ja: "編集表示", en: "Edit view", zh: "编辑视图", es: "Vista de edición"},
	"right": {ja: "+", en: "+", zh: "+", es: "+"},
	// "select_language": {ja: "🇺🇸🇯🇵🇨🇳🇹🇼🇪🇸", en: "🇺🇸🇯🇵🇨🇳🇹🇼🇪🇸", zh: "🇺🇸🇯🇵🇨🇳🇹🇼🇪🇸", es: "🇺🇸🇯🇵🇨🇳🇹🇼🇪🇸"},
	"select_language": {ja: "言語を選択", en: "Select language", zh: "选择语言", es: "Seleccionar idioma"},




	"tab": {ja: "タブ", en: "Tab", zh: "标签", es: "Pestaña"},

}



const sort_kind = ["id","title","description","tags","created_at","updated_at",];
let sort_kind_and_order = {kind: 'id', order: 'desc',};
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
let web_data = 	{
	"all_descs": [],
	"all_tags": [],
	"any_user_new_all_descs_with_tags": [],
	"filtered_all_descs": [],	
};
let other_data = {};
let web_data_with_title = [];
let auth_uid = '';
let design_show_full_description = false;

function clear_title_description_tags({with_confirm = true} = {}) {
	if (with_confirm) {
		if (confirm(design_words["confirm_clear_title_description_tags"][design_lang])) {
		title = ''; description = ''; tags = []; desc_id = null;
		}
	} else {
		title = ''; description = ''; tags = []; desc_id = null;
	}
}
function design_toggle_description() {
	design_show_full_description = !design_show_full_description;
}
function add_tag_to_desc(desc_id, tag_name) {
	try {
// valid
// errorsの中のtagのエラーを削除(design_words["are_tags_valid"]のいずれかが含まれるエラーを削除)
console.log(errors);
errors = errors.filter(error => !error.includes(design_words["are_tags_valid"][design_lang]));
console.log(errors);

		if (!validators.validate_tag_name(tag_name)) {
			// errors.push('Invalid tag name');
			errors.push(design_words["are_tags_valid"][design_lang]);
			return;
		}

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
// right_columnに移動
design_only_column = "right";
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
	// tabをfiltered_all_descsに変更
	design_active_tab = 'filtered_all_descs';

}
async function clear_filtered_all_descs(){
	web_data['filtered_all_descs'] = [];
	filter_tag_id_ary = [];
}
// 指定したidをfilter_tag_id_aryから削除
function remove_filter_tag_id(tag_id) {
	filter_tag_id_ary = filter_tag_id_ary.filter(id => id !== tag_id);
	web_data['filtered_all_descs'] = web_data['filtered_all_descs'].filter(desc => {
		const tag_id_exists = desc.tags.some(tag => filter_tag_id_ary.some(id => id === tag.id));
		return tag_id_exists;
	});
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
		console.log('validate_tag_name', name);
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
        "tags": tags,
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
async function fetch_insert_desc() {
try {
	if(!valid_all()) throw new Error('Validation failed');
	const response = await fetch(web_endpoint+ '/insert_desc', {method: 'POST',headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			auth_uid: auth_uid,
			title: title,
			description: description,
			tags: tags
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

	// dataからall_descs, all_tags, any_user_new_all_descs_with_tags,以外のデータをother_dataに分離
	other_data = Object.fromEntries(Object.entries(data).filter(([key, _]) => key !== 'all_descs' && key !== 'all_tags' && key !== 'any_user_new_all_descs_with_tags'));
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
			tags: tags
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
        /* padding: 5rem; */
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
        background-color: rgb(0,0,0);
        background-color: rgba(0,0,0,0.4);
    }

    .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
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
h1{
	/* width: 50vw; */
}
.break_word {
	/* background-color: lightgray; */
	word-break: break-all;
	word-wrap: break-word;
	overflow-wrap: break-word;
	/* max-width: var(--chars-per-100vw); */
}
.break_word_title {
	word-break: break-all;

    word-wrap: break-word;
    overflow-wrap: break-word;
	/* max-width: var(--chars-per-100vw); */
	/* max-width: 50ch; */
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
	padding: 20px;
}
.header {
	display: flex;
	justify-content: space-between;
	width: 100%;
}
.content {
	margin-top: 3rem;
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
	/* background-color: #4CAF50; */
	/* color: gray; */
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	/* 縦横に線はあって、角の部分に線がない */
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
.any_user_new_all_descs_with_tags {
	order: 3;
}
.web_data_tags {
	order: 1;
}
.edit_button, .list_button {
	position: fixed;
	top: 0rem;
	right: 0rem;
	z-index: 1000;
	/* サイズを縦横5rem 10remに */
	width: 10rem;
	height: 4rem;
}
.edit_button {
	/* bottom: 10rem; */
	z-index: 100;
}
.tabs {
	position: fixed;
	bottom: 10px;
	/* left: 10px; */
	/* 中央に表示 */
	left: 20%;
	z-index: 10;
	/* 左右の区切りのborderを1pxで */
	justify-content: space-around;
	/* 画面幅一杯に */
	width: 60%;

	display: flex;

}
.tabs button {
	/* padding: 0 1rem 0 0; */
	border-right: 1px solid black;
	border-bottom: none;
	font-size: 1.2rem;
	font-weight: bold;
	flex: 1;
	padding: 10px 20px;
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
	margin: 0.4rem;
	background: none;
	border: none;
	padding: 0;
	font: inherit;
	color: inherit;
	cursor: pointer;
	font-size: 16px;
	/* 下線のみ1pxで */
	border-bottom: 1px solid black;
}


    /* 立体 / エンボスのボタンのスタイル */
    .set_desc_data, .fetch_delete_desc {
        /* background-color: #f1f1f1; */
        border-left: 1px solid #f1f1f1;
		border-bottom: 1px solid #f1f1f1;
        border-radius: 5px;
        padding: 0.2rem 0.2rem;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        cursor: pointer;
        transition: box-shadow 0.3s ease;
    }

    .set_desc_data:hover, .fetch_delete_desc:hover {
        box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    }

    .set_desc_data:active, .fetch_delete_desc:active {
        box-shadow: inset 1px 1px 1px rgba(0, 0, 0, 0.2);
    }

    .each_desc_border {
        border-bottom: 1px solid #ccc;
        position: relative;
		/* した方向に1rem margin */
		margin-bottom: 4rem;
    }

	.id_and_set_delete {
		position: absolute;
		right: 0;
		top: -1rem;
		transform: translateY(-50%);
		background-color: white; /* 白背景を追加 */
		padding: 0.5rem; /* パディングを追加して背景がボタンを覆うようにする */
	}

	.id {
		/* 薄いグレイ */
		/* border-bottom: 0.1rem solid #f1f1f1; */
		padding: 10px;
		margin: 0 0;
		font-size: 0.6rem;
		/* font colorを凄く薄いグレイに */
		font: lightgray;
	}
	h1 {
		font-size: 1.2rem;
	}
	.title{
		font-size: 1.2rem;

	}
	.description {
		/* 複数行のテキストを省略記号で省略する */
		overflow: hidden;
		text-overflow: ellipsis;
		/* テキストを折り返す */
		white-space: nowrap;
	}

    .active {
        background-color: #ddd; /* 背景色を灰色に設定 */
    }

	.hidden_when_scroll {
		/* スクロール時に非表示 */
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

	<div class="version">v1.1.9</div>


	<div>{design_words["auth_login_result"][design_lang]}: <span>{auth_login_result}</span></div>
	{#if auth_uid === ''}
	<div>auth_google_login: <button on:click={auth_google_login}>auth_google_login</button></div>
	{/if}
	{#if auth_uid !== ''}
	<div><button on:click={auth_sign_out}>{design_words["auth_sign_out"][design_lang]}</button></div>
	{/if}


	{#if test_mode}
	<div>auth_uid: {auth_uid}</div>
	<button on:click={run_boundary_tests}>run_boundary_tests</button>
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
				{design_words["right"][design_lang]}
			</button>





			<div class="tabs">
			{#each Object.keys(web_data) as tab}
				{#if tab !== "all_tags"}
					<button on:click={() => design_set_design_active_tab(tab)} class:active={design_active_tab === tab}>
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
					all_tags: {#each all_tags as tag}
						<button on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button>
					{/each}
					<div class="each_desc_border"></div>



						<button on:click={clear_filtered_all_descs}>{design_words["clear_filtered_all_descs"][design_lang]}</button>
						{#each filter_tag_id_ary as tag_id}
							{#each all_tags as tag}
								{#if tag.id === tag_id}
									<button on:click={() => remove_filter_tag_id(tag.id)}>{tag.name}</button>
								{/if}
							{/each}
							
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
								{#each desc.tags as tag}
									<button on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button>
								{/each}
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
					{#each web_data.all_tags as tag}
						<button on:click={() => filtering_by_tag(tag.id)}>{tag.name}</button>
					{/each}
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
		{#each tags as tag}
			<button on:click={() => tags = tags.filter(t => t.id !== tag.id)}>{tag.name}</button>
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