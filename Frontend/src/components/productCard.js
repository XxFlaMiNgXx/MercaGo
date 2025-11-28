export function productCard(product) {
  const li = document.createElement("div");
  li.className = "list-item";
  li.innerHTML = `
    <div>
      <div class="list-item__main">${product.name ?? "Producto"}</div>
      <div class="list-item__meta">
        S/ ${product.price ?? 0} · ${product.category ?? "Sin categoría"}
      </div>
    </div>
  `;
  return li;
}
