import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundVideoRoomComponent } from './round-video-room.component';

describe('RoundVideoRoomComponent', () => {
  let component: RoundVideoRoomComponent;
  let fixture: ComponentFixture<RoundVideoRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundVideoRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundVideoRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
