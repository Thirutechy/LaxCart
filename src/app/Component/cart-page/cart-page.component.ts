import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../sharedservice/api.service';
import { product } from '../product-view/productmodel';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.css'
})
export class CartPageComponent implements OnInit{

  showProduct:any=[];
  public totalAmount:number=0;
  public addressForm:boolean=false

  myform:FormGroup|any;


  constructor(private api:ApiService){}

  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.showProduct = res;
      this.totalAmount = this.api.calculatePrice();
      console.log("total amount is" , this.totalAmount );
      

    })

    //form
    this.myform = new FormGroup({
      email:new FormControl ('',Validators.required),
      name:new FormControl ('',Validators.required),
      mobilenumber:new FormControl ('',Validators.required),
      address:new FormControl ('',Validators.required)
    })


  }

  deleteItem(item:product){
    this.api.removecartItems(item);

  }
  Empty(){
    this.api.removeAllItems();
  }

  cancel(){
    this.addressForm = false;
    this.myform.reset();
  }

  onSubmit(){
    this.myform.value;
    console.log(this.myform.value)
    this.myform.reset();
  }

}
