import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../view-main/services/admin.service';
import { Engineer } from '../engineer';

@Component({
  selector: 'app-engineer-list',
  templateUrl: './engineer-list.component.html',
  styleUrls: ['./engineer-list.component.css'],
})
export class EngineerListComponent implements OnInit {
  engineers: any;

  constructor(private adminservice: AdminService, private router: Router) {}

  ngOnInit(): void {
    this.adminservice
      .listOfEngineers()
      .subscribe((data) => (this.engineers = data));
  }
  updateDomain(id: number) {
    this.router.navigate(['/admin/listOfEngineer/updateDomain', id]);
  }
  deleteEngineer(id: number) {
    this.router.navigate(['/admin/listOfEngineer/delete', id]);
  }
}
