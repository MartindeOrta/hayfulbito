(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wr(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const z={},wt=[],Oe=()=>{},Ca=()=>!1,Wn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zr=t=>t.startsWith("onUpdate:"),ie=Object.assign,Kr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Aa=Object.prototype.hasOwnProperty,H=(t,e)=>Aa.call(t,e),k=Array.isArray,Et=t=>zn(t)==="[object Map]",Di=t=>zn(t)==="[object Set]",D=t=>typeof t=="function",Y=t=>typeof t=="string",it=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",xi=t=>(J(t)||D(t))&&D(t.then)&&D(t.catch),Ni=Object.prototype.toString,zn=t=>Ni.call(t),Pa=t=>zn(t).slice(8,-1),Mi=t=>zn(t)==="[object Object]",Gr=t=>Y(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Wt=Wr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ra=/-(\w)/g,st=Kn(t=>t.replace(Ra,(e,n)=>n?n.toUpperCase():"")),Oa=/\B([A-Z])/g,bt=Kn(t=>t.replace(Oa,"-$1").toLowerCase()),Li=Kn(t=>t.charAt(0).toUpperCase()+t.slice(1)),sr=Kn(t=>t?`on${Li(t)}`:""),tt=(t,e)=>!Object.is(t,e),ir=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Er=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},ka=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ks;const Gn=()=>ks||(ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Y(r)?Ma(r):qr(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Y(t)||J(t))return t}const Da=/;(?![^(]*\))/g,xa=/:([^]+)/,Na=/\/\*[^]*?\*\//g;function Ma(t){const e={};return t.replace(Na,"").split(Da).forEach(n=>{if(n){const r=n.split(xa);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Jr(t){let e="";if(Y(t))e=t;else if(k(t))for(let n=0;n<t.length;n++){const r=Jr(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const La="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ua=Wr(La);function Ui(t){return!!t||t===""}const Fi=t=>!!(t&&t.__v_isRef===!0),Tr=t=>Y(t)?t:t==null?"":k(t)||J(t)&&(t.toString===Ni||!D(t.toString))?Fi(t)?Tr(t.value):JSON.stringify(t,Hi,2):String(t),Hi=(t,e)=>Fi(e)?Hi(t,e.value):Et(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[or(r,i)+" =>"]=s,n),{})}:Di(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>or(n))}:it(e)?or(e):J(e)&&!k(e)&&!Mi(e)?String(e):e,or=(t,e="")=>{var n;return it(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let le;class Fa{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=le,!e&&le&&(this.index=(le.scopes||(le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=le;try{return le=this,e()}finally{le=n}}}on(){++this._on===1&&(this.prevScope=le,le=this)}off(){this._on>0&&--this._on===0&&(le=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Ha(){return le}let W;const ar=new WeakSet;class Bi{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,le&&le.active&&le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ar.has(this)&&(ar.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ds(this),ji(this);const e=W,n=_e;W=this,_e=!0;try{return this.fn()}finally{Wi(this),W=e,_e=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Zr(e);this.deps=this.depsTail=void 0,Ds(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ar.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sr(this)&&this.run()}get dirty(){return Sr(this)}}let $i=0,zt,Kt;function Vi(t,e=!1){if(t.flags|=8,e){t.next=Kt,Kt=t;return}t.next=zt,zt=t}function Yr(){$i++}function Xr(){if(--$i>0)return;if(Kt){let e=Kt;for(Kt=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zt;){let e=zt;for(zt=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ji(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Wi(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Zr(r),Ba(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Sr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zi(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===en)||(t.globalVersion=en,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Sr(t))))return;t.flags|=2;const e=t.dep,n=W,r=_e;W=t,_e=!0;try{ji(t);const s=t.fn(t._value);(e.version===0||tt(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{W=n,_e=r,Wi(t),t.flags&=-3}}function Zr(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Zr(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ba(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let _e=!0;const Ki=[];function Ve(){Ki.push(_e),_e=!1}function je(){const t=Ki.pop();_e=t===void 0?!0:t}function Ds(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=W;W=void 0;try{e()}finally{W=n}}}let en=0;class $a{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Qr{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!W||!_e||W===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==W)n=this.activeLink=new $a(W,this),W.deps?(n.prevDep=W.depsTail,W.depsTail.nextDep=n,W.depsTail=n):W.deps=W.depsTail=n,Gi(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=W.depsTail,n.nextDep=void 0,W.depsTail.nextDep=n,W.depsTail=n,W.deps===n&&(W.deps=r)}return n}trigger(e){this.version++,en++,this.notify(e)}notify(e){Yr();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Xr()}}}function Gi(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Gi(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Cr=new WeakMap,gt=Symbol(""),Ar=Symbol(""),tn=Symbol("");function Z(t,e,n){if(_e&&W){let r=Cr.get(t);r||Cr.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Qr),s.map=r,s.key=n),s.track()}}function Ue(t,e,n,r,s,i){const o=Cr.get(t);if(!o){en++;return}const a=c=>{c&&c.trigger()};if(Yr(),e==="clear")o.forEach(a);else{const c=k(t),d=c&&Gr(n);if(c&&n==="length"){const f=Number(r);o.forEach((h,g)=>{(g==="length"||g===tn||!it(g)&&g>=f)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),d&&a(o.get(tn)),e){case"add":c?d&&a(o.get("length")):(a(o.get(gt)),Et(t)&&a(o.get(Ar)));break;case"delete":c||(a(o.get(gt)),Et(t)&&a(o.get(Ar)));break;case"set":Et(t)&&a(o.get(gt));break}}Xr()}function yt(t){const e=F(t);return e===t?e:(Z(e,"iterate",tn),ve(t)?e:e.map(ne))}function es(t){return Z(t=F(t),"iterate",tn),t}const Va={__proto__:null,[Symbol.iterator](){return cr(this,Symbol.iterator,ne)},concat(...t){return yt(this).concat(...t.map(e=>k(e)?yt(e):e))},entries(){return cr(this,"entries",t=>(t[1]=ne(t[1]),t))},every(t,e){return Me(this,"every",t,e,void 0,arguments)},filter(t,e){return Me(this,"filter",t,e,n=>n.map(ne),arguments)},find(t,e){return Me(this,"find",t,e,ne,arguments)},findIndex(t,e){return Me(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Me(this,"findLast",t,e,ne,arguments)},findLastIndex(t,e){return Me(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Me(this,"forEach",t,e,void 0,arguments)},includes(...t){return lr(this,"includes",t)},indexOf(...t){return lr(this,"indexOf",t)},join(t){return yt(this).join(t)},lastIndexOf(...t){return lr(this,"lastIndexOf",t)},map(t,e){return Me(this,"map",t,e,void 0,arguments)},pop(){return $t(this,"pop")},push(...t){return $t(this,"push",t)},reduce(t,...e){return xs(this,"reduce",t,e)},reduceRight(t,...e){return xs(this,"reduceRight",t,e)},shift(){return $t(this,"shift")},some(t,e){return Me(this,"some",t,e,void 0,arguments)},splice(...t){return $t(this,"splice",t)},toReversed(){return yt(this).toReversed()},toSorted(t){return yt(this).toSorted(t)},toSpliced(...t){return yt(this).toSpliced(...t)},unshift(...t){return $t(this,"unshift",t)},values(){return cr(this,"values",ne)}};function cr(t,e,n){const r=es(t),s=r[e]();return r!==t&&!ve(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ja=Array.prototype;function Me(t,e,n,r,s,i){const o=es(t),a=o!==t&&!ve(t),c=o[e];if(c!==ja[e]){const h=c.apply(t,i);return a?ne(h):h}let d=n;o!==t&&(a?d=function(h,g){return n.call(this,ne(h),g,t)}:n.length>2&&(d=function(h,g){return n.call(this,h,g,t)}));const f=c.call(o,d,r);return a&&s?s(f):f}function xs(t,e,n,r){const s=es(t);let i=n;return s!==t&&(ve(t)?n.length>3&&(i=function(o,a,c){return n.call(this,o,a,c,t)}):i=function(o,a,c){return n.call(this,o,ne(a),c,t)}),s[e](i,...r)}function lr(t,e,n){const r=F(t);Z(r,"iterate",tn);const s=r[e](...n);return(s===-1||s===!1)&&ss(n[0])?(n[0]=F(n[0]),r[e](...n)):s}function $t(t,e,n=[]){Ve(),Yr();const r=F(t)[e].apply(t,n);return Xr(),je(),r}const Wa=Wr("__proto__,__v_isRef,__isVue"),qi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(it));function za(t){it(t)||(t=String(t));const e=F(this);return Z(e,"has",t),e.hasOwnProperty(t)}class Ji{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?tc:Qi:i?Zi:Xi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=k(e);if(!s){let c;if(o&&(c=Va[n]))return c;if(n==="hasOwnProperty")return za}const a=Reflect.get(e,n,Q(e)?e:r);return(it(n)?qi.has(n):Wa(n))||(s||Z(e,"get",n),i)?a:Q(a)?o&&Gr(n)?a:a.value:J(a)?s?eo(a):ns(a):a}}class Yi extends Ji{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=_t(i);if(!ve(r)&&!_t(r)&&(i=F(i),r=F(r)),!k(e)&&Q(i)&&!Q(r))return c?!1:(i.value=r,!0)}const o=k(e)&&Gr(n)?Number(n)<e.length:H(e,n),a=Reflect.set(e,n,r,Q(e)?e:s);return e===F(s)&&(o?tt(r,i)&&Ue(e,"set",n,r):Ue(e,"add",n,r)),a}deleteProperty(e,n){const r=H(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Ue(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!it(n)||!qi.has(n))&&Z(e,"has",n),r}ownKeys(e){return Z(e,"iterate",k(e)?"length":gt),Reflect.ownKeys(e)}}class Ka extends Ji{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ga=new Yi,qa=new Ka,Ja=new Yi(!0);const Pr=t=>t,In=t=>Reflect.getPrototypeOf(t);function Ya(t,e,n){return function(...r){const s=this.__v_raw,i=F(s),o=Et(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,d=s[t](...r),f=n?Pr:e?Rr:ne;return!e&&Z(i,"iterate",c?Ar:gt),{next(){const{value:h,done:g}=d.next();return g?{value:h,done:g}:{value:a?[f(h[0]),f(h[1])]:f(h),done:g}},[Symbol.iterator](){return this}}}}function wn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xa(t,e){const n={get(s){const i=this.__v_raw,o=F(i),a=F(s);t||(tt(s,a)&&Z(o,"get",s),Z(o,"get",a));const{has:c}=In(o),d=e?Pr:t?Rr:ne;if(c.call(o,s))return d(i.get(s));if(c.call(o,a))return d(i.get(a));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Z(F(s),"iterate",gt),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,o=F(i),a=F(s);return t||(tt(s,a)&&Z(o,"has",s),Z(o,"has",a)),s===a?i.has(s):i.has(s)||i.has(a)},forEach(s,i){const o=this,a=o.__v_raw,c=F(a),d=e?Pr:t?Rr:ne;return!t&&Z(c,"iterate",gt),a.forEach((f,h)=>s.call(i,d(f),d(h),o))}};return ie(n,t?{add:wn("add"),set:wn("set"),delete:wn("delete"),clear:wn("clear")}:{add(s){!e&&!ve(s)&&!_t(s)&&(s=F(s));const i=F(this);return In(i).has.call(i,s)||(i.add(s),Ue(i,"add",s,s)),this},set(s,i){!e&&!ve(i)&&!_t(i)&&(i=F(i));const o=F(this),{has:a,get:c}=In(o);let d=a.call(o,s);d||(s=F(s),d=a.call(o,s));const f=c.call(o,s);return o.set(s,i),d?tt(i,f)&&Ue(o,"set",s,i):Ue(o,"add",s,i),this},delete(s){const i=F(this),{has:o,get:a}=In(i);let c=o.call(i,s);c||(s=F(s),c=o.call(i,s)),a&&a.call(i,s);const d=i.delete(s);return c&&Ue(i,"delete",s,void 0),d},clear(){const s=F(this),i=s.size!==0,o=s.clear();return i&&Ue(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Ya(s,t,e)}),n}function ts(t,e){const n=Xa(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(H(n,s)&&s in r?n:r,s,i)}const Za={get:ts(!1,!1)},Qa={get:ts(!1,!0)},ec={get:ts(!0,!1)};const Xi=new WeakMap,Zi=new WeakMap,Qi=new WeakMap,tc=new WeakMap;function nc(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rc(t){return t.__v_skip||!Object.isExtensible(t)?0:nc(Pa(t))}function ns(t){return _t(t)?t:rs(t,!1,Ga,Za,Xi)}function sc(t){return rs(t,!1,Ja,Qa,Zi)}function eo(t){return rs(t,!0,qa,ec,Qi)}function rs(t,e,n,r,s){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=rc(t);if(i===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,i===2?r:n);return s.set(t,a),a}function Gt(t){return _t(t)?Gt(t.__v_raw):!!(t&&t.__v_isReactive)}function _t(t){return!!(t&&t.__v_isReadonly)}function ve(t){return!!(t&&t.__v_isShallow)}function ss(t){return t?!!t.__v_raw:!1}function F(t){const e=t&&t.__v_raw;return e?F(e):t}function ic(t){return!H(t,"__v_skip")&&Object.isExtensible(t)&&Er(t,"__v_skip",!0),t}const ne=t=>J(t)?ns(t):t,Rr=t=>J(t)?eo(t):t;function Q(t){return t?t.__v_isRef===!0:!1}function oc(t){return ac(t,!1)}function ac(t,e){return Q(t)?t:new cc(t,e)}class cc{constructor(e,n){this.dep=new Qr,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:F(e),this._value=n?e:ne(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||ve(e)||_t(e);e=r?e:F(e),tt(e,n)&&(this._rawValue=e,this._value=r?e:ne(e),this.dep.trigger())}}function lc(t){return Q(t)?t.value:t}const uc={get:(t,e,n)=>e==="__v_raw"?t:lc(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Q(s)&&!Q(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function to(t){return Gt(t)?t:new Proxy(t,uc)}class fc{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Qr(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=en-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&W!==this)return Vi(this,!0),!0}get value(){const e=this.dep.track();return zi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function dc(t,e,n=!1){let r,s;return D(t)?r=t:(r=t.get,s=t.set),new fc(r,s,n)}const En={},Dn=new WeakMap;let ft;function hc(t,e=!1,n=ft){if(n){let r=Dn.get(n);r||Dn.set(n,r=[]),r.push(t)}}function pc(t,e,n=z){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:a,call:c}=n,d=A=>s?A:ve(A)||s===!1||s===0?Xe(A,1):Xe(A);let f,h,g,w,O=!1,x=!1;if(Q(t)?(h=()=>t.value,O=ve(t)):Gt(t)?(h=()=>d(t),O=!0):k(t)?(x=!0,O=t.some(A=>Gt(A)||ve(A)),h=()=>t.map(A=>{if(Q(A))return A.value;if(Gt(A))return d(A);if(D(A))return c?c(A,2):A()})):D(t)?e?h=c?()=>c(t,2):t:h=()=>{if(g){Ve();try{g()}finally{je()}}const A=ft;ft=f;try{return c?c(t,3,[w]):t(w)}finally{ft=A}}:h=Oe,e&&s){const A=h,q=s===!0?1/0:s;h=()=>Xe(A(),q)}const K=Ha(),M=()=>{f.stop(),K&&K.active&&Kr(K.effects,f)};if(i&&e){const A=e;e=(...q)=>{A(...q),M()}}let L=x?new Array(t.length).fill(En):En;const U=A=>{if(!(!(f.flags&1)||!f.dirty&&!A))if(e){const q=f.run();if(s||O||(x?q.some((pe,ue)=>tt(pe,L[ue])):tt(q,L))){g&&g();const pe=ft;ft=f;try{const ue=[q,L===En?void 0:x&&L[0]===En?[]:L,w];L=q,c?c(e,3,ue):e(...ue)}finally{ft=pe}}}else f.run()};return a&&a(U),f=new Bi(h),f.scheduler=o?()=>o(U,!1):U,w=A=>hc(A,!1,f),g=f.onStop=()=>{const A=Dn.get(f);if(A){if(c)c(A,4);else for(const q of A)q();Dn.delete(f)}},e?r?U(!0):L=f.run():o?o(U.bind(null,!0),!0):f.run(),M.pause=f.pause.bind(f),M.resume=f.resume.bind(f),M.stop=M,M}function Xe(t,e=1/0,n){if(e<=0||!J(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Q(t))Xe(t.value,e,n);else if(k(t))for(let r=0;r<t.length;r++)Xe(t[r],e,n);else if(Di(t)||Et(t))t.forEach(r=>{Xe(r,e,n)});else if(Mi(t)){for(const r in t)Xe(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Xe(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ln(t,e,n,r){try{return r?t(...r):t()}catch(s){qn(s,e,n)}}function De(t,e,n,r){if(D(t)){const s=ln(t,e,n,r);return s&&xi(s)&&s.catch(i=>{qn(i,e,n)}),s}if(k(t)){const s=[];for(let i=0;i<t.length;i++)s.push(De(t[i],e,n,r));return s}}function qn(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||z;if(e){let a=e.parent;const c=e.proxy,d=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](t,c,d)===!1)return}a=a.parent}if(i){Ve(),ln(i,null,10,[t,c,d]),je();return}}gc(t,n,s,r,o)}function gc(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const re=[];let Ce=-1;const Tt=[];let Je=null,It=0;const no=Promise.resolve();let xn=null;function mc(t){const e=xn||no;return t?e.then(this?t.bind(this):t):e}function _c(t){let e=Ce+1,n=re.length;for(;e<n;){const r=e+n>>>1,s=re[r],i=nn(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function is(t){if(!(t.flags&1)){const e=nn(t),n=re[re.length-1];!n||!(t.flags&2)&&e>=nn(n)?re.push(t):re.splice(_c(e),0,t),t.flags|=1,ro()}}function ro(){xn||(xn=no.then(io))}function vc(t){k(t)?Tt.push(...t):Je&&t.id===-1?Je.splice(It+1,0,t):t.flags&1||(Tt.push(t),t.flags|=1),ro()}function Ns(t,e,n=Ce+1){for(;n<re.length;n++){const r=re[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;re.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function so(t){if(Tt.length){const e=[...new Set(Tt)].sort((n,r)=>nn(n)-nn(r));if(Tt.length=0,Je){Je.push(...e);return}for(Je=e,It=0;It<Je.length;It++){const n=Je[It];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Je=null,It=0}}const nn=t=>t.id==null?t.flags&2?-1:1/0:t.id;function io(t){try{for(Ce=0;Ce<re.length;Ce++){const e=re[Ce];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ln(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ce<re.length;Ce++){const e=re[Ce];e&&(e.flags&=-2)}Ce=-1,re.length=0,so(),xn=null,(re.length||Tt.length)&&io()}}let Re=null,oo=null;function Nn(t){const e=Re;return Re=t,oo=t&&t.type.__scopeId||null,e}function bc(t,e=Re,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&js(-1);const i=Nn(e);let o;try{o=t(...s)}finally{Nn(i),r._d&&js(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ve(),De(c,n,8,[t.el,a,t,e]),je())}}const yc=Symbol("_vte"),Ic=t=>t.__isTeleport;function os(t,e){t.shapeFlag&6&&t.component?(t.transition=e,os(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ao(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function qt(t,e,n,r,s=!1){if(k(t)){t.forEach((O,x)=>qt(O,e&&(k(e)?e[x]:e),n,r,s));return}if(Jt(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&qt(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ds(r.component):r.el,o=s?null:i,{i:a,r:c}=t,d=e&&e.r,f=a.refs===z?a.refs={}:a.refs,h=a.setupState,g=F(h),w=h===z?()=>!1:O=>H(g,O);if(d!=null&&d!==c&&(Y(d)?(f[d]=null,w(d)&&(h[d]=null)):Q(d)&&(d.value=null)),D(c))ln(c,a,12,[o,f]);else{const O=Y(c),x=Q(c);if(O||x){const K=()=>{if(t.f){const M=O?w(c)?h[c]:f[c]:c.value;s?k(M)&&Kr(M,i):k(M)?M.includes(i)||M.push(i):O?(f[c]=[i],w(c)&&(h[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else O?(f[c]=o,w(c)&&(h[c]=o)):x&&(c.value=o,t.k&&(f[t.k]=o))};o?(K.id=-1,de(K,n)):K()}}}Gn().requestIdleCallback;Gn().cancelIdleCallback;const Jt=t=>!!t.type.__asyncLoader,co=t=>t.type.__isKeepAlive;function wc(t,e){lo(t,"a",e)}function Ec(t,e){lo(t,"da",e)}function lo(t,e,n=se){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Jn(e,r,n),n){let s=n.parent;for(;s&&s.parent;)co(s.parent.vnode)&&Tc(r,e,n,s),s=s.parent}}function Tc(t,e,n,r){const s=Jn(e,t,r,!0);uo(()=>{Kr(r[e],s)},n)}function Jn(t,e,n=se,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Ve();const a=un(n),c=De(e,n,t,o);return a(),je(),c});return r?s.unshift(i):s.push(i),i}}const Ke=t=>(e,n=se)=>{(!sn||t==="sp")&&Jn(t,(...r)=>e(...r),n)},Sc=Ke("bm"),Cc=Ke("m"),Ac=Ke("bu"),Pc=Ke("u"),Rc=Ke("bum"),uo=Ke("um"),Oc=Ke("sp"),kc=Ke("rtg"),Dc=Ke("rtc");function xc(t,e=se){Jn("ec",t,e)}const Nc=Symbol.for("v-ndc"),Or=t=>t?ko(t)?ds(t):Or(t.parent):null,Yt=ie(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Or(t.parent),$root:t=>Or(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ho(t),$forceUpdate:t=>t.f||(t.f=()=>{is(t.update)}),$nextTick:t=>t.n||(t.n=mc.bind(t.proxy)),$watch:t=>nl.bind(t)}),ur=(t,e)=>t!==z&&!t.__isScriptSetup&&H(t,e),Mc={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let d;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ur(r,e))return o[e]=1,r[e];if(s!==z&&H(s,e))return o[e]=2,s[e];if((d=t.propsOptions[0])&&H(d,e))return o[e]=3,i[e];if(n!==z&&H(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const f=Yt[e];let h,g;if(f)return e==="$attrs"&&Z(t.attrs,"get",""),f(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==z&&H(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,H(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ur(s,e)?(s[e]=n,!0):r!==z&&H(r,e)?(r[e]=n,!0):H(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==z&&H(t,o)||ur(e,o)||(a=i[0])&&H(a,o)||H(r,o)||H(Yt,o)||H(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:H(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ms(t){return k(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kr=!0;function Lc(t){const e=ho(t),n=t.proxy,r=t.ctx;kr=!1,e.beforeCreate&&Ls(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:d,created:f,beforeMount:h,mounted:g,beforeUpdate:w,updated:O,activated:x,deactivated:K,beforeDestroy:M,beforeUnmount:L,destroyed:U,unmounted:A,render:q,renderTracked:pe,renderTriggered:ue,errorCaptured:ye,serverPrefetch:Ge,expose:Ne,inheritAttrs:Ut,components:_n,directives:vn,filters:nr}=e;if(d&&Uc(d,r,null),o)for(const G in o){const V=o[G];D(V)&&(r[G]=V.bind(n))}if(s){const G=s.call(n,n);J(G)&&(t.data=ns(G))}if(kr=!0,i)for(const G in i){const V=i[G],at=D(V)?V.bind(n,n):D(V.get)?V.get.bind(n,n):Oe,bn=!D(V)&&D(V.set)?V.set.bind(n):Oe,ct=El({get:at,set:bn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>ct.value,set:Ie=>ct.value=Ie})}if(a)for(const G in a)fo(a[G],r,n,G);if(c){const G=D(c)?c.call(n):c;Reflect.ownKeys(G).forEach(V=>{jc(V,G[V])})}f&&Ls(f,t,"c");function ee(G,V){k(V)?V.forEach(at=>G(at.bind(n))):V&&G(V.bind(n))}if(ee(Sc,h),ee(Cc,g),ee(Ac,w),ee(Pc,O),ee(wc,x),ee(Ec,K),ee(xc,ye),ee(Dc,pe),ee(kc,ue),ee(Rc,L),ee(uo,A),ee(Oc,Ge),k(Ne))if(Ne.length){const G=t.exposed||(t.exposed={});Ne.forEach(V=>{Object.defineProperty(G,V,{get:()=>n[V],set:at=>n[V]=at})})}else t.exposed||(t.exposed={});q&&t.render===Oe&&(t.render=q),Ut!=null&&(t.inheritAttrs=Ut),_n&&(t.components=_n),vn&&(t.directives=vn),Ge&&ao(t)}function Uc(t,e,n=Oe){k(t)&&(t=Dr(t));for(const r in t){const s=t[r];let i;J(s)?"default"in s?i=Sn(s.from||r,s.default,!0):i=Sn(s.from||r):i=Sn(s),Q(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ls(t,e,n){De(k(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function fo(t,e,n,r){let s=r.includes(".")?Co(n,r):()=>n[r];if(Y(t)){const i=e[t];D(i)&&dr(s,i)}else if(D(t))dr(s,t.bind(n));else if(J(t))if(k(t))t.forEach(i=>fo(i,e,n,r));else{const i=D(t.handler)?t.handler.bind(n):e[t.handler];D(i)&&dr(s,i,t)}}function ho(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(d=>Mn(c,d,o,!0)),Mn(c,e,o)),J(e)&&i.set(e,c),c}function Mn(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Mn(t,i,n,!0),s&&s.forEach(o=>Mn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=Fc[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Fc={data:Us,props:Fs,emits:Fs,methods:jt,computed:jt,beforeCreate:te,created:te,beforeMount:te,mounted:te,beforeUpdate:te,updated:te,beforeDestroy:te,beforeUnmount:te,destroyed:te,unmounted:te,activated:te,deactivated:te,errorCaptured:te,serverPrefetch:te,components:jt,directives:jt,watch:Bc,provide:Us,inject:Hc};function Us(t,e){return e?t?function(){return ie(D(t)?t.call(this,this):t,D(e)?e.call(this,this):e)}:e:t}function Hc(t,e){return jt(Dr(t),Dr(e))}function Dr(t){if(k(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function te(t,e){return t?[...new Set([].concat(t,e))]:e}function jt(t,e){return t?ie(Object.create(null),t,e):e}function Fs(t,e){return t?k(t)&&k(e)?[...new Set([...t,...e])]:ie(Object.create(null),Ms(t),Ms(e??{})):e}function Bc(t,e){if(!t)return e;if(!e)return t;const n=ie(Object.create(null),t);for(const r in e)n[r]=te(t[r],e[r]);return n}function po(){return{app:null,config:{isNativeTag:Ca,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $c=0;function Vc(t,e){return function(r,s=null){D(r)||(r=ie({},r)),s!=null&&!J(s)&&(s=null);const i=po(),o=new WeakSet,a=[];let c=!1;const d=i.app={_uid:$c++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Tl,get config(){return i.config},set config(f){},use(f,...h){return o.has(f)||(f&&D(f.install)?(o.add(f),f.install(d,...h)):D(f)&&(o.add(f),f(d,...h))),d},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),d},component(f,h){return h?(i.components[f]=h,d):i.components[f]},directive(f,h){return h?(i.directives[f]=h,d):i.directives[f]},mount(f,h,g){if(!c){const w=d._ceVNode||$e(r,s);return w.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(w,f,g),c=!0,d._container=f,f.__vue_app__=d,ds(w.component)}},onUnmount(f){a.push(f)},unmount(){c&&(De(a,d._instance,16),t(null,d._container),delete d._container.__vue_app__)},provide(f,h){return i.provides[f]=h,d},runWithContext(f){const h=St;St=d;try{return f()}finally{St=h}}};return d}}let St=null;function jc(t,e){if(se){let n=se.provides;const r=se.parent&&se.parent.provides;r===n&&(n=se.provides=Object.create(r)),n[t]=e}}function Sn(t,e,n=!1){const r=se||Re;if(r||St){let s=St?St._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&D(e)?e.call(r&&r.proxy):e}}const go={},mo=()=>Object.create(go),_o=t=>Object.getPrototypeOf(t)===go;function Wc(t,e,n,r=!1){const s={},i=mo();t.propsDefaults=Object.create(null),vo(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:sc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function zc(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=F(s),[c]=t.propsOptions;let d=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let h=0;h<f.length;h++){let g=f[h];if(Yn(t.emitsOptions,g))continue;const w=e[g];if(c)if(H(i,g))w!==i[g]&&(i[g]=w,d=!0);else{const O=st(g);s[O]=xr(c,a,O,w,t,!1)}else w!==i[g]&&(i[g]=w,d=!0)}}}else{vo(t,e,s,i)&&(d=!0);let f;for(const h in a)(!e||!H(e,h)&&((f=bt(h))===h||!H(e,f)))&&(c?n&&(n[h]!==void 0||n[f]!==void 0)&&(s[h]=xr(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!H(e,h))&&(delete i[h],d=!0)}d&&Ue(t.attrs,"set","")}function vo(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Wt(c))continue;const d=e[c];let f;s&&H(s,f=st(c))?!i||!i.includes(f)?n[f]=d:(a||(a={}))[f]=d:Yn(t.emitsOptions,c)||(!(c in r)||d!==r[c])&&(r[c]=d,o=!0)}if(i){const c=F(n),d=a||z;for(let f=0;f<i.length;f++){const h=i[f];n[h]=xr(s,c,h,d[h],t,!H(d,h))}}return o}function xr(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=H(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&D(c)){const{propsDefaults:d}=s;if(n in d)r=d[n];else{const f=un(s);r=d[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bt(n))&&(r=!0))}return r}const Kc=new WeakMap;function bo(t,e,n=!1){const r=n?Kc:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!D(t)){const f=h=>{c=!0;const[g,w]=bo(h,e,!0);ie(o,g),w&&a.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return J(t)&&r.set(t,wt),wt;if(k(i))for(let f=0;f<i.length;f++){const h=st(i[f]);Hs(h)&&(o[h]=z)}else if(i)for(const f in i){const h=st(f);if(Hs(h)){const g=i[f],w=o[h]=k(g)||D(g)?{type:g}:ie({},g),O=w.type;let x=!1,K=!0;if(k(O))for(let M=0;M<O.length;++M){const L=O[M],U=D(L)&&L.name;if(U==="Boolean"){x=!0;break}else U==="String"&&(K=!1)}else x=D(O)&&O.name==="Boolean";w[0]=x,w[1]=K,(x||H(w,"default"))&&a.push(h)}}const d=[o,a];return J(t)&&r.set(t,d),d}function Hs(t){return t[0]!=="$"&&!Wt(t)}const as=t=>t[0]==="_"||t==="$stable",cs=t=>k(t)?t.map(Ae):[Ae(t)],Gc=(t,e,n)=>{if(e._n)return e;const r=bc((...s)=>cs(e(...s)),n);return r._c=!1,r},yo=(t,e,n)=>{const r=t._ctx;for(const s in t){if(as(s))continue;const i=t[s];if(D(i))e[s]=Gc(s,i,r);else if(i!=null){const o=cs(i);e[s]=()=>o}}},Io=(t,e)=>{const n=cs(e);t.slots.default=()=>n},wo=(t,e,n)=>{for(const r in e)(n||!as(r))&&(t[r]=e[r])},qc=(t,e,n)=>{const r=t.slots=mo();if(t.vnode.shapeFlag&32){const s=e.__;s&&Er(r,"__",s,!0);const i=e._;i?(wo(r,e,n),n&&Er(r,"_",i,!0)):yo(e,r)}else e&&Io(t,e)},Jc=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=z;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:wo(s,e,n):(i=!e.$stable,yo(e,s)),o=e}else e&&(Io(t,e),o={default:1});if(i)for(const a in s)!as(a)&&o[a]==null&&delete s[a]},de=ll;function Yc(t){return Xc(t)}function Xc(t,e){const n=Gn();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:d,setElementText:f,parentNode:h,nextSibling:g,setScopeId:w=Oe,insertStaticContent:O}=t,x=(l,u,p,v=null,m=null,_=null,E=void 0,I=null,y=!!u.dynamicChildren)=>{if(l===u)return;l&&!Vt(l,u)&&(v=yn(l),Ie(l,m,_,!0),l=null),u.patchFlag===-2&&(y=!1,u.dynamicChildren=null);const{type:b,ref:C,shapeFlag:T}=u;switch(b){case Xn:K(l,u,p,v);break;case Ot:M(l,u,p,v);break;case hr:l==null&&L(u,p,v,E);break;case ge:_n(l,u,p,v,m,_,E,I,y);break;default:T&1?q(l,u,p,v,m,_,E,I,y):T&6?vn(l,u,p,v,m,_,E,I,y):(T&64||T&128)&&b.process(l,u,p,v,m,_,E,I,y,Ht)}C!=null&&m?qt(C,l&&l.ref,_,u||l,!u):C==null&&l&&l.ref!=null&&qt(l.ref,null,_,l,!0)},K=(l,u,p,v)=>{if(l==null)r(u.el=a(u.children),p,v);else{const m=u.el=l.el;u.children!==l.children&&d(m,u.children)}},M=(l,u,p,v)=>{l==null?r(u.el=c(u.children||""),p,v):u.el=l.el},L=(l,u,p,v)=>{[l.el,l.anchor]=O(l.children,u,p,v,l.el,l.anchor)},U=({el:l,anchor:u},p,v)=>{let m;for(;l&&l!==u;)m=g(l),r(l,p,v),l=m;r(u,p,v)},A=({el:l,anchor:u})=>{let p;for(;l&&l!==u;)p=g(l),s(l),l=p;s(u)},q=(l,u,p,v,m,_,E,I,y)=>{u.type==="svg"?E="svg":u.type==="math"&&(E="mathml"),l==null?pe(u,p,v,m,_,E,I,y):Ge(l,u,m,_,E,I,y)},pe=(l,u,p,v,m,_,E,I)=>{let y,b;const{props:C,shapeFlag:T,transition:S,dirs:R}=l;if(y=l.el=o(l.type,_,C&&C.is,C),T&8?f(y,l.children):T&16&&ye(l.children,y,null,v,m,fr(l,_),E,I),R&&lt(l,null,v,"created"),ue(y,l,l.scopeId,E,v),C){for(const j in C)j!=="value"&&!Wt(j)&&i(y,j,null,C[j],_,v);"value"in C&&i(y,"value",null,C.value,_),(b=C.onVnodeBeforeMount)&&Se(b,v,l)}R&&lt(l,null,v,"beforeMount");const N=Zc(m,S);N&&S.beforeEnter(y),r(y,u,p),((b=C&&C.onVnodeMounted)||N||R)&&de(()=>{b&&Se(b,v,l),N&&S.enter(y),R&&lt(l,null,v,"mounted")},m)},ue=(l,u,p,v,m)=>{if(p&&w(l,p),v)for(let _=0;_<v.length;_++)w(l,v[_]);if(m){let _=m.subTree;if(u===_||Po(_.type)&&(_.ssContent===u||_.ssFallback===u)){const E=m.vnode;ue(l,E,E.scopeId,E.slotScopeIds,m.parent)}}},ye=(l,u,p,v,m,_,E,I,y=0)=>{for(let b=y;b<l.length;b++){const C=l[b]=I?Ye(l[b]):Ae(l[b]);x(null,C,u,p,v,m,_,E,I)}},Ge=(l,u,p,v,m,_,E)=>{const I=u.el=l.el;let{patchFlag:y,dynamicChildren:b,dirs:C}=u;y|=l.patchFlag&16;const T=l.props||z,S=u.props||z;let R;if(p&&ut(p,!1),(R=S.onVnodeBeforeUpdate)&&Se(R,p,u,l),C&&lt(u,l,p,"beforeUpdate"),p&&ut(p,!0),(T.innerHTML&&S.innerHTML==null||T.textContent&&S.textContent==null)&&f(I,""),b?Ne(l.dynamicChildren,b,I,p,v,fr(u,m),_):E||V(l,u,I,null,p,v,fr(u,m),_,!1),y>0){if(y&16)Ut(I,T,S,p,m);else if(y&2&&T.class!==S.class&&i(I,"class",null,S.class,m),y&4&&i(I,"style",T.style,S.style,m),y&8){const N=u.dynamicProps;for(let j=0;j<N.length;j++){const B=N[j],ae=T[B],ce=S[B];(ce!==ae||B==="value")&&i(I,B,ae,ce,m,p)}}y&1&&l.children!==u.children&&f(I,u.children)}else!E&&b==null&&Ut(I,T,S,p,m);((R=S.onVnodeUpdated)||C)&&de(()=>{R&&Se(R,p,u,l),C&&lt(u,l,p,"updated")},v)},Ne=(l,u,p,v,m,_,E)=>{for(let I=0;I<u.length;I++){const y=l[I],b=u[I],C=y.el&&(y.type===ge||!Vt(y,b)||y.shapeFlag&198)?h(y.el):p;x(y,b,C,null,v,m,_,E,!0)}},Ut=(l,u,p,v,m)=>{if(u!==p){if(u!==z)for(const _ in u)!Wt(_)&&!(_ in p)&&i(l,_,u[_],null,m,v);for(const _ in p){if(Wt(_))continue;const E=p[_],I=u[_];E!==I&&_!=="value"&&i(l,_,I,E,m,v)}"value"in p&&i(l,"value",u.value,p.value,m)}},_n=(l,u,p,v,m,_,E,I,y)=>{const b=u.el=l?l.el:a(""),C=u.anchor=l?l.anchor:a("");let{patchFlag:T,dynamicChildren:S,slotScopeIds:R}=u;R&&(I=I?I.concat(R):R),l==null?(r(b,p,v),r(C,p,v),ye(u.children||[],p,C,m,_,E,I,y)):T>0&&T&64&&S&&l.dynamicChildren?(Ne(l.dynamicChildren,S,p,m,_,E,I),(u.key!=null||m&&u===m.subTree)&&Eo(l,u,!0)):V(l,u,p,C,m,_,E,I,y)},vn=(l,u,p,v,m,_,E,I,y)=>{u.slotScopeIds=I,l==null?u.shapeFlag&512?m.ctx.activate(u,p,v,E,y):nr(u,p,v,m,_,E,y):Cs(l,u,y)},nr=(l,u,p,v,m,_,E)=>{const I=l.component=_l(l,v,m);if(co(l)&&(I.ctx.renderer=Ht),vl(I,!1,E),I.asyncDep){if(m&&m.registerDep(I,ee,E),!l.el){const y=I.subTree=$e(Ot);M(null,y,u,p)}}else ee(I,l,u,p,m,_,E)},Cs=(l,u,p)=>{const v=u.component=l.component;if(al(l,u,p))if(v.asyncDep&&!v.asyncResolved){G(v,u,p);return}else v.next=u,v.update();else u.el=l.el,v.vnode=u},ee=(l,u,p,v,m,_,E)=>{const I=()=>{if(l.isMounted){let{next:T,bu:S,u:R,parent:N,vnode:j}=l;{const Ee=To(l);if(Ee){T&&(T.el=j.el,G(l,T,E)),Ee.asyncDep.then(()=>{l.isUnmounted||I()});return}}let B=T,ae;ut(l,!1),T?(T.el=j.el,G(l,T,E)):T=j,S&&ir(S),(ae=T.props&&T.props.onVnodeBeforeUpdate)&&Se(ae,N,T,j),ut(l,!0);const ce=$s(l),we=l.subTree;l.subTree=ce,x(we,ce,h(we.el),yn(we),l,m,_),T.el=ce.el,B===null&&cl(l,ce.el),R&&de(R,m),(ae=T.props&&T.props.onVnodeUpdated)&&de(()=>Se(ae,N,T,j),m)}else{let T;const{el:S,props:R}=u,{bm:N,m:j,parent:B,root:ae,type:ce}=l,we=Jt(u);ut(l,!1),N&&ir(N),!we&&(T=R&&R.onVnodeBeforeMount)&&Se(T,B,u),ut(l,!0);{ae.ce&&ae.ce._def.shadowRoot!==!1&&ae.ce._injectChildStyle(ce);const Ee=l.subTree=$s(l);x(null,Ee,p,v,l,m,_),u.el=Ee.el}if(j&&de(j,m),!we&&(T=R&&R.onVnodeMounted)){const Ee=u;de(()=>Se(T,B,Ee),m)}(u.shapeFlag&256||B&&Jt(B.vnode)&&B.vnode.shapeFlag&256)&&l.a&&de(l.a,m),l.isMounted=!0,u=p=v=null}};l.scope.on();const y=l.effect=new Bi(I);l.scope.off();const b=l.update=y.run.bind(y),C=l.job=y.runIfDirty.bind(y);C.i=l,C.id=l.uid,y.scheduler=()=>is(C),ut(l,!0),b()},G=(l,u,p)=>{u.component=l;const v=l.vnode.props;l.vnode=u,l.next=null,zc(l,u.props,v,p),Jc(l,u.children,p),Ve(),Ns(l),je()},V=(l,u,p,v,m,_,E,I,y=!1)=>{const b=l&&l.children,C=l?l.shapeFlag:0,T=u.children,{patchFlag:S,shapeFlag:R}=u;if(S>0){if(S&128){bn(b,T,p,v,m,_,E,I,y);return}else if(S&256){at(b,T,p,v,m,_,E,I,y);return}}R&8?(C&16&&Ft(b,m,_),T!==b&&f(p,T)):C&16?R&16?bn(b,T,p,v,m,_,E,I,y):Ft(b,m,_,!0):(C&8&&f(p,""),R&16&&ye(T,p,v,m,_,E,I,y))},at=(l,u,p,v,m,_,E,I,y)=>{l=l||wt,u=u||wt;const b=l.length,C=u.length,T=Math.min(b,C);let S;for(S=0;S<T;S++){const R=u[S]=y?Ye(u[S]):Ae(u[S]);x(l[S],R,p,null,m,_,E,I,y)}b>C?Ft(l,m,_,!0,!1,T):ye(u,p,v,m,_,E,I,y,T)},bn=(l,u,p,v,m,_,E,I,y)=>{let b=0;const C=u.length;let T=l.length-1,S=C-1;for(;b<=T&&b<=S;){const R=l[b],N=u[b]=y?Ye(u[b]):Ae(u[b]);if(Vt(R,N))x(R,N,p,null,m,_,E,I,y);else break;b++}for(;b<=T&&b<=S;){const R=l[T],N=u[S]=y?Ye(u[S]):Ae(u[S]);if(Vt(R,N))x(R,N,p,null,m,_,E,I,y);else break;T--,S--}if(b>T){if(b<=S){const R=S+1,N=R<C?u[R].el:v;for(;b<=S;)x(null,u[b]=y?Ye(u[b]):Ae(u[b]),p,N,m,_,E,I,y),b++}}else if(b>S)for(;b<=T;)Ie(l[b],m,_,!0),b++;else{const R=b,N=b,j=new Map;for(b=N;b<=S;b++){const fe=u[b]=y?Ye(u[b]):Ae(u[b]);fe.key!=null&&j.set(fe.key,b)}let B,ae=0;const ce=S-N+1;let we=!1,Ee=0;const Bt=new Array(ce);for(b=0;b<ce;b++)Bt[b]=0;for(b=R;b<=T;b++){const fe=l[b];if(ae>=ce){Ie(fe,m,_,!0);continue}let Te;if(fe.key!=null)Te=j.get(fe.key);else for(B=N;B<=S;B++)if(Bt[B-N]===0&&Vt(fe,u[B])){Te=B;break}Te===void 0?Ie(fe,m,_,!0):(Bt[Te-N]=b+1,Te>=Ee?Ee=Te:we=!0,x(fe,u[Te],p,null,m,_,E,I,y),ae++)}const Rs=we?Qc(Bt):wt;for(B=Rs.length-1,b=ce-1;b>=0;b--){const fe=N+b,Te=u[fe],Os=fe+1<C?u[fe+1].el:v;Bt[b]===0?x(null,Te,p,Os,m,_,E,I,y):we&&(B<0||b!==Rs[B]?ct(Te,p,Os,2):B--)}}},ct=(l,u,p,v,m=null)=>{const{el:_,type:E,transition:I,children:y,shapeFlag:b}=l;if(b&6){ct(l.component.subTree,u,p,v);return}if(b&128){l.suspense.move(u,p,v);return}if(b&64){E.move(l,u,p,Ht);return}if(E===ge){r(_,u,p);for(let T=0;T<y.length;T++)ct(y[T],u,p,v);r(l.anchor,u,p);return}if(E===hr){U(l,u,p);return}if(v!==2&&b&1&&I)if(v===0)I.beforeEnter(_),r(_,u,p),de(()=>I.enter(_),m);else{const{leave:T,delayLeave:S,afterLeave:R}=I,N=()=>{l.ctx.isUnmounted?s(_):r(_,u,p)},j=()=>{T(_,()=>{N(),R&&R()})};S?S(_,N,j):j()}else r(_,u,p)},Ie=(l,u,p,v=!1,m=!1)=>{const{type:_,props:E,ref:I,children:y,dynamicChildren:b,shapeFlag:C,patchFlag:T,dirs:S,cacheIndex:R}=l;if(T===-2&&(m=!1),I!=null&&(Ve(),qt(I,null,p,l,!0),je()),R!=null&&(u.renderCache[R]=void 0),C&256){u.ctx.deactivate(l);return}const N=C&1&&S,j=!Jt(l);let B;if(j&&(B=E&&E.onVnodeBeforeUnmount)&&Se(B,u,l),C&6)Sa(l.component,p,v);else{if(C&128){l.suspense.unmount(p,v);return}N&&lt(l,null,u,"beforeUnmount"),C&64?l.type.remove(l,u,p,Ht,v):b&&!b.hasOnce&&(_!==ge||T>0&&T&64)?Ft(b,u,p,!1,!0):(_===ge&&T&384||!m&&C&16)&&Ft(y,u,p),v&&As(l)}(j&&(B=E&&E.onVnodeUnmounted)||N)&&de(()=>{B&&Se(B,u,l),N&&lt(l,null,u,"unmounted")},p)},As=l=>{const{type:u,el:p,anchor:v,transition:m}=l;if(u===ge){Ta(p,v);return}if(u===hr){A(l);return}const _=()=>{s(p),m&&!m.persisted&&m.afterLeave&&m.afterLeave()};if(l.shapeFlag&1&&m&&!m.persisted){const{leave:E,delayLeave:I}=m,y=()=>E(p,_);I?I(l.el,_,y):y()}else _()},Ta=(l,u)=>{let p;for(;l!==u;)p=g(l),s(l),l=p;s(u)},Sa=(l,u,p)=>{const{bum:v,scope:m,job:_,subTree:E,um:I,m:y,a:b,parent:C,slots:{__:T}}=l;Bs(y),Bs(b),v&&ir(v),C&&k(T)&&T.forEach(S=>{C.renderCache[S]=void 0}),m.stop(),_&&(_.flags|=8,Ie(E,l,u,p)),I&&de(I,u),de(()=>{l.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&l.asyncDep&&!l.asyncResolved&&l.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Ft=(l,u,p,v=!1,m=!1,_=0)=>{for(let E=_;E<l.length;E++)Ie(l[E],u,p,v,m)},yn=l=>{if(l.shapeFlag&6)return yn(l.component.subTree);if(l.shapeFlag&128)return l.suspense.next();const u=g(l.anchor||l.el),p=u&&u[yc];return p?g(p):u};let rr=!1;const Ps=(l,u,p)=>{l==null?u._vnode&&Ie(u._vnode,null,null,!0):x(u._vnode||null,l,u,null,null,null,p),u._vnode=l,rr||(rr=!0,Ns(),so(),rr=!1)},Ht={p:x,um:Ie,m:ct,r:As,mt:nr,mc:ye,pc:V,pbc:Ne,n:yn,o:t};return{render:Ps,hydrate:void 0,createApp:Vc(Ps)}}function fr({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ut({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Zc(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Eo(t,e,n=!1){const r=t.children,s=e.children;if(k(r)&&k(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ye(s[i]),a.el=o.el),!n&&a.patchFlag!==-2&&Eo(o,a)),a.type===Xn&&(a.el=o.el),a.type===Ot&&!a.el&&(a.el=o.el)}}function Qc(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const d=t[r];if(d!==0){if(s=n[n.length-1],t[s]<d){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<d?i=a+1:o=a;d<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function To(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:To(e)}function Bs(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const el=Symbol.for("v-scx"),tl=()=>Sn(el);function dr(t,e,n){return So(t,e,n)}function So(t,e,n=z){const{immediate:r,deep:s,flush:i,once:o}=n,a=ie({},n),c=e&&r||!e&&i!=="post";let d;if(sn){if(i==="sync"){const w=tl();d=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=Oe,w.resume=Oe,w.pause=Oe,w}}const f=se;a.call=(w,O,x)=>De(w,f,O,x);let h=!1;i==="post"?a.scheduler=w=>{de(w,f&&f.suspense)}:i!=="sync"&&(h=!0,a.scheduler=(w,O)=>{O?w():is(w)}),a.augmentJob=w=>{e&&(w.flags|=4),h&&(w.flags|=2,f&&(w.id=f.uid,w.i=f))};const g=pc(t,e,a);return sn&&(d?d.push(g):c&&g()),g}function nl(t,e,n){const r=this.proxy,s=Y(t)?t.includes(".")?Co(r,t):()=>r[t]:t.bind(r,r);let i;D(e)?i=e:(i=e.handler,n=e);const o=un(this),a=So(s,i.bind(r),n);return o(),a}function Co(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const rl=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${st(e)}Modifiers`]||t[`${bt(e)}Modifiers`];function sl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||z;let s=n;const i=e.startsWith("update:"),o=i&&rl(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Y(f)?f.trim():f)),o.number&&(s=n.map(ka)));let a,c=r[a=sr(e)]||r[a=sr(st(e))];!c&&i&&(c=r[a=sr(bt(e))]),c&&De(c,t,6,s);const d=r[a+"Once"];if(d){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,De(d,t,6,s)}}function Ao(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!D(t)){const c=d=>{const f=Ao(d,e,!0);f&&(a=!0,ie(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(J(t)&&r.set(t,null),null):(k(i)?i.forEach(c=>o[c]=null):ie(o,i),J(t)&&r.set(t,o),o)}function Yn(t,e){return!t||!Wn(e)?!1:(e=e.slice(2).replace(/Once$/,""),H(t,e[0].toLowerCase()+e.slice(1))||H(t,bt(e))||H(t,e))}function $s(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:a,emit:c,render:d,renderCache:f,props:h,data:g,setupState:w,ctx:O,inheritAttrs:x}=t,K=Nn(t);let M,L;try{if(n.shapeFlag&4){const A=s||r,q=A;M=Ae(d.call(q,A,f,h,w,g,O)),L=a}else{const A=e;M=Ae(A.length>1?A(h,{attrs:a,slots:o,emit:c}):A(h,null)),L=e.props?a:il(a)}}catch(A){Xt.length=0,qn(A,t,1),M=$e(Ot)}let U=M;if(L&&x!==!1){const A=Object.keys(L),{shapeFlag:q}=U;A.length&&q&7&&(i&&A.some(zr)&&(L=ol(L,i)),U=kt(U,L,!1,!0))}return n.dirs&&(U=kt(U,null,!1,!0),U.dirs=U.dirs?U.dirs.concat(n.dirs):n.dirs),n.transition&&os(U,n.transition),M=U,Nn(K),M}const il=t=>{let e;for(const n in t)(n==="class"||n==="style"||Wn(n))&&((e||(e={}))[n]=t[n]);return e},ol=(t,e)=>{const n={};for(const r in t)(!zr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function al(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,d=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Vs(r,o,d):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const g=f[h];if(o[g]!==r[g]&&!Yn(d,g))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Vs(r,o,d):!0:!!o;return!1}function Vs(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Yn(n,i))return!0}return!1}function cl({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Po=t=>t.__isSuspense;function ll(t,e){e&&e.pendingBranch?k(t)?e.effects.push(...t):e.effects.push(t):vc(t)}const ge=Symbol.for("v-fgt"),Xn=Symbol.for("v-txt"),Ot=Symbol.for("v-cmt"),hr=Symbol.for("v-stc"),Xt=[];let he=null;function ls(t=!1){Xt.push(he=t?null:[])}function ul(){Xt.pop(),he=Xt[Xt.length-1]||null}let rn=1;function js(t,e=!1){rn+=t,t<0&&he&&e&&(he.hasOnce=!0)}function fl(t){return t.dynamicChildren=rn>0?he||wt:null,ul(),rn>0&&he&&he.push(t),t}function us(t,e,n,r,s,i){return fl(X(t,e,n,r,s,i,!0))}function Ro(t){return t?t.__v_isVNode===!0:!1}function Vt(t,e){return t.type===e.type&&t.key===e.key}const Oo=({key:t})=>t??null,Cn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Y(t)||Q(t)||D(t)?{i:Re,r:t,k:e,f:!!n}:t:null);function X(t,e=null,n=null,r=0,s=null,i=t===ge?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Oo(e),ref:e&&Cn(e),scopeId:oo,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Re};return a?(fs(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Y(n)?8:16),rn>0&&!o&&he&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&he.push(c),c}const $e=dl;function dl(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Nc)&&(t=Ot),Ro(t)){const a=kt(t,e,!0);return n&&fs(a,n),rn>0&&!i&&he&&(a.shapeFlag&6?he[he.indexOf(t)]=a:he.push(a)),a.patchFlag=-2,a}if(wl(t)&&(t=t.__vccOpts),e){e=hl(e);let{class:a,style:c}=e;a&&!Y(a)&&(e.class=Jr(a)),J(c)&&(ss(c)&&!k(c)&&(c=ie({},c)),e.style=qr(c))}const o=Y(t)?1:Po(t)?128:Ic(t)?64:J(t)?4:D(t)?2:0;return X(t,e,n,r,s,o,i,!0)}function hl(t){return t?ss(t)||_o(t)?ie({},t):t:null}function kt(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:a,transition:c}=t,d=e?pl(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:d,key:d&&Oo(d),ref:e&&e.ref?n&&i?k(i)?i.concat(Cn(e)):[i,Cn(e)]:Cn(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ge?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&kt(t.ssContent),ssFallback:t.ssFallback&&kt(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&os(f,c.clone(f)),f}function dt(t=" ",e=0){return $e(Xn,null,t,e)}function Ae(t){return t==null||typeof t=="boolean"?$e(Ot):k(t)?$e(ge,null,t.slice()):Ro(t)?Ye(t):$e(Xn,null,String(t))}function Ye(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:kt(t)}function fs(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(k(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fs(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!_o(e)?e._ctx=Re:s===3&&Re&&(Re.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else D(e)?(e={default:e,_ctx:Re},n=32):(e=String(e),r&64?(n=16,e=[dt(e)]):n=8);t.children=e,t.shapeFlag|=n}function pl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Jr([e.class,r.class]));else if(s==="style")e.style=qr([e.style,r.style]);else if(Wn(s)){const i=e[s],o=r[s];o&&i!==o&&!(k(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Se(t,e,n,r=null){De(t,e,7,[n,r])}const gl=po();let ml=0;function _l(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||gl,i={uid:ml++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fa(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,s),emitsOptions:Ao(r,s),emit:null,emitted:null,propsDefaults:z,inheritAttrs:r.inheritAttrs,ctx:z,data:z,props:z,attrs:z,slots:z,refs:z,setupState:z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sl.bind(null,i),t.ce&&t.ce(i),i}let se=null,Ln,Nr;{const t=Gn(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ln=e("__VUE_INSTANCE_SETTERS__",n=>se=n),Nr=e("__VUE_SSR_SETTERS__",n=>sn=n)}const un=t=>{const e=se;return Ln(t),t.scope.on(),()=>{t.scope.off(),Ln(e)}},Ws=()=>{se&&se.scope.off(),Ln(null)};function ko(t){return t.vnode.shapeFlag&4}let sn=!1;function vl(t,e=!1,n=!1){e&&Nr(e);const{props:r,children:s}=t.vnode,i=ko(t);Wc(t,r,i,e),qc(t,s,n||e);const o=i?bl(t,e):void 0;return e&&Nr(!1),o}function bl(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Mc);const{setup:r}=n;if(r){Ve();const s=t.setupContext=r.length>1?Il(t):null,i=un(t),o=ln(r,t,0,[t.props,s]),a=xi(o);if(je(),i(),(a||t.sp)&&!Jt(t)&&ao(t),a){if(o.then(Ws,Ws),e)return o.then(c=>{zs(t,c)}).catch(c=>{qn(c,t,0)});t.asyncDep=o}else zs(t,o)}else Do(t)}function zs(t,e,n){D(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=to(e)),Do(t)}function Do(t,e,n){const r=t.type;t.render||(t.render=r.render||Oe);{const s=un(t);Ve();try{Lc(t)}finally{je(),s()}}}const yl={get(t,e){return Z(t,"get",""),t[e]}};function Il(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,yl),slots:t.slots,emit:t.emit,expose:e}}function ds(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(to(ic(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Yt)return Yt[n](t)},has(e,n){return n in e||n in Yt}})):t.proxy}function wl(t){return D(t)&&"__vccOpts"in t}const El=(t,e)=>dc(t,e,sn),Tl="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Mr;const Ks=typeof window<"u"&&window.trustedTypes;if(Ks)try{Mr=Ks.createPolicy("vue",{createHTML:t=>t})}catch{}const xo=Mr?t=>Mr.createHTML(t):t=>t,Sl="http://www.w3.org/2000/svg",Cl="http://www.w3.org/1998/Math/MathML",Le=typeof document<"u"?document:null,Gs=Le&&Le.createElement("template"),Al={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Le.createElementNS(Sl,t):e==="mathml"?Le.createElementNS(Cl,t):n?Le.createElement(t,{is:n}):Le.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Le.createTextNode(t),createComment:t=>Le.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Le.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gs.innerHTML=xo(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const a=Gs.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Pl=Symbol("_vtc");function Rl(t,e,n){const r=t[Pl];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const qs=Symbol("_vod"),Ol=Symbol("_vsh"),kl=Symbol(""),Dl=/(^|;)\s*display\s*:/;function xl(t,e,n){const r=t.style,s=Y(n);let i=!1;if(n&&!s){if(e)if(Y(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&An(r,a,"")}else for(const o in e)n[o]==null&&An(r,o,"");for(const o in n)o==="display"&&(i=!0),An(r,o,n[o])}else if(s){if(e!==n){const o=r[kl];o&&(n+=";"+o),r.cssText=n,i=Dl.test(n)}}else e&&t.removeAttribute("style");qs in t&&(t[qs]=i?r.display:"",t[Ol]&&(r.display="none"))}const Js=/\s*!important$/;function An(t,e,n){if(k(n))n.forEach(r=>An(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Nl(t,e);Js.test(n)?t.setProperty(bt(r),n.replace(Js,""),"important"):t[r]=n}}const Ys=["Webkit","Moz","ms"],pr={};function Nl(t,e){const n=pr[e];if(n)return n;let r=st(e);if(r!=="filter"&&r in t)return pr[e]=r;r=Li(r);for(let s=0;s<Ys.length;s++){const i=Ys[s]+r;if(i in t)return pr[e]=i}return e}const Xs="http://www.w3.org/1999/xlink";function Zs(t,e,n,r,s,i=Ua(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Xs,e.slice(6,e.length)):t.setAttributeNS(Xs,e,n):n==null||i&&!Ui(n)?t.removeAttribute(e):t.setAttribute(e,i?"":it(n)?String(n):n)}function Qs(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?xo(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(a!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Ui(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Ml(t,e,n,r){t.addEventListener(e,n,r)}function Ll(t,e,n,r){t.removeEventListener(e,n,r)}const ei=Symbol("_vei");function Ul(t,e,n,r,s=null){const i=t[ei]||(t[ei]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Fl(e);if(r){const d=i[e]=$l(r,s);Ml(t,a,d,c)}else o&&(Ll(t,a,o,c),i[e]=void 0)}}const ti=/(?:Once|Passive|Capture)$/;function Fl(t){let e;if(ti.test(t)){e={};let r;for(;r=t.match(ti);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bt(t.slice(2)),e]}let gr=0;const Hl=Promise.resolve(),Bl=()=>gr||(Hl.then(()=>gr=0),gr=Date.now());function $l(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;De(Vl(r,n.value),e,5,[r])};return n.value=t,n.attached=Bl(),n}function Vl(t,e){if(k(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ni=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,jl=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?Rl(t,r,o):e==="style"?xl(t,n,r):Wn(e)?zr(e)||Ul(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Wl(t,e,r,o))?(Qs(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zs(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Y(r))?Qs(t,st(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zs(t,e,r,o))};function Wl(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ni(e)&&D(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ni(e)&&Y(n)?!1:e in t}const zl=ie({patchProp:jl},Al);let ri;function Kl(){return ri||(ri=Yc(zl))}const Gl=(...t)=>{const e=Kl().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Jl(r);if(!s)return;const i=e._component;!D(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,ql(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ql(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Jl(t){return Y(t)?document.querySelector(t):t}const Yl="/hayfulbito/vite.svg",Xl="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20aria-hidden='true'%20role='img'%20class='iconify%20iconify--logos'%20width='37.07'%20height='36'%20preserveAspectRatio='xMidYMid%20meet'%20viewBox='0%200%20256%20198'%3e%3cpath%20fill='%2341B883'%20d='M204.8%200H256L128%20220.8L0%200h97.92L128%2051.2L157.44%200h47.36Z'%3e%3c/path%3e%3cpath%20fill='%2341B883'%20d='m0%200l128%20220.8L256%200h-51.2L128%20132.48L50.56%200H0Z'%3e%3c/path%3e%3cpath%20fill='%2335495E'%20d='M50.56%200L128%20133.12L204.8%200h-47.36L128%2051.2L97.92%200H50.56Z'%3e%3c/path%3e%3c/svg%3e",Zl=()=>{};var si={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Ql=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mo={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,f=i>>2,h=(i&3)<<4|a>>4;let g=(a&15)<<2|d>>6,w=d&63;c||(w=64,o||(g=64)),r.push(n[f],n[h],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(No(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Ql(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||d==null||h==null)throw new eu;const g=i<<2|a>>4;if(r.push(g),d!==64){const w=a<<4&240|d>>2;if(r.push(w),h!==64){const O=d<<6&192|h;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const tu=function(t){const e=No(t);return Mo.encodeByteArray(e,!0)},Lo=function(t){return tu(t).replace(/\./g,"")},Uo=function(t){try{return Mo.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=()=>nu().__FIREBASE_DEFAULTS__,su=()=>{if(typeof process>"u"||typeof si>"u")return;const t=si.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},iu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Uo(t[1]);return e&&JSON.parse(e)},hs=()=>{try{return Zl()||ru()||su()||iu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ou=t=>{var e,n;return(n=(e=hs())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Fo=()=>{var t;return(t=hs())===null||t===void 0?void 0:t.config},Ho=t=>{var e;return(e=hs())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zn(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function cu(t){return(await fetch(t,{credentials:"include"})).ok}const Zt={};function lu(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zt))Zt[e]?t.emulator.push(e):t.prod.push(e);return t}function uu(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ii=!1;function fu(t,e){if(typeof window>"u"||typeof document>"u"||!Zn(window.location.host)||Zt[t]===e||Zt[t]||ii)return;Zt[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=lu().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function a(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function d(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ii=!0,o()},g}function f(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function h(){const g=uu(r),w=n("text"),O=document.getElementById(w)||document.createElement("span"),x=n("learnmore"),K=document.getElementById(x)||document.createElement("a"),M=n("preprendIcon"),L=document.getElementById(M)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const U=g.element;a(U),f(K,x);const A=d();c(L,M),U.append(L,O,K,A),document.body.appendChild(U)}i?(O.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function du(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(oe())}function hu(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function pu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mu(){const t=oe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _u(){try{return typeof indexedDB=="object"}catch{return!1}}function vu(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu="FirebaseError";class ot extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=bu,Object.setPrototypeOf(this,ot.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fn.prototype.create)}}class fn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yu(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new ot(s,a,r)}}function yu(t,e){return t.replace(Iu,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Iu=/\{\$([^}]+)}/g;function wu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(oi(i)&&oi(o)){if(!Dt(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function oi(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Eu(t,e){const n=new Tu(t,e);return n.subscribe.bind(n)}class Tu{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Su(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=mr),s.error===void 0&&(s.error=mr),s.complete===void 0&&(s.complete=mr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Su(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new au;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pu(e))try{this.getOrInitializeService({instanceIdentifier:ht})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ht){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ht){return this.instances.has(e)}getOptions(e=ht){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Au(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ht){return this.component?this.component.multipleInstances?e:ht:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Au(t){return t===ht?void 0:t}function Pu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})($||($={}));const Ou={debug:$.DEBUG,verbose:$.VERBOSE,info:$.INFO,warn:$.WARN,error:$.ERROR,silent:$.SILENT},ku=$.INFO,Du={[$.DEBUG]:"log",[$.VERBOSE]:"log",[$.INFO]:"info",[$.WARN]:"warn",[$.ERROR]:"error"},xu=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Du[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bo{constructor(e){this.name=e,this._logLevel=ku,this._logHandler=xu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in $))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ou[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,$.DEBUG,...e),this._logHandler(this,$.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,$.VERBOSE,...e),this._logHandler(this,$.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,$.INFO,...e),this._logHandler(this,$.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,$.WARN,...e),this._logHandler(this,$.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,$.ERROR,...e),this._logHandler(this,$.ERROR,...e)}}const Nu=(t,e)=>e.some(n=>t instanceof n);let ai,ci;function Mu(){return ai||(ai=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Lu(){return ci||(ci=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $o=new WeakMap,Lr=new WeakMap,Vo=new WeakMap,_r=new WeakMap,ps=new WeakMap;function Uu(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(nt(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&$o.set(n,t)}).catch(()=>{}),ps.set(e,t),e}function Fu(t){if(Lr.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Lr.set(t,e)}let Ur={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lr.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vo.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nt(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Hu(t){Ur=t(Ur)}function Bu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(vr(this),e,...n);return Vo.set(r,e.sort?e.sort():[e]),nt(r)}:Lu().includes(t)?function(...e){return t.apply(vr(this),e),nt($o.get(this))}:function(...e){return nt(t.apply(vr(this),e))}}function $u(t){return typeof t=="function"?Bu(t):(t instanceof IDBTransaction&&Fu(t),Nu(t,Mu())?new Proxy(t,Ur):t)}function nt(t){if(t instanceof IDBRequest)return Uu(t);if(_r.has(t))return _r.get(t);const e=$u(t);return e!==t&&(_r.set(t,e),ps.set(e,t)),e}const vr=t=>ps.get(t);function Vu(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=nt(o);return r&&o.addEventListener("upgradeneeded",c=>{r(nt(o.result),c.oldVersion,c.newVersion,nt(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const ju=["get","getKey","getAll","getAllKeys","count"],Wu=["put","add","delete","clear"],br=new Map;function li(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(br.get(e))return br.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Wu.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ju.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&c.done]))[0]};return br.set(e,i),i}Hu(t=>({...t,get:(e,n,r)=>li(e,n)||t.get(e,n,r),has:(e,n)=>!!li(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ku(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ku(t){const e=t.getComponent();return e?.type==="VERSION"}const Fr="@firebase/app",ui="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const We=new Bo("@firebase/app"),Gu="@firebase/app-compat",qu="@firebase/analytics-compat",Ju="@firebase/analytics",Yu="@firebase/app-check-compat",Xu="@firebase/app-check",Zu="@firebase/auth",Qu="@firebase/auth-compat",ef="@firebase/database",tf="@firebase/data-connect",nf="@firebase/database-compat",rf="@firebase/functions",sf="@firebase/functions-compat",of="@firebase/installations",af="@firebase/installations-compat",cf="@firebase/messaging",lf="@firebase/messaging-compat",uf="@firebase/performance",ff="@firebase/performance-compat",df="@firebase/remote-config",hf="@firebase/remote-config-compat",pf="@firebase/storage",gf="@firebase/storage-compat",mf="@firebase/firestore",_f="@firebase/ai",vf="@firebase/firestore-compat",bf="firebase",yf="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="[DEFAULT]",If={[Fr]:"fire-core",[Gu]:"fire-core-compat",[Ju]:"fire-analytics",[qu]:"fire-analytics-compat",[Xu]:"fire-app-check",[Yu]:"fire-app-check-compat",[Zu]:"fire-auth",[Qu]:"fire-auth-compat",[ef]:"fire-rtdb",[tf]:"fire-data-connect",[nf]:"fire-rtdb-compat",[rf]:"fire-fn",[sf]:"fire-fn-compat",[of]:"fire-iid",[af]:"fire-iid-compat",[cf]:"fire-fcm",[lf]:"fire-fcm-compat",[uf]:"fire-perf",[ff]:"fire-perf-compat",[df]:"fire-rc",[hf]:"fire-rc-compat",[pf]:"fire-gcs",[gf]:"fire-gcs-compat",[mf]:"fire-fst",[vf]:"fire-fst-compat",[_f]:"fire-vertex","fire-js":"fire-js",[bf]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un=new Map,wf=new Map,Br=new Map;function fi(t,e){try{t.container.addComponent(e)}catch(n){We.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function on(t){const e=t.name;if(Br.has(e))return We.debug(`There were multiple attempts to register component ${e}.`),!1;Br.set(e,t);for(const n of Un.values())fi(n,t);for(const n of wf.values())fi(n,t);return!0}function jo(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Pe(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rt=new fn("app","Firebase",Ef);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=yf;function Wo(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hr,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw rt.create("bad-app-name",{appName:String(s)});if(n||(n=Fo()),!n)throw rt.create("no-options");const i=Un.get(s);if(i){if(Dt(n,i.options)&&Dt(r,i.config))return i;throw rt.create("duplicate-app",{appName:s})}const o=new Ru(s);for(const c of Br.values())o.addComponent(c);const a=new Tf(n,r,o);return Un.set(s,a),a}function Sf(t=Hr){const e=Un.get(t);if(!e&&t===Hr&&Fo())return Wo();if(!e)throw rt.create("no-app",{appName:t});return e}function Ct(t,e,n){var r;let s=(r=If[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),We.warn(a.join(" "));return}on(new xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf="firebase-heartbeat-database",Af=1,an="firebase-heartbeat-store";let yr=null;function zo(){return yr||(yr=Vu(Cf,Af,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(an)}catch(n){console.warn(n)}}}}).catch(t=>{throw rt.create("idb-open",{originalErrorMessage:t.message})})),yr}async function Pf(t){try{const n=(await zo()).transaction(an),r=await n.objectStore(an).get(Ko(t));return await n.done,r}catch(e){if(e instanceof ot)We.warn(e.message);else{const n=rt.create("idb-get",{originalErrorMessage:e?.message});We.warn(n.message)}}}async function di(t,e){try{const r=(await zo()).transaction(an,"readwrite");await r.objectStore(an).put(e,Ko(t)),await r.done}catch(n){if(n instanceof ot)We.warn(n.message);else{const r=rt.create("idb-set",{originalErrorMessage:n?.message});We.warn(r.message)}}}function Ko(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=1024,Of=30;class kf{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xf(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=hi();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Of){const o=Nf(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){We.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=hi(),{heartbeatsToSend:r,unsentEntries:s}=Df(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return We.warn(n),""}}}function hi(){return new Date().toISOString().substring(0,10)}function Df(t,e=Rf){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),pi(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),pi(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?vu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Pf(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return di(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return di(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function pi(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}function Nf(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(t){on(new xt("platform-logger",e=>new zu(e),"PRIVATE")),on(new xt("heartbeat",e=>new kf(e),"PRIVATE")),Ct(Fr,ui,t),Ct(Fr,ui,"esm2017"),Ct("fire-js","")}Mf("");function gs(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Go(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lf=Go,qo=new fn("auth","Firebase",Go());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn=new Bo("@firebase/auth");function Uf(t,...e){Fn.logLevel<=$.WARN&&Fn.warn(`Auth (${hn}): ${t}`,...e)}function Pn(t,...e){Fn.logLevel<=$.ERROR&&Fn.error(`Auth (${hn}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,...e){throw _s(t,...e)}function be(t,...e){return _s(t,...e)}function ms(t,e,n){const r=Object.assign(Object.assign({},Lf()),{[e]:n});return new fn("auth","Firebase",r).create(e,{appName:t.name})}function mt(t){return ms(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ff(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&xe(t,"argument-error"),ms(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _s(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return qo.create(t,...e)}function P(t,e,...n){if(!t)throw _s(e,...n)}function He(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pn(e),new Error(e)}function ze(t,e){t||He(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Hf(){return gi()==="http:"||gi()==="https:"}function gi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hf()||pu()||"connection"in navigator)?navigator.onLine:!0}function $f(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,n){this.shortDelay=e,this.longDelay=n,ze(n>e,"Short delay should be less than long delay!"),this.isMobile=du()||gu()}get(){return Bf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t,e){ze(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;He("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;He("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;He("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jf=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Wf=new pn(3e4,6e4);function bs(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Lt(t,e,n,r,s={}){return Yo(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=dn(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:c},i);return hu()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(d.credentials="include"),Jo.fetch()(await Xo(t,t.config.apiHost,n,a),d)})}async function Yo(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Vf),e);try{const s=new Kf(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Tn(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,d]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Tn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Tn(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw ms(t,f,d);xe(t,f)}}catch(s){if(s instanceof ot)throw s;xe(t,"network-request-failed",{message:String(s)})}}async function zf(t,e,n,r,s={}){const i=await Lt(t,e,n,r,s);return"mfaPendingCredential"in i&&xe(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Xo(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?vs(t.config,s):`${t.config.apiScheme}://${s}`;return jf.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class Kf{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(be(this.auth,"network-request-failed")),Wf.get())})}}function Tn(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=be(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gf(t,e){return Lt(t,"POST","/v1/accounts:delete",e)}async function Hn(t,e){return Lt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qf(t,e=!1){const n=Mt(t),r=await n.getIdToken(e),s=ys(r);P(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Qt(Ir(s.auth_time)),issuedAtTime:Qt(Ir(s.iat)),expirationTime:Qt(Ir(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ir(t){return Number(t)*1e3}function ys(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Pn("JWT malformed, contained fewer than 3 sections"),null;try{const s=Uo(n);return s?JSON.parse(s):(Pn("Failed to decode base64 JWT payload"),null)}catch(s){return Pn("Caught error parsing JWT payload as JSON",s?.toString()),null}}function mi(t){const e=ys(t);return P(e,"internal-error"),P(typeof e.exp<"u","internal-error"),P(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ot&&Jf(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Jf({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(t){var e;const n=t.auth,r=await t.getIdToken(),s=await cn(t,Hn(n,{idToken:r}));P(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Zo(i.providerUserInfo):[],a=Zf(t.providerData,o),c=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!a?.length,f=c?d:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Vr(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,h)}async function Xf(t){const e=Mt(t);await Bn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zf(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Zo(t){return t.map(e=>{var{providerId:n}=e,r=gs(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qf(t,e){const n=await Yo(t,{},async()=>{const r=dn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Xo(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:r};return t.emulatorConfig&&Zn(t.emulatorConfig.host)&&(c.credentials="include"),Jo.fetch()(o,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ed(t,e){return Lt(t,"POST","/v2/accounts:revokeToken",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){P(e.idToken,"internal-error"),P(typeof e.idToken<"u","internal-error"),P(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):mi(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){P(e.length!==0,"internal-error");const n=mi(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(P(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Qf(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new At;return r&&(P(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(P(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(P(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new At,this.toJSON())}_performRefresh(){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t,e){P(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class me{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gs(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Vr(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cn(this,this.stsTokenManager.getToken(this.auth,e));return P(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qf(this,e)}reload(){return Xf(this)}_assign(e){this!==e&&(P(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){P(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Pe(this.auth.app))return Promise.reject(mt(this.auth));const e=await this.getIdToken();return await cn(this,Gf(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,d,f;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,O=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(a=n.tenantId)!==null&&a!==void 0?a:void 0,K=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,M=(d=n.createdAt)!==null&&d!==void 0?d:void 0,L=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:U,emailVerified:A,isAnonymous:q,providerData:pe,stsTokenManager:ue}=n;P(U&&ue,e,"internal-error");const ye=At.fromJSON(this.name,ue);P(typeof U=="string",e,"internal-error"),qe(h,e.name),qe(g,e.name),P(typeof A=="boolean",e,"internal-error"),P(typeof q=="boolean",e,"internal-error"),qe(w,e.name),qe(O,e.name),qe(x,e.name),qe(K,e.name),qe(M,e.name),qe(L,e.name);const Ge=new me({uid:U,auth:e,email:g,emailVerified:A,displayName:h,isAnonymous:q,photoURL:O,phoneNumber:w,tenantId:x,stsTokenManager:ye,createdAt:M,lastLoginAt:L});return pe&&Array.isArray(pe)&&(Ge.providerData=pe.map(Ne=>Object.assign({},Ne))),K&&(Ge._redirectEventId=K),Ge}static async _fromIdTokenResponse(e,n,r=!1){const s=new At;s.updateFromServerResponse(n);const i=new me({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bn(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];P(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Zo(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!i?.length,a=new At;a.updateFromIdToken(r);const c=new me({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Vr(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,d),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new Map;function Be(t){ze(t instanceof Function,"Expected a class definition");let e=_i.get(t);return e?(ze(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_i.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Qo.type="NONE";const vi=Qo;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(t,e,n){return`firebase:${t}:${e}:${n}`}class Pt{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Rn(this.userKey,s.apiKey,i),this.fullPersistenceKey=Rn("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Hn(this.auth,{idToken:e}).catch(()=>{});return n?me._fromGetAccountInfoResponse(this.auth,n,e):null}return me._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Pt(Be(vi),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Be(vi);const o=Rn(r,e.config.apiKey,e.name);let a=null;for(const d of n)try{const f=await d._get(o);if(f){let h;if(typeof f=="string"){const g=await Hn(e,{idToken:f}).catch(()=>{});if(!g)break;h=await me._fromGetAccountInfoResponse(e,g,f)}else h=me._fromJSON(e,f);d!==i&&(a=h),i=d;break}}catch{}const c=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Pt(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Pt(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ra(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ea(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ia(e))return"Blackberry";if(oa(e))return"Webos";if(ta(e))return"Safari";if((e.includes("chrome/")||na(e))&&!e.includes("edge/"))return"Chrome";if(sa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function ea(t=oe()){return/firefox\//i.test(t)}function ta(t=oe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function na(t=oe()){return/crios\//i.test(t)}function ra(t=oe()){return/iemobile/i.test(t)}function sa(t=oe()){return/android/i.test(t)}function ia(t=oe()){return/blackberry/i.test(t)}function oa(t=oe()){return/webos/i.test(t)}function Is(t=oe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function td(t=oe()){var e;return Is(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nd(){return mu()&&document.documentMode===10}function aa(t=oe()){return Is(t)||sa(t)||oa(t)||ia(t)||/windows phone/i.test(t)||ra(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e=[]){let n;switch(t){case"Browser":n=bi(oe());break;case"Worker":n=`${bi(oe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${hn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sd(t,e={}){return Lt(t,"GET","/v2/passwordPolicy",bs(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=6;class od{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:id,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yi(this),this.idTokenSubscription=new yi(this),this.beforeStateQueue=new rd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qo,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Be(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Pt.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hn(this,{idToken:e}),r=await me._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Pe(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return P(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bn(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$f()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Pe(this.app))return Promise.reject(mt(this));const n=e?Mt(e):null;return n&&P(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&P(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Pe(this.app)?Promise.reject(mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Pe(this.app)?Promise.reject(mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await sd(this),n=new od(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ed(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Be(e)||this._popupRedirectResolver;P(n,this,"argument-error"),this.redirectPersistenceManager=await Pt.create(this,[Be(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(P(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return P(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ca(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Pe(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&Uf(`Error while retrieving App Check token: ${n.error}`),n?.token}}function Qn(t){return Mt(t)}class yi{constructor(e){this.auth=e,this.observer=null,this.addObserver=Eu(n=>this.observer=n)}get next(){return P(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ws={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cd(t){ws=t}function ld(t){return ws.loadJS(t)}function ud(){return ws.gapiScript}function fd(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t,e){const n=jo(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Dt(i,e??{}))return s;xe(s,"already-initialized")}return n.initialize({options:e})}function hd(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(Be);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function pd(t,e,n){const r=Qn(t);P(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=la(e),{host:o,port:a}=gd(e),c=a===null?"":`:${a}`,d={url:`${i}//${o}${c}/`},f=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){P(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),P(Dt(d,r.config.emulator)&&Dt(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Zn(o)?(cu(`${i}//${o}${c}`),fu("Auth",!0)):md()}function la(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gd(t){const e=la(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ii(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ii(o)}}}function Ii(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function md(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return He("not implemented")}_getIdTokenResponse(e){return He("not implemented")}_linkToIdToken(e,n){return He("not implemented")}_getReauthenticationResolver(e){return He("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(t,e){return zf(t,"POST","/v1/accounts:signInWithIdp",bs(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _d="http://localhost";class vt extends ua{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gs(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Rt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Rt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Rt(e,n)}buildRequest(){const e={requestUri:_d,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=dn(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Es{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends gn{constructor(){super("facebook.com")}static credential(e){return vt._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe extends gn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vt._fromParams({providerId:Fe.PROVIDER_ID,signInMethod:Fe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fe.credentialFromTaggedObject(e)}static credentialFromError(e){return Fe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fe.credential(n,r)}catch{return null}}}Fe.GOOGLE_SIGN_IN_METHOD="google.com";Fe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends gn{constructor(){super("github.com")}static credential(e){return vt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends gn{constructor(){super("twitter.com")}static credential(e,n){return vt._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return et.credential(n,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await me._fromIdTokenResponse(e,r,s),o=wi(r);return new Nt({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=wi(r);return new Nt({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function wi(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ot{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$n.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $n(e,n,r,s)}}function fa(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$n._fromErrorAndOperation(t,i,e,r):i})}async function vd(t,e,n=!1){const r=await cn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Nt._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bd(t,e,n=!1){const{auth:r}=t;if(Pe(r.app))return Promise.reject(mt(r));const s="reauthenticate";try{const i=await cn(t,fa(r,s,e,t),n);P(i.idToken,r,"internal-error");const o=ys(i.idToken);P(o,r,"internal-error");const{sub:a}=o;return P(t.uid===a,r,"user-mismatch"),Nt._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&xe(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yd(t,e,n=!1){if(Pe(t.app))return Promise.reject(mt(t));const r="signIn",s=await fa(t,r,e),i=await Nt._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Id(t,e,n,r){return Mt(t).onIdTokenChanged(e,n,r)}function wd(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}const Vn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vn,"1"),this.storage.removeItem(Vn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=1e3,Td=10;class ha extends da{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=aa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);nd()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Td):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ed)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ha.type="LOCAL";const Sd=ha;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends da{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pa.type="SESSION";const ga=pa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new er(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!o?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async d=>d(n.origin,i)),c=await Cd(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}er.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ts(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const d=Ts("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const g=h;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return window}function Pd(t){ke().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(){return typeof ke().WorkerGlobalScope<"u"&&typeof ke().importScripts=="function"}async function Rd(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Od(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kd(){return ma()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="firebaseLocalStorageDb",Dd=1,jn="firebaseLocalStorage",va="fbase_key";class mn{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function tr(t,e){return t.transaction([jn],e?"readwrite":"readonly").objectStore(jn)}function xd(){const t=indexedDB.deleteDatabase(_a);return new mn(t).toPromise()}function jr(){const t=indexedDB.open(_a,Dd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(jn,{keyPath:va})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(jn)?e(r):(r.close(),await xd(),e(await jr()))})})}async function Ei(t,e,n){const r=tr(t,!0).put({[va]:e,value:n});return new mn(r).toPromise()}async function Nd(t,e){const n=tr(t,!1).get(e),r=await new mn(n).toPromise();return r===void 0?null:r.value}function Ti(t,e){const n=tr(t,!0).delete(e);return new mn(n).toPromise()}const Md=800,Ld=3;class ba{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jr(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ld)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ma()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=er._getInstance(kd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Rd(),!this.activeServiceWorker)return;this.sender=new Ad(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Od()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jr();return await Ei(e,Vn,"1"),await Ti(e,Vn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ei(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Nd(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ti(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=tr(s,!1).getAll();return new mn(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Md)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ba.type="LOCAL";const Ud=ba;new pn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(t,e){return e?Be(e):(P(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss extends ua{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Rt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Fd(t){return yd(t.auth,new Ss(t),t.bypassAuthState)}function Hd(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),bd(n,new Ss(t),t.bypassAuthState)}async function Bd(t){const{auth:e,user:n}=t;return P(n,e,"internal-error"),vd(n,new Ss(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fd;case"linkViaPopup":case"linkViaRedirect":return Bd;case"reauthViaPopup":case"reauthViaRedirect":return Hd;default:xe(this.auth,"internal-error")}}resolve(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ze(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new pn(2e3,1e4);async function Vd(t,e,n){if(Pe(t.app))return Promise.reject(be(t,"operation-not-supported-in-this-environment"));const r=Qn(t);Ff(t,e,Es);const s=ya(r,n);return new pt(r,"signInViaPopup",e,s).executeNotNull()}class pt extends Ia{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,pt.currentPopupAction&&pt.currentPopupAction.cancel(),pt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return P(e,this.auth,"internal-error"),e}async onExecution(){ze(this.filter.length===1,"Popup operations only handle one event");const e=Ts();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$d.get())};e()}}pt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd="pendingRedirect",On=new Map;class Wd extends Ia{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=On.get(this.auth._key());if(!e){try{const r=await zd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}On.set(this.auth._key(),e)}return this.bypassAuthState||On.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function zd(t,e){const n=qd(e),r=Gd(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Kd(t,e){On.set(t._key(),e)}function Gd(t){return Be(t._redirectPersistence)}function qd(t){return Rn(jd,t.config.apiKey,t.name)}async function Jd(t,e,n=!1){if(Pe(t.app))return Promise.reject(mt(t));const r=Qn(t),s=ya(r,e),o=await new Wd(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd=10*60*1e3;class Xd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Zd(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wa(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(be(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Si(e))}saveEventToCache(e){this.cachedEventUids.add(Si(e)),this.lastProcessedEventTime=Date.now()}}function Si(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wa({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function Zd(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wa(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qd(t,e={}){return Lt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,th=/^https?/;async function nh(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Qd(t);for(const n of e)try{if(rh(n))return}catch{}xe(t,"unauthorized-domain")}function rh(t){const e=$r(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!th.test(n))return!1;if(eh.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new pn(3e4,6e4);function Ci(){const t=ke().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ih(t){return new Promise((e,n)=>{var r,s,i;function o(){Ci(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ci(),n(be(t,"network-request-failed"))},timeout:sh.get()})}if(!((s=(r=ke().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ke().gapi)===null||i===void 0)&&i.load)o();else{const a=fd("iframefcb");return ke()[a]=()=>{gapi.load?o():n(be(t,"network-request-failed"))},ld(`${ud()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw kn=null,e})}let kn=null;function oh(t){return kn=kn||ih(t),kn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new pn(5e3,15e3),ch="__/auth/iframe",lh="emulator/auth/iframe",uh={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},fh=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dh(t){const e=t.config;P(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vs(e,lh):`https://${t.config.authDomain}/${ch}`,r={apiKey:e.apiKey,appName:t.name,v:hn},s=fh.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${dn(r).slice(1)}`}async function hh(t){const e=await oh(t),n=ke().gapi;return P(n,t,"internal-error"),e.open({where:document.body,url:dh(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uh,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=be(t,"network-request-failed"),a=ke().setTimeout(()=>{i(o)},ah.get());function c(){ke().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},gh=500,mh=600,_h="_blank",vh="http://localhost";class Ai{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bh(t,e,n,r=gh,s=mh){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ph),{width:r.toString(),height:s.toString(),top:i,left:o}),d=oe().toLowerCase();n&&(a=na(d)?_h:n),ea(d)&&(e=e||vh,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[w,O])=>`${g}${w}=${O},`,"");if(td(d)&&a!=="_self")return yh(e||"",a),new Ai(null);const h=window.open(e||"",a,f);P(h,t,"popup-blocked");try{h.focus()}catch{}return new Ai(h)}function yh(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="__/auth/handler",wh="emulator/auth/handler",Eh=encodeURIComponent("fac");async function Pi(t,e,n,r,s,i){P(t.config.authDomain,t,"auth-domain-config-required"),P(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:hn,eventId:s};if(e instanceof Es){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",wu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,h]of Object.entries({}))o[f]=h}if(e instanceof gn){const f=e.getScopes().filter(h=>h!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),d=c?`#${Eh}=${encodeURIComponent(c)}`:"";return`${Th(t)}?${dn(a).slice(1)}${d}`}function Th({config:t}){return t.emulator?vs(t,wh):`https://${t.authDomain}/${Ih}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="webStorageSupport";class Sh{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ga,this._completeRedirectFn=Jd,this._overrideRedirectResult=Kd}async _openPopup(e,n,r,s){var i;ze((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Pi(e,n,r,$r(),s);return bh(e,o,Ts())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Pi(e,n,r,$r(),s);return Pd(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ze(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await hh(e),r=new Xd(e);return n.register("authEvent",s=>(P(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wr,{type:wr},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[wr];o!==void 0&&n(!!o),xe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nh(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return aa()||ta()||Is()}}const Ch=Sh;var Ri="@firebase/auth",Oi="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){P(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Rh(t){on(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;P(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ca(t)},d=new ad(r,s,i,c);return hd(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),on(new xt("auth-internal",e=>{const n=Qn(e.getProvider("auth").getImmediate());return(r=>new Ah(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ct(Ri,Oi,Ph(t)),Ct(Ri,Oi,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=5*60,kh=Ho("authIdTokenMaxAge")||Oh;let ki=null;const Dh=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kh)return;const s=n?.token;ki!==s&&(ki=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function xh(t=Sf()){const e=jo(t,"auth");if(e.isInitialized())return e.getImmediate();const n=dd(t,{popupRedirectResolver:Ch,persistence:[Ud,Sd,ga]}),r=Ho("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Dh(i.toString());wd(n,o,()=>o(n.currentUser)),Id(n,a=>o(a))}}const s=ou("auth");return s&&pd(n,`http://${s}`),n}function Nh(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}cd({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=be("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Nh().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Rh("Browser");const Mh={class:"p-4"},Lh={__name:"loginGoogle",setup(t){async function e(){const n=new Fe;try{const s=(await Vd(Kh,n)).user;alert(`Bienvenido, ${s.displayName}`)}catch(r){alert("Error al iniciar sesión: "+r.message)}}return(n,r)=>(ls(),us("div",Mh,[X("button",{onClick:e,class:"bg-red-500 text-white px-4 py-2 rounded"}," Iniciar sesión con Google ")]))}},Ea=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Uh={class:"card"},Fh={__name:"HelloWorld",props:{msg:String},setup(t){const e=oc(0);return(n,r)=>(ls(),us(ge,null,[X("h1",null,Tr(t.msg),1),X("div",Uh,[X("button",{type:"button",onClick:r[0]||(r[0]=s=>e.value++)},"count is "+Tr(e.value),1),r[1]||(r[1]=X("p",null,[dt(" Edit "),X("code",null,"components/HelloWorld.vue"),dt(" to test HMR ")],-1))]),r[2]||(r[2]=X("p",null,[dt(" Check out "),X("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),dt(", the official Vue + Vite starter ")],-1)),r[3]||(r[3]=X("p",null,[dt(" Learn more about IDE Support for Vue in the "),X("a",{href:"https://vuejs.org/guide/scaling-up/tooling.html#ide-support",target:"_blank"},"Vue Docs Scaling up Guide"),dt(". ")],-1)),r[4]||(r[4]=X("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1))],64))}},Hh=Ea(Fh,[["__scopeId","data-v-830e400e"]]),Bh={__name:"App",setup(t){return(e,n)=>(ls(),us(ge,null,[n[0]||(n[0]=X("div",null,[X("a",{href:"https://vite.dev",target:"_blank"},[X("img",{src:Yl,class:"logo",alt:"Vite logo"})]),X("a",{href:"https://vuejs.org/",target:"_blank"},[X("img",{src:Xl,class:"logo vue",alt:"Vue logo"})])],-1)),$e(Lh),$e(Hh,{msg:"Vite + Vue"})],64))}},$h=Ea(Bh,[["__scopeId","data-v-e3208713"]]);var Vh="firebase",jh="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(Vh,jh,"app");console.log("AIzaSyDyVHdyeRnZvjku7P1AIKL9lV_b7D0E1z8");const Wh={projectId:"hayfulbito-a200a",storageBucket:"hayfulbito-a200a.firebasestorage.app",messagingSenderId:"138672255337",appId:"1:138672255337:web:f8dddc55e0048cc1638df8",measurementId:"G-LY8KKR468W",apiKey:"AIzaSyDyVHdyeRnZvjku7P1AIKL9lV_b7D0E1z8",authDomain:"hayfulbito-a200a.firebaseapp.com"},zh=Wo(Wh),Kh=xh(zh);Gl($h).mount("#app");
