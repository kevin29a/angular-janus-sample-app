import { ChangeDetectorRef, Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { first } from 'rxjs/operators';

import { Devices, WebrtcService, VideoRoomComponent } from 'janus-angular';

import { ClockVideoRoomComponent } from '../../components/clock-video-room/clock-video-room.component';
import { RoundVideoRoomComponent } from '../../components/round-video-room/round-video-room.component';
import { ComponentSelectorModalComponent } from '../../components/component-selector-modal/component-selector-modal.component';
import { JanusServerModalComponent } from '../../components/janus-server-modal/janus-server-modal.component';

import { MatDialog } from '@angular/material/dialog';


import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-customvideo-room',
  templateUrl: './custom-video-room.component.html',
  styleUrls: ['./custom-video-room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('openClose', [
      state('open', style({
        bottom: '0',
      })),
      state('closed', style({
        bottom: '-160px',
      })),
      transition('open => closed', [
        animate(250)
      ]),
      transition('closed => open', [
        animate(100)
      ]),
    ]),
  ]
})
export class CustomVideoRoomComponent implements OnInit {

  httpUrl: string;
  // roomId = 1234;
  // wsUrl = 'wss://janus.conf.meetecho.com/ws';
  roomId = 1234;
  wsUrl = 'ws://127.0.0.1:8188/janus';
  pin: string;

  dockOpen = false;
  moveTimeout: any;

  // component = ClockVideoRoomComponent;
  component = RoundVideoRoomComponent;
  allComponents = {
    Clock: ClockVideoRoomComponent,
    Round: RoundVideoRoomComponent,
  };

  constructor(
    private changeDetector: ChangeDetectorRef,
    private webrtc: WebrtcService,
    private dialog: MatDialog,
  ){}

  ngOnInit(): void { }

  hideDock(): void { this.dockOpen = false; }
  startDockTimer(): void {
    const instance = this;
    this.dockOpen = true;
    if (this.moveTimeout) {
      clearTimeout(this.moveTimeout);
    }

    this.moveTimeout = setTimeout(() => {
      this.dockOpen = false;
      this.changeDetector.detectChanges();
    }, 3000);
  }

  onOpenComponents(): void {
    const current = Object.keys(
      this.allComponents
    ).map((key) => {
      return {name: key, component: this.allComponents[key]};
    }).filter((x) => x.component === this.component)[0].name;

    const data = {
      current,
      names: Object.keys(this.allComponents),
    };
    const dialogRef = this.dialog.open(ComponentSelectorModalComponent, {
      width: '360px',
      data,
    });

    dialogRef.afterClosed().pipe(first()).subscribe((result: string) => {
      if (result) {
        this.component = this.allComponents[result];
        this.changeDetector.detectChanges();
      }
    });
  }

  onOpenServer(): void {
    const dialogRef = this.dialog.open(JanusServerModalComponent, {
      width: '360px',
      data: {url: this.wsUrl, roomId: this.roomId, pin: this.pin}
    });

    dialogRef.afterClosed().pipe(first()).subscribe((result) => {
      if (result) {
        this.wsUrl = result.wsUrl;
        this.httpUrl = result.httpUrl;
        this.roomId = result.roomId;
        this.pin = result.pin;
      }
    });
  }

  onError(error: {code: number, message: string}): void {
    window.alert('Error: ' + error.message);
  }
}
