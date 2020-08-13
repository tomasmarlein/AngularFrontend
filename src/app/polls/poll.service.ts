import { Injectable } from '@angular/core';
import { Poll } from './models/poll.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vote } from './models/vote.model';
import { Invite } from './models/invite.model';

@Injectable({
  providedIn: 'root'
})
export class PollService {

  constructor(private http: HttpClient) { }
    
  getPolls(token): Observable<Poll[]> {
      return this.http.get<Poll[]>("http://localhost:5000/api/polls/" + token, {
        headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
      });
  }

  getPoll(id): Observable<Poll> {
    return this.http.get<Poll>("http://localhost:5000/api/poll/" + id, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
}

  getPollsFriends(token): Observable<Poll[]> {
    return this.http.get<Poll[]>("http://localhost:5000/api/pollfriends/" + token, {
      headers: new HttpHeaders().set("Authorization", "Bearer " + localStorage.getItem("token"))
    });
}

  addMember(poll: Poll) {
    return this.http.post<Poll>("http://localhost:5000/api/poll", poll);
    
    }

    vote(vote: Vote) {
      return this.http.put<Vote>("http://localhost:5000/api/vote", vote);
      }

      Invite(invite: Invite) {
        return this.http.put<Vote>("http://localhost:5000/api/invite", invite);
        }

  // updateMember(memberID: number, member: Member) {
  //     return this.http.put<Member>("https://localhost:5001/api/member/" + memberID, member);
  // }

  deletePoll(_id: string) {
    return this.http.delete<Poll>("http://localhost:5000/api/poll/" + _id);
  }

  
}
