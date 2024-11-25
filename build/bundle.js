var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function l(e){e.forEach(t)}function a(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(e){return null==e?"":e}function s(e,t){e.appendChild(t)}function o(e,t,n){e.insertBefore(t,n||null)}function r(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function u(e){return document.createElement(e)}function _(e){return document.createTextNode(e)}function f(){return _(" ")}function g(){return _("")}function h(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){t=""+t,e.data!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}function b(e,t,n){for(let n=0;n<e.options.length;n+=1){const l=e.options[n];if(l.__value===t)return void(l.selected=!0)}n&&void 0===t||(e.selectedIndex=-1)}function y(e){const t=e.querySelector(":checked");return t&&t.__value}function q(e,t,n){e.classList[n?"add":"remove"](t)}let w;function $(e){w=e}function k(e){(function(){if(!w)throw new Error("Function called outside component initialization");return w})().$$.on_mount.push(e)}const j=[],T=[];let E=[];const z=[],x=Promise.resolve();let C=!1;function N(e){E.push(e)}const O=new Set;let S=0;function I(){if(0!==S)return;const e=w;do{try{for(;S<j.length;){const e=j[S];S++,$(e),A(e.$$)}}catch(e){throw j.length=0,S=0,e}for($(null),j.length=0,S=0;T.length;)T.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];O.has(t)||(O.add(t),t())}E.length=0}while(j.length);for(;z.length;)z.pop()();C=!1,O.clear(),$(e)}function A(e){if(null!==e.fragment){e.update(),l(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}const P=new Set;function L(e,t){const n=e.$$;null!==n.fragment&&(!function(e){const t=[],n=[];E.forEach((l=>-1===e.indexOf(l)?t.push(l):n.push(l))),n.forEach((e=>e())),E=t}(n.after_update),l(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){-1===e.$$.dirty[0]&&(j.push(e),C||(C=!0,x.then(I)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function B(c,i,s,o,d,u,_,f=[-1]){const g=w;$(c);const h=c.$$={fragment:null,ctx:[],props:u,update:e,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(g?g.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:i.target||g.$$.root};_&&_(h.root);let p=!1;if(h.ctx=s?s(c,i.props||{},((e,t,...n)=>{const l=n.length?n[0]:t;return h.ctx&&d(h.ctx[e],h.ctx[e]=l)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](l),p&&D(c,e)),t})):[],h.update(),p=!0,l(h.before_update),h.fragment=!!o&&o(h.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);h.fragment&&h.fragment.l(e),e.forEach(r)}else h.fragment&&h.fragment.c();i.intro&&((m=c.$$.fragment)&&m.i&&(P.delete(m),m.i(v))),function(e,n,c,i){const{fragment:s,after_update:o}=e.$$;s&&s.m(n,c),i||N((()=>{const n=e.$$.on_mount.map(t).filter(a);e.$$.on_destroy?e.$$.on_destroy.push(...n):l(n),e.$$.on_mount=[]})),o.forEach(N)}(c,i.target,i.anchor,i.customElement),I()}var m,v;$(g)}class V{$destroy(){L(this,1),this.$destroy=e}$on(t,n){if(!a(n))return e;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const e=l.indexOf(n);-1!==e&&l.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function W(e,t,n){const l=e.slice();return l[72]=t[n],l}function J(e,t,n){const l=e.slice();return l[75]=t[n],l}function M(e,t,n){const l=e.slice();return l[75]=t[n],l}function F(e,t,n){const l=e.slice();return l[80]=t[n][0],l[81]=t[n][1],l}function G(e,t,n){const l=e.slice();return l[75]=t[n],l}function K(e,t,n){const l=e.slice();return l[86]=t[n],l}function H(e,t,n){const l=e.slice();return l[75]=t[n],l}function U(e,t,n){const l=e.slice();return l[91]=t[n],l}function Y(e,t,n){const l=e.slice();return l[75]=t[n],l}function Z(e,t,n){const l=e.slice();return l[96]=t[n],l}function Q(e,t,n){const l=e.slice();return l[72]=t[n],l}function R(e,t,n){const l=e.slice();return l[101]=t[n],l}function X(e,t,n){const l=e.slice();return l[104]=t[n],l}function ee(e){let t,n,a,c,i,g,v,y,q,w,$,k,j,T,E,z,x,C,O,S,I,A,P,L,D,B=e[21].select_language[e[4]]+"",V=e[21].sort[e[4]]+"",W=e[21].auth_login_result[e[4]]+"",J=e[3]&&te(e),M=e[22],F=[];for(let t=0;t<M.length;t+=1)F[t]=ne(X(e,M,t));let G=["desc","asc"],K=[];for(let t=0;t<2;t+=1)K[t]=le(R(e,G,t));let H=""===e[16]&&ae(e),U=""!==e[16]&&ce(e);return{c(){t=u("div"),n=u("button"),a=_(B),c=f(),J&&J.c(),i=f(),g=u("div"),v=u("select");for(let e=0;e<F.length;e+=1)F[e].c();y=f(),q=u("select");for(let e=0;e<2;e+=1)K[e].c();w=f(),$=u("button"),k=_(V),j=f(),T=u("div"),T.textContent="v1.1.6",E=f(),z=u("div"),x=_(W),C=_(": "),O=u("span"),S=_(e[14]),I=f(),H&&H.c(),A=f(),U&&U.c(),P=f(),p(n,"class","svelte-10bqm5q"),void 0===e[5].kind&&N((()=>e[44].call(v))),void 0===e[5].order&&N((()=>e[45].call(q))),p($,"class","svelte-10bqm5q"),p(T,"class","version"),p(t,"class","menu_list svelte-10bqm5q")},m(l,r){o(l,t,r),s(t,n),s(n,a),s(t,c),J&&J.m(t,null),s(t,i),s(t,g),s(g,v);for(let e=0;e<F.length;e+=1)F[e]&&F[e].m(v,null);b(v,e[5].kind,!0),s(g,y),s(g,q);for(let e=0;e<2;e+=1)K[e]&&K[e].m(q,null);b(q,e[5].order,!0),s(g,w),s(g,$),s($,k),s(t,j),s(t,T),s(t,E),s(t,z),s(z,x),s(z,C),s(z,O),s(O,S),s(t,I),H&&H.m(t,null),s(t,A),U&&U.m(t,null),s(t,P),L||(D=[h(n,"click",e[20]),h(v,"change",e[44]),h(q,"change",e[45]),h($,"click",e[23])],L=!0)},p(e,n){if(16&n[0]&&B!==(B=e[21].select_language[e[4]]+"")&&m(a,B),e[3]?J?J.p(e,n):(J=te(e),J.c(),J.m(t,i)):J&&(J.d(1),J=null),4194304&n[0]){let t;for(M=e[22],t=0;t<M.length;t+=1){const l=X(e,M,t);F[t]?F[t].p(l,n):(F[t]=ne(l),F[t].c(),F[t].m(v,null))}for(;t<F.length;t+=1)F[t].d(1);F.length=M.length}4194336&n[0]&&b(v,e[5].kind),4194336&n[0]&&b(q,e[5].order),16&n[0]&&V!==(V=e[21].sort[e[4]]+"")&&m(k,V),16&n[0]&&W!==(W=e[21].auth_login_result[e[4]]+"")&&m(x,W),16384&n[0]&&m(S,e[14]),""===e[16]?H?H.p(e,n):(H=ae(e),H.c(),H.m(t,A)):H&&(H.d(1),H=null),""!==e[16]?U?U.p(e,n):(U=ce(e),U.c(),U.m(t,P)):U&&(U.d(1),U=null)},d(e){e&&r(t),J&&J.d(),d(F,e),d(K,e),H&&H.d(),U&&U.d(),L=!1,l(D)}}}function te(e){let t,n,a,c,i,d,g,v,b,y,q,w,$,k,j,T,E,z,x,C,N,O,S,I,A,P,L=e[21].select_language[e[4]]+"";return I=function(e){let t;return{p(...n){t=n,t.forEach((t=>e.push(t)))},r(){t.forEach((t=>e.splice(e.indexOf(t),1)))}}}(e[40][0]),{c(){t=u("div"),n=u("div"),a=u("button"),a.textContent="×",c=f(),i=u("h2"),d=_(L),g=f(),v=u("div"),b=u("input"),y=f(),q=u("label"),q.textContent="🇺🇸 English",w=f(),$=u("input"),k=f(),j=u("label"),j.textContent="🇯🇵 日本語",T=f(),E=u("input"),z=f(),x=u("label"),x.textContent="🇨🇳🇹🇼 中文",C=f(),N=u("input"),O=f(),S=u("label"),S.textContent="🇪🇸 Español",p(a,"class","close svelte-10bqm5q"),p(b,"type","radio"),p(b,"id","en"),p(b,"name","design_lang"),b.__value="en",b.value=b.__value,p(q,"for","en"),p($,"type","radio"),p($,"id","ja"),p($,"name","design_lang"),$.__value="ja",$.value=$.__value,p(j,"for","ja"),p(E,"type","radio"),p(E,"id","zh"),p(E,"name","design_lang"),E.__value="zh",E.value=E.__value,p(x,"for","zh"),p(N,"type","radio"),p(N,"id","es"),p(N,"name","design_lang"),N.__value="es",N.value=N.__value,p(S,"for","es"),p(n,"class","modal-content svelte-10bqm5q"),p(t,"class","modal svelte-10bqm5q"),I.p(b,$,E,N)},m(l,r){o(l,t,r),s(t,n),s(n,a),s(n,c),s(n,i),s(i,d),s(n,g),s(n,v),s(v,b),b.checked=b.__value===e[4],s(v,y),s(v,q),s(v,w),s(v,$),$.checked=$.__value===e[4],s(v,k),s(v,j),s(v,T),s(v,E),E.checked=E.__value===e[4],s(v,z),s(v,x),s(v,C),s(v,N),N.checked=N.__value===e[4],s(v,O),s(v,S),A||(P=[h(a,"click",e[20]),h(b,"change",e[39]),h($,"change",e[41]),h(E,"change",e[42]),h(N,"change",e[43])],A=!0)},p(e,t){16&t[0]&&L!==(L=e[21].select_language[e[4]]+"")&&m(d,L),16&t[0]&&(b.checked=b.__value===e[4]),16&t[0]&&($.checked=$.__value===e[4]),16&t[0]&&(E.checked=E.__value===e[4]),16&t[0]&&(N.checked=N.__value===e[4])},d(e){e&&r(t),I.r(),A=!1,l(P)}}}function ne(t){let n,l,a=t[104]+"";return{c(){n=u("option"),l=_(a),n.__value=t[104],n.value=n.__value},m(e,t){o(e,n,t),s(n,l)},p:e,d(e){e&&r(n)}}}function le(t){let n,l;return{c(){n=u("option"),l=_(t[101]),n.__value=t[101],n.value=n.__value},m(e,t){o(e,n,t),s(n,l)},p:e,d(e){e&&r(n)}}}function ae(t){let n,l,a,c,i;return{c(){n=u("div"),l=_("auth_google_login: "),a=u("button"),a.textContent="auth_google_login",p(a,"class","svelte-10bqm5q")},m(e,r){o(e,n,r),s(n,l),s(n,a),c||(i=h(a,"click",t[36]),c=!0)},p:e,d(e){e&&r(n),c=!1,i()}}}function ce(e){let t,n,l,a,c,i=e[21].auth_sign_out[e[4]]+"";return{c(){t=u("div"),n=u("button"),l=_(i),p(n,"class","svelte-10bqm5q")},m(i,r){o(i,t,r),s(t,n),s(n,l),a||(c=h(n,"click",e[37]),a=!0)},p(e,t){16&t[0]&&i!==(i=e[21].auth_sign_out[e[4]]+"")&&m(l,i)},d(e){e&&r(t),a=!1,c()}}}function ie(e){let t,n,l,a=e[13],c=[];for(let t=0;t<a.length;t+=1)c[t]=se(Q(e,a,t));return{c(){t=u("p"),t.textContent="Errors:",n=f();for(let e=0;e<c.length;e+=1)c[e].c();l=g()},m(e,a){o(e,t,a),o(e,n,a);for(let t=0;t<c.length;t+=1)c[t]&&c[t].m(e,a);o(e,l,a)},p(e,t){if(8192&t[0]){let n;for(a=e[13],n=0;n<a.length;n+=1){const i=Q(e,a,n);c[n]?c[n].p(i,t):(c[n]=se(i),c[n].c(),c[n].m(l.parentNode,l))}for(;n<c.length;n+=1)c[n].d(1);c.length=a.length}},d(e){e&&r(t),e&&r(n),d(c,e),e&&r(l)}}}function se(e){let t,n,l=e[72]+"";return{c(){t=u("div"),n=_(l)},m(e,l){o(e,t,l),s(t,n)},p(e,t){8192&t[0]&&l!==(l=e[72]+"")&&m(n,l)},d(e){e&&r(t)}}}function oe(e){let t,n,l,a,c,i=(e[21][e[96]]?e[21][e[96]][e[4]]:e[96])+"";function d(){return e[47](e[96])}return{c(){t=u("button"),n=_(i),l=f(),p(t,"class","svelte-10bqm5q"),q(t,"active",e[1]===e[96])},m(e,i){o(e,t,i),s(t,n),s(t,l),a||(c=h(t,"click",d),a=!0)},p(l,a){e=l,32784&a[0]&&i!==(i=(e[21][e[96]]?e[21][e[96]][e[4]]:e[96])+"")&&m(n,i),32770&a[0]&&q(t,"active",e[1]===e[96])},d(e){e&&r(t),a=!1,c()}}}function re(e){let t,n="all_tags"!==e[1]&&e[1]===e[80]&&de(e);return{c(){n&&n.c(),t=g()},m(e,l){n&&n.m(e,l),o(e,t,l)},p(e,l){"all_tags"!==e[1]&&e[1]===e[80]?n?n.p(e,l):(n=de(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&r(t)}}}function de(e){let t,n,l,a,c,g,h=e[21][e[80]][e[4]]+"",v="filtered_all_descs"===e[80]&&ue(e),b=e[81],y=[];for(let t=0;t<b.length;t+=1)y[t]=ve(K(e,b,t));return{c(){t=u("div"),n=u("h1"),l=_(h),a=f(),v&&v.c(),c=f();for(let e=0;e<y.length;e+=1)y[e].c();p(n,"class","svelte-10bqm5q"),p(t,"class",g=i(e[80])+" svelte-10bqm5q")},m(e,i){o(e,t,i),s(t,n),s(n,l),s(t,a),v&&v.m(t,null),s(t,c);for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(t,null)},p(e,n){if(32784&n[0]&&h!==(h=e[21][e[80]][e[4]]+"")&&m(l,h),"filtered_all_descs"===e[80]?v?v.p(e,n):(v=ue(e),v.c(),v.m(t,c)):v&&(v.d(1),v=null),438534160&n[0]|16&n[1]){let l;for(b=e[81],l=0;l<b.length;l+=1){const a=K(e,b,l);y[l]?y[l].p(a,n):(y[l]=ve(a),y[l].c(),y[l].m(t,null))}for(;l<y.length;l+=1)y[l].d(1);y.length=b.length}32768&n[0]&&g!==(g=i(e[80])+" svelte-10bqm5q")&&p(t,"class",g)},d(e){e&&r(t),v&&v.d(),d(y,e)}}}function ue(e){let t,n,l,a,c,i,v=e[21].clear_filtered_all_descs[e[4]]+"",b=e[12],y=[];for(let t=0;t<b.length;t+=1)y[t]=ge(U(e,b,t));return{c(){t=u("button"),n=_(v),l=f();for(let e=0;e<y.length;e+=1)y[e].c();a=g(),p(t,"class","svelte-10bqm5q")},m(r,d){o(r,t,d),s(t,n),o(r,l,d);for(let e=0;e<y.length;e+=1)y[e]&&y[e].m(r,d);o(r,a,d),c||(i=h(t,"click",e[29]),c=!0)},p(e,t){if(16&t[0]&&v!==(v=e[21].clear_filtered_all_descs[e[4]]+"")&&m(n,v),1073746048&t[0]){let n;for(b=e[12],n=0;n<b.length;n+=1){const l=U(e,b,n);y[n]?y[n].p(l,t):(y[n]=ge(l),y[n].c(),y[n].m(a.parentNode,a))}for(;n<y.length;n+=1)y[n].d(1);y.length=b.length}},d(e){e&&r(t),e&&r(l),d(y,e),e&&r(a),c=!1,i()}}}function _e(e){let t,n,l,a,c=e[75].name+"";function i(){return e[48](e[75])}return{c(){t=u("button"),n=_(c),p(t,"class","svelte-10bqm5q")},m(e,c){o(e,t,c),s(t,n),l||(a=h(t,"click",i),l=!0)},p(t,l){e=t,128&l[0]&&c!==(c=e[75].name+"")&&m(n,c)},d(e){e&&r(t),l=!1,a()}}}function fe(e){let t,n=e[75].id===e[91]&&_e(e);return{c(){n&&n.c(),t=g()},m(e,l){n&&n.m(e,l),o(e,t,l)},p(e,l){e[75].id===e[91]?n?n.p(e,l):(n=_e(e),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},d(e){n&&n.d(e),e&&r(t)}}}function ge(e){let t,n=e[7],l=[];for(let t=0;t<n.length;t+=1)l[t]=fe(Y(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=g()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);o(e,t,n)},p(e,a){if(1073746048&a[0]){let c;for(n=e[7],c=0;c<n.length;c+=1){const i=Y(e,n,c);l[c]?l[c].p(i,a):(l[c]=fe(i),l[c].c(),l[c].m(t.parentNode,t))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(e){d(l,e),e&&r(t)}}}function he(e){let t,n,a,c,i,d,g,v=e[21].set_desc_data[e[4]]+"",b=e[21].delete_desc[e[4]]+"";function y(){return e[50](e[86])}function q(){return e[51](e[86])}return{c(){t=u("button"),n=_(v),a=f(),c=u("button"),i=_(b),p(t,"class","set_desc_data svelte-10bqm5q"),p(c,"class","fetch_delete_desc svelte-10bqm5q")},m(e,l){o(e,t,l),s(t,n),o(e,a,l),o(e,c,l),s(c,i),d||(g=[h(t,"click",y),h(c,"click",q)],d=!0)},p(t,l){e=t,16&l[0]&&v!==(v=e[21].set_desc_data[e[4]]+"")&&m(n,v),16&l[0]&&b!==(b=e[21].delete_desc[e[4]]+"")&&m(i,b)},d(e){e&&r(t),e&&r(a),e&&r(c),d=!1,l(g)}}}function pe(e){let t,n=e[86].tags,l=[];for(let t=0;t<n.length;t+=1)l[t]=me(H(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=g()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);o(e,t,n)},p(e,a){if(268468224&a[0]){let c;for(n=e[86].tags,c=0;c<n.length;c+=1){const i=H(e,n,c);l[c]?l[c].p(i,a):(l[c]=me(i),l[c].c(),l[c].m(t.parentNode,t))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(e){d(l,e),e&&r(t)}}}function me(e){let t,n,l,a,c=e[75].name+"";function i(){return e[52](e[75])}return{c(){t=u("button"),n=_(c),p(t,"class","svelte-10bqm5q")},m(e,c){o(e,t,c),s(t,n),l||(a=h(t,"click",i),l=!0)},p(t,l){e=t,32768&l[0]&&c!==(c=e[75].name+"")&&m(n,c)},d(e){e&&r(t),l=!1,a()}}}function ve(e){let t,n,a,c,i,d,g,v,b,y,q,w,$,k,j,T,E,z,x,C=e[86].id+"",N=e[86].title+"",O=(e[86].description.length>200&&!e[17]?e[86].description.slice(0,200)+"...▼":e[86].description)+"";function S(){return e[49](e[86])}let I="any_user_new_all_descs_with_tags"===e[80]&&e[16]&&he(e),A=e[86].tags&&pe(e);return{c(){t=u("div"),n=u("p"),a=u("button"),c=_("id: "),i=_(C),d=f(),I&&I.c(),v=f(),b=u("p"),y=_(N),q=f(),w=u("p"),$=u("button"),k=_(O),j=f(),A&&A.c(),T=f(),E=u("div"),p(a,"class","id button_reset svelte-10bqm5q"),p(n,"id",g=e[86].id),p(b,"class","title break_word_title svelte-10bqm5q"),p($,"class","button_reset break_word svelte-10bqm5q"),p(w,"class","break_word svelte-10bqm5q"),p(E,"class","each_desc_border svelte-10bqm5q")},m(l,r){o(l,t,r),s(t,n),s(n,a),s(a,c),s(a,i),s(n,d),I&&I.m(n,null),s(t,v),s(t,b),s(b,y),s(t,q),s(t,w),s(w,$),s($,k),s(t,j),A&&A.m(t,null),o(l,T,r),o(l,E,r),z||(x=[h(a,"click",S),h($,"click",e[25])],z=!0)},p(l,a){e=l,32768&a[0]&&C!==(C=e[86].id+"")&&m(i,C),"any_user_new_all_descs_with_tags"===e[80]&&e[16]?I?I.p(e,a):(I=he(e),I.c(),I.m(n,null)):I&&(I.d(1),I=null),32768&a[0]&&g!==(g=e[86].id)&&p(n,"id",g),32768&a[0]&&N!==(N=e[86].title+"")&&m(y,N),163840&a[0]&&O!==(O=(e[86].description.length>200&&!e[17]?e[86].description.slice(0,200)+"...▼":e[86].description)+"")&&m(k,O),e[86].tags?A?A.p(e,a):(A=pe(e),A.c(),A.m(t,null)):A&&(A.d(1),A=null)},d(e){e&&r(t),I&&I.d(),A&&A.d(),e&&r(T),e&&r(E),z=!1,l(x)}}}function be(e){let t,n,l,a,c,i=e[21].web_data_tags[e[4]]+"",d=e[15].all_tags&&ye(e);return{c(){t=u("div"),n=u("h1"),l=_(i),a=f(),d&&d.c(),c=f(),p(n,"class","svelte-10bqm5q"),p(t,"class","web_data_tags svelte-10bqm5q")},m(e,i){o(e,t,i),s(t,n),s(n,l),s(t,a),d&&d.m(t,null),s(t,c)},p(e,n){16&n[0]&&i!==(i=e[21].web_data_tags[e[4]]+"")&&m(l,i),e[15].all_tags?d?d.p(e,n):(d=ye(e),d.c(),d.m(t,c)):d&&(d.d(1),d=null)},d(e){e&&r(t),d&&d.d()}}}function ye(e){let t,n=e[15].all_tags,l=[];for(let t=0;t<n.length;t+=1)l[t]=qe(G(e,n,t));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=g()},m(e,n){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(e,n);o(e,t,n)},p(e,a){if(268468224&a[0]){let c;for(n=e[15].all_tags,c=0;c<n.length;c+=1){const i=G(e,n,c);l[c]?l[c].p(i,a):(l[c]=qe(i),l[c].c(),l[c].m(t.parentNode,t))}for(;c<l.length;c+=1)l[c].d(1);l.length=n.length}},d(e){d(l,e),e&&r(t)}}}function qe(e){let t,n,l,a,c=e[75].name+"";function i(){return e[53](e[75])}return{c(){t=u("button"),n=_(c),p(t,"class","svelte-10bqm5q")},m(e,c){o(e,t,c),s(t,n),l||(a=h(t,"click",i),l=!0)},p(t,l){e=t,32768&l[0]&&c!==(c=e[75].name+"")&&m(n,c)},d(e){e&&r(t),l=!1,a()}}}function we(e){let t,n,l="all_tags"!==e[80]&&re(e),a="all_tags"===e[1]&&"all_tags"===e[80]&&be(e);return{c(){l&&l.c(),t=f(),a&&a.c(),n=g()},m(e,c){l&&l.m(e,c),o(e,t,c),a&&a.m(e,c),o(e,n,c)},p(e,c){"all_tags"!==e[80]?l?l.p(e,c):(l=re(e),l.c(),l.m(t.parentNode,t)):l&&(l.d(1),l=null),"all_tags"===e[1]&&"all_tags"===e[80]?a?a.p(e,c):(a=be(e),a.c(),a.m(n.parentNode,n)):a&&(a.d(1),a=null)},d(e){l&&l.d(e),e&&r(t),a&&a.d(e),e&&r(n)}}}function $e(e){let t,n,a,c,i,b,y,q,w,$,k,j,T,E,z,x,C,N,O,S,I,A,P,L,D,B,V,W,F,G,K,H,U=e[21].clear_title_description_tags[e[4]]+"",Y=e[21].tag[e[4]]+"",Z=e[21].add_tag_to_desc[e[4]]+"",Q=e[11],R=[];for(let t=0;t<Q.length;t+=1)R[t]=ke(M(e,Q,t));let X=e[7],ee=[];for(let t=0;t<X.length;t+=1)ee[t]=je(J(e,X,t));let te=e[13].length>0&&Te(e),ne=null===e[8]&&ze(e),le=null!==e[8]&&xe(e);return{c(){t=u("p"),n=_("id: "),a=_(e[8]),c=f(),i=u("button"),b=_(U),y=f(),q=u("div"),q.textContent="title:",w=f(),$=u("textarea"),k=f(),j=u("div"),j.textContent="description:",T=f(),E=u("textarea"),z=f(),x=u("div");for(let e=0;e<R.length;e+=1)R[e].c();C=f(),N=u("label"),O=_(Y),S=f(),I=u("input"),A=f(),P=u("datalist");for(let e=0;e<ee.length;e+=1)ee[e].c();L=f(),D=u("button"),B=_(Z),V=f(),te&&te.c(),W=f(),ne&&ne.c(),F=f(),le&&le.c(),G=g(),p(i,"class","svelte-10bqm5q"),p($,"class","title svelte-10bqm5q"),p($,"minlength","1"),p($,"maxlength","100"),$.required=!0,p($,"placeholder","1_100"),p(E,"class","description svelte-10bqm5q"),p(E,"minlength","1"),p(E,"maxlength","1000"),E.required=!0,p(E,"placeholder","1_1000"),p(N,"for","my_all_tags"),p(I,"list","all_tags"),p(I,"id","my_all_tags"),p(I,"name","my_all_tags"),p(I,"minlength","1"),p(I,"maxlength","10"),I.required=!0,p(I,"placeholder","1_10"),p(P,"id","all_tags"),p(D,"class","svelte-10bqm5q")},m(l,r){o(l,t,r),s(t,n),s(t,a),o(l,c,r),o(l,i,r),s(i,b),o(l,y,r),o(l,q,r),o(l,w,r),o(l,$,r),v($,e[9]),o(l,k,r),o(l,j,r),o(l,T,r),o(l,E,r),v(E,e[10]),o(l,z,r),o(l,x,r);for(let e=0;e<R.length;e+=1)R[e]&&R[e].m(x,null);o(l,C,r),o(l,N,r),s(N,O),o(l,S,r),o(l,I,r),v(I,e[6]),o(l,A,r),o(l,P,r);for(let e=0;e<ee.length;e+=1)ee[e]&&ee[e].m(P,null);o(l,L,r),o(l,D,r),s(D,B),o(l,V,r),te&&te.m(l,r),o(l,W,r),ne&&ne.m(l,r),o(l,F,r),le&&le.m(l,r),o(l,G,r),K||(H=[h(i,"click",e[24]),h($,"input",e[55]),h(E,"input",e[56]),h(I,"input",e[58]),h(D,"click",e[59])],K=!0)},p(e,t){if(256&t[0]&&m(a,e[8]),16&t[0]&&U!==(U=e[21].clear_title_description_tags[e[4]]+"")&&m(b,U),512&t[0]&&v($,e[9]),1024&t[0]&&v(E,e[10]),2048&t[0]){let n;for(Q=e[11],n=0;n<Q.length;n+=1){const l=M(e,Q,n);R[n]?R[n].p(l,t):(R[n]=ke(l),R[n].c(),R[n].m(x,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=Q.length}if(16&t[0]&&Y!==(Y=e[21].tag[e[4]]+"")&&m(O,Y),64&t[0]&&I.value!==e[6]&&v(I,e[6]),128&t[0]){let n;for(X=e[7],n=0;n<X.length;n+=1){const l=J(e,X,n);ee[n]?ee[n].p(l,t):(ee[n]=je(l),ee[n].c(),ee[n].m(P,null))}for(;n<ee.length;n+=1)ee[n].d(1);ee.length=X.length}16&t[0]&&Z!==(Z=e[21].add_tag_to_desc[e[4]]+"")&&m(B,Z),e[13].length>0?te?te.p(e,t):(te=Te(e),te.c(),te.m(W.parentNode,W)):te&&(te.d(1),te=null),null===e[8]?ne?ne.p(e,t):(ne=ze(e),ne.c(),ne.m(F.parentNode,F)):ne&&(ne.d(1),ne=null),null!==e[8]?le?le.p(e,t):(le=xe(e),le.c(),le.m(G.parentNode,G)):le&&(le.d(1),le=null)},d(e){e&&r(t),e&&r(c),e&&r(i),e&&r(y),e&&r(q),e&&r(w),e&&r($),e&&r(k),e&&r(j),e&&r(T),e&&r(E),e&&r(z),e&&r(x),d(R,e),e&&r(C),e&&r(N),e&&r(S),e&&r(I),e&&r(A),e&&r(P),d(ee,e),e&&r(L),e&&r(D),e&&r(V),te&&te.d(e),e&&r(W),ne&&ne.d(e),e&&r(F),le&&le.d(e),e&&r(G),K=!1,l(H)}}}function ke(e){let t,n,l,a,c=e[75].name+"";function i(){return e[57](e[75])}return{c(){t=u("button"),n=_(c),p(t,"class","svelte-10bqm5q")},m(e,c){o(e,t,c),s(t,n),l||(a=h(t,"click",i),l=!0)},p(t,l){e=t,2048&l[0]&&c!==(c=e[75].name+"")&&m(n,c)},d(e){e&&r(t),l=!1,a()}}}function je(e){let t,n;return{c(){t=u("option"),t.__value=n=e[75].name,t.value=t.__value},m(e,n){o(e,t,n)},p(e,l){128&l[0]&&n!==(n=e[75].name)&&(t.__value=n,t.value=t.__value)},d(e){e&&r(t)}}}function Te(e){let t,n,l,a,c=e[21].errors[e[4]]+"",i=e[13],h=[];for(let t=0;t<i.length;t+=1)h[t]=Ee(W(e,i,t));return{c(){t=u("h2"),n=_(c),l=f();for(let e=0;e<h.length;e+=1)h[e].c();a=g()},m(e,c){o(e,t,c),s(t,n),o(e,l,c);for(let t=0;t<h.length;t+=1)h[t]&&h[t].m(e,c);o(e,a,c)},p(e,t){if(16&t[0]&&c!==(c=e[21].errors[e[4]]+"")&&m(n,c),8192&t[0]){let n;for(i=e[13],n=0;n<i.length;n+=1){const l=W(e,i,n);h[n]?h[n].p(l,t):(h[n]=Ee(l),h[n].c(),h[n].m(a.parentNode,a))}for(;n<h.length;n+=1)h[n].d(1);h.length=i.length}},d(e){e&&r(t),e&&r(l),d(h,e),e&&r(a)}}}function Ee(e){let t,n,l=e[72]+"";return{c(){t=u("p"),n=_(l)},m(e,l){o(e,t,l),s(t,n)},p(e,t){8192&t[0]&&l!==(l=e[72]+"")&&m(n,l)},d(e){e&&r(t)}}}function ze(e){let t,n,l,a,c=e[21].insert_desc[e[4]]+"";return{c(){t=u("button"),n=_(c),p(t,"class","fetch_insert_desc_button svelte-10bqm5q")},m(c,i){o(c,t,i),s(t,n),l||(a=h(t,"click",e[32]),l=!0)},p(e,t){16&t[0]&&c!==(c=e[21].insert_desc[e[4]]+"")&&m(n,c)},d(e){e&&r(t),l=!1,a()}}}function xe(e){let t,n,l,a,c=e[21].update_desc[e[4]]+"";return{c(){t=u("button"),n=_(c),p(t,"class","fetch_update_desc_button svelte-10bqm5q")},m(c,i){o(c,t,i),s(t,n),l||(a=h(t,"click",e[34]),l=!0)},p(e,t){16&t[0]&&c!==(c=e[21].update_desc[e[4]]+"")&&m(n,c)},d(e){e&&r(t),l=!1,a()}}}function Ce(t){let n,a,c,i,g,v,b,y,q,w,$,k,j,T,E,z,x,C,N,O,S,I,A,P,L,D,B=t[21].right[t[4]]+"",V=t[21].web_data_edit[t[4]]+"",W=t[21].left[t[4]]+"",J=t[2]&&ee(t),M=t[13]>0&&ie(t),G=Object.keys(t[15]),K=[];for(let e=0;e<G.length;e+=1)K[e]=oe(Z(t,G,e));let H=Object.entries(t[15]),U=[];for(let e=0;e<H.length;e+=1)U[e]=we(F(t,H,e));let Y=""!==t[16]&&$e(t);return{c(){n=u("div"),a=u("div"),c=u("button"),c.textContent="≡",i=f(),J&&J.c(),g=f(),v=u("div"),b=u("div"),y=u("div"),M&&M.c(),q=f(),w=u("div"),$=u("button"),k=_(B),j=f(),T=u("div");for(let e=0;e<K.length;e+=1)K[e].c();E=f(),z=u("div");for(let e=0;e<U.length;e+=1)U[e].c();x=f(),C=u("div"),N=u("h1"),O=_(V),S=f(),I=u("button"),A=_(W),P=f(),Y&&Y.c(),p(c,"class","design_toggle_menu svelte-10bqm5q"),p(a,"class","header svelte-10bqm5q"),p(y,"class","console"),p($,"class","edit_button svelte-10bqm5q"),p(T,"class","tabs svelte-10bqm5q"),p(z,"class","tab-content"),p(w,"class","list svelte-10bqm5q"),p(b,"class","left_column server_side svelte-10bqm5q"),p(N,"class","svelte-10bqm5q"),p(I,"class","list_button svelte-10bqm5q"),p(C,"class","right_column svelte-10bqm5q"),p(v,"class","content svelte-10bqm5q"),p(n,"class","container svelte-10bqm5q")},m(e,l){o(e,n,l),s(n,a),s(a,c),s(a,i),J&&J.m(a,null),s(n,g),s(n,v),s(v,b),s(b,y),M&&M.m(y,null),s(b,q),s(b,w),s(w,$),s($,k),s(w,j),s(w,T);for(let e=0;e<K.length;e+=1)K[e]&&K[e].m(T,null);s(w,E),s(w,z);for(let e=0;e<U.length;e+=1)U[e]&&U[e].m(z,null);s(v,x),s(v,C),s(C,N),s(N,O),s(C,S),s(C,I),s(I,A),s(C,P),Y&&Y.m(C,null),L||(D=[h(c,"click",t[19]),h($,"click",t[46]),h(I,"click",t[54])],L=!0)},p(e,t){if(e[2]?J?J.p(e,t):(J=ee(e),J.c(),J.m(a,null)):J&&(J.d(1),J=null),e[13]>0?M?M.p(e,t):(M=ie(e),M.c(),M.m(y,null)):M&&(M.d(1),M=null),16&t[0]&&B!==(B=e[21].right[e[4]]+"")&&m(k,B),2392082&t[0]){let n;for(G=Object.keys(e[15]),n=0;n<G.length;n+=1){const l=Z(e,G,n);K[n]?K[n].p(l,t):(K[n]=oe(l),K[n].c(),K[n].m(T,null))}for(;n<K.length;n+=1)K[n].d(1);K.length=G.length}if(2049151122&t[0]|16&t[1]){let n;for(H=Object.entries(e[15]),n=0;n<H.length;n+=1){const l=F(e,H,n);U[n]?U[n].p(l,t):(U[n]=we(l),U[n].c(),U[n].m(z,null))}for(;n<U.length;n+=1)U[n].d(1);U.length=H.length}16&t[0]&&V!==(V=e[21].web_data_edit[e[4]]+"")&&m(O,V),16&t[0]&&W!==(W=e[21].left[e[4]]+"")&&m(A,W),""!==e[16]?Y?Y.p(e,t):(Y=$e(e),Y.c(),Y.m(C,null)):Y&&(Y.d(1),Y=null)},i:e,o:e,d(e){e&&r(n),J&&J.d(),M&&M.d(),d(K,e),d(U,e),Y&&Y.d(),L=!1,l(D)}}}const Ne="https://cotton-concrete-catsup.glitch.me/app8";function Oe(e,t,n){let l="all_descs";function a(e){n(1,l=e)}let c=!1;let i=!1,s="en";let o="left";const r={auth_login_result:{en:"Log in result",ja:"ログイン結果",zh:"登录结果",es:"resultado de inicio de sesión"},auth_sign_out:{en:"Sign out",ja:"サインアウト",zh:"登出",es:"Cerrar sesión"},web_data_tags:{en:"Web data tags",ja:"ウェブデータタグ",zh:"网页数据标签",es:"Etiquetas de datos web"},any_user_new_all_descs_with_tags:{en:"My data",ja:"自分のデータ",zh:"我的数据",es:"Mis datos"},all_descs:{en:"All",ja:"すべて",zh:"所有",es:"Todos"},filtered_all_descs:{ja:"タグで絞り込み",en:"Filtered by tag",zh:"通过标签筛选",es:"Filtrado por etiqueta"},web_data_edit:{en:"Web data edit",ja:"ウェブデータ編集",zh:"网页数据编辑",es:"Edición de datos web"},title:{en:"Title",ja:"タイトル",zh:"标题",es:"Título"},description:{en:"Description",ja:"説明",zh:"描述",es:"Descripción"},tag:{en:"Tag",ja:"タグ",zh:"标签",es:"Etiqueta"},set_desc_data:{en:"Set",ja:"セット",zh:"设置",es:"Establecer"},delete_desc:{en:"Delete",ja:"削除",zh:"删除",es:"Eliminar"},add_tag_to_desc:{en:"Add tag to description",ja:"説明にタグを追加",zh:"添加标签到描述",es:"Agregar etiqueta a la descripción"},update_desc:{en:"Update description",ja:"説明を更新",zh:"更新描述",es:"Actualizar descripción"},insert_desc:{en:"Insert description",ja:"説明を挿入",zh:"插入描述",es:"Insertar descripción"},clear_filtered_all_descs:{ja:"フィルターをクリア",en:"Clear filter",zh:"清除过滤器",es:"Borrar filtro"},errors:{en:"Errors",ja:"エラー",zh:"错误",es:"Errores"},is_auth_uid_valid:{en:"Invalid auth_uid",ja:"無効なauth_uid",zh:"无效的auth_uid",es:"auth_uid no válido"},is_title_valid:{ja:"タイトルは1文字以上100文字以下",en:"Title must be between 1 and 100 characters",zh:"标题必须在1到100个字符之间",es:"El título debe tener entre 1 y 100 caracteres"},is_description_valid:{ja:"説明は1文字以上1000文字以下",en:"Description must be between 1 and 1000 characters",zh:"描述必须在1到1000个字符之间",es:"La descripción debe tener entre 1 y 1000 caracteres"},are_tags_valid:{ja:"タグは1文字以上10文字以下",en:"Tags must be between 1 and 10 characters",zh:"标签必须在1到10个字符之间",es:"Las etiquetas deben tener entre 1 y 10 caracteres"},confirm_clear_title_description_tags:{ja:"タイトル、説明、タグをクリアしますか？",en:"Clear title, description, and tags?",zh:"清除标题、描述和标签吗？",es:"¿Borrar título, descripción y etiquetas?"},clear_title_description_tags:{ja:"タイトル、説明、タグをクリア",en:"Clear title, description, and tags",zh:"清除标题、描述和标签",es:"Borrar título, descripción y etiquetas"},sort:{ja:"並べ替え",en:"Sort",zh:"分类",es:"Clasificar"},left:{ja:"リスト表示",en:"List view",zh:"列表视图",es:"Vista de lista"},right:{ja:"編集表示",en:"Edit view",zh:"编辑视图",es:"Vista de edición"},select_language:{ja:"言語を選択",en:"Select language",zh:"选择语言",es:"Seleccionar idioma"},tab:{ja:"タブ",en:"Tab",zh:"标签",es:"Pestaña"}},d=["id","title","description","tags","created_at","updated_at"];let u={kind:"id",order:"desc"};function _(){try{if(null===u.kind||null===u.order)return;if(void 0===$.all_descs)return;if(void 0===$.any_user_new_all_descs_with_tags)return;const e=(e,t)=>{switch(u.kind){case"id":return"asc"===u.order?e.id-t.id:t.id-e.id;case"title":return"asc"===u.order?e.title.localeCompare(t.title):t.title.localeCompare(e.title);case"description":return"asc"===u.order?e.description.localeCompare(t.description):t.description.localeCompare(e.description);case"tags":return"asc"===u.order?e.tags.length-t.tags.length:t.tags.length-e.tags.length;case"created_at":return"asc"===u.order?e.created_at.localeCompare(t.created_at):t.created_at.localeCompare(e.created_at);case"updated_at":return"asc"===u.order?e.updated_at.localeCompare(t.updated_at):t.updated_at.localeCompare(e.updated_at);default:return 0}},t=$.all_descs.sort(e),l=$.any_user_new_all_descs_with_tags.sort(e);n(15,$={...$,all_descs:t,any_user_new_all_descs_with_tags:l})}catch(e){console.error("Error:",e)}}let f="",g=[],h=null,p="",m="",v=[],b=[],q=[],w="Not logged in",$={all_descs:[],all_tags:[],any_user_new_all_descs_with_tags:[],filtered_all_descs:[]},j={},T="",E=!1;function z(e,t){try{if(console.log(q),n(13,q=q.filter((e=>!e.includes(r.are_tags_valid[s])))),console.log(q),!O.validate_tag_name(t))return void q.push(r.are_tags_valid[s]);const l=g.find((e=>e.name===t));if(l){l.desc_id=e;const t=v.some((e=>e.id==e.id));t||n(11,v=[...v,l]),n(6,f="")}else{const l={id:g.length+1,name:t,desc_id:e,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString()};n(7,g=[...g,l]),n(11,v=[...v,l])}}catch(e){console.error("Error:",e)}}function x(e){try{const t=$.all_descs.find((t=>t.id===e));t?(n(8,h=t.id),n(9,p=t.title),n(10,m=t.description),n(11,v=t.tags)):console.error(`No description found with id: ${e}`),n(0,o="right")}catch(e){console.error("Error:",e)}}function C(e){b.some((t=>t===e))||n(12,b=[...b,e]);const t=$.all_descs.filter((e=>e.tags.some((e=>b.some((t=>t===e.id))))));n(15,$.filtered_all_descs=t,$)}function N(e){n(12,b=b.filter((t=>t!==e))),n(15,$.filtered_all_descs=$.filtered_all_descs.filter((e=>e.tags.some((e=>b.some((t=>t===e.id)))))),$)}const O={validate_auth_uid:e=>/^[a-zA-Z0-9_-]+$/.test(e),validate_desc_id:e=>(console.log("validate_desc_id",e),Number.isInteger(e)&&e>0),validate_iso_date:e=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(e),validate_title:e=>(console.log("validate_title",e),"string"==typeof e&&e.length>=1&&e.length<=100),validate_description:e=>(console.log("validate_description",e),"string"==typeof e&&e.length>=1&&e.length<=1e3),validate_tag_name:e=>(console.log("validate_tag_name",e),"string"==typeof e&&e.length>=1&&e.length<=10),validate_data(e){const{auth_uid:t,desc_id:n,title:l,description:a,tags:c}=e,i=this.validate_auth_uid(t),s=this.validate_title(l),o=this.validate_description(a);console.log("tags",c);return{is_auth_uid_valid:i,is_title_valid:s,is_description_valid:o,are_tags_valid:c.every((e=>this.validate_tag_name(e.name)))}}};function S(){const e={auth_uid:T,desc_id:h,title:p,description:m,tags:v};n(13,q=[]);for(const[t,n]of Object.entries(O.validate_data(e)))if(n||q.push(r[t][s]),"tags"===t)for(const[e,t]of n.entries())for(const[n,l]of Object.entries(O.validate_data(t)))l||q.push(`tags[${e}].${n}`);else"auth_uid"===t&&O.validate_auth_uid(T),"desc_id"===t&&O.validate_desc_id(h),"title"===t&&O.validate_title(p),"description"===t&&O.validate_description(m);return!(q.length>0)||(console.log(q),!1)}async function I(){try{if(!S())throw new Error("Validation failed");const e=await fetch(Ne+"/insert_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:T,title:p,description:m,tags:v})});await A(e),n(0,o="left")}catch(e){console.error("Error:",e)}}async function A(e){try{const t=await e.json();t.filtered_all_descs=$.filtered_all_descs?$.filtered_all_descs:[],j=Object.fromEntries(Object.entries(t).filter((([e,t])=>"all_descs"!==e&&"all_tags"!==e&&"any_user_new_all_descs_with_tags"!==e))),n(15,$=Object.fromEntries(Object.entries(t).filter((([e,t])=>"all_descs"===e||"all_tags"===e||"any_user_new_all_descs_with_tags"===e||"filtered_all_descs"===e)))),n(7,g=t.all_tags),_()}catch(e){console.error("Error:",e)}}async function P(){try{const e=await fetch(Ne+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:T})});await A(e)}catch(e){console.error("Error:",e)}}async function L(e){try{const t=await fetch(Ne+"/delete_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,auth_uid:T})});await A(t)}catch(e){console.error("Error:",e)}}firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const D=new firebase.auth.GoogleAuthProvider;const B=[{auth_uid:"user1",desc_id:1,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo1",description:"bar1",tags:[{desc_id:1,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:2,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo2",description:"bar2",tags:[{desc_id:2,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:2,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user2",desc_id:3,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo3",description:"bar3",tags:[{desc_id:3,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:3,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}],V=[{auth_uid:"user1",desc_id:4,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"a".repeat(100),description:"b".repeat(1e3),tags:[{desc_id:4,id:4,name:"tag4",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:5,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"",description:"",tags:[{desc_id:5,id:5,name:"t".repeat(10),created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}];k((async()=>{await async function(){try{const e=await new Promise(((e,t)=>{firebase.auth().onAuthStateChanged(e,t)}));console.log("Current user:",e),e?(n(16,T=e.uid),n(14,w="Logged in")):(console.log(2),n(14,w="Not logged in"),n(16,T=""))}catch(e){console.error("Error during authentication:",e),n(14,w="Authentication failed"),n(16,T="")}}(),console.log("auth_check_login"),await P(),console.log("fetch_get_all_descs_and_tags"),function(){if(location.hash){const e=location.hash.slice(1),t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})}}()}));return e.$$.update=()=>{1&e.$$.dirty[0]&&(async()=>{"left"===o?(document.documentElement.style.setProperty("--display-left-column","block"),document.documentElement.style.setProperty("--display-right-column","none")):"right"===o&&(document.documentElement.style.setProperty("--display-left-column","none"),document.documentElement.style.setProperty("--display-right-column","block"))})()},[o,l,c,i,s,u,f,g,h,p,m,v,b,q,w,$,T,E,a,function(){n(2,c=!c)},function(){n(3,i=!i)},r,d,_,function(){confirm(r.confirm_clear_title_description_tags[s])&&(n(9,p=""),n(10,m=""),n(11,v=[]),n(8,h=null))},function(){n(17,E=!E)},z,x,C,async function(){n(15,$.filtered_all_descs=[],$),n(12,b=[])},N,async function(){try{for(const e of B)n(16,T=e.auth_uid),n(8,h=e.desc_id),n(9,p=e.title),n(10,m=e.description),n(11,v=e.tags),await I()}catch(e){console.error("Error:",e)}},I,P,async function(){try{if(!S())throw new Error("Validation failed");const e=await fetch(Ne+"/update_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:T,desc_id:h,title:p,description:m,tags:v})});await A(e),n(0,o="left")}catch(e){console.error("Error:",e)}},L,async function(){try{console.log("auth_google_login");const e=(await firebase.auth().signInWithPopup(D)).user;console.log(4),n(14,w=`Logged in as: ${e.displayName}`)}catch(e){console.error("Error during Google login:",e),alert("Google login failed. "+e.message)}},async function(){try{console.log(5),await firebase.auth().signOut(),n(14,w="Not logged in")}catch(e){console.error("Error during sign-out:",e),alert("Sign out failed. "+e.message)}},function(){n(9,p=V[1].title),n(10,m=V[1].description),n(11,v=V[1].tags),I()},function(){s=this.__value,n(4,s)},[[]],function(){s=this.__value,n(4,s)},function(){s=this.__value,n(4,s)},function(){s=this.__value,n(4,s)},function(){u.kind=y(this),n(5,u),n(22,d)},function(){u.order=y(this),n(5,u),n(22,d)},()=>n(0,o="right"),e=>a(e),e=>N(e.id),e=>{return t=e.id,navigator.clipboard.writeText(`${window.location.href.split("#")[0]}#${t}`),void alert("Link copied to clipboard");var t},e=>x(e.id),e=>L(e.id),e=>C(e.id),e=>C(e.id),()=>n(0,o="left"),function(){p=this.value,n(9,p)},function(){m=this.value,n(10,m)},e=>n(11,v=v.filter((t=>t.id!==e.id))),function(){f=this.value,n(6,f)},()=>z(h,f)]}return new class extends V{constructor(e){super(),B(this,e,Oe,Ce,c,{},null,[-1,-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map