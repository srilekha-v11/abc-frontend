import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Admin } from 'src/app/admin';  
import { Complaint } from 'src/app/complaint'; 
import { Engineer } from 'src/app/engineer'; 


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  updateEngineerDomain(engineer: any) {
    throw new Error('Method not implemented.');
  }
  getEngineerById(id: any) {
    throw new Error('Method not implemented.');
  }

  private baseURL = "http://localhost:7000/admin/";

  constructor(private http: HttpClient) { }

  getComplaintsByStatus(status: String): Observable<Complaint[]> {
    // console.log(`${this.baseURL}​​​` + `getComplaintsByStatus/${status}​​​`);
     return this.http.get<Complaint[]>("http://localhost:7000/admin/getComplaintsByStatus/"+`${status}`​​​);
    // return this.http.get<Complaint>(`${this.baseURL}​​​` + `getComplaintsByStatus/${status}​​​`);
  }
  deleteEngineerById(engineerId:number): Observable<Engineer> {
    // console.log(`${this.baseURL}​​​` + `removeEngineer/${engineerId}​​​`);
     return this.http.delete<Engineer>("http://localhost:7000/admin/removeEngineer/"+`${engineerId}`​​​);
    // return this.http.get<Engineer>(`${this.baseURL}​​​` + `removeEngineer/${engineerId}​​​`);
   
  }
  listOfEngineers():Observable<Engineer[]>{
    return this.http.get<Engineer[]>(" http://localhost:7000/admin/listOfEngineers/");

  }
  
  getEngById(engineerId:number):Observable<Engineer>{
    return this.http.get<Engineer>("http://localhost:7000/admin/getEngById/"+`${engineerId}`);
  }
  updateEngDomain(engineer:Engineer):Observable<Object>{
    return this.http.put("http://localhost:7000/admin/changeDomainOfEngineer/engineer",engineer);
  }

  adminLogin(phoneNumber:number,password:String):Observable<Admin>{
    return this.http.get<Admin>("http://localhost:7000/admin/checkAdminLogin/"+ `${phoneNumber}/`+`${password}`);

  }

  createAdmin(admin: Admin): Observable<Object> {
     return this.http.post("http://localhost:7000/admin/saveAdmin",admin);
   }

   createEnginer(engineer:Engineer):Observable<Object> {
    return this.http.post("http://localhost:7000/admin/addEngineer",engineer);
  }

}
