import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-custom-video-room-dock',
  templateUrl: './custom-video-room-dock.component.html',
  styleUrls: ['./custom-video-room-dock.component.scss']
})
export class CustomVideoRoomDockComponent implements OnInit {

  @Output()
  openComponents = new EventEmitter<null>();

  @Output()
  openServer = new EventEmitter<null>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onOpenComponents(): void { this.openComponents.emit(); }
  onOpenServer(): void { this.openServer.emit(); }
}
