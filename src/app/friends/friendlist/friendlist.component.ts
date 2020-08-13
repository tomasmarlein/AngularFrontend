import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../services/friends.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-friendlist',
  templateUrl: './friendlist.component.html',
  styleUrls: ['./friendlist.component.scss']
})
export class FriendlistComponent implements OnInit {

  friends: Observable<User[]>;

  constructor(private _friendService: FriendsService) {
    this.friends = this._friendService.getFriends(localStorage.getItem('token'));
  }

  ngOnInit() {
  }

}
