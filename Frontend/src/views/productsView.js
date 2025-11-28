import { apiProducts } from "../api.js";
import { productCard } from "../components/productCard.js";

export function renderProductsView() {
  const root = document.createElement("section");
  root.className = "view";

  const left = document.createElement("div");
  const right = document.createElement("div");

  left.innerHTML = `
    <section class="card">
      <h2 class="card__title">Registrar producto</h2>
      <form id="product-form">
        <div style="display:grid;gap:0.5rem">
          <input class="input" name="name" placeholder="Nombre del producto" required />
          <input class="input" name="category" placeholder="Categoría (ej. Abarrotes, Lácteos)" />
          <input class="input" name="price" placeholder="Precio (S/)" type="number" step="0.01" />
        </div>
        <div style="margin-top:0.75rem;display:flex;justify-content:flex-end">
          <button class="btn btn--primary" type="submit">Guardar</button>
        </div>
      </form>
    </section>
  `;

  right.innerHTML = `
    <section class="card">
      <h2 class="card__title">Catálogo</h2>
      <div id="products-list" class="list"></div>
    </section>
  `;

  root.append(left, right);

  const form = left.querySelector("#product-form");
  const list = right.querySelector("#products-list");

  async function loadProducts() {
    list.innerHTML = `<span class="card__subtitle">Cargando productos...</span>`;
    try {
      const products = await apiProducts.list();
      list.innerHTML = "";
      products.forEach((p) =>
        list.appendChild(
          productCard({
            name: p.name ?? p.nombre ?? p.Product_Name,
            price: p.price ?? p.precio,
            category: p.category ?? p.categoria,
          })
        )
      );
    } catch (err) {
      list.innerHTML =
        `<span class="card__subtitle">Error cargando productos: ${err.message}</span>`;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    try {
      await apiProducts.create({
        name: data.name,
        category: data.category,
        price: Number(data.price || 0),
      });
      form.reset();
      await loadProducts();
    } catch (err) {
      alert("Error guardando producto: " + err.message);
    }
  });

  loadProducts();

  return root;
}
