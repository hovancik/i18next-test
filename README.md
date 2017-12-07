# i18next tests not working with electron-builder present

## working test

- `git checkout b9cb8b9e267e182b7a316adc3c6b71b886d14b69`
- `rm -rf node_modules/ && rm -rf app/node_modules/ && npm i && npm run test`

```
  Utils
    ✓ formats remaining seconds into correct format
```

## not working test

- `git checkout 794633f86a6488c0a105b928fdd05838742c3368`
- `rm -rf node_modules/ && rm -rf app/node_modules/ && npm i && npm run test`

```
1) Utils
      formats remaining seconds into correct format:
    TypeError: Cannot read property 'should' of undefined
     at Context.<anonymous> (test/utils.js:30:30)
     at test/utils.js:25:9
     at node_modules/i18next/dist/commonjs/i18next.js:195:9
     at done (node_modules/i18next/dist/commonjs/i18next.js:298:21)
     at Object.callback (node_modules/i18next/dist/commonjs/i18next.js:313:9)
     at node_modules/i18next/dist/commonjs/BackendConnector.js:152:13
     at Array.forEach (native)
     at Connector.loaded (node_modules/i18next/dist/commonjs/BackendConnector.js:139:16)
     at node_modules/i18next/dist/commonjs/BackendConnector.js:287:14
     at node_modules/i18next/dist/commonjs/BackendConnector.js:180:7
     at node_modules/i18next-node-fs-backend/lib/index.js:124:9
     at node_modules/i18next-node-fs-backend/lib/index.js:86:9
     at tryToString (fs.js:449:3)
     at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:436:12)

```

diff

```
"scripts": {
+    "postinstall": "electron-builder install-app-deps",
  "test": "mocha test"
},
"devDependencies": {
  "mocha": "^4.0.1",
  "chai": "^4.1.2",
-    "chai-as-promised": "^7.1.1"
+    "chai-as-promised": "^7.1.1",
+    "electron": "^1.7.9",
+    "electron-builder": "^19.43.4"
},
"dependencies": {
  "i18next": "^10.0.7",

```
