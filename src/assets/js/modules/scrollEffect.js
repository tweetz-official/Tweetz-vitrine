// parallax.js

let timeouts = []; // Store all timeouts in an array

// Function to handle the scroll event and update element positions
export function init() {
  scrollHandler();
  window.addEventListener("scroll", scrollHandler);
}

function scrollHandler() {
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  const dynGallery = document.querySelectorAll(".js-gallery-section__scroll");

  dynGallery.forEach((gallery) => {
    let currentScrollPosition = 50;

    const elementTopFromViewport = gallery.getBoundingClientRect().top;
    const elementBottomFromViewport = gallery.getBoundingClientRect().bottom;

    // Check if the top of the element is entering or is within the viewport
    if (
      elementTopFromViewport <= viewportHeight &&
      elementBottomFromViewport >= 0
    ) {
      // Calculate progress such that it is 0 when the top just enters and 1 when the bottom just leaves the viewport
      const scrollProgress =
        (viewportHeight - elementTopFromViewport) /
        (viewportHeight + gallery.offsetHeight);

      let scrollAnim = scrollProgress * 0.1 * viewportHeight;
      currentScrollPosition -= scrollAnim;

      gallery.style.transform = `translate3d(${currentScrollPosition}px, 0, 0)`;
    }
  });
}
