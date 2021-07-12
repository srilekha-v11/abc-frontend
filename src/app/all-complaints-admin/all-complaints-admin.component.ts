import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from '../view-main/services/engineer.service';

@Component({
  selector: 'app-all-complaints-admin',
  templateUrl: './all-complaints-admin.component.html',
  styleUrls: ['./all-complaints-admin.component.css'],
})
export class AllComplaintsAdminComponent implements OnInit {
  complaints: any;

  constructor(
    private engineerService: EngineerService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.engineerService.allComplaintsSorted().subscribe((data) => {
      console.log(data), (this.complaints = data);
    });
  }
}
