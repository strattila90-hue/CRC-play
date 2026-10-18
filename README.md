# CRC PLAY

Magyar Honvédség alapú Crowd and Riot Control (CRC) játék – statikus PWA.

## Funkciók
- 10 fős MH raj (PK, mesterlövész, 4 gépfegyveres, 2 sörétes, 2 porraloltós)
- Formációk: doboz, ék, oszlop, vonal, nyitott, zárt
- Parancsok: állj, előre, pajzsot fel/le, gázálarcot fel/le, fegyver!, koktél, jármű, vízágyú
- GIDRAN támogató jármű
- Firebase ranglista
- PWA – iOS és Android home screenre tehető

## Gyors indítás
```bash
npx serve .
```
vagy egyszerűen nyisd meg az `index.html`-t böngészőben.

## Deploy Vercelre
1. Pushold a repót GitHubra
2. Importáld Vercelre
3. Automatikusan deployolódik (statikus)

## Firebase beállítás
1. Hozz létre egy Firebase projektet
2. Engedélyezd a Firestore-t
3. Másold a configot a `firebase-config.js` fájlba
4. Alkalmazd a `firestore.rules` szabályokat

## Fájlstruktúra
```
├── index.html
├── manifest.webmanifest
├── sw.js
├── vercel.json
├── firebase-config.js
├── firestore.rules
├── package.json
├── README.md
├── icons/
│   ├── ikon-192.png
│   ├── ikon-512.png
│   ├── ikon-maszkolható.png
│   └── apple-touch-icon.png
└── audio/
    └── (opcionális hangok)
```

## Megosztás
A Vercel linket bárki megnyithatja mobil böngészőben, és hozzáadhatja a kezdőképernyőhöz.
