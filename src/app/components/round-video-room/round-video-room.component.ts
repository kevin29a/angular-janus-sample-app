import { Component, OnInit } from '@angular/core';
import { DefaultVideoRoomComponent } from 'janus-angular';

/**
 * Round Video Component
 *
 * This demonstrates a custom video room with only cosmetic changes. All functionality from
 * the DefaultVideoRoom is taken directly into this component. The HTML and SCSS files are
 * tweaked to customize the look/feel of the videoroom
 */
@Component({
  selector: 'app-round-video-room',
  templateUrl: './round-video-room.component.html',
  styleUrls: ['./round-video-room.component.scss']
})
export class RoundVideoRoomComponent extends DefaultVideoRoomComponent { }
