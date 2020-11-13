import { Component, OnInit } from '@angular/core';
import { IFSC } from 'src/app/_models/ifsc';
import { IfscService } from 'src/app/_services/ifsc.service';

@Component({
  selector: 'app-ifsc',
  templateUrl: './ifsc.component.html',
  styleUrls: ['./ifsc.component.css']
})
export class IfscComponent implements OnInit {

  ifsc: IFSC;

  constructor(private ifsc_service: IfscService) { }

  ngOnInit(): void {
    this.getIFSC();
  }

  getIFSC(){
    this.ifsc = new IFSC();
    this.ifsc_service.getIFSC().subscribe(
      res => {
        this.ifsc = res;
        console.log(this.ifsc);
      },
      err => console.error(err)
    );
  }

}
