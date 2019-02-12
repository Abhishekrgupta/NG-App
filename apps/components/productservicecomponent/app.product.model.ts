export class Product{
    constructor(
        public ProdId: number,
        public ProdName : string,
        public CategoryName: string,
        public Price:  number
        ){   
    }


}

export const Categories = ["Electronics", "Electrical" , "Food"] ;
export const Products: Array<Product> = new Array<Product>();

Products.push(new Product(101, "Laptop", "Electronics",1000 ));
Products.push(new Product(102, "Desktop", "Electrical",2000 ));
Products.push(new Product(103, "Tablet", "Electrical",2500 ));