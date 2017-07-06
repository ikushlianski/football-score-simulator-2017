import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MatchsettingsComponent } from './matchsettings/matchsettings.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { AllmatchesComponent } from './allmatches/allmatches.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';
import { CommentsComponent } from './comments/comments.component';
import {MainserviceService} from './mainservice.service';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  declarations: [
    AppComponent,
    MatchsettingsComponent,
    ScoreboardComponent,
    AllmatchesComponent,
    AppsettingsComponent,
    CommentsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
