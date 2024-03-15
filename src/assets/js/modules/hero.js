// init

const allSplineElement = document.querySelectorAll(".js-spline");

const init = () => {
    allSplineElement.forEach((splineElement) => {
        splineElement.classList.add("not-loaded");
    });

    // wait for spline content to be loaded

    document.addEventListener("DOMContentLoaded", () => {
        const allSplineViewer = document.querySelectorAll(".js-spline");

        allSplineViewer.forEach((splineViewer) => {
            if (splineViewer) {
                const logo = splineViewer.shadowRoot.querySelector("#logo");
                // remove logo
                logo.parentNode.removeChild(logo);

                //remove loading class
                splineViewer.classList.remove("not-loaded");
            }
            console.log(splineViewer);
            setTimeout(() => {
                console.log(splineViewer);
            }, 1000);
        });
    });
};

// exports
export { init };
