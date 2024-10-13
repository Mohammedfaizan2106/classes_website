'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "8935fbde17758897d803fbd211cab3ac",
"assets/AssetManifest.bin.json": "ed61fd0fd470a36bb970c1cecb2245f0",
"assets/AssetManifest.json": "0ad86997b6903662d6d881c05ef90d92",
"assets/assets/android-studio.svg": "1339bdf36c3558e8a461df1d244596de",
"assets/assets/android.png": "135a266407a12aa050b20488296680b1",
"assets/assets/Bootstrap.png": "a76e120d304dd61778b15d7ffb0619ca",
"assets/assets/bootstrap.svg": "a11ab974a21e67a69897d59ab066f662",
"assets/assets/C++.png": "614e81bd92afc62be8127beac5e1b9af",
"assets/assets/c++.svg": "2261563138cfcd9f064e6eefeb25fed4",
"assets/assets/c.png": "50f78edd7e6972484095d0b8f263d237",
"assets/assets/c.svg": "829ef7097e66b66ea40fab691c5a9eb7",
"assets/assets/coder-boy.jpeg": "f89d5afcb8b062d891ec152fb69377f1",
"assets/assets/coding.gif": "d87f0a1c6d9d02153c5a72d3c3e49efd",
"assets/assets/css.svg": "87c75c81cf8b58c3bf8b9ef8a882b44a",
"assets/assets/css3.png": "f42ad99637cbb33d1ba3424e7b03c55f",
"assets/assets/dart.svg": "c253911f8cb353c69ffcb6992f997e01",
"assets/assets/firebase.svg": "45c1fbd5168c2da003f909342e417785",
"assets/assets/flutter.png": "205b6fd8dff26951c5676e94ce14e8be",
"assets/assets/flutter.svg": "97307d22b63a6e4dc79191c33957de10",
"assets/assets/git.png": "50c8f18499463baa2a8371cc249d1e9d",
"assets/assets/git.svg": "34c2f82d7698dd780944241fdd15c708",
"assets/assets/GitHub.png": "7ea67df8f3ea706fdc9b493725fa0835",
"assets/assets/github.svg": "23fdd6edf9fe78d015c22515f7f61a18",
"assets/assets/html.svg": "b80142acd998a99c67750b1f0e6f23c2",
"assets/assets/HTML5.png": "25dbcf9f4fb4f7fd19144ea2bdcedb88",
"assets/assets/java.png": "ee486b5ef2a5123cec87654ab1cfdc00",
"assets/assets/java.svg": "9c20efb28a4b24b9b4e65514be13f296",
"assets/assets/JavaScript.png": "659695f1fd3eb08d65e9d71d029b84ea",
"assets/assets/javascript.svg": "fb2ab6b8e1e8fdd56a60329af3889514",
"assets/assets/Mongodb.png": "c3d5f6e131e3a3e029359c66e9a3a890",
"assets/assets/mongodb.svg": "27ed73fc20c1212452580906e8f16cee",
"assets/assets/MySQL.png": "754e01e49836a295574661a188161775",
"assets/assets/mysql.svg": "0aefe643a5dfb611a29eda20e216ce3a",
"assets/assets/node.png": "99d580e2755af3d2ee4c763d408f6359",
"assets/assets/nodejs.svg": "d7cc0dd6334637bac7d6a2b80e334ef2",
"assets/assets/Python.png": "06e994049e022c3ad181447e0918b715",
"assets/assets/python.svg": "d424b39372d99aaa850612002ed4a6e1",
"assets/assets/react-js.png": "e1eb58566a28676adf3ee7419956aef1",
"assets/assets/react-native.png": "92595f73451407a8c2aaa6833332abc2",
"assets/assets/react.svg": "434ad5e648ce3fd7a3d2cecb254babe1",
"assets/assets/sourcetree.jpg": "ef44df51f26d85eede9f25e0e5d66460",
"assets/assets/sourcetree.svg": "f23ff0ba17e002bbe800399535f7727d",
"assets/assets/tailwind-css.svg": "94ebbd9a368f3b973f99d3fd82776363",
"assets/assets/tailwind.png": "abac7c0c4c394af26722b98e5a9fb6f9",
"assets/assets/vscode.png": "d917b9a915952e3648cd8350d80b3b07",
"assets/assets/vscode.svg": "734bcc0f6ddb6184960e354b0cece3fc",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "209c93f33a8f6ef88d38a347705f9ee7",
"assets/NOTICES": "e0fc3cd78089984377bae7ace5e064c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "8a1e28432fb5eae0806c77f9d0d1ad67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "03eef0b647c08ee0ab7968d62fea6a79",
"/": "03eef0b647c08ee0ab7968d62fea6a79",
"main.dart.js": "f9a5efcb8a546227aee2bfd8ed5208d5",
"manifest.json": "749030bc052bb8590d0f0a531a82040b",
"version.json": "ec1420f08d372dccf28e41dd937a5806"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
