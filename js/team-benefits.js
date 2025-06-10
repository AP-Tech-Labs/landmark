document.addEventListener("DOMContentLoaded", function () {
  // Get the iPad content image element
  const ipadImage = document.querySelector(".ipad-content img");
  const originalImageSrc = ipadImage.src;

  // Get all benefit cards
  const benefitCards = document.querySelectorAll(
    ".benefit-card, .bottom-benefit-card"
  );

  // Add hover event listeners to each benefit card
  benefitCards.forEach((card) => {
    const contentImage = card.getAttribute("data-content-image");

    // Mouse enter event
    card.addEventListener("mouseenter", function () {
      if (contentImage) {
        ipadImage.src = contentImage;
        // Add smooth transition effect
        ipadImage.style.opacity = "0.7";
        setTimeout(() => {
          ipadImage.style.opacity = "1";
        }, 150);
      }
    });

    // Mouse leave event - restore original image
    card.addEventListener("mouseleave", function () {
      ipadImage.src = originalImageSrc;
      ipadImage.style.opacity = "0.7";
      setTimeout(() => {
        ipadImage.style.opacity = "1";
      }, 150);
    });
  });
});
