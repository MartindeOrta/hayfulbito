(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ec(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},zr=[],Yt=()=>{},q_=()=>!1,Ko=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),tc=t=>t.startsWith("onUpdate:"),pt=Object.assign,nc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},z_=Object.prototype.hasOwnProperty,be=(t,e)=>z_.call(t,e),ce=Array.isArray,Wr=t=>Go(t)==="[object Map]",bd=t=>Go(t)==="[object Set]",he=t=>typeof t=="function",$e=t=>typeof t=="string",lr=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",Rd=t=>(xe(t)||he(t))&&he(t.then)&&he(t.catch),Sd=Object.prototype.toString,Go=t=>Sd.call(t),W_=t=>Go(t).slice(8,-1),Pd=t=>Go(t)==="[object Object]",rc=t=>$e(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},K_=/-(\w)/g,xt=Qo(t=>t.replace(K_,(e,n)=>n?n.toUpperCase():"")),G_=/\B([A-Z])/g,Pr=Qo(t=>t.replace(G_,"-$1").toLowerCase()),Jo=Qo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=Qo(t=>t?`on${Jo(t)}`:""),Kn=(t,e)=>!Object.is(t,e),oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},hl=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},fl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Q_=t=>{const e=$e(t)?Number(t):NaN;return isNaN(e)?t:e};let ih;const Xo=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function sc(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=$e(r)?Z_(r):sc(r);if(s)for(const i in s)e[i]=s[i]}return e}else if($e(t)||xe(t))return t}const J_=/;(?![^(]*\))/g,X_=/:([^]+)/,Y_=/\/\*[^]*?\*\//g;function Z_(t){const e={};return t.replace(Y_,"").split(J_).forEach(n=>{if(n){const r=n.split(X_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ic(t){let e="";if($e(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=ic(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const ey="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ty=ec(ey);function Cd(t){return!!t||t===""}const kd=t=>!!(t&&t.__v_isRef===!0),Ln=t=>$e(t)?t:t==null?"":ce(t)||xe(t)&&(t.toString===Sd||!he(t.toString))?kd(t)?Ln(t.value):JSON.stringify(t,Vd,2):String(t),Vd=(t,e)=>kd(e)?Vd(t,e.value):Wr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ja(r,i)+" =>"]=s,n),{})}:bd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ja(n))}:lr(e)?ja(e):xe(e)&&!ce(e)&&!Pd(e)?String(e):e,ja=(t,e="")=>{var n;return lr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Et;class ny{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Et,!e&&Et&&(this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){++this._on===1&&(this.prevScope=Et,Et=this)}off(){this._on>0&&--this._on===0&&(Et=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ry(){return Et}let Ve;const $a=new WeakSet;class Dd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Et&&Et.active&&Et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$a.has(this)&&($a.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Nd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,oh(this),xd(this);const e=Ve,n=Ht;Ve=this,Ht=!0;try{return this.fn()}finally{Md(this),Ve=e,Ht=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)lc(e);this.deps=this.depsTail=void 0,oh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$a.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dl(this)&&this.run()}get dirty(){return dl(this)}}let Od=0,qs,zs;function Nd(t,e=!1){if(t.flags|=8,e){t.next=zs,zs=t;return}t.next=qs,qs=t}function oc(){Od++}function ac(){if(--Od>0)return;if(zs){let e=zs;for(zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function xd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Md(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),lc(r),sy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function dl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ld(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!dl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Ht;Ve=t,Ht=!0;try{xd(t);const s=t.fn(t._value);(e.version===0||Kn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Ht=r,Md(t),t.flags&=-3}}function lc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)lc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function sy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Ht=!0;const Fd=[];function In(){Fd.push(Ht),Ht=!1}function wn(){const t=Fd.pop();Ht=t===void 0?!0:t}function oh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let si=0;class iy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class cc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ve||!Ht||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new iy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Ud(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){oc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ac()}}}function Ud(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Ud(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const pl=new WeakMap,vr=Symbol(""),gl=Symbol(""),ii=Symbol("");function ct(t,e,n){if(Ht&&Ve){let r=pl.get(t);r||pl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new cc),s.map=r,s.key=n),s.track()}}function gn(t,e,n,r,s,i){const a=pl.get(t);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(oc(),e==="clear")a.forEach(l);else{const c=ce(t),h=c&&rc(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===ii||!lr(g)&&g>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(ii)),e){case"add":c?h&&l(a.get("length")):(l(a.get(vr)),Wr(t)&&l(a.get(gl)));break;case"delete":c||(l(a.get(vr)),Wr(t)&&l(a.get(gl)));break;case"set":Wr(t)&&l(a.get(vr));break}}ac()}function Lr(t){const e=Ae(t);return e===t?e:(ct(e,"iterate",ii),Nt(t)?e:e.map(tt))}function Yo(t){return ct(t=Ae(t),"iterate",ii),t}const oy={__proto__:null,[Symbol.iterator](){return Ha(this,Symbol.iterator,tt)},concat(...t){return Lr(this).concat(...t.map(e=>ce(e)?Lr(e):e))},entries(){return Ha(this,"entries",t=>(t[1]=tt(t[1]),t))},every(t,e){return fn(this,"every",t,e,void 0,arguments)},filter(t,e){return fn(this,"filter",t,e,n=>n.map(tt),arguments)},find(t,e){return fn(this,"find",t,e,tt,arguments)},findIndex(t,e){return fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fn(this,"findLast",t,e,tt,arguments)},findLastIndex(t,e){return fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return qa(this,"includes",t)},indexOf(...t){return qa(this,"indexOf",t)},join(t){return Lr(this).join(t)},lastIndexOf(...t){return qa(this,"lastIndexOf",t)},map(t,e){return fn(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return ah(this,"reduce",t,e)},reduceRight(t,...e){return ah(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return fn(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return Lr(this).toReversed()},toSorted(t){return Lr(this).toSorted(t)},toSpliced(...t){return Lr(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return Ha(this,"values",tt)}};function Ha(t,e,n){const r=Yo(t),s=r[e]();return r!==t&&!Nt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ay=Array.prototype;function fn(t,e,n,r,s,i){const a=Yo(t),l=a!==t&&!Nt(t),c=a[e];if(c!==ay[e]){const p=c.apply(t,i);return l?tt(p):p}let h=n;a!==t&&(l?h=function(p,g){return n.call(this,tt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,h,r);return l&&s?s(f):f}function ah(t,e,n,r){const s=Yo(t);let i=n;return s!==t&&(Nt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,tt(l),c,t)}),s[e](i,...r)}function qa(t,e,n){const r=Ae(t);ct(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&fc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ns(t,e,n=[]){In(),oc();const r=Ae(t)[e].apply(t,n);return ac(),wn(),r}const ly=ec("__proto__,__v_isRef,__isVue"),Bd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lr));function cy(t){lr(t)||(t=String(t));const e=Ae(this);return ct(e,"has",t),e.hasOwnProperty(t)}class jd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vy:zd:i?qd:Hd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ce(e);if(!s){let c;if(a&&(c=oy[n]))return c;if(n==="hasOwnProperty")return cy}const l=Reflect.get(e,n,dt(e)?e:r);return(lr(n)?Bd.has(n):ly(n))||(s||ct(e,"get",n),i)?l:dt(l)?a&&rc(n)?l:l.value:xe(l)?s?Kd(l):Zo(l):l}}class $d extends jd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Zn(i);if(!Nt(r)&&!Zn(r)&&(i=Ae(i),r=Ae(r)),!ce(e)&&dt(i)&&!dt(r))return c?!1:(i.value=r,!0)}const a=ce(e)&&rc(n)?Number(n)<e.length:be(e,n),l=Reflect.set(e,n,r,dt(e)?e:s);return e===Ae(s)&&(a?Kn(r,i)&&gn(e,"set",n,r):gn(e,"add",n,r)),l}deleteProperty(e,n){const r=be(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!lr(n)||!Bd.has(n))&&ct(e,"has",n),r}ownKeys(e){return ct(e,"iterate",ce(e)?"length":vr),Reflect.ownKeys(e)}}class uy extends jd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const hy=new $d,fy=new uy,dy=new $d(!0);const ml=t=>t,Xi=t=>Reflect.getPrototypeOf(t);function py(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),a=Wr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),f=n?ml:e?Io:tt;return!e&&ct(i,"iterate",c?gl:vr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Yi(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function gy(t,e){const n={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);t||(Kn(s,l)&&ct(a,"get",s),ct(a,"get",l));const{has:c}=Xi(a),h=e?ml:t?Io:tt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ct(Ae(s),"iterate",vr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return t||(Kn(s,l)&&ct(a,"has",s),ct(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),h=e?ml:t?Io:tt;return!t&&ct(c,"iterate",vr),l.forEach((f,p)=>s.call(i,h(f),h(p),a))}};return pt(n,t?{add:Yi("add"),set:Yi("set"),delete:Yi("delete"),clear:Yi("clear")}:{add(s){!e&&!Nt(s)&&!Zn(s)&&(s=Ae(s));const i=Ae(this);return Xi(i).has.call(i,s)||(i.add(s),gn(i,"add",s,s)),this},set(s,i){!e&&!Nt(i)&&!Zn(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=Xi(a);let h=l.call(a,s);h||(s=Ae(s),h=l.call(a,s));const f=c.call(a,s);return a.set(s,i),h?Kn(i,f)&&gn(a,"set",s,i):gn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=Xi(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&gn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&gn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=py(s,t,e)}),n}function uc(t,e){const n=gy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(be(n,s)&&s in r?n:r,s,i)}const my={get:uc(!1,!1)},_y={get:uc(!1,!0)},yy={get:uc(!0,!1)};const Hd=new WeakMap,qd=new WeakMap,zd=new WeakMap,vy=new WeakMap;function Ey(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ty(t){return t.__v_skip||!Object.isExtensible(t)?0:Ey(W_(t))}function Zo(t){return Zn(t)?t:hc(t,!1,hy,my,Hd)}function Wd(t){return hc(t,!1,dy,_y,qd)}function Kd(t){return hc(t,!0,fy,yy,zd)}function hc(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ty(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Kr(t){return Zn(t)?Kr(t.__v_raw):!!(t&&t.__v_isReactive)}function Zn(t){return!!(t&&t.__v_isReadonly)}function Nt(t){return!!(t&&t.__v_isShallow)}function fc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Iy(t){return!be(t,"__v_skip")&&Object.isExtensible(t)&&hl(t,"__v_skip",!0),t}const tt=t=>xe(t)?Zo(t):t,Io=t=>xe(t)?Kd(t):t;function dt(t){return t?t.__v_isRef===!0:!1}function jn(t){return Gd(t,!1)}function wy(t){return Gd(t,!0)}function Gd(t,e){return dt(t)?t:new Ay(t,e)}class Ay{constructor(e,n){this.dep=new cc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:tt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Nt(e)||Zn(e);e=r?e:Ae(e),Kn(e,n)&&(this._rawValue=e,this._value=r?e:tt(e),this.dep.trigger())}}function Gr(t){return dt(t)?t.value:t}const by={get:(t,e,n)=>e==="__v_raw"?t:Gr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return dt(s)&&!dt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qd(t){return Kr(t)?t:new Proxy(t,by)}class Ry{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new cc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Nd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Sy(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new Ry(r,s,n)}const Zi={},wo=new WeakMap;let gr;function Py(t,e=!1,n=gr){if(n){let r=wo.get(n);r||wo.set(n,r=[]),r.push(t)}}function Cy(t,e,n=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=q=>s?q:Nt(q)||s===!1||s===0?mn(q,1):mn(q);let f,p,g,_,C=!1,V=!1;if(dt(t)?(p=()=>t.value,C=Nt(t)):Kr(t)?(p=()=>h(t),C=!0):ce(t)?(V=!0,C=t.some(q=>Kr(q)||Nt(q)),p=()=>t.map(q=>{if(dt(q))return q.value;if(Kr(q))return h(q);if(he(q))return c?c(q,2):q()})):he(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){In();try{g()}finally{wn()}}const q=gr;gr=f;try{return c?c(t,3,[_]):t(_)}finally{gr=q}}:p=Yt,e&&s){const q=p,Q=s===!0?1/0:s;p=()=>mn(q(),Q)}const D=ry(),$=()=>{f.stop(),D&&D.active&&nc(D.effects,f)};if(i&&e){const q=e;e=(...Q)=>{q(...Q),$()}}let U=V?new Array(t.length).fill(Zi):Zi;const j=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const Q=f.run();if(s||C||(V?Q.some((Z,A)=>Kn(Z,U[A])):Kn(Q,U))){g&&g();const Z=gr;gr=f;try{const A=[Q,U===Zi?void 0:V&&U[0]===Zi?[]:U,_];U=Q,c?c(e,3,A):e(...A)}finally{gr=Z}}}else f.run()};return l&&l(j),f=new Dd(p),f.scheduler=a?()=>a(j,!1):j,_=q=>Py(q,!1,f),g=f.onStop=()=>{const q=wo.get(f);if(q){if(c)c(q,4);else for(const Q of q)Q();wo.delete(f)}},e?r?j(!0):U=f.run():a?a(j.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function mn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,dt(t))mn(t.value,e,n);else if(ce(t))for(let r=0;r<t.length;r++)mn(t[r],e,n);else if(bd(t)||Wr(t))t.forEach(r=>{mn(r,e,n)});else if(Pd(t)){for(const r in t)mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ii(t,e,n,r){try{return r?t(...r):t()}catch(s){wi(s,e,n)}}function on(t,e,n,r){if(he(t)){const s=Ii(t,e,n,r);return s&&Rd(s)&&s.catch(i=>{wi(i,e,n)}),s}if(ce(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function wi(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,h)===!1)return}l=l.parent}if(i){In(),Ii(i,null,10,[t,c,h]),wn();return}}ky(t,n,s,r,a)}function ky(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const yt=[];let Gt=-1;const Qr=[];let Fn=null,Fr=0;const Jd=Promise.resolve();let Ao=null;function Xd(t){const e=Ao||Jd;return t?e.then(this?t.bind(this):t):e}function Vy(t){let e=Gt+1,n=yt.length;for(;e<n;){const r=e+n>>>1,s=yt[r],i=oi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function dc(t){if(!(t.flags&1)){const e=oi(t),n=yt[yt.length-1];!n||!(t.flags&2)&&e>=oi(n)?yt.push(t):yt.splice(Vy(e),0,t),t.flags|=1,Yd()}}function Yd(){Ao||(Ao=Jd.then(ep))}function _l(t){ce(t)?Qr.push(...t):Fn&&t.id===-1?Fn.splice(Fr+1,0,t):t.flags&1||(Qr.push(t),t.flags|=1),Yd()}function lh(t,e,n=Gt+1){for(;n<yt.length;n++){const r=yt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;yt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Zd(t){if(Qr.length){const e=[...new Set(Qr)].sort((n,r)=>oi(n)-oi(r));if(Qr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Fr=0;Fr<Fn.length;Fr++){const n=Fn[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,Fr=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ep(t){try{for(Gt=0;Gt<yt.length;Gt++){const e=yt[Gt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ii(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gt<yt.length;Gt++){const e=yt[Gt];e&&(e.flags&=-2)}Gt=-1,yt.length=0,Zd(),Ao=null,(yt.length||Qr.length)&&ep()}}let St=null,tp=null;function bo(t){const e=St;return St=t,tp=t&&t.type.__scopeId||null,e}function yl(t,e=St,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&vh(-1);const i=bo(e);let a;try{a=t(...s)}finally{bo(i),r._d&&vh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function xs(t,e){if(St===null)return t;const n=ra(St),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&mn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(In(),on(c,n,8,[t.el,l,t,e]),wn())}}const Dy=Symbol("_vte"),Oy=t=>t.__isTeleport;function pc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,pc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function np(t,e){return he(t)?pt({name:t.name},e,{setup:t}):t}function rp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ws(t,e,n,r,s=!1){if(ce(t)){t.forEach((C,V)=>Ws(C,e&&(ce(e)?e[V]:e),n,r,s));return}if(Ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ws(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ra(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,f=l.refs===Ce?l.refs={}:l.refs,p=l.setupState,g=Ae(p),_=p===Ce?()=>!1:C=>be(g,C);if(h!=null&&h!==c&&($e(h)?(f[h]=null,_(h)&&(p[h]=null)):dt(h)&&(h.value=null)),he(c))Ii(c,l,12,[a,f]);else{const C=$e(c),V=dt(c);if(C||V){const D=()=>{if(t.f){const $=C?_(c)?p[c]:f[c]:c.value;s?ce($)&&nc($,i):ce($)?$.includes(i)||$.push(i):C?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else C?(f[c]=a,_(c)&&(p[c]=a)):V&&(c.value=a,t.k&&(f[t.k]=a))};a?(D.id=-1,Rt(D,n)):D()}}}Xo().requestIdleCallback;Xo().cancelIdleCallback;const Ks=t=>!!t.type.__asyncLoader,sp=t=>t.type.__isKeepAlive;function Ny(t,e){ip(t,"a",e)}function xy(t,e){ip(t,"da",e)}function ip(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)sp(s.parent.vnode)&&My(r,e,n,s),s=s.parent}}function My(t,e,n,r){const s=ea(e,t,r,!0);op(()=>{nc(r[e],s)},n)}function ea(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{In();const l=Ai(n),c=on(e,n,t,a);return l(),wn(),c});return r?s.unshift(i):s.push(i),i}}const Pn=t=>(e,n=ht)=>{(!ci||t==="sp")&&ea(t,(...r)=>e(...r),n)},Ly=Pn("bm"),gc=Pn("m"),Fy=Pn("bu"),Uy=Pn("u"),By=Pn("bum"),op=Pn("um"),jy=Pn("sp"),$y=Pn("rtg"),Hy=Pn("rtc");function qy(t,e=ht){ea("ec",t,e)}const zy="components";function Wy(t,e){return Gy(zy,t,!0,e)||t}const Ky=Symbol.for("v-ndc");function Gy(t,e,n=!0,r=!1){const s=St||ht;if(s){const i=s.type;{const l=Hv(i,!1);if(l&&(l===e||l===xt(e)||l===Jo(xt(e))))return i}const a=ch(s[t]||i[t],e)||ch(s.appContext[t],e);return!a&&r?i:a}}function ch(t,e){return t&&(t[e]||t[xt(e)]||t[Jo(xt(e))])}function Qy(t,e,n,r){let s;const i=n,a=ce(t);if(a||$e(t)){const l=a&&Kr(t);let c=!1,h=!1;l&&(c=!Nt(t),h=Zn(t),t=Yo(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?h?Io(tt(t[f])):tt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const vl=t=>t?Pp(t)?ra(t):vl(t.parent):null,Gs=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vl(t.parent),$root:t=>vl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lp(t),$forceUpdate:t=>t.f||(t.f=()=>{dc(t.update)}),$nextTick:t=>t.n||(t.n=Xd.bind(t.proxy)),$watch:t=>mv.bind(t)}),za=(t,e)=>t!==Ce&&!t.__isScriptSetup&&be(t,e),Jy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(za(r,e))return a[e]=1,r[e];if(s!==Ce&&be(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&be(h,e))return a[e]=3,i[e];if(n!==Ce&&be(n,e))return a[e]=4,n[e];El&&(a[e]=0)}}const f=Gs[e];let p,g;if(f)return e==="$attrs"&&ct(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ce&&be(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return za(s,e)?(s[e]=n,!0):r!==Ce&&be(r,e)?(r[e]=n,!0):be(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ce&&be(t,a)||za(e,a)||(l=i[0])&&be(l,a)||be(r,a)||be(Gs,a)||be(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:be(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function uh(t){return ce(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let El=!0;function Xy(t){const e=lp(t),n=t.proxy,r=t.ctx;El=!1,e.beforeCreate&&hh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:C,activated:V,deactivated:D,beforeDestroy:$,beforeUnmount:U,destroyed:j,unmounted:q,render:Q,renderTracked:Z,renderTriggered:A,errorCaptured:y,serverPrefetch:E,expose:w,inheritAttrs:b,components:R,directives:T,filters:Ue}=e;if(h&&Yy(h,r,null),a)for(const ge in a){const me=a[ge];he(me)&&(r[ge]=me.bind(n))}if(s){const ge=s.call(n,n);xe(ge)&&(t.data=Zo(ge))}if(El=!0,i)for(const ge in i){const me=i[ge],At=he(me)?me.bind(n,n):he(me.get)?me.get.bind(n,n):Yt,Mt=!he(me)&&he(me.set)?me.set.bind(n):Yt,Pt=Ut({get:At,set:Mt});Object.defineProperty(r,ge,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:Me=>Pt.value=Me})}if(l)for(const ge in l)ap(l[ge],r,n,ge);if(c){const ge=he(c)?c.call(n):c;Reflect.ownKeys(ge).forEach(me=>{ao(me,ge[me])})}f&&hh(f,t,"c");function ke(ge,me){ce(me)?me.forEach(At=>ge(At.bind(n))):me&&ge(me.bind(n))}if(ke(Ly,p),ke(gc,g),ke(Fy,_),ke(Uy,C),ke(Ny,V),ke(xy,D),ke(qy,y),ke(Hy,Z),ke($y,A),ke(By,U),ke(op,q),ke(jy,E),ce(w))if(w.length){const ge=t.exposed||(t.exposed={});w.forEach(me=>{Object.defineProperty(ge,me,{get:()=>n[me],set:At=>n[me]=At})})}else t.exposed||(t.exposed={});Q&&t.render===Yt&&(t.render=Q),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),T&&(t.directives=T),E&&rp(t)}function Yy(t,e,n=Yt){ce(t)&&(t=Tl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=Zt(s.from||r,s.default,!0):i=Zt(s.from||r):i=Zt(s),dt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function hh(t,e,n){on(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ap(t,e,n,r){let s=r.includes(".")?Tp(n,r):()=>n[r];if($e(t)){const i=e[t];he(i)&&lo(s,i)}else if(he(t))lo(s,t.bind(n));else if(xe(t))if(ce(t))t.forEach(i=>ap(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&lo(s,i,t)}}function lp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Ro(c,h,a,!0)),Ro(c,e,a)),xe(e)&&i.set(e,c),c}function Ro(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ro(t,i,n,!0),s&&s.forEach(a=>Ro(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=Zy[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Zy={data:fh,props:dh,emits:dh,methods:Fs,computed:Fs,beforeCreate:_t,created:_t,beforeMount:_t,mounted:_t,beforeUpdate:_t,updated:_t,beforeDestroy:_t,beforeUnmount:_t,destroyed:_t,unmounted:_t,activated:_t,deactivated:_t,errorCaptured:_t,serverPrefetch:_t,components:Fs,directives:Fs,watch:tv,provide:fh,inject:ev};function fh(t,e){return e?t?function(){return pt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function ev(t,e){return Fs(Tl(t),Tl(e))}function Tl(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function _t(t,e){return t?[...new Set([].concat(t,e))]:e}function Fs(t,e){return t?pt(Object.create(null),t,e):e}function dh(t,e){return t?ce(t)&&ce(e)?[...new Set([...t,...e])]:pt(Object.create(null),uh(t),uh(e??{})):e}function tv(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=_t(t[r],e[r]);return n}function cp(){return{app:null,config:{isNativeTag:q_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let nv=0;function rv(t,e){return function(r,s=null){he(r)||(r=pt({},r)),s!=null&&!xe(s)&&(s=null);const i=cp(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:nv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:zv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&he(f.install)?(a.add(f),f.install(h,...p)):he(f)&&(a.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,g){if(!c){const _=h._ceVNode||ft(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,h._container=f,f.__vue_app__=h,ra(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(on(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=Jr;Jr=h;try{return f()}finally{Jr=p}}};return h}}let Jr=null;function ao(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function Zt(t,e,n=!1){const r=ht||St;if(r||Jr){let s=Jr?Jr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const up={},hp=()=>Object.create(up),fp=t=>Object.getPrototypeOf(t)===up;function sv(t,e,n,r=!1){const s={},i=hp();t.propsDefaults=Object.create(null),dp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:Wd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ta(t.emitsOptions,g))continue;const _=e[g];if(c)if(be(i,g))_!==i[g]&&(i[g]=_,h=!0);else{const C=xt(g);s[C]=Il(c,l,C,_,t,!1)}else _!==i[g]&&(i[g]=_,h=!0)}}}else{dp(t,e,s,i)&&(h=!0);let f;for(const p in l)(!e||!be(e,p)&&((f=Pr(p))===p||!be(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Il(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!be(e,p))&&(delete i[p],h=!0)}h&&gn(t.attrs,"set","")}function dp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Hs(c))continue;const h=e[c];let f;s&&be(s,f=xt(c))?!i||!i.includes(f)?n[f]=h:(l||(l={}))[f]=h:ta(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ae(n),h=l||Ce;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Il(s,c,p,h[p],t,!be(h,p))}}return a}function Il(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=be(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&he(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Ai(s);r=h[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Pr(n))&&(r=!0))}return r}const ov=new WeakMap;function pp(t,e,n=!1){const r=n?ov:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!he(t)){const f=p=>{c=!0;const[g,_]=pp(p,e,!0);pt(a,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return xe(t)&&r.set(t,zr),zr;if(ce(i))for(let f=0;f<i.length;f++){const p=xt(i[f]);ph(p)&&(a[p]=Ce)}else if(i)for(const f in i){const p=xt(f);if(ph(p)){const g=i[f],_=a[p]=ce(g)||he(g)?{type:g}:pt({},g),C=_.type;let V=!1,D=!0;if(ce(C))for(let $=0;$<C.length;++$){const U=C[$],j=he(U)&&U.name;if(j==="Boolean"){V=!0;break}else j==="String"&&(D=!1)}else V=he(C)&&C.name==="Boolean";_[0]=V,_[1]=D,(V||be(_,"default"))&&l.push(p)}}const h=[a,l];return xe(t)&&r.set(t,h),h}function ph(t){return t[0]!=="$"&&!Hs(t)}const mc=t=>t[0]==="_"||t==="$stable",_c=t=>ce(t)?t.map(Ft):[Ft(t)],av=(t,e,n)=>{if(e._n)return e;const r=yl((...s)=>_c(e(...s)),n);return r._c=!1,r},gp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(mc(s))continue;const i=t[s];if(he(i))e[s]=av(s,i,r);else if(i!=null){const a=_c(i);e[s]=()=>a}}},mp=(t,e)=>{const n=_c(e);t.slots.default=()=>n},_p=(t,e,n)=>{for(const r in e)(n||!mc(r))&&(t[r]=e[r])},lv=(t,e,n)=>{const r=t.slots=hp();if(t.vnode.shapeFlag&32){const s=e.__;s&&hl(r,"__",s,!0);const i=e._;i?(_p(r,e,n),n&&hl(r,"_",i,!0)):gp(e,r)}else e&&mp(t,e)},cv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:_p(s,e,n):(i=!e.$stable,gp(e,s)),a=e}else e&&(mp(t,e),a={default:1});if(i)for(const l in s)!mc(l)&&a[l]==null&&delete s[l]},Rt=Cv;function uv(t){return hv(t)}function hv(t,e){const n=Xo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=Yt,insertStaticContent:C}=t,V=(v,I,S,N=null,L=null,x=null,G=void 0,z=null,H=!!I.dynamicChildren)=>{if(v===I)return;v&&!$n(v,I)&&(N=O(v),Me(v,L,x,!0),v=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:B,ref:re,shapeFlag:K}=I;switch(B){case na:D(v,I,S,N);break;case er:$(v,I,S,N);break;case Ka:v==null&&U(I,S,N,G);break;case Jt:R(v,I,S,N,L,x,G,z,H);break;default:K&1?Q(v,I,S,N,L,x,G,z,H):K&6?T(v,I,S,N,L,x,G,z,H):(K&64||K&128)&&B.process(v,I,S,N,L,x,G,z,H,ee)}re!=null&&L?Ws(re,v&&v.ref,x,I||v,!I):re==null&&v&&v.ref!=null&&Ws(v.ref,null,x,v,!0)},D=(v,I,S,N)=>{if(v==null)r(I.el=l(I.children),S,N);else{const L=I.el=v.el;I.children!==v.children&&h(L,I.children)}},$=(v,I,S,N)=>{v==null?r(I.el=c(I.children||""),S,N):I.el=v.el},U=(v,I,S,N)=>{[v.el,v.anchor]=C(v.children,I,S,N,v.el,v.anchor)},j=({el:v,anchor:I},S,N)=>{let L;for(;v&&v!==I;)L=g(v),r(v,S,N),v=L;r(I,S,N)},q=({el:v,anchor:I})=>{let S;for(;v&&v!==I;)S=g(v),s(v),v=S;s(I)},Q=(v,I,S,N,L,x,G,z,H)=>{I.type==="svg"?G="svg":I.type==="math"&&(G="mathml"),v==null?Z(I,S,N,L,x,G,z,H):E(v,I,L,x,G,z,H)},Z=(v,I,S,N,L,x,G,z)=>{let H,B;const{props:re,shapeFlag:K,transition:ne,dirs:ae}=v;if(H=v.el=a(v.type,x,re&&re.is,re),K&8?f(H,v.children):K&16&&y(v.children,H,null,N,L,Wa(v,x),G,z),ae&&dr(v,null,N,"created"),A(H,v,v.scopeId,G,N),re){for(const de in re)de!=="value"&&!Hs(de)&&i(H,de,null,re[de],x,N);"value"in re&&i(H,"value",null,re.value,x),(B=re.onVnodeBeforeMount)&&Kt(B,N,v)}ae&&dr(v,null,N,"beforeMount");const ie=fv(L,ne);ie&&ne.beforeEnter(H),r(H,I,S),((B=re&&re.onVnodeMounted)||ie||ae)&&Rt(()=>{B&&Kt(B,N,v),ie&&ne.enter(H),ae&&dr(v,null,N,"mounted")},L)},A=(v,I,S,N,L)=>{if(S&&_(v,S),N)for(let x=0;x<N.length;x++)_(v,N[x]);if(L){let x=L.subTree;if(I===x||wp(x.type)&&(x.ssContent===I||x.ssFallback===I)){const G=L.vnode;A(v,G,G.scopeId,G.slotScopeIds,L.parent)}}},y=(v,I,S,N,L,x,G,z,H=0)=>{for(let B=H;B<v.length;B++){const re=v[B]=z?Un(v[B]):Ft(v[B]);V(null,re,I,S,N,L,x,G,z)}},E=(v,I,S,N,L,x,G)=>{const z=I.el=v.el;let{patchFlag:H,dynamicChildren:B,dirs:re}=I;H|=v.patchFlag&16;const K=v.props||Ce,ne=I.props||Ce;let ae;if(S&&pr(S,!1),(ae=ne.onVnodeBeforeUpdate)&&Kt(ae,S,I,v),re&&dr(I,v,S,"beforeUpdate"),S&&pr(S,!0),(K.innerHTML&&ne.innerHTML==null||K.textContent&&ne.textContent==null)&&f(z,""),B?w(v.dynamicChildren,B,z,S,N,Wa(I,L),x):G||me(v,I,z,null,S,N,Wa(I,L),x,!1),H>0){if(H&16)b(z,K,ne,S,L);else if(H&2&&K.class!==ne.class&&i(z,"class",null,ne.class,L),H&4&&i(z,"style",K.style,ne.style,L),H&8){const ie=I.dynamicProps;for(let de=0;de<ie.length;de++){const ve=ie[de],Je=K[ve],Xe=ne[ve];(Xe!==Je||ve==="value")&&i(z,ve,Je,Xe,L,S)}}H&1&&v.children!==I.children&&f(z,I.children)}else!G&&B==null&&b(z,K,ne,S,L);((ae=ne.onVnodeUpdated)||re)&&Rt(()=>{ae&&Kt(ae,S,I,v),re&&dr(I,v,S,"updated")},N)},w=(v,I,S,N,L,x,G)=>{for(let z=0;z<I.length;z++){const H=v[z],B=I[z],re=H.el&&(H.type===Jt||!$n(H,B)||H.shapeFlag&198)?p(H.el):S;V(H,B,re,null,N,L,x,G,!0)}},b=(v,I,S,N,L)=>{if(I!==S){if(I!==Ce)for(const x in I)!Hs(x)&&!(x in S)&&i(v,x,I[x],null,L,N);for(const x in S){if(Hs(x))continue;const G=S[x],z=I[x];G!==z&&x!=="value"&&i(v,x,z,G,L,N)}"value"in S&&i(v,"value",I.value,S.value,L)}},R=(v,I,S,N,L,x,G,z,H)=>{const B=I.el=v?v.el:l(""),re=I.anchor=v?v.anchor:l("");let{patchFlag:K,dynamicChildren:ne,slotScopeIds:ae}=I;ae&&(z=z?z.concat(ae):ae),v==null?(r(B,S,N),r(re,S,N),y(I.children||[],S,re,L,x,G,z,H)):K>0&&K&64&&ne&&v.dynamicChildren?(w(v.dynamicChildren,ne,S,L,x,G,z),(I.key!=null||L&&I===L.subTree)&&yp(v,I,!0)):me(v,I,S,re,L,x,G,z,H)},T=(v,I,S,N,L,x,G,z,H)=>{I.slotScopeIds=z,v==null?I.shapeFlag&512?L.ctx.activate(I,S,N,G,H):Ue(I,S,N,L,x,G,H):Qe(v,I,H)},Ue=(v,I,S,N,L,x,G)=>{const z=v.component=Fv(v,N,L);if(sp(v)&&(z.ctx.renderer=ee),Uv(z,!1,G),z.asyncDep){if(L&&L.registerDep(z,ke,G),!v.el){const H=z.subTree=ft(er);$(null,H,I,S)}}else ke(z,v,I,S,L,x,G)},Qe=(v,I,S)=>{const N=I.component=v.component;if(Iv(v,I,S))if(N.asyncDep&&!N.asyncResolved){ge(N,I,S);return}else N.next=I,N.update();else I.el=v.el,N.vnode=I},ke=(v,I,S,N,L,x,G)=>{const z=()=>{if(v.isMounted){let{next:K,bu:ne,u:ae,parent:ie,vnode:de}=v;{const st=vp(v);if(st){K&&(K.el=de.el,ge(v,K,G)),st.asyncDep.then(()=>{v.isUnmounted||z()});return}}let ve=K,Je;pr(v,!1),K?(K.el=de.el,ge(v,K,G)):K=de,ne&&oo(ne),(Je=K.props&&K.props.onVnodeBeforeUpdate)&&Kt(Je,ie,K,de),pr(v,!0);const Xe=mh(v),Ct=v.subTree;v.subTree=Xe,V(Ct,Xe,p(Ct.el),O(Ct),v,L,x),K.el=Xe.el,ve===null&&yc(v,Xe.el),ae&&Rt(ae,L),(Je=K.props&&K.props.onVnodeUpdated)&&Rt(()=>Kt(Je,ie,K,de),L)}else{let K;const{el:ne,props:ae}=I,{bm:ie,m:de,parent:ve,root:Je,type:Xe}=v,Ct=Ks(I);pr(v,!1),ie&&oo(ie),!Ct&&(K=ae&&ae.onVnodeBeforeMount)&&Kt(K,ve,I),pr(v,!0);{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Xe);const st=v.subTree=mh(v);V(null,st,S,N,v,L,x),I.el=st.el}if(de&&Rt(de,L),!Ct&&(K=ae&&ae.onVnodeMounted)){const st=I;Rt(()=>Kt(K,ve,st),L)}(I.shapeFlag&256||ve&&Ks(ve.vnode)&&ve.vnode.shapeFlag&256)&&v.a&&Rt(v.a,L),v.isMounted=!0,I=S=N=null}};v.scope.on();const H=v.effect=new Dd(z);v.scope.off();const B=v.update=H.run.bind(H),re=v.job=H.runIfDirty.bind(H);re.i=v,re.id=v.uid,H.scheduler=()=>dc(re),pr(v,!0),B()},ge=(v,I,S)=>{I.component=v;const N=v.vnode.props;v.vnode=I,v.next=null,iv(v,I.props,N,S),cv(v,I.children,S),In(),lh(v),wn()},me=(v,I,S,N,L,x,G,z,H=!1)=>{const B=v&&v.children,re=v?v.shapeFlag:0,K=I.children,{patchFlag:ne,shapeFlag:ae}=I;if(ne>0){if(ne&128){Mt(B,K,S,N,L,x,G,z,H);return}else if(ne&256){At(B,K,S,N,L,x,G,z,H);return}}ae&8?(re&16&&vt(B,L,x),K!==B&&f(S,K)):re&16?ae&16?Mt(B,K,S,N,L,x,G,z,H):vt(B,L,x,!0):(re&8&&f(S,""),ae&16&&y(K,S,N,L,x,G,z,H))},At=(v,I,S,N,L,x,G,z,H)=>{v=v||zr,I=I||zr;const B=v.length,re=I.length,K=Math.min(B,re);let ne;for(ne=0;ne<K;ne++){const ae=I[ne]=H?Un(I[ne]):Ft(I[ne]);V(v[ne],ae,S,null,L,x,G,z,H)}B>re?vt(v,L,x,!0,!1,K):y(I,S,N,L,x,G,z,H,K)},Mt=(v,I,S,N,L,x,G,z,H)=>{let B=0;const re=I.length;let K=v.length-1,ne=re-1;for(;B<=K&&B<=ne;){const ae=v[B],ie=I[B]=H?Un(I[B]):Ft(I[B]);if($n(ae,ie))V(ae,ie,S,null,L,x,G,z,H);else break;B++}for(;B<=K&&B<=ne;){const ae=v[K],ie=I[ne]=H?Un(I[ne]):Ft(I[ne]);if($n(ae,ie))V(ae,ie,S,null,L,x,G,z,H);else break;K--,ne--}if(B>K){if(B<=ne){const ae=ne+1,ie=ae<re?I[ae].el:N;for(;B<=ne;)V(null,I[B]=H?Un(I[B]):Ft(I[B]),S,ie,L,x,G,z,H),B++}}else if(B>ne)for(;B<=K;)Me(v[B],L,x,!0),B++;else{const ae=B,ie=B,de=new Map;for(B=ie;B<=ne;B++){const Ye=I[B]=H?Un(I[B]):Ft(I[B]);Ye.key!=null&&de.set(Ye.key,B)}let ve,Je=0;const Xe=ne-ie+1;let Ct=!1,st=0;const Vn=new Array(Xe);for(B=0;B<Xe;B++)Vn[B]=0;for(B=ae;B<=K;B++){const Ye=v[B];if(Je>=Xe){Me(Ye,L,x,!0);continue}let kt;if(Ye.key!=null)kt=de.get(Ye.key);else for(ve=ie;ve<=ne;ve++)if(Vn[ve-ie]===0&&$n(Ye,I[ve])){kt=ve;break}kt===void 0?Me(Ye,L,x,!0):(Vn[kt-ie]=B+1,kt>=st?st=kt:Ct=!0,V(Ye,I[kt],S,null,L,x,G,z,H),Je++)}const Ts=Ct?dv(Vn):zr;for(ve=Ts.length-1,B=Xe-1;B>=0;B--){const Ye=ie+B,kt=I[Ye],xi=Ye+1<re?I[Ye+1].el:N;Vn[B]===0?V(null,kt,S,xi,L,x,G,z,H):Ct&&(ve<0||B!==Ts[ve]?Pt(kt,S,xi,2):ve--)}}},Pt=(v,I,S,N,L=null)=>{const{el:x,type:G,transition:z,children:H,shapeFlag:B}=v;if(B&6){Pt(v.component.subTree,I,S,N);return}if(B&128){v.suspense.move(I,S,N);return}if(B&64){G.move(v,I,S,ee);return}if(G===Jt){r(x,I,S);for(let K=0;K<H.length;K++)Pt(H[K],I,S,N);r(v.anchor,I,S);return}if(G===Ka){j(v,I,S);return}if(N!==2&&B&1&&z)if(N===0)z.beforeEnter(x),r(x,I,S),Rt(()=>z.enter(x),L);else{const{leave:K,delayLeave:ne,afterLeave:ae}=z,ie=()=>{v.ctx.isUnmounted?s(x):r(x,I,S)},de=()=>{K(x,()=>{ie(),ae&&ae()})};ne?ne(x,ie,de):de()}else r(x,I,S)},Me=(v,I,S,N=!1,L=!1)=>{const{type:x,props:G,ref:z,children:H,dynamicChildren:B,shapeFlag:re,patchFlag:K,dirs:ne,cacheIndex:ae}=v;if(K===-2&&(L=!1),z!=null&&(In(),Ws(z,null,S,v,!0),wn()),ae!=null&&(I.renderCache[ae]=void 0),re&256){I.ctx.deactivate(v);return}const ie=re&1&&ne,de=!Ks(v);let ve;if(de&&(ve=G&&G.onVnodeBeforeUnmount)&&Kt(ve,I,v),re&6)Wt(v.component,S,N);else{if(re&128){v.suspense.unmount(S,N);return}ie&&dr(v,null,I,"beforeUnmount"),re&64?v.type.remove(v,I,S,ee,N):B&&!B.hasOnce&&(x!==Jt||K>0&&K&64)?vt(B,I,S,!1,!0):(x===Jt&&K&384||!L&&re&16)&&vt(H,I,S),N&&Le(v)}(de&&(ve=G&&G.onVnodeUnmounted)||ie)&&Rt(()=>{ve&&Kt(ve,I,v),ie&&dr(v,null,I,"unmounted")},S)},Le=v=>{const{type:I,el:S,anchor:N,transition:L}=v;if(I===Jt){kn(S,N);return}if(I===Ka){q(v);return}const x=()=>{s(S),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(v.shapeFlag&1&&L&&!L.persisted){const{leave:G,delayLeave:z}=L,H=()=>G(S,x);z?z(v.el,x,H):H()}else x()},kn=(v,I)=>{let S;for(;v!==I;)S=g(v),s(v),v=S;s(I)},Wt=(v,I,S)=>{const{bum:N,scope:L,job:x,subTree:G,um:z,m:H,a:B,parent:re,slots:{__:K}}=v;gh(H),gh(B),N&&oo(N),re&&ce(K)&&K.forEach(ne=>{re.renderCache[ne]=void 0}),L.stop(),x&&(x.flags|=8,Me(G,v,I,S)),z&&Rt(z,I),Rt(()=>{v.isUnmounted=!0},I),I&&I.pendingBranch&&!I.isUnmounted&&v.asyncDep&&!v.asyncResolved&&v.suspenseId===I.pendingId&&(I.deps--,I.deps===0&&I.resolve())},vt=(v,I,S,N=!1,L=!1,x=0)=>{for(let G=x;G<v.length;G++)Me(v[G],I,S,N,L)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=g(v.anchor||v.el),S=I&&I[Dy];return S?g(S):I};let Y=!1;const J=(v,I,S)=>{v==null?I._vnode&&Me(I._vnode,null,null,!0):V(I._vnode||null,v,I,null,null,null,S),I._vnode=v,Y||(Y=!0,lh(),Zd(),Y=!1)},ee={p:V,um:Me,m:Pt,r:Le,mt:Ue,mc:y,pc:me,pbc:w,n:O,o:t};return{render:J,hydrate:void 0,createApp:rv(J)}}function Wa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function yp(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Un(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&yp(a,l)),l.type===na&&(l.el=a.el),l.type===er&&!l.el&&(l.el=a.el)}}function dv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function vp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:vp(e)}function gh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const pv=Symbol.for("v-scx"),gv=()=>Zt(pv);function lo(t,e,n){return Ep(t,e,n)}function Ep(t,e,n=Ce){const{immediate:r,deep:s,flush:i,once:a}=n,l=pt({},n),c=e&&r||!e&&i!=="post";let h;if(ci){if(i==="sync"){const _=gv();h=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=Yt,_.resume=Yt,_.pause=Yt,_}}const f=ht;l.call=(_,C,V)=>on(_,f,C,V);let p=!1;i==="post"?l.scheduler=_=>{Rt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,C)=>{C?_():dc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=Cy(t,e,l);return ci&&(h?h.push(g):c&&g()),g}function mv(t,e,n){const r=this.proxy,s=$e(t)?t.includes(".")?Tp(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const a=Ai(this),l=Ep(s,i.bind(r),n);return a(),l}function Tp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const _v=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xt(e)}Modifiers`]||t[`${Pr(e)}Modifiers`];function yv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),a=i&&_v(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>$e(f)?f.trim():f)),a.number&&(s=n.map(fl)));let l,c=r[l=Ba(e)]||r[l=Ba(xt(e))];!c&&i&&(c=r[l=Ba(Pr(e))]),c&&on(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,on(h,t,6,s)}}function Ip(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!he(t)){const c=h=>{const f=Ip(h,e,!0);f&&(l=!0,pt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(xe(t)&&r.set(t,null),null):(ce(i)?i.forEach(c=>a[c]=null):pt(a,i),xe(t)&&r.set(t,a),a)}function ta(t,e){return!t||!Ko(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(t,e[0].toLowerCase()+e.slice(1))||be(t,Pr(e))||be(t,e))}function mh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:f,props:p,data:g,setupState:_,ctx:C,inheritAttrs:V}=t,D=bo(t);let $,U;try{if(n.shapeFlag&4){const q=s||r,Q=q;$=Ft(h.call(Q,q,f,p,_,g,C)),U=l}else{const q=e;$=Ft(q.length>1?q(p,{attrs:l,slots:a,emit:c}):q(p,null)),U=e.props?l:Ev(l)}}catch(q){Qs.length=0,wi(q,t,1),$=ft(er)}let j=$;if(U&&V!==!1){const q=Object.keys(U),{shapeFlag:Q}=j;q.length&&Q&7&&(i&&q.some(tc)&&(U=Tv(U,i)),j=ss(j,U,!1,!0))}return n.dirs&&(j=ss(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&pc(j,n.transition),$=j,bo(D),$}function vv(t,e=!0){let n;for(let r=0;r<t.length;r++){const s=t[r];if(li(s)){if(s.type!==er||s.children==="v-if"){if(n)return;n=s}}else return}return n}const Ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ko(n))&&((e||(e={}))[n]=t[n]);return e},Tv=(t,e)=>{const n={};for(const r in t)(!tc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?_h(r,a,h):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!ta(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?_h(r,a,h):!0:!!a;return!1}function _h(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ta(n,i))return!0}return!1}function yc({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const wp=t=>t.__isSuspense;let wl=0;const wv={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,a,l,c,h){if(t==null)bv(e,n,r,s,i,a,l,c,h);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}Rv(t,e,n,r,s,a,l,c,h)}},hydrate:Sv,normalize:Pv},Av=wv;function ai(t,e){const n=t.props&&t.props[e];he(n)&&n()}function bv(t,e,n,r,s,i,a,l,c){const{p:h,o:{createElement:f}}=c,p=f("div"),g=t.suspense=Ap(t,s,r,e,p,n,i,a,l,c);h(null,g.pendingBranch=t.ssContent,p,null,r,g,i,a),g.deps>0?(ai(t,"onPending"),ai(t,"onFallback"),h(null,t.ssFallback,e,n,r,null,i,a),Xr(g,t.ssFallback)):g.resolve(!1,!0)}function Rv(t,e,n,r,s,i,a,l,{p:c,um:h,o:{createElement:f}}){const p=e.suspense=t.suspense;p.vnode=e,e.el=t.el;const g=e.ssContent,_=e.ssFallback,{activeBranch:C,pendingBranch:V,isInFallback:D,isHydrating:$}=p;if(V)p.pendingBranch=g,$n(g,V)?(c(V,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0?p.resolve():D&&($||(c(C,_,n,r,s,null,i,a,l),Xr(p,_)))):(p.pendingId=wl++,$?(p.isHydrating=!1,p.activeBranch=V):h(V,s,p),p.deps=0,p.effects.length=0,p.hiddenContainer=f("div"),D?(c(null,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0?p.resolve():(c(C,_,n,r,s,null,i,a,l),Xr(p,_))):C&&$n(g,C)?(c(C,g,n,r,s,p,i,a,l),p.resolve(!0)):(c(null,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0&&p.resolve()));else if(C&&$n(g,C))c(C,g,n,r,s,p,i,a,l),Xr(p,g);else if(ai(e,"onPending"),p.pendingBranch=g,g.shapeFlag&512?p.pendingId=g.component.suspenseId:p.pendingId=wl++,c(null,g,p.hiddenContainer,null,s,p,i,a,l),p.deps<=0)p.resolve();else{const{timeout:U,pendingId:j}=p;U>0?setTimeout(()=>{p.pendingId===j&&p.fallback(_)},U):U===0&&p.fallback(_)}}function Ap(t,e,n,r,s,i,a,l,c,h,f=!1){const{p,m:g,um:_,n:C,o:{parentNode:V,remove:D}}=h;let $;const U=kv(t);U&&e&&e.pendingBranch&&($=e.pendingId,e.deps++);const j=t.props?Q_(t.props.timeout):void 0,q=i,Q={vnode:t,parent:e,parentComponent:n,namespace:a,container:r,hiddenContainer:s,deps:0,pendingId:wl++,timeout:typeof j=="number"?j:-1,activeBranch:null,pendingBranch:null,isInFallback:!f,isHydrating:f,isUnmounted:!1,effects:[],resolve(Z=!1,A=!1){const{vnode:y,activeBranch:E,pendingBranch:w,pendingId:b,effects:R,parentComponent:T,container:Ue}=Q;let Qe=!1;Q.isHydrating?Q.isHydrating=!1:Z||(Qe=E&&w.transition&&w.transition.mode==="out-in",Qe&&(E.transition.afterLeave=()=>{b===Q.pendingId&&(g(w,Ue,i===q?C(E):i,0),_l(R))}),E&&(V(E.el)===Ue&&(i=C(E)),_(E,T,Q,!0)),Qe||g(w,Ue,i,0)),Xr(Q,w),Q.pendingBranch=null,Q.isInFallback=!1;let ke=Q.parent,ge=!1;for(;ke;){if(ke.pendingBranch){ke.effects.push(...R),ge=!0;break}ke=ke.parent}!ge&&!Qe&&_l(R),Q.effects=[],U&&e&&e.pendingBranch&&$===e.pendingId&&(e.deps--,e.deps===0&&!A&&e.resolve()),ai(y,"onResolve")},fallback(Z){if(!Q.pendingBranch)return;const{vnode:A,activeBranch:y,parentComponent:E,container:w,namespace:b}=Q;ai(A,"onFallback");const R=C(y),T=()=>{Q.isInFallback&&(p(null,Z,w,R,E,null,b,l,c),Xr(Q,Z))},Ue=Z.transition&&Z.transition.mode==="out-in";Ue&&(y.transition.afterLeave=T),Q.isInFallback=!0,_(y,E,null,!0),Ue||T()},move(Z,A,y){Q.activeBranch&&g(Q.activeBranch,Z,A,y),Q.container=Z},next(){return Q.activeBranch&&C(Q.activeBranch)},registerDep(Z,A,y){const E=!!Q.pendingBranch;E&&Q.deps++;const w=Z.vnode.el;Z.asyncDep.catch(b=>{wi(b,Z,0)}).then(b=>{if(Z.isUnmounted||Q.isUnmounted||Q.pendingId!==Z.suspenseId)return;Z.asyncResolved=!0;const{vnode:R}=Z;bl(Z,b),w&&(R.el=w);const T=!w&&Z.subTree.el;A(Z,R,V(w||Z.subTree.el),w?null:C(Z.subTree),Q,a,y),T&&D(T),yc(Z,R.el),E&&--Q.deps===0&&Q.resolve()})},unmount(Z,A){Q.isUnmounted=!0,Q.activeBranch&&_(Q.activeBranch,n,Z,A),Q.pendingBranch&&_(Q.pendingBranch,n,Z,A)}};return Q}function Sv(t,e,n,r,s,i,a,l,c){const h=e.suspense=Ap(e,r,n,t.parentNode,document.createElement("div"),null,s,i,a,l,!0),f=c(t,h.pendingBranch=e.ssContent,n,h,i,a);return h.deps===0&&h.resolve(!1,!0),f}function Pv(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=yh(r?n.default:n),t.ssFallback=r?yh(n.fallback):ft(er)}function yh(t){let e;if(he(t)){const n=rs&&t._c;n&&(t._d=!1,Vt()),t=t(),n&&(t._d=!0,e=It,bp())}return ce(t)&&(t=vv(t)),t=Ft(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Cv(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):_l(t)}function Xr(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t;let s=e.el;for(;!s&&e.component;)e=e.component.subTree,s=e.el;n.el=s,r&&r.subTree===n&&(r.vnode.el=s,yc(r,s))}function kv(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Jt=Symbol.for("v-fgt"),na=Symbol.for("v-txt"),er=Symbol.for("v-cmt"),Ka=Symbol.for("v-stc"),Qs=[];let It=null;function Vt(t=!1){Qs.push(It=t?null:[])}function bp(){Qs.pop(),It=Qs[Qs.length-1]||null}let rs=1;function vh(t,e=!1){rs+=t,t<0&&It&&e&&(It.hasOnce=!0)}function Rp(t){return t.dynamicChildren=rs>0?It||zr:null,bp(),rs>0&&It&&It.push(t),t}function Xt(t,e,n,r,s,i){return Rp(Se(t,e,n,r,s,i,!0))}function Vv(t,e,n,r,s){return Rp(ft(t,e,n,r,s,!0))}function li(t){return t?t.__v_isVNode===!0:!1}function $n(t,e){return t.type===e.type&&t.key===e.key}const Sp=({key:t})=>t??null,co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?$e(t)||dt(t)||he(t)?{i:St,r:t,k:e,f:!!n}:t:null);function Se(t,e=null,n=null,r=0,s=null,i=t===Jt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sp(e),ref:e&&co(e),scopeId:tp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:St};return l?(vc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=$e(n)?8:16),rs>0&&!a&&It&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&It.push(c),c}const ft=Dv;function Dv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Ky)&&(t=er),li(t)){const l=ss(t,e,!0);return n&&vc(l,n),rs>0&&!i&&It&&(l.shapeFlag&6?It[It.indexOf(t)]=l:It.push(l)),l.patchFlag=-2,l}if(qv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:l,style:c}=e;l&&!$e(l)&&(e.class=ic(l)),xe(c)&&(fc(c)&&!ce(c)&&(c=pt({},c)),e.style=sc(c))}const a=$e(t)?1:wp(t)?128:Oy(t)?64:xe(t)?4:he(t)?2:0;return Se(t,e,n,r,s,a,i,!0)}function Ov(t){return t?fc(t)||fp(t)?pt({},t):t:null}function ss(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?xv(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Sp(h),ref:e&&e.ref?n&&i?ce(i)?i.concat(co(e)):[i,co(e)]:co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Jt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ss(t.ssContent),ssFallback:t.ssFallback&&ss(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&pc(f,c.clone(f)),f}function Nv(t=" ",e=0){return ft(na,null,t,e)}function Ft(t){return t==null||typeof t=="boolean"?ft(er):ce(t)?ft(Jt,null,t.slice()):li(t)?Un(t):ft(na,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ss(t)}function vc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!fp(e)?e._ctx=St:s===3&&St&&(St.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:St},n=32):(e=String(e),r&64?(n=16,e=[Nv(e)]):n=8);t.children=e,t.shapeFlag|=n}function xv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ic([e.class,r.class]));else if(s==="style")e.style=sc([e.style,r.style]);else if(Ko(s)){const i=e[s],a=r[s];a&&i!==a&&!(ce(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){on(t,e,7,[n,r])}const Mv=cp();let Lv=0;function Fv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Mv,i={uid:Lv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ny(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pp(r,s),emitsOptions:Ip(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yv.bind(null,i),t.ce&&t.ce(i),i}let ht=null,So,Al;{const t=Xo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};So=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Al=e("__VUE_SSR_SETTERS__",n=>ci=n)}const Ai=t=>{const e=ht;return So(t),t.scope.on(),()=>{t.scope.off(),So(e)}},Eh=()=>{ht&&ht.scope.off(),So(null)};function Pp(t){return t.vnode.shapeFlag&4}let ci=!1;function Uv(t,e=!1,n=!1){e&&Al(e);const{props:r,children:s}=t.vnode,i=Pp(t);sv(t,r,i,e),lv(t,s,n||e);const a=i?Bv(t,e):void 0;return e&&Al(!1),a}function Bv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Jy);const{setup:r}=n;if(r){In();const s=t.setupContext=r.length>1?$v(t):null,i=Ai(t),a=Ii(r,t,0,[t.props,s]),l=Rd(a);if(wn(),i(),(l||t.sp)&&!Ks(t)&&rp(t),l){if(a.then(Eh,Eh),e)return a.then(c=>{bl(t,c)}).catch(c=>{wi(c,t,0)});t.asyncDep=a}else bl(t,a)}else Cp(t)}function bl(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Qd(e)),Cp(t)}function Cp(t,e,n){const r=t.type;t.render||(t.render=r.render||Yt);{const s=Ai(t);In();try{Xy(t)}finally{wn(),s()}}}const jv={get(t,e){return ct(t,"get",""),t[e]}};function $v(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,jv),slots:t.slots,emit:t.emit,expose:e}}function ra(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qd(Iy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function Hv(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function qv(t){return he(t)&&"__vccOpts"in t}const Ut=(t,e)=>Sy(t,e,ci);function kp(t,e,n){const r=arguments.length;return r===2?xe(e)&&!ce(e)?li(e)?ft(t,null,[e]):ft(t,e):ft(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&li(n)&&(n=[n]),ft(t,e,n))}const zv="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const Th=typeof window<"u"&&window.trustedTypes;if(Th)try{Rl=Th.createPolicy("vue",{createHTML:t=>t})}catch{}const Vp=Rl?t=>Rl.createHTML(t):t=>t,Wv="http://www.w3.org/2000/svg",Kv="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,Ih=pn&&pn.createElement("template"),Gv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?pn.createElementNS(Wv,t):e==="mathml"?pn.createElementNS(Kv,t):n?pn.createElement(t,{is:n}):pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ih.innerHTML=Vp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ih.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Qv=Symbol("_vtc");function Jv(t,e,n){const r=t[Qv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wh=Symbol("_vod"),Xv=Symbol("_vsh"),Yv=Symbol(""),Zv=/(^|;)\s*display\s*:/;function eE(t,e,n){const r=t.style,s=$e(n);let i=!1;if(n&&!s){if(e)if($e(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&uo(r,l,"")}else for(const a in e)n[a]==null&&uo(r,a,"");for(const a in n)a==="display"&&(i=!0),uo(r,a,n[a])}else if(s){if(e!==n){const a=r[Yv];a&&(n+=";"+a),r.cssText=n,i=Zv.test(n)}}else e&&t.removeAttribute("style");wh in t&&(t[wh]=i?r.display:"",t[Xv]&&(r.display="none"))}const Ah=/\s*!important$/;function uo(t,e,n){if(ce(n))n.forEach(r=>uo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=tE(t,e);Ah.test(n)?t.setProperty(Pr(r),n.replace(Ah,""),"important"):t[r]=n}}const bh=["Webkit","Moz","ms"],Ga={};function tE(t,e){const n=Ga[e];if(n)return n;let r=xt(e);if(r!=="filter"&&r in t)return Ga[e]=r;r=Jo(r);for(let s=0;s<bh.length;s++){const i=bh[s]+r;if(i in t)return Ga[e]=i}return e}const Rh="http://www.w3.org/1999/xlink";function Sh(t,e,n,r,s,i=ty(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rh,e.slice(6,e.length)):t.setAttributeNS(Rh,e,n):n==null||i&&!Cd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":lr(n)?String(n):n)}function Ph(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Vp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Cd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Ur(t,e,n,r){t.addEventListener(e,n,r)}function nE(t,e,n,r){t.removeEventListener(e,n,r)}const Ch=Symbol("_vei");function rE(t,e,n,r,s=null){const i=t[Ch]||(t[Ch]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=sE(e);if(r){const h=i[e]=aE(r,s);Ur(t,l,h,c)}else a&&(nE(t,l,a,c),i[e]=void 0)}}const kh=/(?:Once|Passive|Capture)$/;function sE(t){let e;if(kh.test(t)){e={};let r;for(;r=t.match(kh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pr(t.slice(2)),e]}let Qa=0;const iE=Promise.resolve(),oE=()=>Qa||(iE.then(()=>Qa=0),Qa=Date.now());function aE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;on(lE(r,n.value),e,5,[r])};return n.value=t,n.attached=oE(),n}function lE(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Jv(t,r,a):e==="style"?eE(t,n,r):Ko(e)?tc(e)||rE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uE(t,e,r,a))?(Ph(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!$e(r))?Ph(t,xt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Sh(t,e,r,a))};function uE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vh(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vh(e)&&$e(n)?!1:e in t}const Dh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ce(e)?n=>oo(e,n):e};function hE(t){t.target.composing=!0}function Oh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ja=Symbol("_assign"),Ms={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ja]=Dh(s);const i=r||s.props&&s.props.type==="number";Ur(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=fl(l)),t[Ja](l)}),n&&Ur(t,"change",()=>{t.value=t.value.trim()}),e||(Ur(t,"compositionstart",hE),Ur(t,"compositionend",Oh),Ur(t,"change",Oh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Ja]=Dh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?fl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},fE=pt({patchProp:cE},Gv);let Nh;function dE(){return Nh||(Nh=uv(fE))}const pE=(...t)=>{const e=dE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=mE(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,gE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function gE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function mE(t){return $e(t)?document.querySelector(t):t}const _E=()=>{};var xh={};/**
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
 */const Dp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Op={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,_=h&63;c||(_=64,a||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Dp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new vE;const g=i<<2|l>>4;if(r.push(g),h!==64){const _=l<<4&240|h>>2;if(r.push(_),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const EE=function(t){const e=Dp(t);return Op.encodeByteArray(e,!0)},Po=function(t){return EE(t).replace(/\./g,"")},Np=function(t){try{return Op.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function TE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IE=()=>TE().__FIREBASE_DEFAULTS__,wE=()=>{if(typeof process>"u"||typeof xh>"u")return;const t=xh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Np(t[1]);return e&&JSON.parse(e)},sa=()=>{try{return _E()||IE()||wE()||AE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xp=t=>{var e,n;return(n=(e=sa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bE=t=>{const e=xp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Mp=()=>{var t;return(t=sa())===null||t===void 0?void 0:t.config},Lp=t=>{var e;return(e=sa())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class RE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ps(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Fp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function SE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Po(JSON.stringify(n)),Po(JSON.stringify(a)),""].join(".")}const Js={};function PE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?t.emulator.push(e):t.prod.push(e);return t}function CE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Mh=!1;function Up(t,e){if(typeof window>"u"||typeof document>"u"||!ps(window.location.host)||Js[t]===e||Js[t]||Mh)return;Js[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=PE().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Mh=!0,a()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=CE(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),V=n("learnmore"),D=document.getElementById(V)||document.createElement("a"),$=n("preprendIcon"),U=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(D,V);const q=h();c(U,$),j.append(U,C,D,q),document.body.appendChild(j)}i?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function VE(){var t;const e=(t=sa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function DE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function NE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function xE(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ME(){return!VE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function LE(){try{return typeof indexedDB=="object"}catch{return!1}}function FE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const UE="FirebaseError";class Cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=UE,Object.setPrototypeOf(this,Cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bi.prototype.create)}}class bi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?BE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Cn(s,l,r)}}function BE(t,e){return t.replace(jE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const jE=/\{\$([^}]+)}/g;function $E(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ir(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Lh(i)&&Lh(a)){if(!Ir(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lh(t){return t!==null&&typeof t=="object"}/**
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
 */function Ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function HE(t,e){const n=new qE(t,e);return n.subscribe.bind(n)}class qE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");zE(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Xa),s.error===void 0&&(s.error=Xa),s.complete===void 0&&(s.complete=Xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function zE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xa(){}/**
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
 */function wt(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class WE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GE(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KE(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KE(t){return t===mr?void 0:t}function GE(t){return t.instantiationMode==="EAGER"}/**
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
 */class QE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const JE={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},XE=_e.INFO,YE={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},ZE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=YE[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ec{constructor(e){this.name=e,this._logLevel=XE,this._logHandler=ZE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const eT=(t,e)=>e.some(n=>t instanceof n);let Fh,Uh;function tT(){return Fh||(Fh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nT(){return Uh||(Uh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,Sl=new WeakMap,jp=new WeakMap,Ya=new WeakMap,Tc=new WeakMap;function rT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Gn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),Tc.set(e,t),e}function sT(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Sl.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Gn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function iT(t){Pl=t(Pl)}function oT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Za(this),e,...n);return jp.set(r,e.sort?e.sort():[e]),Gn(r)}:nT().includes(t)?function(...e){return t.apply(Za(this),e),Gn(Bp.get(this))}:function(...e){return Gn(t.apply(Za(this),e))}}function aT(t){return typeof t=="function"?oT(t):(t instanceof IDBTransaction&&sT(t),eT(t,tT())?new Proxy(t,Pl):t)}function Gn(t){if(t instanceof IDBRequest)return rT(t);if(Ya.has(t))return Ya.get(t);const e=aT(t);return e!==t&&(Ya.set(t,e),Tc.set(e,t)),e}const Za=t=>Tc.get(t);function lT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Gn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Gn(a.result),c.oldVersion,c.newVersion,Gn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const cT=["get","getKey","getAll","getAllKeys","count"],uT=["put","add","delete","clear"],el=new Map;function Bh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(el.get(e))return el.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=uT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||cT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return el.set(e,i),i}iT(t=>({...t,get:(e,n,r)=>Bh(e,n)||t.get(e,n,r),has:(e,n)=>!!Bh(e,n)||t.has(e,n)}));/**
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
 */class hT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fT(t){const e=t.getComponent();return e?.type==="VERSION"}const Cl="@firebase/app",jh="0.13.2";/**
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
 */const An=new Ec("@firebase/app"),dT="@firebase/app-compat",pT="@firebase/analytics-compat",gT="@firebase/analytics",mT="@firebase/app-check-compat",_T="@firebase/app-check",yT="@firebase/auth",vT="@firebase/auth-compat",ET="@firebase/database",TT="@firebase/data-connect",IT="@firebase/database-compat",wT="@firebase/functions",AT="@firebase/functions-compat",bT="@firebase/installations",RT="@firebase/installations-compat",ST="@firebase/messaging",PT="@firebase/messaging-compat",CT="@firebase/performance",kT="@firebase/performance-compat",VT="@firebase/remote-config",DT="@firebase/remote-config-compat",OT="@firebase/storage",NT="@firebase/storage-compat",xT="@firebase/firestore",MT="@firebase/ai",LT="@firebase/firestore-compat",FT="firebase",UT="11.10.0";/**
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
 */const kl="[DEFAULT]",BT={[Cl]:"fire-core",[dT]:"fire-core-compat",[gT]:"fire-analytics",[pT]:"fire-analytics-compat",[_T]:"fire-app-check",[mT]:"fire-app-check-compat",[yT]:"fire-auth",[vT]:"fire-auth-compat",[ET]:"fire-rtdb",[TT]:"fire-data-connect",[IT]:"fire-rtdb-compat",[wT]:"fire-fn",[AT]:"fire-fn-compat",[bT]:"fire-iid",[RT]:"fire-iid-compat",[ST]:"fire-fcm",[PT]:"fire-fcm-compat",[CT]:"fire-perf",[kT]:"fire-perf-compat",[VT]:"fire-rc",[DT]:"fire-rc-compat",[OT]:"fire-gcs",[NT]:"fire-gcs-compat",[xT]:"fire-fst",[LT]:"fire-fst-compat",[MT]:"fire-vertex","fire-js":"fire-js",[FT]:"fire-js-all"};/**
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
 */const Co=new Map,jT=new Map,Vl=new Map;function $h(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function is(t){const e=t.name;if(Vl.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;Vl.set(e,t);for(const n of Co.values())$h(n,t);for(const n of jT.values())$h(n,t);return!0}function Ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $T={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Qn=new bi("app","Firebase",$T);/**
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
 */class HT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
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
 */const gs=UT;function $p(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=Mp()),!n)throw Qn.create("no-options");const i=Co.get(s);if(i){if(Ir(n,i.options)&&Ir(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const a=new QE(s);for(const c of Vl.values())a.addComponent(c);const l=new HT(n,r,a);return Co.set(s,l),l}function Hp(t=kl){const e=Co.get(t);if(!e&&t===kl&&Mp())return $p();if(!e)throw Qn.create("no-app",{appName:t});return e}function Jn(t,e,n){var r;let s=(r=BT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(l.join(" "));return}is(new wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const qT="firebase-heartbeat-database",zT=1,ui="firebase-heartbeat-store";let tl=null;function qp(){return tl||(tl=lT(qT,zT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ui)}catch(n){console.warn(n)}}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),tl}async function WT(t){try{const n=(await qp()).transaction(ui),r=await n.objectStore(ui).get(zp(t));return await n.done,r}catch(e){if(e instanceof Cn)An.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e?.message});An.warn(n.message)}}}async function Hh(t,e){try{const r=(await qp()).transaction(ui,"readwrite");await r.objectStore(ui).put(e,zp(t)),await r.done}catch(n){if(n instanceof Cn)An.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n?.message});An.warn(r.message)}}}function zp(t){return`${t.name}!${t.options.appId}`}/**
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
 */const KT=1024,GT=30;class QT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=qh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>GT){const a=YT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qh(),{heartbeatsToSend:r,unsentEntries:s}=JT(this._heartbeatsCache.heartbeats),i=Po(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return An.warn(n),""}}}function qh(){return new Date().toISOString().substring(0,10)}function JT(t,e=KT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),zh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return LE()?FE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await WT(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zh(t){return Po(JSON.stringify({version:2,heartbeats:t})).length}function YT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function ZT(t){is(new wr("platform-logger",e=>new hT(e),"PRIVATE")),is(new wr("heartbeat",e=>new QT(e),"PRIVATE")),Jn(Cl,jh,t),Jn(Cl,jh,"esm2017"),Jn("fire-js","")}ZT("");function wc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Wp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eI=Wp,Kp=new bi("auth","Firebase",Wp());/**
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
 */const ko=new Ec("@firebase/auth");function tI(t,...e){ko.logLevel<=_e.WARN&&ko.warn(`Auth (${gs}): ${t}`,...e)}function ho(t,...e){ko.logLevel<=_e.ERROR&&ko.error(`Auth (${gs}): ${t}`,...e)}/**
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
 */function an(t,...e){throw bc(t,...e)}function qt(t,...e){return bc(t,...e)}function Ac(t,e,n){const r=Object.assign(Object.assign({},eI()),{[e]:n});return new bi("auth","Firebase",r).create(e,{appName:t.name})}function Er(t){return Ac(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function nI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&an(t,"argument-error"),Ac(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Kp.create(t,...e)}function le(t,e,...n){if(!t)throw bc(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ho(e),new Error(e)}function bn(t,e){t||yn(e)}/**
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
 */function Dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rI(){return Wh()==="http:"||Wh()==="https:"}function Wh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function sI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rI()||OE()||"connection"in navigator)?navigator.onLine:!0}function iI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Si{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=kE()||NE()}get(){return sI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rc(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Gp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const oI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],lI=new Si(3e4,6e4);function Sc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ms(t,e,n,r,s={}){return Qp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ri(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return DE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ps(t.emulatorConfig.host)&&(h.credentials="include"),Gp.fetch()(await Jp(t,t.config.apiHost,n,l),h)})}async function Qp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},oI),e);try{const s=new uI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw eo(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw eo(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw eo(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw eo(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Ac(t,f,h);an(t,f)}}catch(s){if(s instanceof Cn)throw s;an(t,"network-request-failed",{message:String(s)})}}async function cI(t,e,n,r,s={}){const i=await ms(t,e,n,r,s);return"mfaPendingCredential"in i&&an(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Jp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Rc(t.config,s):`${t.config.apiScheme}://${s}`;return aI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class uI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(qt(this.auth,"network-request-failed")),lI.get())})}}function eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=qt(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function hI(t,e){return ms(t,"POST","/v1/accounts:delete",e)}async function Vo(t,e){return ms(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fI(t,e=!1){const n=wt(t),r=await n.getIdToken(e),s=Pc(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i?.sign_in_provider;return{claims:s,token:r,authTime:Xs(nl(s.auth_time)),issuedAtTime:Xs(nl(s.iat)),expirationTime:Xs(nl(s.exp)),signInProvider:a||null,signInSecondFactor:i?.sign_in_second_factor||null}}function nl(t){return Number(t)*1e3}function Pc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=Np(n);return s?JSON.parse(s):(ho("Failed to decode base64 JWT payload"),null)}catch(s){return ho("Caught error parsing JWT payload as JSON",s?.toString()),null}}function Kh(t){const e=Pc(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Cn&&dI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ol{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Do(t){var e;const n=t.auth,r=await t.getIdToken(),s=await hi(t,Vo(n,{idToken:r}));le(s?.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Xp(i.providerUserInfo):[],l=mI(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!l?.length,f=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ol(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function gI(t){const e=wt(t);await Do(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Xp(t){return t.map(e=>{var{providerId:n}=e,r=wc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _I(t,e){const n=await Qp(t,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Jp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return t.emulatorConfig&&ps(t.emulatorConfig.host)&&(c.credentials="include"),Gp.fetch()(a,c)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function yI(t,e){return ms(t,"POST","/v2/accounts:revokeToken",Sc(t,e))}/**
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
 */class Yr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Kh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _I(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new Yr;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yr,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
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
 */function xn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=wc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ol(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await hi(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fI(this,e)}reload(){return gI(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Do(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(Er(this.auth));const e=await this.getIdToken();return await hi(this,hI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(a=n.photoURL)!==null&&a!==void 0?a:void 0,V=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:q,isAnonymous:Q,providerData:Z,stsTokenManager:A}=n;le(j&&A,e,"internal-error");const y=Yr.fromJSON(this.name,A);le(typeof j=="string",e,"internal-error"),xn(p,e.name),xn(g,e.name),le(typeof q=="boolean",e,"internal-error"),le(typeof Q=="boolean",e,"internal-error"),xn(_,e.name),xn(C,e.name),xn(V,e.name),xn(D,e.name),xn($,e.name),xn(U,e.name);const E=new jt({uid:j,auth:e,email:g,emailVerified:q,displayName:p,isAnonymous:Q,photoURL:C,phoneNumber:_,tenantId:V,stsTokenManager:y,createdAt:$,lastLoginAt:U});return Z&&Array.isArray(Z)&&(E.providerData=Z.map(w=>Object.assign({},w))),D&&(E._redirectEventId=D),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Yr;s.updateFromServerResponse(n);const i=new jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Do(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Xp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!i?.length,l=new Yr;l.updateFromIdToken(r);const c=new jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ol(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!i?.length};return Object.assign(c,h),c}}/**
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
 */const Gh=new Map;function vn(t){bn(t instanceof Function,"Expected a class definition");let e=Gh.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gh.set(t,e),e)}/**
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
 */class Yp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Yp.type="NONE";const Qh=Yp;/**
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
 */function fo(t,e,n){return`firebase:${t}:${e}:${n}`}class Zr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=fo(this.userKey,s.apiKey,i),this.fullPersistenceKey=fo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Vo(this.auth,{idToken:e}).catch(()=>{});return n?jt._fromGetAccountInfoResponse(this.auth,n,e):null}return jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Zr(vn(Qh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(Qh);const a=fo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){let p;if(typeof f=="string"){const g=await Vo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await jt._fromGetAccountInfoResponse(e,g,f)}else p=jt._fromJSON(e,f);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Zr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Zr(i,e,r))}}/**
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
 */function Jh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ng(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sg(e))return"Blackberry";if(ig(e))return"Webos";if(eg(e))return"Safari";if((e.includes("chrome/")||tg(e))&&!e.includes("edge/"))return"Chrome";if(rg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if(r?.length===2)return r[1]}return"Other"}function Zp(t=gt()){return/firefox\//i.test(t)}function eg(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function tg(t=gt()){return/crios\//i.test(t)}function ng(t=gt()){return/iemobile/i.test(t)}function rg(t=gt()){return/android/i.test(t)}function sg(t=gt()){return/blackberry/i.test(t)}function ig(t=gt()){return/webos/i.test(t)}function Cc(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vI(t=gt()){var e;return Cc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function EI(){return xE()&&document.documentMode===10}function og(t=gt()){return Cc(t)||rg(t)||ig(t)||sg(t)||/windows phone/i.test(t)||ng(t)}/**
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
 */function ag(t,e=[]){let n;switch(t){case"Browser":n=Jh(gt());break;case"Worker":n=`${Jh(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${gs}/${r}`}/**
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
 */class TI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function II(t,e={}){return ms(t,"GET","/v2/passwordPolicy",Sc(t,e))}/**
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
 */const wI=6;class AI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:wI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class bI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xh(this),this.idTokenSubscription=new Xh(this),this.beforeStateQueue=new TI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Kp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Zr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Vo(this,{idToken:e}),r=await jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s?._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&c?.user&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Do(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=iI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(Er(this));const n=e?wt(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(Er(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(Er(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await II(this),n=new AI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new bi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await yI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ag(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&tI(`Error while retrieving App Check token: ${n.error}`),n?.token}}function ia(t){return wt(t)}class Xh{constructor(e){this.auth=e,this.observer=null,this.addObserver=HE(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RI(t){kc=t}function SI(t){return kc.loadJS(t)}function PI(){return kc.gapiScript}function CI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function kI(t,e){const n=Ic(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ir(i,e??{}))return s;an(s,"already-initialized")}return n.initialize({options:e})}function VI(t,e){const n=e?.persistence||[],r=(Array.isArray(n)?n:[n]).map(vn);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e?.popupRedirectResolver)}function DI(t,e,n){const r=ia(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=lg(e),{host:a,port:l}=OI(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Ir(h,r.config.emulator)&&Ir(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,ps(a)?(Fp(`${i}//${a}${c}`),Up("Auth",!0)):NI()}function lg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function OI(t){const e=lg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Yh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Yh(a)}}}function Yh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class cg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}/**
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
 */async function es(t,e){return cI(t,"POST","/v1/accounts:signInWithIdp",Sc(t,e))}/**
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
 */const xI="http://localhost";class Ar extends cg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):an("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=wc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Ar(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return es(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,es(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,es(e,n)}buildRequest(){const e={requestUri:xI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
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
 */class Vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Pi extends Vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends Pi{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class _n extends Pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.GOOGLE_SIGN_IN_METHOD="google.com";_n.PROVIDER_ID="google.com";/**
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
 */class qn extends Pi{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class zn extends Pi{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await jt._fromIdTokenResponse(e,r,s),a=Zh(r);return new os({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zh(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Oo extends Cn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Oo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Oo(e,n,r,s)}}function ug(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Oo._fromErrorAndOperation(t,i,e,r):i})}async function MI(t,e,n=!1){const r=await hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
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
 */async function LI(t,e,n=!1){const{auth:r}=t;if(Bt(r.app))return Promise.reject(Er(r));const s="reauthenticate";try{const i=await hi(t,ug(r,s,e,t),n);le(i.idToken,r,"internal-error");const a=Pc(i.idToken);le(a,r,"internal-error");const{sub:l}=a;return le(t.uid===l,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&an(r,"user-mismatch"),i}}/**
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
 */async function FI(t,e,n=!1){if(Bt(t.app))return Promise.reject(Er(t));const r="signIn",s=await ug(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}/**
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
 */function UI(t,e){return wt(t).setPersistence(e)}function BI(t,e,n,r){return wt(t).onIdTokenChanged(e,n,r)}function jI(t,e,n){return wt(t).beforeAuthStateChanged(e,n)}function $I(t,e,n,r){return wt(t).onAuthStateChanged(e,n,r)}function HI(t){return wt(t).signOut()}const No="__sak";/**
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
 */class hg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(No,"1"),this.storage.removeItem(No),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const qI=1e3,zI=10;class fg extends hg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=og(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);EI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,zI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},qI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}fg.type="LOCAL";const dg=fg;/**
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
 */class pg extends hg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pg.type="SESSION";const gg=pg;/**
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
 */function WI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class oa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new oa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!a?.size)return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await WI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}oa.receivers=[];/**
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
 */function Dc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class KI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=Dc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function en(){return window}function GI(t){en().location.href=t}/**
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
 */function mg(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function QI(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JI(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function XI(){return mg()?self:null}/**
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
 */const _g="firebaseLocalStorageDb",YI=1,xo="firebaseLocalStorage",yg="fbase_key";class Ci{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function aa(t,e){return t.transaction([xo],e?"readwrite":"readonly").objectStore(xo)}function ZI(){const t=indexedDB.deleteDatabase(_g);return new Ci(t).toPromise()}function Nl(){const t=indexedDB.open(_g,YI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(xo,{keyPath:yg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(xo)?e(r):(r.close(),await ZI(),e(await Nl()))})})}async function ef(t,e,n){const r=aa(t,!0).put({[yg]:e,value:n});return new Ci(r).toPromise()}async function ew(t,e){const n=aa(t,!1).get(e),r=await new Ci(n).toPromise();return r===void 0?null:r.value}function tf(t,e){const n=aa(t,!0).delete(e);return new Ci(n).toPromise()}const tw=800,nw=3;class vg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>nw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return mg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=oa._getInstance(XI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await QI(),!this.activeServiceWorker)return;this.sender=new KI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nl();return await ef(e,No,"1"),await tf(e,No),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ef(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>ew(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=aa(s,!1).getAll();return new Ci(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),tw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vg.type="LOCAL";const rw=vg;new Si(3e4,6e4);/**
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
 */function Eg(t,e){return e?vn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Oc extends cg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function sw(t){return FI(t.auth,new Oc(t),t.bypassAuthState)}function iw(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),LI(n,new Oc(t),t.bypassAuthState)}async function ow(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),MI(n,new Oc(t),t.bypassAuthState)}/**
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
 */class Tg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return sw;case"linkViaPopup":case"linkViaRedirect":return ow;case"reauthViaPopup":case"reauthViaRedirect":return iw;default:an(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const aw=new Si(2e3,1e4);async function lw(t,e,n){if(Bt(t.app))return Promise.reject(qt(t,"operation-not-supported-in-this-environment"));const r=ia(t);nI(t,e,Vc);const s=Eg(r,n);return new _r(r,"signInViaPopup",e,s).executeNotNull()}class _r extends Tg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(qt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(qt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(qt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aw.get())};e()}}_r.currentPopupAction=null;/**
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
 */const cw="pendingRedirect",po=new Map;class uw extends Tg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=po.get(this.auth._key());if(!e){try{const r=await hw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}po.set(this.auth._key(),e)}return this.bypassAuthState||po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hw(t,e){const n=pw(e),r=dw(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function fw(t,e){po.set(t._key(),e)}function dw(t){return vn(t._redirectPersistence)}function pw(t){return fo(cw,t.config.apiKey,t.name)}async function gw(t,e,n=!1){if(Bt(t.app))return Promise.reject(Er(t));const r=ia(t),s=Eg(r,e),a=await new uw(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const mw=10*60*1e3;class _w{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!yw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Ig(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(qt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=mw&&this.cachedEventUids.clear(),this.cachedEventUids.has(nf(e))}saveEventToCache(e){this.cachedEventUids.add(nf(e)),this.lastProcessedEventTime=Date.now()}}function nf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ig({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function yw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ig(t);default:return!1}}/**
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
 */async function vw(t,e={}){return ms(t,"GET","/v1/projects",e)}/**
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
 */const Ew=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tw=/^https?/;async function Iw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await vw(t);for(const n of e)try{if(ww(n))return}catch{}an(t,"unauthorized-domain")}function ww(t){const e=Dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Tw.test(n))return!1;if(Ew.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const Aw=new Si(3e4,6e4);function rf(){const t=en().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function bw(t){return new Promise((e,n)=>{var r,s,i;function a(){rf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rf(),n(qt(t,"network-request-failed"))},timeout:Aw.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)a();else{const l=CI("iframefcb");return en()[l]=()=>{gapi.load?a():n(qt(t,"network-request-failed"))},SI(`${PI()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw go=null,e})}let go=null;function Rw(t){return go=go||bw(t),go}/**
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
 */const Sw=new Si(5e3,15e3),Pw="__/auth/iframe",Cw="emulator/auth/iframe",kw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dw(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rc(e,Cw):`https://${t.config.authDomain}/${Pw}`,r={apiKey:e.apiKey,appName:t.name,v:gs},s=Vw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ri(r).slice(1)}`}async function Ow(t){const e=await Rw(t),n=en().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:Dw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=qt(t,"network-request-failed"),l=en().setTimeout(()=>{i(a)},Sw.get());function c(){en().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const Nw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},xw=500,Mw=600,Lw="_blank",Fw="http://localhost";class sf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Uw(t,e,n,r=xw,s=Mw){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Nw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=gt().toLowerCase();n&&(l=tg(h)?Lw:n),Zp(h)&&(e=e||Fw,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,C])=>`${g}${_}=${C},`,"");if(vI(h)&&l!=="_self")return Bw(e||"",l),new sf(null);const p=window.open(e||"",l,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new sf(p)}function Bw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jw="__/auth/handler",$w="emulator/auth/handler",Hw=encodeURIComponent("fac");async function of(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:gs,eventId:s};if(e instanceof Vc){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",$E(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Pi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),h=c?`#${Hw}=${encodeURIComponent(c)}`:"";return`${qw(t)}?${Ri(l).slice(1)}${h}`}function qw({config:t}){return t.emulator?Rc(t,$w):`https://${t.authDomain}/${jw}`}/**
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
 */const rl="webStorageSupport";class zw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gg,this._completeRedirectFn=gw,this._overrideRedirectResult=fw}async _openPopup(e,n,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await of(e,n,r,Dl(),s);return Uw(e,a,Dc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await of(e,n,r,Dl(),s);return GI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ow(e),r=new _w(e);return n.register("authEvent",s=>(le(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rl,{type:rl},s=>{var i;const a=(i=s?.[0])===null||i===void 0?void 0:i[rl];a!==void 0&&n(!!a),an(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Iw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return og()||eg()||Cc()}}const Ww=zw;var af="@firebase/auth",lf="1.10.8";/**
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
 */class Kw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Gw(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Qw(t){is(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ag(t)},h=new bI(r,s,i,c);return VI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),is(new wr("auth-internal",e=>{const n=ia(e.getProvider("auth").getImmediate());return(r=>new Kw(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(af,lf,Gw(t)),Jn(af,lf,"esm2017")}/**
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
 */const Jw=5*60,Xw=Lp("authIdTokenMaxAge")||Jw;let cf=null;const Yw=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Xw)return;const s=n?.token;cf!==s&&(cf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Zw(t=Hp()){const e=Ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kI(t,{popupRedirectResolver:Ww,persistence:[rw,dg,gg]}),r=Lp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=Yw(i.toString());jI(n,a,()=>a(n.currentUser)),BI(n,l=>a(l))}}const s=xp("auth");return s&&DI(n,`http://${s}`),n}function eA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=qt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",eA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Qw("Browser");var uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Xn,wg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function E(){}E.prototype=y.prototype,A.D=y.prototype,A.prototype=new E,A.prototype.constructor=A,A.C=function(w,b,R){for(var T=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)T[Ue-2]=arguments[Ue];return y.prototype[b].apply(w,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,E){E||(E=0);var w=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)w[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)w[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=A.g[0],E=A.g[1],b=A.g[2];var R=A.g[3],T=y+(R^E&(b^R))+w[0]+3614090360&4294967295;y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[1]+3905402710&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[2]+606105819&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[4]+4118548399&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[5]+1200080426&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[6]+2821735955&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[8]+1770035416&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[9]+2336552879&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[10]+4294925233&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(R^E&(b^R))+w[12]+1804603682&4294967295,y=E+(T<<7&4294967295|T>>>25),T=R+(b^y&(E^b))+w[13]+4254626195&4294967295,R=y+(T<<12&4294967295|T>>>20),T=b+(E^R&(y^E))+w[14]+2792965006&4294967295,b=R+(T<<17&4294967295|T>>>15),T=E+(y^b&(R^y))+w[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=y+(b^R&(E^b))+w[1]+4129170786&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[6]+3225465664&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[11]+643717713&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[5]+3593408605&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[10]+38016083&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[15]+3634488961&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[9]+568446438&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[14]+3275163606&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[3]+4107603335&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(b^R&(E^b))+w[13]+2850285829&4294967295,y=E+(T<<5&4294967295|T>>>27),T=R+(E^b&(y^E))+w[2]+4243563512&4294967295,R=y+(T<<9&4294967295|T>>>23),T=b+(y^E&(R^y))+w[7]+1735328473&4294967295,b=R+(T<<14&4294967295|T>>>18),T=E+(R^y&(b^R))+w[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=y+(E^b^R)+w[5]+4294588738&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[8]+2272392833&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[11]+1839030562&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[1]+2763975236&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[4]+1272893353&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[7]+4139469664&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[13]+681279174&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[0]+3936430074&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[3]+3572445317&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(E^b^R)+w[9]+3654602809&4294967295,y=E+(T<<4&4294967295|T>>>28),T=R+(y^E^b)+w[12]+3873151461&4294967295,R=y+(T<<11&4294967295|T>>>21),T=b+(R^y^E)+w[15]+530742520&4294967295,b=R+(T<<16&4294967295|T>>>16),T=E+(b^R^y)+w[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=y+(b^(E|~R))+w[0]+4096336452&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[7]+1126891415&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[14]+2878612391&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[12]+1700485571&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[3]+2399980690&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[10]+4293915773&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[8]+1873313359&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[15]+4264355552&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[6]+2734768916&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=y+(b^(E|~R))+w[4]+4149444226&4294967295,y=E+(T<<6&4294967295|T>>>26),T=R+(E^(y|~b))+w[11]+3174756917&4294967295,R=y+(T<<10&4294967295|T>>>22),T=b+(y^(R|~E))+w[2]+718787259&4294967295,b=R+(T<<15&4294967295|T>>>17),T=E+(R^(b|~y))+w[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,A.g[2]=A.g[2]+b&4294967295,A.g[3]=A.g[3]+R&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var E=y-this.blockSize,w=this.B,b=this.h,R=0;R<y;){if(b==0)for(;R<=E;)s(this,A,R),R+=this.blockSize;if(typeof A=="string"){for(;R<y;)if(w[b++]=A.charCodeAt(R++),b==this.blockSize){s(this,w),b=0;break}}else for(;R<y;)if(w[b++]=A[R++],b==this.blockSize){s(this,w),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var E=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.u(A),A=Array(16),y=E=0;4>y;++y)for(var w=0;32>w;w+=8)A[E++]=this.g[y]>>>w&255;return A};function i(A,y){var E=l;return Object.prototype.hasOwnProperty.call(E,A)?E[A]:E[A]=y(A)}function a(A,y){this.h=y;for(var E=[],w=!0,b=A.length-1;0<=b;b--){var R=A[b]|0;w&&R==y||(E[b]=R,w=!1)}this.g=E}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return D(h(-A));for(var y=[],E=1,w=0;A>=E;w++)y[w]=A/E|0,E*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return D(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),w=p,b=0;b<A.length;b+=8){var R=Math.min(8,A.length-b),T=parseInt(A.substring(b,b+R),y);8>R?(R=h(Math.pow(y,R)),w=w.j(R).add(h(T))):(w=w.j(E),w=w.add(h(T)))}return w}var p=c(0),g=c(1),_=c(16777216);t=a.prototype,t.m=function(){if(V(this))return-D(this).m();for(var A=0,y=1,E=0;E<this.g.length;E++){var w=this.i(E);A+=(0<=w?w:4294967296+w)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(C(this))return"0";if(V(this))return"-"+D(this).toString(A);for(var y=h(Math.pow(A,6)),E=this,w="";;){var b=q(E,y).g;E=$(E,b.j(y));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(A);if(E=b,C(E))return R+w;for(;6>R.length;)R="0"+R;w=R+w}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function C(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function V(A){return A.h==-1}t.l=function(A){return A=$(this,A),V(A)?-1:C(A)?0:1};function D(A){for(var y=A.g.length,E=[],w=0;w<y;w++)E[w]=~A.g[w];return new a(E,~A.h).add(g)}t.abs=function(){return V(this)?D(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0,b=0;b<=y;b++){var R=w+(this.i(b)&65535)+(A.i(b)&65535),T=(R>>>16)+(this.i(b)>>>16)+(A.i(b)>>>16);w=T>>>16,R&=65535,T&=65535,E[b]=T<<16|R}return new a(E,E[E.length-1]&-2147483648?-1:0)};function $(A,y){return A.add(D(y))}t.j=function(A){if(C(this)||C(A))return p;if(V(this))return V(A)?D(this).j(D(A)):D(D(this).j(A));if(V(A))return D(this.j(D(A)));if(0>this.l(_)&&0>A.l(_))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,E=[],w=0;w<2*y;w++)E[w]=0;for(w=0;w<this.g.length;w++)for(var b=0;b<A.g.length;b++){var R=this.i(w)>>>16,T=this.i(w)&65535,Ue=A.i(b)>>>16,Qe=A.i(b)&65535;E[2*w+2*b]+=T*Qe,U(E,2*w+2*b),E[2*w+2*b+1]+=R*Qe,U(E,2*w+2*b+1),E[2*w+2*b+1]+=T*Ue,U(E,2*w+2*b+1),E[2*w+2*b+2]+=R*Ue,U(E,2*w+2*b+2)}for(w=0;w<y;w++)E[w]=E[2*w+1]<<16|E[2*w];for(w=y;w<2*y;w++)E[w]=0;return new a(E,0)};function U(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function j(A,y){this.g=A,this.h=y}function q(A,y){if(C(y))throw Error("division by zero");if(C(A))return new j(p,p);if(V(A))return y=q(D(A),y),new j(D(y.g),D(y.h));if(V(y))return y=q(A,D(y)),new j(D(y.g),y.h);if(30<A.g.length){if(V(A)||V(y))throw Error("slowDivide_ only works with positive integers.");for(var E=g,w=y;0>=w.l(A);)E=Q(E),w=Q(w);var b=Z(E,1),R=Z(w,1);for(w=Z(w,2),E=Z(E,2);!C(w);){var T=R.add(w);0>=T.l(A)&&(b=b.add(E),R=T),w=Z(w,1),E=Z(E,1)}return y=$(A,b.j(y)),new j(b,y)}for(b=p;0<=A.l(y);){for(E=Math.max(1,Math.floor(A.m()/y.m())),w=Math.ceil(Math.log(E)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),R=h(E),T=R.j(y);V(T)||0<T.l(A);)E-=w,R=h(E),T=R.j(y);C(R)&&(R=g),b=b.add(R),A=$(A,T)}return new j(b,A)}t.A=function(A){return q(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)&A.i(w);return new a(E,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)|A.i(w);return new a(E,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),E=[],w=0;w<y;w++)E[w]=this.i(w)^A.i(w);return new a(E,this.h^A.h)};function Q(A){for(var y=A.g.length+1,E=[],w=0;w<y;w++)E[w]=A.i(w)<<1|A.i(w-1)>>>31;return new a(E,A.h)}function Z(A,y){var E=y>>5;y%=32;for(var w=A.g.length-E,b=[],R=0;R<w;R++)b[R]=0<y?A.i(R+E)>>>y|A.i(R+E+1)<<32-y:A.i(R+E);return new a(b,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,wg=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,Xn=a}).apply(typeof uf<"u"?uf:typeof self<"u"?self:typeof window<"u"?window:{});var to=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ag,Us,bg,mo,xl,Rg,Sg,Pg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof to=="object"&&to];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var P=o[m];if(!(P in d))break e;d=d[P]}o=o[o.length-1],m=d[o],u=u(m),u!=m&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var d=0,m=!1,P={next:function(){if(!m&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function p(o,u,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function g(o,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function C(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,P,k){for(var W=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)W[Pe-2]=arguments[Pe];return u.prototype[P].apply(m,W)}}function V(o){const u=o.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=o[m];return d}return[]}function D(o,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const P=o.length||0,k=m.length||0;o.length=P+k;for(let W=0;W<k;W++)o[P+W]=m[W]}else o.push(m)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function q(o){return q[" "](o),o}q[" "]=function(){};var Q=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function Z(o,u,d){for(const m in o)u.call(d,o[m],m,o)}function A(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)o[d]=m[d];for(let k=0;k<E.length;k++)d=E[k],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function b(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function R(o){l.setTimeout(()=>{throw o},0)}function T(){var o=At;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ue{constructor(){this.h=this.g=null}add(u,d){const m=Qe.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Qe=new $(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ge,me=!1,At=new Ue,Mt=()=>{const o=l.Promise.resolve(void 0);ge=()=>{o.then(Pt)}};var Pt=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){R(d)}var u=Qe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function Wt(o,u){if(Le.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(Q){e:{try{q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:vt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Wt.aa.h.call(this)}}C(Wt,Le);var vt={2:"touch",3:"pen",4:"mouse"};Wt.prototype.h=function(){Wt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),Y=0;function J(o,u,d,m,P){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++Y,this.da=this.fa=!1}function ee(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Te(o){this.src=o,this.g={},this.h=0}Te.prototype.add=function(o,u,d,m,P){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var W=I(o,u,m,P);return-1<W?(u=o[W],d||(u.fa=!1)):(u=new J(u,this.src,k,!!m,P),u.fa=d,o.push(u)),u};function v(o,u){var d=u.type;if(d in o.g){var m=o.g[d],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(ee(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function I(o,u,d,m){for(var P=0;P<o.length;++P){var k=o[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return P}return-1}var S="closure_lm_"+(1e6*Math.random()|0),N={};function L(o,u,d,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(o,u[k],d,m,P);return null}return d=ae(d),o&&o[O]?o.K(u,d,h(m)?!!m.capture:!1,P):x(o,u,d,!1,m,P)}function x(o,u,d,m,P,k){if(!u)throw Error("Invalid event type");var W=h(P)?!!P.capture:!!P,Pe=K(o);if(Pe||(o[S]=Pe=new Te(o)),d=Pe.add(u,d,m,W,k),d.proxy)return d;if(m=G(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)kn||(P=W),P===void 0&&(P=!1),o.addEventListener(u.toString(),m,P);else if(o.attachEvent)o.attachEvent(B(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function G(){function o(d){return u.call(o.src,o.listener,d)}const u=re;return o}function z(o,u,d,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(o,u[k],d,m,P);else m=h(m)?!!m.capture:!!m,d=ae(d),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=I(k,d,m,P),-1<d&&(ee(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=K(o))&&(u=o.g[u.toString()],o=-1,u&&(o=I(u,d,m,P)),(d=-1<o?u[o]:null)&&H(d))}function H(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])v(u.i,o);else{var d=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(d,m,o.capture):u.detachEvent?u.detachEvent(B(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=K(u))?(v(d,o),d.h==0&&(d.src=null,u[S]=null)):ee(o)}}}function B(o){return o in N?N[o]:N[o]="on"+o}function re(o,u){if(o.da)o=!0;else{u=new Wt(u,this);var d=o.listener,m=o.ha||o.src;o.fa&&H(o),o=d.call(m,u)}return o}function K(o){return o=o[S],o instanceof Te?o:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[ne]||(o[ne]=function(u){return o.handleEvent(u)}),o[ne])}function ie(){Me.call(this),this.i=new Te(this),this.M=this,this.F=null}C(ie,Me),ie.prototype[O]=!0,ie.prototype.removeEventListener=function(o,u,d,m){z(this,o,u,d,m)};function de(o,u){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new Le(u,o);else if(u instanceof Le)u.target=u.target||o;else{var P=u;u=new Le(m,o),w(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var W=u.g=d[k];P=ve(W,m,!0,u)&&P}if(W=u.g=o,P=ve(W,m,!0,u)&&P,P=ve(W,m,!1,u)&&P,d)for(k=0;k<d.length;k++)W=u.g=d[k],P=ve(W,m,!1,u)&&P}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],m=0;m<d.length;m++)ee(d[m]);delete o.g[u],o.h--}}this.F=null},ie.prototype.K=function(o,u,d,m){return this.i.add(String(o),u,!1,d,m)},ie.prototype.L=function(o,u,d,m){return this.i.add(String(o),u,!0,d,m)};function ve(o,u,d,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var W=u[k];if(W&&!W.da&&W.capture==d){var Pe=W.listener,Ze=W.ha||W.src;W.fa&&v(o.i,W),P=Pe.call(Ze,m)!==!1&&P}}return P&&!m.defaultPrevented}function Je(o,u,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Xe(o){o.g=Je(()=>{o.g=null,o.i&&(o.i=!1,Xe(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Ct extends Me{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(o){Me.call(this),this.h=o,this.g={}}C(st,Me);var Vn=[];function Ts(o){Z(o.g,function(u,d){this.g.hasOwnProperty(d)&&H(u)},o),o.g={}}st.prototype.N=function(){st.aa.N.call(this),Ts(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ye=l.JSON.stringify,kt=l.JSON.parse,xi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ba(){}ba.prototype.h=null;function pu(o){return o.h||(o.h=o.i())}function gu(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ra(){Le.call(this,"d")}C(Ra,Le);function Sa(){Le.call(this,"c")}C(Sa,Le);var cr={},mu=null;function Mi(){return mu=mu||new ie}cr.La="serverreachability";function _u(o){Le.call(this,cr.La,o)}C(_u,Le);function ws(o){const u=Mi();de(u,new _u(u))}cr.STAT_EVENT="statevent";function yu(o,u){Le.call(this,cr.STAT_EVENT,o),this.stat=u}C(yu,Le);function mt(o){const u=Mi();de(u,new yu(u,o))}cr.Ma="timingevent";function vu(o,u){Le.call(this,cr.Ma,o),this.size=u}C(vu,Le);function As(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function bs(){this.g=!0}bs.prototype.xa=function(){this.g=!1};function T_(o,u,d,m,P,k){o.info(function(){if(o.g)if(k)for(var W="",Pe=k.split("&"),Ze=0;Ze<Pe.length;Ze++){var Ie=Pe[Ze].split("=");if(1<Ie.length){var it=Ie[0];Ie=Ie[1];var ot=it.split("_");W=2<=ot.length&&ot[1]=="type"?W+(it+"="+Ie+"&"):W+(it+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+W})}function I_(o,u,d,m,P,k,W){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+W})}function Or(o,u,d,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+A_(o,d)+(m?" "+m:"")})}function w_(o,u){o.info(function(){return"TIMEOUT: "+u})}bs.prototype.info=function(){};function A_(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return Ye(d)}catch{return u}}var Li={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pa;function Fi(){}C(Fi,ba),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},Pa=new Fi;function Dn(o,u,d,m){this.j=o,this.i=u,this.l=d,this.R=m||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tu}function Tu(){this.i=null,this.g="",this.h=!1}var Iu={},Ca={};function ka(o,u,d){o.L=1,o.v=$i(un(u)),o.m=d,o.P=!0,wu(o,null)}function wu(o,u){o.F=Date.now(),Ui(o),o.A=un(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Lu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Tu,o.g=th(o.j,d?u:null,!o.m),0<o.O&&(o.M=new Ct(g(o.Y,o,o.g),o.O)),u=o.U,d=o.g,m=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Vn[0]=P.toString()),P=Vn);for(var k=0;k<P.length;k++){var W=L(d,P[k],m||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ws(),T_(o.i,o.u,o.A,o.l,o.R,o.m)}Dn.prototype.ca=function(o){o=o.target;const u=this.M;u&&hn(o)==3?u.j():this.Y(o)},Dn.prototype.Y=function(o){try{if(o==this.g)e:{const ot=hn(this.g);var u=this.g.Ba();const Mr=this.g.Z();if(!(3>ot)&&(ot!=3||this.g&&(this.h.h||this.g.oa()||qu(this.g)))){this.J||ot!=4||u==7||(u==8||0>=Mr?ws(3):ws(2)),Va(this);var d=this.g.Z();this.X=d;t:if(Au(this)){var m=qu(this.g);o="";var P=m.length,k=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Rs(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,I_(this.i,this.u,this.A,this.l,this.R,ot,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Ze=this.g;if((Pe=Ze.g?Ze.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Pe)){var Ie=Pe;break t}}Ie=null}if(d=Ie)Or(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Da(this,d);else{this.o=!1,this.s=3,mt(12),ur(this),Rs(this);break e}}if(this.P){d=!0;let Lt;for(;!this.J&&this.C<W.length;)if(Lt=b_(this,W),Lt==Ca){ot==4&&(this.s=4,mt(14),d=!1),Or(this.i,this.l,null,"[Incomplete Response]");break}else if(Lt==Iu){this.s=4,mt(15),Or(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Or(this.i,this.l,Lt,null),Da(this,Lt);if(Au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ot!=4||W.length!=0||this.h.h||(this.s=1,mt(16),d=!1),this.o=this.o&&d,!d)Or(this.i,this.l,W,"[Invalid Chunked Response]"),ur(this),Rs(this);else if(0<W.length&&!this.W){this.W=!0;var it=this.j;it.g==this&&it.ba&&!it.M&&(it.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Fa(it),it.M=!0,mt(11))}}else Or(this.i,this.l,W,null),Da(this,W);ot==4&&ur(this),this.o&&!this.J&&(ot==4?Xu(this.j,this):(this.o=!1,Ui(this)))}else $_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),ur(this),Rs(this)}}}catch{}finally{}};function Au(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function b_(o,u){var d=o.C,m=u.indexOf(`
`,d);return m==-1?Ca:(d=Number(u.substring(d,m)),isNaN(d)?Iu:(m+=1,m+d>u.length?Ca:(u=u.slice(m,m+d),o.C=m+d,u)))}Dn.prototype.cancel=function(){this.J=!0,ur(this)};function Ui(o){o.S=Date.now()+o.I,bu(o,o.I)}function bu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=As(g(o.ba,o),u)}function Va(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(w_(this.i,this.A),this.L!=2&&(ws(),mt(17)),ur(this),this.s=2,Rs(this)):bu(this,this.S-o)};function Rs(o){o.j.G==0||o.J||Xu(o.j,o)}function ur(o){Va(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ts(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Da(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Oa(d.h,o))){if(!o.K&&Oa(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Gi(d),Wi(d);else break e;La(d),mt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=As(g(d.Za,d),6e3));if(1>=Pu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fr(d,11)}else if((o.K||d.g==o)&&Gi(d),!U(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const it=Ie[3];it!=null&&(d.la=it,d.j.info("VER="+d.la));const ot=Ie[4];ot!=null&&(d.Aa=ot,d.j.info("SVER="+d.Aa));const Mr=Ie[5];Mr!=null&&typeof Mr=="number"&&0<Mr&&(m=1.5*Mr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Lt=o.g;if(Lt){const Ji=Lt.g?Lt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ji){var k=m.h;k.g||Ji.indexOf("spdy")==-1&&Ji.indexOf("quic")==-1&&Ji.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Na(k,k.h),k.h=null))}if(m.D){const Ua=Lt.g?Lt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ua&&(m.ya=Ua,De(m.I,m.D,Ua))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=o;if(m.qa=eh(m,m.J?m.ia:null,m.W),W.K){Cu(m.h,W);var Pe=W,Ze=m.L;Ze&&(Pe.I=Ze),Pe.B&&(Va(Pe),Ui(Pe)),m.g=W}else Qu(m);0<d.i.length&&Ki(d)}else Ie[0]!="stop"&&Ie[0]!="close"||fr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?fr(d,7):Ma(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}ws(4)}catch{}}var R_=class{constructor(o,u){this.g=o,this.map=u}};function Ru(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Su(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pu(o){return o.h?1:o.g?o.g.size:0}function Oa(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Na(o,u){o.g?o.g.add(u):o.h=u}function Cu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Ru.prototype.cancel=function(){if(this.i=ku(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ku(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return V(o.i)}function S_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,m=0;m<d;m++)u.push(o[m]);return u}u=[],d=0;for(m in o)u[d++]=o[m];return u}function P_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const m in o)u[d++]=m;return u}}}function Vu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=P_(o),m=S_(o),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],d&&d[k],o)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),P=null;if(0<=m){var k=o[d].substring(0,m);P=o[d].substring(m+1)}else k=o[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hr){this.h=o.h,Bi(this,o.j),this.o=o.o,this.g=o.g,ji(this,o.s),this.l=o.l;var u=o.i,d=new Cs;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Ou(this,d),this.m=o.m}else o&&(u=String(o).match(Du))?(this.h=!1,Bi(this,u[1]||"",!0),this.o=Ss(u[2]||""),this.g=Ss(u[3]||"",!0),ji(this,u[4]),this.l=Ss(u[5]||"",!0),Ou(this,u[6]||"",!0),this.m=Ss(u[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}hr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Ps(u,Nu,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Ps(u,Nu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ps(d,d.charAt(0)=="/"?D_:V_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ps(d,N_)),o.join("")};function un(o){return new hr(o)}function Bi(o,u,d){o.j=d?Ss(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function ji(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ou(o,u,d){u instanceof Cs?(o.i=u,x_(o.i,o.h)):(d||(u=Ps(u,O_)),o.i=new Cs(u,o.h))}function De(o,u,d){o.i.set(u,d)}function $i(o){return De(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ss(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ps(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,k_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function k_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Nu=/[#\/\?@]/g,V_=/[#\?:]/g,D_=/[#\?]/g,O_=/[#\?@]/g,N_=/#/g;function Cs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function On(o){o.g||(o.g=new Map,o.h=0,o.i&&C_(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Cs.prototype,t.add=function(o,u){On(this),this.i=null,o=Nr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function xu(o,u){On(o),u=Nr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Mu(o,u){return On(o),u=Nr(o,u),o.g.has(u)}t.forEach=function(o,u){On(this),this.g.forEach(function(d,m){d.forEach(function(P){o.call(u,P,m,this)},this)},this)},t.na=function(){On(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=o[m];for(let k=0;k<P.length;k++)d.push(u[m])}return d},t.V=function(o){On(this);let u=[];if(typeof o=="string")Mu(this,o)&&(u=u.concat(this.g.get(Nr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},t.set=function(o,u){return On(this),this.i=null,o=Nr(this,o),Mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Lu(o,u,d){xu(o,u),0<d.length&&(o.i=null,o.g.set(Nr(o,u),V(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var P=k;W[m]!==""&&(P+="="+encodeURIComponent(String(W[m]))),o.push(P)}}return this.i=o.join("&")};function Nr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function x_(o,u){u&&!o.j&&(On(o),o.i=null,o.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(xu(this,m),Lu(this,P,d))},o)),o.j=u}function M_(o,u){const d=new bs;if(l.Image){const m=new Image;m.onload=_(Nn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=_(Nn,d,"TestLoadImage: error",!1,u,m),m.onabort=_(Nn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=_(Nn,d,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function L_(o,u){const d=new bs,m=new AbortController,P=setTimeout(()=>{m.abort(),Nn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?Nn(d,"TestPingServer: ok",!0,u):Nn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Nn(d,"TestPingServer: error",!1,u)})}function Nn(o,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function F_(){this.g=new xi}function U_(o,u,d){const m=d||"";try{Vu(o,function(P,k){let W=P;h(P)&&(W=Ye(P)),u.push(m+k+"="+encodeURIComponent(W))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Hi(o){this.l=o.Ub||null,this.j=o.eb||!1}C(Hi,ba),Hi.prototype.g=function(){return new qi(this.l,this.j)},Hi.prototype.i=function(o){return function(){return o}}({});function qi(o,u){ie.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(qi,ie),t=qi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Vs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ks(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Vs(this)),this.g&&(this.readyState=3,Vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ks(this):Vs(this),this.readyState==3&&Fu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ks(this))},t.Qa=function(o){this.g&&(this.response=o,ks(this))},t.ga=function(){this.g&&ks(this)};function ks(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Vs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function Vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Uu(o){let u="";return Z(o,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function xa(o,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Uu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):De(o,u,d))}function Be(o){ie.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Be,ie);var B_=/^https?$/i,j_=["POST","PUT"];t=Be.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pa.g(),this.v=this.o?pu(this.o):pu(Pa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){Bu(this,k);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(j_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of d)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hu(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){Bu(this,k)}};function Bu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,ju(o),zi(o)}function ju(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),zi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$u(this):this.bb())},t.bb=function(){$u(this)};function $u(o){if(o.h&&typeof a<"u"&&(!o.v[1]||hn(o)!=4||o.Z()!=2)){if(o.u&&hn(o)==4)Je(o.Ea,0,o);else if(de(o,"readystatechange"),hn(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=W===0){var P=String(o.D).match(Du)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!B_.test(P?P.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var k=2<hn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",ju(o)}}finally{zi(o)}}}}function zi(o,u){if(o.g){Hu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function Hu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function hn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),kt(u)}};function qu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(o){const u={};o=(o.g&&2<=hn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=b(o[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}A(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function zu(o){this.Aa=0,this.i=[],this.j=new bs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,o),this.cb=Ds("retryDelaySeedMs",1e4,o),this.Wa=Ds("forwardChannelMaxRetries",2,o),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ru(o&&o.concurrentRequestLimit),this.Da=new F_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zu.prototype,t.la=8,t.G=1,t.connect=function(o,u,d,m){mt(0),this.W=o,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=eh(this,null,this.W),Ki(this)};function Ma(o){if(Wu(o),o.G==3){var u=o.U++,d=un(o.I);if(De(d,"SID",o.K),De(d,"RID",u),De(d,"TYPE","terminate"),Os(o,d),u=new Dn(o,o.j,u),u.L=2,u.v=$i(un(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=th(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ui(u)}Zu(o)}function Wi(o){o.g&&(Fa(o),o.g.cancel(),o.g=null)}function Wu(o){Wi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Gi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ki(o){if(!Su(o.h)&&!o.s){o.s=!0;var u=o.Ga;ge||Mt(),me||(ge(),me=!0),At.add(u,o),o.B=0}}function H_(o,u){return Pu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=As(g(o.Ga,o,u),Yu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new Dn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Gu(this,P,u),d=un(this.I),De(d,"RID",o),De(d,"CVER",22),this.D&&De(d,"X-HTTP-Session-Id",this.D),Os(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(Uu(k)))+"&"+u:this.m&&xa(d,this.m,k)),Na(this.h,P),this.Ua&&De(d,"TYPE","init"),this.P?(De(d,"$req",u),De(d,"SID","null"),P.T=!0,ka(P,d,null)):ka(P,d,u),this.G=2}}else this.G==3&&(o?Ku(this,o):this.i.length==0||Su(this.h)||Ku(this))};function Ku(o,u){var d;u?d=u.l:d=o.U++;const m=un(o.I);De(m,"SID",o.K),De(m,"RID",d),De(m,"AID",o.T),Os(o,m),o.m&&o.o&&xa(m,o.m,o.o),d=new Dn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Gu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Na(o.h,d),ka(d,m,u)}function Os(o,u){o.H&&Z(o.H,function(d,m){De(u,m,d)}),o.l&&Vu({},function(d,m){De(u,m,d)})}function Gu(o,u,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var P=o.i;let k=-1;for(;;){const W=["count="+d];k==-1?0<d?(k=P[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let Pe=!0;for(let Ze=0;Ze<d;Ze++){let Ie=P[Ze].g;const it=P[Ze].map;if(Ie-=k,0>Ie)k=Math.max(0,P[Ze].g-100),Pe=!1;else try{U_(it,W,"req"+Ie+"_")}catch{m&&m(it)}}if(Pe){m=W.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,m}function Qu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ge||Mt(),me||(ge(),me=!0),At.add(u,o),o.v=0}}function La(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=As(g(o.Fa,o),Yu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=As(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,mt(10),Wi(this),Ju(this))};function Fa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ju(o){o.g=new Dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=un(o.qa);De(u,"RID","rpc"),De(u,"SID",o.K),De(u,"AID",o.T),De(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&De(u,"TO",o.ja),De(u,"TYPE","xmlhttp"),Os(o,u),o.m&&o.o&&xa(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=$i(un(u)),d.m=null,d.P=!0,wu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Wi(this),La(this),mt(19))};function Gi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xu(o,u){var d=null;if(o.g==u){Gi(o),Fa(o),o.g=null;var m=2}else if(Oa(o.h,u))d=u.D,Cu(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;m=Mi(),de(m,new vu(m,d)),Ki(o)}else Qu(o);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&H_(o,u)||m==2&&La(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),P){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function Yu(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function fr(o,u){if(o.j.info("Error code "+u),u==2){var d=g(o.fb,o),m=o.Xa;const P=!m;m=new hr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Bi(m,"https"),$i(m),P?M_(m.toString(),d):L_(m.toString(),d)}else mt(2);o.G=0,o.l&&o.l.sa(u),Zu(o),Wu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),mt(2)):(this.j.info("Failed to ping google.com"),mt(1))};function Zu(o){if(o.G=0,o.ka=[],o.l){const u=ku(o.h);(u.length!=0||o.i.length!=0)&&(D(o.ka,u),D(o.ka,o.i),o.h.i.length=0,V(o.i),o.i.length=0),o.l.ra()}}function eh(o,u,d){var m=d instanceof hr?un(d):new hr(d);if(m.g!="")u&&(m.g=u+"."+m.g),ji(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new hr(null);m&&Bi(k,m),u&&(k.g=u),P&&ji(k,P),d&&(k.l=d),m=k}return d=o.D,u=o.ya,d&&u&&De(m,d,u),De(m,"VER",o.la),Os(o,m),m}function th(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Be(new Hi({eb:d})):new Be(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function nh(){}t=nh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Qi(){}Qi.prototype.g=function(o,u){return new bt(o,u)};function bt(o,u){ie.call(this),this.g=new zu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!U(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new xr(this)}C(bt,ie),bt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},bt.prototype.close=function(){Ma(this.g)},bt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=Ye(o),o=d);u.i.push(new R_(u.Ya++,o)),u.G==3&&Ki(u)},bt.prototype.N=function(){this.g.l=null,delete this.j,Ma(this.g),delete this.g,bt.aa.N.call(this)};function rh(o){Ra.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}C(rh,Ra);function sh(){Sa.call(this),this.status=1}C(sh,Sa);function xr(o){this.g=o}C(xr,nh),xr.prototype.ua=function(){de(this.g,"a")},xr.prototype.ta=function(o){de(this.g,new rh(o))},xr.prototype.sa=function(o){de(this.g,new sh)},xr.prototype.ra=function(){de(this.g,"b")},Qi.prototype.createWebChannel=Qi.prototype.g,bt.prototype.send=bt.prototype.o,bt.prototype.open=bt.prototype.m,bt.prototype.close=bt.prototype.close,Pg=function(){return new Qi},Sg=function(){return Mi()},Rg=cr,xl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Li.NO_ERROR=0,Li.TIMEOUT=8,Li.HTTP_ERROR=6,mo=Li,Eu.COMPLETE="complete",bg=Eu,gu.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Us=gu,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,Ag=Be}).apply(typeof to<"u"?to:typeof self<"u"?self:typeof window<"u"?window:{});const hf="@firebase/firestore",ff="4.8.0";/**
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
 */class lt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}lt.UNAUTHENTICATED=new lt(null),lt.GOOGLE_CREDENTIALS=new lt("google-credentials-uid"),lt.FIRST_PARTY=new lt("first-party-uid"),lt.MOCK_USER=new lt("mock-user");/**
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
 */let _s="11.10.0";/**
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
 */const br=new Ec("@firebase/firestore");function Br(){return br.logLevel}function X(t,...e){if(br.logLevel<=_e.DEBUG){const n=e.map(Nc);br.debug(`Firestore (${_s}): ${t}`,...n)}}function Rn(t,...e){if(br.logLevel<=_e.ERROR){const n=e.map(Nc);br.error(`Firestore (${_s}): ${t}`,...n)}}function tr(t,...e){if(br.logLevel<=_e.WARN){const n=e.map(Nc);br.warn(`Firestore (${_s}): ${t}`,...n)}}function Nc(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Cg(t,r,n)}function Cg(t,e,n){let r=`FIRESTORE (${_s}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Rn(r),new Error(r)}function Re(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Cg(e,s,r)}function fe(t,e){return t}/**
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
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class te extends Cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class En{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class kg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(lt.UNAUTHENTICATED))}shutdown(){}}class nA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class rA{constructor(e){this.t=e,this.currentUser=lt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Re(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new En;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new En,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new En)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new kg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new lt(e)}}class sA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=lt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class iA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new sA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(lt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class df{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Re(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new df(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new df(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function aA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function Vg(){return new TextEncoder}/**
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
 */class xc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=aA(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function pe(t,e){return t<e?-1:t>e?1:0}function Ml(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return pe(r,s);{const i=Vg(),a=lA(i.encode(pf(t,n)),i.encode(pf(e,n)));return a!==0?a:pe(r,s)}}n+=r>65535?2:1}return pe(t.length,e.length)}function pf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function lA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return pe(t[n],e[n]);return pe(t.length,e.length)}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const gf="__name__";class Qt{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Qt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return pe(e.length,n.length)}static compareSegments(e,n){const r=Qt.isNumericId(e),s=Qt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Qt.extractNumericId(e).compare(Qt.extractNumericId(n)):Ml(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Xn.fromString(e.substring(4,e.length-2))}}class Oe extends Qt{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new te(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const cA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends Qt{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return cA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gf}static keyField(){return new nt([gf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new te(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new te(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new te(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new te(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
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
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Oe.fromString(e))}static fromName(e){return new se(Oe.fromString(e).popFirst(5))}static empty(){return new se(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Oe(e.slice()))}}/**
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
 */function Dg(t,e,n){if(!n)throw new te(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uA(t,e,n,r){if(e===!0&&r===!0)throw new te(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function mf(t){if(!se.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _f(t){if(se.isDocumentKey(t))throw new te(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Og(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Mc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function Rr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new te(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mc(t);throw new te(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function qe(t,e){const n={typeString:t};return e&&(n.value=e),n}function ki(t,e){if(!Og(t))throw new te(F.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const a=t[r];if(s&&typeof a!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new te(F.INVALID_ARGUMENT,n);return!0}/**
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
 */const yf=-62135596800,vf=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vf);return new Ne(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new te(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yf)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new te(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vf}_compareTo(e){return this.seconds===e.seconds?pe(this.nanoseconds,e.nanoseconds):pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ki(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-yf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:qe("string",Ne._jsonSchemaVersion),seconds:qe("number"),nanoseconds:qe("number")};/**
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
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Ne(0,0))}static max(){return new ue(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const fi=-1;function hA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Ne(n+1,0):new Ne(n,r));return new nr(s,se.empty(),e)}function fA(t){return new nr(t.readTime,t.key,fi)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(ue.min(),se.empty(),fi)}static max(){return new nr(ue.max(),se.empty(),fi)}}function dA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:pe(t.largestBatchId,e.largestBatchId))}/**
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
 */const pA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ys(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==pA)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(f=>{a[h]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function mA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function vs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class la{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}la.ue=-1;/**
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
 */const Lc=-1;function ca(t){return t==null}function Mo(t){return t===0&&1/t==-1/0}function _A(t){return typeof t=="number"&&Number.isInteger(t)&&!Mo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Ng="";function yA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ef(e)),e=vA(t.get(n),e);return Ef(e)}function vA(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ng:n+="";break;default:n+=i}}return n}function Ef(t){return t+Ng+""}/**
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
 */function Tf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Cr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function xg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||et.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,et.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,et.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new no(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new no(this.root,e,this.comparator,!1)}getReverseIterator(){return new no(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new no(this.root,e,this.comparator,!0)}}class no{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class et{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??et.RED,this.left=s??et.EMPTY,this.right=i??et.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new et(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return et.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return et.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,et.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,et.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}et.EMPTY=null,et.RED=!0,et.BLACK=!1;et.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new et(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new If(this.data.getIterator())}getIteratorFrom(e){return new If(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class If{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Ke(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Mg("Invalid base64 string: "+i):i}}(e);return new rt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}rt.EMPTY_BYTE_STRING=new rt("");const EA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(Re(!!t,39018),typeof t=="string"){let e=0;const n=EA.exec(t);if(Re(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function sr(t){return typeof t=="string"?rt.fromBase64String(t):rt.fromUint8Array(t)}/**
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
 */const Lg="server_timestamp",Fg="__type__",Ug="__previous_value__",Bg="__local_write_time__";function Fc(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[Fg])===null||n===void 0?void 0:n.stringValue)===Lg}function ua(t){const e=t.mapValue.fields[Ug];return Fc(e)?ua(e):e}function di(t){const e=rr(t.mapValue.fields[Bg].timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class TA{constructor(e,n,r,s,i,a,l,c,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=f}}const Lo="(default)";class pi{constructor(e,n){this.projectId=e,this.database=n||Lo}static empty(){return new pi("","")}get isDefaultDatabase(){return this.database===Lo}isEqual(e){return e instanceof pi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const jg="__type__",IA="__max__",ro={mapValue:{}},$g="__vector__",Fo="value";function ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fc(t)?4:AA(t)?9007199254740991:wA(t)?10:11:oe(28295,{value:t})}function ln(t,e){if(t===e)return!0;const n=ir(t);if(n!==ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return di(t).isEqual(di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=rr(s.timestampValue),l=rr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return sr(s.bytesValue).isEqual(sr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return je(s.geoPointValue.latitude)===je(i.geoPointValue.latitude)&&je(s.geoPointValue.longitude)===je(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return je(s.integerValue)===je(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=je(s.doubleValue),l=je(i.doubleValue);return a===l?Mo(a)===Mo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Tf(a)!==Tf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ln(a[c],l[c])))return!1;return!0}(t,e);default:return oe(52216,{left:t})}}function gi(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function ls(t,e){if(t===e)return 0;const n=ir(t),r=ir(e);if(n!==r)return pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return pe(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=je(i.integerValue||i.doubleValue),c=je(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return wf(t.timestampValue,e.timestampValue);case 4:return wf(di(t),di(e));case 5:return Ml(t.stringValue,e.stringValue);case 6:return function(i,a){const l=sr(i),c=sr(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=pe(l[h],c[h]);if(f!==0)return f}return pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=pe(je(i.latitude),je(a.latitude));return l!==0?l:pe(je(i.longitude),je(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Af(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,f;const p=i.fields||{},g=a.fields||{},_=(l=p[Fo])===null||l===void 0?void 0:l.arrayValue,C=(c=g[Fo])===null||c===void 0?void 0:c.arrayValue,V=pe(((h=_?.values)===null||h===void 0?void 0:h.length)||0,((f=C?.values)===null||f===void 0?void 0:f.length)||0);return V!==0?V:Af(_,C)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ro.mapValue&&a===ro.mapValue)return 0;if(i===ro.mapValue)return 1;if(a===ro.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Ml(c[p],f[p]);if(g!==0)return g;const _=ls(l[c[p]],h[f[p]]);if(_!==0)return _}return pe(c.length,f.length)}(t.mapValue,e.mapValue);default:throw oe(23264,{le:n})}}function wf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return pe(t,e);const n=rr(t),r=rr(e),s=pe(n.seconds,r.seconds);return s!==0?s:pe(n.nanos,r.nanos)}function Af(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ls(n[s],r[s]);if(i)return i}return pe(n.length,r.length)}function cs(t){return Ll(t)}function Ll(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return sr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return se.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ll(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ll(n.fields[a])}`;return s+"}"}(t.mapValue):oe(61005,{value:t})}function _o(t){switch(ir(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ua(t);return e?16+_o(e):16;case 5:return 2*t.stringValue.length;case 6:return sr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+_o(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Cr(r.fields,(i,a)=>{s+=i.length+_o(a)}),s}(t.mapValue);default:throw oe(13486,{value:t})}}function Fl(t){return!!t&&"integerValue"in t}function Uc(t){return!!t&&"arrayValue"in t}function bf(t){return!!t&&"nullValue"in t}function Rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function yo(t){return!!t&&"mapValue"in t}function wA(t){var e,n;return((n=(((e=t?.mapValue)===null||e===void 0?void 0:e.fields)||{})[jg])===null||n===void 0?void 0:n.stringValue)===$g}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Cr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===IA}/**
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
 */class Dt{constructor(e){this.value=e}static empty(){return new Dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!yo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ys(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());yo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];yo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Cr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Dt(Ys(this.value))}}function Hg(t){const e=[];return Cr(t.fields,(n,r)=>{const s=new nt([n]);if(yo(r)){const i=Hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new $t(e)}/**
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
 */class ut{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new ut(e,0,ue.min(),ue.min(),ue.min(),Dt.empty(),0)}static newFoundDocument(e,n,r,s){return new ut(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ut(e,2,n,ue.min(),ue.min(),Dt.empty(),0)}static newUnknownDocument(e,n){return new ut(e,3,n,ue.min(),ue.min(),Dt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Uo{constructor(e,n){this.position=e,this.inclusive=n}}function Sf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(a.referenceValue),n.key):r=ls(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Pf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function bA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class qg{}class ze extends qg{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new SA(e,n,r):n==="array-contains"?new kA(e,r):n==="in"?new VA(e,r):n==="not-in"?new DA(e,r):n==="array-contains-any"?new OA(e,r):new ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new PA(e,r):new CA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ls(n,this.value)):n!==null&&ir(this.value)===ir(n)&&this.matchesComparison(ls(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends qg{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new cn(e,n)}matches(e){return zg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function zg(t){return t.op==="and"}function Wg(t){return RA(t)&&zg(t)}function RA(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function Ul(t){if(t instanceof ze)return t.field.canonicalString()+t.op.toString()+cs(t.value);if(Wg(t))return t.filters.map(e=>Ul(e)).join(",");{const e=t.filters.map(n=>Ul(n)).join(",");return`${t.op}(${e})`}}function Kg(t,e){return t instanceof ze?function(r,s){return s instanceof ze&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Kg(a,s.filters[l]),!0):!1}(t,e):void oe(19439)}function Gg(t){return t instanceof ze?function(n){return`${n.field.canonicalString()} ${n.op} ${cs(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(Gg).join(" ,")+"}"}(t):"Filter"}class SA extends ze{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class PA extends ze{constructor(e,n){super(e,"in",n),this.keys=Qg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class CA extends ze{constructor(e,n){super(e,"not-in",n),this.keys=Qg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Qg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>se.fromName(r.referenceValue))}class kA extends ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Uc(n)&&gi(n.arrayValue,this.value)}}class VA extends ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class DA extends ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!gi(this.value.arrayValue,n)}}class OA extends ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Uc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}/**
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
 */class NA{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function Cf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new NA(t,e,n,r,s,i,a)}function Bc(t){const e=fe(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ul(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ca(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>cs(r)).join(",")),e.Pe=n}return e.Pe}function jc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Kg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Pf(t.startAt,e.startAt)&&Pf(t.endAt,e.endAt)}function Bl(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ha{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function xA(t,e,n,r,s,i,a,l){return new ha(t,e,n,r,s,i,a,l)}function $c(t){return new ha(t)}function kf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function MA(t){return t.collectionGroup!==null}function Zs(t){const e=fe(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ke(nt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Bo(i,r))}),n.has(nt.keyField().canonicalString())||e.Te.push(new Bo(nt.keyField(),r))}return e.Te}function tn(t){const e=fe(t);return e.Ie||(e.Ie=LA(e,Zs(t))),e.Ie}function LA(t,e){if(t.limitType==="F")return Cf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Bo(s.field,i)});const n=t.endAt?new Uo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Uo(t.startAt.position,t.startAt.inclusive):null;return Cf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function jl(t,e,n){return new ha(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function fa(t,e){return jc(tn(t),tn(e))&&t.limitType===e.limitType}function Jg(t){return`${Bc(tn(t))}|lt:${t.limitType}`}function jr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Gg(s)).join(", ")}]`),ca(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>cs(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function da(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=Sf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Zs(r),s)||r.endAt&&!function(a,l,c){const h=Sf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Zs(r),s))}(t,e)}function FA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Xg(t){return(e,n)=>{let r=!1;for(const s of Zs(t)){const i=UA(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function UA(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ls(c,h):oe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
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
 */class kr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Cr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return xg(this.inner)}size(){return this.innerSize}}/**
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
 */const BA=new Fe(se.comparator);function Sn(){return BA}const Yg=new Fe(se.comparator);function Bs(...t){let e=Yg;for(const n of t)e=e.insert(n.key,n);return e}function Zg(t){let e=Yg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return ei()}function em(){return ei()}function ei(){return new kr(t=>t.toString(),(t,e)=>t.isEqual(e))}const jA=new Fe(se.comparator),$A=new Ke(se.comparator);function ye(...t){let e=$A;for(const n of t)e=e.add(n);return e}const HA=new Ke(pe);function qA(){return HA}/**
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
 */function Hc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mo(e)?"-0":e}}function tm(t){return{integerValue:""+t}}function zA(t,e){return _A(e)?tm(e):Hc(t,e)}/**
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
 */class pa{constructor(){this._=void 0}}function WA(t,e,n){return t instanceof mi?function(s,i){const a={fields:{[Fg]:{stringValue:Lg},[Bg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Fc(i)&&(i=ua(i)),i&&(a.fields[Ug]=i),{mapValue:a}}(n,e):t instanceof _i?rm(t,e):t instanceof yi?sm(t,e):function(s,i){const a=nm(s,i),l=Vf(a)+Vf(s.Ee);return Fl(a)&&Fl(s.Ee)?tm(l):Hc(s.serializer,l)}(t,e)}function KA(t,e,n){return t instanceof _i?rm(t,e):t instanceof yi?sm(t,e):n}function nm(t,e){return t instanceof jo?function(r){return Fl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends pa{}class _i extends pa{constructor(e){super(),this.elements=e}}function rm(t,e){const n=im(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends pa{constructor(e){super(),this.elements=e}}function sm(t,e){let n=im(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class jo extends pa{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Vf(t){return je(t.integerValue||t.doubleValue)}function im(t){return Uc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class GA{constructor(e,n){this.field=e,this.transform=n}}function QA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?as(r.elements,s.elements,ln):r instanceof jo&&s instanceof jo?ln(r.Ee,s.Ee):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class JA{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ga{}function om(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new lm(t.key,Tn.none()):new Vi(t.key,t.data,Tn.none());{const n=t.data,r=Dt.empty();let s=new Ke(nt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Vr(t.key,r,new $t(s.toArray()),Tn.none())}}function XA(t,e,n){t instanceof Vi?function(s,i,a){const l=s.value.clone(),c=Of(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Vr?function(s,i,a){if(!vo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Of(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(am(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ti(t,e,n,r){return t instanceof Vi?function(i,a,l,c){if(!vo(i.precondition,a))return l;const h=i.value.clone(),f=Nf(i.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Vr?function(i,a,l,c){if(!vo(i.precondition,a))return l;const h=Nf(i.fieldTransforms,c,a),f=a.data;return f.setAll(am(i)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return vo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function YA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=nm(r.transform,s||null);i!=null&&(n===null&&(n=Dt.empty()),n.set(r.field,i))}return n||null}function Df(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,a)=>QA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Vi extends ga{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Vr extends ga{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function am(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Of(t,e,n){const r=new Map;Re(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,KA(a,l,n[s]))}return r}function Nf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,WA(i,a,e))}return r}class lm extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ZA extends ga{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class e0{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&XA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=em();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=om(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ye())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Df(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Df(n,r))}}class qc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Re(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=function(){return jA}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new qc(e,n,r,s)}}/**
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
 */class t0{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class n0{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var He,Ee;function r0(t){switch(t){case F.OK:return oe(64938);case F.CANCELLED:case F.UNKNOWN:case F.DEADLINE_EXCEEDED:case F.RESOURCE_EXHAUSTED:case F.INTERNAL:case F.UNAVAILABLE:case F.UNAUTHENTICATED:return!1;case F.INVALID_ARGUMENT:case F.NOT_FOUND:case F.ALREADY_EXISTS:case F.PERMISSION_DENIED:case F.FAILED_PRECONDITION:case F.ABORTED:case F.OUT_OF_RANGE:case F.UNIMPLEMENTED:case F.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function cm(t){if(t===void 0)return Rn("GRPC error has no .code"),F.UNKNOWN;switch(t){case He.OK:return F.OK;case He.CANCELLED:return F.CANCELLED;case He.UNKNOWN:return F.UNKNOWN;case He.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case He.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case He.INTERNAL:return F.INTERNAL;case He.UNAVAILABLE:return F.UNAVAILABLE;case He.UNAUTHENTICATED:return F.UNAUTHENTICATED;case He.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case He.NOT_FOUND:return F.NOT_FOUND;case He.ALREADY_EXISTS:return F.ALREADY_EXISTS;case He.PERMISSION_DENIED:return F.PERMISSION_DENIED;case He.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case He.ABORTED:return F.ABORTED;case He.OUT_OF_RANGE:return F.OUT_OF_RANGE;case He.UNIMPLEMENTED:return F.UNIMPLEMENTED;case He.DATA_LOSS:return F.DATA_LOSS;default:return oe(39323,{code:t})}}(Ee=He||(He={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const s0=new Xn([4294967295,4294967295],0);function xf(t){const e=Vg().encode(t),n=new wg;return n.update(e),new Uint8Array(n.digest())}function Mf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Xn([n,r],0),new Xn([s,i],0)]}class zc{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new js(`Invalid padding: ${n}`);if(r<0)throw new js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new js(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Xn.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Xn.fromNumber(r)));return s.compare(s0)===1&&(s=new Xn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=xf(e),[r,s]=Mf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new zc(i,s,n);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.fe===0)return;const n=xf(e),[r,s]=Mf(n);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class ma{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Di.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ma(ue.min(),s,new Fe(pe),Sn(),ye())}}class Di{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Di(r,n,ye(),ye(),ye())}}/**
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
 */class Eo{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class um{constructor(e,n){this.targetId=e,this.De=n}}class hm{constructor(e,n,r=rt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Lf{constructor(){this.ve=0,this.Ce=Ff(),this.Fe=rt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ye(),n=ye(),r=ye();return this.Ce.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}}),new Di(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Ff()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class i0{constructor(e){this.We=e,this.Ge=new Map,this.ze=Sn(),this.je=so(),this.Je=so(),this.He=new Fe(pe)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:oe(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach((r,s)=>{this.nt(s)&&n(s)})}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Bl(i))if(r===0){const a=new se(i.path);this.Xe(n,a,ut.newNoDocument(a,ue.min()))}else Re(r===1,20013,{expectedCount:r});else{const a=this.ot(n);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let a,l;try{a=sr(r).toUint8Array()}catch(c){if(c instanceof Mg)return tr("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new zc(a,s,i)}catch(c){return tr(c instanceof js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(n,i,null),s++)}),s}Pt(e){const n=new Map;this.Ge.forEach((i,a)=>{const l=this.st(a);if(l){if(i.current&&Bl(l.target)){const c=new se(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,ut.newNoDocument(c,e))}i.Ne&&(n.set(a,i.Le()),i.ke())}});let r=ye();this.Je.forEach((i,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ze.forEach((i,a)=>a.setReadTime(e));const s=new ma(e,n,this.He,this.ze,r);return this.ze=Sn(),this.je=so(),this.Je=so(),this.He=new Fe(pe),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Lf,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Ke(pe),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Ke(pe),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Lf),this.We.getRemoteKeysForTarget(e).forEach(n=>{this.Xe(e,n,null)})}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function so(){return new Fe(se.comparator)}function Ff(){return new Fe(se.comparator)}const o0={asc:"ASCENDING",desc:"DESCENDING"},a0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},l0={and:"AND",or:"OR"};class c0{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||ca(e)?e:{value:e}}function $o(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function fm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function u0(t,e){return $o(t,e.toTimestamp())}function nn(t){return Re(!!t,49232),ue.fromTimestamp(function(n){const r=rr(n);return new Ne(r.seconds,r.nanos)}(t))}function Wc(t,e){return Hl(t,e).canonicalString()}function Hl(t,e){const n=function(s){return new Oe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function dm(t){const e=Oe.fromString(t);return Re(ym(e),10190,{key:e.toString()}),e}function ql(t,e){return Wc(t.databaseId,e.path)}function sl(t,e){const n=dm(e);if(n.get(1)!==t.databaseId.projectId)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new te(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(gm(n))}function pm(t,e){return Wc(t.databaseId,e)}function h0(t){const e=dm(t);return e.length===4?Oe.emptyPath():gm(e)}function zl(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gm(t){return Re(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Uf(t,e,n){return{name:ql(t,e),fields:n.value.mapValue.fields}}function f0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(Re(f===void 0||typeof f=="string",58123),rt.fromBase64String(f||"")):(Re(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),rt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?F.UNKNOWN:cm(h.code);return new te(f,h.message||"")}(a);n=new hm(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=sl(t,r.document.name),i=nn(r.document.updateTime),a=r.document.createTime?nn(r.document.createTime):ue.min(),l=new Dt({mapValue:{fields:r.document.fields}}),c=ut.newFoundDocument(s,i,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Eo(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=sl(t,r.document),i=r.readTime?nn(r.readTime):ue.min(),a=ut.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Eo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=sl(t,r.document),i=r.removedTargetIds||[];n=new Eo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new n0(s,i),l=r.targetId;n=new um(l,a)}}return n}function d0(t,e){let n;if(e instanceof Vi)n={update:Uf(t,e.key,e.value)};else if(e instanceof lm)n={delete:ql(t,e.key)};else if(e instanceof Vr)n={update:Uf(t,e.key,e.data),updateMask:I0(e.fieldMask)};else{if(!(e instanceof ZA))return oe(16599,{Rt:e.type});n={verify:ql(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof mi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof jo)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw oe(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:u0(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)}(t,e.precondition)),n}function p0(t,e){return t&&t.length>0?(Re(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?nn(s.updateTime):nn(i);return a.isEqual(ue.min())&&(a=nn(i)),new JA(a,s.transformResults||[])}(n,e))):[]}function g0(t,e){return{documents:[pm(t,e.path)]}}function m0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=pm(t,s);const i=function(h){if(h.length!==0)return _m(cn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const a=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:$r(g.field),direction:v0(g.dir)}}(f))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const l=$l(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{Vt:n,parent:s}}function _0(t){let e=h0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Re(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=mm(p);return g instanceof cn&&Wg(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(C){return new Bo(Hr(C.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ca(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Uo(_,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,_=p.values||[];return new Uo(_,g)}(n.endAt)),xA(e,s,a,i,l,"F",c,h)}function y0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Hr(n.unaryFilter.field);return ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Hr(n.unaryFilter.field);return ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Hr(n.unaryFilter.field);return ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Hr(n.unaryFilter.field);return ze.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}}(t):t.fieldFilter!==void 0?function(n){return ze.create(Hr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>mm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}}(n.compositeFilter.op))}(t):oe(30097,{filter:t})}function v0(t){return o0[t]}function E0(t){return a0[t]}function T0(t){return l0[t]}function $r(t){return{fieldPath:t.canonicalString()}}function Hr(t){return nt.fromServerFormat(t.fieldPath)}function _m(t){return t instanceof ze?function(n){if(n.op==="=="){if(Rf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NAN"}};if(bf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Rf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NAN"}};if(bf(n.value))return{unaryFilter:{field:$r(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$r(n.field),op:E0(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>_m(s));return r.length===1?r[0]:{compositeFilter:{op:T0(n.op),filters:r}}}(t):oe(54877,{filter:t})}function I0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function ym(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Wn{constructor(e,n,r,s,i=ue.min(),a=ue.min(),l=rt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Wn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class w0{constructor(e){this.gt=e}}function A0(t){const e=_0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?jl(e,e.limit,"L"):e}/**
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
 */class b0{constructor(){this.Dn=new R0}addToCollectionParentIndex(e,n){return this.Dn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(nr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class R0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ke(Oe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ke(Oe.comparator)).toArray()}}/**
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
 */const Bf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},vm=41943040;class Tt{static withCacheSize(e){return new Tt(e,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tt.DEFAULT_COLLECTION_PERCENTILE=10,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tt.DEFAULT=new Tt(vm,Tt.DEFAULT_COLLECTION_PERCENTILE,Tt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tt.DISABLED=new Tt(-1,0,0);/**
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
 */class us{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new us(0)}static ur(){return new us(-1)}}/**
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
 */const jf="LruGarbageCollector",S0=1048576;function $f([t,e],[n,r]){const s=pe(t,n);return s===0?pe(e,r):s}class P0{constructor(e){this.Tr=e,this.buffer=new Ke($f),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();$f(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class C0{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){X(jf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){vs(n)?X(jf,"Ignoring IndexedDB error during garbage collection: ",n):await ys(n)}await this.Rr(3e5)})}}class k0{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(la.ue);const r=new P0(n);return this.Vr.forEachTarget(e,s=>r.Er(s.sequenceNumber)).next(()=>this.Vr.gr(e,s=>r.Er(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Bf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Bf):this.pr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,a,l,c,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Br()<=_e.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function V0(t,e){return new k0(t,e)}/**
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
 */class D0{constructor(){this.changes=new kr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class O0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class N0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ti(r.mutation,s,$t.empty(),Ne.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ye()){const s=yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Bs();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ye()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Sn();const a=ei(),l=function(){return ei()}();return n.forEach((c,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Vr)?i=i.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),ti(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):a.set(h.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var p;return l.set(h,new O0(f,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ei();let s=new Fe((a,l)=>a-l),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let f=r.get(c)||$t.empty();f=l.applyToLocalView(h,f),r.set(c,f);const p=(s.get(l.batchId)||ye()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,p=em();f.forEach(g=>{if(!i.has(g)){const _=om(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return se.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):MA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(yr());let l=fi,c=i;return a.next(h=>M.forEach(h,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,ye())).next(f=>({batchId:l,changes:Zg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next(r=>{let s=Bs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Bs();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,g){return new ha(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,ut.newInvalidDocument(f)))});let l=Bs();return a.forEach((c,h)=>{const f=i.get(c);f!==void 0&&ti(f.mutation,h,$t.empty(),Ne.now()),da(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class x0{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return M.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,function(s){return{name:s.name,query:A0(s.bundledQuery),readTime:nn(s.readTime)}}(n)),M.resolve()}}/**
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
 */class M0{constructor(){this.overlays=new Fe(se.comparator),this.kr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.wt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.kr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=yr(),i=n.length+1,a=new se(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=yr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=s)););return M.resolve(l)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new t0(n,r));let i=this.kr.get(n);i===void 0&&(i=ye(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class L0{constructor(){this.sessionToken=rt.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Kc{constructor(){this.qr=new Ke(Ge.Qr),this.$r=new Ke(Ge.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ge(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Ge(e,n))}Gr(e,n){e.forEach(r=>this.removeReference(r,n))}zr(e){const n=new se(new Oe([])),r=new Ge(n,e),s=new Ge(n,e+1),i=[];return this.$r.forEachInRange([r,s],a=>{this.Wr(a),i.push(a.key)}),i}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new se(new Oe([])),r=new Ge(n,e),s=new Ge(n,e+1);let i=ye();return this.$r.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ge(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ge{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return se.comparator(e.key,n.key)||pe(e.Hr,n.Hr)}static Ur(e,n){return pe(e.Hr,n.Hr)||se.comparator(e.key,n.key)}}/**
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
 */class F0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Ke(Ge.Qr)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new e0(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new Ge(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?Lc:this.er-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ge(n,0),s=new Ge(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],a=>{const l=this.Zr(a.Hr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(pe);return n.forEach(s=>{const i=new Ge(s,0),a=new Ge(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],l=>{r=r.add(l.Hr)})}),M.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const a=new Ge(new se(i),0);let l=new Ke(pe);return this.Yr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)},a),M.resolve(this.ei(l))}ei(e){const n=[];return e.forEach(r=>{const s=this.Zr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Re(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return M.forEach(n.mutations,s=>{const i=new Ge(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Yr=r})}rr(e){}containsKey(e,n){const r=new Ge(n,0),s=this.Yr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class U0{constructor(e){this.ni=e,this.docs=function(){return new Fe(se.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():ut.newInvalidDocument(n))}getEntries(e,n){let r=Sn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ut.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Sn();const a=n.path,l=new se(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||dA(fA(f),r)<=0||(s.has(f.key)||da(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ri(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new B0(this)}getSize(e){return M.resolve(this.size)}}class B0 extends D0{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class j0{constructor(e){this.persistence=e,this.ii=new kr(n=>Bc(n),jc),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.si=0,this.oi=new Kc,this.targetCount=0,this._i=us.ar()}forEachTarget(e,n){return this.ii.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),M.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new us(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.hr(n),M.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.oi.containsKey(n))}}/**
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
 */class Em{constructor(e,n){this.ai={},this.overlays={},this.ui=new la(0),this.ci=!1,this.ci=!0,this.li=new L0,this.referenceDelegate=e(this),this.hi=new j0(this),this.indexManager=new b0,this.remoteDocumentCache=function(s){return new U0(s)}(r=>this.referenceDelegate.Pi(r)),this.serializer=new w0(n),this.Ti=new x0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new F0(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new $0(this.ui.next());return this.referenceDelegate.Ii(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ei(e,n){return M.or(Object.values(this.ai).map(r=>()=>r.containsKey(e,n)))}}class $0 extends gA{constructor(e){super(),this.currentSequenceNumber=e}}class Gc{constructor(e){this.persistence=e,this.Ai=new Kc,this.Ri=null}static Vi(e){return new Gc(e)}get mi(){if(this.Ri)return this.Ri;throw oe(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach(s=>this.mi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.mi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.mi,r=>{const s=se.fromPath(r);return this.fi(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.Ri=null,n.apply(e)))}updateLimboDocument(e,n){return this.fi(e,n).next(r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())})}Pi(e){return 0}fi(e,n){return M.or([()=>M.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ho{constructor(e,n){this.persistence=e,this.gi=new kr(r=>yA(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=V0(this,n)}static Vi(e,n){return new Ho(e,n)}Ii(){}di(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}yr(e){let n=0;return this.gr(e,r=>{n++}).next(()=>n)}gr(e,n){return M.forEach(this.gi,(r,s)=>this.Sr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,a=>this.Sr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),M.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=_o(e.data.value)),n}Sr(e,n,r){return M.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Qc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qc(e,n.fromCache,r,s)}}/**
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
 */class H0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class q0{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=function(){return ME()?8:mA(gt())>0?6:4}()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ys(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new H0;return this.ws(e,n,a).next(l=>{if(i.result=l,this.Rs)return this.Ss(e,n,a,l.size)})}).next(()=>i.result)}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Br()<=_e.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",jr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),M.resolve()):(Br()<=_e.DEBUG&&X("QueryEngine","Query:",jr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Br()<=_e.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",jr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):M.resolve())}ps(e,n){if(kf(n))return M.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=jl(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ye(...i);return this.gs.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.bs(n,l);return this.Ds(n,h,a,c.readTime)?this.ps(e,jl(n,null,"F")):this.vs(e,h,n,c)}))})))}ys(e,n,r,s){return kf(n)||s.isEqual(ue.min())?M.resolve(null):this.gs.getDocuments(e,r).next(i=>{const a=this.bs(n,i);return this.Ds(n,a,r,s)?M.resolve(null):(Br()<=_e.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jr(n)),this.vs(e,a,n,hA(s,fi)).next(l=>l))})}bs(e,n){let r=new Ke(Xg(e));return n.forEach((s,i)=>{da(e,i)&&(r=r.add(i))}),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Br()<=_e.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",jr(n)),this.gs.getDocumentsMatchingQuery(e,n,nr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Jc="LocalStore",z0=3e8;class W0{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Fe(pe),this.Ms=new kr(i=>Bc(i),jc),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N0(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Fs))}}function K0(t,e,n,r){return new W0(t,e,n,r)}async function Tm(t,e){const n=fe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=ye();for(const h of s){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of i){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(h=>({Bs:h,removedBatchIds:a,addedBatchIds:l}))})})}function G0(t,e){const n=fe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const p=h.batch,g=p.keys();let _=M.resolve();return g.forEach(C=>{_=_.next(()=>f.getEntry(c,C)).next(V=>{const D=h.docVersions.get(C);Re(D!==null,48541),V.version.compareTo(D)<0&&(p.applyToRemoteDocument(V,h),V.isValidDocument()&&(V.setReadTime(h.commitVersion),f.addEntry(V)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Im(t){const e=fe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.hi.getLastRemoteSnapshotVersion(n))}function Q0(t,e){const n=fe(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const l=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;l.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.hi.addMatchingKeys(i,f.addedDocuments,p)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(rt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),function(V,D,$){return V.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-V.snapshotVersion.toMicroseconds()>=z0?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(g,_,f)&&l.push(n.hi.updateTargetData(i,_))});let c=Sn(),h=ye();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(J0(i,a,e.documentUpdates).next(f=>{c=f.Ls,h=f.ks})),!r.isEqual(ue.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next(p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>a.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.Fs=s,i))}function J0(t,e,n){let r=ye(),s=ye();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let a=Sn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(ue.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):X(Jc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ls:a,ks:s}})}function X0(t,e){const n=fe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Lc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Y0(t,e){const n=fe(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.hi.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.hi.allocateTargetId(r).next(a=>(s=new Wn(e,a,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r})}async function Wl(t,e,n){const r=fe(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!vs(a))throw a;X(Jc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Hf(t,e,n){const r=fe(t);let s=ue.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const p=fe(c),g=p.Ms.get(f);return g!==void 0?M.resolve(p.Fs.get(g)):p.hi.getTargetData(h,f)}(r,a,tn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next(c=>{i=c})}).next(()=>r.Cs.getDocumentsMatchingQuery(a,e,n?s:ue.min(),n?i:ye())).next(l=>(Z0(r,FA(e),l),{documents:l,qs:i})))}function Z0(t,e,n){let r=t.xs.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.xs.set(e,r)}class qf{constructor(){this.activeTargetIds=qA()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eb{constructor(){this.Fo=new qf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new qf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tb{xo(e){}shutdown(){}}/**
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
 */const zf="ConnectivityMonitor";class Wf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){X(zf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){X(zf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let io=null;function Kl(){return io===null?io=function(){return 268435456+Math.round(2147483648*Math.random())}():io++,"0x"+io.toString(16)}/**
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
 */const il="RestConnection",nb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class rb{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Lo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const a=Kl(),l=this.Go(e,n.toUriEncodedString());X(il,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),f=ps(h);return this.jo(e,l,c,r,f).then(p=>(X(il,`Received RPC '${e}' ${a}: `,p),p),p=>{throw tr(il,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Jo(e,n,r,s,i,a){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+_s}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}Go(e,n){const r=nb[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class sb{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const at="WebChannelConnection";class ib extends rb{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const a=Kl();return new Promise((l,c)=>{const h=new Ag;h.setWithCredentials(!0),h.listenOnce(bg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case mo.NO_ERROR:const p=h.getResponseJson();X(at,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case mo.TIMEOUT:X(at,`RPC '${e}' ${a} timed out`),c(new te(F.DEADLINE_EXCEEDED,"Request time out"));break;case mo.HTTP_ERROR:const g=h.getStatus();if(X(at,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let _=h.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_?.error;if(C&&C.status&&C.message){const V=function($){const U=$.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(U)>=0?U:F.UNKNOWN}(C.status);c(new te(V,C.message))}else c(new te(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new te(F.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{X(at,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);X(at,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",f,r,15)})}P_(e,n,r){const s=Kl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Pg(),l=Sg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");X(at,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);this.T_(p);let g=!1,_=!1;const C=new sb({Ho:D=>{_?X(at,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(X(at,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),X(at,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},Yo:()=>p.close()}),V=(D,$,U)=>{D.listen($,j=>{try{U(j)}catch(q){setTimeout(()=>{throw q},0)}})};return V(p,Us.EventType.OPEN,()=>{_||(X(at,`RPC '${e}' stream ${s} transport opened.`),C.s_())}),V(p,Us.EventType.CLOSE,()=>{_||(_=!0,X(at,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))}),V(p,Us.EventType.ERROR,D=>{_||(_=!0,tr(at,`RPC '${e}' stream ${s} transport errored. Name:`,D.name,"Message:",D.message),C.__(new te(F.UNAVAILABLE,"The operation could not be completed")))}),V(p,Us.EventType.MESSAGE,D=>{var $;if(!_){const U=D.data[0];Re(!!U,16349);const j=U,q=j?.error||(($=j[0])===null||$===void 0?void 0:$.error);if(q){X(at,`RPC '${e}' stream ${s} received error:`,q);const Q=q.status;let Z=function(E){const w=He[E];if(w!==void 0)return cm(w)}(Q),A=q.message;Z===void 0&&(Z=F.INTERNAL,A="Unknown error status: "+Q+" with message "+q.message),_=!0,C.__(new te(Z,A)),p.close()}else X(at,`RPC '${e}' stream ${s} received:`,U),C.a_(U)}}),V(l,Rg.STAT_EVENT,D=>{D.stat===xl.PROXY?X(at,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===xl.NOPROXY&&X(at,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{C.o_()},0),C}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(n=>n===e)}}function ol(){return typeof document<"u"?document:null}/**
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
 */function _a(t){return new c0(t,!0)}/**
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
 */class wm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Kf="PersistentStream";class Am{constructor(e,n,r,s,i,a,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new wm(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(Rn(n.toString()),Rn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.b_===n&&this.W_(r,s)},r=>{e(()=>{const s=new te(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)})})}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.e_(()=>{r(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(s=>{r(()=>this.G_(s))}),this.stream.onMessage(s=>{r(()=>++this.C_==1?this.j_(s):this.onNext(s))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return X(Kf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget(()=>this.b_===e?n():(X(Kf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ob extends Am{constructor(e,n,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=f0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ue.min():a.readTime?nn(a.readTime):ue.min()}(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=zl(this.serializer),n.addTarget=function(i,a){let l;const c=a.target;if(l=Bl(c)?{documents:g0(i,c)}:{query:m0(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=fm(i,a.resumeToken);const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(ue.min())>0){l.readTime=$o(i,a.snapshotVersion.toTimestamp());const h=$l(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=y0(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=zl(this.serializer),n.removeTarget=e,this.k_(n)}}class ab extends Am{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=p0(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=zl(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>d0(this.serializer,r))};this.k_(n)}}/**
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
 */class lb{}class cb extends lb{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Wo(e,Hl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new te(F.UNKNOWN,i.toString())})}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Jo(e,Hl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new te(F.UNKNOWN,a.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class ub{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Rn(n),this._a=!1):X("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Sr="RemoteStore";class hb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo(a=>{r.enqueueAndForget(async()=>{Dr(this)&&(X(Sr,"Restarting streams for network reachability change."),await async function(c){const h=fe(c);h.Ia.add(4),await Oi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await ya(h)}(this))})}),this.Aa=new ub(r,s)}}async function ya(t){if(Dr(t))for(const e of t.da)await e(!0)}async function Oi(t){for(const e of t.da)await e(!1)}function bm(t,e){const n=fe(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),eu(n)?Zc(n):Es(n).x_()&&Yc(n,e))}function Xc(t,e){const n=fe(t),r=Es(n);n.Ta.delete(e),r.x_()&&Rm(n,e),n.Ta.size===0&&(r.x_()?r.B_():Dr(n)&&n.Aa.set("Unknown"))}function Yc(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Es(t).H_(e)}function Rm(t,e){t.Ra.$e(e),Es(t).Y_(e)}function Zc(t){t.Ra=new i0({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Es(t).start(),t.Aa.aa()}function eu(t){return Dr(t)&&!Es(t).M_()&&t.Ta.size>0}function Dr(t){return fe(t).Ia.size===0}function Sm(t){t.Ra=void 0}async function fb(t){t.Aa.set("Online")}async function db(t){t.Ta.forEach((e,n)=>{Yc(t,e)})}async function pb(t,e){Sm(t),eu(t)?(t.Aa.la(e),Zc(t)):t.Aa.set("Unknown")}async function gb(t,e,n){if(t.Aa.set("Online"),e instanceof hm&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))}(t,e)}catch(r){X(Sr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await qo(t,r)}else if(e instanceof Eo?t.Ra.Ye(e):e instanceof um?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ue.min()))try{const r=await Im(t.localStore);n.compareTo(r)>=0&&await function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=i.Ta.get(c);if(!f)return;i.Ta.set(c,f.withResumeToken(rt.EMPTY_BYTE_STRING,f.snapshotVersion)),Rm(i,c);const p=new Wn(f.target,c,h,f.sequenceNumber);Yc(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){X(Sr,"Failed to raise snapshot:",r),await qo(t,r)}}async function qo(t,e,n){if(!vs(e))throw e;t.Ia.add(1),await Oi(t),t.Aa.set("Offline"),n||(n=()=>Im(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{X(Sr,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await ya(t)})}function Pm(t,e){return e().catch(n=>qo(t,n,e))}async function va(t){const e=fe(t),n=or(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Lc;for(;mb(e);)try{const s=await X0(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,_b(e,s)}catch(s){await qo(e,s)}Cm(e)&&km(e)}function mb(t){return Dr(t)&&t.Pa.length<10}function _b(t,e){t.Pa.push(e);const n=or(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Cm(t){return Dr(t)&&!or(t).M_()&&t.Pa.length>0}function km(t){or(t).start()}async function yb(t){or(t).na()}async function vb(t){const e=or(t);for(const n of t.Pa)e.X_(n.mutations)}async function Eb(t,e,n){const r=t.Pa.shift(),s=qc.from(r,e,n);await Pm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await va(t)}async function Tb(t,e){e&&or(t).Z_&&await async function(r,s){if(function(a){return r0(a)&&a!==F.ABORTED}(s.code)){const i=r.Pa.shift();or(r).N_(),await Pm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await va(r)}}(t,e),Cm(t)&&km(t)}async function Gf(t,e){const n=fe(t);n.asyncQueue.verifyOperationInProgress(),X(Sr,"RemoteStore received new credentials");const r=Dr(n);n.Ia.add(3),await Oi(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await ya(n)}async function Ib(t,e){const n=fe(t);e?(n.Ia.delete(2),await ya(n)):e||(n.Ia.add(2),await Oi(n),n.Aa.set("Unknown"))}function Es(t){return t.Va||(t.Va=function(n,r,s){const i=fe(n);return i.ia(),new ob(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:fb.bind(null,t),e_:db.bind(null,t),n_:pb.bind(null,t),J_:gb.bind(null,t)}),t.da.push(async e=>{e?(t.Va.N_(),eu(t)?Zc(t):t.Aa.set("Unknown")):(await t.Va.stop(),Sm(t))})),t.Va}function or(t){return t.ma||(t.ma=function(n,r,s){const i=fe(n);return i.ia(),new ab(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:yb.bind(null,t),n_:Tb.bind(null,t),ea:vb.bind(null,t),ta:Eb.bind(null,t)}),t.da.push(async e=>{e?(t.ma.N_(),await va(t)):(await t.ma.stop(),t.Pa.length>0&&(X(Sr,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))})),t.ma}/**
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
 */class tu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new En,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new tu(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new te(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nu(t,e){if(Rn("AsyncQueue",`${e}: ${t}`),vs(t))return new te(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class ts{static emptySet(e){return new ts(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Bs(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ts;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qf{constructor(){this.fa=new Fe(se.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):oe(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,a,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const a=[];return n.forEach(l=>{a.push({type:0,doc:l})}),new hs(e,n,ts.emptySet(n),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class wb{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class Ab{constructor(){this.queries=Jf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=fe(n),i=s.queries;s.queries=Jf(),i.forEach((a,l)=>{for(const c of l.wa)c.onError(r)})})(this,new te(F.ABORTED,"Firestore shutting down"))}}function Jf(){return new kr(t=>Jg(t),fa)}async function Vm(t,e){const n=fe(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new wb,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(a){const l=nu(a,`Initialization of query '${jr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&ru(n)}async function Dm(t,e){const n=fe(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function bb(t,e){const n=fe(t);let r=!1;for(const s of e){const i=s.query,a=n.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&ru(n)}function Rb(t,e,n){const r=fe(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function ru(t){t.Da.forEach(e=>{e.next()})}var Gl,Xf;(Xf=Gl||(Gl={})).Fa="default",Xf.Cache="cache";class Om{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Gl.Cache}}/**
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
 */class Nm{constructor(e){this.key=e}}class xm{constructor(e){this.key=e}}class Sb{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ye(),this.mutatedKeys=ye(),this.Xa=Xg(e),this.eu=new ts(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Qf,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),_=da(this.query,p)?p:null,C=!!g&&this.mutatedKeys.has(g.key),V=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let D=!1;g&&_?g.data.isEqual(_.data)?C!==V&&(r.track({type:3,doc:_}),D=!0):this.iu(g,_)||(r.track({type:2,doc:_}),D=!0,(c&&this.Xa(_,c)>0||h&&this.Xa(_,h)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),D=!0):g&&!_&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(_?(a=a.add(_),i=V?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort((f,p)=>function(_,C){const V=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{At:D})}};return V(_)-V(C)}(f.type,p.type)||this.Xa(f.doc,p.doc)),this.su(r),s=s!=null&&s;const l=n&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new hs(this.query,e.eu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Qf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ye(),this.eu.forEach(r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))});const n=[];return e.forEach(r=>{this.Za.has(r)||n.push(new xm(r))}),this.Za.forEach(r=>{e.has(r)||n.push(new Nm(r))}),n}uu(e){this.Ha=e.qs,this.Za=ye();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return hs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const su="SyncEngine";class Pb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Cb{constructor(e){this.key=e,this.lu=!1}}class kb{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new kr(l=>Jg(l),fa),this.Tu=new Map,this.Iu=new Set,this.du=new Fe(se.comparator),this.Eu=new Map,this.Au=new Kc,this.Ru={},this.Vu=new Map,this.mu=us.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function Vb(t,e,n=!0){const r=jm(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Mm(r,e,n,!0),s}async function Db(t,e){const n=jm(t);await Mm(n,e,!0,!1)}async function Mm(t,e,n,r){const s=await Y0(t.localStore,tn(e)),i=s.targetId,a=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await Ob(t,e,i,a==="current",s.resumeToken)),t.isPrimaryClient&&n&&bm(t.remoteStore,s),l}async function Ob(t,e,n,r,s){t.gu=(p,g,_)=>async function(V,D,$,U){let j=D.view.nu($);j.Ds&&(j=await Hf(V.localStore,D.query,!1).then(({documents:A})=>D.view.nu(A,j)));const q=U&&U.targetChanges.get(D.targetId),Q=U&&U.targetMismatches.get(D.targetId)!=null,Z=D.view.applyChanges(j,V.isPrimaryClient,q,Q);return Zf(V,D.targetId,Z._u),Z.snapshot}(t,p,g,_);const i=await Hf(t.localStore,e,!0),a=new Sb(e,i.qs),l=a.nu(i.documents),c=Di.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=a.applyChanges(l,t.isPrimaryClient,c);Zf(t,n,h._u);const f=new Pb(e,n,a);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function Nb(t,e,n){const r=fe(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(a=>!fa(a,e))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wl(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Xc(r.remoteStore,s.targetId),Ql(r,s.targetId)}).catch(ys)):(Ql(r,s.targetId),await Wl(r.localStore,s.targetId,!0))}async function xb(t,e){const n=fe(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Xc(n.remoteStore,r.targetId))}async function Mb(t,e,n){const r=Hb(t);try{const s=await function(a,l){const c=fe(a),h=Ne.now(),f=l.reduce((_,C)=>_.add(C.key),ye());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let C=Sn(),V=ye();return c.Os.getEntries(_,f).next(D=>{C=D,C.forEach(($,U)=>{U.isValidDocument()||(V=V.add($))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,C)).next(D=>{p=D;const $=[];for(const U of l){const j=YA(U,p.get(U.key).overlayedDocument);j!=null&&$.push(new Vr(U.key,j,Hg(j.value.mapValue),Tn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,h,$,l)}).next(D=>{g=D;const $=D.applyToLocalDocumentSet(p,V);return c.documentOverlayCache.saveOverlays(_,D.batchId,$)})}).then(()=>({batchId:g.batchId,changes:Zg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new Fe(pe)),h=h.insert(l,c),a.Ru[a.currentUser.toKey()]=h}(r,s.batchId,n),await Ni(r,s.changes),await va(r.remoteStore)}catch(s){const i=nu(s,"Failed to persist write");n.reject(i)}}async function Lm(t,e){const n=fe(t);try{const r=await Q0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const a=n.Eu.get(i);a&&(Re(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Re(a.lu,14607):s.removedDocuments.size>0&&(Re(a.lu,42227),a.lu=!1))}),await Ni(n,r,e)}catch(r){await ys(r)}}function Yf(t,e,n){const r=fe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=fe(a);c.onlineState=l;let h=!1;c.queries.forEach((f,p)=>{for(const g of p.wa)g.va(l)&&(h=!0)}),h&&ru(c)}(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Lb(t,e,n){const r=fe(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new Fe(se.comparator);a=a.insert(i,ut.newNoDocument(i,ue.min()));const l=ye().add(i),c=new ma(ue.min(),new Map,new Fe(pe),a,l);await Lm(r,c),r.du=r.du.remove(i),r.Eu.delete(e),iu(r)}else await Wl(r.localStore,e,!1).then(()=>Ql(r,e,n)).catch(ys)}async function Fb(t,e){const n=fe(t),r=e.batch.batchId;try{const s=await G0(n.localStore,e);Um(n,r,null),Fm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Ni(n,s)}catch(s){await ys(s)}}async function Ub(t,e,n){const r=fe(t);try{const s=await function(a,l){const c=fe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Re(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Um(r,e,n),Fm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Ni(r,s)}catch(s){await ys(s)}}function Fm(t,e){(t.Vu.get(e)||[]).forEach(n=>{n.resolve()}),t.Vu.delete(e)}function Um(t,e,n){const r=fe(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach(r=>{t.Au.containsKey(r)||Bm(t,r)})}function Bm(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Xc(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),iu(t))}function Zf(t,e,n){for(const r of n)r instanceof Nm?(t.Au.addReference(r.key,e),Bb(t,r)):r instanceof xm?(X(su,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Bm(t,r.key)):oe(19791,{yu:r})}function Bb(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(X(su,"New document in limbo: "+n),t.Iu.add(r),iu(t))}function iu(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new se(Oe.fromString(e)),r=t.mu.next();t.Eu.set(r,new Cb(n)),t.du=t.du.insert(n,r),bm(t.remoteStore,new Wn(tn($c(n.path)),r,"TargetPurposeLimboResolution",la.ue))}}async function Ni(t,e,n){const r=fe(t),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach((l,c)=>{a.push(r.gu(c,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n?.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Qc.Es(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.hu.J_(s),await async function(c,h){const f=fe(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.Is,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>M.forEach(g.ds,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!vs(p))throw p;X(Jc,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const _=f.Fs.get(g),C=_.snapshotVersion,V=_.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(g,V)}}}(r.localStore,i))}async function jb(t,e){const n=fe(t);if(!n.currentUser.isEqual(e)){X(su,"User change. New user:",e.toKey());const r=await Tm(n.localStore,e);n.currentUser=e,function(i,a){i.Vu.forEach(l=>{l.forEach(c=>{c.reject(new te(F.CANCELLED,a))})}),i.Vu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ni(n,r.Bs)}}function $b(t,e){const n=fe(t),r=n.Eu.get(e);if(r&&r.lu)return ye().add(r.key);{let s=ye();const i=n.Tu.get(e);if(!i)return s;for(const a of i){const l=n.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function jm(t){const e=fe(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Lm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=$b.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Lb.bind(null,e),e.hu.J_=bb.bind(null,e.eventManager),e.hu.pu=Rb.bind(null,e.eventManager),e}function Hb(t){const e=fe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Fb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ub.bind(null,e),e}class zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=_a(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return K0(this.persistence,new q0,e.initialUser,this.serializer)}Du(e){return new Em(Gc.Vi,this.serializer)}bu(e){return new eb}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}zo.provider={build:()=>new zo};class qb extends zo{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Re(this.persistence.referenceDelegate instanceof Ho,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new C0(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Tt.withCacheSize(this.cacheSizeBytes):Tt.DEFAULT;return new Em(r=>Ho.Vi(r,n),this.serializer)}}class Jl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=jb.bind(null,this.syncEngine),await Ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new Ab}()}createDatastore(e){const n=_a(e.databaseInfo.databaseId),r=function(i){return new ib(i)}(e.databaseInfo);return function(i,a,l,c){return new cb(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new hb(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Yf(this.syncEngine,n,0),function(){return Wf.C()?new Wf:new tb}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,f){const p=new kb(s,i,a,l,c,h);return f&&(p.fu=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=fe(s);X(Sr,"RemoteStore shutting down."),i.Ia.add(5),await Oi(i),i.Ea.shutdown(),i.Aa.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jl.provider={build:()=>new Jl};/**
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
 */class $m{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Rn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const ar="FirestoreClient";class zb{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=lt.UNAUTHENTICATED,this.clientId=xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{X(ar,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(X(ar,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new En;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nu(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function al(t,e){t.asyncQueue.verifyOperationInProgress(),X(ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Tm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>{tr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then(()=>{X("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(s=>{tr("Terminating Firestore due to IndexedDb database deletion failed",s)})}),t._offlineComponents=e}async function ed(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Wb(t);X(ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gf(e.remoteStore,s)),t._onlineComponents=e}async function Wb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(ar,"Using user provided OfflineComponentProvider");try{await al(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===F.FAILED_PRECONDITION||s.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;tr("Error using user provided cache. Falling back to memory cache: "+n),await al(t,new zo)}}else X(ar,"Using default OfflineComponentProvider"),await al(t,new qb(void 0));return t._offlineComponents}async function Hm(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(ar,"Using user provided OnlineComponentProvider"),await ed(t,t._uninitializedComponentsProvider._online)):(X(ar,"Using default OnlineComponentProvider"),await ed(t,new Jl))),t._onlineComponents}function Kb(t){return Hm(t).then(e=>e.syncEngine)}async function qm(t){const e=await Hm(t),n=e.eventManager;return n.onListen=Vb.bind(null,e.syncEngine),n.onUnlisten=Nb.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=Db.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=xb.bind(null,e.syncEngine),n}function Gb(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new $m({next:g=>{f.Ou(),a.enqueueAndForget(()=>Dm(i,p));const _=g.docs.has(l);!_&&g.fromCache?h.reject(new te(F.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&c&&c.source==="server"?h.reject(new te(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Om($c(l.path),f,{includeMetadataChanges:!0,ka:!0});return Vm(i,p)}(await qm(t),t.asyncQueue,e,n,r)),r.promise}function Qb(t,e,n={}){const r=new En;return t.asyncQueue.enqueueAndForget(async()=>function(i,a,l,c,h){const f=new $m({next:g=>{f.Ou(),a.enqueueAndForget(()=>Dm(i,p)),g.fromCache&&c.source==="server"?h.reject(new te(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new Om(l,f,{includeMetadataChanges:!0,ka:!0});return Vm(i,p)}(await qm(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function zm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const td=new Map;/**
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
 */const Wm="firestore.googleapis.com",nd=!0;class rd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new te(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Wm,this.ssl=nd}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:nd;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=vm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<S0)throw new te(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new te(F.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new te(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new te(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tA;switch(r.type){case"firstParty":return new iA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new te(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=td.get(n);r&&(X("ComponentProvider","Removing Datastore"),td.delete(n),r.terminate())}(this),Promise.resolve()}}function Jb(t,e,n,r={}){var s;t=Rr(t,Ea);const i=ps(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Fp(`https://${c}`),Up("Firestore",!0)),a.host!==Wm&&a.host!==c&&tr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Ir(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=lt.MOCK_USER;else{f=SE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new te(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new lt(g)}t._authCredentials=new nA(new kg(f,p))}}/**
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
 */class Ta{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ta(this.firestore,e,this._query)}}class We{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new We(this.firestore,e,this._key)}toJSON(){return{type:We._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(ki(n,We._jsonSchema))return new We(e,r||null,new se(Oe.fromString(n.referencePath)))}}We._jsonSchemaVersion="firestore/documentReference/1.0",We._jsonSchema={type:qe("string",We._jsonSchemaVersion),referencePath:qe("string")};class Yn extends Ta{constructor(e,n,r){super(e,n,$c(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new We(this.firestore,null,new se(e))}withConverter(e){return new Yn(this.firestore,e,this._path)}}function Xb(t,e,...n){if(t=wt(t),Dg("collection","path",e),t instanceof Ea){const r=Oe.fromString(e,...n);return _f(r),new Yn(t,null,r)}{if(!(t instanceof We||t instanceof Yn))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return _f(r),new Yn(t.firestore,null,r)}}function Km(t,e,...n){if(t=wt(t),arguments.length===1&&(e=xc.newId()),Dg("doc","path",e),t instanceof Ea){const r=Oe.fromString(e,...n);return mf(r),new We(t,null,new se(r))}{if(!(t instanceof We||t instanceof Yn))throw new te(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return mf(r),new We(t.firestore,t instanceof Yn?t.converter:null,new se(r))}}/**
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
 */const sd="AsyncQueue";class id{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new wm(this,"async_queue_retry"),this.oc=()=>{const r=ol();r&&X(sd,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=ol();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=ol();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const n=new En;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!vs(e))throw e;X(sd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const n=this._c.then(()=>(this.nc=!0,e().catch(r=>{throw this.tc=r,this.nc=!1,Rn("INTERNAL UNHANDLED ERROR: ",od(r)),r}).then(r=>(this.nc=!1,r))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=tu.createAndSchedule(this,e,n,r,i=>this.lc(i));return this.ec.push(s),s}ac(){this.tc&&oe(47125,{hc:od(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function od(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ia extends Ea{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new id,this._persistenceKey=s?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new id(e),this._firestoreClient=void 0,await e}}}function Yb(t,e){const n=typeof t=="object"?t:Hp(),r=typeof t=="string"?t:Lo,s=Ic(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=bE("firestore");i&&Jb(s,...i)}return s}function ou(t){if(t._terminated)throw new te(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Zb(t),t._firestoreClient}function Zb(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,f){return new TA(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,zm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new zb(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l?._online.build();return{_offline:l?._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ot(rt.fromBase64String(e))}catch(n){throw new te(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ot(rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ot._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ki(e,Ot._jsonSchema))return Ot.fromBase64String(e.bytes)}}Ot._jsonSchemaVersion="firestore/bytes/1.0",Ot._jsonSchema={type:qe("string",Ot._jsonSchemaVersion),bytes:qe("string")};/**
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
 */class au{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new te(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lu{constructor(e){this._methodName=e}}/**
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
 */class rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new te(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new te(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return pe(this._lat,e._lat)||pe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(ki(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:qe("string",rn._jsonSchemaVersion),latitude:qe("number"),longitude:qe("number")};/**
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
 */class sn{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ki(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new sn(e.vectorValues);throw new te(F.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:qe("string",sn._jsonSchemaVersion),vectorValues:qe("object")};/**
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
 */const eR=/^__.*__$/;class tR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Vr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Vi(e,this.data,n,this.fieldTransforms)}}function Gm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ec:t})}}class cu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Wo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Gm(this.Ec)&&eR.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class nR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_a(e)}Dc(e,n,r,s=!1){return new cu({Ec:e,methodName:n,bc:r,path:nt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rR(t){const e=t._freezeSettings(),n=_a(t._databaseId);return new nR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function sR(t,e,n,r,s,i={}){const a=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Ym("Data must be an object, but it was:",a,r);const l=Jm(r,a);let c,h;if(i.merge)c=new $t(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=iR(e,p,n);if(!a.contains(g))throw new te(F.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);aR(f,g)||f.push(g)}c=new $t(f),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new tR(new Dt(l),c,h)}class uu extends lu{_toFieldTransform(e){return new GA(e.path,new mi)}isEqual(e){return e instanceof uu}}function Qm(t,e){if(Xm(t=wt(t)))return Ym("Unsupported field value:",e,t),Jm(t,e);if(t instanceof lu)return function(r,s){if(!Gm(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=Qm(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=wt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return zA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:$o(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:$o(s.serializer,i)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ot)return{bytesValue:fm(s.serializer,r._byteString)};if(r instanceof We){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof sn)return function(a,l){return{mapValue:{fields:{[jg]:{stringValue:$g},[Fo]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Hc(l.serializer,h)})}}}}}}(r,s);throw s.wc(`Unsupported field value: ${Mc(r)}`)}(t,e)}function Jm(t,e){const n={};return xg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Cr(t,(r,s)=>{const i=Qm(s,e.Vc(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Xm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof rn||t instanceof Ot||t instanceof We||t instanceof lu||t instanceof sn)}function Ym(t,e,n){if(!Xm(n)||!Og(n)){const r=Mc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function iR(t,e,n){if((e=wt(e))instanceof au)return e._internalPath;if(typeof e=="string")return Zm(t,e);throw Wo("Field path arguments must be of type string or ",t,!1,void 0,n)}const oR=new RegExp("[~\\*/\\[\\]]");function Zm(t,e,n){if(e.search(oR)>=0)throw Wo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new au(...e.split("."))._internalPath}catch{throw Wo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new te(F.INVALID_ARGUMENT,l+t+c)}function aR(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class e_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new We(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new lR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(t_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class lR extends e_{data(){return super.data()}}function t_(t,e){return typeof e=="string"?Zm(t,e):e instanceof au?e._internalPath:e._delegate._internalPath}/**
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
 */function cR(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new te(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class uR{convertValue(e,n="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(sr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Cr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Fo].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(a=>je(a.doubleValue));return new sn(i)}convertGeoPoint(e){return new rn(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ua(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(di(e));default:return null}}convertTimestamp(e){const n=rr(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Re(ym(r),9688,{name:e});const s=new pi(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||Rn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function hR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class $s{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Tr extends e_{constructor(e,n,r,s,i,a){super(e,n,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new To(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(t_("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new te(F.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Tr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Tr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Tr._jsonSchema={type:qe("string",Tr._jsonSchemaVersion),bundleSource:qe("string","DocumentSnapshot"),bundleName:qe("string"),bundle:qe("string")};class To extends Tr{data(e={}){return super.data(e)}}class ns{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new $s(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new To(this._firestore,this._userDataWriter,r.key,r,new $s(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new te(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(l=>{const c=new To(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $s(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new To(s._firestore,s._userDataWriter,l.doc.key,l.doc,new $s(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:fR(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new te(F.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function fR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
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
 */function dR(t){t=Rr(t,We);const e=Rr(t.firestore,Ia);return Gb(ou(e),t._key).then(n=>mR(e,t,n))}ns._jsonSchemaVersion="firestore/querySnapshot/1.0",ns._jsonSchema={type:qe("string",ns._jsonSchemaVersion),bundleSource:qe("string","QuerySnapshot"),bundleName:qe("string"),bundle:qe("string")};class n_ extends uR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ot(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new We(this.firestore,null,n)}}function pR(t){t=Rr(t,Ta);const e=Rr(t.firestore,Ia),n=ou(e),r=new n_(e);return cR(t._query),Qb(n,t._query).then(s=>new ns(e,r,t,s))}function r_(t,e,n){t=Rr(t,We);const r=Rr(t.firestore,Ia),s=hR(t.converter,e);return gR(r,[sR(rR(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function gR(t,e){return function(r,s){const i=new En;return r.asyncQueue.enqueueAndForget(async()=>Mb(await Kb(r),s,i)),i.promise}(ou(t),e)}function mR(t,e,n){const r=n.docs.get(e._key),s=new n_(t);return new Tr(t,s,e._key,r,new $s(n.hasPendingWrites,n.fromCache),e.converter)}function s_(){return new uu("serverTimestamp")}(function(e,n=!0){(function(s){_s=s})(gs),is(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ia(new rA(r.getProvider("auth-internal")),new oA(a,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new te(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new pi(h.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Jn(hf,ff,e),Jn(hf,ff,"esm2017")})();/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const qr=typeof document<"u";function i_(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function _R(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&i_(t.default)}const we=Object.assign;function ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=zt(s)?s.map(t):t(s)}return n}const ni=()=>{},zt=Array.isArray,o_=/#/g,yR=/&/g,vR=/\//g,ER=/=/g,TR=/\?/g,a_=/\+/g,IR=/%5B/g,wR=/%5D/g,l_=/%5E/g,AR=/%60/g,c_=/%7B/g,bR=/%7C/g,u_=/%7D/g,RR=/%20/g;function hu(t){return encodeURI(""+t).replace(bR,"|").replace(IR,"[").replace(wR,"]")}function SR(t){return hu(t).replace(c_,"{").replace(u_,"}").replace(l_,"^")}function Xl(t){return hu(t).replace(a_,"%2B").replace(RR,"+").replace(o_,"%23").replace(yR,"%26").replace(AR,"`").replace(c_,"{").replace(u_,"}").replace(l_,"^")}function PR(t){return Xl(t).replace(ER,"%3D")}function CR(t){return hu(t).replace(o_,"%23").replace(TR,"%3F")}function kR(t){return t==null?"":CR(t).replace(vR,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const VR=/\/$/,DR=t=>t.replace(VR,"");function cl(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=MR(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:vi(a)}}function OR(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ad(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function NR(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&h_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function h_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!xR(t[n],e[n]))return!1;return!0}function xR(t,e){return zt(t)?ld(t,e):zt(e)?ld(e,t):t===e}function ld(t,e){return zt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function MR(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var ri;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ri||(ri={}));function LR(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),DR(t)}const FR=/^[^#]+#/;function UR(t,e){return t.replace(FR,"#")+e}function BR(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wa=()=>({left:window.scrollX,top:window.scrollY});function jR(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=BR(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const Yl=new Map;function $R(t,e){Yl.set(t,e)}function HR(t){const e=Yl.get(t);return Yl.delete(t),e}let qR=()=>location.protocol+"//"+location.host;function f_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ad(c,"")}return ad(n,t)+r+s}function zR(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const _=f_(t,location),C=n.value,V=e.value;let D=0;if(g){if(n.value=_,e.value=g,a&&a===C){a=null;return}D=V?g.position-V.position:0}else r(_);s.forEach($=>{$(n.value,C,{delta:D,type:Ei.pop,direction:D?D>0?ri.forward:ri.back:ri.unknown})})};function c(){a=n.value}function h(g){s.push(g);const _=()=>{const C=s.indexOf(g);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(we({},g.state,{scroll:wa()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function ud(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wa():null}}function WR(t){const{history:e,location:n}=window,r={value:f_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:qR()+t+c;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function a(c,h){const f=we({},e.state,ud(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,h){const f=we({},s.value,e.state,{forward:c,scroll:wa()});i(f.current,f,!0);const p=we({},ud(r.value,c,null),{position:f.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function KR(t){t=LR(t);const e=WR(t),n=zR(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:UR.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function GR(t){return typeof t=="string"||t&&typeof t=="object"}function d_(t){return typeof t=="string"||typeof t=="symbol"}const p_=Symbol("");var hd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(hd||(hd={}));function ds(t,e){return we(new Error,{type:t,[p_]:!0},e)}function dn(t,e){return t instanceof Error&&p_ in t&&(e==null||!!(t.type&e))}const fd="[^/]+?",QR={sensitive:!1,strict:!1,start:!0,end:!0},JR=/[.+*?^${}()[\]/\\]/g;function XR(t,e){const n=we({},QR,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(JR,"\\$&"),_+=40;else if(g.type===1){const{value:C,repeatable:V,optional:D,regexp:$}=g;i.push({name:C,repeatable:V,optional:D});const U=$||fd;if(U!==fd){_+=10;try{new RegExp(`(${U})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${C}" (${U}): `+q.message)}}let j=V?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=D&&h.length<2?`(?:/${j})`:"/"+j),D&&(j+="?"),s+=j,_+=20,D&&(_+=-8),V&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const f=h.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",C=i[g-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function c(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:C,repeatable:V,optional:D}=_,$=C in h?h[C]:"";if(zt($)&&!V)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const U=zt($)?$.join("/"):$;if(!U)if(D)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=U}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function YR(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function g_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=YR(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(dd(r))return 1;if(dd(s))return-1}return s.length-r.length}function dd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ZR={type:0,value:""},eS=/[a-zA-Z0-9_]/;function tS(t){if(!t)return[[]];if(t==="/")return[[ZR]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${h}": ${_}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:eS.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function nS(t,e,n){const r=XR(tS(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function rS(t,e){const n=[],r=new Map;e=_d({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const C=!_,V=gd(p);V.aliasOf=_&&_.record;const D=_d(e,p),$=[V];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const Q of q)$.push(gd(we({},V,{components:_?_.record.components:V.components,path:Q,aliasOf:_?_.record:V})))}let U,j;for(const q of $){const{path:Q}=q;if(g&&Q[0]!=="/"){const Z=g.record.path,A=Z[Z.length-1]==="/"?"":"/";q.path=g.record.path+(Q&&A+Q)}if(U=nS(q,g,D),_?_.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),C&&p.name&&!md(U)&&a(p.name)),m_(U)&&c(U),V.children){const Z=V.children;for(let A=0;A<Z.length;A++)i(Z[A],U,_&&_.children[A])}_=_||U}return j?()=>{a(j)}:ni}function a(p){if(d_(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=oS(p,n);n.splice(g,0,p),p.record.name&&!md(p)&&r.set(p.record.name,p)}function h(p,g){let _,C={},V,D;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ds(1,{location:p});D=_.record.name,C=we(pd(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&pd(p.params,_.keys.map(j=>j.name))),V=_.stringify(C)}else if(p.path!=null)V=p.path,_=n.find(j=>j.re.test(V)),_&&(C=_.parse(V),D=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw ds(1,{location:p,currentLocation:g});D=_.record.name,C=we({},g.params,p.params),V=_.stringify(C)}const $=[];let U=_;for(;U;)$.unshift(U.record),U=U.parent;return{name:D,path:V,params:C,matched:$,meta:iS($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function pd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function gd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:sS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function sS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function md(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function iS(t){return t.reduce((e,n)=>we(e,n.meta),{})}function _d(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function oS(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;g_(t,e[i])<0?r=i:n=i+1}const s=aS(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function aS(t){let e=t;for(;e=e.parent;)if(m_(e)&&g_(t,e)===0)return e}function m_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function lS(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(a_," "),a=i.indexOf("="),l=vi(a<0?i:i.slice(0,a)),c=a<0?null:vi(i.slice(a+1));if(l in e){let h=e[l];zt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function yd(t){let e="";for(let n in t){const r=t[n];if(n=PR(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(zt(r)?r.map(i=>i&&Xl(i)):[r&&Xl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function cS(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=zt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const uS=Symbol(""),vd=Symbol(""),Aa=Symbol(""),__=Symbol(""),Zl=Symbol("");function Ls(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ds(4,{from:n,to:e})):g instanceof Error?c(g):GR(g)?c(ds(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function ul(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(i_(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Bn(f,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=_R(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Bn(_,n,r,a,l,s)()}))}}return i}function Ed(t){const e=Zt(Aa),n=Zt(__),r=Ut(()=>{const c=Gr(t.to);return e.resolve(c)}),s=Ut(()=>{const{matched:c}=r.value,{length:h}=c,f=c[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(fs.bind(null,f));if(g>-1)return g;const _=Td(c[h-2]);return h>1&&Td(f)===_&&p[p.length-1].path!==_?p.findIndex(fs.bind(null,c[h-2])):g}),i=Ut(()=>s.value>-1&&gS(n.params,r.value.params)),a=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&h_(n.params,r.value.params));function l(c={}){if(pS(c)){const h=e[Gr(t.replace)?"replace":"push"](Gr(t.to)).catch(ni);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function hS(t){return t.length===1?t[0]:t}const fS=np({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Ed,setup(t,{slots:e}){const n=Zo(Ed(t)),{options:r}=Zt(Aa),s=Ut(()=>({[Id(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Id(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&hS(e.default(n));return t.custom?i:kp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),dS=fS;function pS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function gS(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!zt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Td(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Id=(t,e,n)=>t??e??n,mS=np({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Zt(Zl),s=Ut(()=>t.route||r.value),i=Zt(vd,0),a=Ut(()=>{let h=Gr(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),l=Ut(()=>s.value.matched[a.value]);ao(vd,Ut(()=>a.value+1)),ao(uS,l),ao(Zl,s);const c=jn();return lo(()=>[c.value,l.value,t.name],([h,f,p],[g,_,C])=>{f&&(f.instances[p]=h,_&&_!==f&&h&&h===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),h&&f&&(!_||!fs(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(V=>V(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return wd(n.default,{Component:g,route:h});const _=p.props[f],C=_?_===!0?h.params:typeof _=="function"?_(h):_:null,D=kp(g,we({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return wd(n.default,{Component:D,route:h})||D}}});function wd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _S=mS;function yS(t){const e=rS(t.routes,t),n=t.parseQuery||lS,r=t.stringifyQuery||yd,s=t.history,i=Ls(),a=Ls(),l=Ls(),c=wy(Mn);let h=Mn;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ll.bind(null,O=>""+O),p=ll.bind(null,kR),g=ll.bind(null,vi);function _(O,Y){let J,ee;return d_(O)?(J=e.getRecordMatcher(O),ee=Y):ee=O,e.addRoute(ee,J)}function C(O){const Y=e.getRecordMatcher(O);Y&&e.removeRoute(Y)}function V(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function $(O,Y){if(Y=we({},Y||c.value),typeof O=="string"){const S=cl(n,O,Y.path),N=e.resolve({path:S.path},Y),L=s.createHref(S.fullPath);return we(S,N,{params:g(N.params),hash:vi(S.hash),redirectedFrom:void 0,href:L})}let J;if(O.path!=null)J=we({},O,{path:cl(n,O.path,Y.path).path});else{const S=we({},O.params);for(const N in S)S[N]==null&&delete S[N];J=we({},O,{params:p(S)}),Y.params=p(Y.params)}const ee=e.resolve(J,Y),Te=O.hash||"";ee.params=f(g(ee.params));const v=OR(r,we({},O,{hash:SR(Te),path:ee.path})),I=s.createHref(v);return we({fullPath:v,hash:Te,query:r===yd?cS(O.query):O.query||{}},ee,{redirectedFrom:void 0,href:I})}function U(O){return typeof O=="string"?cl(n,O,c.value.path):we({},O)}function j(O,Y){if(h!==O)return ds(8,{from:Y,to:O})}function q(O){return A(O)}function Q(O){return q(we(U(O),{replace:!0}))}function Z(O){const Y=O.matched[O.matched.length-1];if(Y&&Y.redirect){const{redirect:J}=Y;let ee=typeof J=="function"?J(O):J;return typeof ee=="string"&&(ee=ee.includes("?")||ee.includes("#")?ee=U(ee):{path:ee},ee.params={}),we({query:O.query,hash:O.hash,params:ee.path!=null?{}:O.params},ee)}}function A(O,Y){const J=h=$(O),ee=c.value,Te=O.state,v=O.force,I=O.replace===!0,S=Z(J);if(S)return A(we(U(S),{state:typeof S=="object"?we({},Te,S.state):Te,force:v,replace:I}),Y||J);const N=J;N.redirectedFrom=Y;let L;return!v&&NR(r,ee,J)&&(L=ds(16,{to:N,from:ee}),Pt(ee,ee,!0,!1)),(L?Promise.resolve(L):w(N,ee)).catch(x=>dn(x)?dn(x,2)?x:Mt(x):me(x,N,ee)).then(x=>{if(x){if(dn(x,2))return A(we({replace:I},U(x.to),{state:typeof x.to=="object"?we({},Te,x.to.state):Te,force:v}),Y||N)}else x=R(N,ee,!0,I,Te);return b(N,ee,x),x})}function y(O,Y){const J=j(O,Y);return J?Promise.reject(J):Promise.resolve()}function E(O){const Y=kn.values().next().value;return Y&&typeof Y.runWithContext=="function"?Y.runWithContext(O):O()}function w(O,Y){let J;const[ee,Te,v]=vS(O,Y);J=ul(ee.reverse(),"beforeRouteLeave",O,Y);for(const S of ee)S.leaveGuards.forEach(N=>{J.push(Bn(N,O,Y))});const I=y.bind(null,O,Y);return J.push(I),vt(J).then(()=>{J=[];for(const S of i.list())J.push(Bn(S,O,Y));return J.push(I),vt(J)}).then(()=>{J=ul(Te,"beforeRouteUpdate",O,Y);for(const S of Te)S.updateGuards.forEach(N=>{J.push(Bn(N,O,Y))});return J.push(I),vt(J)}).then(()=>{J=[];for(const S of v)if(S.beforeEnter)if(zt(S.beforeEnter))for(const N of S.beforeEnter)J.push(Bn(N,O,Y));else J.push(Bn(S.beforeEnter,O,Y));return J.push(I),vt(J)}).then(()=>(O.matched.forEach(S=>S.enterCallbacks={}),J=ul(v,"beforeRouteEnter",O,Y,E),J.push(I),vt(J))).then(()=>{J=[];for(const S of a.list())J.push(Bn(S,O,Y));return J.push(I),vt(J)}).catch(S=>dn(S,8)?S:Promise.reject(S))}function b(O,Y,J){l.list().forEach(ee=>E(()=>ee(O,Y,J)))}function R(O,Y,J,ee,Te){const v=j(O,Y);if(v)return v;const I=Y===Mn,S=qr?history.state:{};J&&(ee||I?s.replace(O.fullPath,we({scroll:I&&S&&S.scroll},Te)):s.push(O.fullPath,Te)),c.value=O,Pt(O,Y,J,I),Mt()}let T;function Ue(){T||(T=s.listen((O,Y,J)=>{if(!Wt.listening)return;const ee=$(O),Te=Z(ee);if(Te){A(we(Te,{replace:!0,force:!0}),ee).catch(ni);return}h=ee;const v=c.value;qr&&$R(cd(v.fullPath,J.delta),wa()),w(ee,v).catch(I=>dn(I,12)?I:dn(I,2)?(A(we(U(I.to),{force:!0}),ee).then(S=>{dn(S,20)&&!J.delta&&J.type===Ei.pop&&s.go(-1,!1)}).catch(ni),Promise.reject()):(J.delta&&s.go(-J.delta,!1),me(I,ee,v))).then(I=>{I=I||R(ee,v,!1),I&&(J.delta&&!dn(I,8)?s.go(-J.delta,!1):J.type===Ei.pop&&dn(I,20)&&s.go(-1,!1)),b(ee,v,I)}).catch(ni)}))}let Qe=Ls(),ke=Ls(),ge;function me(O,Y,J){Mt(O);const ee=ke.list();return ee.length?ee.forEach(Te=>Te(O,Y,J)):console.error(O),Promise.reject(O)}function At(){return ge&&c.value!==Mn?Promise.resolve():new Promise((O,Y)=>{Qe.add([O,Y])})}function Mt(O){return ge||(ge=!O,Ue(),Qe.list().forEach(([Y,J])=>O?J(O):Y()),Qe.reset()),O}function Pt(O,Y,J,ee){const{scrollBehavior:Te}=t;if(!qr||!Te)return Promise.resolve();const v=!J&&HR(cd(O.fullPath,0))||(ee||!J)&&history.state&&history.state.scroll||null;return Xd().then(()=>Te(O,Y,v)).then(I=>I&&jR(I)).catch(I=>me(I,O,Y))}const Me=O=>s.go(O);let Le;const kn=new Set,Wt={currentRoute:c,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:V,resolve:$,options:t,push:q,replace:Q,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:ke.add,isReady:At,install(O){const Y=this;O.component("RouterLink",dS),O.component("RouterView",_S),O.config.globalProperties.$router=Y,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Gr(c)}),qr&&!Le&&c.value===Mn&&(Le=!0,q(s.location).catch(Te=>{}));const J={};for(const Te in Mn)Object.defineProperty(J,Te,{get:()=>c.value[Te],enumerable:!0});O.provide(Aa,Y),O.provide(__,Wd(J)),O.provide(Zl,c);const ee=O.unmount;kn.add(O),O.unmount=function(){kn.delete(O),kn.size<1&&(h=Mn,T&&T(),T=null,c.value=Mn,Le=!1,ge=!1),ee()}}};function vt(O){return O.reduce((Y,J)=>Y.then(()=>E(J)),Promise.resolve())}return Wt}function vS(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>fs(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>fs(h,c))||s.push(c))}return[n,r,s]}function y_(){return Zt(Aa)}const ES={class:"p-4"},TS={__name:"LoginGoogle",setup(t){const e=y_();async function n(){const r=new _n;try{await UI(Ti,dg);const i=(await lw(Ti,r)).user,a=Km(du,"usuarios",i.uid);(await dR(a)).exists()||await r_(a,{nombre:i.displayName,email:i.email,telefono:i.phoneNumber??"",fotoPerfil:i.photoURL,fechaRegistro:s_(),rol:"jugador",activo:!1}),e.push("/")}catch(s){alert("Error al iniciar sesión: "+s.message)}}return(r,s)=>(Vt(),Xt("div",ES,[Se("button",{onClick:n,class:"bg-red-500 text-white px-4 py-2 rounded"}," Iniciar sesión con Google ")]))}},fu=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},IS={__name:"App",setup(t){return(e,n)=>{const r=Wy("router-view");return Vt(),Vv(Av,null,{fallback:yl(()=>n[0]||(n[0]=[Se("div",null,"Cargando...",-1)])),default:yl(()=>[ft(r)]),_:1})}}},wS=fu(IS,[["__scopeId","data-v-7b44d3e1"]]),AS={class:"p-4 max-w-md mx-auto"},bS={__name:"CompletarPerfil",setup(t){const e=jn(""),n=jn(""),r=jn(""),s=jn(""),i=jn(""),a=y_();async function l(){const c=Ti.currentUser;if(!e.value||!n.value||!r.value){alert("Por favor, completá los campos requeridos");return}await r_(Km(du,"usuarios",c.uid),{nombre:e.value,apellido:n.value,apodo:r.value,telefono:s.value,edad:i.value,email:c.email,fotoPerfil:c.photoURL,fechaRegistro:s_(),rol:"jugador",activo:!0}),alert("Perfil guardado correctamente"),a.push("/inicio")}return(c,h)=>(Vt(),Xt("div",AS,[h[5]||(h[5]=Se("h2",{class:"text-xl font-bold mb-4"},"Completa tu perfil",-1)),xs(Se("input",{"onUpdate:modelValue":h[0]||(h[0]=f=>e.value=f),placeholder:"Nombre",class:"input",required:""},null,512),[[Ms,e.value]]),xs(Se("input",{"onUpdate:modelValue":h[1]||(h[1]=f=>n.value=f),placeholder:"Apellido",class:"input",required:""},null,512),[[Ms,n.value]]),xs(Se("input",{"onUpdate:modelValue":h[2]||(h[2]=f=>r.value=f),placeholder:"Apodo (username)",class:"input",required:""},null,512),[[Ms,r.value]]),xs(Se("input",{"onUpdate:modelValue":h[3]||(h[3]=f=>s.value=f),placeholder:"Teléfono (opcional)",class:"input"},null,512),[[Ms,s.value]]),xs(Se("input",{"onUpdate:modelValue":h[4]||(h[4]=f=>i.value=f),type:"number",placeholder:"Edad (opcional)",class:"input"},null,512),[[Ms,i.value]]),Se("button",{onClick:l,class:"btn mt-4"},"Guardar")]))}},RS=fu(bS,[["__scopeId","data-v-1c0efa36"]]),SS={key:0,class:"tabla-partidos"},PS={key:1},CS={__name:"ListaPartidos",setup(t){const e=jn([]);return gc(async()=>{const n=await pR(Xb(du,"partidos"));e.value=n.docs.map(r=>({id:r.id,...r.data()}))}),(n,r)=>(Vt(),Xt("div",null,[r[1]||(r[1]=Se("h2",null,"Lista de Partidos",-1)),e.value.length?(Vt(),Xt("table",SS,[r[0]||(r[0]=Se("thead",null,[Se("tr",null,[Se("th",null,"Ciudad"),Se("th",null,"Dirección"),Se("th",null,"Fecha del Turno"),Se("th",null,"Provincia"),Se("th",null,"País"),Se("th",null,"¿Tiene Suplentes?")])],-1)),Se("tbody",null,[(Vt(!0),Xt(Jt,null,Qy(e.value,s=>(Vt(),Xt("tr",{key:s.id},[Se("td",null,Ln(s.Ciudad),1),Se("td",null,Ln(s.Direccion),1),Se("td",null,Ln(s.FechaTurno),1),Se("td",null,Ln(s.Provincia),1),Se("td",null,Ln(s.Pais),1),Se("td",null,Ln(s.TieneSuplentes?"Sí":"No"),1)]))),128))])])):(Vt(),Xt("p",PS,"No hay partidos para mostrar."))]))}},kS=fu(CS,[["__scopeId","data-v-8b348657"]]),VS={class:"p-4"},DS={key:0},OS={key:1},Ad={__name:"HomeView",setup(t){const e=jn(null);gc(()=>{$I(Ti,r=>{e.value=r})});function n(){HI(Ti).then(()=>{e.value=null,localStorage.removeItem("usuario")})}return(r,s)=>(Vt(),Xt("div",VS,[e.value?(Vt(),Xt("div",DS,[Se("p",null,"Bienvenido, "+Ln(e.value.displayName),1),ft(kS),Se("button",{onClick:n,class:"bg-gray-500 text-white px-4 py-2 rounded mt-4"},"Cerrar sesión")])):(Vt(),Xt("div",OS,[ft(TS)]))]))}},NS=[{path:"/",component:Ad},{path:"/completar-perfil",component:RS},{path:"/hayfulbito",component:Ad}],xS=yS({history:KR(),routes:NS});var MS="firebase",LS="11.10.0";/**
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
 */Jn(MS,LS,"app");console.log("AIzaSyDyVHdyeRnZvjku7P1AIKL9lV_b7D0E1z8");const FS={projectId:"hayfulbito-a200a",storageBucket:"hayfulbito-a200a.firebasestorage.app",messagingSenderId:"138672255337",appId:"1:138672255337:web:f8dddc55e0048cc1638df8",measurementId:"G-LY8KKR468W",apiKey:"AIzaSyDyVHdyeRnZvjku7P1AIKL9lV_b7D0E1z8",authDomain:"hayfulbito-a200a.firebaseapp.com"},v_=$p(FS),Ti=Zw(v_),du=Yb(v_),E_=pE(wS);E_.use(xS);E_.mount("#app");
