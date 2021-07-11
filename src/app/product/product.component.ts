import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../view-main/services/client.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  clientId: any;
  client: any;

  constructor(private clientService :ClientService , private router:Router, private route:ActivatedRoute) { }
//private router: Router
  ngOnInit(): void {
    this.route.snapshot.params['clientId'];
    // this.clientId = this.route.snapshot.params['clientId'];
    // this.clientService.clientById(this.clientId).subscribe(data=>{console.log(data),this.client=data});
  }

  // redirectToProductList(){
  //   this.router.navigate(['client/product/productList']);
  // }

}
