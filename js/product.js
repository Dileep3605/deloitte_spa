var products;
function getProductsData(){
  fetch("http://localhost:3000/api/products/")
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    console.log(myJson);
    products = myJson;
    setTimeout(() => {
      render(products);
    }, 1000);
  })
  .catch(function (error) {
    console.log("Error: " + error);
  });
}


function render(productsList) {
  const app = document.querySelector(".card-grid");
  clearContainer(app);
  productsList.forEach((product) => {
    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card");
    let divCardThumbnail = document.createElement("div");
    divCardThumbnail.setAttribute("class", "card-thumbnail");
    let img = document.createElement("img");
    img.setAttribute("src", product.productImage);
    img.setAttribute("class", product.productImage);
    divCardThumbnail.appendChild(img);
    divCard.appendChild(divCardThumbnail);

    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");

    let productMeta = document.createElement("div");
    productMeta.setAttribute("class", "product-meta");

    let productDetails = document.createElement("div");
    productDetails.setAttribute("class", "product-details");

    let productTitle = document.createElement("a");
    productTitle.setAttribute("href", `#product-details`);
    productTitle.addEventListener("click", function(){
      renderProductDetails(product.productId);
    });
    productTitle.setAttribute("class", "product-title");
    productTitle.textContent = product.productTitle;

    let productCategory = document.createElement("p");
    productCategory.setAttribute("class", "product-category");
    productCategory.textContent = product.productCategory;

    productDetails.appendChild(productTitle);
    productDetails.appendChild(productCategory);

    let productPrice = document.createElement("p");
    productPrice.setAttribute("class", "product-price");
    productPrice.textContent = `$${product.productPrice}`;

    productMeta.appendChild(productDetails);
    productMeta.appendChild(productPrice);

    divCardBody.appendChild(productMeta);

    let divProductRatingSection = document.createElement("div");
    divProductRatingSection.setAttribute("class", "product-rating-section");
    divProductRatingSection.appendChild(generateRating(product));

    let iShoppingCartIcon = document.createElement("i");
    iShoppingCartIcon.setAttribute(
      "class",
      "fas fa-shopping-cart card-shopping-icon"
    );
    divProductRatingSection.appendChild(iShoppingCartIcon);

    divCardBody.appendChild(divProductRatingSection);

    divCard.appendChild(divCardBody);
    app.appendChild(divCard);
  });
}

function clearContainer(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function generateRating(product) {
  let divProductRating = document.createElement("div");
  divProductRating.setAttribute("class", "product-rating");

  for (let i = 0; i < 5; i++) {
    let iProductRating = document.createElement("i");
    iProductRating.setAttribute("class", "fas fa-star");
    if (product.productRating > i) {
      iProductRating.setAttribute("class", "fas fa-star active");
    }
    divProductRating.appendChild(iProductRating);
  }
  return divProductRating;
}

function SearchText() {
  event.preventDefault();
  const getSearchElement = document.getElementById("search-textbox").value;
  let filterProducts = products.filter((product, index) => {
    let title = product.productTitle.toLowerCase();
    return title.includes(getSearchElement);
  });
  render(filterProducts);
}

function onSearchTextKeyUp() {
  const getSearchElement = document.getElementById("search-textbox").value;
  let searchLength = getSearchElement.length;
  if(searchLength === 0){
    render(products);
  }
  if(event.keyCode == 13){
    SearchText()
  }
}
