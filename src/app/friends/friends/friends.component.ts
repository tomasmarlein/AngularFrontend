import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/user.model';
import { Friends } from '../models/friends.model';
import { FriendsService } from '../services/friends.service';
import { Mail } from '../models/mail.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  model = new Friends('','');
  mail = new Mail('');
  userSearch : string = "";

  constructor(private _friendService: FriendsService) {
  }

  ngOnInit() {
  }

  users: User[];
  


  getUsers(event: any) {
    this._friendService.getUsers(event.target.value).subscribe(res => {
      this.users = res;
    });
  }

  sendRequest(user: User) {
    this.model.receiver = user._id.toString();
    this.model.sender = localStorage.getItem("token");
    this._friendService.sendRequest(this.model).subscribe(res => {
      console.log("Verzoek gestuurd");
    });
  }


  sendEmail(email: string) {
    this.mail.email = email;
    this._friendService.sendEmail(this.mail).subscribe(res => {
      console.log("mail gestuurd");
    });
  }

}
