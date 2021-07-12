import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EngineerService } from '../view-main/services/engineer.service';

@Component({
  selector: 'app-open-complaint-eng',
  templateUrl: './open-complaint-eng.component.html',
  styleUrls: ['./open-complaint-eng.component.css'],
})
export class OpenComplaintEngComponent implements OnInit {
  complaintResponse: any;
  id: any;
  constructor(
    private engineerService: EngineerService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.engineerService.allComplaintsOpen(this.id).subscribe(
      (data) => {
        (this.complaintResponse = data), console.log(data);
      },
      (error) => console.log(error)
    );
  }
}
