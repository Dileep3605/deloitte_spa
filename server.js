const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const products = [
  {
    productId: "101",
    productTitle: "Coombes",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/OEC-Scena-12-300x300.jpg",
    productCategory: "Lounge",
    productPrice: "2,600",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "102",
    productTitle: "Keeve Set",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/608-300x300.jpg",
    productCategory: "Table & Chairs",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "103",
    productTitle: "Nille",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/Minibook-Design_Page_27-300x300.jpg",
    productCategory: "Armchair",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "104",
    productTitle: "Momo",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/nea3-300x300.jpg",
    productCategory: "Shelves",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "105",
    productTitle: "Coombes",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/ME-ofimAtica-2-300x300.png",
    productCategory: "Lounge",
    productPrice: "2,600",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "106",
    productTitle: "Keeve Set",
    productImage:
      "http://image.com.jo/wp-content/uploads/2017/03/MEETING-DATA1UP-03-300x300.jpg",
    productCategory: "Table & Chairs",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "107",
    productTitle: "Nille",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/Guialmi-LPO-5-300x300.jpg",
    productCategory: "Armchair",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "108",
    productTitle: "Momo",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/Foto-4-2_LSystem-23016-300x300.jpg",
    productCategory: "Shelves",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "109",
    productTitle: "Coombes",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/ME-ARGOS-1-300x300.jpg",
    productCategory: "Lounge",
    productPrice: "2,600",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "110",
    productTitle: "Keeve Set",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/a5-meeting-300x300.jpg",
    productCategory: "Table & Chairs",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "111",
    productTitle: "Nille",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/E-Rex-classic-07-wenge-300x300.jpg",
    productCategory: "Armchair",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    productId: "112",
    productTitle: "Momo",
    productImage:
      "http://image.com.jo/wp-content/uploads/2016/11/ME-zabra-300x300.png",
    productCategory: "Shelves",
    productPrice: "590",
    productRating: 3,
    productDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// to resolve CORS Policy Error
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, PATCH, OPTIONS, PUT"
  );
  next();
});

app.get("/api/products/", (req, res) => {
  res.status(200).json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  let filterProduct = products.filter(function (product) {
    return id == product.productId;
  });
  res.status(200).json(filterProduct[0]);
});

app.listen(port);
