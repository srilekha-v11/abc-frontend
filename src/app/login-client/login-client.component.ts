import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../view-main/services/client.service';
import { Complaint } from '../complaint';
import { Product } from '../product';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css'],
})
export class LoginClientComponent implements OnInit {
  client: any;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  product: Product = new Product();
  complaint: Complaint = new Complaint();
  ngOnInit(): void {}
  onSubmit(value: any) {
    this.clientService.checkLogin(value.phoneNumber, value.password).subscribe(
      (data) => {
        (this.client = data),
          console.log(data),
          this.toDashBoard(this.client.clientId);
      },

      (error) => this.invalidCredentials()
    );
  }
  invalidCredentials(): void {
    this.router.navigate(['/loginfailed']);
  }

  // navigateToClientHome() {
  //   this.toDashBoard(clientId:any);
  //   this.router.navigate(['client/']);

  // }

  toDashBoard(clientId: number) {
    this.router.navigate(['client/logged/', clientId]);
  }
}
