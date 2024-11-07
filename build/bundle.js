var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function r(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function s(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function g(){return u(" ")}function h(){return u("")}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){t.value=null==e?"":e}let v;function y(t){v=t}function b(t){(function(){if(!v)throw new Error("Function called outside component initialization");return v})().$$.on_mount.push(t)}const T=[],$=[];let w=[];const x=[],D=Promise.resolve();let C=!1;function E(t){w.push(t)}const k=new Set;let S=0;function O(){if(0!==S)return;const t=v;do{try{for(;S<T.length;){const t=T[S];S++,y(t),N(t.$$)}}catch(t){throw T.length=0,S=0,t}for(y(null),T.length=0,S=0;$.length;)$.pop()();for(let t=0;t<w.length;t+=1){const e=w[t];k.has(e)||(k.add(e),e())}w.length=0}while(T.length);for(;x.length;)x.pop()();C=!1,k.clear(),y(t)}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const j=new Set;function I(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];w.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),w=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function A(t,e){-1===t.$$.dirty[0]&&(T.push(t),C||(C=!0,D.then(O)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(a,l,c,d,s,u,g,h=[-1]){const f=v;y(a);const p=a.$$={fragment:null,ctx:[],props:u,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(f?f.$$.context:[])),callbacks:n(),dirty:h,skip_bound:!1,root:l.target||f.$$.root};g&&g(p.root);let _=!1;if(p.ctx=c?c(a,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),_&&A(a,t)),e})):[],p.update(),_=!0,o(p.before_update),p.fragment=!!d&&d(p.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);p.fragment&&p.fragment.l(t),t.forEach(r)}else p.fragment&&p.fragment.c();l.intro&&((m=a.$$.fragment)&&m.i&&(j.delete(m),m.i(b))),function(t,n,a,l){const{fragment:c,after_update:r}=t.$$;c&&c.m(n,a),l||E((()=>{const n=t.$$.on_mount.map(e).filter(i);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),r.forEach(E)}(a,l.target,l.anchor,l.customElement),O()}var m,b;y(f)}class V{$destroy(){I(this,1),this.$destroy=t}$on(e,n){if(!i(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const o=t.slice();return o[45]=e[n],o}function J(t,e,n){const o=t.slice();return o[45]=e[n],o}function L(t,e,n){const o=t.slice();return o[50]=e[n],o}function q(t,e,n){const o=t.slice();return o[45]=e[n],o}function z(t,e,n){const o=t.slice();return o[55]=e[n],o}function B(t,e,n){const o=t.slice();return o[45]=e[n],o}function G(t,e,n){const o=t.slice();return o[55]=e[n],o}function U(t,e,n){const o=t.slice();return o[45]=e[n],o}function K(t,e,n){const o=t.slice();return o[50]=e[n],o}function M(e){let n,o,i,a,d;return{c(){n=s("div"),o=u("auth_google_login: "),i=s("button"),i.textContent="auth_google_login"},m(t,r){c(t,n,r),l(n,o),l(n,i),a||(d=f(i,"click",e[19]),a=!0)},p:t,d(t){t&&r(n),a=!1,d()}}}function Y(e){let n,o,i,a,d;return{c(){n=s("div"),o=u("auth_sign_out: "),i=s("button"),i.textContent="auth_sign_out"},m(t,r){c(t,n,r),l(n,o),l(n,i),a||(d=f(i,"click",e[20]),a=!0)},p:t,d(t){t&&r(n),a=!1,d()}}}function F(t){let e,n,o,i=t[6],a=[];for(let e=0;e<i.length;e+=1)a[e]=H(K(t,i,e));return{c(){e=s("p"),e.textContent="Errors:",n=g();for(let t=0;t<a.length;t+=1)a[t].c();o=h()},m(t,i){c(t,e,i),c(t,n,i);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,i);c(t,o,i)},p(t,e){if(64&e[0]){let n;for(i=t[6],n=0;n<i.length;n+=1){const l=K(t,i,n);a[n]?a[n].p(l,e):(a[n]=H(l),a[n].c(),a[n].m(o.parentNode,o))}for(;n<a.length;n+=1)a[n].d(1);a.length=i.length}},d(t){t&&r(e),t&&r(n),d(a,t),t&&r(o)}}}function H(t){let e,n,o=t[50]+"";return{c(){e=s("div"),n=u(o)},m(t,o){c(t,e,o),l(e,n)},p(t,e){64&e[0]&&o!==(o=t[50]+"")&&_(n,o)},d(t){t&&r(e)}}}function Z(t){let e,n=t[9],o=[];for(let e=0;e<n.length;e+=1)o[e]=R(G(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);c(t,e,n)},p(t,i){if(397824&i[0]){let a;for(n=t[9],a=0;a<n.length;a+=1){const l=G(t,n,a);o[a]?o[a].p(l,i):(o[a]=R(l),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){d(o,t),t&&r(e)}}}function Q(t){let e,n,o,i,a,d,h,m,v,y,b,T,$,w,x,D,C=t[45].id+"",E=t[45].desc_id+"",k=t[45].name+"";function S(){return t[24](t[45])}return{c(){e=s("div"),n=s("p"),o=u("id: "),i=u(C),a=g(),d=s("p"),h=u("desc_id: "),m=u(E),v=g(),y=s("p"),b=u("tag.name: "),T=u(k),$=g(),w=s("button"),w.textContent="delete_desc_tag",p(e,"class","desc_tag svelte-id7tb1")},m(t,r){c(t,e,r),l(e,n),l(n,o),l(n,i),l(e,a),l(e,d),l(d,h),l(d,m),l(e,v),l(e,y),l(y,b),l(y,T),l(e,$),l(e,w),x||(D=f(w,"click",S),x=!0)},p(e,n){t=e,512&n[0]&&C!==(C=t[45].id+"")&&_(i,C),512&n[0]&&E!==(E=t[45].desc_id+"")&&_(m,E),512&n[0]&&k!==(k=t[45].name+"")&&_(T,k)},d(t){t&&r(e),x=!1,D()}}}function R(t){let e,n,i,a,h,p,m,v,y,b,T,$,w,x,D,C,E,k,S,O,N,j,I,A,P,V,W,J=t[55].id+"",L=t[55].auth_uid.slice(0,10)+"",q=t[55].title+"",z=t[55].description+"";function B(){return t[22](t[55])}function G(){return t[23](t[55])}let K=t[55].tags,M=[];for(let e=0;e<K.length;e+=1)M[e]=Q(U(t,K,e));return{c(){e=s("div"),n=s("p"),i=u("id: "),a=u(J),h=g(),p=s("button"),p.textContent="set_desc_data",m=g(),v=s("button"),v.textContent="delete_desc",y=g(),b=s("p"),T=u("auth_uid: "),$=u(L),w=u("..."),x=g(),D=s("p"),C=u("title: "),E=u(q),k=g(),S=s("p"),O=u("description: "),N=u(z),j=g(),I=s("div"),I.textContent="tags:",A=g();for(let t=0;t<M.length;t+=1)M[t].c();P=g()},m(t,o){c(t,e,o),l(e,n),l(n,i),l(n,a),l(e,h),l(e,p),l(e,m),l(e,v),l(e,y),l(e,b),l(b,T),l(b,$),l(b,w),l(e,x),l(e,D),l(D,C),l(D,E),l(e,k),l(e,S),l(S,O),l(S,N),l(e,j),l(e,I),l(e,A);for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(e,null);l(e,P),V||(W=[f(p,"click",B),f(v,"click",G)],V=!0)},p(n,o){if(t=n,512&o[0]&&J!==(J=t[55].id+"")&&_(a,J),512&o[0]&&L!==(L=t[55].auth_uid.slice(0,10)+"")&&_($,L),512&o[0]&&q!==(q=t[55].title+"")&&_(E,q),512&o[0]&&z!==(z=t[55].description+"")&&_(N,z),262656&o[0]){let n;for(K=t[55].tags,n=0;n<K.length;n+=1){const i=U(t,K,n);M[n]?M[n].p(i,o):(M[n]=Q(i),M[n].c(),M[n].m(e,P))}for(;n<M.length;n+=1)M[n].d(1);M.length=K.length}},d(t){t&&r(e),d(M,t),V=!1,o(W)}}}function X(t){let e,n=t[8].allDescs,o=[];for(let e=0;e<n.length;e+=1)o[e]=et(z(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);c(t,e,n)},p(t,i){if(397568&i[0]){let a;for(n=t[8].allDescs,a=0;a<n.length;a+=1){const l=z(t,n,a);o[a]?o[a].p(l,i):(o[a]=et(l),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){d(o,t),t&&r(e)}}}function tt(t){let e,n,o,i,a,d,h,m,v,y,b,T,$,w,x,D,C=t[45].id+"",E=t[45].desc_id+"",k=t[45].name+"";function S(){return t[27](t[45])}return{c(){e=s("div"),n=s("p"),o=u("id: "),i=u(C),a=g(),d=s("p"),h=u("desc_id: "),m=u(E),v=g(),y=s("p"),b=u("tag.name: "),T=u(k),$=g(),w=s("button"),w.textContent="delete_desc_tag",p(e,"class","desc_tag svelte-id7tb1")},m(t,r){c(t,e,r),l(e,n),l(n,o),l(n,i),l(e,a),l(e,d),l(d,h),l(d,m),l(e,v),l(e,y),l(y,b),l(y,T),l(e,$),l(e,w),x||(D=f(w,"click",S),x=!0)},p(e,n){t=e,256&n[0]&&C!==(C=t[45].id+"")&&_(i,C),256&n[0]&&E!==(E=t[45].desc_id+"")&&_(m,E),256&n[0]&&k!==(k=t[45].name+"")&&_(T,k)},d(t){t&&r(e),x=!1,D()}}}function et(t){let e,n,i,a,h,p,m,v,y,b,T,$,w,x,D,C,E,k,S,O,N,j,I,A,P,V,W,J=t[55].id+"",L=t[55].auth_uid.slice(0,10)+"",q=t[55].title+"",z=t[55].description+"";function G(){return t[25](t[55])}function U(){return t[26](t[55])}let K=t[55].tags,M=[];for(let e=0;e<K.length;e+=1)M[e]=tt(B(t,K,e));return{c(){e=s("div"),n=s("p"),i=u("id: "),a=u(J),h=g(),p=s("button"),p.textContent="set_desc_data",m=g(),v=s("button"),v.textContent="delete_desc",y=g(),b=s("p"),T=u("auth_uid: "),$=u(L),w=u("..."),x=g(),D=s("p"),C=u("title: "),E=u(q),k=g(),S=s("p"),O=u("description: "),N=u(z),j=g(),I=s("div"),I.textContent="tags:",A=g();for(let t=0;t<M.length;t+=1)M[t].c();P=g()},m(t,o){c(t,e,o),l(e,n),l(n,i),l(n,a),l(e,h),l(e,p),l(e,m),l(e,v),l(e,y),l(e,b),l(b,T),l(b,$),l(b,w),l(e,x),l(e,D),l(D,C),l(D,E),l(e,k),l(e,S),l(S,O),l(S,N),l(e,j),l(e,I),l(e,A);for(let t=0;t<M.length;t+=1)M[t]&&M[t].m(e,null);l(e,P),V||(W=[f(p,"click",G),f(v,"click",U)],V=!0)},p(n,o){if(t=n,256&o[0]&&J!==(J=t[55].id+"")&&_(a,J),256&o[0]&&L!==(L=t[55].auth_uid.slice(0,10)+"")&&_($,L),256&o[0]&&q!==(q=t[55].title+"")&&_(E,q),256&o[0]&&z!==(z=t[55].description+"")&&_(N,z),262400&o[0]){let n;for(K=t[55].tags,n=0;n<K.length;n+=1){const i=B(t,K,n);M[n]?M[n].p(i,o):(M[n]=tt(i),M[n].c(),M[n].m(e,P))}for(;n<M.length;n+=1)M[n].d(1);M.length=K.length}},d(t){t&&r(e),d(M,t),V=!1,o(W)}}}function nt(t){let e,n=t[8].allTags,o=[];for(let e=0;e<n.length;e+=1)o[e]=ot(q(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);c(t,e,n)},p(t,i){if(256&i[0]){let a;for(n=t[8].allTags,a=0;a<n.length;a+=1){const l=q(t,n,a);o[a]?o[a].p(l,i):(o[a]=ot(l),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=n.length}},d(t){d(o,t),t&&r(e)}}}function ot(t){let e,n,o,i,a,d,h,f,p,m=t[45].id+"",v=t[45].name+"";return{c(){e=s("div"),n=s("p"),o=u("id: "),i=u(m),a=g(),d=s("p"),h=u("tag.name: "),f=u(v),p=g()},m(t,r){c(t,e,r),l(e,n),l(n,o),l(n,i),l(e,a),l(e,d),l(d,h),l(d,f),l(e,p)},p(t,e){256&e[0]&&m!==(m=t[45].id+"")&&_(i,m),256&e[0]&&v!==(v=t[45].name+"")&&_(f,v)},d(t){t&&r(e)}}}function it(t){let e,n,o,i=t[6],a=[];for(let e=0;e<i.length;e+=1)a[e]=at(L(t,i,e));return{c(){e=s("h2"),e.textContent="errors",n=g();for(let t=0;t<a.length;t+=1)a[t].c();o=h()},m(t,i){c(t,e,i),c(t,n,i);for(let e=0;e<a.length;e+=1)a[e]&&a[e].m(t,i);c(t,o,i)},p(t,e){if(64&e[0]){let n;for(i=t[6],n=0;n<i.length;n+=1){const l=L(t,i,n);a[n]?a[n].p(l,e):(a[n]=at(l),a[n].c(),a[n].m(o.parentNode,o))}for(;n<a.length;n+=1)a[n].d(1);a.length=i.length}},d(t){t&&r(e),t&&r(n),d(a,t),t&&r(o)}}}function at(t){let e,n,o=t[50]+"";return{c(){e=s("p"),n=u(o)},m(t,o){c(t,e,o),l(e,n)},p(t,e){64&e[0]&&o!==(o=t[50]+"")&&_(n,o)},d(t){t&&r(e)}}}function lt(t){let e,n,i,a,h,v,y,b,T,$,w,x,D,C,E,k,S,O,N,j,I,A,P,V,L,q,z,B,G,U,K,M=t[10].slice(0,10)+"",Y=t[5],F=[];for(let e=0;e<Y.length;e+=1)F[e]=ct(J(t,Y,e));let H=t[1],Z=[];for(let e=0;e<H.length;e+=1)Z[e]=rt(W(t,H,e));return{c(){e=s("button"),e.textContent="update_desc",n=u("\n\t\t\n\t\t\n\t\t\n\t\t \n\t\tauth_uid: "),i=s("p"),a=u(M),h=u("..."),v=g(),y=s("p"),b=u("id: "),T=u(t[2]),$=g(),w=s("div"),w.textContent="title:",x=g(),D=s("textarea"),C=g(),E=s("div"),E.textContent="description:",k=g(),S=s("textarea"),O=g(),N=s("div");for(let t=0;t<F.length;t+=1)F[t].c();j=g(),I=s("label"),I.textContent="tag",A=g(),P=s("input"),V=g(),L=s("datalist");for(let t=0;t<Z.length;t+=1)Z[t].c();q=g(),z=s("button"),z.textContent="add_tag_to_desc",B=g(),G=s("button"),G.textContent="insert_desc",p(D,"class","title svelte-id7tb1"),p(D,"minlength","1"),p(D,"maxlength","100"),D.required=!0,p(D,"placeholder","1_100"),p(S,"class","description svelte-id7tb1"),p(S,"minlength","1"),p(S,"maxlength","1000"),S.required=!0,p(S,"placeholder","1_1000"),p(I,"for","my_all_tags"),p(P,"list","all_tags"),p(P,"id","my_all_tags"),p(P,"name","my_all_tags"),p(P,"minlength","1"),p(P,"maxlength","10"),P.required=!0,p(P,"placeholder","1_10"),p(L,"id","all_tags"),p(G,"class","fetch_insert_desc_button svelte-id7tb1")},m(o,r){c(o,e,r),c(o,n,r),c(o,i,r),l(i,a),l(i,h),c(o,v,r),c(o,y,r),l(y,b),l(y,T),c(o,$,r),c(o,w,r),c(o,x,r),c(o,D,r),m(D,t[3]),c(o,C,r),c(o,E,r),c(o,k,r),c(o,S,r),m(S,t[4]),c(o,O,r),c(o,N,r);for(let t=0;t<F.length;t+=1)F[t]&&F[t].m(N,null);c(o,j,r),c(o,I,r),c(o,A,r),c(o,P,r),m(P,t[0]),c(o,V,r),c(o,L,r);for(let t=0;t<Z.length;t+=1)Z[t]&&Z[t].m(L,null);c(o,q,r),c(o,z,r),c(o,B,r),c(o,G,r),U||(K=[f(e,"click",t[16]),f(D,"input",t[28]),f(S,"input",t[29]),f(P,"input",t[31]),f(z,"click",t[32]),f(G,"click",t[14])],U=!0)},p(t,e){if(1024&e[0]&&M!==(M=t[10].slice(0,10)+"")&&_(a,M),4&e[0]&&_(T,t[2]),8&e[0]&&m(D,t[3]),16&e[0]&&m(S,t[4]),32&e[0]){let n;for(Y=t[5],n=0;n<Y.length;n+=1){const o=J(t,Y,n);F[n]?F[n].p(o,e):(F[n]=ct(o),F[n].c(),F[n].m(N,null))}for(;n<F.length;n+=1)F[n].d(1);F.length=Y.length}if(1&e[0]&&P.value!==t[0]&&m(P,t[0]),2&e[0]){let n;for(H=t[1],n=0;n<H.length;n+=1){const o=W(t,H,n);Z[n]?Z[n].p(o,e):(Z[n]=rt(o),Z[n].c(),Z[n].m(L,null))}for(;n<Z.length;n+=1)Z[n].d(1);Z.length=H.length}},d(t){t&&r(e),t&&r(n),t&&r(i),t&&r(v),t&&r(y),t&&r($),t&&r(w),t&&r(x),t&&r(D),t&&r(C),t&&r(E),t&&r(k),t&&r(S),t&&r(O),t&&r(N),d(F,t),t&&r(j),t&&r(I),t&&r(A),t&&r(P),t&&r(V),t&&r(L),d(Z,t),t&&r(q),t&&r(z),t&&r(B),t&&r(G),U=!1,o(K)}}}function ct(t){let e,n,o,i,a=t[45].name+"";function d(){return t[30](t[45])}return{c(){e=s("button"),n=u(a)},m(t,a){c(t,e,a),l(e,n),o||(i=f(e,"click",d),o=!0)},p(e,o){t=e,32&o[0]&&a!==(a=t[45].name+"")&&_(n,a)},d(t){t&&r(e),o=!1,i()}}}function rt(t){let e,n;return{c(){e=s("option"),e.__value=n=t[45].name,e.value=e.__value},m(t,n){c(t,e,n)},p(t,o){2&o[0]&&n!==(n=t[45].name)&&(e.__value=n,e.value=e.__value)},d(t){t&&r(e)}}}function dt(e){let n,i,a,d,h,m,v,y,b,T,$,w,x,D,C,E,k,S,O,N,j,I,A,P,V,W,J,L,q,z,B,G,U,K,H,Q,R,tt,et,ot,at,ct,rt,dt,st,gt=""===e[10]&&M(e),ht=""!==e[10]&&Y(e),ft=e[6]>0&&F(e),pt=e[9].length>0&&Z(e),_t=e[8].allDescs&&X(e),mt=e[8].allTags&&nt(e),vt=e[6].length>0&&it(e),yt=""!==e[10]&&lt(e);return{c(){n=s("div"),i=s("div"),a=s("div"),d=s("div"),d.textContent="v1.0.1",h=g(),m=s("div"),v=u("auth_uid: "),y=u(e[10]),b=g(),T=s("div"),$=u("auth_login_result: "),w=s("span"),x=u(e[7]),D=g(),gt&&gt.c(),C=g(),ht&&ht.c(),E=g(),k=s("button"),k.textContent="runBoundaryTests",S=g(),O=s("button"),O.textContent="init_and_sample_insert",N=g(),j=s("button"),j.textContent="init_db",I=g(),A=s("button"),A.textContent="get_all_descs_and_tags",P=g(),V=s("div"),W=s("div"),J=s("div"),ft&&ft.c(),L=g(),q=s("div"),z=s("h1"),z.textContent="Your Web Data Descs",B=g(),pt&&pt.c(),G=g(),U=s("h1"),U.textContent="Web Data Descs",K=g(),_t&&_t.c(),H=g(),Q=s("div"),R=s("h1"),R.textContent="Web Data Tags",tt=g(),mt&&mt.c(),et=g(),ot=s("div"),vt&&vt.c(),at=g(),ct=s("h1"),ct.textContent="Web Data Edit",rt=g(),yt&&yt.c(),p(d,"class","version"),p(i,"class","header svelte-id7tb1"),p(J,"class","console"),p(q,"class","list"),p(Q,"class","list2"),p(W,"class","left-column server_side svelte-id7tb1"),p(ot,"class","right-column svelte-id7tb1"),p(V,"class","content svelte-id7tb1"),p(n,"class","container svelte-id7tb1")},m(t,o){c(t,n,o),l(n,i),l(i,a),l(a,d),l(a,h),l(a,m),l(m,v),l(m,y),l(a,b),l(a,T),l(T,$),l(T,w),l(w,x),l(a,D),gt&&gt.m(a,null),l(a,C),ht&&ht.m(a,null),l(i,E),l(i,k),l(i,S),l(i,O),l(i,N),l(i,j),l(i,I),l(i,A),l(n,P),l(n,V),l(V,W),l(W,J),ft&&ft.m(J,null),l(W,L),l(W,q),l(q,z),l(q,B),pt&&pt.m(q,null),l(q,G),l(q,U),l(q,K),_t&&_t.m(q,null),l(W,H),l(W,Q),l(Q,R),l(Q,tt),mt&&mt.m(Q,null),l(V,et),l(V,ot),vt&&vt.m(ot,null),l(ot,at),l(ot,ct),l(ot,rt),yt&&yt.m(ot,null),dt||(st=[f(k,"click",e[21]),f(O,"click",e[13]),f(j,"click",ut),f(A,"click",e[15])],dt=!0)},p(t,e){1024&e[0]&&_(y,t[10]),128&e[0]&&_(x,t[7]),""===t[10]?gt?gt.p(t,e):(gt=M(t),gt.c(),gt.m(a,C)):gt&&(gt.d(1),gt=null),""!==t[10]?ht?ht.p(t,e):(ht=Y(t),ht.c(),ht.m(a,null)):ht&&(ht.d(1),ht=null),t[6]>0?ft?ft.p(t,e):(ft=F(t),ft.c(),ft.m(J,null)):ft&&(ft.d(1),ft=null),t[9].length>0?pt?pt.p(t,e):(pt=Z(t),pt.c(),pt.m(q,G)):pt&&(pt.d(1),pt=null),t[8].allDescs?_t?_t.p(t,e):(_t=X(t),_t.c(),_t.m(q,null)):_t&&(_t.d(1),_t=null),t[8].allTags?mt?mt.p(t,e):(mt=nt(t),mt.c(),mt.m(Q,null)):mt&&(mt.d(1),mt=null),t[6].length>0?vt?vt.p(t,e):(vt=it(t),vt.c(),vt.m(ot,at)):vt&&(vt.d(1),vt=null),""!==t[10]?yt?yt.p(t,e):(yt=lt(t),yt.c(),yt.m(ot,null)):yt&&(yt.d(1),yt=null)},i:t,o:t,d(t){t&&r(n),gt&&gt.d(),ht&&ht.d(),ft&&ft.d(),pt&&pt.d(),_t&&_t.d(),mt&&mt.d(),vt&&vt.d(),yt&&yt.d(),dt=!1,o(st)}}}let st="http://localhost:8000";async function ut(){try{const t=await fetch(st+"/init_db",{method:"POST",headers:{"Content-Type":"application/json"}}),e=await t.json();console.log(e)}catch(t){console.error("Error:",t)}}function gt(t,e,n){let o="",i=[],a=null,l=(new Date).toISOString(),c=(new Date).toISOString(),r="",d="",s=[],u=[],g="Not logged in",h=[],f=[],p="";function _(t,e){try{const a=i.find((t=>t.name===e));if(a){a.desc_id=t;const e=s.some((t=>t.id==t.id));e||n(5,s=[...s,a]),n(0,o="")}else{const o={id:i.length+1,name:e,desc_id:t,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString()};n(1,i=[...i,o]),n(5,s=[...s,o])}}catch(t){console.error("Error:",t)}}function m(t){try{const e=h.allDescs.find((e=>e.id===t));console.log(e.tags),e?(n(10,p=e.auth_uid),n(2,a=e.id),l=e.created_at,c=e.updated_at,n(3,r=e.title),n(4,d=e.description),n(5,s=e.tags)):console.error(`No description found with id: ${t}`)}catch(t){console.error("Error:",t)}}const v={validateAuthUid:t=>/^[a-zA-Z0-9_-]+$/.test(t),validateDescId:t=>(console.log("validateDescId",t),Number.isInteger(t)&&t>0),validateISODate:t=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(t),validateTitle:t=>(console.log("validateTitle",t),"string"==typeof t&&t.length>=1&&t.length<=100),validateDescription:t=>(console.log("validateDescription",t),"string"==typeof t&&t.length>=1&&t.length<=1e3),validateTagName:t=>"string"==typeof t&&t.length>=1&&t.length<=10,validateData(t){const{auth_uid:e,desc_id:n,created_at:o,updated_at:i,title:a,description:l,tags:c}=t,r=this.validateAuthUid(e);this.validateDescId(n);return{isAuthUidValid:r,isTitleValid:this.validateTitle(a),isDescriptionValid:this.validateDescription(l),areTagsValid:c.every((t=>this.validateTagName(t.name)))}}};function y(){console.log("auth_uid",p,"desc_id",a,"title",r,"description",d,"tags",s);const t={auth_uid:p,desc_id:a,title:r,description:d,tags:s};n(6,u=[]);for(const[e,n]of Object.entries(v.validateData(t)))if(n||u.push(e),"tags"===e)for(const[t,e]of n.entries())for(const[n,o]of Object.entries(v.validateData(e)))o||u.push(`tags[${t}].${n}`);else"auth_uid"===e&&v.validateAuthUid(p),"desc_id"===e&&v.validateDescId(a),"title"===e&&v.validateTitle(r),"description"===e&&v.validateDescription(d);return!(u.length>0)||(console.log(u),!1)}async function T(){try{if(!y())throw new Error("Validation failed");const t=await fetch("http://localhost:8000/insert_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:p,title:r,description:d,tags:s})}),e=await t.json();console.log(e)}catch(t){}}async function $(){try{const t=await fetch(st+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:p})}),e=await t.json();n(8,h=e),n(1,i=e.allTags),console.log(1),h.any_user_new_allDescs_with_tags.length>0&&(console.log(2),console.log("any_user_new_allDescs_with_tags"),console.log(e.any_user_new_allDescs_with_tags),n(9,f=e.any_user_new_allDescs_with_tags)),console.log(e)}catch(t){console.error("Error:",t)}}async function w(t){try{const e=await fetch(st+"/delete_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,auth_uid:p})}),n=await e.json();console.log(n)}catch(t){console.error("Error:",t)}}async function x(t,e){try{console.log(t,e,p);const n=await fetch(st+"/delete_desc_tag",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,desc_id:e,auth_uid:p})}),o=await n.json();console.log(o)}catch(t){console.error("Error:",t)}}firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const D=new firebase.auth.GoogleAuthProvider;const C=[{auth_uid:"user1",desc_id:1,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo1",description:"bar1",tags:[{desc_id:1,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:2,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo2",description:"bar2",tags:[{desc_id:2,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:2,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user2",desc_id:3,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo3",description:"bar3",tags:[{desc_id:3,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:3,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}],E=[{auth_uid:"user1",desc_id:4,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"a".repeat(100),description:"b".repeat(1e3),tags:[{desc_id:4,id:4,name:"tag4",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:5,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"",description:"",tags:[{desc_id:5,id:5,name:"t".repeat(10),created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}];b((async()=>{await async function(){try{console.log("auth_check_login");const t=await new Promise(((t,e)=>{firebase.auth().onAuthStateChanged(t,e)}));console.log("Current user:",t),t?(n(10,p=t.uid),console.log(1),n(7,g="Logged in")):(console.log(2),n(7,g="Not logged in"),n(10,p=""))}catch(t){console.error("Error during authentication:",t),n(7,g="Authentication failed"),n(10,p="")}}(),await $()}));return(async()=>{})(),[o,i,a,r,d,s,u,g,h,f,p,_,m,async function(){try{for(const t of C)n(10,p=t.auth_uid),n(2,a=t.desc_id),l=t.created_at,c=t.updated_at,n(3,r=t.title),n(4,d=t.description),n(5,s=t.tags),await T()}catch(t){console.error("Error:",t)}},T,$,async function(){try{if(console.log("fetch_update_desc"),console.log(p,a,l,c,r,d,s),!y())throw new Error("Validation failed");const t=await fetch(st+"/update_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:p,desc_id:a,title:r,description:d,tags:s})}),e=await t.json();console.log(e)}catch(t){console.error("Error:",t)}},w,x,async function(){try{console.log("auth_google_login");const t=(await firebase.auth().signInWithPopup(D)).user;console.log(4),n(7,g=`Logged in as: ${t.displayName}`)}catch(t){console.error("Error during Google login:",t),alert("Google login failed. "+t.message)}},async function(){try{console.log(5),await firebase.auth().signOut(),n(7,g="Not logged in"),await async function(){try{const t=await fetch(st+"/",{method:"GET"});n(8,h=await t.json())}catch(t){console.error("Error fetching data:",t)}}()}catch(t){console.error("Error during sign-out:",t),alert("Sign out failed. "+t.message)}},function(){E.forEach((t=>{console.log(v.validateData(t).isTitleValid===t.title.length>=1&&t.title.length<=100),console.log(v.validateData(t).isDescriptionValid===t.description.length>=1&&t.description.length<=1e3),console.log(v.validateData(t).areTagsValid===t.tags.every((t=>t.name.length>=1&&t.name.length<=10)))}))},t=>m(t.id),t=>w(t.id),t=>x(t.id,t.desc_id),t=>m(t.id),t=>w(t.id),t=>x(t.id,t.desc_id),function(){r=this.value,n(3,r)},function(){d=this.value,n(4,d)},t=>n(5,s=s.filter((e=>e.id!==t.id))),function(){o=this.value,n(0,o)},()=>_(a,o)]}return new class extends V{constructor(t){super(),P(this,t,gt,dt,a,{},null,[-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
