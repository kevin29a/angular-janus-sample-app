import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Devices } from 'janus-angular';

@Component({
  selector: 'app-devices-modal',
  templateUrl: './devices-modal.component.html',
  styleUrls: [
    './devices-modal.component.scss',
    '../../styles/modal.scss',
  ]
})
export class DevicesModalComponent implements OnInit {

  private updatedDevices: Devices;
  constructor(
    private dialogRef: MatDialogRef<DevicesModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Devices,
  ) {
    this.updatedDevices = data;
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDeviceUpdate(devices: Devices): void {
    this.updatedDevices = devices;
  }

  onSave(): void {
    this.dialogRef.close(this.updatedDevices);
  }
}
