import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'level3';
  description:string = 'Simple Description';
  createDate!: Date;
  testObject: any = {
    key :'value'
  };
  testNumber:number = 1

  ngOnInit(): void {
    setInterval(() =>{
      this.testNumber++;
    },100000000000)
  }
  readMore(event: Event){

  }
}
