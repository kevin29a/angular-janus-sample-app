import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoRoomComponent } from './containers/video-room/video-room.component';
import { MinimalVideoRoomComponent } from './containers/minimal-video-room/minimal-video-room.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'default'
  }, {
    path: 'default',
    component: VideoRoomComponent,
  }, {
    path: 'minimal',
    component: MinimalVideoRoomComponent,
  },
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
