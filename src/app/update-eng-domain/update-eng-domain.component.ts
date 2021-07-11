import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../view-main/services/admin.service'; 
import { Engineer } from '../engineer';

@Component({
  selector: 'app-update-eng-domain',
  templateUrl: './update-eng-domain.component.html',
  styleUrls: ['./update-eng-domain.component.css']
})
export class UpdateEngDomainComponent implements OnInit {
  engineer: Engineer = new Engineer();
  id: any;

  constructor(private adminService: AdminService, private router: Router, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['engineerId'];
    this.adminService.getEngById(this.id).subscribe(data => {
      this.engineer = data; console.log(data);
    },
      error => console.log(error));
  }

  onSubmit() {
    this.adminService.updateEngDomain(this.engineer).subscribe(data => {
      console.log(data)
    }, error => console.log(error));
    alert("Domain Updated");
    this.navigateToEngineerList();
  }
  navigateToEngineerList() {
    this.router.navigate(['/admin/listOfEngineer']);
  }

}
