import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/product';
import { ProductResponse } from 'src/app/product-response'; 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURL = "http://localhost:7000/product/";
  
  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Object> {
     //return this.http.post(`${this.baseURL}` + `save`,product);
     return this.http.post("http://localhost:7000/product/save",product);
   }
   getProductById(id: number): Observable<Product> {
    console.log(`${this.baseURL}​​​` + `getById/${id}​​​`);
     return this.http.get<Product>("http://localhost:7000/product/getById/"+`${id}`​​​);
    // return this.http.get<Product>(`${this.baseURL}​​​` + `getProduct/${id}​​​`);
  }

  deleteProduct(id:number):Observable<Product>{
    console.log(`${this.baseURL}`+`delete/${id}`);
    return this.http.delete<Product>(`${this.baseURL}`+`delete/${id}`);
   // return this.http.delete<Product>("http://localhost:7000/product/delete/"+`${id}`​​​);
  }

  updateProduct(product: Product): Observable<Object> {
    return this.http.put("http://localhost:7000/product/update",product);
  //return this.http.put(`${this.baseURL}`+`update`,customer);
 }

 getProductList(clientId:number): Observable<ProductResponse[]> {
  return this.http.get<ProductResponse[]>(`http://localhost:7000/client/getAllClientProducts/`+`${clientId}`);
  //return this.http.get("http://localhost:7000/product/ListOfProducts");
}

addProductwithId(clientId:number,product:Product):Observable<object>{
  return this.http.put("http://localhost:7000/product/saveProduct/"+`${clientId}`,product);
}

getAllClientProducts(clientId:number):Observable<ProductResponse[]>{
  return this.http.get<ProductResponse[]>("http://localhost:7000/client/getAllClientProducts/"+`${clientId}`)
}
}
