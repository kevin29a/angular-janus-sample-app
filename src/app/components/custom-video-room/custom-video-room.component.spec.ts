import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoRoomComponent } from './custom-video-room.component';

describe('CustomVideoRoomComponent', () => {
  let component: CustomVideoRoomComponent;
  let fixture: ComponentFixture<CustomVideoRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomVideoRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomVideoRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
