// Force muted autoplay on hero background video (required by browsers)
(function () {
  var video = document.getElementById('heroVideo');
  if (!video) return;

  video.muted = true;
  video.play().catch(function () {
    // Autoplay blocked — fallback gradient already visible
  });
})();
