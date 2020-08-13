import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollsFriendComponent } from './pollsfriends.component';

describe('PollsComponent', () => {
  let component: PollsFriendComponent;
  let fixture: ComponentFixture<PollsFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollsFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
