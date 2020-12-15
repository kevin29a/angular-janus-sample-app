import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import {
  AttachRemoteFeedEvent,
  Devices,
  JanusRole,
  PublishOwnFeedEvent,
  PublishState,
  RemoteFeed,
  RoomInfo,
  RoomInfoState,
  VideoRoomComponent,
} from 'janus-angular';


/**
 * Custom Video Room Component
 *
 * This video room doesn't subscribe to any other feeds and publishes a functioning
 * clock as a video stream. This doesn't use any video capture device locally. It
 * demonstrates how the janus-videoroom component can publish a stream straight from
 * a canvas element and therefore can be productive for some purposes without even
 * utilizing a camera/microphone locally.
 */
@Component({
  selector: 'app-clock-video-room',
  templateUrl: './clock-video-room.component.html',
  styleUrls: ['./clock-video-room.component.scss']
})
export class ClockVideoRoomComponent implements VideoRoomComponent, AfterViewInit, OnInit {

  @Input()
  get roomInfo(): RoomInfo { return this.privateRoomInfo; }
  set roomInfo(roomInfo: RoomInfo) {
    this.privateRoomInfo = roomInfo;

    // Once we're ready to publish, go do it
    if (
      roomInfo.state === RoomInfoState.joined
      && roomInfo.publishState === PublishState.ready
    ) {
      this.publishOwnFeed.emit({
        audioDeviceId: null,
        videoDeviceId: null,
        canvasId: 'canvas-self',

        // This instructs janus-angular to skip any provisioning of capture
        // devices and stream directly from the canvas. When setting this to
        // true, it's the job of the component to draw on the canvas as desired
        skipVideoCapture: true,
      });
    }
  }
  @Input() role: JanusRole;
  @Input() devices?: Devices;
  @Input() remoteFeeds: RemoteFeed[];

  @Output()
  requestSubstream = new EventEmitter<{feed: RemoteFeed, substreamId: number}>();

  @Output()
  publishOwnFeed = new EventEmitter<PublishOwnFeedEvent>();

  @Output()
  attachRemoteFeed = new EventEmitter<AttachRemoteFeedEvent>();

  @ViewChild('draw')
  canvas: ElementRef;

  private privateRoomInfo: RoomInfo;
  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    window.requestAnimationFrame(() => this.clock());
  }

  // clock adopted from here: https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
  clock(): void {
    const now = new Date();
    const ctx = this.canvas.nativeElement.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, 640, 480);

    ctx.fillStyle = 'rgb(200, 200, 200)';
    ctx.fillRect(0, 0, 640, 480);

    ctx.translate(320, 240);
    ctx.scale(1.5, 1.5);
    ctx.rotate(-Math.PI / 2);
    ctx.strokeStyle = 'black';
    ctx.fillStyle = 'white';
    ctx.lineWidth = 8;
    ctx.lineCap = 'round';

    // Hour marks
    ctx.save();
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.rotate(Math.PI / 6);
      ctx.moveTo(100, 0);
      ctx.lineTo(120, 0);
      ctx.stroke();
    }
    ctx.restore();

    // Minute marks
    ctx.save();
    ctx.lineWidth = 5;
    for (let i = 0; i < 60; i++) {
      if (i % 5 !== 0) {
        ctx.beginPath();
        ctx.moveTo(117, 0);
        ctx.lineTo(120, 0);
        ctx.stroke();
      }
      ctx.rotate(Math.PI / 30);
    }
    ctx.restore();

    const sec = now.getSeconds();
    const min = now.getMinutes();
    let hr  = now.getHours();
    hr = hr >= 12 ? hr - 12 : hr;

    ctx.fillStyle = 'black';

    // write Hours
    ctx.save();
    ctx.rotate(hr * (Math.PI / 6) + (Math.PI / 360) * min + (Math.PI / 21600) * sec);
    ctx.lineWidth = 14;
    ctx.beginPath();
    ctx.moveTo(-20, 0);
    ctx.lineTo(80, 0);
    ctx.stroke();
    ctx.restore();

    // write Minutes
    ctx.save();
    ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(-28, 0);
    ctx.lineTo(112, 0);
    ctx.stroke();
    ctx.restore();

    // Write seconds
    ctx.save();
    ctx.rotate(sec * Math.PI / 30);
    ctx.strokeStyle = '#D40000';
    ctx.fillStyle = '#D40000';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(-30, 0);
    ctx.lineTo(83, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(95, 0, 10, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.fillStyle = 'rgba(0, 0, 0, 0)';
    ctx.arc(0, 0, 3, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.restore();

    ctx.beginPath();
    ctx.lineWidth = 14;
    ctx.strokeStyle = '#325FA2';
    ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
    ctx.stroke();

    ctx.restore();

    window.requestAnimationFrame(() => this.clock());
  }
}
