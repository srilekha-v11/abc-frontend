import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../view-main/services/client.service';
import { ComplaintService } from '../view-main/services/complaint.service';
import { ProductService } from '../view-main/services/product.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css'],
})
export class RegisterClientComponent implements OnInit {
  client: Client = new Client();
  clientError!: Client;
  // product:Product=new Product();
  // complaint:Complaint = new Complaint();
  constructor(
    private clientService: ClientService,
    private complaintService: ComplaintService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}
  onSubmit() {
    console.log('inside onsubmit method..');
    // console.log(value);
    this.saveClient();
    // this.saveProduct();
    // this.saveComplaint();
  }
  // saveProduct(){
  //   this.productService.addProduct(this.product).subscribe( data =>{console.log(data);},(error)=>console.log(error));
  // }
  saveClient() {
    this.clientService.createClient(this.client).subscribe(
      (data) => {
        console.log(data);
        alert(' Added Sucessfully!!');
        this.navigateToLogin();
      },
      (error) => {
        this.clientError = error.error;
        console.log(error);
        //alert("fields are empty");
      }
    );
  }
  // saveComplaint(){
  //   this.complaintService.bookAComplaint(this.complaint).subscribe(data=>console.log(data));
  // }

  navigateToLogin() {
    this.router.navigate(['/client/login']);
  }
}
