/* ============================================================
   UNICO FILE DA MODIFICARE
   ============================================================

   1. URL_SCRIPT
      L'indirizzo che Google ti ha dato quando hai pubblicato lo
      script (Deploy > Nuovo deployment > App web). Finisce con /exec

   2. CODICE_APP
      Deve essere identico a CODICE_APP scritto dentro lo script Google.

   Attenzione: questo file e' pubblico su GitHub, quindi qui dentro
   NON va mai il codice dell'ufficio, solo quello della app.
   ============================================================ */

window.CONFIG = {

  URL_SCRIPT: "https://script.google.com/macros/s/AKfycbw4SFzjk0XuJW3z9Idb7bqvORMPYLaamz-zLEBdRofUwQdFh0sSkj2GzLGQohIwqVM/exec",

  CODICE_APP: "mezzi-app-202612",

  /* Elenco usato solo al primo avvio, prima che la app riesca a
     collegarsi a Google. Dopo viene sempre aggiornato dal foglio. */
  VERIFICHE_INIZIALI: [
    "Usura pneumatici",
    "Impianto frenante",
    "Apparato motore",
    "Impianto elettrico",
    "Organi di sicurezza",
    "Livelli e trasmissione",
    "Impianto di travaso",
    "Materiale e DPI in dotazione",
    "Documenti di trasporto",
    "Documenti automezzo",
    "Pulizia abitacolo"
  ]
};
