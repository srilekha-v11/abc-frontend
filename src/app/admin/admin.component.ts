import { WeekDay } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Complaint } from '../complaint';
import { EngineerService } from '../view-main/services/engineer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  complaintList: Complaint[] = [];
  value: any;

  constructor(
    private engineerService: EngineerService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  redirectComplaint() {
    this.router.navigate(['/admin/listOfAllcomplaints']);
  }
}
