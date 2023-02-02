import { promises as fs } from "fs";

//Clase Product Manager
class ProductManager {
  constructor() {
    this.path = "./productos.txt";
    this.products = [];
  }
  //ID autoincrementable
  static id = 1;

  //Método que va agregando mis productos a mi array
  async addProduct(title, description, price, thumbnail, code, stock) {
    const newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id,
    };

    //Validacion para que los campos esten completos
    if (Object.values(newProduct).includes(undefined || "")) {
      console.log("Los campos requeridos deben estar completos");

    } else {

      const productos = await this.getProduct();
      //Obtengo un arreglo con todos los codigos de mis productos y luego con el metodo includes verifico si el codigo nuevo producto ya existe o no.
      
      if (productos.map((item) => item.code).includes(newProduct.code)) {
        console.log(`El código ${newProduct.code} ya existe`);

      }  else {

        //Aca el ID se incrementa a medida que se agrega un producto nuevo al array "Products"
        ProductManager.id = ProductManager.id + 1;

        this.products.push(newProduct);

        // Mi arreglos products, inicialmente vacio, se va escribiendo a medida que agrego productos
        await fs.writeFile(this.path, JSON.stringify(this.products), "utf-8");
      }
    }
  }

  //Método para obtener todos mis elementos creados
  async getProduct() {
    let read = await fs.readFile(this.path, "utf-8");
    return JSON.parse(read);
  }

  //Método para buscar si un producto existente o no dentro de mi array mediante su ID
  async getProductById(id) {
    const productos = await this.getProduct();

    let productId = productos.find((p) => p.id == id);
  
    if (productId) {
      return productId;
    } else {
      console.log("Product Not Found");
      return null;
    }
  }


  //Metodo para eliminar un producto mediante su id
  async deleteProduct(id) {
    const productos = await this.getProduct();

    let filterProdId = productos.filter((p) => p.id != id)

    console.log("Delete Product");
    
    await fs.writeFile(this.path, JSON.stringify(filterProdId), "utf-8");
  }
  
  async updateProduct({id,...producto}) {
    await this.deleteProduct(id);
    const productos = await this.getProduct();
    const productosModificados =[{...producto, id}, ...productos];
    await fs.writeFile(this.path, JSON.stringify(productosModificados), "utf-8");
}
}


//Instancio la clase ProductManager
const productos = new ProductManager();

//Creo mi primer producto
await productos.addProduct(
  "Remera Nike",
  "Remera Nike de color verde",
  2000,
  "image1",
  "ABC123",
  10
);

//Creo mi segundo producto
await productos.addProduct(
  "Buzo Nike",
  "Buzo Nike de color negro deportivo",
  14000,
  "image2",
  "ABC234",
  6
);

//Creo mi tercer producto
await productos.addProduct(
  "Medias Nike",
  "Medias Nike negras cortas deportivas",
  3000,
  "image3",
  "ABC345",
  8
);

//Creo mi cuarto producto
await productos.addProduct(
  "Pantalón Nike",
  "Pantalón Nike Gris Air",
  26000,
  "image4",
  "ABC456",
  4
);

//Testing

//Metodo para obtener un producto mediante su id
// const productoId = await productos.getProductById(2);
// console.log(productoId);

//Metodo para borrar un producto mediante su id
//productos.deleteProduct(1)

//Metodo para modificar un producto
productos.updateProduct(
  {
    title: 'Buzo Nike',
    description: 'Buzo Nike de color negro deportivo',
    price: 14000,
    thumbnail: 'image2',
    code: 'ABC234',
    stock: 15,
    id: 2
  }
)




