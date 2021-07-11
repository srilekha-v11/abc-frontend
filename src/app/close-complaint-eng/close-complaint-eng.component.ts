import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EngineerService } from '../view-main/services/engineer.service'; 

@Component({
  selector: 'app-close-complaint-eng',
  templateUrl: './close-complaint-eng.component.html',
  styleUrls: ['./close-complaint-eng.component.css']
})
export class CloseComplaintEngComponent implements OnInit {
  complaintResponse:any;
  id:any;
  constructor(private engineerService:EngineerService,private route:ActivatedRoute,private router:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.engineerService.allComplaintsClosed(this.id).subscribe(data=>{this.complaintResponse=data,console.log(data)},error=>console.log(error));
  }

}
