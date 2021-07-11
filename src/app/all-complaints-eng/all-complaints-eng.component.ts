import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from '../complaint';
import { EngineerService } from '../view-main/services/engineer.service'; 

@Component({
  selector: 'app-all-complaints-eng',
  templateUrl: './all-complaints-eng.component.html',
  styleUrls: ['./all-complaints-eng.component.css'],
})
export class AllComplaintsEngComponent implements OnInit {
  complaintResponse: any;

  id:any;
  constructor(private engineerService: EngineerService,private router:Router,private route:ActivatedRoute ) {}

  ngOnInit(): void {

    this.id= this.route.snapshot.params['id'];
   

    this.engineerService.allComplaints(this.id).subscribe(
      (data) => {
        console.log(data), (this.complaintResponse = data);
      },
      (error) => console.log(error)
    );
  }
}
