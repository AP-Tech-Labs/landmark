/**
 * Mobile Menu JavaScript
 * Handles hamburger menu functionality for mobile navigation
 */

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.querySelector(".mil-mobile-menu-btn");
  const mobileMenuOverlay = document.querySelector(".mil-mobile-menu-overlay");
  const mobileMenuClose = document.querySelector(".mil-mobile-menu-close");
  const body = document.body;

  // Toggle mobile menu
  function toggleMobileMenu() {
    mobileMenuOverlay.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
    body.classList.toggle("menu-open");

    // Prevent body scroll when menu is open
    if (mobileMenuOverlay.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }

  // Close mobile menu
  function closeMobileMenu() {
    mobileMenuOverlay.classList.remove("active");
    mobileMenuBtn.classList.remove("active");
    body.classList.remove("menu-open");
    body.style.overflow = "";
  }

  // Event listeners
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", toggleMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", closeMobileMenu);
  }

  // Close menu when clicking on overlay
  if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener("click", function (e) {
      if (e.target === mobileMenuOverlay) {
        closeMobileMenu();
      }
    });
  }

  // Close menu when clicking on mobile nav links
  const mobileNavLinks = document.querySelectorAll(".mil-mobile-nav a");
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  // Close menu on window resize if screen becomes larger
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      closeMobileMenu();
    }
  });

  // Handle escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && mobileMenuOverlay.classList.contains("active")) {
      closeMobileMenu();
    }
  });
});
