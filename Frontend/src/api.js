// Ajusta el puerto según tu backend / Docker
export const API_BASE_URL = "http://localhost:3000";

export const apiPosts = {
  async list() {
    const response = await fetch(`${API_BASE_URL}/posts`);
    if (!response.ok) throw new Error("Error al obtener posts");
    return response.json();
  },
  
  async create(post) {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post)
    });
    if (!response.ok) throw new Error("Error al crear post");
    return response.json();
  }
};
