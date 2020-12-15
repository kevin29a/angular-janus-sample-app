import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomVideoRoomDockComponent } from './custom-video-room-dock.component';

describe('CustomVideoRoomDockComponent', () => {
  let component: CustomVideoRoomDockComponent;
  let fixture: ComponentFixture<CustomVideoRoomDockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomVideoRoomDockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomVideoRoomDockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
