import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';
declare var $: any;

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
        console.log(this.homeRelativeStrength)
      }
    );
    // relative strength of away team
    this._mainService.awayRelativeStrength$.subscribe(
      data => {
        this.awayRelativeStrength = data;
        console.log(this.awayRelativeStrength)
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
  } // constructor ends

  // declare match properties and initial statistical data
  matchMinutes:number = 0;
  matchSeconds:number = 0;
  timeAddedToH1:number = 0;
  timeAddedToH2:number = 0;
  matchStatuses:string[] = ['1st half', 'Half time', '2nd half', 'Full time', 'Not started'];
  matchStatus:string = this.matchStatuses[4];
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
  awayTeamPossession:number = 100 - this.homeTeamPossession;
  allPotentialFouls:number = Math.round(20 + Math.random() * 30);
  homeTeamFouls:number = 0;
  homeTeamPotentialFouls:number = 0;
  awayTeamFouls:number = 0;
  awayTeamPotentialFouls:number = 0;
  homeTeamYellowCards:number = 0;
  awayTeamYellowCards:number = 0;
  homeTeamRedCards:number = 0;
  awayTeamRedCards:number = 0;

  // squads
  homeTeamStartingLineup:any = [
    {name:'Goalkeeper', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender1', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender2', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender3', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender4', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder1', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder2', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder3', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder4', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Forward1', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Forward2', goalsToday:0, yellowCards: 0, redCards: 0},
  ];
  homeTeamSubs:any = [
    {name:'Goalkeeper2', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender5', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender6', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder5', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder6', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Forward3', goalsToday:0, yellowCards: 0, redCards: 0}
  ];
  awayTeamStartingLineup:any = [
    {name:'Goalkeeper', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender1', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender2', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender3', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender4', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder1', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder2', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder3', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder4', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Forward1', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Forward2', goalsToday:0, yellowCards: 0, redCards: 0},
  ];
  awayTeamSubs:any = [
    {name:'Goalkeeper2', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender5', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Defender6', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder5', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Midfielder6', goalsToday:0, yellowCards: 0, redCards: 0},
    {name:'Forward3', goalsToday:0, yellowCards: 0, redCards: 0}
  ];

  // initiate scorers' arrays
  homeTeamGoalObjects:any;
  // [{name:'Player7', goalTime: 53}, {name:'Player1', goalTime: 62}];
  awayTeamGoalObjects:any;
  // [{name:'Player4', goalTime: 44}];

  // match kickoff button
  startMatch(){
    // determine potential number of fouls from each team
    this.homeTeamPotentialFouls = Math.round(Math.random()*(this.allPotentialFouls * (this.awayRelativeStrength / 100) ));
    this.awayTeamPotentialFouls = Math.round(Math.random()*(this.allPotentialFouls * (this.homeRelativeStrength / 100) ));
    console.log('all potential fouls: ' + this.allPotentialFouls, 'home team potential fouls: ' + this.homeTeamPotentialFouls, 'away team potential fouls: ' + this.awayTeamPotentialFouls );
    this.matchStatus = this.matchStatuses[0];
    setInterval(() => {
      // if match has started, if it's not half time and not Full time
      if(this.matchStatus != this.matchStatuses[1] && this.matchStatus != this.matchStatuses[3]) {
        this.matchSeconds = this.matchSeconds + 1;
        // when new minute starts
        if (this.matchSeconds > 59) {
          this.matchMinutes = this.matchMinutes + 1;
          this.matchSeconds = 0;

          //// 1) ADJUST POSSESSION according to teams' relative strength
          // set random possession adjuster to balance teams' relative strength
          var adjuster = 0;
          if (this.homeRelativeStrength < this.awayRelativeStrength && this.homeRelativeStrength <= 40) {
            adjuster = Math.random()*5;
          }
          if (this.homeRelativeStrength > this.awayRelativeStrength && this.awayRelativeStrength <= 40) {
            adjuster = Math.random()*(-5);
          }
          if (this.homeRelativeStrength < this.awayRelativeStrength && this.homeRelativeStrength >= 45) {
            adjuster = Math.random()*3;
          }
          if (this.homeRelativeStrength > this.awayRelativeStrength && this.awayRelativeStrength >= 45) {
            adjuster = Math.random()*(-2);
          }

          let moraleFromPossession = Math.random()*0.02;
          if (Math.random() < ((this.homeRelativeStrength+adjuster)/100)) {
            if (Math.abs(this.homeTeamPossession - this.awayTeamPossession) > 20) {
              this.homeTeamPossession = this.homeTeamPossession + Math.round(Math.random()*0.75);
            } else {
              this.homeTeamPossession = this.homeTeamPossession + Math.round(Math.random()*1.4);
            }
            this.homeTeamMorale = this.homeTeamMorale + moraleFromPossession;
            this.awayTeamMorale = this.awayTeamMorale - moraleFromPossession;
            this.awayTeamPossession = 100 - this.homeTeamPossession;
          } else {
            if (Math.abs(this.homeTeamPossession - this.awayTeamPossession) > 20) {
              this.awayTeamPossession = this.awayTeamPossession + Math.round(Math.random()*0.75);
            } else {
              this.awayTeamPossession = this.awayTeamPossession + Math.round(Math.random()*1.4);
            }
            this.homeTeamPossession = 100 - this.awayTeamPossession;
            this.homeTeamMorale = this.homeTeamMorale - moraleFromPossession;
            this.awayTeamMorale = this.awayTeamMorale + moraleFromPossession;
          }
          // ball possession edge cases
          if ((this.homeTeamPossession-this.awayTeamPossession) > 70) {
            this.homeTeamPossession = 85;
            this.awayTeamPossession = 15;
          }
          if ((this.awayTeamPossession-this.homeTeamPossession) > 70) {
            this.homeTeamPossession = 15;
            this.awayTeamPossession = 85;
          }
          // send this minute's updated possession to service
          this._mainService.updateHomeTeamPossession(this.homeTeamPossession);
          this._mainService.updateAwayTeamPossession(this.awayTeamPossession);

          ///////////////////////
          //// 2) FOULS AND CARDS
          ///////////////////////

          // did hometeam commit a foul?
          if (Math.random() < this.homeTeamPotentialFouls / 90) {
            this.homeTeamFouls++;
            this._mainService.updateHomeTeamFouls(this.homeTeamFouls);
            // did the home team get a yellow card?
            if (Math.random() < 1/7) {
              // choose random player from home team squad
              let homePlayerCautioned = this.homeTeamStartingLineup[Math.round(Math.random() * this.homeTeamStartingLineup.length-1)];
              // give this player a yellow
              homePlayerCautioned.yellowCards++;
              this.homeTeamYellowCards++;
              this._mainService.updateHomeTeamYellowCards(this.homeTeamYellowCards);
              console.log(homePlayerCautioned);
              // check whether it was a second yellow for this player
              if (homePlayerCautioned.yellowCards > 1) {
                homePlayerCautioned.redCards++;
                this.homeTeamRedCards++;
                this._mainService.updateHomeTeamRedCards(this.homeTeamRedCards);
                let indexOfCautionedPlayer = this.homeTeamStartingLineup.indexOf(homePlayerCautioned);
                this.homeTeamStartingLineup.splice(indexOfCautionedPlayer, 1);
                // decrease relative strength due to man disadvantage
                this.homeRelativeStrength = this.homeRelativeStrength - (this.homeRelativeStrength * 0.09);
                // decrease or increase morale after red card (50/50%)
                if (Math.random() > 0.5 ) {
                  this.homeTeamMorale = this.homeTeamMorale - (this.homeTeamMorale * 0.15);
                } else {
                  this.homeTeamMorale = this.homeTeamMorale + (this.homeTeamMorale * 0.15);
                }
              }
            } else {
              // did the home team receive straight red?
              if (Math.random() < 1/81) {
                // choose random player from home team squad who received straight red
                let playerStraightRed = this.homeTeamStartingLineup[Math.round(Math.random() * this.homeTeamStartingLineup.length-1)];
                // give this player a yellow
                playerStraightRed.redCards++;
                this.homeTeamRedCards++;
                this._mainService.updateHomeTeamRedCards(this.homeTeamRedCards);
                console.log(playerStraightRed);
                let indexOfPlayerStraightRed = this.homeTeamStartingLineup.indexOf(playerStraightRed);
                this.homeTeamStartingLineup.splice(indexOfPlayerStraightRed, 1);
                // decrease relative strength due to man disadvantage
                this.homeRelativeStrength = this.homeRelativeStrength - (this.homeRelativeStrength * 0.09);
                // decrease or increase morale after straight red card (50/50%)
                if (Math.random() > 0.5 ) {
                  this.homeTeamMorale = this.homeTeamMorale - (this.homeTeamMorale * 0.2);
                } else {
                  this.homeTeamMorale = this.homeTeamMorale + (this.homeTeamMorale * 0.2);
                }
              }
            }
          }
          // did away team commit a foul?
          if (Math.random() < this.awayTeamPotentialFouls / 90) {
            this.awayTeamFouls++;
            this._mainService.updateAwayTeamFouls(this.awayTeamFouls);
            // did the away team get a yellow card?
            if (Math.random() < 1/7) {
              // choose random player from home team squad
              let awayPlayerCautioned = this.awayTeamStartingLineup[Math.round(Math.random() * this.awayTeamStartingLineup.length-1)];
              // give this player a yellow
              awayPlayerCautioned.yellowCards++;
              this.awayTeamYellowCards++;
              this._mainService.updateAwayTeamYellowCards(this.awayTeamYellowCards);
              console.log(awayPlayerCautioned);
              // check whether it was a second yellow for this player
              if (awayPlayerCautioned.yellowCards > 1) {
                awayPlayerCautioned.redCards++;
                this.awayTeamRedCards++;
                this._mainService.updateAwayTeamRedCards(this.awayTeamRedCards);
                let indexOfCautionedPlayer = this.awayTeamStartingLineup.indexOf(awayPlayerCautioned);
                this.awayTeamStartingLineup.splice(indexOfCautionedPlayer, 1);
                // decrease relative strength due to man disadvantage
                this.awayRelativeStrength = this.awayRelativeStrength - (this.awayRelativeStrength * 0.09);
                // decrease or increase morale after red card (50/50%)
                if (Math.random() > 0.5 ) {
                  this.awayTeamMorale = this.awayTeamMorale - (this.awayTeamMorale * 0.15);
                } else {
                  this.awayTeamMorale = this.awayTeamMorale + (this.awayTeamMorale * 0.15);
                }
              }
            } else {
              // did the home team receive straight red?
              if (Math.random() < 1/81) {
                // choose random player from home team squad who received straight red
                let playerStraightRed = this.awayTeamStartingLineup[Math.round(Math.random() * this.awayTeamStartingLineup.length-1)];
                // give this player a yellow
                playerStraightRed.redCards++;
                this.awayTeamRedCards++;
                this._mainService.updateAwayTeamRedCards(this.awayTeamRedCards);
                console.log(playerStraightRed);
                let indexOfPlayerStraightRed = this.awayTeamStartingLineup.indexOf(playerStraightRed);
                this.awayTeamStartingLineup.splice(indexOfPlayerStraightRed, 1);
                // decrease relative strength due to man disadvantage
                this.awayRelativeStrength = this.awayRelativeStrength - (this.awayRelativeStrength * 0.09);
                // decrease or increase morale after straight red card (50/50%)
                if (Math.random() > 0.5 ) {
                  this.awayTeamMorale = this.awayTeamMorale - (this.awayTeamMorale * 0.2);
                } else {
                  this.awayTeamMorale = this.awayTeamMorale + (this.awayTeamMorale * 0.2);
                }
              }
            }
          }


          //////////////////////////////////
          //// 3) ATTEMPTS AND SHOTS ON GOAL
          //////////////////////////////////




          // if half time is approaching
          if (this.matchMinutes == 44) {
            // I need to set criteria to determine minutes added to first half
            this.timeAddedToH1 = Math.round(Math.random()*5);
          }
          // @ HALF TIME
          if( (this.matchMinutes == (45 + this.timeAddedToH1)) && (this.matchStatus == this.matchStatuses[0]) ) {
            // may add moments when game arbitrarily continues despite time elapsed
            this.matchStatus = this.matchStatuses[1];
            console.log(this.matchStatus);
            setTimeout(()=>{
              this.matchStatus = this.matchStatuses[2];
              this.matchMinutes = 45;
            }, 5000)
          }
          // if full time is approaching
          if (this.matchMinutes == 89) {
            // I need to set criteria to determine minutes added to first half
            this.timeAddedToH2 = Math.round(Math.random()*5);
          }
          // if match time ends
          if( (this.matchMinutes > (90 + this.timeAddedToH2)) && this.matchStatuses[2] ) {
            // may add moments when game arbitrarily continues despite time elapsed
            this.matchStatus = this.matchStatuses[3];
            console.log(this.matchStatus);
            console.info('home team morale after match: ' + this.homeTeamMorale.toFixed(3), 'away team morale after match: ' + this.awayTeamMorale.toFixed(3));
            return;
          }
        }
      }
    }, 1);
  }

  ngOnInit() {
    var screenHeight = $(window).height();
    $(".scoreboard").css({"minHeight": screenHeight});
  }

}
