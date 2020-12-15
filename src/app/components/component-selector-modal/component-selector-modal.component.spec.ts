import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSelectorModalComponent } from './component-selector-modal.component';

describe('ComponentSelectorModalComponent', () => {
  let component: ComponentSelectorModalComponent;
  let fixture: ComponentFixture<ComponentSelectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentSelectorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSelectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
