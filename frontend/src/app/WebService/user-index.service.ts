import {Injectable} from '@angular/core';
import { User } from '../Entities/User';
import { Comment } from '../Entities/Comment';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserIndexService {
  users: User[] = [];
  comments: Comment[] = [];
  private jsonServerUrl = "http://localhost:3000/comments"
  constructor(private http:HttpClient) {
  }

  webservice(){
    return "This value is Webservice's value"
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.jsonServerUrl)
  }
}
