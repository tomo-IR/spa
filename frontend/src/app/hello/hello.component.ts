import { Component, OnInit, ViewChild } from '@angular/core';
import { IndexService } from "../service/index.service";
import { User } from '../Entities/User';
import { Comment } from '../Entities/Comment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {PageEvent} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  test:string = "";
  serviceValue:string = "";
  users:MatTableDataSource<User> = new MatTableDataSource();
  comments:Comment[] = [];
  pageEvent: PageEvent = new PageEvent;
  displayColumn:string[] = ["id", "username", "password"] 
  private paginator?: MatPaginator;

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.users.paginator = this.paginator;
  }


  constructor(private service: IndexService, private indexService: IndexService, private http:HttpClient) {
   }

  ngOnInit(): void {
    this.test = this.service.test();
    this.serviceValue = this.service.serviceValue();
    this.getUsers();
  }

  getUsers(): void {
    this.indexService.getUserIndex().subscribe(res => {JSON.stringify(this.users.data = res); 
                                                          console.log(res);}
   )
  }

  getComments(): void {
    // this.indexService.getCommentsWeb();
    return this.indexService.getCommentsWeb();
  }

  public paging(event: any) {
  }

}


// getData() {
//   this.client.get<MyData>('/assets/data.json').subscribe((result: MyData) => {
//     this.message = 'data: ' + result.data;
//   });
// }