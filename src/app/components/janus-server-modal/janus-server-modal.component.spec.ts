import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

import { JanusServerModalComponent } from './janus-server-modal.component';

describe('JanusServerModalComponent', () => {
  let component: JanusServerModalComponent;
  let fixture: ComponentFixture<JanusServerModalComponent>;
  const data = {
    url: 'url',
    roomId: 'roomId',
    pin: 'pin',
  };

  const mockFormBuilder = {
    group: () => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanusServerModalComponent ],
      providers: [
        {provide: MatDialogRef, useValue: null},
        {provide: FormBuilder, useValue: mockFormBuilder},
        {provide: MAT_DIALOG_DATA, useValue: data},
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JanusServerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('calculateReturn', () => {
    const wsUrl = 'wss://localhost:8080/janus';
    const httpUrl = 'http://localhost:8080/janus';
    it('should return a numeric room id', () => {
      const ret = component.calculateReturn('123', 'url', true, 'pin');
      expect(ret.roomId).toEqual(123);
    });

    it('should return a string room id', () => {
      const ret = component.calculateReturn('123', 'url', false, 'pin');
      expect(ret.roomId).toEqual('123');
    });

    it('should return a websocket url', () => {
      const ret = component.calculateReturn('123', wsUrl, false, 'pin');
      expect(ret.wsUrl).toEqual(wsUrl);
      expect(ret.httpUrl).toEqual(null);
    });

    it('should return an http url', () => {
      const ret = component.calculateReturn('123', httpUrl, false, 'pin');
      expect(ret.wsUrl).toEqual(null);
      expect(ret.httpUrl).toEqual(httpUrl);
    });
  });
});
