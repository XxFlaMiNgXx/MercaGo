export function renderHomeView() {
  const root = document.createElement("section");
  root.className = "view view--full";

  root.innerHTML = `
    <section class="card">
      <h2 class="card__title">Bienvenido a MercaGo</h2>
      <p class="card__subtitle">
        Red social integrada al e-commerce de abarrotes.
      </p>
      <p>
        Aquí podrás gestionar <strong>usuarios, tiendas, productos</strong> y
        publicaciones de la red social (posts, comentarios, reacciones), sobre la
        base de datos NoSQL en MongoDB que ya tienes levantada con Docker.
      </p>
      <p>
        Usa las pestañas de la parte superior para navegar entre la red social,
        las tiendas y el catálogo de productos.
      </p>
    </section>
  `;
  return root;
}
