import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http"
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postEmployee(data:any){
    return this.http.post<any>("http://localhost:9005/departments/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:9005/departments/")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  updateEmployee(data:any,id:number){
    return this.http.put<any>("http://localhost:9005/departments/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteEmployee(id:number){
    return this.http.delete("http://localhost:9005/departments/"+id,{responseType: 'text'})
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
