import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template: `
    <janus-videoroom
      [roomId]='roomId'
      [wsUrl]='wsUrl'
    >
    </janus-videoroom>
  `
})
export class AppComponent {
  // roomId = 1234;
  // wsUrl = 'wss://janus.conf.meetecho.com/ws';

  roomId = '5678';
  wsUrl = 'ws://192.168.1.3:8188/janus';
}
