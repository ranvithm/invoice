if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/invoice/sw.js", { scope: "/" });
  });
}
