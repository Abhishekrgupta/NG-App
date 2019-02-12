import { PipeTransform, Pipe } from "@angular/core";
@Pipe({
    name : "prodFilter"
})
export class ProductFilterPipe implements PipeTransform {
    transform(value : any, args : string[]){

    }
}