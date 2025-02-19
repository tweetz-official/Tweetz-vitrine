const handleInput = () => {
    const input = document.querySelector(".c-input");
    if (!input) return;

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            window.location.href = "https://tweetz.com/app/signup";
        }
    });
};

document.addEventListener("DOMContentLoaded", handleInput);
