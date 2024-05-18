export function init() {
    // Function to hide the loader
    function hideLoader() {
        var loader = document.querySelector(".c-loader");
        // prevent scroll
        if (loader) {
            loader.classList.add("c-loader--hide");
            setTimeout(function () {
                loader.style.display = "none";
            }, 500);
        }
    }

    // Hide the loader once the page content is fully loaded
    window.addEventListener("load", hideLoader);

    // Optional: hide the loader after a certain time limit to prevent it from showing indefinitely
    // in case the page fails to load completely for some reason.
    setTimeout(hideLoader, 5000);
}
