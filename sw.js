const CACHE = 'crc-play-v2';
const FILES = ['/', '/index.html', '/manifest.webmanifest',
  '/icons/ikon-192.png', '/icons/ikon-512.png', '/icons/ikon-maszkolhato.png', '/icons/apple-touch-icon.png',
  '/images/mh.png', '/images/mhs.png', '/images/tun0.png', '/images/tun1.png', '/images/tun2.png', '/images/gidran.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.allSettled(FILES.map(f => c.add(f)))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET' || new URL(r.url).origin !== location.origin) return;
  if (r.mode === 'navigate') {
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(CACHE).then(c => c.put('/index.html', cp)); return res; })
      .catch(() => caches.match('/index.html')));
    return;
  }
  e.respondWith(caches.match(r).then(c => c || fetch(r).then(res => {
    if (res.ok) { const cp = res.clone(); caches.open(CACHE).then(c => c.put(r, cp)); }
    return res;
  })));
});
