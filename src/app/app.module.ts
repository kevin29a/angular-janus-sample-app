import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AppComponent } from './app.component';

import { JanusModule } from 'janus-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DevicesModalComponent } from './components/devices-modal/devices-modal.component';
import { JanusServerModalComponent } from './components/janus-server-modal/janus-server-modal.component';
import { VideoRoomComponent } from './containers/video-room/video-room.component';
import { DockComponent } from './components/dock/dock.component';
import { ClockVideoRoomComponent } from './components/clock-video-room/clock-video-room.component';
import { MinimalVideoRoomComponent } from './containers/minimal-video-room/minimal-video-room.component';
import { CustomVideoRoomComponent } from './containers/custom-video-room/custom-video-room.component';

import { AppRoutingModule } from './app-routing.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomVideoRoomDockComponent } from './components/custom-video-room-dock/custom-video-room-dock.component';
import { ComponentSelectorModalComponent } from './components/component-selector-modal/component-selector-modal.component';
import { RoundVideoRoomComponent } from './components/round-video-room/round-video-room.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockVideoRoomComponent,
    CustomVideoRoomComponent,
    DevicesModalComponent,
    DockComponent,
    JanusServerModalComponent,
    MinimalVideoRoomComponent,
    NavBarComponent,
    VideoRoomComponent,
    CustomVideoRoomDockComponent,
    ComponentSelectorModalComponent,
    RoundVideoRoomComponent,
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
    MatRadioModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
