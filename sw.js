/* Service worker: tiene la app funzionante anche senza linea.
   Dopo ogni modifica alla app, cambia il numero di VERSIONE qui sotto:
   i telefoni scaricano la nuova versione al primo avvio utile. */

const VERSIONE = "checklist-v4";
const FILE = ["./", "./index.html", "./config.js", "./manifest.json",
              "./icona-192.png", "./icona-512.png", "./icona-180.png"];

self.addEventListener("install", function (ev) {
  ev.waitUntil(
    caches.open(VERSIONE)
      .then(function (c) { return c.addAll(FILE); })
      .then(function () { return self.skipWaiting(); })
      .catch(function () {})
  );
});

self.addEventListener("activate", function (ev) {
  ev.waitUntil(
    caches.keys()
      .then(function (nomi) {
        return Promise.all(nomi.map(function (n) {
          return n === VERSIONE ? null : caches.delete(n);
        }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (ev) {
  var richiesta = ev.request;

  // Gli invii a Google non passano mai dalla cache.
  if (richiesta.method !== "GET" ||
      richiesta.url.indexOf(self.location.origin) !== 0) {
    return;
  }

  // Rete prima, cache come rete di sicurezza: cosi' gli aggiornamenti
  // arrivano subito ma senza linea la app parte lo stesso.
  ev.respondWith(
    fetch(richiesta)
      .then(function (risposta) {
        var copia = risposta.clone();
        caches.open(VERSIONE).then(function (c) {
          c.put(richiesta, copia).catch(function () {});
        });
        return risposta;
      })
      .catch(function () {
        return caches.match(richiesta).then(function (c) {
          return c || caches.match("./index.html");
        });
      })
  );
});
