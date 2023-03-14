import { Component, Input } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-player',
  templateUrl: './dialog-player.component.html',
  styleUrls: ['./dialog-player.component.scss'],
})
export class DialogPlayerComponent {
  constructor(public dialogRef: MatDialogRef<DialogPlayerComponent>) {}

  name: string = '';
  NoClick() {
    this.dialogRef.close();
  }
}
