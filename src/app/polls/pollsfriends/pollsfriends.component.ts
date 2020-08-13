import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../models/poll.model';
import { Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pollsfriends',
  templateUrl: './pollsfriends.component.html',
  styleUrls: ['./pollsfriends.component.scss']
})
export class PollsFriendComponent implements OnInit {
  
  polls: Observable<Poll[]>;
  chosenPoll: Poll = null;
  selectedPoll: Poll = null;
  closeResult: string;
  
  constructor(private _pollService: PollService, private modalService: NgbModal) {
    this.polls = this._pollService.getPollsFriends(localStorage.getItem("token"));
  }
  // addMember() {
  //   let memberToAdd = new Member(0, "Ronny Ronnies",new Date("1976-10-05T00:00:00.000Z"),"Zeppedreef 12");
  //   this._memberService.addMember(memberToAdd).subscribe();
  // }

  // updateMember() {
  //   let memberToUpdate = new Member(1, "Steven Stevens", new Date("1973-04-12T00:00:00.000Z"), "Stevendreef 12");
  //   this._memberService.updateMember(1, memberToUpdate).subscribe();
  // }

      showDetailPoll(p: Poll, content) {
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
