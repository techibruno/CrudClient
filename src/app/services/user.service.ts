import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  getUsers(){
    return this._http.get<any>(environment.baseUrl + "GetUsers");
  }

  getUserById(id: number){
    return this._http.get<any>(environment.baseUrl + "GetUserById/" + id);
  }

  createUser(user: User){
    return this._http.post<any>(environment.baseUrl + "CreateUser", user);
  }

  updateUser(user: User){
    return this._http.post<any>(environment.baseUrl + "UpdateUser", user);
  }

  deleteUser(id: number){
    return this._http.post<any>(environment.baseUrl + "DeleteUser", id);
  }
}
