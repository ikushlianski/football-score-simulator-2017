import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  // what came to ScoreBoard from Match Settings
  matchHasStarted:boolean;
  homeTeamName:string;
  awayTeamName:string;
  isSecondLeg:boolean;
  homeTeam1stLegGoals:number;
  awayTeam1stLegGoals:number;
  homeRelativeStrength:number;
  awayRelativeStrength:number;
  homeCrowdSupport:number;
  homeTeamMorale:number;
  awayTeamMorale:number;
  homeTeamTactics:number;
  awayTeamTactics:number;

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

    // relative strength of home team
    this._mainService.homeRelativeStrength$.subscribe(
      data => {
        this.homeRelativeStrength = data;
      }
    );
    // relative strength of away team
    this._mainService.awayRelativeStrength$.subscribe(
      data => {
        this.awayRelativeStrength = data;
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
          console.log('home team tactics is ' + this.homeTeamTactics)
      }
    );
    // awayTeamTactics
    this._mainService.awayTeamTactics$.subscribe(
      data => {
        this.awayTeamTactics = data;
        console.log('away team tactics is ' + this.awayTeamTactics)
      }
    );
  } // constructor ends

  // declare match properties and initial statistical data
  matchMinutes:number = 0;
  matchSeconds:number = 0;
  allPotentialShots:number;
  homeTeamPotentialShots:number;
  awayTeamPotentialShots:number;
  homeTeamActualShots:number = 0;
  awayTeamActualShots:number = 0;
  // constant determining what share of shots should be actually shots on target (between 0.25 and 0.5)
  readonly SHOT_IS_SHOT_ON_GOAL = Math.random() * (0.5 - 0.25) + 0.25;
  homeTeamShotsOnGoal:number = 0;
  awayTeamShotsOnGoal:number = 0;
  homeTeamPossession:number = 50;
  awayTeamPossession:number = 50;
  homeTeamFouls:number = 0;
  awayTeamFouls:number = 0;
  homeTeamYellowCards:number = 0;
  awayTeamYellowCards:number = 0;
  homeTeamRedCards:number = 0;
  awayTeamRedCards:number = 0;

  // squads
  homeTeamStartingLineup:string[] = ['Goalkeeper', 'Defender1', 'Defender2', 'Defender3', 'Defender4', 'Midfielder1', 'Midfielder2', 'Midfielder3', 'Midfielder4', 'Forward1', 'Forward2'];
  homeTeamSubs:string[] = ['Goalkeeper2', 'Defender5', 'Defender6', 'Midfielder5', 'Midfielder6', 'Forward3'];
  awayTeamStartingLineup:string[] = ['Goalkeeper', 'Defender1', 'Defender2', 'Defender3', 'Defender4', 'Midfielder1', 'Midfielder2', 'Midfielder3', 'Midfielder4', 'Forward1', 'Forward2'];
  awayTeamSubs:string[] = ['Goalkeeper2', 'Defender5', 'Defender6', 'Midfielder5', 'Midfielder6', 'Forward3'];


  ngOnInit() {

  }

}
