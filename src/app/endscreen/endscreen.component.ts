import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Game } from 'src/models/game';


@Component({
  selector: 'app-endscreen',
  templateUrl: './endscreen.component.html',
  styleUrls: ['./endscreen.component.scss']
})
export class EndscreenComponent {
constructor(private router:Router, private firestore: AngularFirestore){

}

  newGame(){
    let game=new Game();
    this.firestore.collection('games').add(game.toJSON()).then((gameInfo)=>{
      this.router.navigateByUrl('/game/'+gameInfo.id)
    })
  
   
  
  }
}
