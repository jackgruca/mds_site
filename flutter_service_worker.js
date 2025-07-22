'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"404.html": "48654c17d49ed601032730a3b2733231",
"assets/AssetManifest.bin": "5befe840061856f196e0ec5944e474f7",
"assets/AssetManifest.bin.json": "7e53dec57a531335e32fc5d712bb4f78",
"assets/AssetManifest.json": "f8262251ad085285478c9ab22e993144",
"assets/assets/2024/available_players.csv": "fe5fbd913d297a55fbb607740b452c32",
"assets/assets/2024/draft_order.csv": "8ce904bd2c7f7e30aef984b2cadd4467",
"assets/assets/2024/team_needs.csv": "b5ae57ecc4e1a22f98521f28934fc348",
"assets/assets/2025/2025_FF_preds_FF_WR_2025_v2.csv": "ecbb4a10499d21d3566f05dc6c4a84b1",
"assets/assets/2025/available_players.csv": "3f1e596ab74cbb485fdfc2babdbf9ce4",
"assets/assets/2025/draft_order.csv": "323441d0232b828964ad164727799814",
"assets/assets/2025/FF_ranks.csv": "b68482cb01b1cf76f7bcea39863bcff0",
"assets/assets/2025/FF_WR_2025_v2.csv": "7a220afb9eae4ff9e53eb45233e7e494",
"assets/assets/2025/live_picks.csv": "cb849b2440e7f400903fe994fe5bffce",
"assets/assets/2025/player_descriptions.csv": "54990f243e5dad8d76217558204321d9",
"assets/assets/2025/team_needs.csv": "88e34b057257235013329bf87f3d7644",
"assets/assets/2026/available_players.csv": "6832740539febc66ba9e426f73abb86c",
"assets/assets/2026/draft_order.csv": "50e330e7a8e219bdce7c4691c329fb74",
"assets/assets/2026/team_needs.csv": "593f4f689c47798417151fc58af0a48f",
"assets/assets/blog_posts.json": "5819af84c4791058af96985652943b34",
"assets/assets/draft_value_chart.csv": "1032d279d091aeef94a13f1b628471b6",
"assets/assets/images/data/moneyBall.jpeg": "ce8c2eeda5d84e351971b17f01560404",
"assets/assets/images/FF/jamarr.png": "77c782fbe39ad8a82a83a67096af0626",
"assets/assets/images/FF/josh.png": "285fabd812284c8e104e748bfc0b4324",
"assets/assets/images/FF/kittle.png": "b53c72e8c0a2e33666104733ae056dda",
"assets/assets/images/FF/saquon.png": "5654869e27831024b662f97af871f005",
"assets/assets/images/FF/shiva.png": "a5a5e9ee269ba3debb8707f7b309ba44",
"assets/assets/images/GM/big%2520board.png": "993d8f96a88a4a61dd63caf06275764e",
"assets/assets/images/GM/PIT%2520Draft.png": "5958732db4e0a123a6d2441e0e0dab8d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "796ef00665a0bf76ccca402b736fbf43",
"assets/NOTICES": "5f94c747ea1f91c802ee0eeb806500d5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a34bcc69b18ce5a8d477beb754e48ece",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6baa4cf828c8f49214f8fb15907c630a",
"/": "6baa4cf828c8f49214f8fb15907c630a",
"main.dart.js": "5820942c451e2bb460f1e046e40e664c",
"manifest.json": "448a107a33657612e88131bb10bd3d3f",
"robots.txt": "950dfe933024964b4f16e9764e1ad216",
"sitemap.xml": "e9f2f9b1dc4bbe76549158c95f85cf12",
"version.json": "a7d279fdf72a0a2396edc1aa45a2bb25"};
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
