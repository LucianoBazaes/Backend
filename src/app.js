import express from "express";
import ProductManager from "./models/ProductManager.js";

const app = express();

const products = new ProductManager();

const allProducts = await products.getProduct();

const PORT = 8080;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


// app.get("/products", (req, res) => {
//   res.log('Servidor con Express')});


//Obtener todos los productos
  app.get('/products', async (req, res) => {

   let limit = parseInt(req.query.limit);

   let productList = await products.getProduct();

   let productLimit;

   if(!limit) {
      return res.send(await allProducts)
   } else {
       productList = await products.getProduct();
       productLimit = productList.slice(0, limit);
   }
   res.send(productLimit);

  })


//Obtener prodcutos mediante su ID
   app.get('/products/:id', async (req,res) => {
      let product = await products.getProductById(parseInt(req.params.id));

      if(product == null) {
         res.send("Product Not Found")
      } else {
         res.send(product) 
      }   
  })
  


app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
