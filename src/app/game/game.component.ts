import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit  {
cardAnimation= false;
 game: Game;
 current_card;



constructor(){
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
  this.current_card=this.game.stack.pop();
  this.cardAnimation=true;

console.log(this.current_card)
  }
}
