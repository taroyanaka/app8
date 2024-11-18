var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function a(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t){return null==t?"":t}function c(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function s(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function g(){return f(" ")}function h(){return f("")}function p(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t,e){e=""+e,t.data!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}let y;function b(t){y=t}function T(t){(function(){if(!y)throw new Error("Function called outside component initialization");return y})().$$.on_mount.push(t)}const $=[],w=[];let x=[];const D=[],C=Promise.resolve();let E=!1;function k(t){x.push(t)}const O=new Set;let N=0;function j(){if(0!==N)return;const t=y;do{try{for(;N<$.length;){const t=$[N];N++,b(t),S(t.$$)}}catch(t){throw $.length=0,N=0,t}for(b(null),$.length=0,N=0;w.length;)w.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];O.has(e)||(O.add(e),e())}x.length=0}while($.length);for(;D.length;)D.pop()();E=!1,O.clear(),b(t)}function S(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const A=new Set;function I(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function W(t,e){-1===t.$$.dirty[0]&&($.push(t),E||(E=!0,C.then(j)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(i,l,c,r,d,u,f,g=[-1]){const h=y;b(i);const p=i.$$={fragment:null,ctx:[],props:u,update:t,not_equal:d,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(h?h.$$.context:[])),callbacks:n(),dirty:g,skip_bound:!1,root:l.target||h.$$.root};f&&f(p.root);let _=!1;if(p.ctx=c?c(i,l.props||{},((t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&d(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),_&&W(i,t)),e})):[],p.update(),_=!0,o(p.before_update),p.fragment=!!r&&r(p.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);p.fragment&&p.fragment.l(t),t.forEach(s)}else p.fragment&&p.fragment.c();l.intro&&((m=i.$$.fragment)&&m.i&&(A.delete(m),m.i(v))),function(t,n,i,l){const{fragment:c,after_update:r}=t.$$;c&&c.m(n,i),l||k((()=>{const n=t.$$.on_mount.map(e).filter(a);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),r.forEach(k)}(i,l.target,l.anchor,l.customElement),j()}var m,v;b(h)}class V{$destroy(){I(this,1),this.$destroy=t}$on(e,n){if(!a(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function L(t,e,n){const o=t.slice();return o[46]=e[n],o}function F(t,e,n){const o=t.slice();return o[46]=e[n],o}function J(t,e,n){const o=t.slice();return o[51]=e[n],o}function q(t,e,n){const o=t.slice();return o[46]=e[n],o}function z(t,e,n){const o=t.slice();return o[56]=e[n][0],o[57]=e[n][1],o}function B(t,e,n){const o=t.slice();return o[60]=e[n],o}function G(t,e,n){const o=t.slice();return o[46]=e[n],o}function U(t,e,n){const o=t.slice();return o[51]=e[n],o}function K(e){let n,o,a,i,l;return{c(){n=u("div"),o=f("auth_google_login: "),a=u("button"),a.textContent="auth_google_login"},m(t,s){r(t,n,s),c(n,o),c(n,a),i||(l=p(a,"click",e[18]),i=!0)},p:t,d(t){t&&s(n),i=!1,l()}}}function M(e){let n,o,a,i,l;return{c(){n=u("div"),o=f("auth_sign_out: "),a=u("button"),a.textContent="auth_sign_out"},m(t,s){r(t,n,s),c(n,o),c(n,a),i||(l=p(a,"click",e[19]),i=!0)},p:t,d(t){t&&s(n),i=!1,l()}}}function Y(t){let e,n,o,a=t[6],i=[];for(let e=0;e<a.length;e+=1)i[e]=H(U(t,a,e));return{c(){e=u("p"),e.textContent="Errors:",n=g();for(let t=0;t<i.length;t+=1)i[t].c();o=h()},m(t,a){r(t,e,a),r(t,n,a);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,a);r(t,o,a)},p(t,e){if(64&e[0]){let n;for(a=t[6],n=0;n<a.length;n+=1){const l=U(t,a,n);i[n]?i[n].p(l,e):(i[n]=H(l),i[n].c(),i[n].m(o.parentNode,o))}for(;n<i.length;n+=1)i[n].d(1);i.length=a.length}},d(t){t&&s(e),t&&s(n),d(i,t),t&&s(o)}}}function H(t){let e,n,o=t[51]+"";return{c(){e=u("div"),n=f(o)},m(t,o){r(t,e,o),c(e,n)},p(t,e){64&e[0]&&o!==(o=t[51]+"")&&m(n,o)},d(t){t&&s(e)}}}function Z(t){let e,n=t[60].tags,o=[];for(let e=0;e<n.length;e+=1)o[e]=Q(G(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);r(t,e,n)},p(t,a){if(4352&a[0]){let i;for(n=t[60].tags,i=0;i<n.length;i+=1){const l=G(t,n,i);o[i]?o[i].p(l,a):(o[i]=Q(l),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){d(o,t),t&&s(e)}}}function Q(t){let e,n,o,a,i=t[46].name+"";function l(){return t[23](t[46])}return{c(){e=u("button"),n=f(i)},m(t,i){r(t,e,i),c(e,n),o||(a=p(e,"click",l),o=!0)},p(e,o){t=e,256&o[0]&&i!==(i=t[46].name+"")&&m(n,i)},d(t){t&&s(e),o=!1,a()}}}function R(t){let e,n,a,i,l,d,h,v,y,b,T,$,w,x,D,C,E,k,O,N,j,S=t[60].id+"",A=t[60].title+"",I=t[60].description+"";function W(){return t[21](t[60])}function P(){return t[22](t[60])}let V=t[60].tags&&Z(t);return{c(){e=u("div"),n=u("p"),a=f("id: "),i=f(S),l=g(),d=u("button"),d.textContent="set_desc_data",h=g(),v=u("button"),v.textContent="delete_desc",y=g(),b=u("p"),T=f("title: "),$=f(A),w=g(),x=u("p"),D=f("description: "),C=f(I),E=g(),k=u("div"),k.textContent="tags:",O=g(),V&&V.c(),_(b,"class","break_word svelte-1c9v7r3"),_(x,"class","break_word svelte-1c9v7r3")},m(t,o){r(t,e,o),c(e,n),c(n,a),c(n,i),c(e,l),c(e,d),c(e,h),c(e,v),c(e,y),c(e,b),c(b,T),c(b,$),c(e,w),c(e,x),c(x,D),c(x,C),c(e,E),c(e,k),c(e,O),V&&V.m(e,null),N||(j=[p(d,"click",W),p(v,"click",P)],N=!0)},p(n,o){t=n,256&o[0]&&S!==(S=t[60].id+"")&&m(i,S),256&o[0]&&A!==(A=t[60].title+"")&&m($,A),256&o[0]&&I!==(I=t[60].description+"")&&m(C,I),t[60].tags?V?V.p(t,o):(V=Z(t),V.c(),V.m(e,null)):V&&(V.d(1),V=null)},d(t){t&&s(e),V&&V.d(),N=!1,o(j)}}}function X(t){let e,n,o,a,i,h=t[56]+"",p=t[57],v=[];for(let e=0;e<p.length;e+=1)v[e]=R(B(t,p,e));return{c(){e=u("div"),n=u("h1"),o=f(h),a=g();for(let t=0;t<v.length;t+=1)v[t].c();_(n,"class","svelte-1c9v7r3"),_(e,"class",i=l(t[56])+" svelte-1c9v7r3")},m(t,i){r(t,e,i),c(e,n),c(n,o),c(e,a);for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(e,null)},p(t,n){if(256&n[0]&&h!==(h=t[56]+"")&&m(o,h),137472&n[0]){let o;for(p=t[57],o=0;o<p.length;o+=1){const a=B(t,p,o);v[o]?v[o].p(a,n):(v[o]=R(a),v[o].c(),v[o].m(e,null))}for(;o<v.length;o+=1)v[o].d(1);v.length=p.length}256&n[0]&&i!==(i=l(t[56])+" svelte-1c9v7r3")&&_(e,"class",i)},d(t){t&&s(e),d(v,t)}}}function tt(t){let e,n=t[8].allTags,o=[];for(let e=0;e<n.length;e+=1)o[e]=et(q(t,n,e));return{c(){for(let t=0;t<o.length;t+=1)o[t].c();e=h()},m(t,n){for(let e=0;e<o.length;e+=1)o[e]&&o[e].m(t,n);r(t,e,n)},p(t,a){if(4352&a[0]){let i;for(n=t[8].allTags,i=0;i<n.length;i+=1){const l=q(t,n,i);o[i]?o[i].p(l,a):(o[i]=et(l),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=n.length}},d(t){d(o,t),t&&s(e)}}}function et(t){let e,n,o,a,i=t[46].name+"";function l(){return t[24](t[46])}return{c(){e=u("button"),n=f(i)},m(t,i){r(t,e,i),c(e,n),o||(a=p(e,"click",l),o=!0)},p(e,o){t=e,256&o[0]&&i!==(i=t[46].name+"")&&m(n,i)},d(t){t&&s(e),o=!1,a()}}}function nt(t){let e,n,o,a=t[6],i=[];for(let e=0;e<a.length;e+=1)i[e]=ot(J(t,a,e));return{c(){e=u("h2"),e.textContent="errors",n=g();for(let t=0;t<i.length;t+=1)i[t].c();o=h()},m(t,a){r(t,e,a),r(t,n,a);for(let e=0;e<i.length;e+=1)i[e]&&i[e].m(t,a);r(t,o,a)},p(t,e){if(64&e[0]){let n;for(a=t[6],n=0;n<a.length;n+=1){const l=J(t,a,n);i[n]?i[n].p(l,e):(i[n]=ot(l),i[n].c(),i[n].m(o.parentNode,o))}for(;n<i.length;n+=1)i[n].d(1);i.length=a.length}},d(t){t&&s(e),t&&s(n),d(i,t),t&&s(o)}}}function ot(t){let e,n,o=t[51]+"";return{c(){e=u("p"),n=f(o)},m(t,o){r(t,e,o),c(e,n)},p(t,e){64&e[0]&&o!==(o=t[51]+"")&&m(n,o)},d(t){t&&s(e)}}}function at(t){let e,n,a,i,l,h,y,b,T,$,w,x,D,C,E,k,O,N,j,S,A,I,W,P,V,J,q,z,B,G,U,K=t[9].slice(0,10)+"",M=t[5],Y=[];for(let e=0;e<M.length;e+=1)Y[e]=it(F(t,M,e));let H=t[1],Z=[];for(let e=0;e<H.length;e+=1)Z[e]=lt(L(t,H,e));return{c(){e=u("button"),e.textContent="update_desc",n=f("\n\t\tauth_uid: "),a=u("p"),i=f(K),l=f("..."),h=g(),y=u("p"),b=f("id: "),T=f(t[2]),$=g(),w=u("div"),w.textContent="title:",x=g(),D=u("textarea"),C=g(),E=u("div"),E.textContent="description:",k=g(),O=u("textarea"),N=g(),j=u("div");for(let t=0;t<Y.length;t+=1)Y[t].c();S=g(),A=u("label"),A.textContent="tag",I=g(),W=u("input"),P=g(),V=u("datalist");for(let t=0;t<Z.length;t+=1)Z[t].c();J=g(),q=u("button"),q.textContent="add_tag_to_desc",z=g(),B=u("button"),B.textContent="insert_desc",_(D,"class","title svelte-1c9v7r3"),_(D,"minlength","1"),_(D,"maxlength","100"),D.required=!0,_(D,"placeholder","1_100"),_(O,"class","description svelte-1c9v7r3"),_(O,"minlength","1"),_(O,"maxlength","1000"),O.required=!0,_(O,"placeholder","1_1000"),_(A,"for","my_all_tags"),_(W,"list","all_tags"),_(W,"id","my_all_tags"),_(W,"name","my_all_tags"),_(W,"minlength","1"),_(W,"maxlength","10"),W.required=!0,_(W,"placeholder","1_10"),_(V,"id","all_tags"),_(B,"class","fetch_insert_desc_button svelte-1c9v7r3")},m(o,s){r(o,e,s),r(o,n,s),r(o,a,s),c(a,i),c(a,l),r(o,h,s),r(o,y,s),c(y,b),c(y,T),r(o,$,s),r(o,w,s),r(o,x,s),r(o,D,s),v(D,t[3]),r(o,C,s),r(o,E,s),r(o,k,s),r(o,O,s),v(O,t[4]),r(o,N,s),r(o,j,s);for(let t=0;t<Y.length;t+=1)Y[t]&&Y[t].m(j,null);r(o,S,s),r(o,A,s),r(o,I,s),r(o,W,s),v(W,t[0]),r(o,P,s),r(o,V,s);for(let t=0;t<Z.length;t+=1)Z[t]&&Z[t].m(V,null);r(o,J,s),r(o,q,s),r(o,z,s),r(o,B,s),G||(U=[p(e,"click",t[16]),p(D,"input",t[25]),p(O,"input",t[26]),p(W,"input",t[28]),p(q,"click",t[29]),p(B,"click",t[14])],G=!0)},p(t,e){if(512&e[0]&&K!==(K=t[9].slice(0,10)+"")&&m(i,K),4&e[0]&&m(T,t[2]),8&e[0]&&v(D,t[3]),16&e[0]&&v(O,t[4]),32&e[0]){let n;for(M=t[5],n=0;n<M.length;n+=1){const o=F(t,M,n);Y[n]?Y[n].p(o,e):(Y[n]=it(o),Y[n].c(),Y[n].m(j,null))}for(;n<Y.length;n+=1)Y[n].d(1);Y.length=M.length}if(1&e[0]&&W.value!==t[0]&&v(W,t[0]),2&e[0]){let n;for(H=t[1],n=0;n<H.length;n+=1){const o=L(t,H,n);Z[n]?Z[n].p(o,e):(Z[n]=lt(o),Z[n].c(),Z[n].m(V,null))}for(;n<Z.length;n+=1)Z[n].d(1);Z.length=H.length}},d(t){t&&s(e),t&&s(n),t&&s(a),t&&s(h),t&&s(y),t&&s($),t&&s(w),t&&s(x),t&&s(D),t&&s(C),t&&s(E),t&&s(k),t&&s(O),t&&s(N),t&&s(j),d(Y,t),t&&s(S),t&&s(A),t&&s(I),t&&s(W),t&&s(P),t&&s(V),d(Z,t),t&&s(J),t&&s(q),t&&s(z),t&&s(B),G=!1,o(U)}}}function it(t){let e,n,o,a,i=t[46].name+"";function l(){return t[27](t[46])}return{c(){e=u("button"),n=f(i)},m(t,i){r(t,e,i),c(e,n),o||(a=p(e,"click",l),o=!0)},p(e,o){t=e,32&o[0]&&i!==(i=t[46].name+"")&&m(n,i)},d(t){t&&s(e),o=!1,a()}}}function lt(t){let e,n;return{c(){e=u("option"),e.__value=n=t[46].name,e.value=e.__value},m(t,n){r(t,e,n)},p(t,o){2&o[0]&&n!==(n=t[46].name)&&(e.__value=n,e.value=e.__value)},d(t){t&&s(e)}}}function ct(e){let n,a,i,l,h,v,y,b,T,$,w,x,D,C,E,k,O,N,j,S,A,I,W,P,V,L,F=""===e[9]&&K(e),J=""!==e[9]&&M(e),q=function(t){let e,n,a,i,l,d,h,_,v,y,b,T,$;return{c(){e=u("div"),n=f("auth_uid: "),a=f(t[9]),i=g(),l=u("button"),l.textContent="runBoundaryTests",d=g(),h=u("button"),h.textContent="init_and_sample_insert",_=g(),v=u("button"),v.textContent="init_db",y=g(),b=u("button"),b.textContent="get_all_descs_and_tags"},m(o,s){r(o,e,s),c(e,n),c(e,a),r(o,i,s),r(o,l,s),r(o,d,s),r(o,h,s),r(o,_,s),r(o,v,s),r(o,y,s),r(o,b,s),T||($=[p(l,"click",t[20]),p(h,"click",t[13]),p(v,"click",st),p(b,"click",t[15])],T=!0)},p(t,e){512&e[0]&&m(a,t[9])},d(t){t&&s(e),t&&s(i),t&&s(l),t&&s(d),t&&s(h),t&&s(_),t&&s(v),t&&s(y),t&&s(b),T=!1,o($)}}}(e),B=e[6]>0&&Y(e),G=Object.entries(e[8]),U=[];for(let t=0;t<G.length;t+=1)U[t]=X(z(e,G,t));let H=e[8].allTags&&tt(e),Z=e[6].length>0&&nt(e),Q=""!==e[9]&&at(e);return{c(){n=u("div"),a=u("div"),i=u("div"),i.textContent="v1.0.3",l=g(),h=u("div"),v=f("auth_login_result: "),y=u("span"),b=f(e[7]),T=g(),F&&F.c(),$=g(),J&&J.c(),w=g(),q&&q.c(),x=g(),D=u("div"),C=u("div"),E=u("div"),B&&B.c(),k=g(),O=u("div");for(let t=0;t<U.length;t+=1)U[t].c();N=g(),j=u("div"),S=u("h1"),S.textContent="Web Data Tags",A=g(),H&&H.c(),I=g(),W=u("div"),Z&&Z.c(),P=g(),V=u("h1"),V.textContent="Web Data Edit",L=g(),Q&&Q.c(),_(i,"class","version"),_(a,"class","header svelte-1c9v7r3"),_(E,"class","console"),_(S,"class","svelte-1c9v7r3"),_(j,"class","web_data_tags svelte-1c9v7r3"),_(O,"class","list svelte-1c9v7r3"),_(C,"class","left-column server_side svelte-1c9v7r3"),_(V,"class","svelte-1c9v7r3"),_(W,"class","right-column svelte-1c9v7r3"),_(D,"class","content svelte-1c9v7r3"),_(n,"class","container svelte-1c9v7r3")},m(t,e){r(t,n,e),c(n,a),c(a,i),c(a,l),c(a,h),c(h,v),c(h,y),c(y,b),c(a,T),F&&F.m(a,null),c(a,$),J&&J.m(a,null),c(a,w),q&&q.m(a,null),c(n,x),c(n,D),c(D,C),c(C,E),B&&B.m(E,null),c(C,k),c(C,O);for(let t=0;t<U.length;t+=1)U[t]&&U[t].m(O,null);c(O,N),c(O,j),c(j,S),c(j,A),H&&H.m(j,null),c(D,I),c(D,W),Z&&Z.m(W,null),c(W,P),c(W,V),c(W,L),Q&&Q.m(W,null)},p(t,e){if(128&e[0]&&m(b,t[7]),""===t[9]?F?F.p(t,e):(F=K(t),F.c(),F.m(a,$)):F&&(F.d(1),F=null),""!==t[9]?J?J.p(t,e):(J=M(t),J.c(),J.m(a,w)):J&&(J.d(1),J=null),q.p(t,e),t[6]>0?B?B.p(t,e):(B=Y(t),B.c(),B.m(E,null)):B&&(B.d(1),B=null),137472&e[0]){let n;for(G=Object.entries(t[8]),n=0;n<G.length;n+=1){const o=z(t,G,n);U[n]?U[n].p(o,e):(U[n]=X(o),U[n].c(),U[n].m(O,N))}for(;n<U.length;n+=1)U[n].d(1);U.length=G.length}t[8].allTags?H?H.p(t,e):(H=tt(t),H.c(),H.m(j,null)):H&&(H.d(1),H=null),t[6].length>0?Z?Z.p(t,e):(Z=nt(t),Z.c(),Z.m(W,P)):Z&&(Z.d(1),Z=null),""!==t[9]?Q?Q.p(t,e):(Q=at(t),Q.c(),Q.m(W,null)):Q&&(Q.d(1),Q=null)},i:t,o:t,d(t){t&&s(n),F&&F.d(),J&&J.d(),q&&q.d(),B&&B.d(),d(U,t),H&&H.d(),Z&&Z.d(),Q&&Q.d()}}}let rt="http://localhost:8000";async function st(){try{const t=await fetch(rt+"/init_db",{method:"POST",headers:{"Content-Type":"application/json"}}),e=await t.json();console.log(e)}catch(t){console.error("Error:",t)}}function dt(t,e,n){let o="",a=[],i=null,l="",c="",r=[],s=[],d=[],u=[],f="Not logged in",g={allDescs:[],allTags:[],any_user_new_allDescs_with_tags:[]},h=[],p=[],_="";function m(t,e){try{const i=a.find((t=>t.name===e));if(i){i.desc_id=t;const e=r.some((t=>t.id==t.id));e||n(5,r=[...r,i]),n(0,o="")}else{const o={id:a.length+1,name:e,desc_id:t,created_at:(new Date).toISOString(),updated_at:(new Date).toISOString()};n(1,a=[...a,o]),n(5,r=[...r,o])}}catch(t){console.error("Error:",t)}}function v(t){try{const e=g.allDescs.find((e=>e.id===t));e?(n(9,_=e.auth_uid),n(2,i=e.id),n(3,l=e.title),n(4,c=e.description),n(5,r=e.tags)):console.error(`No description found with id: ${t}`)}catch(t){console.error("Error:",t)}}function y(t){s.some((e=>e===t))||(s=[...s,t]);const e=g.allDescs.filter((t=>t.tags.some((t=>s.some((e=>e===t.id))))));p.find((t=>"Filter Web Data Descs"===t.title)).descs,p=[...p.filter((t=>"Filter Web Data Descs"!==t.title)),{title:"Filter Web Data Descs",descs:e}]}const b={validateAuthUid:t=>/^[a-zA-Z0-9_-]+$/.test(t),validateDescId:t=>(console.log("validateDescId",t),Number.isInteger(t)&&t>0),validateISODate:t=>/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/.test(t),validateTitle:t=>(console.log("validateTitle",t),"string"==typeof t&&t.length>=1&&t.length<=100),validateDescription:t=>(console.log("validateDescription",t),"string"==typeof t&&t.length>=1&&t.length<=1e3),validateTagName:t=>"string"==typeof t&&t.length>=1&&t.length<=10,validateData(t){const{auth_uid:e,desc_id:n,created_at:o,updated_at:a,title:i,description:l,tags:c}=t,r=this.validateAuthUid(e);this.validateDescId(n);return{isAuthUidValid:r,isTitleValid:this.validateTitle(i),isDescriptionValid:this.validateDescription(l),areTagsValid:c.every((t=>this.validateTagName(t.name)))}}};function $(){console.log("auth_uid",_,"desc_id",i,"title",l,"description",c,"tags",r);const t={auth_uid:_,desc_id:i,title:l,description:c,tags:r};n(6,u=[]);for(const[e,n]of Object.entries(b.validateData(t)))if(n||u.push(e),"tags"===e)for(const[t,e]of n.entries())for(const[n,o]of Object.entries(b.validateData(e)))o||u.push(`tags[${t}].${n}`);else"auth_uid"===e&&b.validateAuthUid(_),"desc_id"===e&&b.validateDescId(i),"title"===e&&b.validateTitle(l),"description"===e&&b.validateDescription(c);return!(u.length>0)||(console.log(u),!1)}async function w(){try{if(!$())throw new Error("Validation failed");const t=await fetch("http://localhost:8000/insert_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:_,title:l,description:c,tags:r})}),e=await t.json();console.log(e)}catch(t){}}async function x(){try{const t=await fetch(rt+"/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:_})}),e=await t.json();console.log(e),n(8,g=e),n(1,a=e.allTags),g.any_user_new_allDescs_with_tags.length>0&&(h=e.any_user_new_allDescs_with_tags),p=[{title:"Your Web Data Descs",descs:h},{title:"Filter Web Data Descs",descs:d},{title:"Web Data Descs",descs:e.allDescs}]}catch(t){console.error("Error:",t)}}async function D(t){try{const e=await fetch(rt+"/delete_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,auth_uid:_})});await e.json()}catch(t){console.error("Error:",t)}}firebase.initializeApp({apiKey:"AIzaSyBcOlIDP2KWbJuKM0WeMHNp-WvjTVfLt9Y",authDomain:"p2auth-ea50a.firebaseapp.com",projectId:"p2auth-ea50a",storageBucket:"p2auth-ea50a.appspot.com",messagingSenderId:"796225429484",appId:"1:796225429484:web:ece56ef2fc0be28cd6eac9"});const C=new firebase.auth.GoogleAuthProvider;const E=[{auth_uid:"user1",desc_id:1,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo1",description:"bar1",tags:[{desc_id:1,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:1,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:2,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo2",description:"bar2",tags:[{desc_id:2,id:1,name:"tag1",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:2,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user2",desc_id:3,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"foo3",description:"bar3",tags:[{desc_id:3,id:2,name:"tag2",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"},{desc_id:3,id:3,name:"tag3",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}],k=[{auth_uid:"user1",desc_id:4,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"a".repeat(100),description:"b".repeat(1e3),tags:[{desc_id:4,id:4,name:"tag4",created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]},{auth_uid:"user1",desc_id:5,created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00",title:"",description:"",tags:[{desc_id:5,id:5,name:"t".repeat(10),created_at:"2024-09-01T00:00:00",updated_at:"2024-09-01T00:00:00"}]}];T((async()=>{await async function(){try{console.log("auth_check_login");const t=await new Promise(((t,e)=>{firebase.auth().onAuthStateChanged(t,e)}));console.log("Current user:",t),t?(n(9,_=t.uid),console.log(1),n(7,f="Logged in")):(console.log(2),n(7,f="Not logged in"),n(9,_=""),console.log(3),console.log("test_mode"),n(7,f="Logged in"))}catch(t){console.error("Error during authentication:",t),n(7,f="Authentication failed"),n(9,_="")}}(),await x()}));return(async()=>{})(),[o,a,i,l,c,r,u,f,g,_,m,v,y,async function(){try{for(const t of E)n(9,_=t.auth_uid),n(2,i=t.desc_id),n(3,l=t.title),n(4,c=t.description),n(5,r=t.tags),await w()}catch(t){console.error("Error:",t)}},w,x,async function(){try{if(!$())throw new Error("Validation failed");const t=await fetch(rt+"/update_desc",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({auth_uid:_,desc_id:i,title:l,description:c,tags:r})});await t.json()}catch(t){console.error("Error:",t)}},D,async function(){try{console.log("auth_google_login");const t=(await firebase.auth().signInWithPopup(C)).user;console.log(4),n(7,f=`Logged in as: ${t.displayName}`)}catch(t){console.error("Error during Google login:",t),alert("Google login failed. "+t.message)}},async function(){try{console.log(5),await firebase.auth().signOut(),n(7,f="Not logged in"),await async function(){try{const t=await fetch(rt+"/",{method:"GET"});n(8,g=await t.json())}catch(t){console.error("Error fetching data:",t)}}()}catch(t){console.error("Error during sign-out:",t),alert("Sign out failed. "+t.message)}},function(){n(3,l=k[1].title),n(4,c=k[1].description),n(5,r=k[1].tags),w()},t=>v(t.id),t=>D(t.id),t=>y(t.id),t=>y(t.id),function(){l=this.value,n(3,l)},function(){c=this.value,n(4,c)},t=>n(5,r=r.filter((e=>e.id!==t.id))),function(){o=this.value,n(0,o)},()=>m(i,o)]}return new class extends V{constructor(t){super(),P(this,t,dt,ct,i,{},null,[-1,-1,-1])}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
