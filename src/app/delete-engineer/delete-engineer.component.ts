import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../view-main/services/admin.service';
import { Engineer } from '../engineer';

@Component({
  selector: 'app-delete-engineer',
  templateUrl: './delete-engineer.component.html',
  styleUrls: ['./delete-engineer.component.css'],
})
export class DeleteEngineerComponent implements OnInit {
  engineerId: any;
  message: any;
  engineer: Engineer = new Engineer();
  id: number = 0;
  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.id = this.route.snapshot.params['productId'];
    // this.productService.deleteProduct(this.id).subscribe(data => {
    //   this.product = data; console.log(data);
    //   alert("Product with is successfully deleted!!");
    //   this.navigateToProductList();
    //},
  }

  deleteEngineer() {
    this.id = this.route.snapshot.params['engineerId'];
    this.adminService.deleteEngineerById(this.id).subscribe(
      (data) => {
        this.engineer = data;
        console.log(data);
      },
      (error) => console.log(error)
    );
    alert('Engineer Deleted');
    this.navigateTolistOfEngineers();
    this.message = 'engineer with id ' + this.id + ' Deleted';
  }
  dontDeleteEngineer() {
    alert('Engineer Not Deleted');
    this.navigateTolistOfEngineers();
  }
  navigateTolistOfEngineers() {
    this.router.navigate(['/admin/listOfEngineer']);
  }
}
