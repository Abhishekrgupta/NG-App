import {Product, Products} from "./app.product.model";

export class ProductLogic{
    private products: Array<Product>;

    constructor(){
        this.products= Products;
    }

    getProducts():Array<Product>{
        return this.products;
    }

    saveProducts(p: Product):Array<Product>{
        this.products.push(p)
        return this.products;
    }

    getProductById(prodId:number):boolean{
        for(let prod of this.products){
            console.log(prod);
            
            if(prodId == prod.ProdId){
                return false
            }
        }
        return true;
    }
}