import { Component } from '@angular/core';
import { CommunicateService } from '../services/communicate.service';

@Component({
  selector: 'app-put-data',
  templateUrl: './put-data.component.html'
})
export class PutDataComponent {
  id:number|string = ""
  name = ""

  constructor(private cs:CommunicateService){}

  putReq(){
    this.cs.putRequest(this.id,{name:this.name}).subscribe((data)=>{
      try{
        console.log(data);
      }catch(e){
        console.log("Data not fount")
      }
    })
    this.id = ""
    this.name = ""
    this.cs.refresh();
  }
}
