class LetterComponent extends HTMLElement {
  connectedCallback() {
  const letter = this.getAttribute("letter") ?? "A";
  const imgFront = this.getAttribute("img-front") ?? "";
  const imgBack = this.getAttribute("img-back") ?? "";

  this.innerHTML = `
    <div class="card h-100 text-center shadow-sm letter-card" data-letter="${letter}">
      <div class="card-inner">
        <div class="card-front card-body d-flex flex-column justify-content-center align-items-center p-3">
          <img src="${imgFront}" alt="Imagen de la letra ${letter}" class="img-fluid mb-2">
          <h2 class="card-title display-5 fw-bold mb-1"></h2>
        </div>
        <div class="card-back card-body d-flex flex-column justify-content-center align-items-center p-3">
          <img src="${imgBack}" alt="Imagen trasera de la letra ${letter}"
            class="img-fluid rounded-2 h-100 object-fit-contain">
        </div>
      </div>
    </div>
  `;
}
}

customElements.define("letter-component", LetterComponent);
