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

@NgModule({
  declarations: [
    AppComponent,
    MatchsettingsComponent,
    ScoreboardComponent,
    AllmatchesComponent,
    AppsettingsComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
