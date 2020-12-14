import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';

import { JanusModule } from 'janus-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesModalComponent } from './components/devices-modal/devices-modal.component';
import { JanusServerModalComponent } from './components/janus-server-modal/janus-server-modal.component';
import { VideoRoomComponent } from './containers/video-room/video-room.component';
import { DockComponent } from './components/dock/dock.component';
import { MinimalVideoRoomComponent } from './containers/minimal-video-room/minimal-video-room.component';

import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DockComponent,
    VideoRoomComponent,
    DevicesModalComponent,
    JanusServerModalComponent,
    MinimalVideoRoomComponent,
    NavBarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    JanusModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatTooltipModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
