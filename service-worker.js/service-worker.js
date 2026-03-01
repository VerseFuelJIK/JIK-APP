self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {});

self.addEventListener("fetch", event => {});

self.addEventListener("push", event => {
  const options = {
    body: "Open VerseFuel for your strength today.",
  };
  event.waitUntil(
    self.registration.showNotification("Your Daily Verse", options)
  );
});