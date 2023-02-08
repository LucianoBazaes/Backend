import express from "express";
import ProductManager from "./models/ProductManager.js";

const app = express();

const products = new ProductManager();
const allProducts = await products.getProduct();
console.log(allProducts);
const PORT = 8080; 



app.get('/productos', async (req, res) => {

})

app.use(express.urlencoded({ extended: true }));
