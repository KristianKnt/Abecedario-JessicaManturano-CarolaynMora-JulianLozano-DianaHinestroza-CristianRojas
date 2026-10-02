// La funcionalidad para registrar letras vistas se implementará más adelante.
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".letter-card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });
});