import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dock',
  templateUrl: './dock.component.html',
  styleUrls: ['./dock.component.scss']
})
export class DockComponent implements OnInit {

  @Input()
  isMuted: boolean;

  @Output()
  openDevices = new EventEmitter<null>();

  @Output()
  openServer = new EventEmitter<null>();

  @Output()
  toggleMute = new EventEmitter<null>();

  constructor(
  ) { }

  ngOnInit(): void {
  }

  onToggleMute(): void { this.toggleMute.emit(); }
  onOpenDevices(): void { this.openDevices.emit(); }
  onOpenServer(): void { this.openServer.emit(); }
}
