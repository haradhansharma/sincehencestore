(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{createElement:()=>y,deepSignal:()=>Be,directive:()=>Nt,getContext:()=>St,getElement:()=>Pt,navigate:()=>on,prefetch:()=>tn,store:()=>dt,useContext:()=>ie,useEffect:()=>te,useMemo:()=>oe});var n,r,o,i,s,l,u,c,_,a={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function h(e,t){for(var n in t)e[n]=t[n];return e}function v(e){var t=e.parentNode;t&&t.removeChild(e)}function y(e,t,r){var o,i,s,l={};for(s in t)"key"==s?o=t[s]:"ref"==s?i=t[s]:l[s]=t[s];if(arguments.length>2&&(l.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(s in e.defaultProps)void 0===l[s]&&(l[s]=e.defaultProps[s]);return m(e,l,o,i,null)}function m(e,t,n,i,s){var l={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==s?++o:s,__i:-1,__u:0};return null==s&&null!=r.vnode&&r.vnode(l),l}function g(e){return e.children}function w(e,t){this.props=e,this.context=t}function b(e,t){if(null==t)return e.__?b(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?b(e):null}function x(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return x(e)}}function k(e){(!e.__d&&(e.__d=!0)&&s.push(e)&&!S.__r++||l!==r.debounceRendering)&&((l=r.debounceRendering)||u)(S)}function S(){var e,t,n,o,i,l,u,_,a;for(s.sort(c);e=s.shift();)e.__d&&(t=s.length,o=void 0,l=(i=(n=e).__v).__e,_=[],a=[],(u=n.__P)&&((o=h({},i)).__v=i.__v+1,r.vnode&&r.vnode(o),N(u,o,i,n.__n,void 0!==u.ownerSVGElement,32&i.__u?[l]:null,_,null==l?b(i):l,!!(32&i.__u),a),o.__.__k[o.__i]=o,j(_,o,a),o.__e!=l&&x(o)),s.length>t&&s.sort(c));S.__r=0}function P(e,t,n,r,o,i,s,l,u,c,_){var p,d,h,v,y,m=r&&r.__k||f,g=t.length;for(n.__d=u,E(n,t,m),u=n.__d,p=0;p<g;p++)null!=(h=n.__k[p])&&"boolean"!=typeof h&&"function"!=typeof h&&(d=-1===h.__i?a:m[h.__i]||a,h.__i=p,N(e,h,d,o,i,s,l,u,c,_),v=h.__e,h.ref&&d.ref!=h.ref&&(d.ref&&U(d.ref,null,h),_.push(h.ref,h.__c||v,h)),null==y&&null!=v&&(y=v),65536&h.__u||d.__k===h.__k?u=$(h,u,e):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:v&&(u=v.nextSibling),h.__d=void 0,h.__u&=-196609);n.__d=u,n.__e=y}function E(e,t,n){var r,o,i,s,l,u=t.length,c=n.length,_=c,a=0;for(e.__k=[],r=0;r<u;r++)null!=(o=e.__k[r]=null==(o=t[r])||"boolean"==typeof o||"function"==typeof o?null:"string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m(null,o,null,null,o):d(o)?m(g,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?m(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o)?(o.__=e,o.__b=e.__b+1,l=C(o,n,s=r+a,_),o.__i=l,i=null,-1!==l&&(_--,(i=n[l])&&(i.__u|=131072)),null==i||null===i.__v?(-1==l&&a--,"function"!=typeof o.type&&(o.__u|=65536)):l!==s&&(l===s+1?a++:l>s?_>u-s?a+=l-s:a--:a=l<s&&l==s-1?l-s:0,l!==r+a&&(o.__u|=65536))):(i=n[r])&&null==i.key&&i.__e&&(i.__e==e.__d&&(e.__d=b(i)),W(i,i,!1),n[r]=null,_--);if(_)for(r=0;r<c;r++)null!=(i=n[r])&&0==(131072&i.__u)&&(i.__e==e.__d&&(e.__d=b(i)),W(i,i))}function $(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=$(r[o],t,n));return t}return e.__e!=t&&(n.insertBefore(e.__e,t||null),t=e.__e),t&&t.nextSibling}function C(e,t,n,r){var o=e.key,i=e.type,s=n-1,l=n+1,u=t[n];if(null===u||u&&o==u.key&&i===u.type)return n;if(r>(null!=u&&0==(131072&u.__u)?1:0))for(;s>=0||l<t.length;){if(s>=0){if((u=t[s])&&0==(131072&u.__u)&&o==u.key&&i===u.type)return s;s--}if(l<t.length){if((u=t[l])&&0==(131072&u.__u)&&o==u.key&&i===u.type)return l;l++}}return-1}function O(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||p.test(t)?n:n+"px"}function T(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||O(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||O(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=Date.now(),e.addEventListener(t,i?M:A,i)):e.removeEventListener(t,i?M:A,i);else{if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&"role"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function A(e){var t=this.l[e.type+!1];if(e.t){if(e.t<=t.u)return}else e.t=Date.now();return t(r.event?r.event(e):e)}function M(e){return this.l[e.type+!0](r.event?r.event(e):e)}function N(e,t,n,o,i,s,l,u,c,_){var a,f,p,v,y,m,b,x,k,S,E,$,C,O,T,A=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(c=!!(32&n.__u),s=[u=t.__e=n.__e]),(a=r.__b)&&a(t);e:if("function"==typeof A)try{if(x=t.props,k=(a=A.contextType)&&o[a.__c],S=a?k?k.props.value:a.__:o,n.__c?b=(f=t.__c=n.__c).__=f.__E:("prototype"in A&&A.prototype.render?t.__c=f=new A(x,S):(t.__c=f=new w(x,S),f.constructor=A,f.render=L),k&&k.sub(f),f.props=x,f.state||(f.state={}),f.context=S,f.__n=o,p=f.__d=!0,f.__h=[],f._sb=[]),null==f.__s&&(f.__s=f.state),null!=A.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=h({},f.__s)),h(f.__s,A.getDerivedStateFromProps(x,f.__s))),v=f.props,y=f.state,f.__v=t,p)null==A.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==A.getDerivedStateFromProps&&x!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(x,S),!f.__e&&(null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(x,f.__s,S)||t.__v===n.__v)){for(t.__v!==n.__v&&(f.props=x,f.state=f.__s,f.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),E=0;E<f._sb.length;E++)f.__h.push(f._sb[E]);f._sb=[],f.__h.length&&l.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(x,f.__s,S),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(v,y,m)}))}if(f.context=S,f.props=x,f.__P=e,f.__e=!1,$=r.__r,C=0,"prototype"in A&&A.prototype.render){for(f.state=f.__s,f.__d=!1,$&&$(t),a=f.render(f.props,f.state,f.context),O=0;O<f._sb.length;O++)f.__h.push(f._sb[O]);f._sb=[]}else do{f.__d=!1,$&&$(t),a=f.render(f.props,f.state,f.context),f.state=f.__s}while(f.__d&&++C<25);f.state=f.__s,null!=f.getChildContext&&(o=h(h({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),P(e,d(T=null!=a&&a.type===g&&null==a.key?a.props.children:a)?T:[T],t,n,o,i,s,l,u,c,_),f.base=t.__e,t.__u&=-161,f.__h.length&&l.push(f),b&&(f.__E=f.__=null)}catch(e){t.__v=null,c||null!=s?(t.__e=u,t.__u|=c?160:32,s[s.indexOf(u)]=null):(t.__e=n.__e,t.__k=n.__k),r.__e(e,t,n)}else null==s&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=H(n.__e,t,n,o,i,s,l,c,_);(a=r.diffed)&&a(t)}function j(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)U(n[o],n[++o],n[++o]);r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){r.__e(e,t.__v)}}))}function H(e,t,r,o,i,s,l,u,c){var _,f,p,h,y,m,g,w=r.props,x=t.props,k=t.type;if("svg"===k&&(i=!0),null!=s)for(_=0;_<s.length;_++)if((y=s[_])&&"setAttribute"in y==!!k&&(k?y.localName===k:3===y.nodeType)){e=y,s[_]=null;break}if(null==e){if(null===k)return document.createTextNode(x);e=i?document.createElementNS("http://www.w3.org/2000/svg",k):document.createElement(k,x.is&&x),s=null,u=!1}if(null===k)w===x||u&&e.data===x||(e.data=x);else{if(s=s&&n.call(e.childNodes),w=r.props||a,!u&&null!=s)for(w={},_=0;_<e.attributes.length;_++)w[(y=e.attributes[_]).name]=y.value;for(_ in w)y=w[_],"children"==_||("dangerouslySetInnerHTML"==_?p=y:"key"===_||_ in x||T(e,_,null,y,i));for(_ in x)y=x[_],"children"==_?h=y:"dangerouslySetInnerHTML"==_?f=y:"value"==_?m=y:"checked"==_?g=y:"key"===_||u&&"function"!=typeof y||w[_]===y||T(e,_,y,w[_],i);if(f)u||p&&(f.__html===p.__html||f.__html===e.innerHTML)||(e.innerHTML=f.__html),t.__k=[];else if(p&&(e.innerHTML=""),P(e,d(h)?h:[h],t,r,o,i&&"foreignObject"!==k,s,l,s?s[0]:r.__k&&b(r,0),u,c),null!=s)for(_=s.length;_--;)null!=s[_]&&v(s[_]);u||(_="value",void 0!==m&&(m!==e[_]||"progress"===k&&!m||"option"===k&&m!==w[_])&&T(e,_,m,w[_],!1),_="checked",void 0!==g&&g!==e[_]&&T(e,_,g,w[_],!1))}return e}function U(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){r.__e(e,n)}}function W(e,t,n){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||U(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,t)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&W(o[i],t,n||"function"!=typeof e.type);n||null==e.__e||v(e.__e),e.__=e.__e=e.__d=void 0}function L(e,t,n){return this.constructor(e,n)}function D(e,t,o){var i,s,l,u;r.__&&r.__(e,t),s=(i="function"==typeof o)?null:o&&o.__k||t.__k,l=[],u=[],N(t,e=(!i&&o||t).__k=y(g,null,[e]),s||a,a,void 0!==t.ownerSVGElement,!i&&o?[o]:s?null:t.firstChild?n.call(t.childNodes):null,l,!i&&o?o:s?s.__e:t.firstChild,i,u),j(l,e,u)}function F(e,t){D(e,t,F)}function R(e,t){var n={__c:t="__cC"+_++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=[],(r={})[t]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some((function(e){e.__e=!0,k(e)}))},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n=f.slice,r={__e:function(e,t,n,r){for(var o,i,s;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),s=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),s=o.__d),s)return o.__E=o}catch(t){e=t}throw e}},o=0,i=function(e){return null!=e&&null==e.constructor},w.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=h({},this.state),"function"==typeof e&&(e=e(h({},n),this.props)),e&&h(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),k(this))},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),k(this))},w.prototype.render=g,s=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,c=function(e,t){return e.__v.__b-t.__v.__b},S.__r=0,_=0;var V,q,I,B,z=0,G=[],J=[],K=r.__b,Q=r.__r,X=r.diffed,Y=r.__c,Z=r.unmount;function ee(e,t){r.__h&&r.__h(q,e,z||t),z=0;var n=q.__H||(q.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:J}),n.__[e]}function te(e,t){var n=ee(V++,3);!r.__s&&ae(n.__H,t)&&(n.__=e,n.i=t,q.__H.__h.push(n))}function ne(e,t){var n=ee(V++,4);!r.__s&&ae(n.__H,t)&&(n.__=e,n.i=t,q.__h.push(n))}function re(e){return z=5,oe((function(){return{current:e}}),[])}function oe(e,t){var n=ee(V++,7);return ae(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function ie(e){var t=q.context[e.__c],n=ee(V++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(q)),t.props.value):e.__}function se(){for(var e;e=G.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ce),e.__H.__h.forEach(_e),e.__H.__h=[]}catch(t){e.__H.__h=[],r.__e(t,e.__v)}}r.__b=function(e){q=null,K&&K(e)},r.__r=function(e){Q&&Q(e),V=0;var t=(q=e.__c).__H;t&&(I===q?(t.__h=[],q.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.__V=J,e.__N=e.i=void 0}))):(t.__h.forEach(ce),t.__h.forEach(_e),t.__h=[],V=0)),I=q},r.diffed=function(e){X&&X(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==G.push(t)&&B===r.requestAnimationFrame||((B=r.requestAnimationFrame)||ue)(se)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.__V!==J&&(e.__=e.__V),e.i=void 0,e.__V=J}))),I=q=null},r.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ce),e.__h=e.__h.filter((function(e){return!e.__||_e(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],r.__e(n,e.__v)}})),Y&&Y(e,t)},r.unmount=function(e){Z&&Z(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{ce(e)}catch(e){t=e}})),n.__H=void 0,t&&r.__e(t,n.__v))};var le="function"==typeof requestAnimationFrame;function ue(e){var t,n=function(){clearTimeout(r),le&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);le&&(t=requestAnimationFrame(n))}function ce(e){var t=q,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),q=t}function _e(e){var t=q;e.__c=e.__(),q=t}function ae(e,t){return!e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function fe(){throw new Error("Cycle detected")}var pe=Symbol.for("preact-signals");function de(){if(me>1)me--;else{for(var e,t=!1;void 0!==ye;){var n=ye;for(ye=void 0,ge++;void 0!==n;){var r=n.o;if(n.o=void 0,n.f&=-3,!(8&n.f)&&Se(n))try{n.c()}catch(n){t||(e=n,t=!0)}n=r}}if(ge=0,me--,t)throw e}}var he,ve=void 0,ye=void 0,me=0,ge=0,we=0;function be(e){if(void 0!==ve){var t=e.n;if(void 0===t||t.t!==ve)return t={i:0,S:e,p:ve.s,n:void 0,t:ve,e:void 0,x:void 0,r:t},void 0!==ve.s&&(ve.s.n=t),ve.s=t,e.n=t,32&ve.f&&e.S(t),t;if(-1===t.i)return t.i=0,void 0!==t.n&&(t.n.p=t.p,void 0!==t.p&&(t.p.n=t.n),t.p=ve.s,t.n=void 0,ve.s.n=t,ve.s=t),t}}function xe(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}function ke(e){return new xe(e)}function Se(e){for(var t=e.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Pe(e){for(var t=e.s;void 0!==t;t=t.n){var n=t.S.n;if(void 0!==n&&(t.r=n),t.S.n=t,t.i=-1,void 0===t.n){e.s=t;break}}}function Ee(e){for(var t=e.s,n=void 0;void 0!==t;){var r=t.p;-1===t.i?(t.S.U(t),void 0!==r&&(r.n=t.n),void 0!==t.n&&(t.n.p=r)):n=t,t.S.n=t.r,void 0!==t.r&&(t.r=void 0),t=r}e.s=n}function $e(e){xe.call(this,void 0),this.x=e,this.s=void 0,this.g=we-1,this.f=4}function Ce(e){return new $e(e)}function Oe(e){var t=e.u;if(e.u=void 0,"function"==typeof t){me++;var n=ve;ve=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,Te(e),t}finally{ve=n,de()}}}function Te(e){for(var t=e.s;void 0!==t;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,Oe(e)}function Ae(e){if(ve!==this)throw new Error("Out-of-order effect");Ee(this),ve=e,this.f&=-2,8&this.f&&Te(this),de()}function Me(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}function Ne(e){var t=new Me(e);try{t.c()}catch(e){throw t.d(),e}return t.d.bind(t)}function je(e,t){r[e]=t.bind(null,r[e]||function(){})}function He(e){he&&he(),he=e&&e.S()}function Ue(e){var t=this,n=e.data,r=function(e){return oe((function(){return ke(e)}),[])}(n);r.value=n;var o=oe((function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}return t.__$u.c=function(){var e;i(o.peek())||3!==(null==(e=t.base)?void 0:e.nodeType)?(t.__$f|=1,t.setState({})):t.base.data=o.peek()},Ce((function(){var e=r.value.value;return 0===e?0:!0===e?"":e||""}))}),[]);return o.value}function We(e,t,n,r){var o=t in e&&void 0===e.ownerSVGElement,i=ke(n);return{o:function(e,t){i.value=e,r=t},d:Ne((function(){var n=i.value.value;r[t]!==n&&(r[t]=n,o?e[t]=n:n?e.setAttribute(t,n):e.removeAttribute(t))}))}}xe.prototype.brand=pe,xe.prototype.h=function(){return!0},xe.prototype.S=function(e){this.t!==e&&void 0===e.e&&(e.x=this.t,void 0!==this.t&&(this.t.e=e),this.t=e)},xe.prototype.U=function(e){if(void 0!==this.t){var t=e.e,n=e.x;void 0!==t&&(t.x=n,e.e=void 0),void 0!==n&&(n.e=t,e.x=void 0),e===this.t&&(this.t=n)}},xe.prototype.subscribe=function(e){var t=this;return Ne((function(){var n=t.value,r=32&this.f;this.f&=-33;try{e(n)}finally{this.f|=r}}))},xe.prototype.valueOf=function(){return this.value},xe.prototype.toString=function(){return this.value+""},xe.prototype.toJSON=function(){return this.value},xe.prototype.peek=function(){return this.v},Object.defineProperty(xe.prototype,"value",{get:function(){var e=be(this);return void 0!==e&&(e.i=this.i),this.v},set:function(e){if(ve instanceof $e&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){ge>100&&fe(),this.v=e,this.i++,we++,me++;try{for(var t=this.t;void 0!==t;t=t.x)t.t.N()}finally{de()}}}}),($e.prototype=new xe).h=function(){if(this.f&=-3,1&this.f)return!1;if(32==(36&this.f))return!0;if(this.f&=-5,this.g===we)return!0;if(this.g=we,this.f|=1,this.i>0&&!Se(this))return this.f&=-2,!0;var e=ve;try{Pe(this),ve=this;var t=this.x();(16&this.f||this.v!==t||0===this.i)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return ve=e,Ee(this),this.f&=-2,!0},$e.prototype.S=function(e){if(void 0===this.t){this.f|=36;for(var t=this.s;void 0!==t;t=t.n)t.S.S(t)}xe.prototype.S.call(this,e)},$e.prototype.U=function(e){if(void 0!==this.t&&(xe.prototype.U.call(this,e),void 0===this.t)){this.f&=-33;for(var t=this.s;void 0!==t;t=t.n)t.S.U(t)}},$e.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;void 0!==e;e=e.x)e.t.N()}},$e.prototype.peek=function(){if(this.h()||fe(),16&this.f)throw this.v;return this.v},Object.defineProperty($e.prototype,"value",{get:function(){1&this.f&&fe();var e=be(this);if(this.h(),void 0!==e&&(e.i=this.i),16&this.f)throw this.v;return this.v}}),Me.prototype.c=function(){var e=this.S();try{if(8&this.f)return;if(void 0===this.x)return;var t=this.x();"function"==typeof t&&(this.u=t)}finally{e()}},Me.prototype.S=function(){1&this.f&&fe(),this.f|=1,this.f&=-9,Oe(this),Pe(this),me++;var e=ve;return ve=this,Ae.bind(this,e)},Me.prototype.N=function(){2&this.f||(this.f|=2,this.o=ye,ye=this)},Me.prototype.d=function(){this.f|=8,1&this.f||Te(this)},Ue.displayName="_st",Object.defineProperties(xe.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:Ue},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),je("__b",(function(e,t){if("string"==typeof t.type){var n,r=t.props;for(var o in r)if("children"!==o){var i=r[o];i instanceof xe&&(n||(t.__np=n={}),n[o]=i,r[o]=i.peek())}}e(t)})),je("__r",(function(e,t){He();var n,r=t.__c;r&&(r.__$f&=-2,void 0===(n=r.__$u)&&(r.__$u=n=function(e){var t;return Ne((function(){t=this})),t.c=function(){r.__$f|=1,r.setState({})},t}())),He(n),e(t)})),je("__e",(function(e,t,n,r){He(),e(t,n,r)})),je("diffed",(function(e,t){var n;if(He(),"string"==typeof t.type&&(n=t.__e)){var r=t.__np,o=t.props;if(r){var i=n.U;if(i)for(var s in i){var l=i[s];void 0===l||s in r||(l.d(),i[s]=void 0)}else n.U=i={};for(var u in r){var c=i[u],_=r[u];void 0===c?(c=We(n,u,_,o),i[u]=c):c.o(_,o)}}}e(t)})),je("unmount",(function(e,t){if("string"==typeof t.type){var n=t.__e;if(n){var r=n.U;if(r)for(var o in n.U=void 0,r){var i=r[o];i&&i.d()}}}else{var s=t.__c;if(s){var l=s.__$u;l&&(s.__$u=void 0,l.d())}}e(t)})),je("__h",(function(e,t,n,r){(r<3||9===r)&&(t.__$f|=2),e(t,n,r)})),w.prototype.shouldComponentUpdate=function(e,t){var n=this.__$u;if(!(n&&void 0!==n.s||4&this.__$f))return!0;if(3&this.__$f)return!0;for(var r in t)return!0;for(var o in e)if("__source"!==o&&e[o]!==this.props[o])return!0;for(var i in this.props)if(!(i in e))return!0;return!1};var Le=new WeakMap,De=new WeakMap,Fe=new WeakMap,Re=new WeakSet,Ve=new WeakMap,qe=/^\$/,Ie=!1,Be=function(e){if(!et(e))throw new Error("This object can't be observed.");return De.has(e)||De.set(e,Ge(e,Qe)),De.get(e)},ze=function(e,t){Ie=!0;var n=e[t];try{Ie=!1}catch(e){}return n},Ge=function(e,t){var n=new Proxy(e,t);return Re.add(n),n},Je=function(){throw new Error("Don't mutate the signals directly.")},Ke=function(e){return function(t,n,r){var o;if(Ie)return Reflect.get(t,n,r);var i=e||"$"===n[0];if(!e&&i&&Array.isArray(t)){if("$"===n)return Fe.has(t)||Fe.set(t,Ge(t,Xe)),Fe.get(t);i="$length"===n}Le.has(r)||Le.set(r,new Map);var s=Le.get(r),l=i?n.replace(qe,""):n;if(s.has(l)||"function"!=typeof(null==(o=Object.getOwnPropertyDescriptor(t,l))?void 0:o.get)){var u=Reflect.get(t,l,r);if(i&&"function"==typeof u)return;if("symbol"==typeof l&&Ye.has(l))return u;s.has(l)||(et(u)&&(De.has(u)||De.set(u,Ge(u,Qe)),u=De.get(u)),s.set(l,ke(u)))}else s.set(l,Ce((function(){return Reflect.get(t,l,r)})));return i?s.get(l):s.get(l).value}},Qe={get:Ke(!1),set:function(e,t,n,r){Le.has(r)||Le.set(r,new Map);var o=Le.get(r);if("$"===t[0]){n instanceof xe||Je();var i=t.replace(qe,"");return o.set(i,n),Reflect.set(e,i,n.peek(),r)}var s=n;et(n)&&(De.has(n)||De.set(n,Ge(n,Qe)),s=De.get(n));var l=!(t in e),u=Reflect.set(e,t,n,r);return o.has(t)?o.get(t).value=s:o.set(t,ke(s)),l&&Ve.has(e)&&Ve.get(e).value++,Array.isArray(e)&&o.has("length")&&(o.get("length").value=e.length),u},deleteProperty:function(e,t){"$"===t[0]&&Je();var n=Le.get(De.get(e)),r=Reflect.deleteProperty(e,t);return n&&n.has(t)&&(n.get(t).value=void 0),Ve.has(e)&&Ve.get(e).value++,r},ownKeys:function(e){return Ve.has(e)||Ve.set(e,ke(0)),Ve._=Ve.get(e).value,Reflect.ownKeys(e)}},Xe={get:Ke(!0),set:Je,deleteProperty:Je},Ye=new Set(Object.getOwnPropertyNames(Symbol).map((function(e){return Symbol[e]})).filter((function(e){return"symbol"==typeof e}))),Ze=new Set([Object,Array]),et=function(e){return"object"==typeof e&&null!==e&&(!("function"==typeof e.constructor&&e.constructor.name in globalThis&&globalThis[e.constructor.name]===e.constructor)||Ze.has(e.constructor))&&!Re.has(e)};function tt(e){return this.getChildContext=()=>e.context,e.children}function nt(e){const t=this,n=e._container;t.componentWillUnmount=function(){D(null,t._temp),t._temp=null,t._container=null},t._container&&t._container!==n&&t.componentWillUnmount(),e._vnode?(t._temp||(t._container=n,t._temp={nodeType:1,parentNode:n,childNodes:[],appendChild(e){this.childNodes.push(e),t._container.appendChild(e)},insertBefore(e){this.childNodes.push(e),t._container.appendChild(e)},removeChild(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t._container.removeChild(e)}}),D(y(tt,{context:t.context},e._vnode),t._temp)):t._temp&&t.componentWillUnmount()}const rt=e=>!!e&&"object"==typeof e&&!Array.isArray(e),ot=(e,t)=>{if(rt(e)&&rt(t))for(const r in t){var n;const o=null===(n=Object.getOwnPropertyDescriptor(t,r))||void 0===n?void 0:n.get;"function"==typeof o?Object.defineProperty(e,r,{get:o}):rt(t[r])?(e[r]||Object.assign(e,{[r]:{}}),ot(e[r],t[r])):Object.assign(e,{[r]:t[r]})}},it=new Map,st=new Map,lt=new Map,ut=new WeakMap,ct=new WeakMap,_t=new WeakMap,at=(e,t)=>{if(!ut.has(e)){const n=new Proxy(e,ft);ut.set(e,n),ct.set(n,t)}return ut.get(e)},ft={get:(e,t,n)=>{var r,o;const i=ct.get(n),s=null===(r=Object.getOwnPropertyDescriptor(e,t))||void 0===r?void 0:r.get;if(s){const t=Et();if(t){const n=_t.get(t)||_t.set(t,new Map).get(t);return n.has(s)||n.set(s,Ce((()=>{Ot(i),$t(t);try{return s.call(e)}finally{Ct(),Tt()}}))),n.get(s).value}}const l=Reflect.get(e,t,n);if(void 0===l&&n===it.get(i)){const r={};return Reflect.set(e,t,r,n),at(r,i)}return"GeneratorFunction"===(null==l||null===(o=l.constructor)||void 0===o?void 0:o.name)?async(...e)=>{const t=Et(),n=l(...e);let r,o;for(;;){Ot(i),$t(t);try{o=n.next(r)}finally{Ct(),Tt()}try{r=await o.value}catch(e){n.throw(e)}if(o.done)break}return r}:"function"==typeof l?(...e)=>{Ot(i);try{return l(...e)}finally{Tt()}}:rt(l)?at(l,i):l}},pt="I acknowledge that using a private store means my plugin will inevitably break on the next store release.";function dt(e,{state:t={},...n}={},{lock:r=!1}={}){if(it.has(e)){if(r===pt||lt.has(e)){const t=lt.get(e);if(r!==pt&&(!0===r||r!==t))throw t?Error("Cannot unlock a private store with an invalid lock code"):Error("Cannot lock a public store")}else lt.set(e,r);const o=st.get(e);ot(o,n),ot(o.state,t)}else{r!==pt&&lt.set(e,r);const o={state:Be(t),...n},i=new Proxy(o,ft);st.set(e,o),it.set(e,i),ct.set(i,e)}return it.get(e)}Object.entries((()=>{const e=document.querySelector('script[type="application/json"]#wc-interactivity-initial-state');if(null==e||!e.textContent)return{};try{const t=JSON.parse(e.textContent);if(rt(t))return t;throw Error("Parsed state is not an object")}catch(e){console.log(e)}return{}})()).forEach((([e,t])=>{dt(e,{state:t})}));var ht=0;function vt(e,t,n,o,i,s){var l,u,c={};for(u in t)"ref"==u?l=t[u]:c[u]=t[u];var _={type:e,props:c,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--ht,__i:-1,__u:0,__source:i,__self:s};if("function"==typeof e&&(l=e.defaultProps))for(u in l)void 0===c[u]&&(c[u]=l[u]);return r.vnode&&r.vnode(_),_}Array.isArray;const yt=R({}),mt=new WeakMap,gt=()=>{throw new Error("Please use `data-wp-bind` to modify the attributes of an element.")},wt={get(e,t,n){const r=Reflect.get(e,t,n);return r&&"object"==typeof r?bt(r):r},set:gt,deleteProperty:gt},bt=e=>(mt.has(e)||mt.set(e,new Proxy(e,wt)),mt.get(e)),xt=[],kt=[],St=e=>{var t;return null===(t=Et())||void 0===t?void 0:t.context[e||kt.slice(-1)]},Pt=()=>{if(!Et())throw Error("Cannot call `getElement()` outside getters and actions used by directives.");const{ref:e,state:t,props:n}=Et();return Object.freeze({ref:e.current,state:t,props:bt(n)})},Et=()=>xt.slice(-1)[0],$t=e=>{xt.push(e)},Ct=()=>{xt.pop()},Ot=e=>{kt.push(e)},Tt=()=>{kt.pop()},At={},Mt={},Nt=(e,t,{priority:n=10}={})=>{At[e]=t,Mt[e]=n},jt=({scope:e}={})=>(t,...n)=>{let{value:r,namespace:o}=t;const i="!"===r[0]&&!!(r=r.slice(1));$t(e);const s=((e,t)=>{let n={...it.get(t),context:Et().context[t]};return e.split(".").forEach((e=>n=n[e])),n})(r,o),l="function"==typeof s?s(...n):s;return Ct(),i?!l:l},Ht=({directives:e,priorityLevels:[t,...r],element:o,originalProps:i,previousScope:s={}})=>{const l=re({}).current;var u;l.evaluate=(u=jt({scope:l}),z=8,oe((function(){return u}),[])),l.context=ie(yt),l.ref=s.ref||re(null),l.state=s.state||re(Be({})).current,o=function(e,t,r){var o,i,s,l,u=h({},e.props);for(s in e.type&&e.type.defaultProps&&(l=e.type.defaultProps),t)"key"==s?o=t[s]:"ref"==s?i=t[s]:u[s]=void 0===t[s]&&void 0!==l?l[s]:t[s];return arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),m(e.type,u,o||e.key,i||e.ref,null)}(o,{ref:l.ref}),l.props=o.props;const c=r.length>0?vt(Ht,{directives:e,priorityLevels:r,element:o,originalProps:i,previousScope:l}):o,_={...i,children:c},a={directives:e,props:_,element:o,context:yt,evaluate:l.evaluate};$t(l);for(const e of t){var f;const t=null===(f=At[e])||void 0===f?void 0:f.call(At,a);void 0!==t&&(_.children=t)}return Ct(),_.children},Ut=r.vnode;r.vnode=e=>{if(e.props.__directives){const t=e.props,n=t.__directives;n.key&&(e.key=n.key.find((({suffix:e})=>"default"===e)).value),delete t.__directives;const r=(e=>{const t=Object.keys(e).reduce(((e,t)=>{if(At[t]){const n=Mt[t];(e[n]=e[n]||[]).push(t)}return e}),{});return Object.entries(t).sort((([e],[t])=>e-t)).map((([,e])=>e))})(n);r.length>0&&(e.props={directives:n,priorityLevels:r,originalProps:t,type:e.type,element:y(e.type,t),top:!0},e.type=Ht)}Ut&&Ut(e)};const Wt=R(),Lt=({slot:e,children:t})=>{const n=ie(Wt);return te((()=>{if(e)return n.value={...n.value,[e]:t},()=>{n.value={...n.value,[e]:null}}}),[n,e,t]),e?null:t},Dt=({children:e})=>vt(Wt.Provider,{value:ke({}),children:e}),Ft=({name:e,children:t})=>ie(Wt).value[e]||t,Rt="wc",Vt=`data-${Rt}-ignore`,qt=`data-${Rt}-interactive`,It=`data-${Rt}-`;let Bt=null;const zt=new RegExp(`^data-${Rt}-([a-z0-9]+(?:-[a-z0-9]+)*)(?:--([a-z0-9_-]+))?$`,"i"),Gt=/^([\w-_\/]+)::(.+)$/,Jt=new WeakSet;function Kt(e){const t=document.createTreeWalker(e,205);return function e(n){const{attributes:r,nodeType:o}=n;if(3===o)return[n.data];if(4===o){const e=t.nextSibling();return n.replaceWith(new window.Text(n.nodeValue)),[n.nodeValue,e]}if(8===o||7===o){const e=t.nextSibling();return n.remove(),[null,e]}const i={},s=[],l=[];let u=!1,c=!1;for(let e=0;e<r.length;e++){const t=r[e].name;if(t[It.length]&&t.slice(0,It.length)===It)if(t===Vt)u=!0;else{var _;let[n,o]=(null===(_=Gt.exec(r[e].value))||void 0===_?void 0:_.slice(1))??[null,r[e].value];try{o=JSON.parse(o)}catch(e){}var a;t===qt?(c=!0,Bt=(null===(a=o)||void 0===a?void 0:a.namespace)??null):l.push([t,n,o])}else if("ref"===t)continue;i[t]=r[e].value}if(u&&!c)return[y(n.localName,{...i,innerHTML:n.innerHTML,__directives:{ignore:!0}})];if(c&&Jt.add(n),l.length&&(i.__directives=l.reduce(((e,[t,n,r])=>{const[,o,i="default"]=zt.exec(t);return e[o]||(e[o]=[]),e[o].push({namespace:n??Bt,value:r,suffix:i}),e}),{})),"template"===n.localName)i.content=[...n.content.childNodes].map((e=>Kt(e)));else{let n=t.firstChild();if(n){for(;n;){const[r,o]=e(n);r&&s.push(r),n=o||t.nextSibling()}t.parentNode()}}return[y(n.localName,i,s)]}(t.currentNode)}const Qt=new Map,Xt=new WeakMap,Yt=e=>(Xt.has(e)||Xt.set(e,((e,t)=>{const n=(t=[].concat(t))[t.length-1].nextSibling;function r(t,r){e.insertBefore(t,r||n)}return e.__k={nodeType:1,parentNode:e,firstChild:t[0],childNodes:t,insertBefore:r,appendChild:r,removeChild(t){e.removeChild(t)}}})(e.parentElement,e)),Xt.get(e)),Zt=e=>{const t=new URL(e,window.location);return t.pathname+t.search},en=e=>{const t={},n=`data-${Rt}-navigation-id`;return e.querySelectorAll(`[${n}]`).forEach((e=>{const r=e.getAttribute(n);t[r]=Kt(e)})),{regions:t}},tn=(e,t={})=>{e=Zt(e),!t.force&&Qt.has(e)||Qt.set(e,(async(e,{html:t})=>{try{if(!t){const n=await window.fetch(e);if(200!==n.status)return!1;t=await n.text()}const n=(new window.DOMParser).parseFromString(t,"text/html");return en(n)}catch(e){return!1}})(e,t))},nn=e=>{const t=`data-${Rt}-navigation-id`;document.querySelectorAll(`[${t}]`).forEach((n=>{const r=n.getAttribute(t),o=Yt(n);D(e.regions[r],o)}))};let rn="";const on=async(e,t={})=>{const n=Zt(e);rn=e,tn(n,t);const r=new Promise((e=>setTimeout(e,t.timeout??1e4))),o=await Promise.race([Qt.get(n),r]);rn===e&&(o?(nn(o),window.history[t.replace?"replaceState":"pushState"]({},"",e)):(window.location.assign(e),await new Promise((()=>{}))))};window.addEventListener("popstate",(async()=>{const e=Zt(window.location),t=Qt.has(e)&&await Qt.get(e);t?nn(t):window.location.reload()}));const sn=e=>e&&"object"==typeof e&&!Array.isArray(e),ln=(e,t,n)=>{for(const r in t)sn(ze(e,r))&&sn(ze(t,r))?ln(e[`$${r}`].peek(),t[`$${r}`].peek(),n):void 0===ze(e,r)?e[`$${r}`]=t[`$${r}`]:n&&(e[r]=ze(t,r))},un=e=>sn(e)?Object.fromEntries(Object.entries(e).map((([e,t])=>[e,un(t)]))):Array.isArray(e)?[...e.map((e=>un(e)))]:e,cn=()=>{Nt("context",(({directives:{context:e},props:{children:t},context:n})=>{const{Provider:r}=n,o=ie(n),i=re(Be({})),s=e.map((({value:e})=>e));return i.current=oe((()=>{const t=e.map((e=>Be({[e.namespace]:un(e.value)}))).reduceRight(ln);return ln(t,o),ln(i.current,t,!0),i.current}),[o,...s]),vt(r,{value:i.current,children:t})}),{priority:5}),Nt("body",(({props:{children:e}})=>function(e,t){const n=y(nt,{_vnode:e,_container:t});return n.containerInfo=t,n}(e,document.body))),Nt("watch",(({directives:{watch:e},evaluate:t})=>{e.forEach((e=>{var n;n=()=>t(e),te((()=>{let e=null,t=!1;return e=function(e,t){let n;const r=Ne((function(){return n=this.c.bind(this),this.x=e,this.c=t,e()}));return{flush:n,dispose:r}}(n,(async()=>{e&&!t&&(t=!0,await(e=>new Promise((t=>{const n=()=>{clearTimeout(r),window.cancelAnimationFrame(o),setTimeout((()=>{e(),t()}))},r=setTimeout(n,100),o=window.requestAnimationFrame(n)})))(e.flush),t=!1)})),e.dispose}),[])}))})),Nt("layout-init",(({directives:{"layout-init":e},evaluate:t})=>{e.forEach((e=>{ne((()=>t(e)),[])}))})),Nt("init",(({directives:{init:e},evaluate:t})=>{e.forEach((e=>{te((()=>t(e)),[])}))})),Nt("on",(({directives:{on:e},element:t,evaluate:n})=>{const r=new Map;e.forEach((e=>{const t=e.suffix.split("--")[0];r.has(t)||r.set(t,new Set),r.get(t).add(e)})),r.forEach(((e,r)=>{t.props[`on${r}`]=t=>{e.forEach((e=>{n(e,t)}))}}))})),Nt("class",(({directives:{class:e},element:t,evaluate:n})=>{e.filter((({suffix:e})=>"default"!==e)).forEach((e=>{const r=e.suffix,o=n(e,{className:r}),i=t.props.class||"",s=new RegExp(`(^|\\s)${r}(\\s|$)`,"g");o?s.test(i)||(t.props.class=i?`${i} ${r}`:r):t.props.class=i.replace(s," ").trim(),te((()=>{o?t.ref.current.classList.add(r):t.ref.current.classList.remove(r)}),[])}))}));const e=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,t=/\/\*[^]*?\*\/|  +/g,n=/\n+/g;Nt("style",(({directives:{style:r},element:o,evaluate:i})=>{r.filter((({suffix:e})=>"default"!==e)).forEach((r=>{const s=r.suffix,l=i(r,{key:s});o.props.style=o.props.style||{},"string"==typeof o.props.style&&(o.props.style=(r=>{const o=[{}];let i,s;for(;i=e.exec(r.replace(t,""));)i[4]?o.shift():i[3]?(s=i[3].replace(n," ").trim(),o.unshift(o[0][s]=o[0][s]||{})):o[0][i[1]]=i[2].replace(n," ").trim();return o[0]})(o.props.style)),l?o.props.style[s]=l:delete o.props.style[s],te((()=>{l?o.ref.current.style[s]=l:o.ref.current.style.removeProperty(s)}),[])}))})),Nt("bind",(({directives:{bind:e},element:t,evaluate:n})=>{e.filter((({suffix:e})=>"default"!==e)).forEach((e=>{const r=e.suffix,o=n(e);t.props[r]=o,ne((()=>{"role"===r&&null==o&&t.ref.current.removeAttribute(r)}),[r,o]),te((()=>{const e=t.ref.current;if("width"!==r&&"height"!==r&&"href"!==r&&"list"!==r&&"form"!==r&&"tabIndex"!==r&&"download"!==r&&"rowSpan"!==r&&"colSpan"!==r&&"role"!==r&&r in e)try{return void(e[r]=null==o?"":o)}catch(e){}null==o||!1===o&&"-"!==r[4]?e.removeAttribute(r):e.setAttribute(r,o)}),[])}))})),Nt("navigation-link",(({directives:{"navigation-link":e},props:{href:t},element:n})=>{const{value:r}=e.find((({suffix:e})=>"default"===e));!1!==r&&(n.props.onclick=async e=>{e.preventDefault(),await on(t),"smooth"===(null==r?void 0:r.scroll)?window.scrollTo({top:0,left:0,behavior:"smooth"}):!1!==(null==r?void 0:r.scroll)&&window.scrollTo(0,0)})})),Nt("ignore",(({element:{type:e,props:{innerHTML:t,...n}}})=>vt(e,{dangerouslySetInnerHTML:{__html:oe((()=>t),[])},...n}))),Nt("text",(({directives:{text:e},element:t,evaluate:n})=>{const r=e.find((({suffix:e})=>"default"===e));t.props.children=n(r)})),Nt("slot",(({directives:{slot:e},props:{children:t},element:n})=>{const{value:r}=e.find((({suffix:e})=>"default"===e)),o="string"==typeof r?r:r.name,i=r.position||"children";return"before"===i?vt(g,{children:[vt(Ft,{name:o}),t]}):"after"===i?vt(g,{children:[t,vt(Ft,{name:o})]}):"replace"===i?vt(Ft,{name:o,children:t}):void("children"===i&&(n.props.children=vt(Ft,{name:o,children:n.props.children})))}),{priority:4}),Nt("fill",(({directives:{fill:e},props:{children:t},evaluate:n})=>{const r=n(e.find((({suffix:e})=>"default"===e)));return vt(Lt,{slot:r,children:t})}),{priority:4}),Nt("slot-provider",(({props:{children:e}})=>vt(Dt,{children:e})),{priority:4}),Nt("each",(({directives:{each:e,"each-key":[t]},context:n,element:r,evaluate:o})=>{const{Provider:i}=n,s=ie(n),[l]=e,{namespace:u,suffix:c}=l;return o(l).map((e=>{const n=Be({}),o=Be({[u]:{["default"===c?"item":c]:e}});ln(o,s),ln(n,o,!0);const l={...Et(),context:n},_=jt({scope:l})(t);return vt(i,{value:n,children:r.props.content},_)}))}),{priority:20}),Nt("each-child",(()=>null))};document.addEventListener("DOMContentLoaded",(async()=>{cn(),await(async()=>{document.querySelectorAll(`[data-${Rt}-interactive]`).forEach((e=>{if(!Jt.has(e)){const t=Yt(e);F(Kt(e),t)}})),Qt.set(Zt(window.location),Promise.resolve(en(document)))})()})),(this.wc=this.wc||{}).__experimentalInteractivity=t})()
;