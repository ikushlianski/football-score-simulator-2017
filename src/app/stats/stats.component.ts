import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
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

  // what came from scoreboard component
  matchMinutes:number = 0;
  matchSeconds:number = 0;
  homeTeamGoals:number = 0;
  awayTeamGoals:number = 0;
  allPotentialShots:number;
  homeTeamPotentialShots:number;
  awayTeamPotentialShots:number;
  homeTeamActualShots:number = 0;
  awayTeamActualShots:number = 0;
  // constant determining what share of shots should be actually shots on target (between 0.25 and 0.5)
  readonly SHOT_IS_SHOT_ON_GOAL = Math.random() * (0.5 - 0.1) + 0.1;
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

    // homeTeam possession
    this._mainService.homeTeamPossession$.subscribe(
      data => {
        this.homeTeamPossession = data;
      }
    );
    // awayTeam possession
    this._mainService.awayTeamPossession$.subscribe(
      data => {
        this.awayTeamPossession = data;
      }
    );

    // homeTeamFouls
    this._mainService.homeTeamFouls$.subscribe(
      data => {
        this.homeTeamFouls = data;
      }
    );
    // awayTeamFouls
    this._mainService.awayTeamFouls$.subscribe(
      data => {
        this.awayTeamFouls = data;
      }
    );

    // homeTeamYellowCards
    this._mainService.homeTeamYellowCards$.subscribe(
      data => {
        this.homeTeamYellowCards = data;
      }
    );
    // awayTeamYellowCards
    this._mainService.awayTeamYellowCards$.subscribe(
      data => {
        this.awayTeamYellowCards = data;
      }
    );

    // homeTeamRedCards
    this._mainService.homeTeamRedCards$.subscribe(
      data => {
        this.homeTeamRedCards = data;
      }
    );
    // awayTeamRedCards
    this._mainService.awayTeamRedCards$.subscribe(
      data => {
        this.awayTeamRedCards = data;
      }
    );


  } // constructor ends



  ngOnInit() {

  }

}
