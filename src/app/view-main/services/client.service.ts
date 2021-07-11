import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Client } from 'src/app/client'; 

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseURL = "http://localhost:7000/client/";

  constructor(private http: HttpClient) { }


  createClient(client: Client): Observable<Object> {
    return this.http.post("http://localhost:7000/client/saveClient", client);
    //  return this.http.post(`${this.baseURL}` + `saveClient`,client);
    //  http://localhost:7000/client/saveClient
   }
   checkLogin(phoneNumber:number,password:String):Observable<Client>{
   return this.http.get<Client>("http://localhost:7000/client/checkLogin/"+ `${phoneNumber}/`+`${password}`);
   }

   clientById(clientId:number):Observable<Client>{
     return this.http.get<Client>("http://localhost:7000/client/getById/"+`${clientId}`);
   }

   closeComplaint(complaintId:number):Observable<Object>{
     return this.http.post("http://localhost:7000/client/closingAComaplaint/"+`${complaintId}`,Object);
   }
}

