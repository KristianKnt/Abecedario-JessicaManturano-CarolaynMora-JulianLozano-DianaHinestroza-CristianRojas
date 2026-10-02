class FooterComponent extends HTMLElement {
  connectedCallback() {

    this.innerHTML = `
     <footer class="bg-white border-top py-5 mt-auto" id="seccion-equipo">
      <div class="container">
        <div class="text-center mb-4">
          <h2 class="h3 fw-bold mb-1">Equipo de Rescate</h2>
          <p class="text-muted">Integrantes del proyecto</p>
        </div>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-3 text-center justify-content-center"
        >
          <div class="col">
            <div class="card h-100 border shadow-sm p-3 rounded-3">
              <div
                class="card-body d-flex flex-column justify-content-center align-items-center p-2"
              >
                <span
                  class="badge bg-primary-subtle text-primary rounded-pill mb-2 px-3 py-1"
                  >Integrante</span
                >
                <h5 class="cursor-pointer h6 fw-bold mb-0">
                  Jessica Manturano
                </h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border shadow-sm p-3 rounded-3">
              <div
                class="card-body d-flex flex-column justify-content-center align-items-center p-2"
              >
                <span
                  class="badge bg-primary-subtle text-primary rounded-pill mb-2 px-3 py-1"
                  >Integrante</span
                >
                <h5 class="cursor-pointer h6 fw-bold mb-0">Carolayn Mora</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border shadow-sm p-3 rounded-3">
              <div
                class="card-body d-flex flex-column justify-content-center align-items-center p-2"
              >
                <img
                  src="./assets/integrantes/julian_avatar.png"
                  alt="Julian Lozano"
                  class="rounded-circle mb-2 shadow-sm"
                  width="80"
                  height="80"
                  style="object-fit: cover"
                />
                <span
                  class="badge bg-primary-subtle text-primary rounded-pill mb-2 px-3 py-1"
                  >Integrante</span
                >
                <h5 class="cursor-pointer h6 fw-bold mb-0">Julian Lozano</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border shadow-sm p-3 rounded-3">
              <div
                class="card-body d-flex flex-column justify-content-center align-items-center p-2"
              >
                <span
                  class="badge bg-primary-subtle text-primary rounded-pill mb-2 px-3 py-1"
                  >Integrante</span
                >
                <h5 class="cursor-pointer h6 fw-bold mb-0">Diana Hinestroza</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border shadow-sm p-3 rounded-3">
              <div
                class="card-body d-flex flex-column justify-content-center align-items-center p-2"
              >
                <span
                  class="badge bg-primary-subtle text-primary rounded-pill mb-2 px-3 py-1"
                  >Integrante</span
                >
                <h5 class="cursor-pointer h6 fw-bold mb-0">Cristian Rojas</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define("footer-component", FooterComponent);
