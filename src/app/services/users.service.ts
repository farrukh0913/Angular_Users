import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../elements/enviroment/enviroment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
 
  public perPage = 6
  constructor(private http: HttpClient) { }

  //  GET method
  getUsers(page:number): Observable<any> {
    const url = `${environment.apiLink}/users?page=${page}&per_page=${this.perPage}`;
    return this.http.get<any>(url);
  }
}
