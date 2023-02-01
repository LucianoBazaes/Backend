import {promises as fs} from 'fs';

//Clase Product Manager
class ProductManager {
    constructor(path) {
        this.path = path;
        
    }
   //ID autoincrementable
    static id = 1;
}