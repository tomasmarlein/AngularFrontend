import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Poll } from '../models/poll.model';
import { Vote } from '../models/vote.model';
import { PollService } from '../poll.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-poll-detail',
  templateUrl: './poll-detail.component.html',
  styleUrls: ['./poll-detail.component.scss']
})
export class PollDetailComponent implements OnInit {

  @Input() poll: Poll;
  @Output() choosePoll = new EventEmitter<Poll>();

  vote= new Vote('','');

 

  constructor(private _pollService: PollService, private router: Router) {
  }
  selectedPoll: Poll = null;
  
  showDetailPoll(p: Poll) {
    this.selectedPoll = p;
    }

    myRadio: string = '';

    Vote() {
      
      this.vote.id = localStorage.getItem("token");
      this.vote.value = this.myRadio;
      this._pollService.vote(this.vote).subscribe(res => {
        console.log(res);  

      });

      }


  ngOnInit() {

  }

}
