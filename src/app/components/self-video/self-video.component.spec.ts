import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfVideoComponent } from './self-video.component';

describe('SelfVideoComponent', () => {
  let component: SelfVideoComponent;
  let fixture: ComponentFixture<SelfVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelfVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
