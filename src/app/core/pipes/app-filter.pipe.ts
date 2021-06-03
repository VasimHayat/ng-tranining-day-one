import { Pipe, PipeTransform } from "@angular/core";
import { Article } from "../models/article.model";

@Pipe({
    name:'filterPipe',
    pure:false
})
export class AppFilterPipe implements PipeTransform{


    transform(itemArray: Array<Article>,searchTerm:string) {

        console.log("Debuggin");
        
         
        if(searchTerm && searchTerm.trim()){
           return itemArray.filter((item)=>{
                return (item.owner.firstName+" "+item.owner.lastName+" "+item.text).toLowerCase().match(searchTerm.toLowerCase())
            })

        }else{
            return itemArray;
        }
        
    }

}