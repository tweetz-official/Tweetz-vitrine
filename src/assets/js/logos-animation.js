// Intersection Observer pour démarrer/arrêter l'animation au scroll
const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            const track = entry.target.querySelector(".logos__track");

            if (entry.isIntersecting) {
                track.style.animationPlayState = "running";
            } else {
                track.style.animationPlayState = "paused";
            }
        });
    },
    { threshold: 0.1 }
);

// Observer la section logos
document.querySelectorAll(".logos").forEach((logos) => {
    observer.observe(logos);
});
