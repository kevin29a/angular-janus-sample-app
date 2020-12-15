import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

interface AvailableComponents {
  current: string;
  names: string[];
}

@Component({
  selector: 'app-component-selector-modal',
  templateUrl: './component-selector-modal.component.html',
  styleUrls: [
    './component-selector-modal.component.scss',
    '../../styles/modal.scss',
  ]
})
export class ComponentSelectorModalComponent implements OnInit {

  form;
  constructor(
    private dialogRef: MatDialogRef<ComponentSelectorModalComponent>,
    private builder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: AvailableComponents
  ) { }

  ngOnInit(): void {

    console.log("DATA", this.data);
    this.form = this.builder.group({
      component: [this.data.current, [Validators.required]],
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close(this.form.get('component').value);
  }
}
