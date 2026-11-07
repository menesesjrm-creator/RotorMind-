/* RotorMind 4.0 beta: application shell + explicit vendor cache; never store manuals or AI requests. */
const CACHE='rotormind-shell-v4-5beta-1';
const VENDOR='rotormind-vendor-v4-5beta-1';
const SHELL=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
const VENDOR_URLS=[
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/marked/9.1.6/marked.min.js',
'https://cdnjs.cloudflare.com/ajax/libs/jspdf/4.2.1/jspdf.umd.min.js',
'https://cdn.jsdelivr.net/npm/pptxgenjs@3.12.0/dist/pptxgen.bundle.js'
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(Promise.all([caches.keys().then(keys=>Promise.all(keys.filter(k=>(k.startsWith('rotormind-shell-')&&k!==CACHE)||(k.startsWith('rotormind-vendor-')&&k!==VENDOR)).map(k=>caches.delete(k)))),self.clients.claim()]))});
self.addEventListener('message',e=>{
 if(e.data?.type!=='RM_PREPARE_VENDOR')return;
 e.waitUntil((async()=>{const cache=await caches.open(VENDOR);let done=0,failed=0;
 for(const url of VENDOR_URLS){try{const res=await fetch(url,{mode:'cors',cache:'reload'});if(!res.ok)throw new Error(String(res.status));await cache.put(url,res.clone())}catch(err){failed++}done++;e.ports[0]?.postMessage({type:'progress',done,total:VENDOR_URLS.length,failed})}
 e.ports[0]?.postMessage({type:'complete',done,failed});})());
});
self.addEventListener('fetch',e=>{
 const r=e.request;if(r.method!=='GET')return;
 const u=new URL(r.url);
 if(VENDOR_URLS.includes(u.href)){e.respondWith(caches.open(VENDOR).then(async c=>(await c.match(r))||fetch(r)));return;}
 if(u.origin!==self.location.origin)return;
 if(/\.(pdf|zip|json)$/i.test(u.pathname) && !u.pathname.endsWith('/manifest.webmanifest'))return;
 if(r.mode==='navigate'){e.respondWith(fetch(r).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put(new Request(new URL('./index.html',self.registration.scope)),copy))}return res}).catch(()=>caches.match('./index.html')));return;}
 e.respondWith(caches.match(r).then(c=>c||fetch(r)));
});
