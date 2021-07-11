import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{NgxPaginationModule} from 'ngx-pagination'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineerComponent } from './engineer/engineer.component';
import { ClientComponent } from './client/client.component';
import { ViewComponent } from './view/view.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { AdminComponent } from './admin/admin.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FetchProductComponent } from './fetch-product/fetch-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ComplaintByStatusComponent } from './complaint-by-status/complaint-by-status.component';
import { DeleteEngineerComponent } from './delete-engineer/delete-engineer.component';
import { EngineerByComplaintComponent } from './engineer-by-complaint/engineer-by-complaint.component';
import { BookComplaintComponent } from './book-complaint/book-complaint.component';
import { AllComplaintsComponent } from './all-complaints/all-complaints.component';
import { EngineerListComponent } from './engineer-list/engineer-list.component';
import { UpdateEngDomainComponent } from './update-eng-domain/update-eng-domain.component';
import { ListOfComplaintsComponent } from './list-of-complaints/list-of-complaints.component';
import { RegisterClientComponent } from './register-client/register-client.component';
import { LoginClientComponent } from './login-client/login-client.component';
import { InvalidCredentialsComponent } from './invalid-credentials/invalid-credentials.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginEngineerComponent } from './login-engineer/login-engineer.component';
import { RegisterEngineerComponent } from './register-engineer/register-engineer.component';
import { AllComplaintsAdminComponent } from './all-complaints-admin/all-complaints-admin.component';
import { CloseComplaintEngComponent } from './close-complaint-eng/close-complaint-eng.component';
import { OpenComplaintEngComponent } from './open-complaint-eng/open-complaint-eng.component';
import { EngComplaintComponent } from './eng-complaint/eng-complaint.component';
import { AllComplaintsEngComponent } from './all-complaints-eng/all-complaints-eng.component';
import { ClientALloginComponent } from './client-allogin/client-allogin.component';
import { EngineerLoggedComponent } from './engineer-logged/engineer-logged.component';
import { ErrorComponent } from './error/error.component';
import { GlobalErrorHandler } from './global-error-handler.service';



@NgModule({
  declarations: [
    AppComponent,
    EngineerComponent,
    ClientComponent,
    ViewComponent,
    ComplaintComponent,
    AdminComponent,
    AddProductComponent,
    FetchProductComponent,
    DeleteProductComponent,
    UpdateProductComponent,
    ProductListComponent,
    ProductComponent,
    ComplaintByStatusComponent,
    DeleteEngineerComponent,
    EngineerByComplaintComponent,
    BookComplaintComponent,
    AllComplaintsComponent,
    EngineerListComponent,
    UpdateEngDomainComponent,
    ListOfComplaintsComponent,
    RegisterClientComponent,
    LoginClientComponent,
    InvalidCredentialsComponent,
    LoginAdminComponent,
    LoginEngineerComponent,
    RegisterEngineerComponent,
    AllComplaintsAdminComponent,
    CloseComplaintEngComponent,
    OpenComplaintEngComponent,
    EngComplaintComponent,
    AllComplaintsEngComponent,
    ClientALloginComponent,
    EngineerLoggedComponent,
    ErrorComponent,
    // GlobalErrorHandler

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  exports: [
    HttpClientModule
  ],
  providers: [
    { provide: ErrorHandler, useClass:GlobalErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
