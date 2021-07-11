import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Complaint } from 'src/app/complaint';  
import { ComplaintResponseTotal } from 'src/app/complaint-response-total'; 
import { Engineer } from 'src/app/engineer';  

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  private baseURL = "http://localhost:7000/engineer/";
  constructor(private http: HttpClient) { }

  engineerLogin(phoneNumber:number,password:String):Observable<Engineer>{
    return this.http.get<Engineer>("http://localhost:7000/engineer/checkLogin/"+ `${phoneNumber}/`+`${password}`);
  }

  allComplaintsSorted():Observable<Complaint[]>{
    return this.http.get<Complaint[]>("http://localhost:7000/engineer/getAllComplaints");
  }
  
  allComplaints(engineerId :Number):Observable<ComplaintResponseTotal[]>{
    return this.http.get<ComplaintResponseTotal[]>("http://localhost:7000/engineer/getAllComplaints/"+`${engineerId}`);
  }

  allComplaintsClosed(engineerId:Number):Observable<ComplaintResponseTotal[]>{
    return this.http.get<ComplaintResponseTotal[]>("http://localhost:7000/engineer/getAllClosedComplaints/"+`${engineerId}`);
  }

  allComplaintsOpen(engineerId:Number):Observable<ComplaintResponseTotal[]>{
    return this.http.get<ComplaintResponseTotal[]>("http://localhost:7000/engineer/getAllOpenComplaints/"+`${engineerId}`);
  }

  engById(engineerId:Number):Observable<Engineer>{
    return this.http.get<Engineer>("http://localhost:7000/engineer/engineerById/"+`${engineerId}`);
  }
}
