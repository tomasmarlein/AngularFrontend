import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FriendsComponent } from './friends/friends.component';
import { FriendrequestsComponent } from './friendrequests/friendrequests.component';
import { FriendlistComponent } from './friendlist/friendlist.component';



@NgModule({
  declarations: [FriendsComponent, FriendrequestsComponent, FriendlistComponent],
  imports: [
    CommonModule
  ]
})
export class FriendsModule { }
