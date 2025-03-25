document.addEventListener("DOMContentLoaded", function () {
    const langSelect = document.getElementById("lang");
    const supportedLanguages = ['en','fr','es']; // Langues supportées
    let currentLang = localStorage.getItem("lang") || navigator.language;

    if (!supportedLanguages.includes(currentLang)) {
        supportedLanguages[0]; // Langue par défaut
    }

    // Charger les traductions depuis le fichier JSON
    fetch("/assets/js/translations.json")
        .then(response => response.json())
        .then(translations => {
            // Vérifie si la langue actuelle existe dans les traductions
            if (!translations[currentLang]) {
                currentLang = "fr"; 
                localStorage.setItem("lang", "fr");
            }

            langSelect.value = currentLang;
            document.documentElement.setAttribute("lang", currentLang);

            function updateTexts(lang) {
                // Parcourt tous les éléments ayant l'attribut data-i18n
                document.querySelectorAll('[data-i18n]').forEach(function (element) {
                    const key = element.getAttribute('data-i18n');
                    if (translations[lang] && translations[lang][key]) {
                        element.innerHTML = translations[lang][key]; // innerHTML pour interpréter le HTML
                        element.setAttribute("title", translations[lang][key]);
                    }
                });
            }

            updateTexts(currentLang);

            langSelect.addEventListener("change", function () {
                const newLang = this.value;
                if (translations[newLang]) {
                    localStorage.setItem("lang", newLang);
                    document.documentElement.setAttribute("lang", newLang);
                    updateTexts(newLang);
                }
            });
        })
        .catch(error => console.error("Erreur lors du chargement des traductions :", error));
});
