import { apiPosts } from "../api.js";
import { postCard } from "../components/postcard.js";

export function renderFeedView() {
  const root = document.createElement("section");
  root.className = "view";

  // Columna izquierda: crear post + feed
  const left = document.createElement("div");
  const right = document.createElement("div");

  left.innerHTML = `
    <section class="card">
      <h2 class="card__title">Crear publicación</h2>
      <form id="post-form" class="post-form">
        <div style="display:grid;gap:0.5rem">
          <input class="input" name="author" placeholder="Nombre / usuario" />
          <input class="input" name="title" placeholder="Título" />
          <textarea class="input" name="content" rows="3" placeholder="¿Qué quieres compartir?"></textarea>
        </div>
        <div style="margin-top:0.75rem;display:flex;justify-content:flex-end">
          <button class="btn btn--primary" type="submit">Publicar</button>
        </div>
      </form>
    </section>
    <section class="card" id="feed-list">
      <h2 class="card__title">Feed de la comunidad</h2>
      <div id="feed-container" style="display:flex;flex-direction:column;gap:0.75rem;"></div>
    </section>
  `;

  right.innerHTML = `
    <section class="card">
      <h2 class="card__title">Promociones destacadas</h2>
      <p class="card__subtitle">Más adelante puedes poblar esto con /promotions.</p>
      <ul class="list">
        <li class="list-item">
          <div>
            <div class="list-item__main">2x1 en fideos</div>
            <div class="list-item__meta">Bodega Doña Lucha · Solo hoy</div>
          </div>
        </li>
        <li class="list-item">
          <div>
            <div class="list-item__main">Descuento en arroz integral</div>
            <div class="list-item__meta">Mercado Central · Hasta el viernes</div>
          </div>
        </li>
      </ul>
    </section>
  `;

  root.append(left, right);

  // Lógica
  const form = left.querySelector("#post-form");
  const feedContainer = left.querySelector("#feed-container");

  async function loadPosts() {
    feedContainer.innerHTML = `<span class="card__subtitle">Cargando publicaciones...</span>`;
    try {
      const posts = await apiPosts.list();
      feedContainer.innerHTML = "";
      posts.forEach((p) => feedContainer.appendChild(postCard({
        title: p.title,
        author: p.authorName ?? p.author,
        content: p.content,
      })));
    } catch (err) {
      feedContainer.innerHTML =
        `<span class="card__subtitle">Error cargando posts: ${err.message}</span>`;
    }
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form));
    if (!data.content?.trim()) return;
    try {
      await apiPosts.create({
        author: data.author,
        title: data.title,
        content: data.content,
      });
      form.reset();
      await loadPosts();
    } catch (err) {
      alert("Error creando publicación: " + err.message);
    }
  });

  loadPosts();

  return root;
}
