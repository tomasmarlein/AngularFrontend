import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FriendrequestsComponent } from '../friends/friendrequests/friendrequests.component';
import { FriendlistComponent } from '../friends/friendlist/friendlist.component';
import { PollsComponent } from '../polls/polls/polls.component';
import { PollsFriendComponent } from '../polls/pollsfriends/pollsfriends.component';



@NgModule({
  declarations: [DashboardComponent, FriendrequestsComponent, FriendlistComponent, PollsComponent, PollsFriendComponent],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
