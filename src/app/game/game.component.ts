import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { DialogPlayerComponent } from '../dialog-player/dialog-player.component';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EditPlayerComponent } from '../edit-player/edit-player.component';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit  {

 game: Game;
 
 gameId: string;



constructor(private route:ActivatedRoute, public dialog: MatDialog, private firestore: AngularFirestore,private router:Router){
  //this.game=new Game;


}


ngOnInit():void{
  this.newGame();
 this.route.paramMap.subscribe((params)=>{
 console.log(params.get('id'));
 this.gameId=(params.get('id'));
 this.firestore.collection('games').doc(params.get('id')).valueChanges().subscribe((game:any)=>{console.log(game)
 this.game.currentPlayer=game.currentPlayer;
 this.game.playedCards=game.playedCards;
 this.game.stack=game.stack;
 this.game.players=game.players;
 this.game.playerImages=game.playerImages;
 this.game.current_card=game.current_card,
 this.game.cardAnimation=game.cardAnimation

 });
})
}


newGame(){
  this.game=new Game();
  
}

  takeCard(){
  if(!this.game.cardAnimation && this.game.stack.length>0){
  this.game.current_card=this.game.stack.pop();
  this.game.cardAnimation=true;
  this.saveGame();
  this.game.currentPlayer++;
  this.game.currentPlayer=this.game.currentPlayer%this.game.players.length;
  this.saveGame();
  setTimeout(()=>{

 
  this.game.playedCards.push(this.game.current_card);
  console.log(this.game.playedCards)
  this.game.cardAnimation=false;
  this.saveGame();
},1000)

  }else if(this.game.stack.length<=0){
    this.router.navigateByUrl('endscreen')
  }
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {
      if(name && name.length>0)
      this.game.players.push(name);
      this.game.playerImages.push("pinguin.svg");
      this.saveGame();
    });
  }

  saveGame(){
   
    this.firestore.collection("games").doc(this.gameId).update(this.game.toJSON())
  }

  editPlayer(index){
    const dialogRef = this.dialog.open(EditPlayerComponent);

    dialogRef.afterClosed().subscribe(pic => {
      if(pic){
        if (pic=="delete"){
          this.game.players.splice(index,1)
        }else{
      this.game.playerImages[index]=pic;
        }
      this.saveGame();
      console.log(pic)}
  })


  }
}


  

