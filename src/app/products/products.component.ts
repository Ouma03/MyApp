import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
  public  products : any;
  public keyword : string ="";
  constructor() {
}
  ngOnInit() {
    this.products=[
      {"id" :1, "name":"Computer","price":4300},
      {"id" :2, "name":"Printer","price":3255},
      {"id" :3 , "name":"Smartphone","price":2100},
      {"id" :4, "name":"Mouse","price":111},
    ];
}

  deletProduct(p: any) {
    let index = this.products.indexOf(p);
    this.products.splice(index,1);

  }

  search() {
    console.log(this.products);
    let result : any[] =[];
    for (let p of this.products){
      if(p.name.includes(this.keyword)){
        result.push(p);
      }
    }
    this.products = result;
  }
}
