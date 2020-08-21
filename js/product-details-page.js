function renderProductDetails(productId) {
  debugger;
  fetch(`http://localhost:3000/api/products/${productId}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
      setTimeout(() => {
        renderSelectedProduct(myJson);
      }, 1000);
    })
    .catch(function (error) {
      console.log("Error: " + error);
    });
}

function renderSelectedProduct(product) {
  let productDetailsPage = document.querySelector(".product-details-page");
  clearContainer(productDetailsPage);
  let productImgGallery = document.createElement("div");
  productImgGallery.setAttribute("class", "product-img-gallery");

  let productSliderImg = document.createElement("div");
  productSliderImg.setAttribute("class", "slider-img");

  let sliderImg = document.createElement("img");
  sliderImg.setAttribute("src", product.productImage);

  let slideImgNext = document.createElement("i");
  slideImgNext.setAttribute("class", "fas fa-arrow-right slide-img-next");

  productSliderImg.appendChild(sliderImg);
  productSliderImg.appendChild(slideImgNext);

  productImgGallery.appendChild(productSliderImg);
  productImgGallery.appendChild(renderSliderImageNavigation(product));

 

  //   slideNav.appendChild(renderSliderImageNavigation(product));

  //Product Details
  let selectedProductDetails = document.createElement("div");
  selectedProductDetails.setAttribute("class", "selected-product-details");

  let category = document.createElement("p");
  category.setAttribute("class", "category");
  category.textContent = product.productCategory;

  let title = document.createElement("p");
  title.setAttribute("class", "title");
  title.textContent = product.productTitle;

  let description = document.createElement("p");
  description.setAttribute("class", "description");
  description.textContent = product.productDescription;

  let productColor = document.createElement("div");
  productColor.setAttribute("class", "product-color mb-3");

  let colorTitle = document.createElement("p");
  colorTitle.setAttribute("class", "color-title opacity-5 mb-3");
  colorTitle.textContent = "Color";

  productColor.appendChild(colorTitle);
  productColor.appendChild(renderProductColors(product));

  let productPriceSection = document.createElement("div");
  productPriceSection.setAttribute("class", "product-price-section");

  let price = document.createElement("p");
  price.setAttribute("class", "price");
  price.textContent = product.productPrice;

  let divButton = document.createElement("div");

  let buyNow = document.createElement("button");
  buyNow.setAttribute("type", "button");
  buyNow.setAttribute("class", "btn btn-primary mr-4");
  buyNow.textContent = "Buy Now";

  let shoppingIcon = document.createElement("i");
  shoppingIcon.setAttribute("class", "fas fa-shopping-cart opacity-7");

  divButton.appendChild(buyNow);
  divButton.appendChild(shoppingIcon);

  productPriceSection.appendChild(price);
  productPriceSection.appendChild(divButton);

  selectedProductDetails.appendChild(category);
  selectedProductDetails.appendChild(title);
  selectedProductDetails.appendChild(description);
  selectedProductDetails.appendChild(productColor);
  selectedProductDetails.appendChild(productPriceSection);
 
  productDetailsPage.appendChild(productImgGallery);
  productDetailsPage.appendChild(selectedProductDetails);


  
}

function renderSliderImageNavigation(product) {
  let slideNav = document.createElement("div");
  slideNav.setAttribute("class", "slider-nav");
  for (let i = 0; i < 3; i++) {
    let sliderNavImg = document.createElement("img");
    sliderNavImg.setAttribute("src", product.productImage);
    slideNav.appendChild(sliderNavImg);
  }

  return slideNav;
}

function renderProductColors(product) {
  let selectColor = document.createElement("div");
  selectColor.setAttribute("class", "select-color");

  for (let i = 1; i <= 2; i++) {
    let productColorSelection = document.createElement("div");
    productColorSelection.setAttribute(
      "class",
      `product-color-selection color${i}`
    );
    selectColor.appendChild(productColorSelection);
  }
  return selectColor;
}
