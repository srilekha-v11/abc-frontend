import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../view-main/services/product.service';

@Component({
  selector: 'app-fetch-product',
  templateUrl: './fetch-product.component.html',
  styleUrls: ['./fetch-product.component.css'],
})
export class FetchProductComponent implements OnInit {
  product: Product = new Product();
  productId: number = 0;
  id: number = 0;
  @ViewChild('productId') inputId: any;
  clientId: any;
  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['clientId'];
    this.id = this.route.snapshot.params['productId'];
    this.getProduct(this.id);
  }

  getProduct(value: any) {
    this.productId = value;
    this.productService.getProductById(this.productId).subscribe(
      (data) => {
        console.log(data);
        this.product = data;
      },
      (error) => console.log(error)
    );
    // write method to display
    // this.inputId.nativeElement.value="";
  }

  routeto(id: any) {
    this.router.navigate(['/client/logged/product/', id]);
  }
}
