import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../view-main/services/client.service';
import { Product } from '../product';
import { ProductService } from '../view-main/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  product: Product = new Product();
  productList: any;
  productError!: Product;

  clientId: any;
  client: Client = new Client();
  addForm!: NgForm;

  constructor(
    private productService: ProductService,
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['clientId'];
    this.clientService.clientById(this.clientId).subscribe((data) => {
      (this.client = data), console.log(data);
    });
  }

  onSubmit() {
    console.log('inside onsubmit method..');
    this.saveProduct(this.addForm);
  }

  saveProduct(addForm: NgForm) {
    this.productService.addProductwithId(this.clientId, this.product).subscribe(
      (data) => {
        console.log(data);
        this.navigateTo(this.client.clientId);
      },
      (error) => {
        this.productError = error.error;
        console.log(error);

        //alert(error.message);
      }
    );
    // alert("Product Added Sucessfully!!");
  }

  navigateTo(clientId: number) {
    this.router.navigate(['/client/product/productList/', clientId]);
  }
}
