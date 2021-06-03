import { Component } from '@angular/core';
import { ArticleData } from './core/data/article.data';
import { Article } from './core/models/article.model';

 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
    searchTerm:string; 
    orderByKey:string;

    private articleArray:Array<Article>  = [];
    uiArticleArray:Array<Article>  = [];

    constructor(){
        this.articleArray = ArticleData.data;
        this.uiArticleArray = [...this.articleArray];
    }


    filterData(){
        this.uiArticleArray = [];
        if(this.searchTerm && this.searchTerm.trim()){
           this.uiArticleArray =  this.articleArray.filter((item)=>{
                 return (item.owner.firstName+" "+item.owner.lastName+" "+item.text).toLowerCase().match(this.searchTerm.toLowerCase())
             })
 
         }else{
            this.uiArticleArray = [...this.articleArray];// copying 
         }
         
    }

    sortData(){       
       this.uiArticleArray.sort( this.orderByKey =="name" ?this.sortByName:this.sortByArticleText);
    }


    sortByName(item1:Article,item2:Article){
        if(item1.owner.firstName > item2.owner.firstName){
            return 1;
        }else if(item1.owner.firstName == item2.owner.firstName){
            return 0;
        }else{
            return -1;
        }
    }

    sortByArticleText(item1:Article,item2:Article){
        if(item1.text > item2.text){
            return 1;
        }else if(item1.text == item2.text){
            return 0;
        }else{
            return -1;
        }
    }

}
