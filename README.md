# Checklist giornaliera automezzi

App di verifica giornaliera degli automezzi: 11 controlli con esito
TUTTO OK / SEGNALAZIONE ANOMALIA e campo libero per descrivere il problema.

Si installa sul telefono dalla schermata Home del browser e funziona anche
senza campo: gli invii restano in coda e partono da soli al ritorno della linea.

## Configurazione

Compilare `config.js` con l'indirizzo dello script Google (finisce con `/exec`)
e il codice app.

## Dopo ogni modifica

Aumentare il numero di versione in `sw.js`, altrimenti i telefoni continuano a
usare la copia in memoria.
