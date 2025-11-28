export function postCard(post) {
  const div = document.createElement("article");
  div.className = "card";
  div.innerHTML = `
    <div class="card__title">${post.title ?? "Publicación"}</div>
    <div class="card__subtitle">@${post.author ?? "usuario"}</div>
    <p>${post.content ?? ""}</p>
  `;
  return div;
}
