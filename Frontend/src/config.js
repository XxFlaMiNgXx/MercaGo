import { API_BASE_URL } from "./config.js";

async function request(path, options = {}) {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error ${res.status}: ${text}`);
  }
  return res.json();
}

// USERS
export const apiUsers = {
  list: () => request("/users/ls"),
  create: (data) =>
    request("/users", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/users/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id) => request(`/users/${id}`, { method: "DELETE" }),
};

// STORES
export const apiStores = {
  list: () => request("/stores/ls"),
  create: (data) =>
    request("/stores", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/stores/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id) => request(`/stores/${id}`, { method: "DELETE" }),
};

// PRODUCTS
export const apiProducts = {
  list: () => request("/products/ls"),
  create: (data) =>
    request("/products", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/products/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id) => request(`/products/${id}`, { method: "DELETE" }),
};

// POSTS (red social)
export const apiPosts = {
  list: () => request("/posts/ls"),
  create: (data) =>
    request("/posts", { method: "POST", body: JSON.stringify(data) }),
  update: (id, data) =>
    request(`/posts/${id}`, { method: "PUT", body: JSON.stringify(data) }),
  remove: (id) => request(`/posts/${id}`, { method: "DELETE" }),
};
