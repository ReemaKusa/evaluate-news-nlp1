if(!self.define){let e,t={};const i=(i,n)=>(i=new URL(i+".js",n).href,t[i]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=t,document.head.appendChild(e)}else e=i,importScripts(i),t()})).then((()=>{let e=t[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(t[o])return;let s={};const d=e=>i(e,o),f={module:{uri:o},exports:s,require:d};t[o]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(r(...e),s)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.js",revision:"af77becab3db3b22040e529009f073f6"},{url:"bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"index.html",revision:"44d415fdbe2d71782020921292e9167d"}],{})}));
