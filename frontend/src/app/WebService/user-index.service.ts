import {Injectable} from '@angular/core';
import { User } from '../Entities/User';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserIndexService {

  constructor() {
  }

  webservice(){

    return "This value is Webservice's value"
  }
}
