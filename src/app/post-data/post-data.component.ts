import { Component } from '@angular/core';
import { CommunicateService } from '../services/communicate.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html'
})
export class PostDataComponent {
  id:number|string = ""
  name = ""

  constructor(private cs:CommunicateService){}

  postReq(){
    this.cs.postRequest({id:this.id,name:this.name}).subscribe((data)=>{
      try{
        console.log(data);
      }catch(e){
        console.log("Data not posted")
      }
    })
    this.id = ""
    this.name = ""
    this.cs.refresh();
  }
}
