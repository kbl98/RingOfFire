import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { EndscreenComponent } from './endscreen/endscreen.component';

const routes: Routes = [
  { path: '', component: StartScreenComponent},
  { path: 'game/:id', component: GameComponent},
  { path: 'endscreen', component: EndscreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
