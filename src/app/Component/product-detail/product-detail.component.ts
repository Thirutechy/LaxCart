import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../sharedservice/api.service';
import { ActivatedRoute } from '@angular/router';
import { product } from '../product-view/productmodel';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {

  productdata:any|product;
  showadd:boolean =true;
  showremove:boolean= false;

  constructor(private api:ApiService, private activatedroute:ActivatedRoute){ }

  ngOnInit(): void {

   let productid = this.activatedroute.snapshot.paramMap.get('productid')

    productid && this.api.getproductbyid(productid).subscribe((res)=>{
      this.productdata = res;
      
    })
   
    
  }
  addtocart(productdata:product){
    this.showadd=false;
    this.showremove=true;
    this.api.addtocart(productdata)

  }

  removeItem(productdata:product){

    this.showadd=true;
    this.showremove=false;
    this.api.removecartItems(productdata)
  }


}
