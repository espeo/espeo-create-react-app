const filesToCache = [
    './index.html',
    './offline.html',
    './404.html'
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
        caches.match(event.request)
        .then(response => {
            if (!response) {
                fetch(event.request)
                    .then(response => {
                        if (response) {
                            if (response.status === 404) {
                                return caches.match('/404.html');
                            }
                            return caches.open(staticCacheName)
                                .then(cache => {
                                    cache.put(event.request.url, response);
                                    return response;
                                });
                        }
                    }).catch(error => {
                        console.log('fetch error: ', error);
                        return caches.match('/offline.html');
                    });
            }
            return response;
        }).catch(error => {
            console.log('match error: ', error);
            return caches.match('/offline.html');
        }))
});

self.addEventListener('activate', () => {
    console.log('Activating new service worker...', navigator);
});