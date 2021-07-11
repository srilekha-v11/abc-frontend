import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../view-main/services/admin.service';

@Component({
  selector: 'app-complaint-by-status',
  templateUrl: './complaint-by-status.component.html',
  styleUrls: ['./complaint-by-status.component.css']
})
export class ComplaintByStatusComponent implements OnInit {

  @ViewChild('status') inputId :any;
  status: string ="";
  value:any;
  message:any;
  complaints :any;
  constructor(private adminService :AdminService) { }

  ngOnInit(): void {
  
  }

  getComplaints(){
    this.value=status;
    this.adminService.getComplaintsByStatus(this.status).subscribe(data=>{console.log(data);this.complaints=data},error => console.log(error));
   

  }
}

