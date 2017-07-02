import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';
import {MatchModel} from '../match-model'
declare var $: any;

@Component({
  selector: 'app-matchsettings',
  templateUrl: './matchsettings.component.html',
  styleUrls: ['./matchsettings.component.css']
})
export class MatchsettingsComponent implements OnInit {
  constructor(private _mainService:MainserviceService) {
    this._mainService.matchHasStarted$.subscribe(
      data => {
        this.matchHasStarted = data;
      }
    );
    this.relativeStrength = this.relativeStrengths[3];
    this.homeCrowdSupport = this.homeCrowdSupports[2]
    this.homeTeamMorale = this.motivations[2];
    this.awayTeamMorale = this.motivations[2];
    this.homeTeamTactics = this.tactics[2];
    this.awayTeamTactics = this.tactics[2];
  }

  // team names
  homeTeamName = '';
  onChangeHomeTeamName(event){
    this.homeTeamName = event.target.value;
    this._mainService.updateHomeTeamName(this.homeTeamName);
  }
  awayTeamName = '';
  onChangeAwayTeamName(event){
    this.awayTeamName = event.target.value;
    this._mainService.updateAwayTeamName(this.awayTeamName);
  }

  // second leg stuff
  isSecondLeg:boolean = false;
  homeTeam1stLegGoals = undefined;
  awayTeam1stLegGoals = undefined;
  onChangeSecondLeg(event){
    if (event.target.checked){
      this.isSecondLeg = true;
      this._mainService.updateIsSecondLeg(this.isSecondLeg);
    } else {
      this.isSecondLeg = false;
      this._mainService.updateIsSecondLeg(this.isSecondLeg);
      this.awayTeam1stLegGoals = undefined;
      this.homeTeam1stLegGoals = undefined;
    };
  }
  onChangeHomeTeam1stLegGoals(event) {
    this.homeTeam1stLegGoals = event.target.value;
    this._mainService.updateHomeTeam1stLegGoals(this.homeTeam1stLegGoals);
  }
  onChangeAwayTeam1stLegGoals(event) {
    this.awayTeam1stLegGoals = event.target.value;
    this._mainService.updateAwayTeam1stLegGoals(this.awayTeam1stLegGoals);
  }

  // relative strengths
  relativeStrengths:string[] = [
    `Hosts much weaker than Visitors`,
    `Hosts weaker than Visitors`,
    `Hosts a bit weaker than Visitors`,
    `Hosts and Visitors equal in class`,
    `Hosts a bit stronger than Visitors`,
    `Hosts stronger than Visitors`,
    `Hosts much stronger than Visitors`
  ];
  relativeStrength:string;
  onChangeRelativeStrength(event) {
    this.relativeStrength = event.target.value;
    this._mainService.updateRelativeStrength(this.relativeStrength);
  }

  // home crowd support options
  homeCrowdSupports:string[] = [
    `Hosts have no support`,
    `Hosts have weak support`,
    `Hosts have average support`,
    `Hosts enjoy good support`,
    `Hosts enjoy outstanding support`,
    `Teams play on neutral venue`,
    `Random support`
  ];
  homeCrowdSupport:string;
  onChangeHomeCrowdSupport(event) {
    this.homeCrowdSupport = event.target.value;
    this._mainService.updateHomeCrowdSupport(this.homeCrowdSupport);
  }

  // motivation options
  motivations:string[] = [`Extremely low`, `Low`, `Average`, `High`, `Extremely high`, `Random`];
  homeTeamMorale:string;
  awayTeamMorale:string;
  onChangeHomeTeamMorale(event) {
    this.homeTeamMorale = event.target.value;
    this._mainService.updateHomeTeamMorale(this.homeTeamMorale);
  }
  onChangeAwayTeamMorale(event) {
    this.awayTeamMorale = event.target.value;
    this._mainService.updateAwayTeamMorale(this.awayTeamMorale);
  }

  // tactics options
  tactics:string[] = ['Defensive', 'Counter', 'Balanced', 'Possession', 'Attacking', 'Random'];
  homeTeamTactics:string;
  awayTeamTactics:string;
  onChangeHomeTeamTactics(event) {
    this.homeTeamTactics = event.target.value;
    this._mainService.updateHomeTeamTactics(this.homeTeamTactics);
  }
  onChangeAwayTeamTactics(event) {
    this.awayTeamTactics = event.target.value;
    this._mainService.updateAwayTeamTactics(this.awayTeamTactics);
  }

  // proceed to match
  matchHasStarted:boolean = false;
  proceedToMatch(){
    if (this.isSecondLeg) {
      // if this is the 2nd leg
      if (this.homeTeam1stLegGoals == undefined || this.awayTeam1stLegGoals == undefined) {
        alert('Please specify first leg result between these two teams');
        return;
      } else {
        if (this.homeTeamName != '' && this.awayTeamName != '') {
          this.matchHasStarted = true;
          this._mainService.updateMatchHasStarted(this.matchHasStarted);
        } else {
          alert('Please enter team names');
          return;
        }
      }
    } else {
      // if this is NOT the first leg
      if (this.homeTeamName != '' && this.awayTeamName != '') {
        this.matchHasStarted = true;
        this._mainService.updateMatchHasStarted(this.matchHasStarted);
      } else {
        alert('Please enter team names');
      }
    }
  }

  ngOnInit() {
    // hide and show second leg options
    $('.firstLegGoalsSetter').hide();
    $("#isSecondLeg").change(function(event){
      if (event.target.checked) {
        $('.firstLegGoalsSetter').show();
      } else {
        $('.firstLegGoalsSetter').hide();
      }
    });
    // send all default and potentially unchanged match settings to mainservice so that if a user does not change any or some of them, they will still be available to service and to all other components subscribed to service data
     this._mainService.relativeStrength.next(this.relativeStrength);
     this._mainService.homeCrowdSupport.next(this.homeCrowdSupport);
     this._mainService.homeTeamMorale.next(this.homeTeamMorale);
     this._mainService.awayTeamMorale.next(this.awayTeamMorale);
     this._mainService.homeTeamTactics.next(this.homeTeamTactics);
     this._mainService.awayTeamTactics.next(this.awayTeamTactics);

  }

}
