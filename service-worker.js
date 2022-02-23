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
    "revision": "cc8c8e577781a105e7854c4fb9621271"
  },
  {
    "url": "assets/css/0.styles.83c7167e.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b9bd71ba.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.df6d0676.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.aa20a373.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.b5784633.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.3a9c75c6.js",
    "revision": "37dda16d50812ff59593e6ecfcd5c0ae"
  },
  {
    "url": "assets/js/16.8e2c9512.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.1707bb9d.js",
    "revision": "bc61fac2b292ef8bed45771d1ab7b412"
  },
  {
    "url": "assets/js/18.76320c38.js",
    "revision": "88b72404d78311f950d8db561a4ab1e8"
  },
  {
    "url": "assets/js/19.72b8490a.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.f77449fb.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.afb1c7e4.js",
    "revision": "6057a59c83bbd86804bdaad145d96004"
  },
  {
    "url": "assets/js/21.4860a88b.js",
    "revision": "4de923a41e9284cdc551a1ea48e22bb1"
  },
  {
    "url": "assets/js/22.aa9b1151.js",
    "revision": "298032fc3696719e46ec466570d63cb1"
  },
  {
    "url": "assets/js/23.d436ccbb.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.315864e7.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.630a2dd6.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.68feb87f.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.612a98a1.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.b06b704d.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.37bcba1a.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.b4a74181.js",
    "revision": "f44304155c88666a999262155c043ec2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "223a4b71e21592b7aadc77272e7ee47f"
  },
  {
    "url": "design/index.html",
    "revision": "1bba297f7a78cce8eea3001bf50d2468"
  },
  {
    "url": "index.html",
    "revision": "2cce74410068c3ef876aa85cdad72764"
  },
  {
    "url": "intro/index.html",
    "revision": "c17dc023b25e2a5f9ea2dc4fa250d95b"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "e9ca5b5f8f7bfdb7004770c446570252"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "72c6353b8f46a22841cef70ab593bde5"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "c9c06378a9a5ffcd48b1f160d62a7a28"
  },
  {
    "url": "software/index.html",
    "revision": "7179365b17cd4fa7364ba02cea02c1ea"
  },
  {
    "url": "test/index.html",
    "revision": "31226975c88031f20b1dce9864edb3c4"
  },
  {
    "url": "use cases/index.html",
    "revision": "20dfba843560953abccc0c0ebc45c89e"
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
