//init-cards.js
//  TODO - dynamic state only if window is smaller than the gallery
const allCardGalleries = document.querySelectorAll(
    ".c-gallery-section__gallery"
);
const cardSpacing = 20;

function addFooter(parent, gallery) {
    // add footer to the gallery
    const footerHTML = `<div class="c-gallery-section__footer">
     <button class="c-gallery-section__btn prev">prev</button>
     <button class="c-gallery-section__btn next">next</button>
    </div>`;

    parent.insertAdjacentHTML("beforeend", footerHTML);

    const prevButton = parent.querySelector(".prev");
    const nextButton = parent.querySelector(".next");
    const footer = parent.querySelector(".c-gallery-section__footer");

    let scrollOffset = cardWidth + cardSpacing * 2;

    nextButton.addEventListener("click", () => {
        let newCurrentScrollPosition =
            Number(gallery.dataset.scrollPosition) || 0;
        let potentialScrollPosition = newCurrentScrollPosition + scrollOffset;

        if (window.innerWidth > 1040) {
            potentialScrollPosition =
                newCurrentScrollPosition + scrollOffset * 2;
        }

        newCurrentScrollPosition = -Math.min(
            potentialScrollPosition,
            galleryWidth - scrollOffset
        );

        gallery.style.transform = `translate3d(${newCurrentScrollPosition}px, 0, 0)`;
        gallery.style.transition = "transform 0.5s ease-in-out";
        gallery.dataset.scrollPosition = -newCurrentScrollPosition;
    });

    prevButton.addEventListener("click", () => {
        let newCurrentScrollPosition =
            Number(gallery.dataset.scrollPosition) || 0;
        let potentialScrollPosition = newCurrentScrollPosition - cardWidth;

        if (window.innerWidth > 1040) {
            potentialScrollPosition =
                newCurrentScrollPosition - scrollOffset * 2;
        }

        newCurrentScrollPosition = Math.max(potentialScrollPosition, 0);

        gallery.style.transform = `translate3d(-${newCurrentScrollPosition}px, 0, 0)`;
        gallery.style.transition = "transform 0.5s ease-in-out";
        gallery.dataset.scrollPosition = newCurrentScrollPosition;
    });

    // Show the footer only when there are more than two items
    footer.style.display = "flex";
}

const init = () => {
    //  make big lists scrollable
    allCardGalleries.forEach((gallery) => {
        // if more than two children, make changes to the parent
        const parent = gallery.closest(".c-gallery-section");
        const scroll = gallery.closest(".js-gallery-section__scroll");

        if (parent.classList.contains("c-gallery-section--footer")) {
            addFooter(parent, gallery);
        }

        let galleryWidth = gallery.offsetWidth;
        let cardWidth = gallery.firstElementChild.offsetWidth;

        const updateSizes = () => {
            galleryWidth = gallery.offsetWidth;
            cardWidth = gallery.firstElementChild.offsetWidth;
        };

        updateSizes();

        window.addEventListener("resize", updateSizes);

        // user scroll
        let isDragging = false;
        let startX, currentTranslateX, initialScrollPosition;

        gallery.addEventListener("mousedown", startDrag);
        gallery.addEventListener("touchstart", startDrag);

        gallery.addEventListener("mousemove", duringDrag);
        gallery.addEventListener("touchmove", duringDrag);

        gallery.addEventListener("mouseup", endDrag);
        gallery.addEventListener("touchend", endDrag);

        gallery.addEventListener("mouseleave", endDrag);

        function startDrag(e) {
            isDragging = true;
            startX =
                e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
            initialScrollPosition = Number(gallery.dataset.scrollPosition) || 0;

            // Disable the transition while dragging for smoothness
            gallery.style.transition = "none";
        }

        function duringDrag(e) {
            if (!isDragging) return;

            const x =
                e.touches && e.touches[0] ? e.touches[0].clientX : e.clientX;
            const deltaX = x - startX;

            currentTranslateX = initialScrollPosition - deltaX;

            // Update gallery position while dragging
            gallery.style.transform = `translate3d(-${currentTranslateX}px, 0, 0)`;
        }

        function endDrag(e) {
            if (!isDragging) return;
            isDragging = false;

            const minDragDistance = cardWidth + (cardSpacing * 2);

            // Adjust currentTranslateX to align with card width boundaries
            let finalScrollPosition = currentTranslateX;
            let dragDistance = initialScrollPosition - currentTranslateX;

            // Check if the drag distance is less than a card's width and adjust accordingly
            if (Math.abs(dragDistance) < minDragDistance) {
                if (dragDistance > 0) {
                    console.log("dragDistance > 0");
                    finalScrollPosition = initialScrollPosition - minDragDistance;
                    gallery.style.transition =  "transform 0.5s ease-in-out";
                } else {
                    console.log("dragDistance < 0");
                    finalScrollPosition = initialScrollPosition + minDragDistance;
                    gallery.style.transition = "transform 0.5s ease-in-out";
                }
            }

            // Update the gallery's transform and dataset
            gallery.style.transform = `translate3d(-${finalScrollPosition}px, 0, 0)`;
            gallery.dataset.scrollPosition = finalScrollPosition;
            gallery.style.transition = "transform 0.5s ease-in-out";
        }
    });
};

export { init };
