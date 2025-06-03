/**
 * Rocket Scroll Animation
 * Moves rocket up as user scrolls down the page
 */
document.addEventListener("DOMContentLoaded", function () {
  const rocket = document.getElementById("scrollRocket");

  if (rocket) {
    // Simple scroll-based animation using vanilla JS
    let ticking = false;

    function updateRocket() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      // Move rocket up as user scrolls down
      const moveDistance = scrollPercent * (window.innerHeight * 0.6);
      rocket.style.transform = `translateY(-${moveDistance}px)`;

      ticking = false;
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(updateRocket);
        ticking = true;
      }
    }

    // Listen for scroll events
    window.addEventListener("scroll", requestTick);

    // Initial position
    updateRocket();
  }
});
