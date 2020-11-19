import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-janus-server-modal',
  templateUrl: './janus-server-modal.component.html',
  styleUrls: [
    './janus-server-modal.component.scss',
    '../../styles/modal.scss',
  ]
})
export class JanusServerModalComponent implements OnInit {

  serverForm;
  constructor(
    private dialogRef: MatDialogRef<JanusServerModalComponent>,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.serverForm = this.builder.group({
      url: [this.data.url, [Validators.required]],
      roomId: [this.data.roomId, [Validators.required]],
      numericId: [true, [Validators.required]],
      pin: [this.data.pin, []],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  calculateReturn(roomId, url, numericId, pin): any {
    // Given the values of the form, create our return object

    let wsUrl = url;
    let httpUrl = url;

    if (url.startsWith('ws')) {
      httpUrl = null;
    } else {
      wsUrl = null;
    }

    return {
      roomId: numericId ? parseInt(roomId, 10) : roomId,
      wsUrl,
      httpUrl,
      pin,
    };
  }

  onSave(): void {
    const roomId = this.serverForm.get('roomId').value;
    const url = this.serverForm.get('url').value;
    const numericId = this.serverForm.get('numericId').value;
    const pin = this.serverForm.get('pin').value;

    const ret = this.calculateReturn(roomId, url, numericId, pin);
    this.dialogRef.close(ret);
  }
}
