import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../view-main/services/admin.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent implements OnInit {
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  admin: any;
  phno!: number;
  pwd!: String;
  ngOnInit(): void {}

  onSubmit(value: any) {
    // this.adminService.adminLogin(value.phoneNumber,value.password).subscribe(data=>{this.admin=data,console.log(data),this.navigateToClientHome()},

    // error=>this.invalidCredentials());
    // }
    this.phno = value.phoneNumber;
    this.pwd = value.password;
    if (this.phno == 9490030909 && this.pwd == '9490030909') {
      this.navigateToAdminHome();
    } else {
      this.invalidCredentials();
    }
  }
  invalidCredentials(): void {
    this.router.navigate(['/loginfailed']);
  }

  navigateToAdminHome() {
    this.router.navigate(['admin/']);
  }
}
