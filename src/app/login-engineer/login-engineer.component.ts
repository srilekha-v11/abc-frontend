import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from '../view-main/services/engineer.service'; 

@Component({
  selector: 'app-login-engineer',
  templateUrl: './login-engineer.component.html',
  styleUrls: ['./login-engineer.component.css']
})
export class LoginEngineerComponent implements OnInit {
engineer:any;
  constructor(private engineerService:EngineerService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(value:any){
    this.engineerService.engineerLogin(value.phoneNumber,value.password).subscribe(data=>{this.engineer=data,console.log(data),this.navigateToEngineerHome(this.engineer.engineerId)},
    
    error=>this.invalidCredentials());
    }
      invalidCredentials(): void {
        this.router.navigate(['/loginfailed']);
      }
     
      navigateToEngineerHome(engineerId:number) {
        this.router.navigate(['engineer/logged/',engineerId]);
    
      }

}
