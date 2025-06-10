document.addEventListener("DOMContentLoaded", function () {
  const rocket = document.getElementById("scrollRocket");
  const processSteps = document.querySelectorAll(".mil-process-step");
  const rocketContainer = document.querySelector(".rocket-scroll-container");

  if (!rocket || !processSteps.length || !rocketContainer) {
    return;
  }

  // Set initial rocket transition for smooth animation
  rocket.style.transition = "transform 0.5s ease-in-out";

  processSteps.forEach((step, index) => {
    step.addEventListener("mouseenter", function () {
      // Calculate the position to move the rocket
      // Get the container and step positions
      const containerRect = rocketContainer.getBoundingClientRect();
      const rocketRect = rocket.getBoundingClientRect();
      const stepRect = step.getBoundingClientRect();

      // Calculate the center of the step relative to the rocket container
      const stepCenter = (stepRect.left + stepRect.right) / 2;
      const containerLeft = containerRect.left;
      const rocketCenter = rocketRect.width / 2;

      // Calculate translateX value to center rocket under the step
      const translateX = stepCenter - containerLeft - rocketCenter;

      // Apply the transform
      rocket.style.transform = `translateX(${translateX}px)`;
    });

    step.addEventListener("mouseleave", function () {
      // Return rocket to center position when not hovering
      rocket.style.transform = "translateX(0)";
    });
  });
});
