var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function a(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function c(e){return null==e?"":e}function r(e,t){e.appendChild(t)}function o(e,t,n){e.insertBefore(t,n||null)}function s(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function f(){return _(" ")}function g(){return _("")}function h(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.data!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}function b(e,t,n){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function y(e){const t=e.querySelector(":checked");return t&&t.__value}let w;function z(e){w=e}function $(e){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(e)}const k=[],j=[];let T=[];const E=[],x=Promise.resolve();let C=!1;function N(e){T.push(e)}const O=new Set;let S=0;function A(){if(0!==S)return;const e=w;do{try{for(;S<k.length;){const e=k[S];S++,z(e),I(e.$$)}}catch(e){throw k.length=0,S=0,e}for(z(null),k.length=0,S=0;j.length;)j.pop()();for(let e=0;e<T.length;e+=1){const t=T[e];O.has(t)||(O.add(t),t())}T.length=0}while(k.length);for(;E.length;)E.pop()();C=!1,O.clear(),z(e)}function I(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const q=new Set;function P(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];T.forEach((l=>-1===e.indexOf(l)?t.push(l):n.push(l))),n.forEach((e=>e())),T=t}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function L(e,t){-1===e.$$.dirty[0]&&(k.push(e),C||(C=!0,x.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function D(i,c,r,o,d,u,_,f=[-1]){const g=w;z(i);const h=i.$$={fragment:null,ctx:[],props:u,update:e,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(g?g.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:c.target||g.$$.root};_&&_(h.root);let p=!1;if(h.ctx=r?r(i,c.props||{},((e,t,...n)=>{const l=n.length?n[0]:t;return h.ctx&&d(h.ctx[e],h.ctx[e]=l)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](l),p&&L(i,e)),t})):[],h.update(),p=!0,l(h.before_update),h.fragment=!!o&&o(h.ctx),c.target){if(c.hydrate){const e=function(e){return Array.from(e.childNodes)}(c.target);h.fragment&&h.fragment.l(e),e.forEach(s)}else h.fragment&&h.fragment.c();c.intro&&((m=i.$$.fragment)&&m.i&&(q.delete(m),m.i(v))),function(e,n,i,c){const{fragment:r,after_update:o}=e.$$;r&&r.m(n,i),c||N((()=>{const n=e.$$.on_mount.map(t).filter(a);e.$$.on_destroy?e.$$.on_destroy.push(...n):l(n),e.$$.on_mount=[]})),o.forEach(N)}(i,c.target,c.anchor,c.customElement),A()}var m,v;z(g)}class B{$destroy(){P(this,1),this.$destroy=e}$on(t,n){if(!a(n))return e;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const e=l.indexOf(n);-1!==e&&l.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function V(e,t,n){const l=e.slice();return l[69]=t[n],l}function W(e,t,n){const l=e.slice();return l[72]=t[n],l}function J(e,t,n){const l=e.slice();return l[72]=t[n],l}function G(e,t,n){const l=e.slice();return l[72]=t[n],l}function K(e,t,n){const l=e.slice();return l[79]=t[n][0],l[80]=t[n][1],l}function M(e,t,n){const l=e.slice();return l[83]=t[n],l}function F(e,t,n){const l=e.slice();return l[72]=t[n],l}function H(e,t,n){const l=e.slice();return l[88]=t[n],l}function U(e,t,n){const l=e.slice();return l[72]=t[n],l}function Y(e,t,n){const l=e.slice();return l[69]=t[n],l}function Z(e,t,n){const l=e.slice();return l[95]=t[n],l}function Q(e,t,n){const l=e.slice();return l[98]=t[n],l}function R(e){let t,n,a,i,c,g,v,y,w,z,$,k,j,T,E,x,C,O,S,A,I,q,P,L,D,B=e[19].select_language[e[3]]+"",V=e[19].sort[e[3]]+"",W=e[19].auth_login_result[e[3]]+"",J=e[2]&&X(e),G=e[20],K=[];for(let t=0;t<G.length;t+=1)K[t]=ee(Q(e,G,t));let M=["desc","asc"],F=[];for(let t=0;t<2;t+=1)F[t]=te(Z(e,M,t));let H=""===e[15]&&ne(e),U=""!==e[15]&&le(e);return{c(){t=u("div"),n=u("button"),a=_(B),i=f(),J&&J.c(),c=f(),g=u("div"),v=u("select");for(let e=0;e<K.length;e+=1)K[e].c();y=f(),w=u("select");for(let e=0;e<2;e+=1)F[e].c();z=f(),$=u("button"),k=_(V),j=f(),T=u("div"),T.textContent="v1.1.4",E=f(),x=u("div"),C=_(W),O=_(": "),S=u("span"),A=_(e[13]),I=f(),H&&H.c(),q=f(),U&&U.c(),P=f(),void 0===e[4].kind&&N((()=>e[42].call(v))),void 0===e[4].order&&N((()=>e[43].call(w))),p(T,"class","version"),p(t,"class","menu_list svelte-13bc2uz")},m(l,s){o(l,t,s),r(t,n),r(n,a),r(t,i),J&&J.m(t,null),r(t,c),r(t,g),r(g,v);for(let e=0;e<K.length;e+=1)K[e]&&K[e].m(v,null);b(v,e[4].kind,!0),r(g,y),r(g,w);for(let e=0;e<2;e+=1)F[e]&&F[e].m(w,null);b(w,e[4].order,!0),r(g,z),r(g,$),r($,k),r(t,j),r(t,T),r(t,E),r(t,x),r(x,C),r(x,O),r(x,S),r(S,A),r(t,I),H&&H.m(t,null),r(t,q),U&&U.m(t,null),r(t,P),L||(D=[h(n,"click",e[18]),h(v,"change",e[42]),h(w,"change",e[43]),h($,"click",e[21])],L=!0)},p(e,n){if(8&n[0]&&B!==(B=e[19].select_language[e[3]]+"")&&m(a,B),e[2]?J?J.p(e,n):(J=X(e),J.c(),J.m(t,c)):J&&(J.d(1),J=null),1048576&n[0]){let t;for(G=e[20],t=0;t<G.length;t+=1){const l=Q(e,G,t);K[t]?K[t].p(l,n):(K[t]=ee(l),K[t].c(),K[t].m(v,null))}for(;t<K.length;t+=1)K[t].d(1);K.length=G.length}1048592&n[0]&&b(v,e[4].kind),1048592&n[0]&&b(w,e[4].order),8&n[0]&&V!==(V=e[19].sort[e[3]]+"")&&m(k,V),8&n[0]&&W!==(W=e[19].auth_login_result[e[3]]+"")&&m(C,W),8192&n[0]&&m(A,e[13]),""===e[15]?H?H.p(e,n):(H=ne(e),H.c(),H.m(t,q)):H&&(H.d(1),H=null),""!==e[15]?U?U.p(e,n):(U=le(e),U.c(),U.m(t,P)):U&&(U.d(1),U=null)},d(e){e&&s(t),J&&J.d(),d(K,e),d(F,e),H&&H.d(),U&&U.d(),L=!1,l(D)}}}function X(e){let t,n,a,i,c,d,g,v,b,y,w,z,$,k,j,T,E,x,C,N,O,S,A,I,q,P,L=e[19].select_language[e[3]]+"";return I=function(e){let t;return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}(e[38][0]),{c(){t=u("div"),n=u("div"),a=u("button"),a.textContent="×",i=f(),c=u("h2"),d=_(L),g=f(),v=u("div"),b=u("input"),y=f(),w=u("label"),w.textContent="🇺🇸 English",z=f(),$=u("input"),k=f(),j=u("label"),j.textContent="🇯🇵 日本語",T=f(),E=u("input"),x=f(),C=u("label"),C.textContent="🇨🇳🇹🇼 中文",N=f(),O=u("input"),S=f(),A=u("label"),A.textContent="🇪🇸 Español",p(a,"class","close svelte-13bc2uz"),p(b,"type","radio"),p(b,"id","en"),p(b,"name","design_lang"),b.__value="en",b.value=b.__value,p(w,"for","en"),p($,"type","radio"),p($,"id","ja"),p($,"name","design_lang"),$.__value="ja",$.value=$.__value,p(j,"for","ja"),p(E,"type","radio"),p(E,"id","zh"),p(E,"name","design_lang"),E.__value="zh",E.value=E.__value,p(C,"for","zh"),p(O,"type","radio"),p(O,"id","es"),p(O,"name","design_lang"),O.__value="es",O.value=O.__value,p(A,"for","es"),p(n,"class","modal-content svelte-13bc2uz"),p(t,"class","modal svelte-13bc2uz"),I.p(b,$,E,O)},m(l,s){o(l,t,s),r(t,n),r(n,a),r(n,i),r(n,c),r(c,d),r(n,g),r(n,v),r(v,b),b.checked=b.__value===e[3],r(v,y),r(v,w),r(v,z),r(v,$),$.checked=$.__value===e[3],r(v,k),r(v,j),r(v,T),r(v,E),E.checked=E.__value===e[3],r(v,x),r(v,C),r(v,N),r(v,O),O.checked=O.__value===e[3],r(v,S),r(v,A),q||(P=[h(a,"click",e[18]),h(b,"change",e[37]),h($,"change",e[39]),h(E,"change",e[40]),h(O,"change",e[41])],q=!0)},p(e,t){8&t[0]&&L!==(L=e[19].select_language[e[3]]+"")&&m(d,L),8&t[0]&&(b.checked=b.__value===e[3]),8&t[0]&&($.checked=$.__value===e[3]),8&t[0]&&(E.checked=E.__value===e[3]),8&t[0]&&(O.checked=O.__value===e[3])},d(e){e&&s(t),I.r(),q=!1,l(P)}}}function ee(t){let n,l,a=t[98]+"";return{c(){n=u("option"),l=_(a),n.__value=t[98],n.value=n.__value},m(e,t){o(e,n,t),r(n,l)},p:e,d(e){e&&s(n)}}}function te(t){let n,l;return{c(){n=u("option"),l=_(t[95]),n.__value=t[95],n.value=n.__value},m(e,t){o(e,n,t),r(n,l)},p:e,d(e){e&&s(n)}}}function ne(t){let n,l,a,i,c;return{c(){n=u("div"),l=_("auth_google_login: "),a=u("button"),a.textContent="auth_google_login"},m(e,s){o(e,n,s),r(n,l),r(n,a),i||(c=h(a,"click",t[34]),i=!0)},p:e,d(e){e&&s(n),i=!1,c()}}}function le(e){let t,n,l,a,i,c=e[19].auth_sign_out[e[3]]+"";return{c(){t=u("div"),n=u("button"),l=_(c)},m(c,s){o(c,t,s),r(t,n),r(n,l),a||(i=h(n,"click",e[35]),a=!0)},p(e,t){8&t[0]&&c!==(c=e[19].auth_sign_out[e[3]]+"")&&m(l,c)},d(e){e&&s(t),a=!1,i()}}}function ae(e){let t,n,l,a=e[12],i=[];for(let t=0;t<a.length;t+=1)i[t]=ie(Y(e,a,t));return{c(){t=u("p"),t.textContent="Errors:",n=f();for(let e=0;e<i.length;e+=1)i[e].c();l=g()},m(e,a){o(e,t,a),o(e,n,a);for(let t=0;t<i.length;t+=1)i[t]&&i[t].m(e,a);o(e,l,a)},p(e,t){if(4096&t[0]){let n;for(a=e[12],n=0;n<a.length;n+=1){const c=Y(e,a,n);i[n]?i[n].p(c,t):(i[n]=ie(c),i[n].c(),i[n].m(l.parentNode,l))}for(;n<i.length;n+=1)i[n].d(1);i.length=a.length}},d(e){e&&s(t),e&&s(n),d(i,e),e&&s(l)}}}function ie(e){let t,n,l=e[69]+"";return{c(){t=u("div"),n=_(l)},m(e,l){o(e,t,l),r(t,n)},p(e,t){4096&t[0]&&l!==(l=e[69]+"")&&m(n,l)},d(e){e&&s(t)}}}function ce(e){let t,n,l,a,i,g,h=e[19][e[79]][e[3]]+"",v="filtered_all_descs"===e[79]&&re(e),b=e[80],y=[];for(let t=0;t<b.length;t+=1)y[t]=ge(M(e,b,t));return{c(){t=u("div"),n=u("h1"),l=_(h),a=f(),v&&v.c(),i=f();for(let e=0;e<y.length;e+=1)y[e].c();p(n,"class","svelte-13bc2uz"),p(t,"class",g=c(e[79])+" svelte-13bc2uz")},m(e,c){o(e,t,c),r(t,n),r(n,l),r(t,a),v&&v.m(t,null),r(t,i);for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(t,null)},p(e,n){if(16392&n[0]&&h!==(h=e[19][e[79]][e[3]]+"")&&m(l,h),"filtered_all_descs"===e[79]?v?v.p(e,n):(v=re(e),v.c(),v.m(t,i)):v&&(v.d(1),v=null),109690888&n[0]|4&n[1]){let l;for(b=e[80],l=0;l<b.length;l+=1){const a=M(e,b,l);y[l]?y[l].p(a,n):(y[l]=ge(a),y[l].c(),y[l].m(t,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=b.length}16384&n[0]&&g!==(g=c(e[79])+" svelte-13bc2uz")&&p(t,"class",g)},d(e){e&&s(t),v&&v.d(),d(y,e)}}}function re(e){let t,n,l,a,i,c,p=e[19].clear_filtered_all_descs[e[3]]+"",v=e[11],b=[];for(let t=0;t<v.length;t+=1)b[t]=de(H(e,v,t));return{c(){t=u("button"),n=_(p),l=f();for(let e=0;e<b.length;e+=1)b[e].c();a=g()},m(s,d){o(s,t,d),r(t,n),o(s,l,d);for(let e=0;e<b.length;e+=1)b[e]&&b[e].m(s,d);o(s,a,d),i||(c=h(t,"click",e[27]),i=!0)},p(e,t){if(8&t[0]&&p!==(p=e[19].clear_filtered_all_descs[e[3]]+"")&&m(n,p),268437568&t[0]){let n;for(v=e[11],n=0;n<v.length;n+=1){const l=H(e,v,n);b[n]?b[n].p(l,t):(b[n]=de(l),b[n].c(),b[n].m(a.parentNode,a))}for(;n<b.length;n+=1)b[n].d(1);b.length=v.length}},d(e){e&&s(t),e&&s(l),d(b,e),e&&s(a),i=!1,c()}}}function oe(e){let t,n,l,a,i=e[72].name+"";function c(){return e[45](e[72])}return{c(){t=u("button"),n=_(i)},m(e,i){o(e,t,i),r(t,n),l||(a=h(t,"click",c),l=!0)},p(t,l){e=t,64&l[0]&&i!==(i=e[72].name+"")&&m(n,i)},d(e){e&&s(t),l=!1,a()}}}function se(e){let t,n=e[72].id===e[88]&&oe(e);return{c(){n&&n.c(),t=g()},m(e,l){n&&n.m(e,l),o(e,t,l)},p(e,l){e[72].id===e[88]?n?n.p(e,l):(n=oe(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&s(t)}}}function de(e){let t,n=e[6],l=[];for(let t=0;t<n.length;t+=1)l[t]=se(U(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=g()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);o(e,t,n)},p(e,a){if(268437568&a[0]){let i;for(n=e[6],i=0;i<n.length;i+=1){const c=U(e,n,i);l[i]?l[i].p(c,a):(l[i]=se(c),l[i].c(),l[i].m(t.parentNode,t))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(e){d(l,e),e&&s(t)}}}function ue(e){let t,n,a,i,c,d,g,p=e[19].set_desc_data[e[3]]+"",v=e[19].delete_desc[e[3]]+"";function b(){return e[47](e[83])}function y(){return e[48](e[83])}return{c(){t=u("button"),n=_(p),a=f(),i=u("button"),c=_(v)},m(e,l){o(e,t,l),r(t,n),o(e,a,l),o(e,i,l),r(i,c),d||(g=[h(t,"click",b),h(i,"click",y)],d=!0)},p(t,l){e=t,8&l[0]&&p!==(p=e[19].set_desc_data[e[3]]+"")&&m(n,p),8&l[0]&&v!==(v=e[19].delete_desc[e[3]]+"")&&m(c,v)},d(e){e&&s(t),e&&s(a),e&&s(i),d=!1,l(g)}}}function _e(e){let t,n=e[83].tags,l=[];for(let t=0;t<n.length;t+=1)l[t]=fe(F(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=g()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);o(e,t,n)},p(e,a){if(67125248&a[0]){let i;for(n=e[83].tags,i=0;i<n.length;i+=1){const c=F(e,n,i);l[i]?l[i].p(c,a):(l[i]=fe(c),l[i].c(),l[i].m(t.parentNode,t))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(e){d(l,e),e&&s(t)}}}function fe(e){let t,n,l,a,i=e[72].name+"";function c(){return e[49](e[72])}return{c(){t=u("button"),n=_(i)},m(e,i){o(e,t,i),r(t,n),l||(a=h(t,"click",c),l=!0)},p(t,l){e=t,16384&l[0]&&i!==(i=e[72].name+"")&&m(n,i)},d(e){e&&s(t),l=!1,a()}}}function ge(e){let t,n,a,i,c,d,g,v,b,y,w,z,$,k,j,T,E,x=e[83].id+"",C=e[83].title+"",N=(e[83].description.length>200&&!e[16]?e[83].description.slice(0,200)+"...▼":e[83].description)+"";function O(){return e[46](e[83])}let S="any_user_new_all_descs_with_tags"===e[79]&&e[15]&&ue(e),A=e[83].tags&&_e(e);return{c(){t=u("div"),n=u("p"),a=u("button"),i=_("id: "),c=_(x),d=f(),S&&S.c(),v=f(),b=u("p"),y=_(C),w=f(),z=u("p"),$=u("button"),k=_(N),j=f(),A&&A.c(),p(a,"class","button_reset svelte-13bc2uz"),p(n,"id",g=e[83].id),p(b,"class","break_word_title svelte-13bc2uz"),p($,"class","button_reset break_word svelte-13bc2uz"),p(z,"class","break_word svelte-13bc2uz")},m(l,s){o(l,t,s),r(t,n),r(n,a),r(a,i),r(a,c),r(n,d),S&&S.m(n,null),r(t,v),r(t,b),r(b,y),r(t,w),r(t,z),r(z,$),r($,k),r(t,j),A&&A.m(t,null),T||(E=[h(a,"click",O),h($,"click",e[23])],T=!0)},p(l,a){e=l,16384&a[0]&&x!==(x=e[83].id+"")&&m(c,x),"any_user_new_all_descs_with_tags"===e[79]&&e[15]?S?S.p(e,a):(S=ue(e),S.c(),S.m(n,null)):S&&(S.d(1),S=null),16384&a[0]&&g!==(g=e[83].id)&&p(n,"id",g),16384&a[0]&&C!==(C=e[83].title+"")&&m(y,C),81920&a[0]&&N!==(N=(e[83].description.length>200&&!e[16]?e[83].description.slice(0,200)+"...▼":e[83].description)+"")&&m(k,N),e[83].tags?A?A.p(e,a):(A=_e(e),A.c(),A.m(t,null)):A&&(A.d(1),A=null)},d(e){e&&s(t),S&&S.d(),A&&A.d(),T=!1,l(E)}}}function he(e){let t,n="all_tags"!==e[79]&&ce(e);return{c(){n&&n.c(),t=g()},m(e,l){n&&n.m(e,l),o(e,t,l)},p(e,l){"all_tags"!==e[79]?n?n.p(e,l):(n=ce(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&s(t)}}}function pe(e){let t,n=e[14].all_tags,l=[];for(let t=0;t<n.length;t+=1)l[t]=me(G(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=g()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);o(e,t,n)},p(e,a){if(67125248&a[0]){let i;for(n=e[14].all_tags,i=0;i<n.length;i+=1){const c=G(e,n,i);l[i]?l[i].p(c,a):(l[i]=me(c),l[i].c(),l[i].m(t.parentNode,t))}for(;i<l.length;i+=1)l[i].d(1);l.length=n.length}},d(e){d(l,e),e&&s(t)}}}function me(e){let t,n,l,a,i=e[72].name+"";function c(){return e[50](e[72])}return{c(){t=u("button"),n=_(i)},m(e,i){o(e,t,i),r(t,n),l||(a=h(t,"click",c),l=!0)},p(t,l){e=t,16384&l[0]&&i!==(i=e[72].name+"")&&m(n,i)},d(e){e&&s(t),l=!1,a()}}}function ve(e){let t,n,a,i,c,b,y,w,z,$,k,j,T,E,x,C,N,O,S,A,I,q,P,L,D,B,V,G,K,M,F,H,U=e[19].clear_title_description_tags[e[3]]+"",Y=e[19].tag[e[3]]+"",Z=e[19].add_tag_to_desc[e[3]]+"",Q=e[10],R=[];for(let t=0;t<Q.length;t+=1)R[t]=be(J(e,Q,t));let X=e[6],ee=[];for(let t=0;t<X.length;t+=1)ee[t]=ye(W(e,X,t));let te=e[12].length>0&&we(e),ne=null===e[7]&&$e(e),le=null!==e[7]&&ke(e);return{c(){t=u("p"),n=_("id: "),a=_(e[7]),i=f(),c=u("button"),b=_(U),y=f(),w=u("div"),w.textContent="title:",z=f(),$=u("textarea"),k=f(),j=u("div"),j.textContent="description:",T=f(),E=u("textarea"),x=f(),C=u("div");for(let e=0;e<R.length;e+=1)R[e].c();N=f(),O=u("label"),S=_(Y),A=f(),I=u("input"),q=f(),P=u("datalist");for(let e=0;e<ee.length;e+=1)ee[e].c();L=f(),D=u("button"),B=_(Z),V=f(),te&&te.c(),G=f(),ne&&ne.c(),K=f(),le&&le.c(),M=g(),p($,"class","title svelte-13bc2uz"),p($,"minlength","1"),p($,"maxlength","100"),$.required=!0,p($,"placeholder","1_100"),p(E,"class","description svelte-13bc2uz"),p(E,"minlength","1"),p(E,"maxlength","1000"),E.required=!0,p(E,"placeholder","1_1000"),p(O,"for","my_all_tags"),p(I,"list","all_tags"),p(I,"id","my_all_tags"),p(I,"name","my_all_tags"),p(I,"minlength","1"),p(I,"maxlength","10"),I.required=!0,p(I,"placeholder","1_10"),p(P,"id","all_tags")},m(l,s){o(l,t,s),r(t,n),r(t,a),o(l,i,s),o(l,c,s),r(c,b),o(l,y,s),o(l,w,s),o(l,z,s),o(l,$,s),v($,e[8]),o(l,k,s),o(l,j,s),o(l,T,s),o(l,E,s),v(E,e[9]),o(l,x,s),o(l,C,s);for(let e=0;e<R.length;e+=1)R[e]&&R[e].m(C,null);o(l,N,s),o(l,O,s),r(O,S),o(l,A,s),o(l,I,s),v(I,e[5]),o(l,q,s),o(l,P,s);for(let e=0;e<ee.length;e+=1)ee[e]&&ee[e].m(P,null);o(l,L,s),o(l,D,s),r(D,B),o(l,V,s),te&&te.m(l,s),o(l,G,s),ne&&ne.m(l,s),o(l,K,s),le&&le.m(l,s),o(l,M,s),F||(H=[h(c,"click",e[22]),h($,"input",e[52]),h(E,"input",e[53]),h(I,"input",e[55]),h(D,"click",e[56])],F=!0)},p(e,t){if(128&t[0]&&m(a,e[7]),8&t[0]&&U!==(U=e[19].clear_title_description_tags[e[3]]+"")&&m(b,U),256&t[0]&&v($,e[8]),512&t[0]&&v(E,e[9]),1024&t[0]){let n;for(Q=e[10],n=0;n<Q.length;n+=1){const l=J(e,Q,n);R[n]?R[n].p(l,t):(R[n]=be(l),R[n].c(),R[n].m(C,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=Q.length}if(8&t[0]&&Y!==(Y=e[19].tag[e[3]]+"")&&m(S,Y),32&t[0]&&I.value!==e[5]&&v(I,e[5]),64&t[0]){let n;for(X=e[6],n=0;n<X.length;n+=1){const l=W(e,X,n);ee[n]?ee[n].p(l,t):(ee[n]=ye(l),ee[n].c(),ee[n].m(P,null))}for(;n<ee.length;n+=1)ee[n].d(1);ee.length=X.length}8&t[0]&&Z!==(Z=e[19].add_tag_to_desc[e[3]]+"")&&m(B,Z),e[12].length>0?te?te.p(e,t):(te=we(e),te.c(),te.m(G.parentNode,G)):te&&(te.d(1),te=null),null===e[7]?ne?ne.p(e,t):(ne=$e(e),ne.c(),ne.m(K.parentNode,K)):ne&&(ne.d(1),ne=null),null!==e[7]?le?le.p(e,t):(le=ke(e),le.c(),le.m(M.parentNode,M)):le&&(le.d(1),le=null)},d(e){e&&s(t),e&&s(i),e&&s(c),e&&s(y),e&&s(w),e&&s(z),e&&s($),e&&s(k),e&&s(j),e&&s(T),e&&s(E),e&&s(x),e&&s(C),d(R,e),e&&s(N),e&&s(O),e&&s(A),e&&s(I),e&&s(q),e&&s(P),d(ee,e),e&&s(L),e&&s(D),e&&s(V),te&&te.d(e),e&&s(G),ne&&ne.d(e),e&&s(K),le&&le.d(e),e&&s(M),F=!1,l(H)}}}function be(e){let t,n,l,a,i=e[72].name+"";function c(){return e[54](e[72])}return{c(){t=u("button"),n=_(i)},m(e,i){o(e,t,i),r(t,n),l||(a=h(t,"click",c),l=!0)},p(t,l){e=t,1024&l[0]&&i!==(i=e[72].name+"")&&m(n,i)},d(e){e&&s(t),l=!1,a()}}}function ye(e){let t,n;return{c(){t=u("option"),t.__value=n=e[72].name,t.value=t.__value},m(e,n){o(e,t,n)},p(e,l){64&l[0]&&n!==(n=e[72].name)&&(t.__value=n,t.value=t.__value)},d(e){e&&s(t)}}}function we(e){let t,n,l,a,i=e[19].errors[e[3]]+"",c=e[12],h=[];for(let t=0;t<c.length;t+=1)h[t]=ze(V(e,c,t));return{c(){t=u("h2"),n=_(i),l=f();for(let e=0;e<h.length;e+=1)h[e].c();a=g()},m(e,i){o(e,t,i),r(t,n),o(e,l,i);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(e,i);o(e,a,i)},p(e,t){if(8&t[0]&&i!==(i=e[19].errors[e[3]]+"")&&m(n,i),4096&t[0]){let n;for(c=e[12],n=0;n<c.length;n+=1){const l=V(e,c,n);h[n]?h[n].p(l,t):(h[n]=ze(l),h[n].c(),h[n].m(a.parentNode,a))}for(;n<h.length;n+=1)h[n].d(1);h.length=c.length}},d(e){e&&s(t),e&&s(l),d(h,e),e&&s(a)}}}function ze(e){let t,n,l=e[69]+"";return{c(){t=u("p"),n=_(l)},m(e,l){o(e,t,l),r(t,n)},p(e,t){4096&t[0]&&l!==(l=e[69]+"")&&m(n,l)},d(e){e&&s(t)}}}function $e(e){let t,n,l,a,i=e[19].insert_desc[e[3]]+"";return{c(){t=u("button"),n=_(i),p(t,"class","fetch_insert_desc_button svelte-13bc2uz")},m(i,c){o(i,t,c),r(t,n),l||(a=h(t,"click",e[30]),l=!0)},p(e,t){8&t[0]&&i!==(i=e[19].insert_desc[e[3]]+"")&&m(n,i)},d(e){e&&s(t),l=!1,a()}}}function ke(e){let t,n,l,a,i=e[19].update_desc[e[3]]+"";return{c(){t=u("button"),n=_(i),p(t,"class","fetch_update_desc_button svelte-13bc2uz")},m(i,c){o(i,t,c),r(t,n),l||(a=h(t,"click",e[32]),l=!0)},p(e,t){8&t[0]&&i!==(i=e[19].update_desc[e[3]]+"")&&m(n,i)},d(e){e&&s(t),l=!1,a()}}}function je(t){let n,a,i,c,g,v,b,y,w,z,$,k,j,T,E,x,C,N,O,S,A,I,q,P,L,D,B,V,W=t[19].right[t[3]]+"",J=t[19].web_data_tags[t[3]]+"",G=t[19].web_data_edit[t[3]]+"",M=t[19].left[t[3]]+"",F=t[1]&&R(t),H=t[12]>0&&ae(t),U=Object.entries(t[14]),Y=[];for(let e=0;e<U.length;e+=1)Y[e]=he(K(t,U,e));let Z=t[14].all_tags&&pe(t),Q=""!==t[15]&&ve(t);return{c(){n=u("div"),a=u("div"),i=u("button"),i.textContent="≡",c=f(),F&&F.c(),g=f(),v=u("div"),b=u("div"),y=u("div"),H&&H.c(),w=f(),z=u("div"),$=u("button"),k=_(W),j=f();for(let e=0;e<Y.length;e+=1)Y[e].c();T=f(),E=u("div"),x=u("h1"),C=_(J),N=f(),Z&&Z.c(),O=f(),S=u("div"),A=u("h1"),I=_(G),q=f(),P=u("button"),L=_(M),D=f(),Q&&Q.c(),p(i,"class","toggle_menu svelte-13bc2uz"),p(a,"class","header svelte-13bc2uz"),p(y,"class","console"),p($,"class","edit_button svelte-13bc2uz"),p(x,"class","svelte-13bc2uz"),p(E,"class","web_data_tags svelte-13bc2uz"),p(z,"class","list svelte-13bc2uz"),p(b,"class","left_column server_side svelte-13bc2uz"),p(A,"class","svelte-13bc2uz"),p(P,"class","list_button svelte-13bc2uz"),p(S,"class","right_column svelte-13bc2uz"),p(v,"class","content svelte-13bc2uz"),p(n,"class","container svelte-13bc2uz")},m(e,l){o(e,n,l),r(n,a),r(a,i),r(a,c),F&&F.m(a,null),r(n,g),r(n,v),r(v,b),r(b,y),H&&H.m(y,null),r(b,w),r(b,z),r(z,$),r($,k),r(z,j);for(let e=0;e<Y.length;e+=1)Y[e]&&Y[e].m(z,null);r(z,T),r(z,E),r(E,x),r(x,C),r(E,N),Z&&Z.m(E,null),r(v,O),r(v,S),r(S,A),r(A,I),r(S,q),r(S,P),r(P,L),r(S,D),Q&&Q.m(S,null),B||(V=[h(i,"click",t[17]),h($,"click",t[44]),h(P,"click",t[51])],B=!0)},p(e,t){if(e[1]?F?F.p(e,t):(F=R(e),F.c(),F.m(a,null)):F&&(F.d(1),F=null),e[12]>0?H?H.p(e,t):(H=ae(e),H.c(),H.m(y,null)):H&&(H.d(1),H=null),8&t[0]&&W!==(W=e[19].right[e[3]]+"")&&m(k,W),512346184&t[0]|4&t[1]){let n;for(U=Object.entries(e[14]),n=0;n<U.length;n+=1){const l=K(e,U,n);Y[n]?Y[n].p(l,t):(Y[n]=he(l),Y[n].c(),Y[n].m(z,T))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=U.length}8&t[0]&&J!==(J=e[19].web_data_tags[e[3]]+"")&&m(C,J),e[14].all_tags?Z?Z.p(e,t):(Z=pe(e),Z.c(),Z.m(E,null)):Z&&(Z.d(1),Z=null),8&t[0]&&G!==(G=e[19].web_data_edit[e[3]]+"")&&m(I,G),8&t[0]&&M!==(M=e[19].left[e[3]]+"")&&m(L,M),""!==e[15]?Q?Q.p(e,t):(Q=ve(e),Q.c(),Q.m(S,null)):Q&&(Q.d(1),Q=null)},i:e,o:e,d(e){e&&s(n),F&&F.d(),H&&H.d(),d(Y,e),Z&&Z.d(),Q&&Q.d(),B=!1,l(V)}}}let Te="https://cotton-concrete-catsup.glitch.me/app8";function Ee(e,t,n){let l=!1;let a=!1,i="en";let c="left";const r={auth_login_result:{en:"Log in result",ja:"ログイン結果",zh:"登录结果",es:"resultado de inicio de sesión"},auth_sign_out:{en:"Sign out",ja:"サインアウト",zh:"登出",es:"Cerrar sesión"},web_data_tags:{en:"Web data tags",ja:"ウェブデータタグ",zh:"网页数据标签",es:"Etiquetas de datos web"},any_user_new_all_descs_with_tags:{en:"Any user new all descriptions with tags",ja:"任意のユーザーの新しいすべてのタグ付き説明",zh:"任何用户的新所有带标签的描述",es:"Cualquier usuario nuevo todas las descripciones con etiquetas"},all_descs:{en:"All descriptions",ja:"すべての説明",zh:"所有描述",es:"Todas las descripciones"},filtered_all_descs:{en:"Filtered all descriptions",ja:"すべての説明をフィルター",zh:"过滤所有描述",es:"Todas las descripciones filtradas"},web_data_edit:{en:"Web data edit",ja:"ウェブデータ編集",zh:"网页数据编辑",es:"Edición de datos web"},title:{en:"Title",ja:"タイトル",zh:"标题",es:"Título"},description:{en:"Description",ja:"説明",zh:"描述",es:"Descripción"},tag:{en:"Tag",ja:"タグ",zh:"标签",es:"Etiqueta"},set_desc_data:{en:"Set description data",ja:"説明データを設定",zh:"设置描述数据",es:"Establecer datos de descripción"},delete_desc:{en:"Delete description",ja:"説明を削除",zh:"删除描述",es:"Eliminar descripción"},add_tag_to_desc:{en:"Add tag to description",ja:"説明にタグを追加",zh:"添加标签到描述",es:"Agregar etiqueta a la descripción"},update_desc:{en:"Update description",ja:"説明を更新",zh:"更新描述",es:"Actualizar descripción"},insert_desc:{en:"Insert description",ja:"説明を挿入",zh:"插入描述",es:"Insertar descripción"},clear_filtered_all_descs:{en:"Clear filtered all descriptions",ja:"すべてのフィルターをクリア",zh:"清除所有过滤描述",es:"Borrar todas las descripciones filtradas"},errors:{en:"Errors",ja:"エラー",zh:"错误",es:"Errores"},is_auth_uid_valid:{en:"Invalid auth_uid",ja:"無効なauth_uid",zh:"无效的auth_uid",es:"auth_uid no válido"},is_title_valid:{ja:"タイトルは1文字以上100文字以下",en:"Title must be between 1 and 100 characters",zh:"标题必须在1到100个字符之间",es:"El título debe tener entre 1 y 100 caracteres"},is_description_valid:{ja:"説明は1文字以上1000文字以下",en:"Description must be between 1 and 1000 characters",zh:"描述必须在1到1000个字符之间",es:"La descripción debe tener entre 1 y 1000 caracteres"},are_tags_valid:{ja:"タグは1文字以上10文字以下",en:"Tags must be between 1 and 10 characters",zh:"标签必须在1到10个字符之间",es:"Las etiquetas deben tener entre 1 y 10 caracteres"},confirm_clear_title_description_tags:{ja:"タイトル、説明、タグをクリアしますか？",en:"Clear title, description, and tags?",zh:"清除标题、描述和标签吗？",es:"¿Borrar título, descripción y etiquetas?"},clear_title_description_tags:{ja:"タイトル、説明、タグをクリア",en:"Clear title, description, and tags",zh:"清除标题、描述和标签",es:"Borrar título, descripción y etiquetas"},sort:{ja:"並べ替え",en:"Sort",zh:"分类",es:"Clasificar"},left:{ja:"リスト表示",en:"List view",zh:"列表视图",es:"Vista de lista"},right:{ja:"編集表示",en:"Edit view",zh:"编辑视图",es:"Vista de edición"},select_language:{ja:"言語を選択",en:"Select language",zh:"选择语言",es:"Seleccionar idioma"}},o=["id","title","description","tags","created_at","updated_at"];let s={kind:"id",order:"desc"};function d(){try{if(null===s.kind||null===s.order)return;if(void 0===w.all_descs)return;if(void 0===w.any_user_new_all_descs_with_tags)return;const e=(e,t)=>{switch(s.kind){case"id":return"asc"===s.order?e.id-t.id:t.id-e.id;case"title":return"asc"===s.order?e.title.localeCompare(t.title):t.title.localeCompare(e.title);case"description":return"asc"===s.order?e.description.localeCompare(t.description):t.description.localeCompare(e.description);case"tags":return"asc"===s.order?e.tags.length-t.tags.length:t.tags.length-e.tags.length;case"created_at":return"asc"===s.order?e.created_at.localeCompare(t.created_at):t.created_at.localeCompare(e.created_at);case"updated_at":return"asc"===s.order?e.updated_at.localeCompare(t.updated_at):t.updated_at.localeCompare(e.updated_at);default:return 0}},t=w.all_descs.sort(e),l=w.any_user_new_all_descs_with_tags.sort(e);n(14,w={...w,all_descs:t,any_user_new_all_descs_with_tags:l})}catch(e){console.error("Error:",e)}}let u="",_=[],f=null,g="",h="",p=[],m=[],v=[],b="Not logged in",w={all_descs:[],all_tags:[],any_user_new_all_descs_with_tags:[],filtered_all_descs:[]},z={},k="",j=!1;function T(e,t){try{if(console.log(v),n(12,v=v.filter((e=>!e.includes(r.are_tags_valid[i])))),console.log(v),!N.validate_tag_name(t))return void v.push(r.are_tags_valid[i]);const l=_.find((e=>e.name===t));if(l){l.desc_id=e;const t=p.some((e=>e.id==e.id));t||n(10,p=[...p,l]),n(5,u="")}else{const l={id:_.length+1,name:t,desc_id:e,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString()};n(6,_=[..._,l]),n(10,p=[...p,l])}}catch(e){console.error("Error:",e)}}function E(e){try{const t=w.all_descs.find((t=>t.id===e));t?(n(7,f=t.id),n(8,g=t.title),n(9,h=t.description),n(10,p=t.tags)):console.error(`No description found with id: ${e}`),n(0,c="right")}catch(e){console.error("Error:",e)}}function x(e){m.some((t=>t===e))||n(11,m=[...m,e]);const t=w.all_descs.filter((e=>e.tags.some((e=>m.some((t=>t===e.id))))));n(14,w.filtered_all_descs=t,w)}function C(e){n(11,m=m.filter((t=>t!==e))),n(14,w.filtered_all_descs=w.filtered_all_descs.filter((e=>e.tags.some((e=>m.some((t=>t===e.id)))))),w)}const N={validate_auth_uid:e=>/^[a-zA-Z0-9_-]+$/.test(e),validate_desc_id:e=>(console.log("validate_desc_id",e),Number.isInteger(e)&&e>0),validate_iso_date:e=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(e),validate_title:e=>(console.log("validate_title",e),"string"==typeof e&&e.length>=1&&e.length<=100),validate_description:e=>(console.log("validate_description",e),"string"==typeof e&&e.length>=1&&e.length<=1e3),validate_tag_name:e=>(console.log("validate_tag_name",e),"string"==typeof e&&e.length>=1&&e.length<=10),validate_data(e){const{auth_uid:t,desc_id:n,title:l,description:a,tags:i}=e,c=this.validate_auth_uid(t),r=this.validate_title(l),o=this.validate_description(a);console.log("tags",i);return{is_auth_uid_valid:c,is_title_valid:r,is_description_valid:o,are_tags_valid:i.every((e=>this.validate_tag_name(e.name)))}}};function O(){const e={auth_uid:k,desc_id:f,title:g,description:h,tags:p};n(12,v=[]);for(const[t,n]of Object.entries(N.validate_data(e)))if(n||v.push(r[t][i]),"tags"===t)for(const[e,t]of n.entries())for(const[n,l]of Object.entries(N.validate_data(t)))l||v.push(`tags[${e}].${n}`);else"auth_uid"===t&&N.validate_auth_uid(k),"desc_id"===t&&N.validate_desc_id(f),"title"===t&&N.validate_title(g),"description"===t&&N.validate_description(h);return!(v.length>0)||(console.log(v),!1)}async function S(){try{if(!O())throw new Error("Validation failed");const e=await fetch(Te+"/insert_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:k,title:g,description:h,tags:p})});await A(e),n(0,c="left")}catch(e){console.error("Error:",e)}}async function A(e){try{const t=await e.json();t.filtered_all_descs=w.filtered_all_descs?w.filtered_all_descs:[],z=Object.fromEntries(Object.entries(t).filter((([e,t])=>"all_descs"!==e&&"all_tags"!==e&&"any_user_new_all_descs_with_tags"!==e))),n(14,w=Object.fromEntries(Object.entries(t).filter((([e,t])=>"all_descs"===e||"all_tags"===e||"any_user_new_all_descs_with_tags"===e||"filtered_all_descs"===e)))),n(6,_=t.all_tags),d()}catch(e){console.error("Error:",e)}}async function I(){try{const e=await fetch(Te+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:k})});await A(e)}catch(e){console.error("Error:",e)}}async function q(e){try{const t=await fetch(Te+"/delete_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,auth_uid:k})});await A(t)}catch(e){console.error("Error:",e)}}firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const P=new firebase.auth.GoogleAuthProvider;const L=[{auth_uid:"user1",desc_id:1,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo1",description:"bar1",tags:[{desc_id:1,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:2,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo2",description:"bar2",tags:[{desc_id:2,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:2,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user2",desc_id:3,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo3",description:"bar3",tags:[{desc_id:3,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:3,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}],D=[{auth_uid:"user1",desc_id:4,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"a".repeat(100),description:"b".repeat(1e3),tags:[{desc_id:4,id:4,name:"tag4",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:5,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"",description:"",tags:[{desc_id:5,id:5,name:"t".repeat(10),created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}];$((async()=>{await async function(){try{const e=await new Promise(((e,t)=>{firebase.auth().onAuthStateChanged(e,t)}));console.log("Current user:",e),e?(n(15,k=e.uid),n(13,b="Logged in")):(console.log(2),n(13,b="Not logged in"),n(15,k=""))}catch(e){console.error("Error during authentication:",e),n(13,b="Authentication failed"),n(15,k="")}}(),console.log("auth_check_login"),await I(),console.log("fetch_get_all_descs_and_tags"),function(){if(location.hash){const e=location.hash.slice(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}}()}));return e.$$.update=()=>{1&e.$$.dirty[0]&&(async()=>{"left"===c?(document.documentElement.style.setProperty("--display-left-column","block"),document.documentElement.style.setProperty("--display-right-column","none")):"right"===c&&(document.documentElement.style.setProperty("--display-left-column","none"),document.documentElement.style.setProperty("--display-right-column","block"))})()},[c,l,a,i,s,u,_,f,g,h,p,m,v,b,w,k,j,function(){n(1,l=!l)},function(){n(2,a=!a)},r,o,d,function(){confirm(r.confirm_clear_title_description_tags[i])&&(n(8,g=""),n(9,h=""),n(10,p=[]),n(7,f=null))},function(){n(16,j=!j)},T,E,x,async function(){n(14,w.filtered_all_descs=[],w),n(11,m=[])},C,async function(){try{for(const e of L)n(15,k=e.auth_uid),n(7,f=e.desc_id),n(8,g=e.title),n(9,h=e.description),n(10,p=e.tags),await S()}catch(e){console.error("Error:",e)}},S,I,async function(){try{if(!O())throw new Error("Validation failed");const e=await fetch(Te+"/update_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:k,desc_id:f,title:g,description:h,tags:p})});await A(e),n(0,c="left")}catch(e){console.error("Error:",e)}},q,async function(){try{console.log("auth_google_login");const e=(await firebase.auth().signInWithPopup(P)).user;console.log(4),n(13,b=`Logged in as: ${e.displayName}`)}catch(e){console.error("Error during Google login:",e),alert("Google login failed. "+e.message)}},async function(){try{console.log(5),await firebase.auth().signOut(),n(13,b="Not logged in")}catch(e){console.error("Error during sign-out:",e),alert("Sign out failed. "+e.message)}},function(){n(8,g=D[1].title),n(9,h=D[1].description),n(10,p=D[1].tags),S()},function(){i=this.__value,n(3,i)},[[]],function(){i=this.__value,n(3,i)},function(){i=this.__value,n(3,i)},function(){i=this.__value,n(3,i)},function(){s.kind=y(this),n(4,s),n(20,o)},function(){s.order=y(this),n(4,s),n(20,o)},()=>n(0,c="right"),e=>C(e.id),e=>{return t=e.id,navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#${t}`),void alert("Link copied to clipboard");var t},e=>E(e.id),e=>q(e.id),e=>x(e.id),e=>x(e.id),()=>n(0,c="left"),function(){g=this.value,n(8,g)},function(){h=this.value,n(9,h)},e=>n(10,p=p.filter((t=>t.id!==e.id))),function(){u=this.value,n(5,u)},()=>T(f,u)]}return new class extends B{constructor(e){super(),D(this,e,Ee,je,i,{},null,[-1,-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
