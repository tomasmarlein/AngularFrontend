import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PollsComponent } from './polls/polls/polls.component';
import { PollsFriendComponent } from './polls/pollsfriends/pollsfriends.component';
import { PollDetailComponent } from './polls/poll-detail/poll-detail.component';
import { SecurityComponent } from './security/security/security.component';
import { SecurityInterceptor } from './security/security.interceptor';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './auth.guard';
import { PollAddComponent } from './polls/poll-add/poll-add.component';
import { FriendsComponent } from './friends/friends/friends.component';
import { FriendrequestsComponent } from './friends/friendrequests/friendrequests.component';
import { FriendlistComponent } from './friends/friendlist/friendlist.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InvitelistComponent } from './polls/invitelist/invitelist.component';

const appRoutes: Routes = [
  { path: '', component: SecurityComponent },
  { path: 'poll/:id', component: PollDetailComponent, canActivate: [AuthGuard] },
  { path: 'polladd', component: PollAddComponent, canActivate: [AuthGuard] },
  { path: 'friends', component: FriendsComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },

  ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PollsComponent,
    PollsFriendComponent,
    PollDetailComponent,
    SecurityComponent,
    PollAddComponent,
    FriendsComponent,
    FriendrequestsComponent,
    FriendlistComponent,
    DashboardComponent,
    InvitelistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true })
  ],
  providers: [ AuthGuard,
    {provide: HTTP_INTERCEPTORS,
    useClass: SecurityInterceptor,
    multi: true},
    NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
