import { Component, OnInit } from '@angular/core';
import { CommunicateService } from '../services/communicate.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html'
})
export class GetDataComponent implements OnInit{
  datas:any = []

  constructor(private ss:CommunicateService) {
    this.datas = this.ss.datas
  }

  ngOnInit(): void {
    this.ss.refresh();
  }
}
