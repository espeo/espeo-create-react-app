const filesToCache = [
    '/',
    './index.html',
    './offline.html',
    './404.html',
    './images/favicon.ico'
];

const staticCacheName = 'static-cache-v1';

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCacheName)
        .then(cache => {
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request)
        .then(response => {
            if (response.status === 404) {
                return caches.match('./404.html');
            }
            if (response.status === 200) {
                console.log('jest net');
                
                return caches.open(staticCacheName)
                    .then(cache => {
                        cache.put(event.request, response.clone());
                        return response;
                    });
            }

        }).catch(error => {
            return caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return caches.match('./offline.html');
                })
        })
    )
});

self.addEventListener('activate', () => {
    console.log('Activating new service worker...', navigator);
});
