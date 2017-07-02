import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  matchHasStarted:boolean;
  homeTeamName:string;
  awayTeamName:string;
  isSecondLeg:boolean;
  homeTeam1stLegGoals:number;
  awayTeam1stLegGoals:number;
  relativeStrength:string;
  homeCrowdSupport:string;
  homeTeamMorale:string;
  awayTeamMorale:string;
  homeTeamTactics:string;
  awayTeamTactics:string;
  constructor(private _mainService:MainserviceService) {
    this._mainService.matchHasStarted$.subscribe(
      data => {
        this.matchHasStarted = data;
      }
    )
    this._mainService.homeTeamName$.subscribe(
      data => {
        this.homeTeamName = data;
      }
    );
    this._mainService.awayTeamName$.subscribe(
      data => {
        this.awayTeamName = data;
      }
    );

    // is second leg
    this._mainService.isSecondLeg$.subscribe(
      data => {
        this.isSecondLeg = data;
      }
    );

    // first leg goals
    this._mainService.homeTeam1stLegGoals$.subscribe(
      data => {
        this.homeTeam1stLegGoals = data;
      }
    );
    this._mainService.awayTeam1stLegGoals$.subscribe(
      data => {
        this.awayTeam1stLegGoals = data;
      }
    );

    // relative strength of Teams
    this._mainService.relativeStrength$.subscribe(
      data => {
        this.relativeStrength = data;
      }
    );
    // home crowd support
    this._mainService.homeCrowdSupport$.subscribe(
      data => {
        this.homeCrowdSupport = data;
      }
    );

    // homeTeamMorale
    this._mainService.homeTeamMorale$.subscribe(
      data => {
        this.homeTeamMorale = data;
      }
    );
    // awayTeamMorale
    this._mainService.awayTeamMorale$.subscribe(
      data => {
        this.awayTeamMorale = data;
      }
    );

    // homeTeamTactics
    this._mainService.homeTeamTactics$.subscribe(
      data => {
        this.homeTeamTactics = data;
      }
    );
    // awayTeamTactics
    this._mainService.awayTeamTactics$.subscribe(
      data => {
        this.awayTeamTactics = data;
      }
    );
  }

  ngOnInit() {
  }

}
