import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client';
import { ClientService } from '../view-main/services/client.service';

@Component({
  selector: 'app-client-allogin',
  templateUrl: './client-allogin.component.html',
  styleUrls: ['./client-allogin.component.css']
})
export class ClientALloginComponent implements OnInit {
  clientId: any;
  client:Client=new Client();
  constructor(private route:ActivatedRoute,private router:Router,private clientService :ClientService) { }

  ngOnInit(): void {
    this.clientId= this.route.snapshot.params['clientId'];
    this.clientService.clientById(this.clientId).subscribe(data=>{this.client=data,console.log(data)});
    
  }

}
