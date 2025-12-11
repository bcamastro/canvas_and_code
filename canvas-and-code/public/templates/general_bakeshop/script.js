document.addEventListener("DOMContentLoaded", function () {
  const logo = document.getElementById("main-logo");
  if (!logo) return;

  // Use the current src as the original
  const originalSrc = logo.getAttribute("src");
  const winkSrc = "images/winking.png";

  function winkOnce() {
    logo.src = winkSrc;

    // How long the wink lasts (in ms)
    setTimeout(() => {
      logo.src = originalSrc;
    }, 300); // 0.3s wink
  }

  // One-time wink after 1 second
  setTimeout(winkOnce, 1000);

  // Then wink every 8 seconds
  setInterval(winkOnce, 8000);
});
