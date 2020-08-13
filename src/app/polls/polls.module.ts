import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollsComponent } from './polls/polls.component';
import { PollService } from './poll.service';
import { MatButtonModule } from '@angular/material/button';
import { PollDetailComponent } from './poll-detail/poll-detail.component';
import { FriendsService } from '../friends/services/friends.service';
import { PollAddComponent } from './poll-add/poll-add.component';
import { InvitelistComponent } from './invitelist/invitelist.component';


@NgModule({
  declarations: [PollsComponent, PollDetailComponent, PollAddComponent, InvitelistComponent],
  imports: [
    CommonModule,
    MatButtonModule,
  ],
  providers: [PollService, FriendsService],
  exports: [PollsComponent]
})
export class PollsModule { }
