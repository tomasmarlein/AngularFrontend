import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friends } from '../models/friends.model';
import { Mail } from '../models/mail.model';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private http: HttpClient) { }
  getUsers(_email: string): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:5000/api/user/" + _email)
    };

    getFriends(token: string): Observable<User[]> {
      return this.http.get<User[]>("http://localhost:5000/api/friends/" + token)
    };

  sendRequest(friends: Friends): Observable<Friends[]> {
    return this.http.put<Friends[]>("http://localhost:5000/api/friend", friends)
    };

    getRequest(token: string): Observable<User[]> {
      return this.http.get<User[]>("http://localhost:5000/api/friendrequest/" + token)
      };

      sendEmail(mail: Mail) {
        return this.http.post<Mail[]>("http://localhost:5000/api/sendmail/" , mail)
        };
    
    acceptRequest(friends: Friends): Observable<Friends[]> {
        return this.http.put<Friends[]>("http://localhost:5000/api/friendaccepted", friends)
    };
    
}

