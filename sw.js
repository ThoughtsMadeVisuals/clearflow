// Bump VERSION whenever the app files change so installed copies update.
const VERSION = "clearflow-v9";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png", "icon-512-maskable.png"];
self.addEventListener("install", e => e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting())));
self.addEventListener("activate", e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())));
// Network first for the page (so updates show up), cache first for everything else; falls back to cache offline.
self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET" || new URL(r.url).origin !== location.origin) return;
  if (r.mode === "navigate") {
    e.respondWith(fetch(r).then(res => { const c = res.clone(); caches.open(VERSION).then(x => x.put("index.html", c)); return res; }).catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(r).then(hit => hit || fetch(r)));
});
