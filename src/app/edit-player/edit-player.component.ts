import { Component } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-edit-player',
  templateUrl: './edit-player.component.html',
  styleUrls: ['./edit-player.component.scss'],
})
export class EditPlayerComponent {
  profil_pics = ['pinguin.svg', 'monkey.png', 'serious-woman.svg'];

  constructor(public dialogRef: MatDialogRef<EditPlayerComponent>) {}

  NoClick() {
    this.dialogRef.close();
  }
}
