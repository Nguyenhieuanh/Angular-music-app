import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlaylistComponent } from './components/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';


const routes: Routes = [
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
