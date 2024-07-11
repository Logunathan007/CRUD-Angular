import { Component } from '@angular/core';
import { CommunicateService } from '../services/communicate.service';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html'
})
export class DeleteDataComponent {
  id:number|string = ""
  name = ""

  constructor(private cs:CommunicateService){}

  deleteReq(){
    this.cs.postRequest(this.id).subscribe((data)=>{
      try{
        console.log(data);
      }catch(e){
        console.log("Data not deleted")
      }
    })
    this.id = ""
    this.name = ""
    this.cs.refresh();
  }
}
