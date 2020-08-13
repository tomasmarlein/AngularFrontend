import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-polls',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.scss']
})
export class PollsComponent implements OnInit {
  
  polls: Observable<Poll[]>;
  chosenPoll: Poll = null;
  selectedPoll: Poll = null;
  closeResult: string;
  
  constructor(private _pollService: PollService, private router: Router, private modalService: NgbModal) {
    this.polls = this._pollService.getPolls(localStorage.getItem('token'));
  }

  deletePoll(id) {
    this._pollService.deletePoll(id).subscribe(res => {
      this.polls = this._pollService.getPolls(localStorage.getItem('token'));
    });
  }

  showDetailPoll(p: Poll, content) {
    this.selectedPoll = p;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }

    showDetailFriend(p: Poll, content) {
      this.selectedPoll = p;
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
      }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

  onChoosePoll(poll: Poll) {
    this.chosenPoll = poll;
    }

  ngOnInit() {
  }

}
