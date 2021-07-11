import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../view-main/services/product.service'; 

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id: number = 0;
  idc:number=0;
  @Input() publicparentData: any;
  productId:number=0;
  product: Product = new Product;
  productError!: Product;

  constructor(private productService:ProductService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['productId'];
    this.idc=this.route.snapshot.params['clientId'];
    console.log(this.idc);
    this.productService.getProductById(this.id).subscribe(data => {
      this.product = data; console.log(data);
    },
    error => console.log(error));
  }

  onSubmit(){

    this.productService.updateProduct(this.product).subscribe(data => {console.log(data),

      this.navigateToProductList(this.idc);

    }, error =>{
      this.productError = error.error;
      console.log(error)});

  }

  navigateToProductList(idc:number){
    this.router.navigate(['/client/product/productList/',idc]);
  }
  // updateProduct(value:number){
  //   this.productId= value;
  //   this.productService.updateProductWarrenty(this.productId).subscribe(data=>{console.log(data)},error=> console.log(error));
  //   console.log(this.product);
  // }
}
