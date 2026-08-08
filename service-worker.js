const CACHE_NAME = "studyhub-v1";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./manifest.json",

    "./css/style.css",
    "./js/script.js",

    "./pages/boki.html",
    "./pages/econometrics.html",
    "./pages/java.html",
    "./pages/news.html",
    "./pages/lecture.html"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(FILES_TO_CACHE);
            })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request);
            })
    );
});