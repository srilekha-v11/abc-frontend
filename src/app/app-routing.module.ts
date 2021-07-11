import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminComponent } from './admin/admin.component';
import { AllComplaintsAdminComponent } from './all-complaints-admin/all-complaints-admin.component';
import { AllComplaintsEngComponent } from './all-complaints-eng/all-complaints-eng.component';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';
import { BookComplaintComponent } from './book-complaint/book-complaint.component';
import { ClientALloginComponent } from './client-allogin/client-allogin.component';
import { ClientComponent } from './client/client.component';
import { CloseComplaintEngComponent } from './close-complaint-eng/close-complaint-eng.component';
import { ComplaintByStatusComponent } from './complaint-by-status/complaint-by-status.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { DeleteEngineerComponent } from './delete-engineer/delete-engineer.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EngComplaintComponent } from './eng-complaint/eng-complaint.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { EngineerLoggedComponent } from './engineer-logged/engineer-logged.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ErrorComponent } from './error/error.component';
import { FetchProductComponent } from './fetch-product/fetch-product.component';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { ListOfComplaintsComponent } from './list-of-complaints/list-of-complaints.component';
import { LoginAdminComponent } from './login-admin/login-admin.component'; 
import { LoginClientComponent } from './login-client/login-client.component'; 
import { LoginEngineerComponent } from './login-engineer/login-engineer.component';  
import { OpenComplaintEngComponent } from './open-complaint-eng/open-complaint-eng.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { RegisterEngineerComponent } from './register-engineer/register-engineer.component';
import { UpdateEngDomainComponent } from './update-eng-domain/update-eng-domain.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  //dashBoard and home Routes
  {path:'',component:ViewComponent},
  {path:'error',component:ErrorComponent},
  {path:'engineer',component:EngineerComponent},
  {path:'admin',component:AdminComponent},
  {path:'client/' ,component:ClientComponent},
  {path:'client/logged/:clientId',component:ClientALloginComponent},
  {path:'engineer/logged/:engineerId',component:EngineerLoggedComponent},
  // Login Routes
  {path:'client/login',component:LoginClientComponent},
  {path:'client/login/register',component:RegisterClientComponent},
  {path:'admin/login',component:LoginAdminComponent},
  {path:'engineer/login',component:LoginEngineerComponent},
  {path:'engineer/login/register',component:RegisterEngineerComponent},
  {path:'client/logged/product/:clientId',component:ProductComponent},
  {path:'client/complaint',component:ComplaintComponent},
  {path:'loginfailed',component:InvalidCredentialsComponent},
  //client Routing
  {path:'client/product/addProduct/:clientId',component:AddProductComponent},
  {path:'client/product/viewProduct/:productId',component:FetchProductComponent},
  {path:'client/product/deleteProduct/:productId/:clientId',component:DeleteProductComponent},
  {path:'client/product/UpdateProduct/:productId/:clientId', component:UpdateProductComponent},
  {path:'client/product/productList/:clientId',component:ProductListComponent},
  {path:'client/logged/complaintHistory/:clientId/:complaintId',component:ListOfComplaintsComponent},
  {path:'client/complaint/allComplaints/:clientId',component:AllComplaintsComponent},
  {path:'client/logged/product/bookComplaint/:productId/:clientId/:modelNumber',component:BookComplaintComponent},
  //Admin Routing
  {path:'admin/viewComplaint',component:ComplaintByStatusComponent},
  {path:'admin/deleteEngineer',component:DeleteEngineerComponent},
  {path:'admin/listOfEngineer',component:EngineerListComponent},
  {path:'admin/listOfEngineer/updateDomain/:engineerId',component:UpdateEngDomainComponent},
  {path:'admin/listOfEngineer/delete/:engineerId',component:DeleteEngineerComponent},
  {path:'admin/listOfAllcomplaints',component:AllComplaintsAdminComponent},
  //Engineer Routing
  {path:'engineer/engComplaints/:id',component:EngComplaintComponent},
  {path:'engineer/engComplaints/engCloseComplaints/:id',component:CloseComplaintEngComponent},
  {path:'engineer/engComplaints/engOpenComplaints/:id',component:OpenComplaintEngComponent},
  {path:'engineer/engComplaints/allComplaints/:id',component:AllComplaintsEngComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
