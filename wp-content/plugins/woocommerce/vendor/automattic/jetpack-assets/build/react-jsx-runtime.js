/*! For license information please see react-jsx-runtime.js.LICENSE.txt */
(()=>{"use strict";var r={574:(r,e,t)=>{var o=t(196),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,f=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function _(r,e,t){var o,s={},_=null,i=null;for(o in void 0!==t&&(_=""+t),void 0!==e.key&&(_=""+e.key),void 0!==e.ref&&(i=e.ref),e)a.call(e,o)&&!p.hasOwnProperty(o)&&(s[o]=e[o]);if(r&&r.defaultProps)for(o in e=r.defaultProps)void 0===s[o]&&(s[o]=e[o]);return{$$typeof:n,type:r,key:_,ref:i,props:s,_owner:f.current}}e.Fragment=s,e.jsx=_,e.jsxs=_},93:(r,e,t)=>{r.exports=t(574)},196:r=>{r.exports=window.React}},e={},t=function t(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return r[o](s,s.exports,t),s.exports}(93);window.ReactJSXRuntime=t})();