import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FriendsService } from '../../friends/services/friends.service';
import { User } from '../../friends/models/user.model';
import { Observable } from 'rxjs';
import { Poll } from '../models/poll.model';
import { Invite } from '../models/invite.model';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-invitelist',
  templateUrl: './invitelist.component.html',
  styleUrls: ['./invitelist.component.scss']
})
export class InvitelistComponent implements OnInit {
  @Input() poll: Poll;
  @Output() choosePoll = new EventEmitter<Poll>();
  selectedPoll: Poll = null;
  model = new Invite('',0);
  

  friends: Observable<User[]>;

  constructor(private _friendService: FriendsService, private _pollService: PollService) {
    this.friends = this._friendService.getFriends(localStorage.getItem('token'));
  }

  Invite(friend: User) {
    
    this.model.id = friend._id;
    this.model.value = this.poll._id;

    this._pollService.Invite(this.model).subscribe(res => {
      console.log("invite sended");
      this.friends;

    });

    }


  showDetailPoll(p: Poll) {
    this.selectedPoll = p;
    }

  ngOnInit() {
  }

}
