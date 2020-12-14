import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-minimal-video-room',
  templateUrl: './minimal-video-room.component.html',
  styleUrls: ['./minimal-video-room.component.scss']
})
export class MinimalVideoRoomComponent implements OnInit {

  roomId = 1234;
  wsUrl = 'ws://127.0.0.1:8188';

  constructor() { }

  ngOnInit(): void {
  }

}
