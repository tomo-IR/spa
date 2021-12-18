import { Component, OnInit } from '@angular/core';
import { IndexService } from "../service/index.service";
import { User } from '../Entities/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  test:string = "";
  serviceValue:string = "";
  users:User[]  = [];


  constructor(private service: IndexService, private indexService: IndexService, private http:HttpClient) {
   }

  ngOnInit(): void {
    this.test = this.service.test();
    this.serviceValue = this.service.serviceValue();
    this.getUsers();
    
  }
  getUsers(): void {
    this.indexService.getUserIndex().subscribe(res => this.users = res);
  }

}


// getData() {
//   this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
//     this.message = 'data: ' + result.data;
//   });
// }