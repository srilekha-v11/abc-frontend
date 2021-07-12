import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../view-main/services/client.service';
import { Product } from '../product';
import { ProductService } from '../view-main/services/product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css'],
})
export class DeleteProductComponent implements OnInit {
  id: number = 0;
  product: Product = new Product();
  message: any;
  clientId: any;
  client: Client = new Client();
  constructor(
    private productService: ProductService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  deleteProduct() {
    this.clientId = this.route.snapshot.params['clientId'];
    this.clientService.clientById(this.clientId).subscribe((data) => {
      console.log(data), (this.client = data);
    });

    this.id = this.route.snapshot.params['productId'];
    this.productService.deleteProduct(this.id).subscribe((data) => {
      this.product = data;
      console.log(data);
      this.navigateToProductList(this.clientId);
      alert('Product is successfully deleted!!');
    });
  }
  dontDeleteProduct() {
    alert('product Not Deleted');
    //  this.router.navigate(['/client/product/productList/',clientId]);
    this.navigateToProductList(this.clientId);
  }
  navigateToProductList(clientId: any) {
    this.router.navigate(['/client/product/productList/', clientId]);
  }
}
