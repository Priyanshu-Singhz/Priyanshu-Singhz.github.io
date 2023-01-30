'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "36df8a313cb503798b8e94b40545122e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "70991ab3465e316096f1e130aea25339",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ff10b0e17a098ad8547c58affead4714",
".git/logs/refs/heads/master": "ff10b0e17a098ad8547c58affead4714",
".git/logs/refs/remotes/origin/master": "2f7668ed366c03e8a9bcda3c0e0f6440",
".git/objects/02/46226685450fdd58c580e12929a9a7f544eb76": "6572ec976f310150bf4228c7272df4af",
".git/objects/0b/31c16ef408240f4ecb87b6b433e6f5cbfed6f6": "9f3783873483d3a4ce0fd9f6cf78ed42",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/11/42d6e81ae168b9906e6c89997c817f23ecda67": "debd579957a59e75acf3957aafe6371d",
".git/objects/12/df8daeb3c57ec744e636d65980496ead8c5e41": "4456e5f70babd37a6979a2113a49240b",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/15/e3cd33d86e2b2ad20e762e83eea7df6cd6ca5e": "489d58ccb7f83bc7c683de15db264ffd",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1b/a904ef4bd0aef11e175eb3b10ef5363f5db0c3": "f07652cb6dc7b9aa12ba65abf1e4f721",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/5b7620d12044910a34a6f528bf124313828826": "251e22397e6c959e095ea2e4aa53cb70",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/29/b32753bd8eeeca70c06e5860a05463b0e257ea": "4f8650966ccff59fcd52ec811bb1d8d0",
".git/objects/2b/df0650ef323fb921943387f9ff77e10b85c2c8": "9d205a0876f87213b2e8e114eb65aaa4",
".git/objects/2d/420680d7f2ffe8fcff7ac260ad5a5d71d3cb84": "0fa35fd3f51bcbfe446d55243fffff36",
".git/objects/2f/3276887d8df4dba11370b27b163d77faa633a1": "48ac860537d385bd3298488b8ff52492",
".git/objects/38/f1819537af0ca1774400502bc55646f42916b1": "56bdf2841acb698c463f6cdb79cd93f3",
".git/objects/3b/2405ca1f9814edef69266eb07731f5ec55b6f0": "bbd317028341801cd4b390ac77316160",
".git/objects/40/f27f0b4f5281b873a5e8909d4cbbf9b94876b7": "e16323900224965336e334dcd21fd4d0",
".git/objects/43/f3f2532f5d1a9287f9a1ea5c53aa6c392faf7d": "6d9fb2383ea24f9c5e3301910479e05d",
".git/objects/46/1176676d969e6576ebabaf59f3932b5b085166": "272c5e4a8ea5aa780becb9525b9def98",
".git/objects/47/af86ee13001b47dbc7fd3272d3fb767e478690": "5c1cdb4be8b967ea13aa126deda15cfc",
".git/objects/5a/f8040a3adc260568d7bf55a2df73c2378f3326": "6447dc7a4614b5a5788584b7ff0b69d8",
".git/objects/5f/e5c6913b269d524eb42c1f58ca445aa013a8f7": "11ab728ea4f84f005feb4d2ec2d09bbb",
".git/objects/60/518d295956d9580c0acb7ee5a903b4bdc21250": "22c1d6d01faf7fc1d8fdea62943b78d8",
".git/objects/61/a5b9a11c4d5fa856fcff2bfd45fba686f67ead": "329310ef059f8d0436103fe61c3509e9",
".git/objects/62/b35e68b4d6e212133ba0401cc1dcec0d2f6339": "6a4afc858aa72c6e78797f235449fa5d",
".git/objects/63/8f4e27fa4f9861444acdb591d576eb63bc8c2c": "c0cec6504a70edd830ad3ba323a39000",
".git/objects/6b/5c61ef30f93cd92aef3a9c256cd335f60090d4": "850ea17925a960b83cff48f041110e09",
".git/objects/6e/29bac50a026656bd8902919359a82872d8f99c": "5d4067e36ad31961f667139be6b9fe52",
".git/objects/7a/c7af1d9471773d096ab652712fa198d256b6ec": "75363efe592ecf405ab83a2fc74e7c52",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/84/5f54f5a733faafa8d60b3e80d006e2d460ce20": "1b5f2947e5e54f1106df9c48bf10c6f4",
".git/objects/84/cb5a32b85efc67d9177672df8cd913d3ce69a3": "963902c4988f3145e63d82650ed603fe",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6ea6d1811b3a6b1922cdbaea9c63a4b7162a74": "2ac846492a264a18d31c62c9b20cfa25",
".git/objects/8a/7ff22e31c172b8f924738aaefdf837246fa198": "aa766a0cad877b2bb474f2970108a0ba",
".git/objects/97/149e55f741364ed84c8ef5ef583d83a99507b0": "bebeb84932fedfd964ed26276be805fd",
".git/objects/97/a561d3bba7254d28317787475ef43b28508d41": "e186551c75f3f47db9146181612e3d3a",
".git/objects/9c/7cf654309bd4166d49a86b8e1a0e6f1bcad3ae": "d9dcdffd519e40c12b95599770c50ec7",
".git/objects/9d/4a32819d5ce9a5b2336f2211b4ba5feec4905f": "8e7a588f511880c7489198e2d0067960",
".git/objects/a3/4749040c6e474419da37d7c7d7933eaad777d6": "81a898ca71c65fbc89c0d5e866dc401f",
".git/objects/a6/65a3c878c5d05337f70c83140deb6f7107bad7": "67294619df97bbcd7a658fe523568e59",
".git/objects/ab/34e3d710cb1afe013acce4400d799c954c502e": "7bfd5a3b88b223e88461fd8ef5ba946c",
".git/objects/ac/13384818d3b73395bf6fda4b876b21a3e693e9": "8b87ed31ede29b8291f7ab9936c393cd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/31f437902df42b73f44109968ac1e337f77a4c": "1f8764c6ce61700e2d0c2906910e8ec8",
".git/objects/c2/e405b679a9016622bdb7fe096fd3ecadb76a84": "d3872ad71ccadb6e88c62b90493021a2",
".git/objects/c6/e2fa74367fb88510bbab07e201812ec26e7e23": "30e1c1f252f3d706a30dad1d83b824de",
".git/objects/cc/f44210c6dcb08704b7fc27856f28b1ae566792": "367c15726b51b46f0458cde21b412455",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d1/9064bb1b99fbcab13aed3e7b00f7f5042f40b1": "68992951741532a8cc96c1a1b76b6968",
".git/objects/d3/944accc7af7667d930fb24c72ab73c804b822d": "6891fbe79484cc440e0393f6f9b73fcf",
".git/objects/d5/3fc01eb64f95ad09577aacd9a266f51964eee4": "101466c79270f39a8ab005208bf3d5cc",
".git/objects/d6/824fb6d8cd11dbde452538666d418161da0294": "9a3ed4ae73e4666f234e83ce7b0c8952",
".git/objects/d8/b185a993a1ef6b27c72f9b2053d67ac6d3f32e": "23eb5189bf36c03ed69aa577477379bb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/79116e6a64c94ac3e0b33e42f71aa0ca20029f": "046fd9616eb277ee6275a93bd88bacc6",
".git/objects/e0/9f875f87c01670d04cd636b8687db2ae741acb": "b5a3949e3fc568e69d093d31eeb00aa9",
".git/objects/e5/377adcd6535fd5c201c826771ff8d0f658399c": "feb463bf0c45b7e16ea9e3e060074110",
".git/objects/e9/489d6472fdd2caa97bc31c1ef41b7015755151": "4d92799b73e0d2219838a3b19043f37d",
".git/objects/f0/74b8ac7af9048b1bd5e7b8c479dba28dc17785": "4ffa320efb228ed902b27cbb2bb3d228",
".git/objects/f0/eccd9b1f2d63faade3db9857e943431ac1879f": "1db86729a65b2c8145af0971dc8a731d",
".git/objects/f5/81341e2237c00fa77d273763b2f247d9571068": "333058d42e059683782a1f5cac16477b",
".git/objects/f7/5a773bffa3a1362efeaa56e8643f127c3f47b9": "d846085c4628a3b56a1453617f477a1d",
".git/objects/f9/54d39736c8b3085fd38260b4f0d644f912dd16": "0481b3a5896c14916600ea34b6a9e0dc",
".git/objects/fb/ae8dbfb0a996c646af7d6b5eb82ab7bb90c83f": "223e4b8a0434fa22d047e57a07d05131",
".git/refs/heads/master": "649a8cdeb1387df1e086f955068dc4c1",
".git/refs/remotes/origin/master": "649a8cdeb1387df1e086f955068dc4c1",
"assets/AssetManifest.json": "bd8c3e964f7f401d9f159c46e4c66560",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/images/BIODATA.pdf": "0098a2c4f561807c9f0064ccb22dd185",
"assets/images/deedy_resume.pdf": "7abb4d1961631143d23600178b3cb8f5",
"assets/images/pic1.jpg": "1d3b3c79f2239183d197a9f68019f1cd",
"assets/images/pic10.jpg": "018ba627ba61a1f9f56bd8bb52a9a387",
"assets/images/pic101.png": "e2bed538041a197d6c44537b30d1a26d",
"assets/images/pic102.gif": "c0224f6324f10974e0482820b1fe8a9d",
"assets/images/pic103.png": "a0d5184f8ba106025f0e3a2a168db839",
"assets/images/pic104.png": "fed0d69678a987180c5f88908bc0d978",
"assets/images/pic105.png": "96385896ceff1f85b15ed6984a1be730",
"assets/images/pic106.png": "c2b2c7bd15ba676b42b146cf0257a8e9",
"assets/images/pic107.jfif": "a20876a9adbf141c66610b7852422e8a",
"assets/images/pic108.jfif": "ccd28b4c096d1977d027f14708e0e7a7",
"assets/images/pic109.jfif": "0631080de0efd9d3fc49852662e783cc",
"assets/images/pic11.jpg": "59ba0916147e71c5ad34eacb4e2d7df7",
"assets/images/pic110.jfif": "886435a9874555d371649e0bddf26eff",
"assets/images/pic111.gif": "88612f94478814faac69b0c63a4780fb",
"assets/images/pic112.jfif": "fdf64ddd6b3459eca1afc9bc5902e270",
"assets/images/pic113.jfif": "2befdab3740fa4cbe2de3dc7a798a49f",
"assets/images/pic114.png": "17beab7c354f1e71ff2801109b8f0edb",
"assets/images/pic115.png": "550c98a93dd1c3125e4614ee3151e3ea",
"assets/images/pic116.jfif": "fef16bfc930bbb9e3eb2553ed1da8b6c",
"assets/images/pic117.png": "7e928df851c015cc5f450da2f48411ec",
"assets/images/pic118.jpeg": "8d44ad2ab33d538cba0efac7852b5f6b",
"assets/images/pic119.jpeg": "6d49ab73d023784d5036c78c45ab3967",
"assets/images/pic120.png": "ea39b948bcc12495cc2825782b9e645f",
"assets/images/pic121.png": "1f3bbe6d1220201e931afd6b91970a8f",
"assets/images/pic2.jpg": "93e932fcbb9c1db1e0a5829686bb746c",
"assets/images/pic3.png": "14b61ff3fbf71e2aa236380ee44a2d85",
"assets/images/pic4.jpg": "62faf8feb0638161021fb8f822453071",
"assets/images/pic5.jpg": "ecddcb730edf455705e72a6b66130033",
"assets/images/pic501.png": "4b16cfe4e55171a08a01126ba4495ef2",
"assets/images/pic506.png": "3c62dca1da5ea47cee95324888147879",
"assets/images/pic6.jpg": "b4c58c2d54b612e2c83596b109a71793",
"assets/images/pic7.jpg": "67944bdffd3e281e1750a4b89f312fe1",
"assets/images/pic8.jpg": "29041bd87a06ac88a870978d0ff531ae",
"assets/images/pic9.jpg": "3afc29061b7096887276615bde19a7b0",
"assets/NOTICES": "b08db4f69ce91072605f1bc373fe1d7a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/shaders/ink_sparkle.frag": "ae6c1fd6f6ee6ee952cde379095a8f3f",
"favicon.png": "cec06261144dd5f33864440510a04c82",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "29a50b44557d4e6cde04fdd38b03bf2f",
"/": "29a50b44557d4e6cde04fdd38b03bf2f",
"main.dart.js": "f87decd759dc5a5e09c635b5305d47b2",
"manifest.json": "b8d1f180185c438d473dc57b6b861dc1",
"version.json": "4aa78f0c7b0a33a604db17d5f6893baa"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
