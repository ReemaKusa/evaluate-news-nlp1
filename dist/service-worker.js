if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,t)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const f=e=>n(e,s),c={module:{uri:s},exports:o,require:f};i[s]=Promise.all(r.map((e=>c[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-1c3383c2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundle.js",revision:"63d37697538fbcecde92f2fedf31651c"},{url:"bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"index.html",revision:"b3f1affa8c8f517edcee9f8472817d92"},{url:"main.css",revision:"69cf168b4f862475b848170c91500bcb"}],{})}));
