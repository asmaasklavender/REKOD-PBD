const CACHE_NAME = "pbd-tracker-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Strategi: cache-first untuk shell aplikasi, network-first untuk permintaan lain (cth. CDN, Google API)
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Jangan cache permintaan ke Google APIs (perlu sentiasa segar / memerlukan token semasa)
  if (url.hostname.includes("googleapis.com") || url.hostname.includes("accounts.google.com")) {
    return;
  }

  if (url.origin === self.location.origin && APP_SHELL.some((p) => url.pathname.endsWith(p.replace("./", "")))) {
    event.respondWith(
      caches.match(req).then((cached) => cached || fetch(req))
    );
    return;
  }

  event.respondWith(
    fetch(req)
      .then((res) => {
        const resClone = res.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req))
  );
});
