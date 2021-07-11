import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Complaint } from 'src/app/complaint'; 
import { ComplaintResponse } from 'src/app/complaint-response'; 

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http: HttpClient) {
   }
   
   bookAComplaint(clientId:number,complaint:Complaint):Observable<Object>{
    return this.http.post("http://localhost:7000/complaint/addProductComp/"+`${clientId}`,complaint);
  }

  listOfComplaints(clientId:number):Observable<Complaint[]>{
    return this.http.get<Complaint[]>("http://localhost:7000/complaint/clientComplaints/"+`${clientId}`);

  }
}
