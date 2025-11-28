import { renderHomeView } from "./views/homeView.js";
import { renderFeedView } from "./views/feedView.js";
import { renderStoresView } from "./views/storesView.js";
import { renderProductsView } from "./views/productsView.js";

const root = document.getElementById("app-root");
const navButtons = document.querySelectorAll(".nav-btn");

const routes = {
  home: renderHomeView,
  feed: renderFeedView,
  stores: renderStoresView,
  products: renderProductsView,
};

function setActiveButton(view) {
  navButtons.forEach((btn) => {
    btn.classList.toggle("nav-btn--active", btn.dataset.view === view);
  });
}

function navigate(view) {
  const render = routes[view] || routes.home;
  root.innerHTML = "";
  root.appendChild(render());
  setActiveButton(view);
}

// Listeners de navegación
navButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    navigate(btn.dataset.view);
  });
});

// Vista inicial
navigate("home");
