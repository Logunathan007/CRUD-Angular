import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

  datas:any = []

  constructor(private http:HttpClient) { }

  URL:string = `http://localhost:3000/datas`

  getRequest(){
    return this.http.get(this.URL)
  }

  deleteRequest(id:any){
    return this.http.delete(this.URL+`/${id}`)
  }

  putRequest(id:any,obj:any){
    return this.http.put(this.URL+`/${id}`,obj)
  }

  postRequest(obj:any){
    return this.http.post(this.URL,obj)
  }

  refresh(){
    while(this.datas.length != 0){
      this.datas.pop();
    }
    this.getRequest().subscribe((data:any)=>{

      data.forEach((ele:any)=>this.datas.push(ele))
    });

  }
}
