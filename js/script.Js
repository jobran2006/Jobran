document.addEventListener("DOMContentLoaded", () => {


    const versturenBtn = document.querySelector('.versturen');

    if (versturenBtn) {
        versturenBtn.addEventListener('click', () => {
            alert("Formulier verstuurd!");
        });
    }

    const projectTexts = document.querySelectorAll(
        '.project-pinkgoose h2, .project-pinkgoose h3, ' +
        '.project-mastermind h2, .project-mastermind h3, ' +
        '.project-week h2, .project-week h3'
    );

    if (projectTexts.length > 0) {
        projectTexts.forEach(text => {
            text.style.transition = "transform 0.3s ease";

            text.addEventListener("mouseenter", () => {
                text.style.transform = "scale(1.3)";
            });

            text.addEventListener("mouseleave", () => {
                text.style.transform = "scale(1)";
            });
        });
    }


    const aboutImages = document.querySelectorAll('.about-me-container img');

    if (aboutImages.length > 0) {
        let rotation = 0;

        function rotate() {
            rotation += 1;

            aboutImages.forEach(img => {
                img.style.transform = `rotate(${rotation}deg)`;
            });

            requestAnimationFrame(rotate);
        }

        rotate();
    }
    
});

