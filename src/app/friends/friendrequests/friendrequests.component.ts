import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { Friends } from '../models/friends.model';

@Component({
  selector: 'app-friendrequests',
  templateUrl: './friendrequests.component.html',
  styleUrls: ['./friendrequests.component.scss']
})
export class FriendrequestsComponent implements OnInit {

  requests: Observable<User[]>;
  model = new Friends('','');

  constructor(private _friendService: FriendsService) {
    this.requests = this._friendService.getRequest(localStorage.getItem('token'));
  }

  ngOnInit() {
  }

  acceptRequest(user: User){
    this.model.receiver = user._id.toString();
    this.model.sender = localStorage.getItem("token");
    this._friendService.acceptRequest(this.model).subscribe(res => {
      this.requests = this._friendService.getRequest(localStorage.getItem('token'));
      console.log("Verzoek geaccepteerd!");
    });
  }

}
