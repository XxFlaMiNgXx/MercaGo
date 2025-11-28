import { apiStores } from "../api.js";

export function renderStoresView() {
  const root = document.createElement("section");
  root.className = "view";

  const left = document.createElement("div");
  const right = document.createElement("div");

  left.innerHTML = `
    <section class="card">
      <h2 class="card__title">Registrar tienda</h2>
      <form id="store-form">
        <div style="display:grid;gap:0.5rem">
          <input class="input" name="name" placeholder="Nombre de la tienda" required />
          <input class="input" name="address" placeholder="Dirección" />
          <input class="input" name="owner" placeholder="Dueño / encargado" />
        </div>
        <div style="margin-top:0.75rem;display:flex;justify-content:flex-end">
          <button class="btn btn--primary" type="submit">Guardar</button>
        </div>
      </form>
    </section>
  `;

  right.innerHTML = `
    <section class="card">
      <h2 class="card__title">Tiendas registradas</h2>
      <div id="stores-list" class="list"></div>
    </section>
  `;

  root.append(left, right);

  const form = left.querySelector("#store-form");
  const list = right.querySelector("#stores-list");

  async function loadStores() {
    list.innerHTML = `<span class="card__subtitle">Cargando tiendas...</span>`;
    try {
      const stores = await apiStores.list();
      list.innerHTML = "";
      stores.forEach((s) => {
        const div = document.createElement("div");
        div.className = "list-item";
        div.innerHTML = `
          <div>
            <div class="list-item__main">${s.name ?? s.Store_Name ?? "Tienda"}</div>
            <div class="list-item__meta">${s.address ?? s.direccion ?? ""}</div>
          </div>
        `;
        list.appendChild(div);
      });
    } catch (err) {
      list.innerHTML =
        `<span class="card__subtitle">Error cargando tiendas: ${err.message}</span>`;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    try {
      await apiStores.create({
        name: data.name,
        address: data.address,
        owner: data.owner,
      });
      form.reset();
      await loadStores();
    } catch (err) {
      alert("Error guardando tienda: " + err.message);
    }
  });

  loadStores();

  return root;
}
