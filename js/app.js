
const dropdownMenu = document.querySelector(".dropdown-menu");
(function () {
  function init() {
    var router = new Router([
      new Route("home", "home.html", true, 1111),
      new Route("product-details", "product-details.html", false, 1112),
      new Route("shop", "shop.html", false, 1113),
      new Route("magazine", "magazine.html", false, 1114),
      new Route("login", "login.html", false, 1115),
    ]);
  }
  init();
})();

function showDropDown() {
  event.preventDefault();
  dropdownMenu.classList.toggle("show");
  let body = document.querySelector("body");
  let overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");
  body.appendChild(overlay);
  overlay.addEventListener("click", function () {
    overlay.remove();
    dropdownMenu.classList.toggle("show");
  });
}

function overlayStyle() {
  let body = document.querySelector("body");
  let overlay = document.createElement("div");
  overlay.setAttribute("class", "overlay");
  body.appendChild(overlay);
  overlay.addEventListener("click", function () {
    overlay.remove();
    dropdownMenu.classList.toggle("show");
  });
}

function showHideFilter() {
  const filter = document.querySelector(".filter-section");
  filter.classList.toggle("hide");
}

function menuClick() {
  let windowWidth = window.innerWidth;
  if (windowWidth < 767) {
    dropdownMenu.classList.toggle("show");
    let overlay = document.querySelector(".overlay");
    overlay.remove();
  }
}
