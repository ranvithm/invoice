if (!self.define) {
  let e,
    s = {};
  const i = (i, n) => (
    (i = new URL(i + ".js", n).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, r) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let l = {};
    const o = (e) => i(e, t),
      d = { module: { uri: t }, exports: l, require: o };
    s[t] = Promise.all(n.map((e) => d[e] || o(e))).then((e) => (r(...e), l));
  };
}
define(["./workbox-3625d7b0"], function (e) {
  "use strict";
  self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: "./assets/html2canvas.esm-0a33ed42.js", revision: null },
        { url: "./assets/index-b0483e63.js", revision: null },
        { url: "./assets/index-bd17199c.css", revision: null },
        { url: "./assets/index.es-d3965974.js", revision: null },
        { url: "./assets/purify.es-9f923ed6.js", revision: null },
        { url: "./index.html", revision: "9dfc4433f7d438566b024987f37842a5" },
        { url: "./registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
        {
          url: "manifest.webmanifest",
          revision: "40194ccfc3bb8b220d0ab9ba87862d2f",
        },
      ],
      {}
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
    );
});
