class LetterComponent extends HTMLElement {
  connectedCallback() {
    const letter = this.getAttribute("letter") ?? "A";
    const img = this.getAttribute("img") ?? "";

    this.innerHTML = `
      <div
        class="card h-100 text-center shadow-sm letter-card"
        data-letter="${letter}"
      >
        <div
          class="card-body d-flex flex-column justify-content-center align-items-center p-3"
        >
          <img
            src="${img}"
            alt="Imagen de la letra A"
            class="img-fluid mb-2"
          />
          <h2 class="card-title display-5 fw-bold mb-1"></h2>
          <p class="card-text text-muted mb-0"></p>
        </div>
      </div>
    `;
  }
}

customElements.define("letter-component", LetterComponent);
