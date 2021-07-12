import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from '../view-main/services/engineer.service';

@Component({
  selector: 'app-engineer-logged',
  templateUrl: './engineer-logged.component.html',
  styleUrls: ['./engineer-logged.component.css'],
})
export class EngineerLoggedComponent implements OnInit {
  id: number;
  engineer: any;
  constructor(
    private engineerService: EngineerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.id = this.route.snapshot.params['engineerId'];
  }
  ngOnInit(): void {
    //  this.engineerService.engById(this.id).subscribe(data=>{this.engineer=data,console.log(data)});
  }
}
