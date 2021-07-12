import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from '../view-main/services/client.service';
import { ComplaintService } from '../view-main/services/complaint.service';

@Component({
  selector: 'app-list-of-complaints',
  templateUrl: './list-of-complaints.component.html',
  styleUrls: ['./list-of-complaints.component.css'],
})
export class ListOfComplaintsComponent implements OnInit {
  clientId: any;
  complaintList: any;
  client: any;
  constructor(
    private complaintService: ComplaintService,
    private clientService: ClientService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clientId = this.route.snapshot.params['clientId'];
    this.clientService.clientById(this.clientId).subscribe((data) => {
      (this.client = data), console.log(data);
    });

    this.complaintService.listOfComplaints(this.clientId).subscribe(
      (data) => {
        (this.complaintList = data), console.log(data);
      },
      (error) => console.log(error)
    );
  }

  changeStatus(complaintId: number) {
    this.clientService.closeComplaint(complaintId).subscribe(
      (data) => {
        console.log(data),
          alert('Status Changed'),
          this.router.navigate([
            '/client/complaint/allComplaints/',
            this.clientId,
          ]);
      },
      (error) => console.log(error)
    );
  }
}
