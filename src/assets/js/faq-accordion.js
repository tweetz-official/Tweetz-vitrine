document.addEventListener("DOMContentLoaded", () => {

    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach((item) => {
        const questionWrapper = item.querySelector(".faq__question-wrapper");

        questionWrapper.addEventListener("click", () => {
            const isActive = item.classList.contains("active");

            // Ferme tous les items
            faqItems.forEach((otherItem) => {
                otherItem.classList.remove("active");
            });

            // Ouvre l'item cliqué s'il n'était pas déjà ouvert
            if (!isActive) {
                item.classList.add("active");
            }
        });
    });
});
