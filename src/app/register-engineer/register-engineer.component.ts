import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../view-main/services/admin.service';
import { Engineer } from '../engineer';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register-engineer',
  templateUrl: './register-engineer.component.html',
  styleUrls: ['./register-engineer.component.css']
})
export class RegisterEngineerComponent implements OnInit {
engineer:Engineer= new Engineer();
engineerError!: Engineer;
addForm!: NgForm ;

  constructor(private adminService:AdminService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log('inside onsubmit method..')
    this.saveEng(this.addForm);
    
  }
  saveEng(addForm: NgForm){
    this.adminService.createEnginer(this.engineer).subscribe(data=>{
      console.log(data);
      alert(" Added Sucessfully!!");
      this.navigateToLogin();},
    error =>{
      this.engineerError = error.error;
      console.log(error);
      //alert("fields are empty");
    });

  }
  // saveProduct(addForm: NgForm){
  //   this.productService.addProduct(this.product).subscribe( data => {
  //     console.log(data);
  //     alert("Product Added Sucessfully!!");
  //     this.navigateTo(this.clientId);}, 
      
  //     error =>{
  //       this.productError = error.error;
  //       console.log(error);
        
  //       //alert(error.message);
  //     });
  //     //alert("Product Added Sucessfully!!");
  //    // this.navigateTo();

  // }

  navigateToLogin(){
    this.router.navigate(['/engineer/login']);  
  }
}
