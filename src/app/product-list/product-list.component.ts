import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../view-main/services/client.service';
import { ProductService } from '../view-main/services/product.service'; 

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productResponse:any;
  id: any;
  clientId: any;
  client:Client=new Client();
  constructor(private  product: ProductService ,private clientService :ClientService, private router: Router ,private route:ActivatedRoute) { }

  viewProduct(id: number){
    this.router.navigate(['/client/product/viewProduct',id]);
  }

  UpdateProduct(id: number,clientId:number){
    this.router.navigate(['/client/product/UpdateProduct',id,clientId]);
}

deleteProduct(id: number,clientId:number){
  this.router.navigate(['/client/product/deleteProduct',id,clientId]);
}

bookComplaint(productId:number,clientId:number,modelNumber:String){
  this.router.navigate(['/client/logged/product/bookComplaint',productId,clientId,modelNumber])
}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['clientId'];
    this.clientId= this.route.snapshot.params['clientId'];
    this.clientService.clientById(this.clientId).subscribe(data=>{this.client=data,console.log(data)});
    this.product.getProductList(this.clientId).subscribe(data=>{this.productResponse=data,console.log(data)
    })
  }

  
}
