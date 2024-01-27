import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../sharedservice/api.service';
import { product } from './productmodel';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent implements OnInit{

data!:any|product[];


  constructor(private api:ApiService){

  }


  ngOnInit(): void {
    this.displayProduct();
  }

  displayProduct(){
    this.api.getproducts().subscribe(res=>{
      this.data = res;

      console.log(res)

    })
  }

  addtocart(items:product){
    this.api.addtocart(items);
    console.log(items);
  }

removeItem(items:product){
  this.api.removecartItems(items);
}
  

  }





