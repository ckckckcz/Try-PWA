const CACHE_NAME = "pwa-cache-v1";
const urlsToCache = ["/", "/index.html", "/style.css"];

// Install service worker dan cache file
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch dan berikan file yang di-cache saat offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
