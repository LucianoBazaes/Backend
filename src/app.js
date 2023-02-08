import express from "express";
import ProductManager from "./models/ProductManager.js";

const app = express();

const products = new ProductManager();

// const allProducts = await products.getProduct();

const PORT = 8080; 

// app.get('/products', async (req, res) => {
// console.log(await allProducts)
// })

app.use(express.urlencoded({ extended: true }));












 app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
 }
 )