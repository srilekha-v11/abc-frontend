import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from '../view-main/services/engineer.service';

@Component({
  selector: 'app-eng-complaint',
  templateUrl: './eng-complaint.component.html',
  styleUrls: ['./eng-complaint.component.css'],
})
export class EngComplaintComponent implements OnInit {
  id: any;
  engineer: any;
  constructor(
    private engineerService: EngineerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    //  this.engineerService.engById(this.id).subscribe(data=>{this.engineer=data,console.log(data)});
  }
}
