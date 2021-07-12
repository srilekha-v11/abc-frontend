import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Complaint } from '../complaint';
import { ComplaintService } from '../view-main/services/complaint.service';
import { Product } from '../product';
import { ProductService } from '../view-main/services/product.service';

@Component({
  selector: 'app-book-complaint',
  templateUrl: './book-complaint.component.html',
  styleUrls: ['./book-complaint.component.css'],
})
export class BookComplaintComponent implements OnInit {
  bookedComplaint: any;
  clientId: any;
  modelNumber: any;
  complaint: Complaint = new Complaint();
  id: any;
  product: Product = new Product();
  productId: any;

  constructor(
    private complaintService: ComplaintService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.modelNumber = this.route.snapshot.params['modelNumber'];
    this.clientId = this.route.snapshot.params['clientId'];
    this.productId = this.route.snapshot.params['productId'];
    this.productService.getProductById(this.productId).subscribe((data) => {
      (this.product = data), console.log(data);
    });
    console.log(this.product);
  }

  onSubmit() {
    if (this.complaint.productModelNumber == this.modelNumber) {
      this.complaintService
        .bookAComplaint(this.clientId, this.complaint)
        .subscribe(
          (data) => {
            (this.bookedComplaint = data),
              console.log(this.bookedComplaint),
              alert(
                'Your Complaint has been Registered and will be Resolved within 12 days'
              ),
              this.navigateToCompliants(this.clientId);
          },
          (error) => console.log(error)
        );
    } else {
      alert('Product Model number mismatch');
    }
  }

  navigateToCompliants(clientId: number) {
    this.router.navigate(['/client/complaint/allComplaints', clientId]);
  }
}
