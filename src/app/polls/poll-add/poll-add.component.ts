import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/poll.model';
import { Choice } from '../models/choice.model';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';
import { FriendsService } from 'src/app/friends/services/friends.service';
import { User } from 'src/app/friends/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poll-add',
  templateUrl: './poll-add.component.html',
  styleUrls: ['./poll-add.component.scss']
})
export class PollAddComponent implements OnInit {

  choices : Choice[] = [new Choice(''),new Choice('')];
  choice = new Choice('');
  model = new Poll('','',[]);
  
  
  constructor(private _pollService: PollService, private router: Router) {
  }

  ngOnInit() {
  }

  

  addNewChoice() {
    this.choices.push(new Choice(''));
  }

  addMember() {
    this.model.choices = this.choices;
    this.model.userId = localStorage.getItem("token");
    console.log(this.model);
    this._pollService.addMember(this.model).subscribe(res => {
      console.log("poll toegevoegd");
      
    });
  }

  onSubmit() {
    this.addMember();
    this.router.navigate([`dashboard`]);
    
  }

}
