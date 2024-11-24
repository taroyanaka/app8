var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function l(t){t.forEach(e)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return null==t?"":t}function o(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function _(t){return document.createTextNode(t)}function f(){return _(" ")}function g(){return _("")}function h(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function y(t,e,n){for(let n=0;n<t.options.length;n+=1){const l=t.options[n];if(l.__value===e)return void(l.selected=!0)}n&&void 0===e||(t.selectedIndex=-1)}function b(t){const e=t.querySelector(":checked");return e&&e.__value}function w(t,e,n){t.classList[n?"add":"remove"](e)}let x;function $(t){x=t}function k(t){(function(){if(!x)throw new Error("Function called outside component initialization");return x})().$$.on_mount.push(t)}const j=[],T=[];let E=[];const z=[],C=Promise.resolve();let N=!1;function O(t){E.push(t)}const S=new Set;let A=0;function I(){if(0!==A)return;const t=x;do{try{for(;A<j.length;){const t=j[A];A++,$(t),P(t.$$)}}catch(t){throw j.length=0,A=0,t}for($(null),j.length=0,A=0;T.length;)T.pop()();for(let t=0;t<E.length;t+=1){const e=E[t];S.has(e)||(S.add(e),e())}E.length=0}while(j.length);for(;z.length;)z.pop()();N=!1,S.clear(),$(t)}function P(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const q=new Set;function L(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];E.forEach((l=>-1===t.indexOf(l)?e.push(l):n.push(l))),n.forEach((t=>t())),E=e}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(j.push(t),N||(N=!0,C.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(i,c,o,r,d,u,_,f=[-1]){const g=x;$(i);const h=i.$$={fragment:null,ctx:[],props:u,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(g?g.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:c.target||g.$$.root};_&&_(h.root);let p=!1;if(h.ctx=o?o(i,c.props||{},((t,e,...n)=>{const l=n.length?n[0]:e;return h.ctx&&d(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),p&&D(i,t)),e})):[],h.update(),p=!0,l(h.before_update),h.fragment=!!r&&r(h.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);h.fragment&&h.fragment.l(t),t.forEach(s)}else h.fragment&&h.fragment.c();c.intro&&((m=i.$$.fragment)&&m.i&&(q.delete(m),m.i(v))),function(t,n,i,c){const{fragment:o,after_update:r}=t.$$;o&&o.m(n,i),c||O((()=>{const n=t.$$.on_mount.map(e).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...n):l(n),t.$$.on_mount=[]})),r.forEach(O)}(i,c.target,c.anchor,c.customElement),I()}var m,v;$(g)}class V{$destroy(){L(this,1),this.$destroy=t}$on(e,n){if(!a(n))return t;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const t=l.indexOf(n);-1!==t&&l.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t,e,n){const l=t.slice();return l[72]=e[n],l}function J(t,e,n){const l=t.slice();return l[75]=e[n],l}function G(t,e,n){const l=t.slice();return l[75]=e[n],l}function K(t,e,n){const l=t.slice();return l[75]=e[n],l}function M(t,e,n){const l=t.slice();return l[82]=e[n][0],l[83]=e[n][1],l}function F(t,e,n){const l=t.slice();return l[86]=e[n],l}function H(t,e,n){const l=t.slice();return l[75]=e[n],l}function U(t,e,n){const l=t.slice();return l[91]=e[n],l}function Y(t,e,n){const l=t.slice();return l[75]=e[n],l}function Z(t,e,n){const l=t.slice();return l[96]=e[n],l}function Q(t,e,n){const l=t.slice();return l[72]=e[n],l}function R(t,e,n){const l=t.slice();return l[101]=e[n],l}function X(t,e,n){const l=t.slice();return l[104]=e[n],l}function tt(t){let e,n,a,i,c,g,v,b,w,x,$,k,j,T,E,z,C,N,S,A,I,P,q,L,D,B=t[21].select_language[t[4]]+"",V=t[21].sort[t[4]]+"",W=t[21].auth_login_result[t[4]]+"",J=t[3]&&et(t),G=t[22],K=[];for(let e=0;e<G.length;e+=1)K[e]=nt(X(t,G,e));let M=["desc","asc"],F=[];for(let e=0;e<2;e+=1)F[e]=lt(R(t,M,e));let H=""===t[16]&&at(t),U=""!==t[16]&&it(t);return{c(){e=u("div"),n=u("button"),a=_(B),i=f(),J&&J.c(),c=f(),g=u("div"),v=u("select");for(let t=0;t<K.length;t+=1)K[t].c();b=f(),w=u("select");for(let t=0;t<2;t+=1)F[t].c();x=f(),$=u("button"),k=_(V),j=f(),T=u("div"),T.textContent="v1.1.4",E=f(),z=u("div"),C=_(W),N=_(": "),S=u("span"),A=_(t[14]),I=f(),H&&H.c(),P=f(),U&&U.c(),q=f(),void 0===t[5].kind&&O((()=>t[44].call(v))),void 0===t[5].order&&O((()=>t[45].call(w))),p(T,"class","version"),p(e,"class","menu_list svelte-1tyxi52")},m(l,s){r(l,e,s),o(e,n),o(n,a),o(e,i),J&&J.m(e,null),o(e,c),o(e,g),o(g,v);for(let t=0;t<K.length;t+=1)K[t]&&K[t].m(v,null);y(v,t[5].kind,!0),o(g,b),o(g,w);for(let t=0;t<2;t+=1)F[t]&&F[t].m(w,null);y(w,t[5].order,!0),o(g,x),o(g,$),o($,k),o(e,j),o(e,T),o(e,E),o(e,z),o(z,C),o(z,N),o(z,S),o(S,A),o(e,I),H&&H.m(e,null),o(e,P),U&&U.m(e,null),o(e,q),L||(D=[h(n,"click",t[20]),h(v,"change",t[44]),h(w,"change",t[45]),h($,"click",t[23])],L=!0)},p(t,n){if(16&n[0]&&B!==(B=t[21].select_language[t[4]]+"")&&m(a,B),t[3]?J?J.p(t,n):(J=et(t),J.c(),J.m(e,c)):J&&(J.d(1),J=null),4194304&n[0]){let e;for(G=t[22],e=0;e<G.length;e+=1){const l=X(t,G,e);K[e]?K[e].p(l,n):(K[e]=nt(l),K[e].c(),K[e].m(v,null))}for(;e<K.length;e+=1)K[e].d(1);K.length=G.length}4194336&n[0]&&y(v,t[5].kind),4194336&n[0]&&y(w,t[5].order),16&n[0]&&V!==(V=t[21].sort[t[4]]+"")&&m(k,V),16&n[0]&&W!==(W=t[21].auth_login_result[t[4]]+"")&&m(C,W),16384&n[0]&&m(A,t[14]),""===t[16]?H?H.p(t,n):(H=at(t),H.c(),H.m(e,P)):H&&(H.d(1),H=null),""!==t[16]?U?U.p(t,n):(U=it(t),U.c(),U.m(e,q)):U&&(U.d(1),U=null)},d(t){t&&s(e),J&&J.d(),d(K,t),d(F,t),H&&H.d(),U&&U.d(),L=!1,l(D)}}}function et(t){let e,n,a,i,c,d,g,v,y,b,w,x,$,k,j,T,E,z,C,N,O,S,A,I,P,q,L=t[21].select_language[t[4]]+"";return I=function(t){let e;return{p(...n){e=n,e.forEach((e=>t.push(e)))},r(){e.forEach((e=>t.splice(t.indexOf(e),1)))}}}(t[40][0]),{c(){e=u("div"),n=u("div"),a=u("button"),a.textContent="×",i=f(),c=u("h2"),d=_(L),g=f(),v=u("div"),y=u("input"),b=f(),w=u("label"),w.textContent="🇺🇸 English",x=f(),$=u("input"),k=f(),j=u("label"),j.textContent="🇯🇵 日本語",T=f(),E=u("input"),z=f(),C=u("label"),C.textContent="🇨🇳🇹🇼 中文",N=f(),O=u("input"),S=f(),A=u("label"),A.textContent="🇪🇸 Español",p(a,"class","close svelte-1tyxi52"),p(y,"type","radio"),p(y,"id","en"),p(y,"name","design_lang"),y.__value="en",y.value=y.__value,p(w,"for","en"),p($,"type","radio"),p($,"id","ja"),p($,"name","design_lang"),$.__value="ja",$.value=$.__value,p(j,"for","ja"),p(E,"type","radio"),p(E,"id","zh"),p(E,"name","design_lang"),E.__value="zh",E.value=E.__value,p(C,"for","zh"),p(O,"type","radio"),p(O,"id","es"),p(O,"name","design_lang"),O.__value="es",O.value=O.__value,p(A,"for","es"),p(n,"class","modal-content svelte-1tyxi52"),p(e,"class","modal svelte-1tyxi52"),I.p(y,$,E,O)},m(l,s){r(l,e,s),o(e,n),o(n,a),o(n,i),o(n,c),o(c,d),o(n,g),o(n,v),o(v,y),y.checked=y.__value===t[4],o(v,b),o(v,w),o(v,x),o(v,$),$.checked=$.__value===t[4],o(v,k),o(v,j),o(v,T),o(v,E),E.checked=E.__value===t[4],o(v,z),o(v,C),o(v,N),o(v,O),O.checked=O.__value===t[4],o(v,S),o(v,A),P||(q=[h(a,"click",t[20]),h(y,"change",t[39]),h($,"change",t[41]),h(E,"change",t[42]),h(O,"change",t[43])],P=!0)},p(t,e){16&e[0]&&L!==(L=t[21].select_language[t[4]]+"")&&m(d,L),16&e[0]&&(y.checked=y.__value===t[4]),16&e[0]&&($.checked=$.__value===t[4]),16&e[0]&&(E.checked=E.__value===t[4]),16&e[0]&&(O.checked=O.__value===t[4])},d(t){t&&s(e),I.r(),P=!1,l(q)}}}function nt(e){let n,l,a=e[104]+"";return{c(){n=u("option"),l=_(a),n.__value=e[104],n.value=n.__value},m(t,e){r(t,n,e),o(n,l)},p:t,d(t){t&&s(n)}}}function lt(e){let n,l;return{c(){n=u("option"),l=_(e[101]),n.__value=e[101],n.value=n.__value},m(t,e){r(t,n,e),o(n,l)},p:t,d(t){t&&s(n)}}}function at(e){let n,l,a,i,c;return{c(){n=u("div"),l=_("auth_google_login: "),a=u("button"),a.textContent="auth_google_login"},m(t,s){r(t,n,s),o(n,l),o(n,a),i||(c=h(a,"click",e[36]),i=!0)},p:t,d(t){t&&s(n),i=!1,c()}}}function it(t){let e,n,l,a,i,c=t[21].auth_sign_out[t[4]]+"";return{c(){e=u("div"),n=u("button"),l=_(c)},m(c,s){r(c,e,s),o(e,n),o(n,l),a||(i=h(n,"click",t[37]),a=!0)},p(t,e){16&e[0]&&c!==(c=t[21].auth_sign_out[t[4]]+"")&&m(l,c)},d(t){t&&s(e),a=!1,i()}}}function ct(t){let e,n,l,a=t[13],i=[];for(let e=0;e<a.length;e+=1)i[e]=ot(Q(t,a,e));return{c(){e=u("p"),e.textContent="Errors:",n=f();for(let t=0;t<i.length;t+=1)i[t].c();l=g()},m(t,a){r(t,e,a),r(t,n,a);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,a);r(t,l,a)},p(t,e){if(8192&e[0]){let n;for(a=t[13],n=0;n<a.length;n+=1){const c=Q(t,a,n);i[n]?i[n].p(c,e):(i[n]=ot(c),i[n].c(),i[n].m(l.parentNode,l))}for(;n<i.length;n+=1)i[n].d(1);i.length=a.length}},d(t){t&&s(e),t&&s(n),d(i,t),t&&s(l)}}}function ot(t){let e,n,l=t[72]+"";return{c(){e=u("div"),n=_(l)},m(t,l){r(t,e,l),o(e,n)},p(t,e){8192&e[0]&&l!==(l=t[72]+"")&&m(n,l)},d(t){t&&s(e)}}}function rt(t){let e,n,l,a,i,c=(t[21][t[96]]?t[21][t[96]][t[4]]:t[96])+"";function d(){return t[47](t[96])}return{c(){e=u("button"),n=_(c),l=f(),w(e,"active",t[1]===t[96])},m(t,c){r(t,e,c),o(e,n),o(e,l),a||(i=h(e,"click",d),a=!0)},p(l,a){t=l,32784&a[0]&&c!==(c=(t[21][t[96]]?t[21][t[96]][t[4]]:t[96])+"")&&m(n,c),32770&a[0]&&w(e,"active",t[1]===t[96])},d(t){t&&s(e),a=!1,i()}}}function st(t){let e,n=t[1]===t[82]&&dt(t);return{c(){n&&n.c(),e=g()},m(t,l){n&&n.m(t,l),r(t,e,l)},p(t,l){t[1]===t[82]?n?n.p(t,l):(n=dt(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&s(e)}}}function dt(t){let e,n,l,a,i,g,h=t[21][t[82]][t[4]]+"",v="filtered_all_descs"===t[82]&&ut(t),y=t[83],b=[];for(let e=0;e<y.length;e+=1)b[e]=vt(F(t,y,e));return{c(){e=u("div"),n=u("h1"),l=_(h),a=f(),v&&v.c(),i=f();for(let t=0;t<b.length;t+=1)b[t].c();p(n,"class","svelte-1tyxi52"),p(e,"class",g=c(t[82])+" svelte-1tyxi52")},m(t,c){r(t,e,c),o(e,n),o(n,l),o(e,a),v&&v.m(e,null),o(e,i);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(e,null)},p(t,n){if(32784&n[0]&&h!==(h=t[21][t[82]][t[4]]+"")&&m(l,h),"filtered_all_descs"===t[82]?v?v.p(t,n):(v=ut(t),v.c(),v.m(e,i)):v&&(v.d(1),v=null),438534160&n[0]|16&n[1]){let l;for(y=t[83],l=0;l<y.length;l+=1){const a=F(t,y,l);b[l]?b[l].p(a,n):(b[l]=vt(a),b[l].c(),b[l].m(e,null))}for(;l<b.length;l+=1)b[l].d(1);b.length=y.length}32768&n[0]&&g!==(g=c(t[82])+" svelte-1tyxi52")&&p(e,"class",g)},d(t){t&&s(e),v&&v.d(),d(b,t)}}}function ut(t){let e,n,l,a,i,c,p=t[21].clear_filtered_all_descs[t[4]]+"",v=t[12],y=[];for(let e=0;e<v.length;e+=1)y[e]=gt(U(t,v,e));return{c(){e=u("button"),n=_(p),l=f();for(let t=0;t<y.length;t+=1)y[t].c();a=g()},m(s,d){r(s,e,d),o(e,n),r(s,l,d);for(let t=0;t<y.length;t+=1)y[t]&&y[t].m(s,d);r(s,a,d),i||(c=h(e,"click",t[29]),i=!0)},p(t,e){if(16&e[0]&&p!==(p=t[21].clear_filtered_all_descs[t[4]]+"")&&m(n,p),1073746048&e[0]){let n;for(v=t[12],n=0;n<v.length;n+=1){const l=U(t,v,n);y[n]?y[n].p(l,e):(y[n]=gt(l),y[n].c(),y[n].m(a.parentNode,a))}for(;n<y.length;n+=1)y[n].d(1);y.length=v.length}},d(t){t&&s(e),t&&s(l),d(y,t),t&&s(a),i=!1,c()}}}function _t(t){let e,n,l,a,i=t[75].name+"";function c(){return t[48](t[75])}return{c(){e=u("button"),n=_(i)},m(t,i){r(t,e,i),o(e,n),l||(a=h(e,"click",c),l=!0)},p(e,l){t=e,128&l[0]&&i!==(i=t[75].name+"")&&m(n,i)},d(t){t&&s(e),l=!1,a()}}}function ft(t){let e,n=t[75].id===t[91]&&_t(t);return{c(){n&&n.c(),e=g()},m(t,l){n&&n.m(t,l),r(t,e,l)},p(t,l){t[75].id===t[91]?n?n.p(t,l):(n=_t(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&s(e)}}}function gt(t){let e,n=t[7],l=[];for(let e=0;e<n.length;e+=1)l[e]=ft(Y(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=g()},m(t,n){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,n);r(t,e,n)},p(t,a){if(1073746048&a[0]){let i;for(n=t[7],i=0;i<n.length;i+=1){const c=Y(t,n,i);l[i]?l[i].p(c,a):(l[i]=ft(c),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(t){d(l,t),t&&s(e)}}}function ht(t){let e,n,a,i,c,d,g,p=t[21].set_desc_data[t[4]]+"",v=t[21].delete_desc[t[4]]+"";function y(){return t[50](t[86])}function b(){return t[51](t[86])}return{c(){e=u("button"),n=_(p),a=f(),i=u("button"),c=_(v)},m(t,l){r(t,e,l),o(e,n),r(t,a,l),r(t,i,l),o(i,c),d||(g=[h(e,"click",y),h(i,"click",b)],d=!0)},p(e,l){t=e,16&l[0]&&p!==(p=t[21].set_desc_data[t[4]]+"")&&m(n,p),16&l[0]&&v!==(v=t[21].delete_desc[t[4]]+"")&&m(c,v)},d(t){t&&s(e),t&&s(a),t&&s(i),d=!1,l(g)}}}function pt(t){let e,n=t[86].tags,l=[];for(let e=0;e<n.length;e+=1)l[e]=mt(H(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=g()},m(t,n){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,n);r(t,e,n)},p(t,a){if(268468224&a[0]){let i;for(n=t[86].tags,i=0;i<n.length;i+=1){const c=H(t,n,i);l[i]?l[i].p(c,a):(l[i]=mt(c),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(t){d(l,t),t&&s(e)}}}function mt(t){let e,n,l,a,i=t[75].name+"";function c(){return t[52](t[75])}return{c(){e=u("button"),n=_(i)},m(t,i){r(t,e,i),o(e,n),l||(a=h(e,"click",c),l=!0)},p(e,l){t=e,32768&l[0]&&i!==(i=t[75].name+"")&&m(n,i)},d(t){t&&s(e),l=!1,a()}}}function vt(t){let e,n,a,i,c,d,g,v,y,b,w,x,$,k,j,T,E,z=t[86].id+"",C=t[86].title+"",N=(t[86].description.length>200&&!t[17]?t[86].description.slice(0,200)+"...▼":t[86].description)+"";function O(){return t[49](t[86])}let S="any_user_new_all_descs_with_tags"===t[82]&&t[16]&&ht(t),A=t[86].tags&&pt(t);return{c(){e=u("div"),n=u("p"),a=u("button"),i=_("id: "),c=_(z),d=f(),S&&S.c(),v=f(),y=u("p"),b=_(C),w=f(),x=u("p"),$=u("button"),k=_(N),j=f(),A&&A.c(),p(a,"class","button_reset svelte-1tyxi52"),p(n,"id",g=t[86].id),p(y,"class","break_word_title svelte-1tyxi52"),p($,"class","button_reset break_word svelte-1tyxi52"),p(x,"class","break_word svelte-1tyxi52")},m(l,s){r(l,e,s),o(e,n),o(n,a),o(a,i),o(a,c),o(n,d),S&&S.m(n,null),o(e,v),o(e,y),o(y,b),o(e,w),o(e,x),o(x,$),o($,k),o(e,j),A&&A.m(e,null),T||(E=[h(a,"click",O),h($,"click",t[25])],T=!0)},p(l,a){t=l,32768&a[0]&&z!==(z=t[86].id+"")&&m(c,z),"any_user_new_all_descs_with_tags"===t[82]&&t[16]?S?S.p(t,a):(S=ht(t),S.c(),S.m(n,null)):S&&(S.d(1),S=null),32768&a[0]&&g!==(g=t[86].id)&&p(n,"id",g),32768&a[0]&&C!==(C=t[86].title+"")&&m(b,C),163840&a[0]&&N!==(N=(t[86].description.length>200&&!t[17]?t[86].description.slice(0,200)+"...▼":t[86].description)+"")&&m(k,N),t[86].tags?A?A.p(t,a):(A=pt(t),A.c(),A.m(e,null)):A&&(A.d(1),A=null)},d(t){t&&s(e),S&&S.d(),A&&A.d(),T=!1,l(E)}}}function yt(t){let e,n="all_tags"!==t[82]&&st(t);return{c(){n&&n.c(),e=g()},m(t,l){n&&n.m(t,l),r(t,e,l)},p(t,l){"all_tags"!==t[82]?n?n.p(t,l):(n=st(t),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(t){n&&n.d(t),t&&s(e)}}}function bt(t){let e,n=t[15].all_tags,l=[];for(let e=0;e<n.length;e+=1)l[e]=wt(K(t,n,e));return{c(){for(let t=0;t<l.length;t+=1)l[t].c();e=g()},m(t,n){for(let e=0;e<l.length;e+=1)l[e]&&l[e].m(t,n);r(t,e,n)},p(t,a){if(268468224&a[0]){let i;for(n=t[15].all_tags,i=0;i<n.length;i+=1){const c=K(t,n,i);l[i]?l[i].p(c,a):(l[i]=wt(c),l[i].c(),l[i].m(e.parentNode,e))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(t){d(l,t),t&&s(e)}}}function wt(t){let e,n,l,a,i=t[75].name+"";function c(){return t[53](t[75])}return{c(){e=u("button"),n=_(i)},m(t,i){r(t,e,i),o(e,n),l||(a=h(e,"click",c),l=!0)},p(e,l){t=e,32768&l[0]&&i!==(i=t[75].name+"")&&m(n,i)},d(t){t&&s(e),l=!1,a()}}}function xt(t){let e,n,a,i,c,y,b,w,x,$,k,j,T,E,z,C,N,O,S,A,I,P,q,L,D,B,V,W,K,M,F,H,U=t[21].clear_title_description_tags[t[4]]+"",Y=t[21].tag[t[4]]+"",Z=t[21].add_tag_to_desc[t[4]]+"",Q=t[11],R=[];for(let e=0;e<Q.length;e+=1)R[e]=$t(G(t,Q,e));let X=t[7],tt=[];for(let e=0;e<X.length;e+=1)tt[e]=kt(J(t,X,e));let et=t[13].length>0&&jt(t),nt=null===t[8]&&Et(t),lt=null!==t[8]&&zt(t);return{c(){e=u("p"),n=_("id: "),a=_(t[8]),i=f(),c=u("button"),y=_(U),b=f(),w=u("div"),w.textContent="title:",x=f(),$=u("textarea"),k=f(),j=u("div"),j.textContent="description:",T=f(),E=u("textarea"),z=f(),C=u("div");for(let t=0;t<R.length;t+=1)R[t].c();N=f(),O=u("label"),S=_(Y),A=f(),I=u("input"),P=f(),q=u("datalist");for(let t=0;t<tt.length;t+=1)tt[t].c();L=f(),D=u("button"),B=_(Z),V=f(),et&&et.c(),W=f(),nt&&nt.c(),K=f(),lt&&lt.c(),M=g(),p($,"class","title svelte-1tyxi52"),p($,"minlength","1"),p($,"maxlength","100"),$.required=!0,p($,"placeholder","1_100"),p(E,"class","description svelte-1tyxi52"),p(E,"minlength","1"),p(E,"maxlength","1000"),E.required=!0,p(E,"placeholder","1_1000"),p(O,"for","my_all_tags"),p(I,"list","all_tags"),p(I,"id","my_all_tags"),p(I,"name","my_all_tags"),p(I,"minlength","1"),p(I,"maxlength","10"),I.required=!0,p(I,"placeholder","1_10"),p(q,"id","all_tags")},m(l,s){r(l,e,s),o(e,n),o(e,a),r(l,i,s),r(l,c,s),o(c,y),r(l,b,s),r(l,w,s),r(l,x,s),r(l,$,s),v($,t[9]),r(l,k,s),r(l,j,s),r(l,T,s),r(l,E,s),v(E,t[10]),r(l,z,s),r(l,C,s);for(let t=0;t<R.length;t+=1)R[t]&&R[t].m(C,null);r(l,N,s),r(l,O,s),o(O,S),r(l,A,s),r(l,I,s),v(I,t[6]),r(l,P,s),r(l,q,s);for(let t=0;t<tt.length;t+=1)tt[t]&&tt[t].m(q,null);r(l,L,s),r(l,D,s),o(D,B),r(l,V,s),et&&et.m(l,s),r(l,W,s),nt&&nt.m(l,s),r(l,K,s),lt&&lt.m(l,s),r(l,M,s),F||(H=[h(c,"click",t[24]),h($,"input",t[55]),h(E,"input",t[56]),h(I,"input",t[58]),h(D,"click",t[59])],F=!0)},p(t,e){if(256&e[0]&&m(a,t[8]),16&e[0]&&U!==(U=t[21].clear_title_description_tags[t[4]]+"")&&m(y,U),512&e[0]&&v($,t[9]),1024&e[0]&&v(E,t[10]),2048&e[0]){let n;for(Q=t[11],n=0;n<Q.length;n+=1){const l=G(t,Q,n);R[n]?R[n].p(l,e):(R[n]=$t(l),R[n].c(),R[n].m(C,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=Q.length}if(16&e[0]&&Y!==(Y=t[21].tag[t[4]]+"")&&m(S,Y),64&e[0]&&I.value!==t[6]&&v(I,t[6]),128&e[0]){let n;for(X=t[7],n=0;n<X.length;n+=1){const l=J(t,X,n);tt[n]?tt[n].p(l,e):(tt[n]=kt(l),tt[n].c(),tt[n].m(q,null))}for(;n<tt.length;n+=1)tt[n].d(1);tt.length=X.length}16&e[0]&&Z!==(Z=t[21].add_tag_to_desc[t[4]]+"")&&m(B,Z),t[13].length>0?et?et.p(t,e):(et=jt(t),et.c(),et.m(W.parentNode,W)):et&&(et.d(1),et=null),null===t[8]?nt?nt.p(t,e):(nt=Et(t),nt.c(),nt.m(K.parentNode,K)):nt&&(nt.d(1),nt=null),null!==t[8]?lt?lt.p(t,e):(lt=zt(t),lt.c(),lt.m(M.parentNode,M)):lt&&(lt.d(1),lt=null)},d(t){t&&s(e),t&&s(i),t&&s(c),t&&s(b),t&&s(w),t&&s(x),t&&s($),t&&s(k),t&&s(j),t&&s(T),t&&s(E),t&&s(z),t&&s(C),d(R,t),t&&s(N),t&&s(O),t&&s(A),t&&s(I),t&&s(P),t&&s(q),d(tt,t),t&&s(L),t&&s(D),t&&s(V),et&&et.d(t),t&&s(W),nt&&nt.d(t),t&&s(K),lt&&lt.d(t),t&&s(M),F=!1,l(H)}}}function $t(t){let e,n,l,a,i=t[75].name+"";function c(){return t[57](t[75])}return{c(){e=u("button"),n=_(i)},m(t,i){r(t,e,i),o(e,n),l||(a=h(e,"click",c),l=!0)},p(e,l){t=e,2048&l[0]&&i!==(i=t[75].name+"")&&m(n,i)},d(t){t&&s(e),l=!1,a()}}}function kt(t){let e,n;return{c(){e=u("option"),e.__value=n=t[75].name,e.value=e.__value},m(t,n){r(t,e,n)},p(t,l){128&l[0]&&n!==(n=t[75].name)&&(e.__value=n,e.value=e.__value)},d(t){t&&s(e)}}}function jt(t){let e,n,l,a,i=t[21].errors[t[4]]+"",c=t[13],h=[];for(let e=0;e<c.length;e+=1)h[e]=Tt(W(t,c,e));return{c(){e=u("h2"),n=_(i),l=f();for(let t=0;t<h.length;t+=1)h[t].c();a=g()},m(t,i){r(t,e,i),o(e,n),r(t,l,i);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(t,i);r(t,a,i)},p(t,e){if(16&e[0]&&i!==(i=t[21].errors[t[4]]+"")&&m(n,i),8192&e[0]){let n;for(c=t[13],n=0;n<c.length;n+=1){const l=W(t,c,n);h[n]?h[n].p(l,e):(h[n]=Tt(l),h[n].c(),h[n].m(a.parentNode,a))}for(;n<h.length;n+=1)h[n].d(1);h.length=c.length}},d(t){t&&s(e),t&&s(l),d(h,t),t&&s(a)}}}function Tt(t){let e,n,l=t[72]+"";return{c(){e=u("p"),n=_(l)},m(t,l){r(t,e,l),o(e,n)},p(t,e){8192&e[0]&&l!==(l=t[72]+"")&&m(n,l)},d(t){t&&s(e)}}}function Et(t){let e,n,l,a,i=t[21].insert_desc[t[4]]+"";return{c(){e=u("button"),n=_(i),p(e,"class","fetch_insert_desc_button svelte-1tyxi52")},m(i,c){r(i,e,c),o(e,n),l||(a=h(e,"click",t[32]),l=!0)},p(t,e){16&e[0]&&i!==(i=t[21].insert_desc[t[4]]+"")&&m(n,i)},d(t){t&&s(e),l=!1,a()}}}function zt(t){let e,n,l,a,i=t[21].update_desc[t[4]]+"";return{c(){e=u("button"),n=_(i),p(e,"class","fetch_update_desc_button svelte-1tyxi52")},m(i,c){r(i,e,c),o(e,n),l||(a=h(e,"click",t[34]),l=!0)},p(t,e){16&e[0]&&i!==(i=t[21].update_desc[t[4]]+"")&&m(n,i)},d(t){t&&s(e),l=!1,a()}}}function Ct(e){let n,a,i,c,g,v,y,b,w,x,$,k,j,T,E,z,C,N,O,S,A,I,P,q,L,D,B,V,W,J,G,K=e[21].right[e[4]]+"",F=e[21].web_data_tags[e[4]]+"",H=e[21].web_data_edit[e[4]]+"",U=e[21].left[e[4]]+"",Y=e[2]&&tt(e),Q=e[13]>0&&ct(e),R=Object.keys(e[15]),X=[];for(let t=0;t<R.length;t+=1)X[t]=rt(Z(e,R,t));let et=Object.entries(e[15]),nt=[];for(let t=0;t<et.length;t+=1)nt[t]=yt(M(e,et,t));let lt=e[15].all_tags&&bt(e),at=""!==e[16]&&xt(e);return{c(){n=u("div"),a=u("div"),i=u("button"),i.textContent="≡",c=f(),Y&&Y.c(),g=f(),v=u("div"),y=u("div"),b=u("div"),Q&&Q.c(),w=f(),x=u("div"),$=u("button"),k=_(K),j=f(),T=u("div");for(let t=0;t<X.length;t+=1)X[t].c();E=f(),z=u("div");for(let t=0;t<nt.length;t+=1)nt[t].c();C=f(),N=u("div"),O=u("h1"),S=_(F),A=f(),lt&&lt.c(),I=f(),P=u("div"),q=u("h1"),L=_(H),D=f(),B=u("button"),V=_(U),W=f(),at&&at.c(),p(i,"class","toggle_menu svelte-1tyxi52"),p(a,"class","header svelte-1tyxi52"),p(b,"class","console"),p($,"class","edit_button svelte-1tyxi52"),p(T,"class","tabs svelte-1tyxi52"),p(O,"class","svelte-1tyxi52"),p(N,"class","web_data_tags svelte-1tyxi52"),p(z,"class","tab-content"),p(x,"class","list svelte-1tyxi52"),p(y,"class","left_column server_side svelte-1tyxi52"),p(q,"class","svelte-1tyxi52"),p(B,"class","list_button svelte-1tyxi52"),p(P,"class","right_column svelte-1tyxi52"),p(v,"class","content svelte-1tyxi52"),p(n,"class","container svelte-1tyxi52")},m(t,l){r(t,n,l),o(n,a),o(a,i),o(a,c),Y&&Y.m(a,null),o(n,g),o(n,v),o(v,y),o(y,b),Q&&Q.m(b,null),o(y,w),o(y,x),o(x,$),o($,k),o(x,j),o(x,T);for(let t=0;t<X.length;t+=1)X[t]&&X[t].m(T,null);o(x,E),o(x,z);for(let t=0;t<nt.length;t+=1)nt[t]&&nt[t].m(z,null);o(z,C),o(z,N),o(N,O),o(O,S),o(N,A),lt&&lt.m(N,null),o(v,I),o(v,P),o(P,q),o(q,L),o(P,D),o(P,B),o(B,V),o(P,W),at&&at.m(P,null),J||(G=[h(i,"click",e[19]),h($,"click",e[46]),h(B,"click",e[54])],J=!0)},p(t,e){if(t[2]?Y?Y.p(t,e):(Y=tt(t),Y.c(),Y.m(a,null)):Y&&(Y.d(1),Y=null),t[13]>0?Q?Q.p(t,e):(Q=ct(t),Q.c(),Q.m(b,null)):Q&&(Q.d(1),Q=null),16&e[0]&&K!==(K=t[21].right[t[4]]+"")&&m(k,K),2392082&e[0]){let n;for(R=Object.keys(t[15]),n=0;n<R.length;n+=1){const l=Z(t,R,n);X[n]?X[n].p(l,e):(X[n]=rt(l),X[n].c(),X[n].m(T,null))}for(;n<X.length;n+=1)X[n].d(1);X.length=R.length}if(2049151122&e[0]|16&e[1]){let n;for(et=Object.entries(t[15]),n=0;n<et.length;n+=1){const l=M(t,et,n);nt[n]?nt[n].p(l,e):(nt[n]=yt(l),nt[n].c(),nt[n].m(z,C))}for(;n<nt.length;n+=1)nt[n].d(1);nt.length=et.length}16&e[0]&&F!==(F=t[21].web_data_tags[t[4]]+"")&&m(S,F),t[15].all_tags?lt?lt.p(t,e):(lt=bt(t),lt.c(),lt.m(N,null)):lt&&(lt.d(1),lt=null),16&e[0]&&H!==(H=t[21].web_data_edit[t[4]]+"")&&m(L,H),16&e[0]&&U!==(U=t[21].left[t[4]]+"")&&m(V,U),""!==t[16]?at?at.p(t,e):(at=xt(t),at.c(),at.m(P,null)):at&&(at.d(1),at=null)},i:t,o:t,d(t){t&&s(n),Y&&Y.d(),Q&&Q.d(),d(X,t),d(nt,t),lt&&lt.d(),at&&at.d(),J=!1,l(G)}}}let Nt="http://localhost:8000/app8";function Ot(t,e,n){let l="all_descs";function a(t){n(1,l=t)}let i=!1;let c=!1,o="en";let r="left";const s={auth_login_result:{en:"Log in result",ja:"ログイン結果",zh:"登录结果",es:"resultado de inicio de sesión"},auth_sign_out:{en:"Sign out",ja:"サインアウト",zh:"登出",es:"Cerrar sesión"},web_data_tags:{en:"Web data tags",ja:"ウェブデータタグ",zh:"网页数据标签",es:"Etiquetas de datos web"},any_user_new_all_descs_with_tags:{en:"Any user new all descriptions with tags",ja:"任意のユーザーの新しいすべてのタグ付き説明",zh:"任何用户的新所有带标签的描述",es:"Cualquier usuario nuevo todas las descripciones con etiquetas"},all_descs:{en:"All descriptions",ja:"すべての説明",zh:"所有描述",es:"Todas las descripciones"},filtered_all_descs:{en:"Filtered all descriptions",ja:"すべての説明をフィルター",zh:"过滤所有描述",es:"Todas las descripciones filtradas"},web_data_edit:{en:"Web data edit",ja:"ウェブデータ編集",zh:"网页数据编辑",es:"Edición de datos web"},title:{en:"Title",ja:"タイトル",zh:"标题",es:"Título"},description:{en:"Description",ja:"説明",zh:"描述",es:"Descripción"},tag:{en:"Tag",ja:"タグ",zh:"标签",es:"Etiqueta"},set_desc_data:{en:"Set description data",ja:"説明データを設定",zh:"设置描述数据",es:"Establecer datos de descripción"},delete_desc:{en:"Delete description",ja:"説明を削除",zh:"删除描述",es:"Eliminar descripción"},add_tag_to_desc:{en:"Add tag to description",ja:"説明にタグを追加",zh:"添加标签到描述",es:"Agregar etiqueta a la descripción"},update_desc:{en:"Update description",ja:"説明を更新",zh:"更新描述",es:"Actualizar descripción"},insert_desc:{en:"Insert description",ja:"説明を挿入",zh:"插入描述",es:"Insertar descripción"},clear_filtered_all_descs:{en:"Clear filtered all descriptions",ja:"すべてのフィルターをクリア",zh:"清除所有过滤描述",es:"Borrar todas las descripciones filtradas"},errors:{en:"Errors",ja:"エラー",zh:"错误",es:"Errores"},is_auth_uid_valid:{en:"Invalid auth_uid",ja:"無効なauth_uid",zh:"无效的auth_uid",es:"auth_uid no válido"},is_title_valid:{ja:"タイトルは1文字以上100文字以下",en:"Title must be between 1 and 100 characters",zh:"标题必须在1到100个字符之间",es:"El título debe tener entre 1 y 100 caracteres"},is_description_valid:{ja:"説明は1文字以上1000文字以下",en:"Description must be between 1 and 1000 characters",zh:"描述必须在1到1000个字符之间",es:"La descripción debe tener entre 1 y 1000 caracteres"},are_tags_valid:{ja:"タグは1文字以上10文字以下",en:"Tags must be between 1 and 10 characters",zh:"标签必须在1到10个字符之间",es:"Las etiquetas deben tener entre 1 y 10 caracteres"},confirm_clear_title_description_tags:{ja:"タイトル、説明、タグをクリアしますか？",en:"Clear title, description, and tags?",zh:"清除标题、描述和标签吗？",es:"¿Borrar título, descripción y etiquetas?"},clear_title_description_tags:{ja:"タイトル、説明、タグをクリア",en:"Clear title, description, and tags",zh:"清除标题、描述和标签",es:"Borrar título, descripción y etiquetas"},sort:{ja:"並べ替え",en:"Sort",zh:"分类",es:"Clasificar"},left:{ja:"リスト表示",en:"List view",zh:"列表视图",es:"Vista de lista"},right:{ja:"編集表示",en:"Edit view",zh:"编辑视图",es:"Vista de edición"},select_language:{ja:"言語を選択",en:"Select language",zh:"选择语言",es:"Seleccionar idioma"},tab:{ja:"タブ",en:"Tab",zh:"标签",es:"Pestaña"}},d=["id","title","description","tags","created_at","updated_at"];let u={kind:"id",order:"desc"};function _(){try{if(null===u.kind||null===u.order)return;if(void 0===$.all_descs)return;if(void 0===$.any_user_new_all_descs_with_tags)return;const t=(t,e)=>{switch(u.kind){case"id":return"asc"===u.order?t.id-e.id:e.id-t.id;case"title":return"asc"===u.order?t.title.localeCompare(e.title):e.title.localeCompare(t.title);case"description":return"asc"===u.order?t.description.localeCompare(e.description):e.description.localeCompare(t.description);case"tags":return"asc"===u.order?t.tags.length-e.tags.length:e.tags.length-t.tags.length;case"created_at":return"asc"===u.order?t.created_at.localeCompare(e.created_at):e.created_at.localeCompare(t.created_at);case"updated_at":return"asc"===u.order?t.updated_at.localeCompare(e.updated_at):e.updated_at.localeCompare(t.updated_at);default:return 0}},e=$.all_descs.sort(t),l=$.any_user_new_all_descs_with_tags.sort(t);n(15,$={...$,all_descs:e,any_user_new_all_descs_with_tags:l})}catch(t){console.error("Error:",t)}}let f="",g=[],h=null,p="",m="",v=[],y=[],w=[],x="Not logged in",$={all_descs:[],all_tags:[],any_user_new_all_descs_with_tags:[],filtered_all_descs:[]},j={},T="",E=!1;function z(t,e){try{if(console.log(w),n(13,w=w.filter((t=>!t.includes(s.are_tags_valid[o])))),console.log(w),!S.validate_tag_name(e))return void w.push(s.are_tags_valid[o]);const l=g.find((t=>t.name===e));if(l){l.desc_id=t;const e=v.some((t=>t.id==t.id));e||n(11,v=[...v,l]),n(6,f="")}else{const l={id:g.length+1,name:e,desc_id:t,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString()};n(7,g=[...g,l]),n(11,v=[...v,l])}}catch(t){console.error("Error:",t)}}function C(t){try{const e=$.all_descs.find((e=>e.id===t));e?(n(8,h=e.id),n(9,p=e.title),n(10,m=e.description),n(11,v=e.tags)):console.error(`No description found with id: ${t}`),n(0,r="right")}catch(t){console.error("Error:",t)}}function N(t){y.some((e=>e===t))||n(12,y=[...y,t]);const e=$.all_descs.filter((t=>t.tags.some((t=>y.some((e=>e===t.id))))));n(15,$.filtered_all_descs=e,$)}function O(t){n(12,y=y.filter((e=>e!==t))),n(15,$.filtered_all_descs=$.filtered_all_descs.filter((t=>t.tags.some((t=>y.some((e=>e===t.id)))))),$)}const S={validate_auth_uid:t=>/^[a-zA-Z0-9_-]+$/.test(t),validate_desc_id:t=>(console.log("validate_desc_id",t),Number.isInteger(t)&&t>0),validate_iso_date:t=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(t),validate_title:t=>(console.log("validate_title",t),"string"==typeof t&&t.length>=1&&t.length<=100),validate_description:t=>(console.log("validate_description",t),"string"==typeof t&&t.length>=1&&t.length<=1e3),validate_tag_name:t=>(console.log("validate_tag_name",t),"string"==typeof t&&t.length>=1&&t.length<=10),validate_data(t){const{auth_uid:e,desc_id:n,title:l,description:a,tags:i}=t,c=this.validate_auth_uid(e),o=this.validate_title(l),r=this.validate_description(a);console.log("tags",i);return{is_auth_uid_valid:c,is_title_valid:o,is_description_valid:r,are_tags_valid:i.every((t=>this.validate_tag_name(t.name)))}}};function A(){const t={auth_uid:T,desc_id:h,title:p,description:m,tags:v};n(13,w=[]);for(const[e,n]of Object.entries(S.validate_data(t)))if(n||w.push(s[e][o]),"tags"===e)for(const[t,e]of n.entries())for(const[n,l]of Object.entries(S.validate_data(e)))l||w.push(`tags[${t}].${n}`);else"auth_uid"===e&&S.validate_auth_uid(T),"desc_id"===e&&S.validate_desc_id(h),"title"===e&&S.validate_title(p),"description"===e&&S.validate_description(m);return!(w.length>0)||(console.log(w),!1)}async function I(){try{if(!A())throw new Error("Validation failed");const t=await fetch(Nt+"/insert_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:T,title:p,description:m,tags:v})});await P(t),n(0,r="left")}catch(t){console.error("Error:",t)}}async function P(t){try{const e=await t.json();e.filtered_all_descs=$.filtered_all_descs?$.filtered_all_descs:[],j=Object.fromEntries(Object.entries(e).filter((([t,e])=>"all_descs"!==t&&"all_tags"!==t&&"any_user_new_all_descs_with_tags"!==t))),n(15,$=Object.fromEntries(Object.entries(e).filter((([t,e])=>"all_descs"===t||"all_tags"===t||"any_user_new_all_descs_with_tags"===t||"filtered_all_descs"===t)))),n(7,g=e.all_tags),_()}catch(t){console.error("Error:",t)}}async function q(){try{const t=await fetch(Nt+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:T})});await P(t)}catch(t){console.error("Error:",t)}}async function L(t){try{const e=await fetch(Nt+"/delete_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,auth_uid:T})});await P(e)}catch(t){console.error("Error:",t)}}firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const D=new firebase.auth.GoogleAuthProvider;const B=[{auth_uid:"user1",desc_id:1,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo1",description:"bar1",tags:[{desc_id:1,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:2,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo2",description:"bar2",tags:[{desc_id:2,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:2,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user2",desc_id:3,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo3",description:"bar3",tags:[{desc_id:3,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:3,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}],V=[{auth_uid:"user1",desc_id:4,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"a".repeat(100),description:"b".repeat(1e3),tags:[{desc_id:4,id:4,name:"tag4",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:5,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"",description:"",tags:[{desc_id:5,id:5,name:"t".repeat(10),created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}];k((async()=>{await async function(){try{const t=await new Promise(((t,e)=>{firebase.auth().onAuthStateChanged(t,e)}));console.log("Current user:",t),t?(n(16,T=t.uid),n(14,x="Logged in")):(console.log(2),n(14,x="Not logged in"),n(16,T=""))}catch(t){console.error("Error during authentication:",t),n(14,x="Authentication failed"),n(16,T="")}}(),console.log("auth_check_login"),await q(),console.log("fetch_get_all_descs_and_tags"),function(){if(location.hash){const t=location.hash.slice(1),e=document.getElementById(t);e&&e.scrollIntoView({behavior:"smooth"})}}()}));return t.$$.update=()=>{1&t.$$.dirty[0]&&(async()=>{"left"===r?(document.documentElement.style.setProperty("--display-left-column","block"),document.documentElement.style.setProperty("--display-right-column","none")):"right"===r&&(document.documentElement.style.setProperty("--display-left-column","none"),document.documentElement.style.setProperty("--display-right-column","block"))})()},[r,l,i,c,o,u,f,g,h,p,m,v,y,w,x,$,T,E,a,function(){n(2,i=!i)},function(){n(3,c=!c)},s,d,_,function(){confirm(s.confirm_clear_title_description_tags[o])&&(n(9,p=""),n(10,m=""),n(11,v=[]),n(8,h=null))},function(){n(17,E=!E)},z,C,N,async function(){n(15,$.filtered_all_descs=[],$),n(12,y=[])},O,async function(){try{for(const t of B)n(16,T=t.auth_uid),n(8,h=t.desc_id),n(9,p=t.title),n(10,m=t.description),n(11,v=t.tags),await I()}catch(t){console.error("Error:",t)}},I,q,async function(){try{if(!A())throw new Error("Validation failed");const t=await fetch(Nt+"/update_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:T,desc_id:h,title:p,description:m,tags:v})});await P(t),n(0,r="left")}catch(t){console.error("Error:",t)}},L,async function(){try{console.log("auth_google_login");const t=(await firebase.auth().signInWithPopup(D)).user;console.log(4),n(14,x=`Logged in as: ${t.displayName}`)}catch(t){console.error("Error during Google login:",t),alert("Google login failed. "+t.message)}},async function(){try{console.log(5),await firebase.auth().signOut(),n(14,x="Not logged in")}catch(t){console.error("Error during sign-out:",t),alert("Sign out failed. "+t.message)}},function(){n(9,p=V[1].title),n(10,m=V[1].description),n(11,v=V[1].tags),I()},function(){o=this.__value,n(4,o)},[[]],function(){o=this.__value,n(4,o)},function(){o=this.__value,n(4,o)},function(){o=this.__value,n(4,o)},function(){u.kind=b(this),n(5,u),n(22,d)},function(){u.order=b(this),n(5,u),n(22,d)},()=>n(0,r="right"),t=>a(t),t=>O(t.id),t=>{return e=t.id,navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#${e}`),void alert("Link copied to clipboard");var e},t=>C(t.id),t=>L(t.id),t=>N(t.id),t=>N(t.id),()=>n(0,r="left"),function(){p=this.value,n(9,p)},function(){m=this.value,n(10,m)},t=>n(11,v=v.filter((e=>e.id!==t.id))),function(){f=this.value,n(6,f)},()=>z(h,f)]}return new class extends V{constructor(t){super(),B(this,t,Ot,Ct,i,{},null,[-1,-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
