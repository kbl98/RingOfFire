import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogPlayerComponent } from '../dialog-player/dialog-player.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit  {
cardAnimation= false;
 game: Game;
 current_card;



constructor(public dialog: MatDialog){
  //this.game=new Game;
}


ngOnInit():void{
  this.game=new Game;
  console.log(this.game)
}

newGame(){
  this.game=new Game();
}

  takeCard(){
  if(!this.cardAnimation && this.game.stack.length>0){
  this.current_card=this.game.stack.pop();
  this.game.currentPlayer++;
  this.game.currentPlayer=this.game.currentPlayer%this.game.players.length;
  this.cardAnimation=true;
  setTimeout(()=>{

 
  this.game.playedCards.push(this.current_card);
  console.log(this.game.playedCards)
  this.cardAnimation=false;
},1000)
  }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length>0)
      this.game.players.push(name)
    });
  }
}
  

