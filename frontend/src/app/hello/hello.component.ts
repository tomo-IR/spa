import { Component, OnInit } from '@angular/core';
import { IndexService } from "../service/index.service";
import { User } from '../Entities/User';
import { Comment } from '../Entities/Comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  test:string = "";
  serviceValue:string = "";
  users:User[] = [];
  comments:Comment[] = [];


  constructor(private service: IndexService, private indexService: IndexService, private http:HttpClient) {
   }

  ngOnInit(): void {
    this.test = this.service.test();
    this.serviceValue = this.service.serviceValue();
    this.getUsers();
    
  }
  getUsers(): void {
    this.indexService.getUserIndex().subscribe(res => {JSON.stringify(this.users = res); 
                                                          console.log(res);},
      error => console.log(error),
      () => console.log('complete'));
  }

  getComments(): void {
    // this.indexService.getCommentsWeb();
    return this.indexService.getCommentsWeb();
  }

}


// getData() {
//   this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
//     this.message = 'data: ' + result.data;
//   });
// }