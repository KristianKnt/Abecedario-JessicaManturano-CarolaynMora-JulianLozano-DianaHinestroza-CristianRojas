class MemberComponent extends HTMLElement {
	connectedCallback() {
		const name = this.getAttribute("name") ?? "A";
		const img = this.getAttribute("img") ?? "";

		this.innerHTML = `
      <div class="col">
				<div class="card h-100 border shadow-sm p-3 rounded-3">
					<div
						class="card-body d-flex flex-column justify-content-center align-items-center p-2"
					>
						<img
							src="${img}"
							alt="${name}"
							class="rounded-circle mb-2 shadow-sm"
							width="80"
							height="80"
							style="object-fit: cover"
						/>
						<span
							class="badge bg-primary-subtle text-primary rounded-pill mb-2 px-3 py-1"
							>Integrante</span
						>
						<h5 class="cursor-pointer h6 fw-bold mb-0">${name}</h5>
					</div>
				</div>
			</div>
    `;
	}
}

customElements.define("member-component", MemberComponent);
