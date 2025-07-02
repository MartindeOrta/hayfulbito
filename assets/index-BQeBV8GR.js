(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Wl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Pe={},Ur=[],Gt=()=>{},R_=()=>!1,$o=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Kl=n=>n.startsWith("onUpdate:"),ht=Object.assign,Gl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},S_=Object.prototype.hasOwnProperty,be=(n,e)=>S_.call(n,e),he=Array.isArray,xs=n=>Ho(n)==="[object Map]",P_=n=>Ho(n)==="[object Set]",ue=n=>typeof n=="function",ze=n=>typeof n=="string",is=n=>typeof n=="symbol",Be=n=>n!==null&&typeof n=="object",md=n=>(Be(n)||ue(n))&&ue(n.then)&&ue(n.catch),C_=Object.prototype.toString,Ho=n=>C_.call(n),k_=n=>Ho(n).slice(8,-1),V_=n=>Ho(n)==="[object Object]",Ql=n=>ze(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ms=Wl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},D_=/-(\w)/g,Vt=qo(n=>n.replace(D_,(e,t)=>t?t.toUpperCase():"")),O_=/\B([A-Z])/g,Tr=qo(n=>n.replace(O_,"-$1").toLowerCase()),zo=qo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Da=qo(n=>n?`on${zo(n)}`:""),$n=(n,e)=>!Object.is(n,e),no=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},nl=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},rl=n=>{const e=parseFloat(n);return isNaN(e)?n:e},N_=n=>{const e=ze(n)?Number(n):NaN;return isNaN(e)?n:e};let Xu;const Wo=()=>Xu||(Xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jl(n){if(he(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=ze(r)?F_(r):Jl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(n)||Be(n))return n}const x_=/;(?![^(]*\))/g,M_=/:([^]+)/,L_=/\/\*[^]*?\*\//g;function F_(n){const e={};return n.replace(L_,"").split(x_).forEach(t=>{if(t){const r=t.split(M_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xl(n){let e="";if(ze(n))e=n;else if(he(n))for(let t=0;t<n.length;t++){const r=Xl(n[t]);r&&(e+=r+" ")}else if(Be(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const U_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",B_=Wl(U_);function _d(n){return!!n||n===""}/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yt;class j_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=yt;try{return yt=this,e()}finally{yt=t}}}on(){++this._on===1&&(this.prevScope=yt,yt=this)}off(){this._on>0&&--this._on===0&&(yt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function $_(){return yt}let ke;const Oa=new WeakSet;class yd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,yt&&yt.active&&yt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Oa.has(this)&&(Oa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ed(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Yu(this),Td(this);const e=ke,t=Bt;ke=this,Bt=!0;try{return this.fn()}finally{Id(this),ke=e,Bt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ec(e);this.deps=this.depsTail=void 0,Yu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Oa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sl(this)&&this.run()}get dirty(){return sl(this)}}let vd=0,Ls,Fs;function Ed(n,e=!1){if(n.flags|=8,e){n.next=Fs,Fs=n;return}n.next=Ls,Ls=n}function Yl(){vd++}function Zl(){if(--vd>0)return;if(Fs){let e=Fs;for(Fs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Ls;){let e=Ls;for(Ls=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function Td(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Id(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ec(r),H_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function sl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(wd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function wd(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Zs)||(n.globalVersion=Zs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!sl(n))))return;n.flags|=2;const e=n.dep,t=ke,r=Bt;ke=n,Bt=!0;try{Td(n);const s=n.fn(n._value);(e.version===0||$n(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=t,Bt=r,Id(n),n.flags&=-3}}function ec(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ec(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function H_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Bt=!0;const Ad=[];function vn(){Ad.push(Bt),Bt=!1}function En(){const n=Ad.pop();Bt=n===void 0?!0:n}function Yu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ke;ke=void 0;try{e()}finally{ke=t}}}let Zs=0;class q_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class tc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Bt||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new q_(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,bd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(e){this.version++,Zs++,this.notify(e)}notify(e){Yl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Zl()}}}function bd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)bd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const il=new WeakMap,fr=Symbol(""),ol=Symbol(""),ei=Symbol("");function at(n,e,t){if(Bt&&ke){let r=il.get(n);r||il.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new tc),s.map=r,s.key=t),s.track()}}function dn(n,e,t,r,s,i){const a=il.get(n);if(!a){Zs++;return}const l=c=>{c&&c.trigger()};if(Yl(),e==="clear")a.forEach(l);else{const c=he(n),h=c&&Ql(t);if(c&&t==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===ei||!is(g)&&g>=f)&&l(p)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(ei)),e){case"add":c?h&&l(a.get("length")):(l(a.get(fr)),xs(n)&&l(a.get(ol)));break;case"delete":c||(l(a.get(fr)),xs(n)&&l(a.get(ol)));break;case"set":xs(n)&&l(a.get(fr));break}}Zl()}function kr(n){const e=Ae(n);return e===n?e:(at(e,"iterate",ei),jt(n)?e:e.map(gt))}function nc(n){return at(n=Ae(n),"iterate",ei),n}const z_={__proto__:null,[Symbol.iterator](){return Na(this,Symbol.iterator,gt)},concat(...n){return kr(this).concat(...n.map(e=>he(e)?kr(e):e))},entries(){return Na(this,"entries",n=>(n[1]=gt(n[1]),n))},every(n,e){return cn(this,"every",n,e,void 0,arguments)},filter(n,e){return cn(this,"filter",n,e,t=>t.map(gt),arguments)},find(n,e){return cn(this,"find",n,e,gt,arguments)},findIndex(n,e){return cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return cn(this,"findLast",n,e,gt,arguments)},findLastIndex(n,e){return cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return xa(this,"includes",n)},indexOf(...n){return xa(this,"indexOf",n)},join(n){return kr(this).join(n)},lastIndexOf(...n){return xa(this,"lastIndexOf",n)},map(n,e){return cn(this,"map",n,e,void 0,arguments)},pop(){return Rs(this,"pop")},push(...n){return Rs(this,"push",n)},reduce(n,...e){return Zu(this,"reduce",n,e)},reduceRight(n,...e){return Zu(this,"reduceRight",n,e)},shift(){return Rs(this,"shift")},some(n,e){return cn(this,"some",n,e,void 0,arguments)},splice(...n){return Rs(this,"splice",n)},toReversed(){return kr(this).toReversed()},toSorted(n){return kr(this).toSorted(n)},toSpliced(...n){return kr(this).toSpliced(...n)},unshift(...n){return Rs(this,"unshift",n)},values(){return Na(this,"values",gt)}};function Na(n,e,t){const r=nc(n),s=r[e]();return r!==n&&!jt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=t(i.value)),i}),s}const W_=Array.prototype;function cn(n,e,t,r,s,i){const a=nc(n),l=a!==n&&!jt(n),c=a[e];if(c!==W_[e]){const p=c.apply(n,i);return l?gt(p):p}let h=t;a!==n&&(l?h=function(p,g){return t.call(this,gt(p),g,n)}:t.length>2&&(h=function(p,g){return t.call(this,p,g,n)}));const f=c.call(a,h,r);return l&&s?s(f):f}function Zu(n,e,t,r){const s=nc(n);let i=t;return s!==n&&(jt(n)?t.length>3&&(i=function(a,l,c){return t.call(this,a,l,c,n)}):i=function(a,l,c){return t.call(this,a,gt(l),c,n)}),s[e](i,...r)}function xa(n,e,t){const r=Ae(n);at(r,"iterate",ei);const s=r[e](...t);return(s===-1||s===!1)&&ic(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function Rs(n,e,t=[]){vn(),Yl();const r=Ae(n)[e].apply(n,t);return Zl(),En(),r}const K_=Wl("__proto__,__v_isRef,__isVue"),Rd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(is));function G_(n){is(n)||(n=String(n));const e=Ae(this);return at(e,"has",n),e.hasOwnProperty(n)}class Sd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?sy:Vd:i?kd:Cd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=he(e);if(!s){let c;if(a&&(c=z_[t]))return c;if(t==="hasOwnProperty")return G_}const l=Reflect.get(e,t,ut(e)?e:r);return(is(t)?Rd.has(t):K_(t))||(s||at(e,"get",t),i)?l:ut(l)?a&&Ql(t)?l:l.value:Be(l)?s?Od(l):Ko(l):l}}class Pd extends Sd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];if(!this._isShallow){const c=gr(i);if(!jt(r)&&!gr(r)&&(i=Ae(i),r=Ae(r)),!he(e)&&ut(i)&&!ut(r))return c?!1:(i.value=r,!0)}const a=he(e)&&Ql(t)?Number(t)<e.length:be(e,t),l=Reflect.set(e,t,r,ut(e)?e:s);return e===Ae(s)&&(a?$n(r,i)&&dn(e,"set",t,r):dn(e,"add",t,r)),l}deleteProperty(e,t){const r=be(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&dn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!is(t)||!Rd.has(t))&&at(e,"has",t),r}ownKeys(e){return at(e,"iterate",he(e)?"length":fr),Reflect.ownKeys(e)}}class Q_ extends Sd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const J_=new Pd,X_=new Q_,Y_=new Pd(!0);const al=n=>n,Ki=n=>Reflect.getPrototypeOf(n);function Z_(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),a=xs(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),f=t?al:e?ll:gt;return!e&&at(i,"iterate",c?ol:fr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Gi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function ey(n,e){const t={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);n||($n(s,l)&&at(a,"get",s),at(a,"get",l));const{has:c}=Ki(a),h=e?al:n?ll:gt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&at(Ae(s),"iterate",fr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return n||($n(s,l)&&at(a,"has",s),at(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),h=e?al:n?ll:gt;return!n&&at(c,"iterate",fr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return ht(t,n?{add:Gi("add"),set:Gi("set"),delete:Gi("delete"),clear:Gi("clear")}:{add(s){!e&&!jt(s)&&!gr(s)&&(s=Ae(s));const i=Ae(this);return Ki(i).has.call(i,s)||(i.add(s),dn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!gr(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=Ki(a);let h=l.call(a,s);h||(s=Ae(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?$n(i,f)&&dn(a,"set",s,i):dn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=Ki(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&dn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&dn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=Z_(s,n,e)}),t}function rc(n,e){const t=ey(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(be(t,s)&&s in r?t:r,s,i)}const ty={get:rc(!1,!1)},ny={get:rc(!1,!0)},ry={get:rc(!0,!1)};const Cd=new WeakMap,kd=new WeakMap,Vd=new WeakMap,sy=new WeakMap;function iy(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oy(n){return n.__v_skip||!Object.isExtensible(n)?0:iy(k_(n))}function Ko(n){return gr(n)?n:sc(n,!1,J_,ty,Cd)}function Dd(n){return sc(n,!1,Y_,ny,kd)}function Od(n){return sc(n,!0,X_,ry,Vd)}function sc(n,e,t,r,s){if(!Be(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=oy(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function Us(n){return gr(n)?Us(n.__v_raw):!!(n&&n.__v_isReactive)}function gr(n){return!!(n&&n.__v_isReadonly)}function jt(n){return!!(n&&n.__v_isShallow)}function ic(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function ay(n){return!be(n,"__v_skip")&&Object.isExtensible(n)&&nl(n,"__v_skip",!0),n}const gt=n=>Be(n)?Ko(n):n,ll=n=>Be(n)?Od(n):n;function ut(n){return n?n.__v_isRef===!0:!1}function Vr(n){return Nd(n,!1)}function ly(n){return Nd(n,!0)}function Nd(n,e){return ut(n)?n:new cy(n,e)}class cy{constructor(e,t){this.dep=new tc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:gt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||jt(e)||gr(e);e=r?e:Ae(e),$n(e,t)&&(this._rawValue=e,this._value=r?e:gt(e),this.dep.trigger())}}function Br(n){return ut(n)?n.value:n}const uy={get:(n,e,t)=>e==="__v_raw"?n:Br(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ut(s)&&!ut(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function xd(n){return Us(n)?n:new Proxy(n,uy)}class hy{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new tc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return Ed(this,!0),!0}get value(){const e=this.dep.track();return wd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function fy(n,e,t=!1){let r,s;return ue(n)?r=n:(r=n.get,s=n.set),new hy(r,s,t)}const Qi={},yo=new WeakMap;let lr;function dy(n,e=!1,t=lr){if(t){let r=yo.get(t);r||yo.set(t,r=[]),r.push(n)}}function py(n,e,t=Pe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=q=>s?q:jt(q)||s===!1||s===0?pn(q,1):pn(q);let f,p,g,_,C=!1,V=!1;if(ut(n)?(p=()=>n.value,C=jt(n)):Us(n)?(p=()=>h(n),C=!0):he(n)?(V=!0,C=n.some(q=>Us(q)||jt(q)),p=()=>n.map(q=>{if(ut(q))return q.value;if(Us(q))return h(q);if(ue(q))return c?c(q,2):q()})):ue(n)?e?p=c?()=>c(n,2):n:p=()=>{if(g){vn();try{g()}finally{En()}}const q=lr;lr=f;try{return c?c(n,3,[_]):n(_)}finally{lr=q}}:p=Gt,e&&s){const q=p,Q=s===!0?1/0:s;p=()=>pn(q(),Q)}const D=$_(),$=()=>{f.stop(),D&&D.active&&Gl(D.effects,f)};if(i&&e){const q=e;e=(...Q)=>{q(...Q),$()}}let F=V?new Array(n.length).fill(Qi):Qi;const j=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const Q=f.run();if(s||C||(V?Q.some((Z,A)=>$n(Z,F[A])):$n(Q,F))){g&&g();const Z=lr;lr=f;try{const A=[Q,F===Qi?void 0:V&&F[0]===Qi?[]:F,_];F=Q,c?c(e,3,A):e(...A)}finally{lr=Z}}}else f.run()};return l&&l(j),f=new yd(p),f.scheduler=a?()=>a(j,!1):j,_=q=>dy(q,!1,f),g=f.onStop=()=>{const q=yo.get(f);if(q){if(c)c(q,4);else for(const Q of q)Q();yo.delete(f)}},e?r?j(!0):F=f.run():a?a(j.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function pn(n,e=1/0,t){if(e<=0||!Be(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,ut(n))pn(n.value,e,t);else if(he(n))for(let r=0;r<n.length;r++)pn(n[r],e,t);else if(P_(n)||xs(n))n.forEach(r=>{pn(r,e,t)});else if(V_(n)){for(const r in n)pn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&pn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function yi(n,e,t,r){try{return r?n(...r):n()}catch(s){vi(s,e,t)}}function tn(n,e,t,r){if(ue(n)){const s=yi(n,e,t,r);return s&&md(s)&&s.catch(i=>{vi(i,e,t)}),s}if(he(n)){const s=[];for(let i=0;i<n.length;i++)s.push(tn(n[i],e,t,r));return s}}function vi(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Pe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](n,c,h)===!1)return}l=l.parent}if(i){vn(),yi(i,null,10,[n,c,h]),En();return}}gy(n,t,s,r,a)}function gy(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const mt=[];let Wt=-1;const jr=[];let Nn=null,Dr=0;const Md=Promise.resolve();let vo=null;function Ld(n){const e=vo||Md;return n?e.then(this?n.bind(this):n):e}function my(n){let e=Wt+1,t=mt.length;for(;e<t;){const r=e+t>>>1,s=mt[r],i=ti(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function oc(n){if(!(n.flags&1)){const e=ti(n),t=mt[mt.length-1];!t||!(n.flags&2)&&e>=ti(t)?mt.push(n):mt.splice(my(e),0,n),n.flags|=1,Fd()}}function Fd(){vo||(vo=Md.then(Bd))}function cl(n){he(n)?jr.push(...n):Nn&&n.id===-1?Nn.splice(Dr+1,0,n):n.flags&1||(jr.push(n),n.flags|=1),Fd()}function eh(n,e,t=Wt+1){for(;t<mt.length;t++){const r=mt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;mt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ud(n){if(jr.length){const e=[...new Set(jr)].sort((t,r)=>ti(t)-ti(r));if(jr.length=0,Nn){Nn.push(...e);return}for(Nn=e,Dr=0;Dr<Nn.length;Dr++){const t=Nn[Dr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Nn=null,Dr=0}}const ti=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Bd(n){try{for(Wt=0;Wt<mt.length;Wt++){const e=mt[Wt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),yi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Wt<mt.length;Wt++){const e=mt[Wt];e&&(e.flags&=-2)}Wt=-1,mt.length=0,Ud(),vo=null,(mt.length||jr.length)&&Bd()}}let bt=null,jd=null;function Eo(n){const e=bt;return bt=n,jd=n&&n.type.__scopeId||null,e}function ul(n,e=bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&hh(-1);const i=Eo(e);let a;try{a=n(...s)}finally{Eo(i),r._d&&hh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Ss(n,e){if(bt===null)return n;const t=Yo(bt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Pe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&pn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function or(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(vn(),tn(c,t,8,[n.el,l,n,e]),En())}}const _y=Symbol("_vte"),yy=n=>n.__isTeleport;function ac(n,e){n.shapeFlag&6&&n.component?(n.transition=e,ac(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function $d(n,e){return ue(n)?ht({name:n.name},e,{setup:n}):n}function Hd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Bs(n,e,t,r,s=!1){if(he(n)){n.forEach((C,V)=>Bs(C,e&&(he(e)?e[V]:e),t,r,s));return}if(js(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Bs(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Yo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,f=l.refs===Pe?l.refs={}:l.refs,p=l.setupState,g=Ae(p),_=p===Pe?()=>!1:C=>be(g,C);if(h!=null&&h!==c&&(ze(h)?(f[h]=null,_(h)&&(p[h]=null)):ut(h)&&(h.value=null)),ue(c))yi(c,l,12,[a,f]);else{const C=ze(c),V=ut(c);if(C||V){const D=()=>{if(n.f){const $=C?_(c)?p[c]:f[c]:c.value;s?he($)&&Gl($,i):he($)?$.includes(i)||$.push(i):C?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],n.k&&(f[n.k]=c.value))}else C?(f[c]=a,_(c)&&(p[c]=a)):V&&(c.value=a,n.k&&(f[n.k]=a))};a?(D.id=-1,At(D,t)):D()}}}Wo().requestIdleCallback;Wo().cancelIdleCallback;const js=n=>!!n.type.__asyncLoader,qd=n=>n.type.__isKeepAlive;function vy(n,e){zd(n,"a",e)}function Ey(n,e){zd(n,"da",e)}function zd(n,e,t=ct){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Go(e,r,t),t){let s=t.parent;for(;s&&s.parent;)qd(s.parent.vnode)&&Ty(r,e,t,s),s=s.parent}}function Ty(n,e,t,r){const s=Go(e,n,r,!0);Wd(()=>{Gl(r[e],s)},t)}function Go(n,e,t=ct,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{vn();const l=Ei(t),c=tn(e,t,n,a);return l(),En(),c});return r?s.unshift(i):s.push(i),i}}const bn=n=>(e,t=ct)=>{(!si||n==="sp")&&Go(n,(...r)=>e(...r),t)},Iy=bn("bm"),wy=bn("m"),Ay=bn("bu"),by=bn("u"),Ry=bn("bum"),Wd=bn("um"),Sy=bn("sp"),Py=bn("rtg"),Cy=bn("rtc");function ky(n,e=ct){Go("ec",n,e)}const Vy="components";function Dy(n,e){return Ny(Vy,n,!0,e)||n}const Oy=Symbol.for("v-ndc");function Ny(n,e,t=!0,r=!1){const s=bt||ct;if(s){const i=s.type;{const l=Pv(i,!1);if(l&&(l===e||l===Vt(e)||l===zo(Vt(e))))return i}const a=th(s[n]||i[n],e)||th(s.appContext[n],e);return!a&&r?i:a}}function th(n,e){return n&&(n[e]||n[Vt(e)]||n[zo(Vt(e))])}const hl=n=>n?gp(n)?Yo(n):hl(n.parent):null,$s=ht(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hl(n.parent),$root:n=>hl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Gd(n),$forceUpdate:n=>n.f||(n.f=()=>{oc(n.update)}),$nextTick:n=>n.n||(n.n=Ld.bind(n.proxy)),$watch:n=>tv.bind(n)}),Ma=(n,e)=>n!==Pe&&!n.__isScriptSetup&&be(n,e),xy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;let h;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Ma(r,e))return a[e]=1,r[e];if(s!==Pe&&be(s,e))return a[e]=2,s[e];if((h=n.propsOptions[0])&&be(h,e))return a[e]=3,i[e];if(t!==Pe&&be(t,e))return a[e]=4,t[e];fl&&(a[e]=0)}}const f=$s[e];let p,g;if(f)return e==="$attrs"&&at(n.attrs,"get",""),f(n);if((p=l.__cssModules)&&(p=p[e]))return p;if(t!==Pe&&be(t,e))return a[e]=4,t[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Ma(s,e)?(s[e]=t,!0):r!==Pe&&be(r,e)?(r[e]=t,!0):be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!t[a]||n!==Pe&&be(n,a)||Ma(e,a)||(l=i[0])&&be(l,a)||be(r,a)||be($s,a)||be(s.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function nh(n){return he(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let fl=!0;function My(n){const e=Gd(n),t=n.proxy,r=n.ctx;fl=!1,e.beforeCreate&&rh(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:V,deactivated:D,beforeDestroy:$,beforeUnmount:F,destroyed:j,unmounted:q,render:Q,renderTracked:Z,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:w,inheritAttrs:b,components:R,directives:T,filters:Le}=e;if(h&&Ly(h,r,null),a)for(const ge in a){const me=a[ge];ue(me)&&(r[ge]=me.bind(t))}if(s){const ge=s.call(t,t);Be(ge)&&(n.data=Ko(ge))}if(fl=!0,i)for(const ge in i){const me=i[ge],It=ue(me)?me.bind(t,t):ue(me.get)?me.get.bind(t,t):Gt,Dt=!ue(me)&&ue(me.set)?me.set.bind(t):Gt,Rt=Mt({get:It,set:Dt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Rt.value,set:Oe=>Rt.value=Oe})}if(l)for(const ge in l)Kd(l[ge],r,t,ge);if(c){const ge=ue(c)?c.call(t):c;Reflect.ownKeys(ge).forEach(me=>{ro(me,ge[me])})}f&&rh(f,n,"c");function Ce(ge,me){he(me)?me.forEach(It=>ge(It.bind(t))):me&&ge(me.bind(t))}if(Ce(Iy,p),Ce(wy,g),Ce(Ay,_),Ce(by,C),Ce(vy,V),Ce(Ey,D),Ce(ky,y),Ce(Cy,Z),Ce(Py,A),Ce(Ry,F),Ce(Wd,q),Ce(Sy,E),he(w))if(w.length){const ge=n.exposed||(n.exposed={});w.forEach(me=>{Object.defineProperty(ge,me,{get:()=>t[me],set:It=>t[me]=It})})}else n.exposed||(n.exposed={});Q&&n.render===Gt&&(n.render=Q),b!=null&&(n.inheritAttrs=b),R&&(n.components=R),T&&(n.directives=T),E&&Hd(n)}function Ly(n,e,t=Gt){he(n)&&(n=dl(n));for(const r in n){const s=n[r];let i;Be(s)?"default"in s?i=Qt(s.from||r,s.default,!0):i=Qt(s.from||r):i=Qt(s),ut(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function rh(n,e,t){tn(he(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Kd(n,e,t,r){let s=r.includes(".")?ap(t,r):()=>t[r];if(ze(n)){const i=e[n];ue(i)&&so(s,i)}else if(ue(n))so(s,n.bind(t));else if(Be(n))if(he(n))n.forEach(i=>Kd(i,e,t,r));else{const i=ue(n.handler)?n.handler.bind(t):e[n.handler];ue(i)&&so(s,i,n)}}function Gd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>To(c,h,a,!0)),To(c,e,a)),Be(e)&&i.set(e,c),c}function To(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&To(n,i,t,!0),s&&s.forEach(a=>To(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=Fy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const Fy={data:sh,props:ih,emits:ih,methods:ks,computed:ks,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:ks,directives:ks,watch:By,provide:sh,inject:Uy};function sh(n,e){return e?n?function(){return ht(ue(n)?n.call(this,this):n,ue(e)?e.call(this,this):e)}:e:n}function Uy(n,e){return ks(dl(n),dl(e))}function dl(n){if(he(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function pt(n,e){return n?[...new Set([].concat(n,e))]:e}function ks(n,e){return n?ht(Object.create(null),n,e):e}function ih(n,e){return n?he(n)&&he(e)?[...new Set([...n,...e])]:ht(Object.create(null),nh(n),nh(e??{})):e}function By(n,e){if(!n)return e;if(!e)return n;const t=ht(Object.create(null),n);for(const r in e)t[r]=pt(n[r],e[r]);return t}function Qd(){return{app:null,config:{isNativeTag:R_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jy=0;function $y(n,e){return function(r,s=null){ue(r)||(r=ht({},r)),s!=null&&!Be(s)&&(s=null);const i=Qd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:jy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ue(f.install)?(a.add(f),f.install(h,...p)):ue(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const _=h._ceVNode||Tt(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),n(_,f,g),c=!0,h._container=f,f.__vue_app__=h,Yo(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=$r;$r=h;try{return f()}finally{$r=p}}};return h}}let $r=null;function ro(n,e){if(ct){let t=ct.provides;const r=ct.parent&&ct.parent.provides;r===t&&(t=ct.provides=Object.create(r)),t[n]=e}}function Qt(n,e,t=!1){const r=ct||bt;if(r||$r){let s=$r?$r._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ue(e)?e.call(r&&r.proxy):e}}const Jd={},Xd=()=>Object.create(Jd),Yd=n=>Object.getPrototypeOf(n)===Jd;function Hy(n,e,t,r=!1){const s={},i=Xd();n.propsDefaults=Object.create(null),Zd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Dd(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function qy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Ae(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=n.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(Qo(n.emitsOptions,g))continue;const _=e[g];if(c)if(be(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=Vt(g);s[C]=pl(c,l,C,_,n,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{Zd(n,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!be(e,p)&&((f=Tr(p))===p||!be(e,f)))&&(c?t&&(t[p]!==void 0||t[f]!==void 0)&&(s[p]=pl(c,l,p,void 0,n,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],h=!0)}h&&dn(n.attrs,"set","")}function Zd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ms(c))continue;const h=e[c];let f;s&&be(s,f=Vt(c))?!i||!i.includes(f)?t[f]=h:(l||(l={}))[f]=h:Qo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ae(t),h=l||Pe;for(let f=0;f<i.length;f++){const p=i[f];t[p]=pl(s,c,p,h[p],n,!be(h,p))}}return a}function pl(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=be(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const f=Ei(s);r=h[t]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Tr(t))&&(r=!0))}return r}const zy=new WeakMap;function ep(n,e,t=!1){const r=t?zy:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ue(n)){const f=p=>{c=!0;const[g,_]=ep(p,e,!0);ht(a,g),_&&l.push(..._)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!i&&!c)return Be(n)&&r.set(n,Ur),Ur;if(he(i))for(let f=0;f<i.length;f++){const p=Vt(i[f]);oh(p)&&(a[p]=Pe)}else if(i)for(const f in i){const p=Vt(f);if(oh(p)){const g=i[f],_=a[p]=he(g)||ue(g)?{type:g}:ht({},g),C=_.type;let V=!1,D=!0;if(he(C))for(let $=0;$<C.length;++$){const F=C[$],j=ue(F)&&F.name;if(j==="Boolean"){V=!0;break}else j==="String"&&(D=!1)}else V=ue(C)&&C.name==="Boolean";_[0]=V,_[1]=D,(V||be(_,"default"))&&l.push(p)}}const h=[a,l];return Be(n)&&r.set(n,h),h}function oh(n){return n[0]!=="$"&&!Ms(n)}const lc=n=>n[0]==="_"||n==="$stable",cc=n=>he(n)?n.map(xt):[xt(n)],Wy=(n,e,t)=>{if(e._n)return e;const r=ul((...s)=>cc(e(...s)),t);return r._c=!1,r},tp=(n,e,t)=>{const r=n._ctx;for(const s in n){if(lc(s))continue;const i=n[s];if(ue(i))e[s]=Wy(s,i,r);else if(i!=null){const a=cc(i);e[s]=()=>a}}},np=(n,e)=>{const t=cc(e);n.slots.default=()=>t},rp=(n,e,t)=>{for(const r in e)(t||!lc(r))&&(n[r]=e[r])},Ky=(n,e,t)=>{const r=n.slots=Xd();if(n.vnode.shapeFlag&32){const s=e.__;s&&nl(r,"__",s,!0);const i=e._;i?(rp(r,e,t),t&&nl(r,"_",i,!0)):tp(e,r)}else e&&np(n,e)},Gy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Pe;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:rp(s,e,t):(i=!e.$stable,tp(e,s)),a=e}else e&&(np(n,e),a={default:1});if(i)for(const l in s)!lc(l)&&a[l]==null&&delete s[l]},At=pv;function Qy(n){return Jy(n)}function Jy(n,e){const t=Wo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Gt,insertStaticContent:C}=n,V=(v,I,S,N=null,L=null,x=null,G=void 0,z=null,H=!!I.dynamicChildren)=>{if(v===I)return;v&&!Ln(v,I)&&(N=O(v),Oe(v,L,x,!0),v=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:B,ref:re,shapeFlag:K}=I;switch(B){case Jo:D(v,I,S,N);break;case Gn:$(v,I,S,N);break;case Fa:v==null&&F(I,S,N,G);break;case fn:R(v,I,S,N,L,x,G,z,H);break;default:K&1?Q(v,I,S,N,L,x,G,z,H):K&6?T(v,I,S,N,L,x,G,z,H):(K&64||K&128)&&B.process(v,I,S,N,L,x,G,z,H,ee)}re!=null&&L?Bs(re,v&&v.ref,x,I||v,!I):re==null&&v&&v.ref!=null&&Bs(v.ref,null,x,v,!0)},D=(v,I,S,N)=>{if(v==null)r(I.el=l(I.children),S,N);else{const L=I.el=v.el;I.children!==v.children&&h(L,I.children)}},$=(v,I,S,N)=>{v==null?r(I.el=c(I.children||""),S,N):I.el=v.el},F=(v,I,S,N)=>{[v.el,v.anchor]=C(v.children,I,S,N,v.el,v.anchor)},j=({el:v,anchor:I},S,N)=>{let L;for(;v&&v!==I;)L=g(v),r(v,S,N),v=L;r(I,S,N)},q=({el:v,anchor:I})=>{let S;for(;v&&v!==I;)S=g(v),s(v),v=S;s(I)},Q=(v,I,S,N,L,x,G,z,H)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),v==null?Z(I,S,N,L,x,G,z,H):E(v,I,L,x,G,z,H)},Z=(v,I,S,N,L,x,G,z)=>{let H,B;const{props:re,shapeFlag:K,transition:te,dirs:ae}=v;if(H=v.el=a(v.type,x,re&&re.is,re),K&8?f(H,v.children):K&16&&y(v.children,H,null,N,L,La(v,x),G,z),ae&&or(v,null,N,"created"),A(H,v,v.scopeId,G,N),re){for(const de in re)de!=="value"&&!Ms(de)&&i(H,de,null,re[de],x,N);"value"in re&&i(H,"value",null,re.value,x),(B=re.onVnodeBeforeMount)&&zt(B,N,v)}ae&&or(v,null,N,"beforeMount");const ie=Xy(L,te);ie&&te.beforeEnter(H),r(H,I,S),((B=re&&re.onVnodeMounted)||ie||ae)&&At(()=>{B&&zt(B,N,v),ie&&te.enter(H),ae&&or(v,null,N,"mounted")},L)},A=(v,I,S,N,L)=>{if(S&&_(v,S),N)for(let x=0;x<N.length;x++)_(v,N[x]);if(L){let x=L.subTree;if(I===x||cp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const G=L.vnode;A(v,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(v,I,S,N,L,x,G,z,H=0)=>{for(let B=H;B<v.length;B++){const re=v[B]=z?xn(v[B]):xt(v[B]);V(null,re,I,S,N,L,x,G,z)}},E=(v,I,S,N,L,x,G)=>{const z=I.el=v.el;let{patchFlag:H,dynamicChildren:B,dirs:re}=I;H|=v.patchFlag&16;const K=v.props||Pe,te=I.props||Pe;let ae;if(S&&ar(S,!1),(ae=te.onVnodeBeforeUpdate)&&zt(ae,S,I,v),re&&or(I,v,S,"beforeUpdate"),S&&ar(S,!0),(K.innerHTML&&te.innerHTML==null||K.textContent&&te.textContent==null)&&f(z,""),B?w(v.dynamicChildren,B,z,S,N,La(I,L),x):G||me(v,I,z,null,S,N,La(I,L),x,!1),H>0){if(H&16)b(z,K,te,S,L);else if(H&2&&K.class!==te.class&&i(z,"class",null,te.class,L),H&4&&i(z,"style",K.style,te.style,L),H&8){const ie=I.dynamicProps;for(let de=0;de<ie.length;de++){const ve=ie[de],Qe=K[ve],Je=te[ve];(Je!==Qe||ve==="value")&&i(z,ve,Qe,Je,L,S)}}H&1&&v.children!==I.children&&f(z,I.children)}else!G&&B==null&&b(z,K,te,S,L);((ae=te.onVnodeUpdated)||re)&&At(()=>{ae&&zt(ae,S,I,v),re&&or(I,v,S,"updated")},N)},w=(v,I,S,N,L,x,G)=>{for(let z=0;z<I.length;z++){const H=v[z],B=I[z],re=H.el&&(H.type===fn||!Ln(H,B)||H.shapeFlag&198)?p(H.el):S;V(H,B,re,null,N,L,x,G,!0)}},b=(v,I,S,N,L)=>{if(I!==S){if(I!==Pe)for(const x in I)!Ms(x)&&!(x in S)&&i(v,x,I[x],null,L,N);for(const x in S){if(Ms(x))continue;const G=S[x],z=I[x];G!==z&&x!=="value"&&i(v,x,z,G,L,N)}"value"in S&&i(v,"value",I.value,S.value,L)}},R=(v,I,S,N,L,x,G,z,H)=>{const B=I.el=v?v.el:l(""),re=I.anchor=v?v.anchor:l("");let{patchFlag:K,dynamicChildren:te,slotScopeIds:ae}=I;ae&&(z=z?z.concat(ae):ae),v==null?(r(B,S,N),r(re,S,N),y(I.children||[],S,re,L,x,G,z,H)):K>0&&K&64&&te&&v.dynamicChildren?(w(v.dynamicChildren,te,S,L,x,G,z),(I.key!=null||L&&I===L.subTree)&&sp(v,I,!0)):me(v,I,S,re,L,x,G,z,H)},T=(v,I,S,N,L,x,G,z,H)=>{I.slotScopeIds=z,v==null?I.shapeFlag&512?L.ctx.activate(I,S,N,G,H):Le(I,S,N,L,x,G,H):Ge(v,I,H)},Le=(v,I,S,N,L,x,G)=>{const z=v.component=wv(v,N,L);if(qd(v)&&(z.ctx.renderer=ee),Av(z,!1,G),z.asyncDep){if(L&&L.registerDep(z,Ce,G),!v.el){const H=z.subTree=Tt(Gn);$(null,H,I,S)}}else Ce(z,v,I,S,L,x,G)},Ge=(v,I,S)=>{const N=I.component=v.component;if(av(v,I,S))if(N.asyncDep&&!N.asyncResolved){ge(N,I,S);return}else N.next=I,N.update();else I.el=v.el,N.vnode=I},Ce=(v,I,S,N,L,x,G)=>{const z=()=>{if(v.isMounted){let{next:K,bu:te,u:ae,parent:ie,vnode:de}=v;{const nt=ip(v);if(nt){K&&(K.el=de.el,ge(v,K,G)),nt.asyncDep.then(()=>{v.isUnmounted||z()});return}}let ve=K,Qe;ar(v,!1),K?(K.el=de.el,ge(v,K,G)):K=de,te&&no(te),(Qe=K.props&&K.props.onVnodeBeforeUpdate)&&zt(Qe,ie,K,de),ar(v,!0);const Je=lh(v),St=v.subTree;v.subTree=Je,V(St,Je,p(St.el),O(St),v,L,x),K.el=Je.el,ve===null&&uc(v,Je.el),ae&&At(ae,L),(Qe=K.props&&K.props.onVnodeUpdated)&&At(()=>zt(Qe,ie,K,de),L)}else{let K;const{el:te,props:ae}=I,{bm:ie,m:de,parent:ve,root:Qe,type:Je}=v,St=js(I);ar(v,!1),ie&&no(ie),!St&&(K=ae&&ae.onVnodeBeforeMount)&&zt(K,ve,I),ar(v,!0);{Qe.ce&&Qe.ce._def.shadowRoot!==!1&&Qe.ce._injectChildStyle(Je);const nt=v.subTree=lh(v);V(null,nt,S,N,v,L,x),I.el=nt.el}if(de&&At(de,L),!St&&(K=ae&&ae.onVnodeMounted)){const nt=I;At(()=>zt(K,ve,nt),L)}(I.shapeFlag&256||ve&&js(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&At(v.a,L),v.isMounted=!0,I=S=N=null}};v.scope.on();const H=v.effect=new yd(z);v.scope.off();const B=v.update=H.run.bind(H),re=v.job=H.runIfDirty.bind(H);re.i=v,re.id=v.uid,H.scheduler=()=>oc(re),ar(v,!0),B()},ge=(v,I,S)=>{I.component=v;const N=v.vnode.props;v.vnode=I,v.next=null,qy(v,I.props,N,S),Gy(v,I.children,S),vn(),eh(v),En()},me=(v,I,S,N,L,x,G,z,H=!1)=>{const B=v&&v.children,re=v?v.shapeFlag:0,K=I.children,{patchFlag:te,shapeFlag:ae}=I;if(te>0){if(te&128){Dt(B,K,S,N,L,x,G,z,H);return}else if(te&256){It(B,K,S,N,L,x,G,z,H);return}}ae&8?(re&16&&_t(B,L,x),K!==B&&f(S,K)):re&16?ae&16?Dt(B,K,S,N,L,x,G,z,H):_t(B,L,x,!0):(re&8&&f(S,""),ae&16&&y(K,S,N,L,x,G,z,H))},It=(v,I,S,N,L,x,G,z,H)=>{v=v||Ur,I=I||Ur;const B=v.length,re=I.length,K=Math.min(B,re);let te;for(te=0;te<K;te++){const ae=I[te]=H?xn(I[te]):xt(I[te]);V(v[te],ae,S,null,L,x,G,z,H)}B>re?_t(v,L,x,!0,!1,K):y(I,S,N,L,x,G,z,H,K)},Dt=(v,I,S,N,L,x,G,z,H)=>{let B=0;const re=I.length;let K=v.length-1,te=re-1;for(;B<=K&&B<=te;){const ae=v[B],ie=I[B]=H?xn(I[B]):xt(I[B]);if(Ln(ae,ie))V(ae,ie,S,null,L,x,G,z,H);else break;B++}for(;B<=K&&B<=te;){const ae=v[K],ie=I[te]=H?xn(I[te]):xt(I[te]);if(Ln(ae,ie))V(ae,ie,S,null,L,x,G,z,H);else break;K--,te--}if(B>K){if(B<=te){const ae=te+1,ie=ae<re?I[ae].el:N;for(;B<=te;)V(null,I[B]=H?xn(I[B]):xt(I[B]),S,ie,L,x,G,z,H),B++}}else if(B>te)for(;B<=K;)Oe(v[B],L,x,!0),B++;else{const ae=B,ie=B,de=new Map;for(B=ie;B<=te;B++){const Xe=I[B]=H?xn(I[B]):xt(I[B]);Xe.key!=null&&de.set(Xe.key,B)}let ve,Qe=0;const Je=te-ie+1;let St=!1,nt=0;const Pn=new Array(Je);for(B=0;B<Je;B++)Pn[B]=0;for(B=ae;B<=K;B++){const Xe=v[B];if(Qe>=Je){Oe(Xe,L,x,!0);continue}let Pt;if(Xe.key!=null)Pt=de.get(Xe.key);else for(ve=ie;ve<=te;ve++)if(Pn[ve-ie]===0&&Ln(Xe,I[ve])){Pt=ve;break}Pt===void 0?Oe(Xe,L,x,!0):(Pn[Pt-ie]=B+1,Pt>=nt?nt=Pt:St=!0,V(Xe,I[Pt],S,null,L,x,G,z,H),Qe++)}const ds=St?Yy(Pn):Ur;for(ve=ds.length-1,B=Je-1;B>=0;B--){const Xe=ie+B,Pt=I[Xe],Vi=Xe+1<re?I[Xe+1].el:N;Pn[B]===0?V(null,Pt,S,Vi,L,x,G,z,H):St&&(ve<0||B!==ds[ve]?Rt(Pt,S,Vi,2):ve--)}}},Rt=(v,I,S,N,L=null)=>{const{el:x,type:G,transition:z,children:H,shapeFlag:B}=v;if(B&6){Rt(v.component.subTree,I,S,N);return}if(B&128){v.suspense.move(I,S,N);return}if(B&64){G.move(v,I,S,ee);return}if(G===fn){r(x,I,S);for(let K=0;K<H.length;K++)Rt(H[K],I,S,N);r(v.anchor,I,S);return}if(G===Fa){j(v,I,S);return}if(N!==2&&B&1&&z)if(N===0)z.beforeEnter(x),r(x,I,S),At(()=>z.enter(x),L);else{const{leave:K,delayLeave:te,afterLeave:ae}=z,ie=()=>{v.ctx.isUnmounted?s(x):r(x,I,S)},de=()=>{K(x,()=>{ie(),ae&&ae()})};te?te(x,ie,de):de()}else r(x,I,S)},Oe=(v,I,S,N=!1,L=!1)=>{const{type:x,props:G,ref:z,children:H,dynamicChildren:B,shapeFlag:re,patchFlag:K,dirs:te,cacheIndex:ae}=v;if(K===-2&&(L=!1),z!=null&&(vn(),Bs(z,null,S,v,!0),En()),ae!=null&&(I.renderCache[ae]=void 0),re&256){I.ctx.deactivate(v);return}const ie=re&1&&te,de=!js(v);let ve;if(de&&(ve=G&&G.onVnodeBeforeUnmount)&&zt(ve,I,v),re&6)qt(v.component,S,N);else{if(re&128){v.suspense.unmount(S,N);return}ie&&or(v,null,I,"beforeUnmount"),re&64?v.type.remove(v,I,S,ee,N):B&&!B.hasOnce&&(x!==fn||K>0&&K&64)?_t(B,I,S,!1,!0):(x===fn&&K&384||!L&&re&16)&&_t(H,I,S),N&&Ne(v)}(de&&(ve=G&&G.onVnodeUnmounted)||ie)&&At(()=>{ve&&zt(ve,I,v),ie&&or(v,null,I,"unmounted")},S)},Ne=v=>{const{type:I,el:S,anchor:N,transition:L}=v;if(I===fn){Sn(S,N);return}if(I===Fa){q(v);return}const x=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:z}=L,H=()=>G(S,x);z?z(v.el,x,H):H()}else x()},Sn=(v,I)=>{let S;for(;v!==I;)S=g(v),s(v),v=S;s(I)},qt=(v,I,S)=>{const{bum:N,scope:L,job:x,subTree:G,um:z,m:H,a:B,parent:re,slots:{__:K}}=v;ah(H),ah(B),N&&no(N),re&&he(K)&&K.forEach(te=>{re.renderCache[te]=void 0}),L.stop(),x&&(x.flags|=8,Oe(G,v,I,S)),z&&At(z,I),At(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},_t=(v,I,S,N=!1,L=!1,x=0)=>{for(let G=x;G<v.length;G++)Oe(v[G],I,S,N,L)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=g(v.anchor||v.el),S=I&&I[_y];return S?g(S):I};let Y=!1;const J=(v,I,S)=>{v==null?I._vnode&&Oe(I._vnode,null,null,!0):V(I._vnode||null,v,I,null,null,null,S),I._vnode=v,Y||(Y=!0,eh(),Ud(),Y=!1)},ee={p:V,um:Oe,m:Rt,r:Ne,mt:Le,mc:y,pc:me,pbc:w,n:O,o:n};return{render:J,hydrate:void 0,createApp:$y(J)}}function La({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ar({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Xy(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function sp(n,e,t=!1){const r=n.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=xn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&sp(a,l)),l.type===Jo&&(l.el=a.el),l.type===Gn&&!l.el&&(l.el=a.el)}}function Yy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function ip(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ip(e)}function ah(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Zy=Symbol.for("v-scx"),ev=()=>Qt(Zy);function so(n,e,t){return op(n,e,t)}function op(n,e,t=Pe){const{immediate:r,deep:s,flush:i,once:a}=t,l=ht({},t),c=e&&r||!e&&i!=="post";let h;if(si){if(i==="sync"){const _=ev();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Gt,_.resume=Gt,_.pause=Gt,_}}const f=ct;l.call=(_,C,V)=>tn(_,f,C,V);let p=!1;i==="post"?l.scheduler=_=>{At(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,C)=>{C?_():oc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=py(n,e,l);return si&&(h?h.push(g):c&&g()),g}function tv(n,e,t){const r=this.proxy,s=ze(n)?n.includes(".")?ap(r,n):()=>r[n]:n.bind(r,r);let i;ue(e)?i=e:(i=e.handler,t=e);const a=Ei(this),l=op(s,i.bind(r),t);return a(),l}function ap(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const nv=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Vt(e)}Modifiers`]||n[`${Tr(e)}Modifiers`];function rv(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Pe;let s=t;const i=e.startsWith("update:"),a=i&&nv(r,e.slice(7));a&&(a.trim&&(s=t.map(f=>ze(f)?f.trim():f)),a.number&&(s=t.map(rl)));let l,c=r[l=Da(e)]||r[l=Da(Vt(e))];!c&&i&&(c=r[l=Da(Tr(e))]),c&&tn(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,tn(h,n,6,s)}}function lp(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ue(n)){const c=h=>{const f=lp(h,e,!0);f&&(l=!0,ht(a,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Be(n)&&r.set(n,null),null):(he(i)?i.forEach(c=>a[c]=null):ht(a,i),Be(n)&&r.set(n,a),a)}function Qo(n,e){return!n||!$o(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(n,e[0].toLowerCase()+e.slice(1))||be(n,Tr(e))||be(n,e))}function lh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:C,inheritAttrs:V}=n,D=Eo(n);let $,F;try{if(t.shapeFlag&4){const q=s||r,Q=q;$=xt(h.call(Q,q,f,p,_,g,C)),F=l}else{const q=e;$=xt(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),F=e.props?l:iv(l)}}catch(q){Hs.length=0,vi(q,n,1),$=Tt(Gn)}let j=$;if(F&&V!==!1){const q=Object.keys(F),{shapeFlag:Q}=j;q.length&&Q&7&&(i&&q.some(Kl)&&(F=ov(F,i)),j=Qr(j,F,!1,!0))}return t.dirs&&(j=Qr(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(t.dirs):t.dirs),t.transition&&ac(j,t.transition),$=j,Eo(D),$}function sv(n,e=!0){let t;for(let r=0;r<n.length;r++){const s=n[r];if(ri(s)){if(s.type!==Gn||s.children==="v-if"){if(t)return;t=s}}else return}return t}const iv=n=>{let e;for(const t in n)(t==="class"||t==="style"||$o(t))&&((e||(e={}))[t]=n[t]);return e},ov=(n,e)=>{const t={};for(const r in n)(!Kl(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function av(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?ch(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!Qo(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?ch(r,a,h):!0:!!a;return!1}function ch(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Qo(t,i))return!0}return!1}function uc({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const cp=n=>n.__isSuspense;let gl=0;const lv={name:"Suspense",__isSuspense:!0,process(n,e,t,r,s,i,a,l,c,h){if(n==null)uv(e,t,r,s,i,a,l,c,h);else{if(i&&i.deps>0&&!n.suspense.isInFallback){e.suspense=n.suspense,e.suspense.vnode=e,e.el=n.el;return}hv(n,e,t,r,s,a,l,c,h)}},hydrate:fv,normalize:dv},cv=lv;function ni(n,e){const t=n.props&&n.props[e];ue(t)&&t()}function uv(n,e,t,r,s,i,a,l,c){const{p:h,o:{createElement:f}}=c,p=f("div"),g=n.suspense=up(n,s,r,e,p,t,i,a,l,c);h(null,g.pendingBranch=n.ssContent,p,null,r,g,i,a),g.deps>0?(ni(n,"onPending"),ni(n,"onFallback"),h(null,n.ssFallback,e,t,r,null,i,a),Hr(g,n.ssFallback)):g.resolve(!1,!0)}function hv(n,e,t,r,s,i,a,l,{p:c,um:h,o:{createElement:f}}){const p=e.suspense=n.suspense;p.vnode=e,e.el=n.el;const g=e.ssContent,_=e.ssFallback,{activeBranch:C,pendingBranch:V,isInFallback:D,isHydrating:$}=p;if(V)p.pendingBranch=g,Ln(g,V)?(c(V,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0?p.resolve():D&&($||(c(C,_,t,r,s,null,i,a,l),Hr(p,_)))):(p.pendingId=gl++,$?(p.isHydrating=!1,p.activeBranch=V):h(V,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=f("div"),D?(c(null,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0?p.resolve():(c(C,_,t,r,s,null,i,a,l),Hr(p,_))):C&&Ln(g,C)?(c(C,g,t,r,s,p,i,a,l),p.resolve(!0)):(c(null,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0&&p.resolve()));else if(C&&Ln(g,C))c(C,g,t,r,s,p,i,a,l),Hr(p,g);else if(ni(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=gl++,c(null,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0)p.resolve();else{const{timeout:F,pendingId:j}=p;F>0?setTimeout(()=>{p.pendingId===j&&p.fallback(_)},F):F===0&&p.fallback(_)}}function up(n,e,t,r,s,i,a,l,c,h,f=!1){const{p,m:g,um:_,n:C,o:{parentNode:V,remove:D}}=h;let $;const F=gv(n);F&&e&&e.pendingBranch&&($=e.pendingId,e.deps++);const j=n.props?N_(n.props.timeout):void 0,q=i,Q={vnode:n,parent:e,parentComponent:t,namespace:a,container:r,hiddenContainer:s,deps:0,pendingId:gl++,timeout:typeof j=="number"?j:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(Z=!1,A=!1){const{vnode:y,activeBranch:E,pendingBranch:w,pendingId:b,effects:R,parentComponent:T,container:Le}=Q;let Ge=!1;Q.isHydrating?Q.isHydrating=!1:Z||(Ge=E&&w.transition&&w.transition.mode==="out-in",Ge&&(E.transition.afterLeave=()=>{b===Q.pendingId&&(g(w,Le,i===q?C(E):i,0),cl(R))}),E&&(V(E.el)===Le&&(i=C(E)),_(E,T,Q,!0)),Ge||g(w,Le,i,0)),Hr(Q,w),Q.pendingBranch=null,Q.isInFallback=!1;let Ce=Q.parent,ge=!1;for(;Ce;){if(Ce.pendingBranch){Ce.effects.push(...R),ge=!0;break}Ce=Ce.parent}!ge&&!Ge&&cl(R),Q.effects=[],F&&e&&e.pendingBranch&&$===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),ni(y,"onResolve")},fallback(Z){if(!Q.pendingBranch)return;const{vnode:A,activeBranch:y,parentComponent:E,container:w,namespace:b}=Q;ni(A,"onFallback");const R=C(y),T=()=>{Q.isInFallback&&(p(null,Z,w,R,E,null,b,l,c),Hr(Q,Z))},Le=Z.transition&&Z.transition.mode==="out-in";Le&&(y.transition.afterLeave=T),Q.isInFallback=!0,_(y,E,null,!0),Le||T()},move(Z,A,y){Q.activeBranch&&g(Q.activeBranch,Z,A,y),Q.container=Z},next(){return Q.activeBranch&&C(Q.activeBranch)},registerDep(Z,A,y){const E=!!Q.pendingBranch;E&&Q.deps++;const w=Z.vnode.el;Z.asyncDep.catch(b=>{vi(b,Z,0)}).then(b=>{if(Z.isUnmounted||Q.isUnmounted||Q.pendingId!==Z.suspenseId)return;Z.asyncResolved=!0;const{vnode:R}=Z;_l(Z,b),w&&(R.el=w);const T=!w&&Z.subTree.el;A(Z,R,V(w||Z.subTree.el),w?null:C(Z.subTree),Q,a,y),T&&D(T),uc(Z,R.el),E&&--Q.deps===0&&Q.resolve()})},unmount(Z,A){Q.isUnmounted=!0,Q.activeBranch&&_(Q.activeBranch,t,Z,A),Q.pendingBranch&&_(Q.pendingBranch,t,Z,A)}};return Q}function fv(n,e,t,r,s,i,a,l,c){const h=e.suspense=up(e,r,t,n.parentNode,document.createElement("div"),null,s,i,a,l,!0),f=c(n,h.pendingBranch=e.ssContent,t,h,i,a);return h.deps===0&&h.resolve(!1,!0),f}function dv(n){const{shapeFlag:e,children:t}=n,r=e&32;n.ssContent=uh(r?t.default:t),n.ssFallback=r?uh(t.fallback):Tt(Gn)}function uh(n){let e;if(ue(n)){const t=Gr&&n._c;t&&(n._d=!1,Xo()),n=n(),t&&(n._d=!0,e=Et,hp())}return he(n)&&(n=sv(n)),n=xt(n),e&&!n.dynamicChildren&&(n.dynamicChildren=e.filter(t=>t!==n)),n}function pv(n,e){e&&e.pendingBranch?he(n)?e.effects.push(...n):e.effects.push(n):cl(n)}function Hr(n,e){n.activeBranch=e;const{vnode:t,parentComponent:r}=n;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;t.el=s,r&&r.subTree===t&&(r.vnode.el=s,uc(r,s))}function gv(n){const e=n.props&&n.props.suspensible;return e!=null&&e!==!1}const fn=Symbol.for("v-fgt"),Jo=Symbol.for("v-txt"),Gn=Symbol.for("v-cmt"),Fa=Symbol.for("v-stc"),Hs=[];let Et=null;function Xo(n=!1){Hs.push(Et=n?null:[])}function hp(){Hs.pop(),Et=Hs[Hs.length-1]||null}let Gr=1;function hh(n,e=!1){Gr+=n,n<0&&Et&&e&&(Et.hasOnce=!0)}function fp(n){return n.dynamicChildren=Gr>0?Et||Ur:null,hp(),Gr>0&&Et&&Et.push(n),n}function dp(n,e,t,r,s,i){return fp(Nt(n,e,t,r,s,i,!0))}function mv(n,e,t,r,s){return fp(Tt(n,e,t,r,s,!0))}function ri(n){return n?n.__v_isVNode===!0:!1}function Ln(n,e){return n.type===e.type&&n.key===e.key}const pp=({key:n})=>n??null,io=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ze(n)||ut(n)||ue(n)?{i:bt,r:n,k:e,f:!!t}:n:null);function Nt(n,e=null,t=null,r=0,s=null,i=n===fn?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&pp(e),ref:e&&io(e),scopeId:jd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(hc(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=ze(t)?8:16),Gr>0&&!a&&Et&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Et.push(c),c}const Tt=_v;function _v(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===Oy)&&(n=Gn),ri(n)){const l=Qr(n,e,!0);return t&&hc(l,t),Gr>0&&!i&&Et&&(l.shapeFlag&6?Et[Et.indexOf(n)]=l:Et.push(l)),l.patchFlag=-2,l}if(Cv(n)&&(n=n.__vccOpts),e){e=yv(e);let{class:l,style:c}=e;l&&!ze(l)&&(e.class=Xl(l)),Be(c)&&(ic(c)&&!he(c)&&(c=ht({},c)),e.style=Jl(c))}const a=ze(n)?1:cp(n)?128:yy(n)?64:Be(n)?4:ue(n)?2:0;return Nt(n,e,t,r,s,a,i,!0)}function yv(n){return n?ic(n)||Yd(n)?ht({},n):n:null}function Qr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Ev(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&pp(h),ref:e&&e.ref?t&&i?he(i)?i.concat(io(e)):[i,io(e)]:io(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==fn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Qr(n.ssContent),ssFallback:n.ssFallback&&Qr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&ac(f,c.clone(f)),f}function vv(n=" ",e=0){return Tt(Jo,null,n,e)}function xt(n){return n==null||typeof n=="boolean"?Tt(Gn):he(n)?Tt(fn,null,n.slice()):ri(n)?xn(n):Tt(Jo,null,String(n))}function xn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Qr(n)}function hc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(he(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Yd(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),r&64?(t=16,e=[vv(e)]):t=8);n.children=e,n.shapeFlag|=t}function Ev(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xl([e.class,r.class]));else if(s==="style")e.style=Jl([e.style,r.style]);else if($o(s)){const i=e[s],a=r[s];a&&i!==a&&!(he(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function zt(n,e,t,r=null){tn(n,e,7,[t,r])}const Tv=Qd();let Iv=0;function wv(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Tv,i={uid:Iv++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new j_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ep(r,s),emitsOptions:lp(r,s),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:r.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=rv.bind(null,i),n.ce&&n.ce(i),i}let ct=null,Io,ml;{const n=Wo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Io=e("__VUE_INSTANCE_SETTERS__",t=>ct=t),ml=e("__VUE_SSR_SETTERS__",t=>si=t)}const Ei=n=>{const e=ct;return Io(n),n.scope.on(),()=>{n.scope.off(),Io(e)}},fh=()=>{ct&&ct.scope.off(),Io(null)};function gp(n){return n.vnode.shapeFlag&4}let si=!1;function Av(n,e=!1,t=!1){e&&ml(e);const{props:r,children:s}=n.vnode,i=gp(n);Hy(n,r,i,e),Ky(n,s,t||e);const a=i?bv(n,e):void 0;return e&&ml(!1),a}function bv(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,xy);const{setup:r}=t;if(r){vn();const s=n.setupContext=r.length>1?Sv(n):null,i=Ei(n),a=yi(r,n,0,[n.props,s]),l=md(a);if(En(),i(),(l||n.sp)&&!js(n)&&Hd(n),l){if(a.then(fh,fh),e)return a.then(c=>{_l(n,c)}).catch(c=>{vi(c,n,0)});n.asyncDep=a}else _l(n,a)}else mp(n)}function _l(n,e,t){ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Be(e)&&(n.setupState=xd(e)),mp(n)}function mp(n,e,t){const r=n.type;n.render||(n.render=r.render||Gt);{const s=Ei(n);vn();try{My(n)}finally{En(),s()}}}const Rv={get(n,e){return at(n,"get",""),n[e]}};function Sv(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Rv),slots:n.slots,emit:n.emit,expose:e}}function Yo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xd(ay(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in $s)return $s[t](n)},has(e,t){return t in e||t in $s}})):n.proxy}function Pv(n,e=!0){return ue(n)?n.displayName||n.name:n.name||e&&n.__name}function Cv(n){return ue(n)&&"__vccOpts"in n}const Mt=(n,e)=>fy(n,e,si);function _p(n,e,t){const r=arguments.length;return r===2?Be(e)&&!he(e)?ri(e)?Tt(n,null,[e]):Tt(n,e):Tt(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ri(t)&&(t=[t]),Tt(n,e,t))}const kv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yl;const dh=typeof window<"u"&&window.trustedTypes;if(dh)try{yl=dh.createPolicy("vue",{createHTML:n=>n})}catch{}const yp=yl?n=>yl.createHTML(n):n=>n,Vv="http://www.w3.org/2000/svg",Dv="http://www.w3.org/1998/Math/MathML",hn=typeof document<"u"?document:null,ph=hn&&hn.createElement("template"),Ov={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?hn.createElementNS(Vv,n):e==="mathml"?hn.createElementNS(Dv,n):t?hn.createElement(n,{is:t}):hn.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>hn.createTextNode(n),createComment:n=>hn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>hn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{ph.innerHTML=yp(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=ph.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Nv=Symbol("_vtc");function xv(n,e,t){const r=n[Nv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const gh=Symbol("_vod"),Mv=Symbol("_vsh"),Lv=Symbol(""),Fv=/(^|;)\s*display\s*:/;function Uv(n,e,t){const r=n.style,s=ze(t);let i=!1;if(t&&!s){if(e)if(ze(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&oo(r,l,"")}else for(const a in e)t[a]==null&&oo(r,a,"");for(const a in t)a==="display"&&(i=!0),oo(r,a,t[a])}else if(s){if(e!==t){const a=r[Lv];a&&(t+=";"+a),r.cssText=t,i=Fv.test(t)}}else e&&n.removeAttribute("style");gh in n&&(n[gh]=i?r.display:"",n[Mv]&&(r.display="none"))}const mh=/\s*!important$/;function oo(n,e,t){if(he(t))t.forEach(r=>oo(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=Bv(n,e);mh.test(t)?n.setProperty(Tr(r),t.replace(mh,""),"important"):n[r]=t}}const _h=["Webkit","Moz","ms"],Ua={};function Bv(n,e){const t=Ua[e];if(t)return t;let r=Vt(e);if(r!=="filter"&&r in n)return Ua[e]=r;r=zo(r);for(let s=0;s<_h.length;s++){const i=_h[s]+r;if(i in n)return Ua[e]=i}return e}const yh="http://www.w3.org/1999/xlink";function vh(n,e,t,r,s,i=B_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(yh,e.slice(6,e.length)):n.setAttributeNS(yh,e,t):t==null||i&&!_d(t)?n.removeAttribute(e):n.setAttribute(e,i?"":is(t)?String(t):t)}function Eh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yp(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=_d(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Or(n,e,t,r){n.addEventListener(e,t,r)}function jv(n,e,t,r){n.removeEventListener(e,t,r)}const Th=Symbol("_vei");function $v(n,e,t,r,s=null){const i=n[Th]||(n[Th]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=Hv(e);if(r){const h=i[e]=Wv(r,s);Or(n,l,h,c)}else a&&(jv(n,l,a,c),i[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function Hv(n){let e;if(Ih.test(n)){e={};let r;for(;r=n.match(Ih);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Tr(n.slice(2)),e]}let Ba=0;const qv=Promise.resolve(),zv=()=>Ba||(qv.then(()=>Ba=0),Ba=Date.now());function Wv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;tn(Kv(r,t.value),e,5,[r])};return t.value=n,t.attached=zv(),t}function Kv(n,e){if(he(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const wh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Gv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?xv(n,r,a):e==="style"?Uv(n,t,r):$o(e)?Kl(e)||$v(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Qv(n,e,r,a))?(Eh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&vh(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ze(r))?Eh(n,Vt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),vh(n,e,r,a))};function Qv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&wh(e)&&ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return wh(e)&&ze(t)?!1:e in n}const Ah=n=>{const e=n.props["onUpdate:modelValue"]||!1;return he(e)?t=>no(e,t):e};function Jv(n){n.target.composing=!0}function bh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ja=Symbol("_assign"),Ps={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[ja]=Ah(s);const i=r||s.props&&s.props.type==="number";Or(n,e?"change":"input",a=>{if(a.target.composing)return;let l=n.value;t&&(l=l.trim()),i&&(l=rl(l)),n[ja](l)}),t&&Or(n,"change",()=>{n.value=n.value.trim()}),e||(Or(n,"compositionstart",Jv),Or(n,"compositionend",bh),Or(n,"change",bh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[ja]=Ah(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?rl(n.value):n.value,c=e??"";l!==c&&(document.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c))}},Xv=ht({patchProp:Gv},Ov);let Rh;function Yv(){return Rh||(Rh=Qy(Xv))}const Zv=(...n)=>{const e=Yv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=tE(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,eE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function eE(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function tE(n){return ze(n)?document.querySelector(n):n}const nE=()=>{};var Sh={};/**
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
 */const vp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},rE=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Ep={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,a||(g=64)),r.push(t[f],t[p],t[g],t[_])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(vp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):rE(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const p=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new sE;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iE=function(n){const e=vp(n);return Ep.encodeByteArray(e,!0)},wo=function(n){return iE(n).replace(/\./g,"")},Tp=function(n){try{return Ep.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,lE=()=>{if(typeof process>"u"||typeof Sh>"u")return;const n=Sh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},cE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Tp(n[1]);return e&&JSON.parse(e)},Zo=()=>{try{return nE()||aE()||lE()||cE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Ip=n=>{var e,t;return(t=(e=Zo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uE=n=>{const e=Ip(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wp=()=>{var n;return(n=Zo())===null||n===void 0?void 0:n.config},Ap=n=>{var e;return(e=Zo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class hE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function os(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function bp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function fE(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[wo(JSON.stringify(t)),wo(JSON.stringify(a)),""].join(".")}const qs={};function dE(){const n={prod:[],emulator:[]};for(const e of Object.keys(qs))qs[e]?n.emulator.push(e):n.prod.push(e);return n}function pE(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ph=!1;function Rp(n,e){if(typeof window>"u"||typeof document>"u"||!os(window.location.host)||qs[n]===e||qs[n]||Ph)return;qs[n]=e;function t(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=dE().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Ph=!0,a()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=pE(r),_=t("text"),C=document.getElementById(_)||document.createElement("span"),V=t("learnmore"),D=document.getElementById(V)||document.createElement("a"),$=t("preprendIcon"),F=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(D,V);const q=h();c(F,$),j.append(F,C,D,q),document.body.appendChild(j)}i?(C.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function ft(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())}function mE(){var n;const e=(n=Zo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _E(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function yE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EE(){const n=ft();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function TE(){return!mE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function IE(){try{return typeof indexedDB=="object"}catch{return!1}}function wE(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const AE="FirebaseError";class Rn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=AE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ti.prototype.create)}}class Ti{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?bE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,l,r)}}function bE(n,e){return n.replace(RE,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const RE=/\{\$([^}]+)}/g;function SE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ch(i)&&Ch(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ch(n){return n!==null&&typeof n=="object"}/**
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
 */function Ii(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function PE(n,e){const t=new CE(n,e);return t.subscribe.bind(t)}class CE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");kE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function $a(){}/**
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
 */function nn(n){return n&&n._delegate?n._delegate:n}class _r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class VE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new hE;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(OE(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:DE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function DE(n){return n===cr?void 0:n}function OE(n){return n.instantiationMode==="EAGER"}/**
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
 */class NE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new VE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(_e||(_e={}));const xE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},ME=_e.INFO,LE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},FE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=LE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class fc{constructor(e){this.name=e,this._logLevel=ME,this._logHandler=FE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const UE=(n,e)=>e.some(t=>n instanceof t);let kh,Vh;function BE(){return kh||(kh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jE(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sp=new WeakMap,vl=new WeakMap,Pp=new WeakMap,Ha=new WeakMap,dc=new WeakMap;function $E(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Hn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Sp.set(t,n)}).catch(()=>{}),dc.set(e,n),e}function HE(n){if(vl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});vl.set(n,e)}let El={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return vl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Hn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function qE(n){El=n(El)}function zE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qa(this),e,...t);return Pp.set(r,e.sort?e.sort():[e]),Hn(r)}:jE().includes(n)?function(...e){return n.apply(qa(this),e),Hn(Sp.get(this))}:function(...e){return Hn(n.apply(qa(this),e))}}function WE(n){return typeof n=="function"?zE(n):(n instanceof IDBTransaction&&HE(n),UE(n,BE())?new Proxy(n,El):n)}function Hn(n){if(n instanceof IDBRequest)return $E(n);if(Ha.has(n))return Ha.get(n);const e=WE(n);return e!==n&&(Ha.set(n,e),dc.set(e,n)),e}const qa=n=>dc.get(n);function KE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Hn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Hn(a.result),c.oldVersion,c.newVersion,Hn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const GE=["get","getKey","getAll","getAllKeys","count"],QE=["put","add","delete","clear"],za=new Map;function Dh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(za.get(e))return za.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=QE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||GE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return za.set(e,i),i}qE(n=>({...n,get:(e,t,r)=>Dh(e,t)||n.get(e,t,r),has:(e,t)=>!!Dh(e,t)||n.has(e,t)}));/**
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
 */class JE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(XE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function XE(n){const e=n.getComponent();return e?.type==="VERSION"}const Tl="@firebase/app",Oh="0.13.2";/**
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
 */const Tn=new fc("@firebase/app"),YE="@firebase/app-compat",ZE="@firebase/analytics-compat",eT="@firebase/analytics",tT="@firebase/app-check-compat",nT="@firebase/app-check",rT="@firebase/auth",sT="@firebase/auth-compat",iT="@firebase/database",oT="@firebase/data-connect",aT="@firebase/database-compat",lT="@firebase/functions",cT="@firebase/functions-compat",uT="@firebase/installations",hT="@firebase/installations-compat",fT="@firebase/messaging",dT="@firebase/messaging-compat",pT="@firebase/performance",gT="@firebase/performance-compat",mT="@firebase/remote-config",_T="@firebase/remote-config-compat",yT="@firebase/storage",vT="@firebase/storage-compat",ET="@firebase/firestore",TT="@firebase/ai",IT="@firebase/firestore-compat",wT="firebase",AT="11.10.0";/**
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
 */const Il="[DEFAULT]",bT={[Tl]:"fire-core",[YE]:"fire-core-compat",[eT]:"fire-analytics",[ZE]:"fire-analytics-compat",[nT]:"fire-app-check",[tT]:"fire-app-check-compat",[rT]:"fire-auth",[sT]:"fire-auth-compat",[iT]:"fire-rtdb",[oT]:"fire-data-connect",[aT]:"fire-rtdb-compat",[lT]:"fire-fn",[cT]:"fire-fn-compat",[uT]:"fire-iid",[hT]:"fire-iid-compat",[fT]:"fire-fcm",[dT]:"fire-fcm-compat",[pT]:"fire-perf",[gT]:"fire-perf-compat",[mT]:"fire-rc",[_T]:"fire-rc-compat",[yT]:"fire-gcs",[vT]:"fire-gcs-compat",[ET]:"fire-fst",[IT]:"fire-fst-compat",[TT]:"fire-vertex","fire-js":"fire-js",[wT]:"fire-js-all"};/**
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
 */const Ao=new Map,RT=new Map,wl=new Map;function Nh(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Jr(n){const e=n.name;if(wl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,n);for(const t of Ao.values())Nh(t,n);for(const t of RT.values())Nh(t,n);return!0}function pc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Lt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ST={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Ti("app","Firebase",ST);/**
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
 */class PT{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const as=AT;function Cp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Il,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(t||(t=wp()),!t)throw qn.create("no-options");const i=Ao.get(s);if(i){if(mr(t,i.options)&&mr(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const a=new NE(s);for(const c of wl.values())a.addComponent(c);const l=new PT(t,r,a);return Ao.set(s,l),l}function kp(n=Il){const e=Ao.get(n);if(!e&&n===Il&&wp())return Cp();if(!e)throw qn.create("no-app",{appName:n});return e}function zn(n,e,t){var r;let s=(r=bT[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}Jr(new _r(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const CT="firebase-heartbeat-database",kT=1,ii="firebase-heartbeat-store";let Wa=null;function Vp(){return Wa||(Wa=KE(CT,kT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ii)}catch(t){console.warn(t)}}}}).catch(n=>{throw qn.create("idb-open",{originalErrorMessage:n.message})})),Wa}async function VT(n){try{const t=(await Vp()).transaction(ii),r=await t.objectStore(ii).get(Dp(n));return await t.done,r}catch(e){if(e instanceof Rn)Tn.warn(e.message);else{const t=qn.create("idb-get",{originalErrorMessage:e?.message});Tn.warn(t.message)}}}async function xh(n,e){try{const r=(await Vp()).transaction(ii,"readwrite");await r.objectStore(ii).put(e,Dp(n)),await r.done}catch(t){if(t instanceof Rn)Tn.warn(t.message);else{const r=qn.create("idb-set",{originalErrorMessage:t?.message});Tn.warn(r.message)}}}function Dp(n){return`${n.name}!${n.options.appId}`}/**
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
 */const DT=1024,OT=30;class NT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new MT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Mh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>OT){const a=LT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Mh(),{heartbeatsToSend:r,unsentEntries:s}=xT(this._heartbeatsCache.heartbeats),i=wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Tn.warn(t),""}}}function Mh(){return new Date().toISOString().substring(0,10)}function xT(n,e=DT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Lh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Lh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class MT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return IE()?wE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await VT(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return xh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Lh(n){return wo(JSON.stringify({version:2,heartbeats:n})).length}function LT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function FT(n){Jr(new _r("platform-logger",e=>new JE(e),"PRIVATE")),Jr(new _r("heartbeat",e=>new NT(e),"PRIVATE")),zn(Tl,Oh,n),zn(Tl,Oh,"esm2017"),zn("fire-js","")}FT("");function gc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const UT=Op,Np=new Ti("auth","Firebase",Op());/**
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
 */const bo=new fc("@firebase/auth");function BT(n,...e){bo.logLevel<=_e.WARN&&bo.warn(`Auth (${as}): ${n}`,...e)}function ao(n,...e){bo.logLevel<=_e.ERROR&&bo.error(`Auth (${as}): ${n}`,...e)}/**
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
 */function rn(n,...e){throw _c(n,...e)}function $t(n,...e){return _c(n,...e)}function mc(n,e,t){const r=Object.assign(Object.assign({},UT()),{[e]:t});return new Ti("auth","Firebase",r).create(e,{appName:n.name})}function dr(n){return mc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(n,"argument-error"),mc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _c(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Np.create(n,...e)}function le(n,e,...t){if(!n)throw _c(e,...t)}function mn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ao(e),new Error(e)}function In(n,e){n||mn(e)}/**
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
 */function Al(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function $T(){return Fh()==="http:"||Fh()==="https:"}function Fh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function HT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($T()||yE()||"connection"in navigator)?navigator.onLine:!0}function qT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class wi{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=gE()||vE()}get(){return HT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function yc(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class xp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const WT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],KT=new wi(3e4,6e4);function vc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function ls(n,e,t,r,s={}){return Mp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ii(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return _E()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&os(n.emulatorConfig.host)&&(h.credentials="include"),xp.fetch()(await Lp(n,n.config.apiHost,t,l),h)})}async function Mp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},zT),e);try{const s=new QT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ji(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ji(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ji(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ji(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw mc(n,f,h);rn(n,f)}}catch(s){if(s instanceof Rn)throw s;rn(n,"network-request-failed",{message:String(s)})}}async function GT(n,e,t,r,s={}){const i=await ls(n,e,t,r,s);return"mfaPendingCredential"in i&&rn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Lp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?yc(n.config,s):`${n.config.apiScheme}://${s}`;return WT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class QT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),KT.get())})}}function Ji(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=$t(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function JT(n,e){return ls(n,"POST","/v1/accounts:delete",e)}async function Ro(n,e){return ls(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function XT(n,e=!1){const t=nn(n),r=await t.getIdToken(e),s=Ec(r);le(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:zs(Ka(s.auth_time)),issuedAtTime:zs(Ka(s.iat)),expirationTime:zs(Ka(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ka(n){return Number(n)*1e3}function Ec(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ao("JWT malformed, contained fewer than 3 sections"),null;try{const s=Tp(t);return s?JSON.parse(s):(ao("Failed to decode base64 JWT payload"),null)}catch(s){return ao("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Uh(n){const e=Ec(n);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function oi(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Rn&&YT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function YT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ZT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class bl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function So(n){var e;const t=n.auth,r=await n.getIdToken(),s=await oi(n,Ro(t,{idToken:r}));le(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Fp(i.providerUserInfo):[],l=tI(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!l?.length,f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new bl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(n,p)}async function eI(n){const e=nn(n);await So(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function tI(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Fp(n){return n.map(e=>{var{providerId:t}=e,r=gc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function nI(n,e){const t=await Mp(n,{},async()=>{const r=Ii({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Lp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&os(n.emulatorConfig.host)&&(c.credentials="include"),xp.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function rI(n,e){return ls(n,"POST","/v2/accounts:revokeToken",vc(n,e))}/**
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
 */class qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){le(e.length!==0,"internal-error");const t=Uh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await nI(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new qr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qr,this.toJSON())}_performRefresh(){return mn("not implemented")}}/**
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
 */function Dn(n,e){le(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ft{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=gc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ZT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new bl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await oi(this,this.stsTokenManager.getToken(this.auth,e));return le(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return XT(this,e)}reload(){return eI(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ft(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await So(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await oi(this,JT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,f;const p=(r=t.displayName)!==null&&r!==void 0?r:void 0,g=(s=t.email)!==null&&s!==void 0?s:void 0,_=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=t.photoURL)!==null&&a!==void 0?a:void 0,V=(l=t.tenantId)!==null&&l!==void 0?l:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=t.createdAt)!==null&&h!==void 0?h:void 0,F=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:q,isAnonymous:Q,providerData:Z,stsTokenManager:A}=t;le(j&&A,e,"internal-error");const y=qr.fromJSON(this.name,A);le(typeof j=="string",e,"internal-error"),Dn(p,e.name),Dn(g,e.name),le(typeof q=="boolean",e,"internal-error"),le(typeof Q=="boolean",e,"internal-error"),Dn(_,e.name),Dn(C,e.name),Dn(V,e.name),Dn(D,e.name),Dn($,e.name),Dn(F,e.name);const E=new Ft({uid:j,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:Q,photoURL:C,phoneNumber:_,tenantId:V,stsTokenManager:y,createdAt:$,lastLoginAt:F});return Z&&Array.isArray(Z)&&(E.providerData=Z.map(w=>Object.assign({},w))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new qr;s.updateFromServerResponse(t);const i=new Ft({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await So(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Fp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new qr;l.updateFromIdToken(r);const c=new Ft({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new bl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const Bh=new Map;function _n(n){In(n instanceof Function,"Expected a class definition");let e=Bh.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Bh.set(n,e),e)}/**
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
 */class Up{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Up.type="NONE";const jh=Up;/**
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
 */function lo(n,e,t){return`firebase:${n}:${e}:${t}`}class zr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=lo(this.userKey,s.apiKey,i),this.fullPersistenceKey=lo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ro(this.auth,{idToken:e}).catch(()=>{});return t?Ft._fromGetAccountInfoResponse(this.auth,t,e):null}return Ft._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new zr(_n(jh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||_n(jh);const a=lo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await Ro(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Ft._fromGetAccountInfoResponse(e,g,f)}else p=Ft._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new zr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new zr(i,e,r))}}/**
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
 */function $h(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zp(e))return"Blackberry";if(Wp(e))return"Webos";if(jp(e))return"Safari";if((e.includes("chrome/")||$p(e))&&!e.includes("edge/"))return"Chrome";if(qp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Bp(n=ft()){return/firefox\//i.test(n)}function jp(n=ft()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $p(n=ft()){return/crios\//i.test(n)}function Hp(n=ft()){return/iemobile/i.test(n)}function qp(n=ft()){return/android/i.test(n)}function zp(n=ft()){return/blackberry/i.test(n)}function Wp(n=ft()){return/webos/i.test(n)}function Tc(n=ft()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function sI(n=ft()){var e;return Tc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function iI(){return EE()&&document.documentMode===10}function Kp(n=ft()){return Tc(n)||qp(n)||Wp(n)||zp(n)||/windows phone/i.test(n)||Hp(n)}/**
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
 */function Gp(n,e=[]){let t;switch(n){case"Browser":t=$h(ft());break;case"Worker":t=`${$h(ft())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${as}/${r}`}/**
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
 */class oI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function aI(n,e={}){return ls(n,"GET","/v2/passwordPolicy",vc(n,e))}/**
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
 */const lI=6;class cI{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:lI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class uI{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hh(this),this.idTokenSubscription=new Hh(this),this.beforeStateQueue=new oI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ro(this,{idToken:e}),r=await Ft._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Lt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await So(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=qT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(dr(this));const t=e?nn(e):null;return t&&le(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await aI(this),t=new cI(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ti("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await rI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;le(t,this,"argument-error"),this.redirectPersistenceManager=await zr.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Lt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&BT(`Error while retrieving App Check token: ${t.error}`),t?.token}}function ea(n){return nn(n)}class Hh{constructor(e){this.auth=e,this.observer=null,this.addObserver=PE(t=>this.observer=t)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ic={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function hI(n){Ic=n}function fI(n){return Ic.loadJS(n)}function dI(){return Ic.gapiScript}function pI(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function gI(n,e){const t=pc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mr(i,e??{}))return s;rn(s,"already-initialized")}return t.initialize({options:e})}function mI(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_n);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function _I(n,e,t){const r=ea(n);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Qp(e),{host:a,port:l}=yI(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(mr(h,r.config.emulator)&&mr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,os(a)?(bp(`${i}//${a}${c}`),Rp("Auth",!0)):vI()}function Qp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function yI(n){const e=Qp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:qh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:qh(a)}}}function qh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function vI(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Jp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mn("not implemented")}_getIdTokenResponse(e){return mn("not implemented")}_linkToIdToken(e,t){return mn("not implemented")}_getReauthenticationResolver(e){return mn("not implemented")}}/**
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
 */async function Wr(n,e){return GT(n,"POST","/v1/accounts:signInWithIdp",vc(n,e))}/**
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
 */const EI="http://localhost";class yr extends Jp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=gc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Wr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Wr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Wr(e,t)}buildRequest(){const e={requestUri:EI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ii(t)}return e}}/**
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
 */class wc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ai extends wc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Fn extends Ai{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
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
 */class gn extends Ai{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return gn.credential(t,r)}catch{return null}}}gn.GOOGLE_SIGN_IN_METHOD="google.com";gn.PROVIDER_ID="google.com";/**
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
 */class Un extends Ai{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
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
 */class Bn extends Ai{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
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
 */class Xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ft._fromIdTokenResponse(e,r,s),a=zh(r);return new Xr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=zh(r);return new Xr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function zh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Po extends Rn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Po.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Po(e,t,r,s)}}function Xp(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Po._fromErrorAndOperation(n,i,e,r):i})}async function TI(n,e,t=!1){const r=await oi(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Xr._forOperation(n,"link",r)}/**
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
 */async function II(n,e,t=!1){const{auth:r}=n;if(Lt(r.app))return Promise.reject(dr(r));const s="reauthenticate";try{const i=await oi(n,Xp(r,s,e,n),t);le(i.idToken,r,"internal-error");const a=Ec(i.idToken);le(a,r,"internal-error");const{sub:l}=a;return le(n.uid===l,r,"user-mismatch"),Xr._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
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
 */async function wI(n,e,t=!1){if(Lt(n.app))return Promise.reject(dr(n));const r="signIn",s=await Xp(n,r,e),i=await Xr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function AI(n,e,t,r){return nn(n).onIdTokenChanged(e,t,r)}function bI(n,e,t){return nn(n).beforeAuthStateChanged(e,t)}const Co="__sak";/**
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
 */class Yp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Co,"1"),this.storage.removeItem(Co),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const RI=1e3,SI=10;class Zp extends Yp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Kp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);iI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,SI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},RI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zp.type="LOCAL";const PI=Zp;/**
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
 */class eg extends Yp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}eg.type="SESSION";const tg=eg;/**
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
 */function CI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!a?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await CI(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
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
 */function Ac(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class kI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Ac("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Jt(){return window}function VI(n){Jt().location.href=n}/**
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
 */function ng(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function DI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OI(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function NI(){return ng()?self:null}/**
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
 */const rg="firebaseLocalStorageDb",xI=1,ko="firebaseLocalStorage",sg="fbase_key";class bi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function na(n,e){return n.transaction([ko],e?"readwrite":"readonly").objectStore(ko)}function MI(){const n=indexedDB.deleteDatabase(rg);return new bi(n).toPromise()}function Rl(){const n=indexedDB.open(rg,xI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ko,{keyPath:sg})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ko)?e(r):(r.close(),await MI(),e(await Rl()))})})}async function Wh(n,e,t){const r=na(n,!0).put({[sg]:e,value:t});return new bi(r).toPromise()}async function LI(n,e){const t=na(n,!1).get(e),r=await new bi(t).toPromise();return r===void 0?null:r.value}function Kh(n,e){const t=na(n,!0).delete(e);return new bi(t).toPromise()}const FI=800,UI=3;class ig{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>UI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ng()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(NI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await DI(),!this.activeServiceWorker)return;this.sender=new kI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Rl();return await Wh(e,Co,"1"),await Kh(e,Co),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Wh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>LI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Kh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=na(s,!1).getAll();return new bi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ig.type="LOCAL";const BI=ig;new wi(3e4,6e4);/**
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
 */function og(n,e){return e?_n(e):(le(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class bc extends Jp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Wr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Wr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Wr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function jI(n){return wI(n.auth,new bc(n),n.bypassAuthState)}function $I(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),II(t,new bc(n),n.bypassAuthState)}async function HI(n){const{auth:e,user:t}=n;return le(t,e,"internal-error"),TI(t,new bc(n),n.bypassAuthState)}/**
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
 */class ag{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jI;case"linkViaPopup":case"linkViaRedirect":return HI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:rn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const qI=new wi(2e3,1e4);async function zI(n,e,t){if(Lt(n.app))return Promise.reject($t(n,"operation-not-supported-in-this-environment"));const r=ea(n);jT(n,e,wc);const s=og(r,t);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends ag{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=Ac();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,qI.get())};e()}}ur.currentPopupAction=null;/**
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
 */const WI="pendingRedirect",co=new Map;class KI extends ag{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=co.get(this.auth._key());if(!e){try{const r=await GI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}co.set(this.auth._key(),e)}return this.bypassAuthState||co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function GI(n,e){const t=XI(e),r=JI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function QI(n,e){co.set(n._key(),e)}function JI(n){return _n(n._redirectPersistence)}function XI(n){return lo(WI,n.config.apiKey,n.name)}async function YI(n,e,t=!1){if(Lt(n.app))return Promise.reject(dr(n));const r=ea(n),s=og(r,e),a=await new KI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const ZI=10*60*1e3;class ew{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!lg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError($t(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Gh(e))}saveEventToCache(e){this.cachedEventUids.add(Gh(e)),this.lastProcessedEventTime=Date.now()}}function Gh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lg({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function tw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lg(n);default:return!1}}/**
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
 */async function nw(n,e={}){return ls(n,"GET","/v1/projects",e)}/**
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
 */const rw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sw=/^https?/;async function iw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await nw(n);for(const t of e)try{if(ow(t))return}catch{}rn(n,"unauthorized-domain")}function ow(n){const e=Al(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!sw.test(t))return!1;if(rw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const aw=new wi(3e4,6e4);function Qh(){const n=Jt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lw(n){return new Promise((e,t)=>{var r,s,i;function a(){Qh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qh(),t($t(n,"network-request-failed"))},timeout:aw.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)a();else{const l=pI("iframefcb");return Jt()[l]=()=>{gapi.load?a():t($t(n,"network-request-failed"))},fI(`${dI()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw uo=null,e})}let uo=null;function cw(n){return uo=uo||lw(n),uo}/**
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
 */const uw=new wi(5e3,15e3),hw="__/auth/iframe",fw="emulator/auth/iframe",dw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gw(n){const e=n.config;le(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?yc(e,fw):`https://${n.config.authDomain}/${hw}`,r={apiKey:e.apiKey,appName:n.name,v:as},s=pw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ii(r).slice(1)}`}async function mw(n){const e=await cw(n),t=Jt().gapi;return le(t,n,"internal-error"),e.open({where:document.body,url:gw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=$t(n,"network-request-failed"),l=Jt().setTimeout(()=>{i(a)},uw.get());function c(){Jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const _w={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yw=500,vw=600,Ew="_blank",Tw="http://localhost";class Jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Iw(n,e,t,r=yw,s=vw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},_w),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ft().toLowerCase();t&&(l=$p(h)?Ew:t),Bp(h)&&(e=e||Tw,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(sI(h)&&l!=="_self")return ww(e||"",l),new Jh(null);const p=window.open(e||"",l,f);le(p,n,"popup-blocked");try{p.focus()}catch{}return new Jh(p)}function ww(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const Aw="__/auth/handler",bw="emulator/auth/handler",Rw=encodeURIComponent("fac");async function Xh(n,e,t,r,s,i){le(n.config.authDomain,n,"auth-domain-config-required"),le(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:as,eventId:s};if(e instanceof wc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",SE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Ai){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${Rw}=${encodeURIComponent(c)}`:"";return`${Sw(n)}?${Ii(l).slice(1)}${h}`}function Sw({config:n}){return n.emulator?yc(n,bw):`https://${n.authDomain}/${Aw}`}/**
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
 */const Ga="webStorageSupport";class Pw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tg,this._completeRedirectFn=YI,this._overrideRedirectResult=QI}async _openPopup(e,t,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Xh(e,t,r,Al(),s);return Iw(e,a,Ac())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Xh(e,t,r,Al(),s);return VI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await mw(e),r=new ew(e);return t.register("authEvent",s=>(le(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ga,{type:Ga},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[Ga];a!==void 0&&t(!!a),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=iw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Kp()||jp()||Tc()}}const Cw=Pw;var Yh="@firebase/auth",Zh="1.10.8";/**
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
 */class kw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Dw(n){Jr(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(n)},h=new uI(r,s,i,c);return mI(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Jr(new _r("auth-internal",e=>{const t=ea(e.getProvider("auth").getImmediate());return(r=>new kw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Yh,Zh,Vw(n)),zn(Yh,Zh,"esm2017")}/**
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
 */const Ow=5*60,Nw=Ap("authIdTokenMaxAge")||Ow;let ef=null;const xw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Nw)return;const s=t?.token;ef!==s&&(ef=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Mw(n=kp()){const e=pc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=gI(n,{popupRedirectResolver:Cw,persistence:[BI,PI,tg]}),r=Ap("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=xw(i.toString());bI(t,a,()=>a(t.currentUser)),AI(t,l=>a(l))}}const s=Ip("auth");return s&&_I(t,`http://${s}`),t}function Lw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}hI({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=$t("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",Lw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Dw("Browser");var tf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wn,cg;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(w,b,R){for(var T=Array(arguments.length-2),Le=2;Le<arguments.length;Le++)T[Le-2]=arguments[Le];return y.prototype[b].apply(w,T)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var w=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)w[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)w[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],b=A.g[2];var R=A.g[3],T=y+(R^E&(b^R))+w[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(b^R&(E^b))+w[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(E^b^R)+w[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(b^(E|~R))+w[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,w=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=E;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<y;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<y;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var w=0;32>w;w+=8)A[E++]=this.g[y]>>>w&255;return A};function i(A,y){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function a(A,y){this.h=y;for(var E=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==y||(E[b]=R,w=!1)}this.g=E}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var y=[],E=1,w=0;A>=E;w++)y[w]=A/E|0,E*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return D(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),w=w.j(R).add(h(T))):(w=w.j(E),w=w.add(h(T)))}return w}var p=c(0),g=c(1),_=c(16777216);n=a.prototype,n.m=function(){if(V(this))return-D(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var w=this.i(E);A+=(0<=w?w:4294967296+w)*y,y*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(V(this))return"-"+D(this).toString(A);for(var y=h(Math.pow(A,6)),E=this,w="";;){var b=q(E,y).g;E=$(E,b.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,C(E))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function V(A){return A.h==-1}n.l=function(A){return A=$(this,A),V(A)?-1:C(A)?0:1};function D(A){for(var y=A.g.length,E=[],w=0;w<y;w++)E[w]=~A.g[w];return new a(E,~A.h).add(g)}n.abs=function(){return V(this)?D(this):this},n.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0,b=0;b<=y;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=T>>>16,R&=65535,T&=65535,E[b]=T<<16|R}return new a(E,E[E.length-1]&-2147483648?-1:0)};function $(A,y){return A.add(D(y))}n.j=function(A){if(C(this)||C(A))return p;if(V(this))return V(A)?D(this).j(D(A)):D(D(this).j(A));if(V(A))return D(this.j(D(A)));if(0>this.l(_)&&0>A.l(_))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],w=0;w<2*y;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,T=this.i(w)&65535,Le=A.i(b)>>>16,Ge=A.i(b)&65535;E[2*w+2*b]+=T*Ge,F(E,2*w+2*b),E[2*w+2*b+1]+=R*Ge,F(E,2*w+2*b+1),E[2*w+2*b+1]+=T*Le,F(E,2*w+2*b+1),E[2*w+2*b+2]+=R*Le,F(E,2*w+2*b+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new a(E,0)};function F(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function j(A,y){this.g=A,this.h=y}function q(A,y){if(C(y))throw Error("division by zero");if(C(A))return new j(p,p);if(V(A))return y=q(D(A),y),new j(D(y.g),D(y.h));if(V(y))return y=q(A,D(y)),new j(D(y.g),y.h);if(30<A.g.length){if(V(A)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,w=y;0>=w.l(A);)E=Q(E),w=Q(w);var b=Z(E,1),R=Z(w,1);for(w=Z(w,2),E=Z(E,2);!C(w);){var T=R.add(w);0>=T.l(A)&&(b=b.add(E),R=T),w=Z(w,1),E=Z(E,1)}return y=$(A,b.j(y)),new j(b,y)}for(b=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(E),T=R.j(y);V(T)||0<T.l(A);)E-=w,R=h(E),T=R.j(y);C(R)&&(R=g),b=b.add(R),A=$(A,T)}return new j(b,A)}n.A=function(A){return q(this,A).h},n.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)&A.i(w);return new a(E,this.h&A.h)},n.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)|A.i(w);return new a(E,this.h|A.h)},n.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)^A.i(w);return new a(E,this.h^A.h)};function Q(A){for(var y=A.g.length+1,E=[],w=0;w<y;w++)E[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(E,A.h)}function Z(A,y){var E=y>>5;y%=32;for(var w=A.g.length-E,b=[],R=0;R<w;R++)b[R]=0<y?A.i(R+E)>>>y|A.i(R+E+1)<<32-y:A.i(R+E);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,cg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Wn=a}).apply(typeof tf<"u"?tf:typeof self<"u"?self:typeof window<"u"?window:{});var Xi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ug,Vs,hg,ho,Sl,fg,dg,pg;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Xi=="object"&&Xi];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,P={next:function(){if(!m&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,P,k){for(var W=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)W[Se-2]=arguments[Se];return u.prototype[P].apply(m,W)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function D(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const P=o.length||0,k=m.length||0;o.length=P+k;for(let W=0;W<k;W++)o[P+W]=m[W]}else o.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var Q=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Z(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let k=0;k<E.length;k++)d=E[k],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=It;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Le{constructor(){this.h=this.g=null}add(u,d){const m=Ge.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Ge=new $(()=>new Ce,o=>o.reset());class Ce{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,me=!1,It=new Le,Dt=()=>{const o=l.Promise.resolve(void 0);ge=()=>{o.then(Rt)}};var Rt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var u=Ge;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ne(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ne.prototype.h=function(){this.defaultPrevented=!0};var Sn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function qt(o,u){if(Ne.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Q){e:{try{q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_t[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&qt.aa.h.call(this)}}C(qt,Ne);var _t={2:"touch",3:"pen",4:"mouse"};qt.prototype.h=function(){qt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(o,u,d,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Te(o){this.src=o,this.g={},this.h=0}Te.prototype.add=function(o,u,d,m,P){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var W=I(o,u,m,P);return-1<W?(u=o[W],d||(u.fa=!1)):(u=new J(u,this.src,k,!!m,P),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(ee(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function I(o,u,d,m){for(var P=0;P<o.length;++P){var k=o[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function L(o,u,d,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(o,u[k],d,m,P);return null}return d=ae(d),o&&o[O]?o.K(u,d,h(m)?!!m.capture:!1,P):x(o,u,d,!1,m,P)}function x(o,u,d,m,P,k){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,Se=K(o);if(Se||(o[S]=Se=new Te(o)),d=Se.add(u,d,m,W,k),d.proxy)return d;if(m=G(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Sn||(P=W),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent(B(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=re;return o}function z(o,u,d,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(o,u[k],d,m,P);else m=h(m)?!!m.capture:!!m,d=ae(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=I(k,d,m,P),-1<d&&(ee(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=K(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,d,m,P)),(d=-1<o?u[o]:null)&&H(d))}function H(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])v(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(B(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=K(u))?(v(d,o),d.h==0&&(d.src=null,u[S]=null)):ee(o)}}}function B(o){return o in N?N[o]:N[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new qt(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&H(o),o=d.call(m,u)}return o}function K(o){return o=o[S],o instanceof Te?o:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[te]||(o[te]=function(u){return o.handleEvent(u)}),o[te])}function ie(){Oe.call(this),this.i=new Te(this),this.M=this,this.F=null}C(ie,Oe),ie.prototype[O]=!0,ie.prototype.removeEventListener=function(o,u,d,m){z(this,o,u,d,m)};function de(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Ne(u,o);else if(u instanceof Ne)u.target=u.target||o;else{var P=u;u=new Ne(m,o),w(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var W=u.g=d[k];P=ve(W,m,!0,u)&&P}if(W=u.g=o,P=ve(W,m,!0,u)&&P,P=ve(W,m,!1,u)&&P,d)for(k=0;k<d.length;k++)W=u.g=d[k],P=ve(W,m,!1,u)&&P}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)ee(d[m]);delete o.g[u],o.h--}}this.F=null},ie.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},ie.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function ve(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var W=u[k];if(W&&!W.da&&W.capture==d){var Se=W.listener,Ye=W.ha||W.src;W.fa&&v(o.i,W),P=Se.call(Ye,m)!==!1&&P}}return P&&!m.defaultPrevented}function Qe(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Je(o){o.g=Qe(()=>{o.g=null,o.i&&(o.i=!1,Je(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class St extends Oe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function nt(o){Oe.call(this),this.h=o,this.g={}}C(nt,Oe);var Pn=[];function ds(o){Z(o.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},o),o.g={}}nt.prototype.N=function(){nt.aa.N.call(this),ds(this)},nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Xe=l.JSON.stringify,Pt=l.JSON.parse,Vi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function _a(){}_a.prototype.h=null;function ou(o){return o.h||(o.h=o.i())}function au(){}var ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ya(){Ne.call(this,"d")}C(ya,Ne);function va(){Ne.call(this,"c")}C(va,Ne);var nr={},lu=null;function Di(){return lu=lu||new ie}nr.La="serverreachability";function cu(o){Ne.call(this,nr.La,o)}C(cu,Ne);function gs(o){const u=Di();de(u,new cu(u))}nr.STAT_EVENT="statevent";function uu(o,u){Ne.call(this,nr.STAT_EVENT,o),this.stat=u}C(uu,Ne);function dt(o){const u=Di();de(u,new uu(u,o))}nr.Ma="timingevent";function hu(o,u){Ne.call(this,nr.Ma,o),this.size=u}C(hu,Ne);function ms(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function _s(){this.g=!0}_s.prototype.xa=function(){this.g=!1};function r_(o,u,d,m,P,k){o.info(function(){if(o.g)if(k)for(var W="",Se=k.split("&"),Ye=0;Ye<Se.length;Ye++){var Ie=Se[Ye].split("=");if(1<Ie.length){var rt=Ie[0];Ie=Ie[1];var st=rt.split("_");W=2<=st.length&&st[1]=="type"?W+(rt+"="+Ie+"&"):W+(rt+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+W})}function s_(o,u,d,m,P,k,W){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+W})}function Rr(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+o_(o,d)+(m?" "+m:"")})}function i_(o,u){o.info(function(){return"TIMEOUT: "+u})}_s.prototype.info=function(){};function o_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return Xe(d)}catch{return u}}var Oi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ea;function Ni(){}C(Ni,_a),Ni.prototype.g=function(){return new XMLHttpRequest},Ni.prototype.i=function(){return{}},Ea=new Ni;function Cn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new nt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new du}function du(){this.i=null,this.g="",this.h=!1}var pu={},Ta={};function Ia(o,u,d){o.L=1,o.v=Fi(an(u)),o.m=d,o.P=!0,gu(o,null)}function gu(o,u){o.F=Date.now(),xi(o),o.A=an(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Cu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new du,o.g=Ku(o.j,d?u:null,!o.m),0<o.O&&(o.M=new St(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Pn[0]=P.toString()),P=Pn);for(var k=0;k<P.length;k++){var W=L(d,P[k],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),gs(),r_(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&ln(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const st=ln(this.g);var u=this.g.Ba();const Cr=this.g.Z();if(!(3>st)&&(st!=3||this.g&&(this.h.h||this.g.oa()||Mu(this.g)))){this.J||st!=4||u==7||(u==8||0>=Cr?gs(3):gs(2)),wa(this);var d=this.g.Z();this.X=d;t:if(mu(this)){var m=Mu(this.g);o="";var P=m.length,k=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),ys(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,s_(this.i,this.u,this.A,this.l,this.R,st,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Se,Ye=this.g;if((Se=Ye.g?Ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Se)){var Ie=Se;break t}}Ie=null}if(d=Ie)Rr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Aa(this,d);else{this.o=!1,this.s=3,dt(12),rr(this),ys(this);break e}}if(this.P){d=!0;let Ot;for(;!this.J&&this.C<W.length;)if(Ot=a_(this,W),Ot==Ta){st==4&&(this.s=4,dt(14),d=!1),Rr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ot==pu){this.s=4,dt(15),Rr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Rr(this.i,this.l,Ot,null),Aa(this,Ot);if(mu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),st!=4||W.length!=0||this.h.h||(this.s=1,dt(16),d=!1),this.o=this.o&&d,!d)Rr(this.i,this.l,W,"[Invalid Chunked Response]"),rr(this),ys(this);else if(0<W.length&&!this.W){this.W=!0;var rt=this.j;rt.g==this&&rt.ba&&!rt.M&&(rt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),ka(rt),rt.M=!0,dt(11))}}else Rr(this.i,this.l,W,null),Aa(this,W);st==4&&rr(this),this.o&&!this.J&&(st==4?Hu(this.j,this):(this.o=!1,xi(this)))}else A_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),rr(this),ys(this)}}}catch{}finally{}};function mu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function a_(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?Ta:(d=Number(u.substring(d,m)),isNaN(d)?pu:(m+=1,m+d>u.length?Ta:(u=u.slice(m,m+d),o.C=m+d,u)))}Cn.prototype.cancel=function(){this.J=!0,rr(this)};function xi(o){o.S=Date.now()+o.I,_u(o,o.I)}function _u(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ms(g(o.ba,o),u)}function wa(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(i_(this.i,this.A),this.L!=2&&(gs(),dt(17)),rr(this),this.s=2,ys(this)):_u(this,this.S-o)};function ys(o){o.j.G==0||o.J||Hu(o.j,o)}function rr(o){wa(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,ds(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Aa(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||ba(d.h,o))){if(!o.K&&ba(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)qi(d),$i(d);else break e;Ca(d),dt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ms(g(d.Za,d),6e3));if(1>=Eu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else ir(d,11)}else if((o.K||d.g==o)&&qi(d),!F(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const rt=Ie[3];rt!=null&&(d.la=rt,d.j.info("VER="+d.la));const st=Ie[4];st!=null&&(d.Aa=st,d.j.info("SVER="+d.Aa));const Cr=Ie[5];Cr!=null&&typeof Cr=="number"&&0<Cr&&(m=1.5*Cr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Ot=o.g;if(Ot){const Wi=Ot.g?Ot.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wi){var k=m.h;k.g||Wi.indexOf("spdy")==-1&&Wi.indexOf("quic")==-1&&Wi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Ra(k,k.h),k.h=null))}if(m.D){const Va=Ot.g?Ot.g.getResponseHeader("X-HTTP-Session-Id"):null;Va&&(m.ya=Va,Ve(m.I,m.D,Va))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=o;if(m.qa=Wu(m,m.J?m.ia:null,m.W),W.K){Tu(m.h,W);var Se=W,Ye=m.L;Ye&&(Se.I=Ye),Se.B&&(wa(Se),xi(Se)),m.g=W}else ju(m);0<d.i.length&&Hi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||ir(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?ir(d,7):Pa(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}gs(4)}catch{}}var l_=class{constructor(o,u){this.g=o,this.map=u}};function yu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function vu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Eu(o){return o.h?1:o.g?o.g.size:0}function ba(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ra(o,u){o.g?o.g.add(u):o.h=u}function Tu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}yu.prototype.cancel=function(){if(this.i=Iu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Iu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function c_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function u_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function wu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=u_(o),m=c_(o),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],d&&d[k],o)}var Au=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function h_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),P=null;if(0<=m){var k=o[d].substring(0,m);P=o[d].substring(m+1)}else k=o[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function sr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sr){this.h=o.h,Mi(this,o.j),this.o=o.o,this.g=o.g,Li(this,o.s),this.l=o.l;var u=o.i,d=new Ts;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),bu(this,d),this.m=o.m}else o&&(u=String(o).match(Au))?(this.h=!1,Mi(this,u[1]||"",!0),this.o=vs(u[2]||""),this.g=vs(u[3]||"",!0),Li(this,u[4]),this.l=vs(u[5]||"",!0),bu(this,u[6]||"",!0),this.m=vs(u[7]||"")):(this.h=!1,this.i=new Ts(null,this.h))}sr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Es(u,Ru,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Es(u,Ru,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Es(d,d.charAt(0)=="/"?p_:d_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Es(d,m_)),o.join("")};function an(o){return new sr(o)}function Mi(o,u,d){o.j=d?vs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Li(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function bu(o,u,d){u instanceof Ts?(o.i=u,__(o.i,o.h)):(d||(u=Es(u,g_)),o.i=new Ts(u,o.h))}function Ve(o,u,d){o.i.set(u,d)}function Fi(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function vs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Es(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,f_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function f_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ru=/[#\/\?@]/g,d_=/[#\?:]/g,p_=/[#\?]/g,g_=/[#\?@]/g,m_=/#/g;function Ts(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function kn(o){o.g||(o.g=new Map,o.h=0,o.i&&h_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=Ts.prototype,n.add=function(o,u){kn(this),this.i=null,o=Sr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function Su(o,u){kn(o),u=Sr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Pu(o,u){return kn(o),u=Sr(o,u),o.g.has(u)}n.forEach=function(o,u){kn(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(u,P,m,this)},this)},this)},n.na=function(){kn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=o[m];for(let k=0;k<P.length;k++)d.push(u[m])}return d},n.V=function(o){kn(this);let u=[];if(typeof o=="string")Pu(this,o)&&(u=u.concat(this.g.get(Sr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return kn(this),this.i=null,o=Sr(this,o),Pu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Cu(o,u,d){Su(o,u),0<d.length&&(o.i=null,o.g.set(Sr(o,u),V(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var P=k;W[m]!==""&&(P+="="+encodeURIComponent(String(W[m]))),o.push(P)}}return this.i=o.join("&")};function Sr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function __(o,u){u&&!o.j&&(kn(o),o.i=null,o.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Su(this,m),Cu(this,P,d))},o)),o.j=u}function y_(o,u){const d=new _s;if(l.Image){const m=new Image;m.onload=_(Vn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Vn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Vn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Vn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function v_(o,u){const d=new _s,m=new AbortController,P=setTimeout(()=>{m.abort(),Vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?Vn(d,"TestPingServer: ok",!0,u):Vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Vn(d,"TestPingServer: error",!1,u)})}function Vn(o,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function E_(){this.g=new Vi}function T_(o,u,d){const m=d||"";try{wu(o,function(P,k){let W=P;h(P)&&(W=Xe(P)),u.push(m+k+"="+encodeURIComponent(W))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Ui(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Ui,_a),Ui.prototype.g=function(){return new Bi(this.l,this.j)},Ui.prototype.i=function(o){return function(){return o}}({});function Bi(o,u){ie.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Bi,ie),n=Bi.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,ws(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Is(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ws(this)),this.g&&(this.readyState=3,ws(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ku(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ku(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Is(this):ws(this),this.readyState==3&&ku(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Is(this))},n.Qa=function(o){this.g&&(this.response=o,Is(this))},n.ga=function(){this.g&&Is(this)};function Is(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ws(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function ws(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Bi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Vu(o){let u="";return Z(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Sa(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Vu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Ve(o,u,d))}function Fe(o){ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Fe,ie);var I_=/^https?$/i,w_=["POST","PUT"];n=Fe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ea.g(),this.v=this.o?ou(this.o):ou(Ea),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Du(this,k);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(w_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of d)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{xu(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Du(this,k)}};function Du(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Ou(o),ji(o)}function Ou(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),ji(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),Fe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Nu(this):this.bb())},n.bb=function(){Nu(this)};function Nu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ln(o)!=4||o.Z()!=2)){if(o.u&&ln(o)==4)Qe(o.Ea,0,o);else if(de(o,"readystatechange"),ln(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=W===0){var P=String(o.D).match(Au)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!I_.test(P?P.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var k=2<ln(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",Ou(o)}}finally{ji(o)}}}}function ji(o,u){if(o.g){xu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function xu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ln(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Pt(u)}};function Mu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function A_(o){const u={};o=(o.g&&2<=ln(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(F(o[m]))continue;var d=b(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}A(u,function(m){return m.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function As(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function Lu(o){this.Aa=0,this.i=[],this.j=new _s,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=As("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=As("baseRetryDelayMs",5e3,o),this.cb=As("retryDelaySeedMs",1e4,o),this.Wa=As("forwardChannelMaxRetries",2,o),this.wa=As("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new yu(o&&o.concurrentRequestLimit),this.Da=new E_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Lu.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,m){dt(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=Wu(this,null,this.W),Hi(this)};function Pa(o){if(Fu(o),o.G==3){var u=o.U++,d=an(o.I);if(Ve(d,"SID",o.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),bs(o,d),u=new Cn(o,o.j,u),u.L=2,u.v=Fi(an(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Ku(u.j,null),u.g.ea(u.v)),u.F=Date.now(),xi(u)}zu(o)}function $i(o){o.g&&(ka(o),o.g.cancel(),o.g=null)}function Fu(o){$i(o),o.u&&(l.clearTimeout(o.u),o.u=null),qi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Hi(o){if(!vu(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||Dt(),me||(ge(),me=!0),It.add(u,o),o.B=0}}function b_(o,u){return Eu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ms(g(o.Ga,o,u),qu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Cn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Bu(this,P,u),d=an(this.I),Ve(d,"RID",o),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),bs(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Vu(k)))+"&"+u:this.m&&Sa(d,this.m,k)),Ra(this.h,P),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),P.T=!0,Ia(P,d,null)):Ia(P,d,u),this.G=2}}else this.G==3&&(o?Uu(this,o):this.i.length==0||vu(this.h)||Uu(this))};function Uu(o,u){var d;u?d=u.l:d=o.U++;const m=an(o.I);Ve(m,"SID",o.K),Ve(m,"RID",d),Ve(m,"AID",o.T),bs(o,m),o.m&&o.o&&Sa(m,o.m,o.o),d=new Cn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Bu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ra(o.h,d),Ia(d,m,u)}function bs(o,u){o.H&&Z(o.H,function(d,m){Ve(u,m,d)}),o.l&&wu({},function(d,m){Ve(u,m,d)})}function Bu(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let k=-1;for(;;){const W=["count="+d];k==-1?0<d?(k=P[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let Se=!0;for(let Ye=0;Ye<d;Ye++){let Ie=P[Ye].g;const rt=P[Ye].map;if(Ie-=k,0>Ie)k=Math.max(0,P[Ye].g-100),Se=!1;else try{T_(rt,W,"req"+Ie+"_")}catch{m&&m(rt)}}if(Se){m=W.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function ju(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||Dt(),me||(ge(),me=!0),It.add(u,o),o.v=0}}function Ca(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ms(g(o.Fa,o),qu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,$u(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ms(g(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),$i(this),$u(this))};function ka(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function $u(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),bs(o,u),o.m&&o.o&&Sa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Fi(an(u)),d.m=null,d.P=!0,gu(d,o)}n.Za=function(){this.C!=null&&(this.C=null,$i(this),Ca(this),dt(19))};function qi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Hu(o,u){var d=null;if(o.g==u){qi(o),ka(o),o.g=null;var m=2}else if(ba(o.h,u))d=u.D,Tu(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;m=Di(),de(m,new hu(m,d)),Hi(o)}else ju(o);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&b_(o,u)||m==2&&Ca(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:ir(o,5);break;case 4:ir(o,10);break;case 3:ir(o,6);break;default:ir(o,2)}}}function qu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function ir(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const P=!m;m=new sr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mi(m,"https"),Fi(m),P?y_(m.toString(),d):v_(m.toString(),d)}else dt(2);o.G=0,o.l&&o.l.sa(u),zu(o),Fu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function zu(o){if(o.G=0,o.ka=[],o.l){const u=Iu(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function Wu(o,u,d){var m=d instanceof sr?an(d):new sr(d);if(m.g!="")u&&(m.g=u+"."+m.g),Li(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new sr(null);m&&Mi(k,m),u&&(k.g=u),P&&Li(k,P),d&&(k.l=d),m=k}return d=o.D,u=o.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",o.la),bs(o,m),m}function Ku(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Fe(new Ui({eb:d})):new Fe(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Gu(){}n=Gu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function zi(){}zi.prototype.g=function(o,u){return new wt(o,u)};function wt(o,u){ie.call(this),this.g=new Lu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Pr(this)}C(wt,ie),wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Pa(this.g)},wt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Xe(o),o=d);u.i.push(new l_(u.Ya++,o)),u.G==3&&Hi(u)},wt.prototype.N=function(){this.g.l=null,delete this.j,Pa(this.g),delete this.g,wt.aa.N.call(this)};function Qu(o){ya.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(Qu,ya);function Ju(){va.call(this),this.status=1}C(Ju,va);function Pr(o){this.g=o}C(Pr,Gu),Pr.prototype.ua=function(){de(this.g,"a")},Pr.prototype.ta=function(o){de(this.g,new Qu(o))},Pr.prototype.sa=function(o){de(this.g,new Ju)},Pr.prototype.ra=function(){de(this.g,"b")},zi.prototype.createWebChannel=zi.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,pg=function(){return new zi},dg=function(){return Di()},fg=nr,Sl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oi.NO_ERROR=0,Oi.TIMEOUT=8,Oi.HTTP_ERROR=6,ho=Oi,fu.COMPLETE="complete",hg=fu,au.EventType=ps,ps.OPEN="a",ps.CLOSE="b",ps.ERROR="c",ps.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Vs=au,Fe.prototype.listenOnce=Fe.prototype.L,Fe.prototype.getLastError=Fe.prototype.Ka,Fe.prototype.getLastErrorCode=Fe.prototype.Ba,Fe.prototype.getStatus=Fe.prototype.Z,Fe.prototype.getResponseJson=Fe.prototype.Oa,Fe.prototype.getResponseText=Fe.prototype.oa,Fe.prototype.send=Fe.prototype.ea,Fe.prototype.setWithCredentials=Fe.prototype.Ha,ug=Fe}).apply(typeof Xi<"u"?Xi:typeof self<"u"?self:typeof window<"u"?window:{});const nf="@firebase/firestore",rf="4.8.0";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let cs="11.10.0";/**
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
 */const vr=new fc("@firebase/firestore");function Nr(){return vr.logLevel}function X(n,...e){if(vr.logLevel<=_e.DEBUG){const t=e.map(Rc);vr.debug(`Firestore (${cs}): ${n}`,...t)}}function wn(n,...e){if(vr.logLevel<=_e.ERROR){const t=e.map(Rc);vr.error(`Firestore (${cs}): ${n}`,...t)}}function Qn(n,...e){if(vr.logLevel<=_e.WARN){const t=e.map(Rc);vr.warn(`Firestore (${cs}): ${n}`,...t)}}function Rc(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function oe(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,gg(n,r,t)}function gg(n,e,t){let r=`FIRESTORE (${cs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wn(r),new Error(r)}function Re(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||gg(e,s,r)}function fe(n,e){return n}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends Rn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class mg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Fw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ot.UNAUTHENTICATED))}shutdown(){}}class Uw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Bw{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new Kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new mg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new ot(e)}}class jw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class $w{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new jw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Hw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Lt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new sf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new sf(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function qw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function _g(){return new TextEncoder}/**
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
 */class Sc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=qw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function pe(n,e){return n<e?-1:n>e?1:0}function Pl(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return pe(r,s);{const i=_g(),a=zw(i.encode(of(n,t)),i.encode(of(e,t)));return a!==0?a:pe(r,s)}}t+=r>65535?2:1}return pe(n.length,e.length)}function of(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function zw(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return pe(n[t],e[t]);return pe(n.length,e.length)}function Yr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const af="__name__";class Kt{constructor(e,t,r){t===void 0?t=0:t>e.length&&oe(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&oe(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Kt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Kt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Kt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return pe(e.length,t.length)}static compareSegments(e,t){const r=Kt.isNumericId(e),s=Kt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Kt.extractNumericId(e).compare(Kt.extractNumericId(t)):Pl(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Wn.fromString(e.substring(4,e.length-2))}}class xe extends Kt{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new xe(t)}static emptyPath(){return new xe([])}}const Ww=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class et extends Kt{construct(e,t,r){return new et(e,t,r)}static isValidIdentifier(e){return Ww.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),et.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===af}static keyField(){return new et([af])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ne(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new et(t)}static emptyPath(){return new et([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(xe.fromString(e))}static fromName(e){return new se(xe.fromString(e).popFirst(5))}static empty(){return new se(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new xe(e.slice()))}}/**
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
 */function Kw(n,e,t){if(!t)throw new ne(U.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gw(n,e,t,r){if(e===!0&&r===!0)throw new ne(U.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function lf(n){if(!se.isDocumentKey(n))throw new ne(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function yg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Pc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":oe(12329,{type:typeof n})}function ai(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Pc(n);throw new ne(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function $e(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ri(n,e){if(!yg(n))throw new ne(U.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new ne(U.INVALID_ARGUMENT,t);return!0}/**
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
 */const cf=-62135596800,uf=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*uf);return new De(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<cf)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/uf}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ri(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-cf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:$e("string",De._jsonSchemaVersion),seconds:$e("number"),nanoseconds:$e("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new De(0,0))}static max(){return new ce(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const li=-1;function Qw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new De(t+1,0):new De(t,r));return new Jn(s,se.empty(),e)}function Jw(n){return new Jn(n.readTime,n.key,li)}class Jn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Jn(ce.min(),se.empty(),li)}static max(){return new Jn(ce.max(),se.empty(),li)}}function Xw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=se.comparator(n.documentKey,e.documentKey),t!==0?t:pe(n.largestBatchId,e.largestBatchId))}/**
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
 */const Yw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Zw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function us(n){if(n.code!==U.FAILED_PRECONDITION||n.message!==Yw)throw n;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof M?t:M.resolve(t)}catch(t){return M.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):M.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):M.reject(t)}static resolve(e){return new M((t,r)=>{t(e)})}static reject(e){return new M((t,r)=>{r(e)})}static waitFor(e){return new M((t,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&t()},c=>r(c))}),a=!0,i===s&&t()})}static or(e){let t=M.resolve(!1);for(const r of e)t=t.next(s=>s?M.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,t){return new M((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function eA(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hs(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ra{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ra.ue=-1;/**
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
 */const Cc=-1;function sa(n){return n==null}function Vo(n){return n===0&&1/n==-1/0}function tA(n){return typeof n=="number"&&Number.isInteger(n)&&!Vo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const vg="";function nA(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=hf(e)),e=rA(n.get(t),e);return hf(e)}function rA(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case vg:t+="";break;default:t+=i}}return t}function hf(n){return n+vg+""}/**
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
 */function ff(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ir(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Eg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Me{constructor(e,t){this.comparator=e,this.root=t||Ze.EMPTY}insert(e,t){return new Me(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yi(this.root,e,this.comparator,!0)}}class Yi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Ze(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Ze(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new df(this.data.getIterator())}getIteratorFrom(e){return new df(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class df{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ut{constructor(e){this.fields=e,e.sort(et.comparator)}static empty(){return new Ut([])}unionWith(e){let t=new qe(et.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ut(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Yr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Tg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class tt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Tg("Invalid base64 string: "+i):i}}(e);return new tt(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new tt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tt.EMPTY_BYTE_STRING=new tt("");const sA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=sA.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(n.seconds),nanos:Ue(n.nanos)}}function Ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Yn(n){return typeof n=="string"?tt.fromBase64String(n):tt.fromUint8Array(n)}/**
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
 */const Ig="server_timestamp",wg="__type__",Ag="__previous_value__",bg="__local_write_time__";function kc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[wg])===null||t===void 0?void 0:t.stringValue)===Ig}function ia(n){const e=n.mapValue.fields[Ag];return kc(e)?ia(e):e}function ci(n){const e=Xn(n.mapValue.fields[bg].timestampValue);return new De(e.seconds,e.nanos)}/**
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
 */class iA{constructor(e,t,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Do="(default)";class ui{constructor(e,t){this.projectId=e,this.database=t||Do}static empty(){return new ui("","")}get isDefaultDatabase(){return this.database===Do}isEqual(e){return e instanceof ui&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Rg="__type__",oA="__max__",Zi={mapValue:{}},Sg="__vector__",Oo="value";function Zn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?kc(n)?4:lA(n)?9007199254740991:aA(n)?10:11:oe(28295,{value:n})}function sn(n,e){if(n===e)return!0;const t=Zn(n);if(t!==Zn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ci(n).isEqual(ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Xn(s.timestampValue),l=Xn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Yn(s.bytesValue).isEqual(Yn(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Ue(s.doubleValue),l=Ue(i.doubleValue);return a===l?Vo(a)===Vo(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Yr(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(ff(a)!==ff(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!sn(a[c],l[c])))return!1;return!0}(n,e);default:return oe(52216,{left:n})}}function hi(n,e){return(n.values||[]).find(t=>sn(t,e))!==void 0}function Zr(n,e){if(n===e)return 0;const t=Zn(n),r=Zn(e);if(t!==r)return pe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return pe(n.booleanValue,e.booleanValue);case 2:return function(i,a){const l=Ue(i.integerValue||i.doubleValue),c=Ue(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return pf(n.timestampValue,e.timestampValue);case 4:return pf(ci(n),ci(e));case 5:return Pl(n.stringValue,e.stringValue);case 6:return function(i,a){const l=Yn(i),c=Yn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=pe(l[h],c[h]);if(f!==0)return f}return pe(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const l=pe(Ue(i.latitude),Ue(a.latitude));return l!==0?l:pe(Ue(i.longitude),Ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return gf(n.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},g=a.fields||{},_=(l=p[Oo])===null||l===void 0?void 0:l.arrayValue,C=(c=g[Oo])===null||c===void 0?void 0:c.arrayValue,V=pe(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:gf(_,C)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===Zi.mapValue&&a===Zi.mapValue)return 0;if(i===Zi.mapValue)return 1;if(a===Zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Pl(c[p],f[p]);if(g!==0)return g;const _=Zr(l[c[p]],h[f[p]]);if(_!==0)return _}return pe(c.length,f.length)}(n.mapValue,e.mapValue);default:throw oe(23264,{le:t})}}function pf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return pe(n,e);const t=Xn(n),r=Xn(e),s=pe(t.seconds,r.seconds);return s!==0?s:pe(t.nanos,r.nanos)}function gf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Zr(t[s],r[s]);if(i)return i}return pe(t.length,r.length)}function es(n){return Cl(n)}function Cl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Yn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return se.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Cl(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Cl(t.fields[a])}`;return s+"}"}(n.mapValue):oe(61005,{value:n})}function fo(n){switch(Zn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ia(n);return e?16+fo(e):16;case 5:return 2*n.stringValue.length;case 6:return Yn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+fo(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return Ir(r.fields,(i,a)=>{s+=i.length+fo(a)}),s}(n.mapValue);default:throw oe(13486,{value:n})}}function kl(n){return!!n&&"integerValue"in n}function Vc(n){return!!n&&"arrayValue"in n}function mf(n){return!!n&&"nullValue"in n}function _f(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function po(n){return!!n&&"mapValue"in n}function aA(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Rg])===null||t===void 0?void 0:t.stringValue)===Sg}function Ws(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ir(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ws(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ws(n.arrayValue.values[t]);return e}return Object.assign({},n)}function lA(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===oA}/**
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
 */class Ct{constructor(e){this.value=e}static empty(){return new Ct({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!po(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ws(t)}setAll(e){let t=et.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=Ws(a):s.push(l.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());po(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];po(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Ir(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ct(Ws(this.value))}}function Pg(n){const e=[];return Ir(n.fields,(t,r)=>{const s=new et([t]);if(po(r)){const i=Pg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Ut(e)}/**
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
 */class lt{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new lt(e,0,ce.min(),ce.min(),ce.min(),Ct.empty(),0)}static newFoundDocument(e,t,r,s){return new lt(e,1,t,ce.min(),r,s,0)}static newNoDocument(e,t){return new lt(e,2,t,ce.min(),ce.min(),Ct.empty(),0)}static newUnknownDocument(e,t){return new lt(e,3,t,ce.min(),ce.min(),Ct.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ct.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class No{constructor(e,t){this.position=e,this.inclusive=t}}function yf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),t.key):r=Zr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class xo{constructor(e,t="asc"){this.field=e,this.dir=t}}function cA(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Cg{}class He extends Cg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hA(e,t,r):t==="array-contains"?new pA(e,r):t==="in"?new gA(e,r):t==="not-in"?new mA(e,r):t==="array-contains-any"?new _A(e,r):new He(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new fA(e,r):new dA(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Zr(t,this.value)):t!==null&&Zn(this.value)===Zn(t)&&this.matchesComparison(Zr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends Cg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new on(e,t)}matches(e){return kg(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function kg(n){return n.op==="and"}function Vg(n){return uA(n)&&kg(n)}function uA(n){for(const e of n.filters)if(e instanceof on)return!1;return!0}function Vl(n){if(n instanceof He)return n.field.canonicalString()+n.op.toString()+es(n.value);if(Vg(n))return n.filters.map(e=>Vl(e)).join(",");{const e=n.filters.map(t=>Vl(t)).join(",");return`${n.op}(${e})`}}function Dg(n,e){return n instanceof He?function(r,s){return s instanceof He&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)}(n,e):n instanceof on?function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Dg(a,s.filters[l]),!0):!1}(n,e):void oe(19439)}function Og(n){return n instanceof He?function(t){return`${t.field.canonicalString()} ${t.op} ${es(t.value)}`}(n):n instanceof on?function(t){return t.op.toString()+" {"+t.getFilters().map(Og).join(" ,")+"}"}(n):"Filter"}class hA extends He{constructor(e,t,r){super(e,t,r),this.key=se.fromName(r.referenceValue)}matches(e){const t=se.comparator(e.key,this.key);return this.matchesComparison(t)}}class fA extends He{constructor(e,t){super(e,"in",t),this.keys=Ng("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dA extends He{constructor(e,t){super(e,"not-in",t),this.keys=Ng("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Ng(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>se.fromName(r.referenceValue))}class pA extends He{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Vc(t)&&hi(t.arrayValue,this.value)}}class gA extends He{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&hi(this.value.arrayValue,t)}}class mA extends He{constructor(e,t){super(e,"not-in",t)}matches(e){if(hi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!hi(this.value.arrayValue,t)}}class _A extends He{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Vc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>hi(this.value.arrayValue,r))}}/**
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
 */class yA{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function Ef(n,e=null,t=[],r=[],s=null,i=null,a=null){return new yA(n,e,t,r,s,i,a)}function Dc(n){const e=fe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Vl(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),sa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>es(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>es(r)).join(",")),e.Pe=t}return e.Pe}function Oc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!cA(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Dg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!vf(n.startAt,e.startAt)&&vf(n.endAt,e.endAt)}function Dl(n){return se.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class oa{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function vA(n,e,t,r,s,i,a,l){return new oa(n,e,t,r,s,i,a,l)}function Nc(n){return new oa(n)}function Tf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function EA(n){return n.collectionGroup!==null}function Ks(n){const e=fe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qe(et.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new xo(i,r))}),t.has(et.keyField().canonicalString())||e.Te.push(new xo(et.keyField(),r))}return e.Te}function Xt(n){const e=fe(n);return e.Ie||(e.Ie=TA(e,Ks(n))),e.Ie}function TA(n,e){if(n.limitType==="F")return Ef(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xo(s.field,i)});const t=n.endAt?new No(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new No(n.startAt.position,n.startAt.inclusive):null;return Ef(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ol(n,e,t){return new oa(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function aa(n,e){return Oc(Xt(n),Xt(e))&&n.limitType===e.limitType}function xg(n){return`${Dc(Xt(n))}|lt:${n.limitType}`}function xr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Og(s)).join(", ")}]`),sa(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>es(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>es(s)).join(",")),`Target(${r})`}(Xt(n))}; limitType=${n.limitType})`}function la(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Ks(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=yf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Ks(r),s)||r.endAt&&!function(a,l,c){const h=yf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Ks(r),s))}(n,e)}function IA(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Mg(n){return(e,t)=>{let r=!1;for(const s of Ks(n)){const i=wA(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function wA(n,e,t){const r=n.field.isKeyField()?se.comparator(e.key,t.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Zr(c,h):oe(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:n.dir})}}/**
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
 */class wr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ir(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Eg(this.inner)}size(){return this.innerSize}}/**
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
 */const AA=new Me(se.comparator);function An(){return AA}const Lg=new Me(se.comparator);function Ds(...n){let e=Lg;for(const t of n)e=e.insert(t.key,t);return e}function Fg(n){let e=Lg;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function hr(){return Gs()}function Ug(){return Gs()}function Gs(){return new wr(n=>n.toString(),(n,e)=>n.isEqual(e))}const bA=new Me(se.comparator),RA=new qe(se.comparator);function ye(...n){let e=RA;for(const t of n)e=e.add(t);return e}const SA=new qe(pe);function PA(){return SA}/**
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
 */function xc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vo(e)?"-0":e}}function Bg(n){return{integerValue:""+n}}function CA(n,e){return tA(e)?Bg(e):xc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class ca{constructor(){this._=void 0}}function kA(n,e,t){return n instanceof fi?function(s,i){const a={fields:{[wg]:{stringValue:Ig},[bg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&kc(i)&&(i=ia(i)),i&&(a.fields[Ag]=i),{mapValue:a}}(t,e):n instanceof di?$g(n,e):n instanceof pi?Hg(n,e):function(s,i){const a=jg(s,i),l=If(a)+If(s.Ee);return kl(a)&&kl(s.Ee)?Bg(l):xc(s.serializer,l)}(n,e)}function VA(n,e,t){return n instanceof di?$g(n,e):n instanceof pi?Hg(n,e):t}function jg(n,e){return n instanceof Mo?function(r){return kl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class fi extends ca{}class di extends ca{constructor(e){super(),this.elements=e}}function $g(n,e){const t=qg(e);for(const r of n.elements)t.some(s=>sn(s,r))||t.push(r);return{arrayValue:{values:t}}}class pi extends ca{constructor(e){super(),this.elements=e}}function Hg(n,e){let t=qg(e);for(const r of n.elements)t=t.filter(s=>!sn(s,r));return{arrayValue:{values:t}}}class Mo extends ca{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function If(n){return Ue(n.integerValue||n.doubleValue)}function qg(n){return Vc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class DA{constructor(e,t){this.field=e,this.transform=t}}function OA(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof di&&s instanceof di||r instanceof pi&&s instanceof pi?Yr(r.elements,s.elements,sn):r instanceof Mo&&s instanceof Mo?sn(r.Ee,s.Ee):r instanceof fi&&s instanceof fi}(n.transform,e.transform)}class NA{constructor(e,t){this.version=e,this.transformResults=t}}class yn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new yn}static exists(e){return new yn(void 0,e)}static updateTime(e){return new yn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function go(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ua{}function zg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Kg(n.key,yn.none()):new Si(n.key,n.data,yn.none());{const t=n.data,r=Ct.empty();let s=new qe(et.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Ar(n.key,r,new Ut(s.toArray()),yn.none())}}function xA(n,e,t){n instanceof Si?function(s,i,a){const l=s.value.clone(),c=Af(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Ar?function(s,i,a){if(!go(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Af(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Wg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Qs(n,e,t,r){return n instanceof Si?function(i,a,l,c){if(!go(i.precondition,a))return l;const h=i.value.clone(),f=bf(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof Ar?function(i,a,l,c){if(!go(i.precondition,a))return l;const h=bf(i.fieldTransforms,c,a),f=a.data;return f.setAll(Wg(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(n,e,t,r):function(i,a,l){return go(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function MA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=jg(r.transform,s||null);i!=null&&(t===null&&(t=Ct.empty()),t.set(r.field,i))}return t||null}function wf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Yr(r,s,(i,a)=>OA(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Si extends ua{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Ar extends ua{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wg(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Af(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,VA(a,l,t[s]))}return r}function bf(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,kA(i,a,e))}return r}class Kg extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class LA extends ua{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class FA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&xA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Qs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Qs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ug();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=zg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ce.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ye())}isEqual(e){return this.batchId===e.batchId&&Yr(this.mutations,e.mutations,(t,r)=>wf(t,r))&&Yr(this.baseMutations,e.baseMutations,(t,r)=>wf(t,r))}}class Mc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Re(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return bA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Mc(e,t,r,s)}}/**
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
 */class UA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class BA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var je,Ee;function jA(n){switch(n){case U.OK:return oe(64938);case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0;default:return oe(15467,{code:n})}}function Gg(n){if(n===void 0)return wn("GRPC error has no .code"),U.UNKNOWN;switch(n){case je.OK:return U.OK;case je.CANCELLED:return U.CANCELLED;case je.UNKNOWN:return U.UNKNOWN;case je.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case je.INTERNAL:return U.INTERNAL;case je.UNAVAILABLE:return U.UNAVAILABLE;case je.UNAUTHENTICATED:return U.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case je.NOT_FOUND:return U.NOT_FOUND;case je.ALREADY_EXISTS:return U.ALREADY_EXISTS;case je.PERMISSION_DENIED:return U.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case je.ABORTED:return U.ABORTED;case je.OUT_OF_RANGE:return U.OUT_OF_RANGE;case je.UNIMPLEMENTED:return U.UNIMPLEMENTED;case je.DATA_LOSS:return U.DATA_LOSS;default:return oe(39323,{code:n})}}(Ee=je||(je={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const $A=new Wn([4294967295,4294967295],0);function Rf(n){const e=_g().encode(n),t=new cg;return t.update(e),new Uint8Array(t.digest())}function Sf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Wn([t,r],0),new Wn([s,i],0)]}class Lc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Os(`Invalid padding: ${t}`);if(r<0)throw new Os(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Os(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Os(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Wn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Wn.fromNumber(r)));return s.compare($A)===1&&(s=new Wn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Rf(e),[r,s]=Sf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Lc(i,s,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.fe===0)return;const t=Rf(e),[r,s]=Sf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Os extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ha{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Pi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ha(ce.min(),s,new Me(pe),An(),ye())}}class Pi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Pi(r,t,ye(),ye(),ye())}}/**
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
 */class mo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Qg{constructor(e,t){this.targetId=e,this.De=t}}class Jg{constructor(e,t,r=tt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Pf{constructor(){this.ve=0,this.Ce=Cf(),this.Fe=tt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ye(),t=ye(),r=ye();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new Pi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Cf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class HA{constructor(e){this.We=e,this.Ge=new Map,this.ze=An(),this.je=eo(),this.Je=eo(),this.He=new Me(pe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((r,s)=>{this.nt(s)&&t(s)})}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Dl(i))if(r===0){const a=new se(i.path);this.Xe(t,a,lt.newNoDocument(a,ce.min()))}else Re(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Yn(r).toUint8Array()}catch(c){if(c instanceof Tg)return Qn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Lc(a,s,i)}catch(c){return Qn(c instanceof Os?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),s++)}),s}Pt(e){const t=new Map;this.Ge.forEach((i,a)=>{const l=this.st(a);if(l){if(i.current&&Dl(l.target)){const c=new se(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,lt.newNoDocument(c,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}});let r=ye();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new ha(e,t,this.He,this.ze,r);return this.ze=An(),this.je=eo(),this.Je=eo(),this.He=new Me(pe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Pf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new qe(pe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new qe(pe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||X("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Pf),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function eo(){return new Me(se.comparator)}function Cf(){return new Me(se.comparator)}const qA={asc:"ASCENDING",desc:"DESCENDING"},zA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},WA={and:"AND",or:"OR"};class KA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Nl(n,e){return n.useProto3Json||sa(e)?e:{value:e}}function Lo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Xg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function GA(n,e){return Lo(n,e.toTimestamp())}function Yt(n){return Re(!!n,49232),ce.fromTimestamp(function(t){const r=Xn(t);return new De(r.seconds,r.nanos)}(n))}function Fc(n,e){return xl(n,e).canonicalString()}function xl(n,e){const t=function(s){return new xe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Yg(n){const e=xe.fromString(n);return Re(rm(e),10190,{key:e.toString()}),e}function Ml(n,e){return Fc(n.databaseId,e.path)}function Qa(n,e){const t=Yg(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(U.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new se(em(t))}function Zg(n,e){return Fc(n.databaseId,e)}function QA(n){const e=Yg(n);return e.length===4?xe.emptyPath():em(e)}function Ll(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function em(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function kf(n,e,t){return{name:Ml(n,e),fields:t.value.mapValue.fields}}function JA(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string",58123),tt.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),tt.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?U.UNKNOWN:Gg(h.code);return new ne(f,h.message||"")}(a);t=new Jg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qa(n,r.document.name),i=Yt(r.document.updateTime),a=r.document.createTime?Yt(r.document.createTime):ce.min(),l=new Ct({mapValue:{fields:r.document.fields}}),c=lt.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new mo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qa(n,r.document),i=r.readTime?Yt(r.readTime):ce.min(),a=lt.newNoDocument(s,i),l=r.removedTargetIds||[];t=new mo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qa(n,r.document),i=r.removedTargetIds||[];t=new mo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new BA(s,i),l=r.targetId;t=new Qg(l,a)}}return t}function XA(n,e){let t;if(e instanceof Si)t={update:kf(n,e.key,e.value)};else if(e instanceof Kg)t={delete:Ml(n,e.key)};else if(e instanceof Ar)t={update:kf(n,e.key,e.data),updateMask:o0(e.fieldMask)};else{if(!(e instanceof LA))return oe(16599,{Rt:e.type});t={verify:Ml(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof fi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof di)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof pi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Mo)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw oe(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:GA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(n,e.precondition)),t}function YA(n,e){return n&&n.length>0?(Re(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Yt(s.updateTime):Yt(i);return a.isEqual(ce.min())&&(a=Yt(i)),new NA(a,s.transformResults||[])}(t,e))):[]}function ZA(n,e){return{documents:[Zg(n,e.path)]}}function e0(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Zg(n,s);const i=function(h){if(h.length!==0)return nm(on.create(h,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Mr(g.field),direction:r0(g.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Nl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:t,parent:s}}function t0(n){let e=QA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=t.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];t.where&&(i=function(p){const g=tm(p);return g instanceof on&&Vg(g)?g.getFilters():[g]}(t.where));let a=[];t.orderBy&&(a=function(p){return p.map(g=>function(C){return new xo(Lr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(t.orderBy));let l=null;t.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,sa(g)?null:g}(t.limit));let c=null;t.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new No(_,g)}(t.startAt));let h=null;return t.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new No(_,g)}(t.endAt)),vA(e,s,a,i,l,"F",c,h)}function n0(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function tm(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Lr(t.unaryFilter.field);return He.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Lr(t.unaryFilter.field);return He.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lr(t.unaryFilter.field);return He.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Lr(t.unaryFilter.field);return He.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(n):n.fieldFilter!==void 0?function(t){return He.create(Lr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return on.create(t.compositeFilter.filters.map(r=>tm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(t.compositeFilter.op))}(n):oe(30097,{filter:n})}function r0(n){return qA[n]}function s0(n){return zA[n]}function i0(n){return WA[n]}function Mr(n){return{fieldPath:n.canonicalString()}}function Lr(n){return et.fromServerFormat(n.fieldPath)}function nm(n){return n instanceof He?function(t){if(t.op==="=="){if(_f(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NAN"}};if(mf(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(_f(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NAN"}};if(mf(t.value))return{unaryFilter:{field:Mr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mr(t.field),op:s0(t.op),value:t.value}}}(n):n instanceof on?function(t){const r=t.getFilters().map(s=>nm(s));return r.length===1?r[0]:{compositeFilter:{op:i0(t.op),filters:r}}}(n):oe(54877,{filter:n})}function o0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function rm(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class jn{constructor(e,t,r,s,i=ce.min(),a=ce.min(),l=tt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new jn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new jn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class a0{constructor(e){this.gt=e}}function l0(n){const e=t0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ol(e,e.limit,"L"):e}/**
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
 */class c0{constructor(){this.Dn=new u0}addToCollectionParentIndex(e,t){return this.Dn.add(t),M.resolve()}getCollectionParents(e,t){return M.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return M.resolve()}deleteFieldIndex(e,t){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,t){return M.resolve()}getDocumentsMatchingTarget(e,t){return M.resolve(null)}getIndexType(e,t){return M.resolve(0)}getFieldIndexes(e,t){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,t){return M.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,t){return M.resolve(Jn.min())}updateCollectionGroup(e,t,r){return M.resolve()}updateIndexEntries(e,t){return M.resolve()}}class u0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new qe(xe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const Vf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},sm=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(sm,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class ts{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ts(0)}static ur(){return new ts(-1)}}/**
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
 */const Df="LruGarbageCollector",h0=1048576;function Of([n,e],[t,r]){const s=pe(n,t);return s===0?pe(e,r):s}class f0{constructor(e){this.Tr=e,this.buffer=new qe(Of),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Of(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class d0{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){X(Df,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){hs(t)?X(Df,"Ignoring IndexedDB error during garbage collection: ",t):await us(t)}await this.Rr(3e5)})}}class p0{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return M.resolve(ra.ue);const r=new f0(t);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Vf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Vf):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,t))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Nr()<=_e.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function g0(n,e){return new p0(n,e)}/**
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
 */class m0{constructor(){this.changes=new wr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?M.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class _0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class y0{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Qs(r.mutation,s,Ut.empty(),De.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ye()){const s=hr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ds();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=hr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ye()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,s){let i=An();const a=Gs(),l=function(){return Gs()}();return t.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Ar)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Qs(f.mutation,h,f.mutation.getFieldMask(),De.now())):a.set(h.key,Ut.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var p;return l.set(h,new _0(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Gs();let s=new Me((a,l)=>a-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Ut.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=Ug();f.forEach(g=>{if(!i.has(g)){const _=zg(t.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):EA(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):M.resolve(hr());let l=li,c=i;return a.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(f=>({batchId:l,changes:Fg(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new se(t)).next(r=>{let s=Ds();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ds();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,g){return new oa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,lt.newInvalidDocument(f)))});let l=Ds();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&Qs(f.mutation,h,Ut.empty(),De.now()),la(t,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class v0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return M.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}}(t)),M.resolve()}getNamedQuery(e,t){return M.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,function(s){return{name:s.name,query:l0(s.bundledQuery),readTime:Yt(s.readTime)}}(t)),M.resolve()}}/**
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
 */class E0{constructor(){this.overlays=new Me(se.comparator),this.kr=new Map}getOverlay(e,t){return M.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hr();return M.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.wt(e,t,i)}),M.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,t,r){const s=hr(),i=t.length+1,a=new se(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Me((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=hr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new UA(t,r));let i=this.kr.get(t);i===void 0&&(i=ye(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class T0{constructor(){this.sessionToken=tt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,M.resolve()}}/**
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
 */class Uc{constructor(){this.qr=new qe(We.Qr),this.$r=new qe(We.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new We(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Wr(new We(e,t))}Gr(e,t){e.forEach(r=>this.removeReference(r,t))}zr(e){const t=new se(new xe([])),r=new We(t,e),s=new We(t,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new se(new xe([])),r=new We(t,e),s=new We(t,e+1);let i=ye();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new We(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return se.comparator(e.key,t.key)||pe(e.Hr,t.Hr)}static Ur(e,t){return pe(e.Hr,t.Hr)||se.comparator(e.key,t.key)}}/**
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
 */class I0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new qe(We.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new FA(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new We(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,t){return M.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Cc:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new We(t,0),s=new We(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const l=this.Zr(a.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(pe);return t.forEach(s=>{const i=new We(s,0),a=new We(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new We(new se(i),0);let l=new qe(pe);return this.Yr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)},a),M.resolve(this.ei(l))}ei(e){const t=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Re(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(t.mutations,s=>{const i=new We(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,t){const r=new We(t,0),s=this.Yr.firstAfterOrEqual(r);return M.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class w0{constructor(e){this.ni=e,this.docs=function(){return new Me(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return M.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=An();const a=t.path,l=new se(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||Xw(Jw(f),r)<=0||(s.has(f.key)||la(t,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,t,r,s){oe(9500)}ri(e,t){return M.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new A0(this)}getSize(e){return M.resolve(this.size)}}class A0 extends m0{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),M.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class b0{constructor(e){this.persistence=e,this.ii=new wr(t=>Dc(t),Oc),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Uc,this.targetCount=0,this._i=ts.ar()}forEachTarget(e,t){return this.ii.forEach((r,s)=>t(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),M.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new ts(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,M.resolve()}updateTargetData(e,t){return this.hr(t),M.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return M.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),M.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),M.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return M.resolve(r)}containsKey(e,t){return M.resolve(this.oi.containsKey(t))}}/**
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
 */class im{constructor(e,t){this.ai={},this.overlays={},this.ui=new ra(0),this.ci=!1,this.ci=!0,this.li=new T0,this.referenceDelegate=e(this),this.hi=new b0(this),this.indexManager=new c0,this.remoteDocumentCache=function(s){return new w0(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new a0(t),this.Ti=new v0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new E0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new I0(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){X("MemoryPersistence","Starting transaction:",e);const s=new R0(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,t){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,t)))}}class R0 extends Zw{constructor(e){super(),this.currentSequenceNumber=e}}class Bc{constructor(e){this.persistence=e,this.Ai=new Uc,this.Ri=null}static Vi(e){return new Bc(e)}get mi(){if(this.Ri)return this.Ri;throw oe(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),M.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),M.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const s=se.fromPath(r);return this.fi(e,s).next(i=>{i||t.removeEntry(s,ce.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return M.or([()=>M.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Fo{constructor(e,t){this.persistence=e,this.gi=new wr(r=>nA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=g0(this,t)}static Vi(e,t){return new Fo(e,t)}Ii(){}di(e){return M.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}yr(e){let t=0;return this.gr(e,r=>{t++}).next(()=>t)}gr(e,t){return M.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?M.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,t).next(l=>{l||(r++,i.removeEntry(a,ce.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),M.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),M.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=fo(e.data.value)),t}Sr(e,t,r){return M.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class jc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ye(),s=ye();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new jc(e,t.fromCache,r,s)}}/**
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
 */class S0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class P0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return TE()?8:eA(ft())>0?6:4}()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new S0;return this.ws(e,t,a).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)})}).next(()=>i.result)}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Nr()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",xr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Nr()<=_e.DEBUG&&X("QueryEngine","Query:",xr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Nr()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",xr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(t))):M.resolve())}ps(e,t){if(Tf(t))return M.resolve(null);let r=Xt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Ol(t,null,"F"),r=Xt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ye(...i);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,Ol(t,null,"F")):this.vs(e,h,t,c)}))})))}ys(e,t,r,s){return Tf(t)||s.isEqual(ce.min())?M.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?M.resolve(null):(Nr()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),xr(t)),this.vs(e,a,t,Qw(s,li)).next(l=>l))})}bs(e,t){let r=new qe(Mg(e));return t.forEach((s,i)=>{la(e,i)&&(r=r.add(i))}),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Nr()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",xr(t)),this.gs.getDocumentsMatchingQuery(e,t,Jn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const $c="LocalStore",C0=3e8;class k0{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new Me(pe),this.Ms=new wr(i=>Dc(i),Oc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function V0(n,e,t,r){return new k0(n,e,t,r)}async function om(n,e){const t=fe(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ye();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:l}))})})}function D0(n,e){const t=fe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let _=M.resolve();return g.forEach(C=>{_=_.next(()=>f.getEntry(c,C)).next(V=>{const D=h.docVersions.get(C);Re(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function am(n){const e=fe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.hi.getLastRemoteSnapshotVersion(t))}function O0(n,e){const t=fe(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(t.hi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>t.hi.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(tt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=C0?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,_,f)&&l.push(t.hi.updateTargetData(i,_))});let c=An(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(N0(i,a,e.documentUpdates).next(f=>{c=f.Ls,h=f.ks})),!r.isEqual(ce.min())){const f=t.hi.getLastRemoteSnapshotVersion(i).next(p=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(t.Fs=s,i))}function N0(n,e,t){let r=ye(),s=ye();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=An();return t.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ce.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X($c,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ls:a,ks:s}})}function x0(n,e){const t=fe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Cc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function M0(n,e){const t=fe(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.hi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):t.hi.allocateTargetId(r).next(a=>(s=new jn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r})}async function Fl(n,e,t){const r=fe(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!hs(a))throw a;X($c,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Nf(n,e,t){const r=fe(n);let s=ce.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=fe(c),g=p.Ms.get(f);return g!==void 0?M.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)}(r,a,Xt(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:ce.min(),t?i:ye())).next(l=>(L0(r,IA(e),l),{documents:l,qs:i})))}function L0(n,e,t){let r=n.xs.get(e)||ce.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.xs.set(e,r)}class xf{constructor(){this.activeTargetIds=PA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F0{constructor(){this.Fo=new xf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new xf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class U0{xo(e){}shutdown(){}}/**
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
 */const Mf="ConnectivityMonitor";class Lf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){X(Mf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){X(Mf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let to=null;function Ul(){return to===null?to=function(){return 268435456+Math.round(2147483648*Math.random())}():to++,"0x"+to.toString(16)}/**
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
 */const Ja="RestConnection",B0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class j0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Do?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Ul(),l=this.Go(e,t.toUriEncodedString());X(Ja,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),f=os(h);return this.jo(e,l,c,r,f).then(p=>(X(Ja,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Qn(Ja,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,t){const r=B0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class $0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const it="WebChannelConnection";class H0 extends j0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Ul();return new Promise((l,c)=>{const h=new ug;h.setWithCredentials(!0),h.listenOnce(hg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ho.NO_ERROR:const p=h.getResponseJson();X(it,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ho.TIMEOUT:X(it,`RPC '${e}' ${a} timed out`),c(new ne(U.DEADLINE_EXCEEDED,"Request time out"));break;case ho.HTTP_ERROR:const g=h.getStatus();if(X(it,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const V=function($){const F=$.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(F)>=0?F:U.UNKNOWN}(C.status);c(new ne(V,C.message))}else c(new ne(U.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new ne(U.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{X(it,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);X(it,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",f,r,15)})}P_(e,t,r){const s=Ul(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=pg(),l=dg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(it,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);this.T_(p);let g=!1,_=!1;const C=new $0({Ho:D=>{_?X(it,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(X(it,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(it,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Yo:()=>p.close()}),V=(D,$,F)=>{D.listen($,j=>{try{F(j)}catch(q){setTimeout(()=>{throw q},0)}})};return V(p,Vs.EventType.OPEN,()=>{_||(X(it,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),V(p,Vs.EventType.CLOSE,()=>{_||(_=!0,X(it,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))}),V(p,Vs.EventType.ERROR,D=>{_||(_=!0,Qn(it,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.__(new ne(U.UNAVAILABLE,"The operation could not be completed")))}),V(p,Vs.EventType.MESSAGE,D=>{var $;if(!_){const F=D.data[0];Re(!!F,16349);const j=F,q=j?.error||(($=j[0])===null||$===void 0?void 0:$.error);if(q){X(it,`RPC '${e}' stream ${s} received error:`,q);const Q=q.status;let Z=function(E){const w=je[E];if(w!==void 0)return Gg(w)}(Q),A=q.message;Z===void 0&&(Z=U.INTERNAL,A="Unknown error status: "+Q+" with message "+q.message),_=!0,C.__(new ne(Z,A)),p.close()}else X(it,`RPC '${e}' stream ${s} received:`,F),C.a_(F)}}),V(l,fg.STAT_EVENT,D=>{D.stat===Sl.PROXY?X(it,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===Sl.NOPROXY&&X(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}function Xa(){return typeof document<"u"?document:null}/**
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
 */function fa(n){return new KA(n,!0)}/**
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
 */class lm{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Ff="PersistentStream";class cm{constructor(e,t,r,s,i,a,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new lm(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===U.RESOURCE_EXHAUSTED?(wn(t.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===t&&this.W_(r,s)},r=>{e(()=>{const s=new ne(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return X(Ff,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(X(Ff,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class q0 extends cm{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=JA(this.serializer,e),r=function(i){if(!("targetChange"in i))return ce.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ce.min():a.readTime?Yt(a.readTime):ce.min()}(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Ll(this.serializer),t.addTarget=function(i,a){let l;const c=a.target;if(l=Dl(c)?{documents:ZA(i,c)}:{query:e0(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Xg(i,a.resumeToken);const h=Nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ce.min())>0){l.readTime=Lo(i,a.snapshotVersion.toTimestamp());const h=Nl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=n0(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Ll(this.serializer),t.removeTarget=e,this.k_(t)}}class z0 extends cm{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=YA(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Ll(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>XA(this.serializer,r))};this.k_(t)}}/**
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
 */class W0{}class K0 extends W0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,xl(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(U.UNKNOWN,i.toString())})}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,xl(t,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(U.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class G0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wn(t),this._a=!1):X("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Er="RemoteStore";class Q0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{br(this)&&(X(Er,"Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.Ia.add(4),await Ci(h),h.Aa.set("Unknown"),h.Ia.delete(4),await da(h)}(this))})}),this.Aa=new G0(r,s)}}async function da(n){if(br(n))for(const e of n.da)await e(!0)}async function Ci(n){for(const e of n.da)await e(!1)}function um(n,e){const t=fe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Wc(t)?zc(t):fs(t).x_()&&qc(t,e))}function Hc(n,e){const t=fe(n),r=fs(t);t.Ta.delete(e),r.x_()&&hm(t,e),t.Ta.size===0&&(r.x_()?r.B_():br(t)&&t.Aa.set("Unknown"))}function qc(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fs(n).H_(e)}function hm(n,e){n.Ra.$e(e),fs(n).Y_(e)}function zc(n){n.Ra=new HA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),fs(n).start(),n.Aa.aa()}function Wc(n){return br(n)&&!fs(n).M_()&&n.Ta.size>0}function br(n){return fe(n).Ia.size===0}function fm(n){n.Ra=void 0}async function J0(n){n.Aa.set("Online")}async function X0(n){n.Ta.forEach((e,t)=>{qc(n,e)})}async function Y0(n,e){fm(n),Wc(n)?(n.Aa.la(e),zc(n)):n.Aa.set("Unknown")}async function Z0(n,e,t){if(n.Aa.set("Online"),e instanceof Jg&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))}(n,e)}catch(r){X(Er,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Uo(n,r)}else if(e instanceof mo?n.Ra.Ye(e):e instanceof Qg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(ce.min()))try{const r=await am(n.localStore);t.compareTo(r)>=0&&await function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(tt.EMPTY_BYTE_STRING,f.snapshotVersion)),hm(i,c);const p=new jn(f.target,c,h,f.sequenceNumber);qc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){X(Er,"Failed to raise snapshot:",r),await Uo(n,r)}}async function Uo(n,e,t){if(!hs(e))throw e;n.Ia.add(1),await Ci(n),n.Aa.set("Offline"),t||(t=()=>am(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{X(Er,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await da(n)})}function dm(n,e){return e().catch(t=>Uo(n,t,e))}async function pa(n){const e=fe(n),t=er(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Cc;for(;eb(e);)try{const s=await x0(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,tb(e,s)}catch(s){await Uo(e,s)}pm(e)&&gm(e)}function eb(n){return br(n)&&n.Pa.length<10}function tb(n,e){n.Pa.push(e);const t=er(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function pm(n){return br(n)&&!er(n).M_()&&n.Pa.length>0}function gm(n){er(n).start()}async function nb(n){er(n).na()}async function rb(n){const e=er(n);for(const t of n.Pa)e.X_(t.mutations)}async function sb(n,e,t){const r=n.Pa.shift(),s=Mc.from(r,e,t);await dm(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await pa(n)}async function ib(n,e){e&&er(n).Z_&&await async function(r,s){if(function(a){return jA(a)&&a!==U.ABORTED}(s.code)){const i=r.Pa.shift();er(r).N_(),await dm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await pa(r)}}(n,e),pm(n)&&gm(n)}async function Uf(n,e){const t=fe(n);t.asyncQueue.verifyOperationInProgress(),X(Er,"RemoteStore received new credentials");const r=br(t);t.Ia.add(3),await Ci(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await da(t)}async function ob(n,e){const t=fe(n);e?(t.Ia.delete(2),await da(t)):e||(t.Ia.add(2),await Ci(t),t.Aa.set("Unknown"))}function fs(n){return n.Va||(n.Va=function(t,r,s){const i=fe(t);return i.ia(),new q0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:J0.bind(null,n),e_:X0.bind(null,n),n_:Y0.bind(null,n),J_:Z0.bind(null,n)}),n.da.push(async e=>{e?(n.Va.N_(),Wc(n)?zc(n):n.Aa.set("Unknown")):(await n.Va.stop(),fm(n))})),n.Va}function er(n){return n.ma||(n.ma=function(t,r,s){const i=fe(t);return i.ia(),new z0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:nb.bind(null,n),n_:ib.bind(null,n),ea:rb.bind(null,n),ta:sb.bind(null,n)}),n.da.push(async e=>{e?(n.ma.N_(),await pa(n)):(await n.ma.stop(),n.Pa.length>0&&(X(Er,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))})),n.ma}/**
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
 */class Kc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Kc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gc(n,e){if(wn("AsyncQueue",`${e}: ${n}`),hs(n))return new ne(U.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Kr{static emptySet(e){return new Kr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||se.comparator(t.key,r.key):(t,r)=>se.comparator(t.key,r.key),this.keyedMap=Ds(),this.sortedSet=new Me(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Kr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Kr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Bf{constructor(){this.fa=new Me(se.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):oe(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,r)=>{e.push(r)}),e}}class ns{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ns(e,t,Kr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&aa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ab{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class lb{constructor(){this.queries=jf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=fe(t),i=s.queries;s.queries=jf(),i.forEach((a,l)=>{for(const c of l.wa)c.onError(r)})})(this,new ne(U.ABORTED,"Firestore shutting down"))}}function jf(){return new wr(n=>xg(n),aa)}async function cb(n,e){const t=fe(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new ab,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Gc(a,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Qc(t)}async function ub(n,e){const t=fe(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function hb(n,e){const t=fe(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&Qc(t)}function fb(n,e,t){const r=fe(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Qc(n){n.Da.forEach(e=>{e.next()})}var Bl,$f;($f=Bl||(Bl={})).Fa="default",$f.Cache="cache";class db{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ns(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=ns.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Bl.Cache}}/**
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
 */class mm{constructor(e){this.key=e}}class _m{constructor(e){this.key=e}}class pb{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ye(),this.mutatedKeys=ye(),this.Xa=Mg(e),this.eu=new Kr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Bf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=la(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;g&&_?g.data.isEqual(_.data)?C!==V&&(r.track({type:3,doc:_}),D=!0):this.iu(g,_)||(r.track({type:2,doc:_}),D=!0,(c&&this.Xa(_,c)>0||h&&this.Xa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),D=!0):g&&!_&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(_?(a=a.add(_),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,p)=>function(_,C){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{At:D})}};return V(_)-V(C)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),s=s!=null&&s;const l=t&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new ns(this.query,e.eu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Bf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(t=>this.Ha=this.Ha.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ha=this.Ha.delete(t)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ye(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const t=[];return e.forEach(r=>{this.Za.has(r)||t.push(new _m(r))}),this.Za.forEach(r=>{e.has(r)||t.push(new mm(r))}),t}uu(e){this.Ha=e.qs,this.Za=ye();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return ns.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Jc="SyncEngine";class gb{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class mb{constructor(e){this.key=e,this.lu=!1}}class _b{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new wr(l=>xg(l),aa),this.Tu=new Map,this.Iu=new Set,this.du=new Me(se.comparator),this.Eu=new Map,this.Au=new Uc,this.Ru={},this.Vu=new Map,this.mu=ts.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function yb(n,e,t=!0){const r=wm(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await ym(r,e,t,!0),s}async function vb(n,e){const t=wm(n);await ym(t,e,!0,!1)}async function ym(n,e,t,r){const s=await M0(n.localStore,Xt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await Eb(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&um(n.remoteStore,s),l}async function Eb(n,e,t,r,s){n.gu=(p,g,_)=>async function(V,D,$,F){let j=D.view.nu($);j.Ds&&(j=await Nf(V.localStore,D.query,!1).then(({documents:A})=>D.view.nu(A,j)));const q=F&&F.targetChanges.get(D.targetId),Q=F&&F.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges(j,V.isPrimaryClient,q,Q);return qf(V,D.targetId,Z._u),Z.snapshot}(n,p,g,_);const i=await Nf(n.localStore,e,!0),a=new pb(e,i.qs),l=a.nu(i.documents),c=Pi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);qf(n,t,h._u);const f=new gb(e,t,a);return n.Pu.set(e,f),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function Tb(n,e,t){const r=fe(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!aa(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Fl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Hc(r.remoteStore,s.targetId),jl(r,s.targetId)}).catch(us)):(jl(r,s.targetId),await Fl(r.localStore,s.targetId,!0))}async function Ib(n,e){const t=fe(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Hc(t.remoteStore,r.targetId))}async function wb(n,e,t){const r=kb(n);try{const s=await function(a,l){const c=fe(a),h=De.now(),f=l.reduce((_,C)=>_.add(C.key),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=An(),V=ye();return c.Os.getEntries(_,f).next(D=>{C=D,C.forEach(($,F)=>{F.isValidDocument()||(V=V.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,C)).next(D=>{p=D;const $=[];for(const F of l){const j=MA(F,p.get(F.key).overlayedDocument);j!=null&&$.push(new Ar(F.key,j,Pg(j.value.mapValue),yn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,$,l)}).next(D=>{g=D;const $=D.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(_,D.batchId,$)})}).then(()=>({batchId:g.batchId,changes:Fg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new Me(pe)),h=h.insert(l,c),a.Ru[a.currentUser.toKey()]=h}(r,s.batchId,t),await ki(r,s.changes),await pa(r.remoteStore)}catch(s){const i=Gc(s,"Failed to persist write");t.reject(i)}}async function vm(n,e){const t=fe(n);try{const r=await O0(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Eu.get(i);a&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Re(a.lu,14607):s.removedDocuments.size>0&&(Re(a.lu,42227),a.lu=!1))}),await ki(t,r,e)}catch(r){await us(r)}}function Hf(n,e,t){const r=fe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=fe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.wa)g.va(l)&&(h=!0)}),h&&Qc(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ab(n,e,t){const r=fe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Me(se.comparator);a=a.insert(i,lt.newNoDocument(i,ce.min()));const l=ye().add(i),c=new ha(ce.min(),new Map,new Me(pe),a,l);await vm(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Xc(r)}else await Fl(r.localStore,e,!1).then(()=>jl(r,e,t)).catch(us)}async function bb(n,e){const t=fe(n),r=e.batch.batchId;try{const s=await D0(t.localStore,e);Tm(t,r,null),Em(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ki(t,s)}catch(s){await us(s)}}async function Rb(n,e,t){const r=fe(n);try{const s=await function(a,l){const c=fe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Re(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Tm(r,e,t),Em(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ki(r,s)}catch(s){await us(s)}}function Em(n,e){(n.Vu.get(e)||[]).forEach(t=>{t.resolve()}),n.Vu.delete(e)}function Tm(n,e,t){const r=fe(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function jl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach(r=>{n.Au.containsKey(r)||Im(n,r)})}function Im(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Hc(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Xc(n))}function qf(n,e,t){for(const r of t)r instanceof mm?(n.Au.addReference(r.key,e),Sb(n,r)):r instanceof _m?(X(Jc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||Im(n,r.key)):oe(19791,{yu:r})}function Sb(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(X(Jc,"New document in limbo: "+t),n.Iu.add(r),Xc(n))}function Xc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new se(xe.fromString(e)),r=n.mu.next();n.Eu.set(r,new mb(t)),n.du=n.du.insert(t,r),um(n.remoteStore,new jn(Xt(Nc(t.path)),r,"TargetPurposeLimboResolution",ra.ue))}}async function ki(n,e,t){const r=fe(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{a.push(r.gu(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=t?.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=jc.Es(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.hu.J_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.Is,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!hs(p))throw p;X($c,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.Fs.get(g),C=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,V)}}}(r.localStore,i))}async function Pb(n,e){const t=fe(n);if(!t.currentUser.isEqual(e)){X(Jc,"User change. New user:",e.toKey());const r=await om(t.localStore,e);t.currentUser=e,function(i,a){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new ne(U.CANCELLED,a))})}),i.Vu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ki(t,r.Bs)}}function Cb(n,e){const t=fe(n),r=t.Eu.get(e);if(r&&r.lu)return ye().add(r.key);{let s=ye();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function wm(n){const e=fe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=vm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Cb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ab.bind(null,e),e.hu.J_=hb.bind(null,e.eventManager),e.hu.pu=fb.bind(null,e.eventManager),e}function kb(n){const e=fe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rb.bind(null,e),e}class Bo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=fa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return V0(this.persistence,new P0,e.initialUser,this.serializer)}Du(e){return new im(Bc.Vi,this.serializer)}bu(e){return new F0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Bo.provider={build:()=>new Bo};class Vb extends Bo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Re(this.persistence.referenceDelegate instanceof Fo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new d0(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new im(r=>Fo.Vi(r,t),this.serializer)}}class $l{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pb.bind(null,this.syncEngine),await ob(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lb}()}createDatastore(e){const t=fa(e.databaseInfo.databaseId),r=function(i){return new H0(i)}(e.databaseInfo);return function(i,a,l,c){return new K0(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,l){return new Q0(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Hf(this.syncEngine,t,0),function(){return Lf.C()?new Lf:new U0}())}createSyncEngine(e,t){return function(s,i,a,l,c,h,f){const p=new _b(s,i,a,l,c,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=fe(s);X(Er,"RemoteStore shutting down."),i.Ia.add(5),await Ci(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}$l.provider={build:()=>new $l};/**
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
 *//**
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
 */class Db{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const tr="FirestoreClient";class Ob{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=Sc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(tr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(tr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Gc(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ya(n,e){n.asyncQueue.verifyOperationInProgress(),X(tr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await om(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{Qn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then(()=>{X("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{Qn("Terminating Firestore due to IndexedDb database deletion failed",s)})}),n._offlineComponents=e}async function zf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Nb(n);X(tr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Uf(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Uf(e.remoteStore,s)),n._onlineComponents=e}async function Nb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){X(tr,"Using user provided OfflineComponentProvider");try{await Ya(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===U.FAILED_PRECONDITION||s.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Qn("Error using user provided cache. Falling back to memory cache: "+t),await Ya(n,new Bo)}}else X(tr,"Using default OfflineComponentProvider"),await Ya(n,new Vb(void 0));return n._offlineComponents}async function Am(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(X(tr,"Using user provided OnlineComponentProvider"),await zf(n,n._uninitializedComponentsProvider._online)):(X(tr,"Using default OnlineComponentProvider"),await zf(n,new $l))),n._onlineComponents}function xb(n){return Am(n).then(e=>e.syncEngine)}async function Mb(n){const e=await Am(n),t=e.eventManager;return t.onListen=yb.bind(null,e.syncEngine),t.onUnlisten=Tb.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=vb.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ib.bind(null,e.syncEngine),t}function Lb(n,e,t={}){const r=new Kn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new Db({next:g=>{f.Ou(),a.enqueueAndForget(()=>ub(i,p));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new ne(U.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new ne(U.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new db(Nc(l.path),f,{includeMetadataChanges:!0,ka:!0});return cb(i,p)}(await Mb(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function bm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Wf=new Map;/**
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
 */const Rm="firestore.googleapis.com",Kf=!0;class Gf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Rm,this.ssl=Kf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Kf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=sm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<h0)throw new ne(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=bm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(U.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Yc{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Fw;switch(r.type){case"firstParty":return new $w(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Wf.get(t);r&&(X("ComponentProvider","Removing Datastore"),Wf.delete(t),r.terminate())}(this),Promise.resolve()}}function Fb(n,e,t,r={}){var s;n=ai(n,Yc);const i=os(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(bp(`https://${c}`),Rp("Firestore",!0)),a.host!==Rm&&a.host!==c&&Qn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!mr(h,l)&&(n._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ot.MOCK_USER;else{f=fE(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ne(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ot(g)}n._authCredentials=new Uw(new mg(f,p))}}/**
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
 */class Zc{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zc(this.firestore,e,this._query)}}class Ke{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ke(this.firestore,e,this._key)}toJSON(){return{type:Ke._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ri(t,Ke._jsonSchema))return new Ke(e,r||null,new se(xe.fromString(t.referencePath)))}}Ke._jsonSchemaVersion="firestore/documentReference/1.0",Ke._jsonSchema={type:$e("string",Ke._jsonSchemaVersion),referencePath:$e("string")};class gi extends Zc{constructor(e,t,r){super(e,t,Nc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ke(this.firestore,null,new se(e))}withConverter(e){return new gi(this.firestore,e,this._path)}}function Sm(n,e,...t){if(n=nn(n),arguments.length===1&&(e=Sc.newId()),Kw("doc","path",e),n instanceof Yc){const r=xe.fromString(e,...t);return lf(r),new Ke(n,null,new se(r))}{if(!(n instanceof Ke||n instanceof gi))throw new ne(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return lf(r),new Ke(n.firestore,n instanceof gi?n.converter:null,new se(r))}}/**
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
 */const Qf="AsyncQueue";class Jf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new lm(this,"async_queue_retry"),this.oc=()=>{const r=Xa();r&&X(Qf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Xa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Xa();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Kn;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!hs(e))throw e;X(Qf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,wn("INTERNAL UNHANDLED ERROR: ",Xf(r)),r}).then(r=>(this.nc=!1,r))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Kc.createAndSchedule(this,e,t,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&oe(47125,{hc:Xf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Xf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class eu extends Yc{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Jf,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Jf(e),this._firestoreClient=void 0,await e}}}function Ub(n,e){const t=typeof n=="object"?n:kp(),r=typeof n=="string"?n:Do,s=pc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uE("firestore");i&&Fb(s,...i)}return s}function Pm(n){if(n._terminated)throw new ne(U.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Bb(n),n._firestoreClient}function Bb(n){var e,t,r;const s=n._freezeSettings(),i=function(l,c,h,f){return new iA(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,bm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new Ob(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(n._componentsProvider))}/**
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
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(tt.fromBase64String(e))}catch(t){throw new ne(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(tt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ri(e,kt._jsonSchema))return kt.fromBase64String(e.bytes)}}kt._jsonSchemaVersion="firestore/bytes/1.0",kt._jsonSchema={type:$e("string",kt._jsonSchemaVersion),bytes:$e("string")};/**
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
 */class tu{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new et(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nu{constructor(e){this._methodName=e}}/**
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
 */class Zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(Ri(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:$e("string",Zt._jsonSchemaVersion),latitude:$e("number"),longitude:$e("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class en{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ri(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new en(e.vectorValues);throw new ne(U.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:$e("string",en._jsonSchemaVersion),vectorValues:$e("object")};/**
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
 */const jb=/^__.*__$/;class $b{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ar(e,this.data,this.fieldMask,t,this.fieldTransforms):new Si(e,this.data,t,this.fieldTransforms)}}function Cm(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ec:n})}}class ru{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new ru(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return jo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Cm(this.Ec)&&jb.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Hb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||fa(e)}Dc(e,t,r,s=!1){return new ru({Ec:e,methodName:t,bc:r,path:et.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function qb(n){const e=n._freezeSettings(),t=fa(n._databaseId);return new Hb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function zb(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Om("Data must be an object, but it was:",a,r);const l=Vm(r,a);let c,h;if(i.merge)c=new Ut(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=Wb(e,p,t);if(!a.contains(g))throw new ne(U.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Gb(f,g)||f.push(g)}c=new Ut(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new $b(new Ct(l),c,h)}class su extends nu{_toFieldTransform(e){return new DA(e.path,new fi)}isEqual(e){return e instanceof su}}function km(n,e){if(Dm(n=nn(n)))return Om("Unsupported field value:",e,n),Vm(n,e);if(n instanceof nu)return function(r,s){if(!Cm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=km(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=nn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return CA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:Lo(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Lo(s.serializer,i)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof kt)return{bytesValue:Xg(s.serializer,r._byteString)};if(r instanceof Ke){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof en)return function(a,l){return{mapValue:{fields:{[Rg]:{stringValue:Sg},[Oo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return xc(l.serializer,h)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Pc(r)}`)}(n,e)}function Vm(n,e){const t={};return Eg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ir(n,(r,s)=>{const i=km(s,e.Vc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Dm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof De||n instanceof Zt||n instanceof kt||n instanceof Ke||n instanceof nu||n instanceof en)}function Om(n,e,t){if(!Dm(t)||!yg(t)){const r=Pc(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Wb(n,e,t){if((e=nn(e))instanceof tu)return e._internalPath;if(typeof e=="string")return Nm(n,e);throw jo("Field path arguments must be of type string or ",n,!1,void 0,t)}const Kb=new RegExp("[~\\*/\\[\\]]");function Nm(n,e,t){if(e.search(Kb)>=0)throw jo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new tu(...e.split("."))._internalPath}catch{throw jo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function jo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ne(U.INVALID_ARGUMENT,l+n+c)}function Gb(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class xm{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ke(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Qb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Mm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Qb extends xm{data(){return super.data()}}function Mm(n,e){return typeof e=="string"?Nm(n,e):e instanceof tu?e._internalPath:e._delegate._internalPath}class Jb{convertValue(e,t="none"){switch(Zn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ir(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Oo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>Ue(a.doubleValue));return new en(i)}convertGeoPoint(e){return new Zt(Ue(e.latitude),Ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ia(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ci(e));default:return null}}convertTimestamp(e){const t=Xn(e);return new De(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Re(rm(r),9688,{name:e});const s=new ui(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(t)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Xb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class pr extends xm{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new _o(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Mm("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(U.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=pr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",pr._jsonSchema={type:$e("string",pr._jsonSchemaVersion),bundleSource:$e("string","DocumentSnapshot"),bundleName:$e("string"),bundle:$e("string")};class _o extends pr{data(e={}){return super.data(e)}}class Js{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ns(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new _o(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(U.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new _o(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ns(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new _o(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ns(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Yb(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(U.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Js._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Sc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Yb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:n})}}/**
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
 */function Zb(n){n=ai(n,Ke);const e=ai(n.firestore,eu);return Lb(Pm(e),n._key).then(t=>nR(e,n,t))}Js._jsonSchemaVersion="firestore/querySnapshot/1.0",Js._jsonSchema={type:$e("string",Js._jsonSchemaVersion),bundleSource:$e("string","QuerySnapshot"),bundleName:$e("string"),bundle:$e("string")};class eR extends Jb{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ke(this.firestore,null,t)}}function Lm(n,e,t){n=ai(n,Ke);const r=ai(n.firestore,eu),s=Xb(n.converter,e);return tR(r,[zb(qb(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,yn.none())])}function tR(n,e){return function(r,s){const i=new Kn;return r.asyncQueue.enqueueAndForget(async()=>wb(await xb(r),s,i)),i.promise}(Pm(n),e)}function nR(n,e,t){const r=t.docs.get(e._key),s=new eR(n);return new pr(n,s,e._key,r,new Ns(t.hasPendingWrites,t.fromCache),e.converter)}function Fm(){return new su("serverTimestamp")}(function(e,t=!0){(function(s){cs=s})(as),Jr(new _r("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new eu(new Bw(r.getProvider("auth-internal")),new Hw(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ui(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),zn(nf,rf,e),zn(nf,rf,"esm2017")})();const rR={class:"p-4"},Yf={__name:"LoginGoogle",setup(n){async function e(){const t=new gn;try{const s=(await zI(e_,t)).user,i=Sm(t_,"usuarios",s.uid);(await Zb(i)).exists()?console.log("🔄 Usuario ya registrado"):(await Lm(i,{nombre:s.displayName,email:s.email,telefono:s.phoneNumber??"",fotoPerfil:s.photoURL,fechaRegistro:Fm(),rol:"jugador",activo:!0}),console.log("✅ Usuario creado en Firestore")),alert(`¡Bienvenido, ${s.displayName}!`)}catch(r){alert("Error al iniciar sesión: "+r.message)}}return(t,r)=>(Xo(),dp("div",rR,[Nt("button",{onClick:e,class:"bg-red-500 text-white px-4 py-2 rounded"}," Iniciar sesión con Google ")]))}},Um=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},sR={__name:"App",setup(n){return(e,t)=>{const r=Dy("router-view");return Xo(),mv(cv,null,{fallback:ul(()=>t[0]||(t[0]=[Nt("div",null,"Cargando...",-1)])),default:ul(()=>[Tt(r)]),_:1})}}},iR=Um(sR,[["__scopeId","data-v-7b44d3e1"]]);/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Fr=typeof document<"u";function Bm(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function oR(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&Bm(n.default)}const we=Object.assign;function Za(n,e){const t={};for(const r in e){const s=e[r];t[r]=Ht(s)?s.map(n):n(s)}return t}const Xs=()=>{},Ht=Array.isArray,jm=/#/g,aR=/&/g,lR=/\//g,cR=/=/g,uR=/\?/g,$m=/\+/g,hR=/%5B/g,fR=/%5D/g,Hm=/%5E/g,dR=/%60/g,qm=/%7B/g,pR=/%7C/g,zm=/%7D/g,gR=/%20/g;function iu(n){return encodeURI(""+n).replace(pR,"|").replace(hR,"[").replace(fR,"]")}function mR(n){return iu(n).replace(qm,"{").replace(zm,"}").replace(Hm,"^")}function Hl(n){return iu(n).replace($m,"%2B").replace(gR,"+").replace(jm,"%23").replace(aR,"%26").replace(dR,"`").replace(qm,"{").replace(zm,"}").replace(Hm,"^")}function _R(n){return Hl(n).replace(cR,"%3D")}function yR(n){return iu(n).replace(jm,"%23").replace(uR,"%3F")}function vR(n){return n==null?"":yR(n).replace(lR,"%2F")}function mi(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const ER=/\/$/,TR=n=>n.replace(ER,"");function el(n,e,t="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=n(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=bR(r??e,t),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:mi(a)}}function IR(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Zf(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function wR(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&rs(e.matched[r],t.matched[s])&&Wm(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function rs(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Wm(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!AR(n[t],e[t]))return!1;return!0}function AR(n,e){return Ht(n)?ed(n,e):Ht(e)?ed(e,n):n===e}function ed(n,e){return Ht(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function bR(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=t.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return t.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _i;(function(n){n.pop="pop",n.push="push"})(_i||(_i={}));var Ys;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Ys||(Ys={}));function RR(n){if(!n)if(Fr){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),TR(n)}const SR=/^[^#]+#/;function PR(n,e){return n.replace(SR,"#")+e}function CR(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const ga=()=>({left:window.scrollX,top:window.scrollY});function kR(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=CR(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function td(n,e){return(history.state?history.state.position-e:-1)+n}const ql=new Map;function VR(n,e){ql.set(n,e)}function DR(n){const e=ql.get(n);return ql.delete(n),e}let OR=()=>location.protocol+"//"+location.host;function Km(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let l=s.includes(n.slice(i))?n.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Zf(c,"")}return Zf(t,n)+r+s}function NR(n,e,t,r){let s=[],i=[],a=null;const l=({state:g})=>{const _=Km(n,location),C=t.value,V=e.value;let D=0;if(g){if(t.value=_,e.value=g,a&&a===C){a=null;return}D=V?g.position-V.position:0}else r(_);s.forEach($=>{$(t.value,C,{delta:D,type:_i.pop,direction:D?D>0?Ys.forward:Ys.back:Ys.unknown})})};function c(){a=t.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(we({},g.state,{scroll:ga()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function nd(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?ga():null}}function xR(n){const{history:e,location:t}=window,r={value:Km(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=n.indexOf("#"),g=p>-1?(t.host&&document.querySelector("base")?n:n.slice(p))+c:OR()+n+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),t[f?"replace":"assign"](g)}}function a(c,h){const f=we({},e.state,nd(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=we({},s.value,e.state,{forward:c,scroll:ga()});i(f.current,f,!0);const p=we({},nd(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function MR(n){n=RR(n);const e=xR(n),t=NR(n,e.state,e.location,e.replace);function r(i,a=!0){a||t.pauseListeners(),history.go(i)}const s=we({location:"",base:n,go:r,createHref:PR.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function LR(n){return typeof n=="string"||n&&typeof n=="object"}function Gm(n){return typeof n=="string"||typeof n=="symbol"}const Qm=Symbol("");var rd;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(rd||(rd={}));function ss(n,e){return we(new Error,{type:n,[Qm]:!0},e)}function un(n,e){return n instanceof Error&&Qm in n&&(e==null||!!(n.type&e))}const sd="[^/]+?",FR={sensitive:!1,strict:!1,start:!0,end:!0},UR=/[.+*?^${}()[\]/\\]/g;function BR(n,e){const t=we({},FR,e),r=[];let s=t.start?"^":"";const i=[];for(const h of n){const f=h.length?[]:[90];t.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(t.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(UR,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:V,optional:D,regexp:$}=g;i.push({name:C,repeatable:V,optional:D});const F=$||sd;if(F!==sd){_+=10;try{new RegExp(`(${F})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${F}): `+q.message)}}let j=V?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(j=D&&h.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,_+=20,D&&(_+=-8),V&&(_+=-20),F===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(t.strict&&t.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,t.sensitive?"":"i");function l(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const g of n){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:V,optional:D}=_,$=C in h?h[C]:"";if(Ht($)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const F=Ht($)?$.join("/"):$;if(!F)if(D)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=F}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function jR(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===80?-1:1:n.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Jm(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=jR(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(id(r))return 1;if(id(s))return-1}return s.length-r.length}function id(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const $R={type:0,value:""},HR=/[a-zA-Z0-9_]/;function qR(n){if(!n)return[[]];if(n==="/")return[[$R]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(_){throw new Error(`ERR (${t})/"${h}": ${_}`)}let t=0,r=t;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(t===0?i.push({type:0,value:h}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<n.length;){if(c=n[l++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),t=1):g();break;case 4:g(),t=r;break;case 1:c==="("?t=2:HR.test(c)?g():(p(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:t=3:f+=c;break;case 3:p(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function zR(n,e,t){const r=BR(qR(n.path),t),s=we(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function WR(n,e){const t=[],r=new Map;e=cd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,V=ad(p);V.aliasOf=_&&_.record;const D=cd(e,p),$=[V];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const Q of q)$.push(ad(we({},V,{components:_?_.record.components:V.components,path:Q,aliasOf:_?_.record:V})))}let F,j;for(const q of $){const{path:Q}=q;if(g&&Q[0]!=="/"){const Z=g.record.path,A=Z[Z.length-1]==="/"?"":"/";q.path=g.record.path+(Q&&A+Q)}if(F=zR(q,g,D),_?_.alias.push(F):(j=j||F,j!==F&&j.alias.push(F),C&&p.name&&!ld(F)&&a(p.name)),Xm(F)&&c(F),V.children){const Z=V.children;for(let A=0;A<Z.length;A++)i(Z[A],F,_&&_.children[A])}_=_||F}return j?()=>{a(j)}:Xs}function a(p){if(Gm(p)){const g=r.get(p);g&&(r.delete(p),t.splice(t.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=t.indexOf(p);g>-1&&(t.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return t}function c(p){const g=QR(p,t);t.splice(g,0,p),p.record.name&&!ld(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},V,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ss(1,{location:p});D=_.record.name,C=we(od(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&od(p.params,_.keys.map(j=>j.name))),V=_.stringify(C)}else if(p.path!=null)V=p.path,_=t.find(j=>j.re.test(V)),_&&(C=_.parse(V),D=_.record.name);else{if(_=g.name?r.get(g.name):t.find(j=>j.re.test(g.path)),!_)throw ss(1,{location:p,currentLocation:g});D=_.record.name,C=we({},g.params,p.params),V=_.stringify(C)}const $=[];let F=_;for(;F;)$.unshift(F.record),F=F.parent;return{name:D,path:V,params:C,matched:$,meta:GR($)}}n.forEach(p=>i(p));function f(){t.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function od(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function ad(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:KR(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function KR(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="object"?t[r]:t;return e}function ld(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function GR(n){return n.reduce((e,t)=>we(e,t.meta),{})}function cd(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function QR(n,e){let t=0,r=e.length;for(;t!==r;){const i=t+r>>1;Jm(n,e[i])<0?r=i:t=i+1}const s=JR(n);return s&&(r=e.lastIndexOf(s,r-1)),r}function JR(n){let e=n;for(;e=e.parent;)if(Xm(e)&&Jm(n,e)===0)return e}function Xm({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function XR(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace($m," "),a=i.indexOf("="),l=mi(a<0?i:i.slice(0,a)),c=a<0?null:mi(i.slice(a+1));if(l in e){let h=e[l];Ht(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function ud(n){let e="";for(let t in n){const r=n[t];if(t=_R(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(Ht(r)?r.map(i=>i&&Hl(i)):[r&&Hl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function YR(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=Ht(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const ZR=Symbol(""),hd=Symbol(""),ma=Symbol(""),Ym=Symbol(""),zl=Symbol("");function Cs(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Mn(n,e,t,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ss(4,{from:t,to:e})):g instanceof Error?c(g):LR(g)?c(ss(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>n.call(r&&r.instances[s],e,t,h));let p=Promise.resolve(f);n.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function tl(n,e,t,r,s=i=>i()){const i=[];for(const a of n)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Bm(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Mn(f,t,r,a,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=oR(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Mn(_,t,r,a,l,s)()}))}}return i}function fd(n){const e=Qt(ma),t=Qt(Ym),r=Mt(()=>{const c=Br(n.to);return e.resolve(c)}),s=Mt(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=t.matched;if(!f||!p.length)return-1;const g=p.findIndex(rs.bind(null,f));if(g>-1)return g;const _=dd(c[h-2]);return h>1&&dd(f)===_&&p[p.length-1].path!==_?p.findIndex(rs.bind(null,c[h-2])):g}),i=Mt(()=>s.value>-1&&sS(t.params,r.value.params)),a=Mt(()=>s.value>-1&&s.value===t.matched.length-1&&Wm(t.params,r.value.params));function l(c={}){if(rS(c)){const h=e[Br(n.replace)?"replace":"push"](Br(n.to)).catch(Xs);return n.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Mt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function eS(n){return n.length===1?n[0]:n}const tS=$d({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:fd,setup(n,{slots:e}){const t=Ko(fd(n)),{options:r}=Qt(ma),s=Mt(()=>({[pd(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[pd(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&eS(e.default(t));return n.custom?i:_p("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),nS=tS;function rS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function sS(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!Ht(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function dd(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const pd=(n,e,t)=>n??e??t,iS=$d({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=Qt(zl),s=Mt(()=>n.route||r.value),i=Qt(hd,0),a=Mt(()=>{let h=Br(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Mt(()=>s.value.matched[a.value]);ro(hd,Mt(()=>a.value+1)),ro(ZR,l),ro(zl,s);const c=Vr();return so(()=>[c.value,l.value,n.name],([h,f,p],[g,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!rs(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=n.name,p=l.value,g=p&&p.components[f];if(!g)return gd(t.default,{Component:g,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=_p(g,we({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return gd(t.default,{Component:D,route:h})||D}}});function gd(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const oS=iS;function aS(n){const e=WR(n.routes,n),t=n.parseQuery||XR,r=n.stringifyQuery||ud,s=n.history,i=Cs(),a=Cs(),l=Cs(),c=ly(On);let h=On;Fr&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Za.bind(null,O=>""+O),p=Za.bind(null,vR),g=Za.bind(null,mi);function _(O,Y){let J,ee;return Gm(O)?(J=e.getRecordMatcher(O),ee=Y):ee=O,e.addRoute(ee,J)}function C(O){const Y=e.getRecordMatcher(O);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function $(O,Y){if(Y=we({},Y||c.value),typeof O=="string"){const S=el(t,O,Y.path),N=e.resolve({path:S.path},Y),L=s.createHref(S.fullPath);return we(S,N,{params:g(N.params),hash:mi(S.hash),redirectedFrom:void 0,href:L})}let J;if(O.path!=null)J=we({},O,{path:el(t,O.path,Y.path).path});else{const S=we({},O.params);for(const N in S)S[N]==null&&delete S[N];J=we({},O,{params:p(S)}),Y.params=p(Y.params)}const ee=e.resolve(J,Y),Te=O.hash||"";ee.params=f(g(ee.params));const v=IR(r,we({},O,{hash:mR(Te),path:ee.path})),I=s.createHref(v);return we({fullPath:v,hash:Te,query:r===ud?YR(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:I})}function F(O){return typeof O=="string"?el(t,O,c.value.path):we({},O)}function j(O,Y){if(h!==O)return ss(8,{from:Y,to:O})}function q(O){return A(O)}function Q(O){return q(we(F(O),{replace:!0}))}function Z(O){const Y=O.matched[O.matched.length-1];if(Y&&Y.redirect){const{redirect:J}=Y;let ee=typeof J=="function"?J(O):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=F(ee):{path:ee},ee.params={}),we({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function A(O,Y){const J=h=$(O),ee=c.value,Te=O.state,v=O.force,I=O.replace===!0,S=Z(J);if(S)return A(we(F(S),{state:typeof S=="object"?we({},Te,S.state):Te,force:v,replace:I}),Y||J);const N=J;N.redirectedFrom=Y;let L;return!v&&wR(r,ee,J)&&(L=ss(16,{to:N,from:ee}),Rt(ee,ee,!0,!1)),(L?Promise.resolve(L):w(N,ee)).catch(x=>un(x)?un(x,2)?x:Dt(x):me(x,N,ee)).then(x=>{if(x){if(un(x,2))return A(we({replace:I},F(x.to),{state:typeof x.to=="object"?we({},Te,x.to.state):Te,force:v}),Y||N)}else x=R(N,ee,!0,I,Te);return b(N,ee,x),x})}function y(O,Y){const J=j(O,Y);return J?Promise.reject(J):Promise.resolve()}function E(O){const Y=Sn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function w(O,Y){let J;const[ee,Te,v]=lS(O,Y);J=tl(ee.reverse(),"beforeRouteLeave",O,Y);for(const S of ee)S.leaveGuards.forEach(N=>{J.push(Mn(N,O,Y))});const I=y.bind(null,O,Y);return J.push(I),_t(J).then(()=>{J=[];for(const S of i.list())J.push(Mn(S,O,Y));return J.push(I),_t(J)}).then(()=>{J=tl(Te,"beforeRouteUpdate",O,Y);for(const S of Te)S.updateGuards.forEach(N=>{J.push(Mn(N,O,Y))});return J.push(I),_t(J)}).then(()=>{J=[];for(const S of v)if(S.beforeEnter)if(Ht(S.beforeEnter))for(const N of S.beforeEnter)J.push(Mn(N,O,Y));else J.push(Mn(S.beforeEnter,O,Y));return J.push(I),_t(J)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),J=tl(v,"beforeRouteEnter",O,Y,E),J.push(I),_t(J))).then(()=>{J=[];for(const S of a.list())J.push(Mn(S,O,Y));return J.push(I),_t(J)}).catch(S=>un(S,8)?S:Promise.reject(S))}function b(O,Y,J){l.list().forEach(ee=>E(()=>ee(O,Y,J)))}function R(O,Y,J,ee,Te){const v=j(O,Y);if(v)return v;const I=Y===On,S=Fr?history.state:{};J&&(ee||I?s.replace(O.fullPath,we({scroll:I&&S&&S.scroll},Te)):s.push(O.fullPath,Te)),c.value=O,Rt(O,Y,J,I),Dt()}let T;function Le(){T||(T=s.listen((O,Y,J)=>{if(!qt.listening)return;const ee=$(O),Te=Z(ee);if(Te){A(we(Te,{replace:!0,force:!0}),ee).catch(Xs);return}h=ee;const v=c.value;Fr&&VR(td(v.fullPath,J.delta),ga()),w(ee,v).catch(I=>un(I,12)?I:un(I,2)?(A(we(F(I.to),{force:!0}),ee).then(S=>{un(S,20)&&!J.delta&&J.type===_i.pop&&s.go(-1,!1)}).catch(Xs),Promise.reject()):(J.delta&&s.go(-J.delta,!1),me(I,ee,v))).then(I=>{I=I||R(ee,v,!1),I&&(J.delta&&!un(I,8)?s.go(-J.delta,!1):J.type===_i.pop&&un(I,20)&&s.go(-1,!1)),b(ee,v,I)}).catch(Xs)}))}let Ge=Cs(),Ce=Cs(),ge;function me(O,Y,J){Dt(O);const ee=Ce.list();return ee.length?ee.forEach(Te=>Te(O,Y,J)):console.error(O),Promise.reject(O)}function It(){return ge&&c.value!==On?Promise.resolve():new Promise((O,Y)=>{Ge.add([O,Y])})}function Dt(O){return ge||(ge=!O,Le(),Ge.list().forEach(([Y,J])=>O?J(O):Y()),Ge.reset()),O}function Rt(O,Y,J,ee){const{scrollBehavior:Te}=n;if(!Fr||!Te)return Promise.resolve();const v=!J&&DR(td(O.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return Ld().then(()=>Te(O,Y,v)).then(I=>I&&kR(I)).catch(I=>me(I,O,Y))}const Oe=O=>s.go(O);let Ne;const Sn=new Set,qt={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:$,options:n,push:q,replace:Q,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ce.add,isReady:It,install(O){const Y=this;O.component("RouterLink",nS),O.component("RouterView",oS),O.config.globalProperties.$router=Y,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Br(c)}),Fr&&!Ne&&c.value===On&&(Ne=!0,q(s.location).catch(Te=>{}));const J={};for(const Te in On)Object.defineProperty(J,Te,{get:()=>c.value[Te],enumerable:!0});O.provide(ma,Y),O.provide(Ym,Dd(J)),O.provide(zl,c);const ee=O.unmount;Sn.add(O),O.unmount=function(){Sn.delete(O),Sn.size<1&&(h=On,T&&T(),T=null,c.value=On,Ne=!1,ge=!1),ee()}}};function _t(O){return O.reduce((Y,J)=>Y.then(()=>E(J)),Promise.resolve())}return qt}function lS(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(n.matched.find(h=>rs(h,l))?r.push(l):t.push(l));const c=n.matched[a];c&&(e.matched.find(h=>rs(h,c))||s.push(c))}return[t,r,s]}function cS(){return Qt(ma)}const uS={class:"p-4 max-w-md mx-auto"},hS={__name:"CompletarPerfil",setup(n){const e=Vr(""),t=Vr(""),r=Vr(""),s=Vr(""),i=Vr(""),a=cS();async function l(){const c=e_.currentUser;if(!e.value||!t.value||!r.value){alert("Por favor, completá los campos requeridos");return}await Lm(Sm(t_,"usuarios",c.uid),{nombre:e.value,apellido:t.value,apodo:r.value,telefono:s.value,edad:i.value,email:c.email,fotoPerfil:c.photoURL,fechaRegistro:Fm(),rol:"jugador",activo:!0}),alert("Perfil guardado correctamente"),a.push("/inicio")}return(c,h)=>(Xo(),dp("div",uS,[h[5]||(h[5]=Nt("h2",{class:"text-xl font-bold mb-4"},"Completa tu perfil",-1)),Ss(Nt("input",{"onUpdate:modelValue":h[0]||(h[0]=f=>e.value=f),placeholder:"Nombre",class:"input",required:""},null,512),[[Ps,e.value]]),Ss(Nt("input",{"onUpdate:modelValue":h[1]||(h[1]=f=>t.value=f),placeholder:"Apellido",class:"input",required:""},null,512),[[Ps,t.value]]),Ss(Nt("input",{"onUpdate:modelValue":h[2]||(h[2]=f=>r.value=f),placeholder:"Apodo (username)",class:"input",required:""},null,512),[[Ps,r.value]]),Ss(Nt("input",{"onUpdate:modelValue":h[3]||(h[3]=f=>s.value=f),placeholder:"Teléfono (opcional)",class:"input"},null,512),[[Ps,s.value]]),Ss(Nt("input",{"onUpdate:modelValue":h[4]||(h[4]=f=>i.value=f),type:"number",placeholder:"Edad (opcional)",class:"input"},null,512),[[Ps,i.value]]),Nt("button",{onClick:l,class:"btn mt-4"},"Guardar")]))}},fS=Um(hS,[["__scopeId","data-v-1c0efa36"]]),dS=[{path:"/",component:Yf},{path:"/completar-perfil",component:fS},{path:"/hayfulbito",component:Yf}],pS=aS({history:MR(),routes:dS});var gS="firebase",mS="11.10.0";/**
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
 */zn(gS,mS,"app");console.log("AIzaSyDyVHdyeRnZvjku7P1AIKL9lV_b7D0E1z8");const _S={projectId:"hayfulbito-a200a",storageBucket:"hayfulbito-a200a.firebasestorage.app",messagingSenderId:"138672255337",appId:"1:138672255337:web:f8dddc55e0048cc1638df8",measurementId:"G-LY8KKR468W",apiKey:"AIzaSyDyVHdyeRnZvjku7P1AIKL9lV_b7D0E1z8",authDomain:"hayfulbito-a200a.firebaseapp.com"},Zm=Cp(_S),e_=Mw(Zm),t_=Ub(Zm),n_=Zv(iR);n_.use(pS);n_.mount("#app");
