// Search
const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search");

//Shopping cart
const cartBtn = document.querySelector(".cart-btn");
const shoppingCart = document.querySelector(".shopping-cart");

// Menu
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-sm");

const components = [searchInput, shoppingCart, menu];

function removeActiveElement(component) {
  if (!document.querySelector(".active")) return;
  components.forEach((element) => {
    if (element === component) "";
    if (!element.classList.contains("active")) return;
    console.log(element);
    element.classList.remove("active");
  });
}

function searchToggle() {
  searchBtn.addEventListener("click", () => {
    if (searchInput.classList.contains("active"))
      searchInput.classList.toggle("active");
    else {
      removeActiveElement(searchInput);
      searchInput.classList.toggle("active");
    }
  });
}

function shoppingCartToggle() {
  cartBtn.addEventListener("click", () => {
    if (shoppingCart.classList.contains("active"))
      shoppingCart.classList.toggle("active");
    else {
      removeActiveElement(shoppingCart);
      shoppingCart.classList.toggle("active");
    }
  });
}

function menuToggle() {
  menuBtn.addEventListener("click", () => {
    {
      if (menu.classList.contains("active")) menu.classList.toggle("active");
      else {
        removeActiveElement(menu);
        menu.classList.toggle("active");
      }
    }
  });

  menu.addEventListener("click", (e) => {
    if (!e.target.classList.contains("menu-link")) return;
    menu.classList.toggle("active");
  });
}

export default function () {
  menuToggle();
  shoppingCartToggle();
  searchToggle();
}
