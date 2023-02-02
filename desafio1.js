//Clase
class ProductManager {
   constructor(){
    this.products = [];
   }
   
   //ID autoincrementable
    static id = 1;
    
   //Método que va agregando mis productos a mi array
   addProduct(title, description, price, thumbnail, code, stock) {

      const NewProduct = { title, description, price, thumbnail, code, stock, id: ProductManager.id };
      
      //Validacion para que los campos esten completos
      if(Object.values(NewProduct).includes(undefined || '')) {

         console.log('Los campos requeridos deben estar completos');

      //Obtengo un arreglo con todos los codigos de mis productos y luego con el metodo includes verifico si el codigo nuevo producto ya existe o no.
      } else if (this.getProduct().map(item => item.code).includes(NewProduct.code)) {
          console.log(`El código ${NewProduct.code} ya existe`);

      } else { 
      //Aca el ID se incrementa a medida que se agrega un producto nuevo al array "Products"
      ProductManager.id = ProductManager.id + 1;

      this.products.push(NewProduct);

      }
   }

   //Método para obtener todos mis elementos creados
     getProduct() {
     return this.products;
    }

   //Método para buscar si un producto existente o no dentro de mi array mediante su ID
     getProductById(id) {
      
       const producto = this.products.find((producto) => producto.id == id);
      
       if(producto) {
          console.log(producto)
       } else {
          console.log('Product Not Found');
       }
    }
}



//Instancio la clase ProductManager
const productos = new ProductManager

//Creo mi primer producto
productos.addProduct( 'Remera Nike de color verde', 2000, 'https://www.tripstore.com.ar/media/catalog/product/cache/4769e4d9f3516e60f2b4303f8e5014a8/9/2/927422-222_0_7.jpg', 'ABC123', 10);

//Creo mi segundo producto
productos.addProduct('Buzo Nike', 'Buzo Nike de color negro deportivo', 14000,'https://www.tripstore.com.ar/media/catalog/product/cache/25e89759b69d23d0ee436c9ddbb4ede0/D/M/DM6875-010_0.jpg', 'ABC234', 6);


//Creo mi tercer producto
productos.addProduct('Medias Nike', 'Medias Nike negras cortas deportivas', 3000, 'https://www.tripstore.com.ar/media/catalog/product/cache/25e89759b69d23d0ee436c9ddbb4ede0/S/X/SX7803-010_0.jpg', 'ABC345', 8);


//Creo mi cuarto producto
productos.addProduct('Pantalón Nike', 'Pantalón Nike Gris Air', 26000, 'https://www.tripstore.com.ar/media/catalog/product/cache/25e89759b69d23d0ee436c9ddbb4ede0/D/M/DM5209-073_0.jpg', 'ABC456', 4);



//Busco producto con ID que existe
//   productos.getProductById(2);


//Busco producto con ID que no existe
//   productos.getProductById(5);

//Muestro por consola todos mis productos agregados  
 console.log(productos.getProduct());