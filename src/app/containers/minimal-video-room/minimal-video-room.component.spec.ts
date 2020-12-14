import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalVideoRoomComponent } from './minimal-video-room.component';

describe('MinimalVideoRoomComponent', () => {
  let component: MinimalVideoRoomComponent;
  let fixture: ComponentFixture<MinimalVideoRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinimalVideoRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalVideoRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
