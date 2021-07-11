import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

  constructor(private injector: Injector) { }

  handleError(error: any){
    const router=this.injector.get(Router);
    console.log(`Request URL:${router.url}`);
    

    if(error instanceof HttpErrorResponse){
      console.error('Backend returned status code:',error.status);
      console.error('Response body:',error.message);
     // window.alert("wrong url")
    }
    else{
      console.error('An error occurred:',error.message);
    }
    router.navigate(['error']);
    

  }
  
}
