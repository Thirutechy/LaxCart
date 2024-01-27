import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../sharedservice/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
public cartitems:number=0;



  constructor(private api:ApiService){

  }
  ngOnInit(): void {
    this.api.products().subscribe(res=>{
      this.cartitems = res.length;
    })
    
  }




}
