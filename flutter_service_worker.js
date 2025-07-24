'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6f5ff38528f8659cdc1bcf524014e5bf",
"version.json": "a7d279fdf72a0a2396edc1aa45a2bb25",
"index.html": "1cf9447aa139bf4a5637a4574fcfc898",
"/": "1cf9447aa139bf4a5637a4574fcfc898",
"CNAME": "ccd0201e4479d6327533cebe0e40fbfb",
"main.dart.js": "c5b1396ea99c41a0dc7744ed9cb2a83f",
"404.html": "6e18cc5ef96777f78a2a5ae6b64f41d1",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3ffb99c6eb0de52896f3be7f75f329db",
"sitemap.xml": "80093dc642c75a22039be16a9125b72a",
"robots.txt": "356ad67549ad82d022cb4a59aef38ab6",
"assets/AssetManifest.json": "f8262251ad085285478c9ab22e993144",
"assets/NOTICES": "ce1f6334504d485220e4260fd02d8808",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "7e53dec57a531335e32fc5d712bb4f78",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "5befe840061856f196e0ec5944e474f7",
"assets/fonts/MaterialIcons-Regular.otf": "48a9be8071d4e0d4a9edf575f145bbf7",
"assets/assets/2025/player_descriptions.csv": "54990f243e5dad8d76217558204321d9",
"assets/assets/2025/available_players.csv": "eac82c07c9b8926c755e450e3325c662",
"assets/assets/2025/2025_FF_preds_FF_WR_2025_v2.csv": "6b726a40481b4e6a5a6f55f36f28a4a8",
"assets/assets/2025/FF_ranks.csv": "b68482cb01b1cf76f7bcea39863bcff0",
"assets/assets/2025/team_needs.csv": "395b55d15fadeb1df2e8d718a36741d6",
"assets/assets/2025/live_picks.csv": "c386e00eb67f60a22e0cc5873bd997aa",
"assets/assets/2025/draft_order.csv": "acbe85cd3c6a5f068c8d81f7f571e5cd",
"assets/assets/2025/FF_WR_2025_v2.csv": "7a220afb9eae4ff9e53eb45233e7e494",
"assets/assets/2024/available_players.csv": "9a801b237d2fd1926d29733c5d57f1ee",
"assets/assets/2024/team_needs.csv": "4887cb9e45637441a05c0d2ef84cb3e6",
"assets/assets/2024/draft_order.csv": "8ce904bd2c7f7e30aef984b2cadd4467",
"assets/assets/images/GM/PIT%2520Draft.png": "5958732db4e0a123a6d2441e0e0dab8d",
"assets/assets/images/GM/big%2520board.png": "993d8f96a88a4a61dd63caf06275764e",
"assets/assets/images/FF/jamarr.png": "324bbcac118e1ed8ec9d1f72bec6cb68",
"assets/assets/images/FF/kittle.png": "b53c72e8c0a2e33666104733ae056dda",
"assets/assets/images/FF/saquon.png": "c7fb1ed4ce29df72095a3e1402bdce14",
"assets/assets/images/FF/shiva.png": "a5a5e9ee269ba3debb8707f7b309ba44",
"assets/assets/images/FF/josh.png": "285fabd812284c8e104e748bfc0b4324",
"assets/assets/images/data/moneyBall.jpeg": "ce8c2eeda5d84e351971b17f01560404",
"assets/assets/blog_posts.json": "466f8ed2195b96f890d13b9a990cea45",
"assets/assets/2026/available_players.csv": "375db350616e001603553a4b1c57d942",
"assets/assets/2026/team_needs.csv": "18221822e289e13c1a8cf90fd5377f08",
"assets/assets/2026/draft_order.csv": "40672ab1608b05fc83853666f71a170c",
"assets/assets/draft_value_chart.csv": "1032d279d091aeef94a13f1b628471b6",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
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
