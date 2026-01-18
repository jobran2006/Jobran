const versturenBtn = document.querySelector('.versturen');

versturenBtn.addEventListener('click', () => {
    alert("Formulier verstuurd!");
});

const projectTexts = document.querySelectorAll(
    '.project-pinkgoose h2, .project-pinkgoose h3, ' +
    '.project-mastermind h2, .project-mastermind h3, ' +
    '.project-week h2, .project-week h3 '
);

projectTexts.forEach(text => {
    text.style.transition = "transform 0.3s ease";

    text.addEventListener("mouseenter", () => {
        text.style.transform = "scale(1.3)";
    });

    text.addEventListener("mouseleave", () => {
        text.style.transform = "scale(1)";
    });
});

