import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-mobil',
  templateUrl: './player-mobil.component.html',
  styleUrls: ['./player-mobil.component.scss']
})
export class PlayerMobilComponent  implements OnInit{

  @Input() name;
  @Input() playerActive=false;
  @Input() image;

  ngOnInit():void{}
  }
