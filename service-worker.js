/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1485e47203f3ba0f2a2168288f6bbb91"
  },
  {
    "url": "assets/css/0.styles.c896736b.css",
    "revision": "d624c638641df3e856e6ce098aa08abc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2fc67112.js",
    "revision": "ce37df8f9d0a0a4e24eb01647b8c0bfa"
  },
  {
    "url": "assets/js/11.3906dcbb.js",
    "revision": "301ad89bf6b8f9325e4ad4611c823e35"
  },
  {
    "url": "assets/js/12.8be092cb.js",
    "revision": "a35962c4afea94161f4a22369454be12"
  },
  {
    "url": "assets/js/13.985eb96a.js",
    "revision": "ee113f0418b6269f27c047a308e4b3f9"
  },
  {
    "url": "assets/js/14.fdb1783d.js",
    "revision": "f2eef3515712f0d7c010ea95fd3a896c"
  },
  {
    "url": "assets/js/15.f97753c8.js",
    "revision": "2f108595c86f4a5d15576d51607a327a"
  },
  {
    "url": "assets/js/16.ee36385f.js",
    "revision": "f327c0ebcf5ad0089f863ac5fb33f094"
  },
  {
    "url": "assets/js/17.ea577828.js",
    "revision": "842fdb3c418e31ffe321b736a6ffbb20"
  },
  {
    "url": "assets/js/18.1cc7db39.js",
    "revision": "58080615e921f7a43b9445d9b5304ac7"
  },
  {
    "url": "assets/js/19.5c55fd13.js",
    "revision": "53d6165b76915354186279eca17021ed"
  },
  {
    "url": "assets/js/2.5222e579.js",
    "revision": "12ac55df8c8424dd6f29a76c20bbc17c"
  },
  {
    "url": "assets/js/3.1c7ede5d.js",
    "revision": "54a5ee1e85ba6db823660a6f78dfc513"
  },
  {
    "url": "assets/js/4.b35954f3.js",
    "revision": "a9060cc6ea21c9e7b3593584c5e8cdca"
  },
  {
    "url": "assets/js/5.c2adf207.js",
    "revision": "e7565f6c26c477ff1be92354031c1c9a"
  },
  {
    "url": "assets/js/6.e98446e5.js",
    "revision": "61519701cb0890bc3c6f9334eaacdf72"
  },
  {
    "url": "assets/js/7.02a58e74.js",
    "revision": "e4cccb06dcaa09fea9c5ffdbdd02eb6c"
  },
  {
    "url": "assets/js/8.09c0f769.js",
    "revision": "02a1fbac6af4087135556627f1318d23"
  },
  {
    "url": "assets/js/9.4dbe65a3.js",
    "revision": "b4b0b60951158ad9565fc304bf2e0a55"
  },
  {
    "url": "assets/js/app.6b2bbdd7.js",
    "revision": "d031bd34dc5a8d49baf9b6aaad503fe1"
  },
  {
    "url": "ChangeLog/BotChange.html",
    "revision": "29ea3ee2f667b79828b1a0b926198133"
  },
  {
    "url": "ChangeLog/Change.html",
    "revision": "98f1db79962946ef76a71e2d1aff2231"
  },
  {
    "url": "ChangeLog/index.html",
    "revision": "e8092016d5fbcd21ae657420557727f3"
  },
  {
    "url": "EULA/index.html",
    "revision": "a681ac9b41fb516a6a331d934decff48"
  },
  {
    "url": "Guide/index.html",
    "revision": "b3bc14c76c8994985009b53d540cf155"
  },
  {
    "url": "Guide/KanonBot/Bind.html",
    "revision": "898a78e0e1d4b56346ded0d4c5fa1587"
  },
  {
    "url": "Guide/KanonBot/Custom.html",
    "revision": "46d490449aa87ca892791010c7246ff9"
  },
  {
    "url": "Guide/KanonBot/index.html",
    "revision": "eb86dd75f1170fde2cfff551cce0f6d4"
  },
  {
    "url": "Guide/KanonBot/Other.html",
    "revision": "e8ed8637d67777599e61f300312d48f4"
  },
  {
    "url": "Guide/KanonBot/Query.html",
    "revision": "e746e5c8682022341b5067816b164316"
  },
  {
    "url": "index.html",
    "revision": "6979363e0ed2612ce410b47192ed489b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
