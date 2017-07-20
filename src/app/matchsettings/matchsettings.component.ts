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

    this.relativeStrengthText = this.relativeStrengths[3];
    this.homeRelativeStrength = 50;
    this.awayRelativeStrength = 50;
    this.homeCrowdSupportText = this.homeCrowdSupports[2]
    this.homeCrowdSupport = 3;
    this.homeTeamMorale = 2;
    this.awayTeamMorale = 2;
    this.homeTeamMoraleText = this.motivations[2];
    this.awayTeamMoraleText = this.motivations[2];
    this.homeTeamTactics = 1;
    this.awayTeamTactics = 1;
    this.homeTeamTacticsText = this.tactics[2];
    this.awayTeamTacticsText = this.tactics[2];
  }

  // tournament names
  tournamentName:string;
  tournamentNames:string[] = [
    'UEFA Champions League',
    'UEFA Europa League',
    'UEFA European Championship',
    'UEFA Euro qualifiers',
    'UEFA friendly (clubs)',
    'International friendly (UEFA nations)',
    'UEFA World Cup qualifiers'
  ];

  possibleTeamObjects:any = [];
  possibleTeamNames:string[] = [];
  homeTeamObject: TeamObject;
  awayTeamObject: TeamObject;
  matchLocation:any;
  homeTeamRanking:number;
  awayTeamRanking:number;
  rankingDifference:number;
  isBothFromDB:boolean = false;
  homeTeamLogoLarge:string;
  awayTeamLogoLarge:string;

  onChangeTournament(event) {
    this.tournamentName = event.target.value;
    this._mainService.updateTournamentName(this.tournamentName);
    // fetch either clubs or national teams depending on tournament
    this.possibleTeamObjects = [];
    this.possibleTeamNames = [];
    if (this.tournamentName == this.tournamentNames[0] || this.tournamentName == this.tournamentNames[1] || this.tournamentName == this.tournamentNames[4]){
      // fetch only clubs, only from UFEA zone
      this._mainService.getUEFAClubObjects()
      .subscribe(possibleTeamObjects => {
        this.possibleTeamObjects = possibleTeamObjects;
        this.possibleTeamObjects.forEach(team => this.possibleTeamNames.push(team.club_name));
        console.log(this.possibleTeamNames);
      }
    );
    }
    if (this.tournamentName == this.tournamentNames[2] || this.tournamentName == this.tournamentNames[3] || this.tournamentName == this.tournamentNames[5] || this.tournamentName == this.tournamentNames[6]){
      // fetch only national teams, only from UFEA zone
      this._mainService.getUEFANationsObjects()
      .subscribe(possibleTeamObjects => {
      this.possibleTeamObjects = possibleTeamObjects;
      this.possibleTeamObjects.forEach(team => this.possibleTeamNames.push(team.nation_name));
      console.log(this.possibleTeamNames);
      }
    );
    }
  }

  // team names
  homeTeamName = '';
  onChangeHomeTeamName(event){
    this.homeRelativeStrength = 50;
    this.awayRelativeStrength = 50;
    this.relativeStrengthText = this.relativeStrengths[3];
    this.matchLocation = undefined;
    this.homeTeamRanking = undefined;
    this.isBothFromDB = false;
    this.homeTeamName = event.target.value;
    this._mainService.updateHomeTeamName(this.homeTeamName);
    // check match location and set ranking
    let chosenTeamName = event.target.value;
    let clubs = this.possibleTeamObjects.filter(x => x.club_name == chosenTeamName);
    if (clubs.length > 0) {
      // if this is a club, choose a stadium for it out of those available in the array
      this.matchLocation = clubs[0].venues;
      if(Array.isArray(this.matchLocation)) {
        this.matchLocation = this.matchLocation[Math.round(Math.random()*(this.matchLocation.length-1))]
      }
      // set the club's ranking from DB
      this.homeTeamRanking = clubs[0].club_ranking;
      this.homeTeamLogoLarge = clubs[0].club_logo_large;
      // if both teams in inputs come from DB
      if (this.homeTeamRanking && this.awayTeamRanking) {
        console.log('home team ranking: ' + this.homeTeamRanking, 'away team ranking: ' +this.awayTeamRanking)
        this.isBothFromDB = true;
        console.log('are both teams from DB? ' + this.isBothFromDB)
        // determine relative strengths of teams based from data from DB
        this.rankingDifference = this.homeTeamRanking - this.awayTeamRanking;
        if (this.rankingDifference <= 10 && this.rankingDifference >= -10) {
          this.homeRelativeStrength = 50;
          this.awayRelativeStrength = 50;
          this.relativeStrengthText = this.relativeStrengths[3];
        }
        if (this.rankingDifference > 10 && this.rankingDifference <= 20) {
          this.homeRelativeStrength = 45;
          this.awayRelativeStrength = 55;
          this.relativeStrengthText = this.relativeStrengths[2];
        }
        if (this.rankingDifference > 20 && this.rankingDifference <= 100) {
          this.homeRelativeStrength = 40;
          this.awayRelativeStrength = 60;
          this.relativeStrengthText = this.relativeStrengths[1];
        }
        if (this.rankingDifference > 100) {
          this.homeRelativeStrength = 30;
          this.awayRelativeStrength = 70;
          this.relativeStrengthText = this.relativeStrengths[0];
        }
        if (this.rankingDifference < -10 && this.rankingDifference >= -20) {
          this.homeRelativeStrength = 55;
          this.awayRelativeStrength = 45;
          this.relativeStrengthText = this.relativeStrengths[4];
        }
        if (this.rankingDifference < -20 && this.rankingDifference >= -100) {
          this.homeRelativeStrength = 60;
          this.awayRelativeStrength = 40;
          this.relativeStrengthText = this.relativeStrengths[5];
        }
        if (this.rankingDifference < -100) {
          this.homeRelativeStrength = 70;
          this.awayRelativeStrength = 30;
          this.relativeStrengthText = this.relativeStrengths[6];
        }
        this._mainService.updateHomeRelativeStrength(this.homeRelativeStrength);
        this._mainService.updateAwayRelativeStrength(this.awayRelativeStrength);
      }
    }
    if (this.matchLocation == undefined) {
      // if this is not a club, then it's a nation, so choose a stadium for it
      let nations = this.possibleTeamObjects.filter(x => x.nation_name == chosenTeamName);
      if (nations.length > 0) {
        this.matchLocation = nations[0].venues;
        this.homeTeamLogoLarge = nations[0].nation_flag_large;
        if(Array.isArray(this.matchLocation)) {
          this.matchLocation = this.matchLocation[Math.round(Math.random()*(this.matchLocation.length-1))]
        }
        // set the nation's ranking from DB
        this.homeTeamRanking = nations[0].fifa_nation_rank;
        // if both teams in inputs come from DB
        if (this.homeTeamRanking && this.awayTeamRanking) {
          console.log('home team ranking: ' + this.homeTeamRanking, 'away team ranking: ' +this.awayTeamRanking)
          this.isBothFromDB = true;
          console.log('are both teams from DB? ' + this.isBothFromDB)
          // determine relative strengths of teams based from data from DB
          this.rankingDifference = this.homeTeamRanking - this.awayTeamRanking;
          if (this.rankingDifference <= 5 && this.rankingDifference >= -5) {
            this.homeRelativeStrength = 50;
            this.awayRelativeStrength = 50;
            this.relativeStrengthText = this.relativeStrengths[3];
          }
          if (this.rankingDifference > 5 && this.rankingDifference <= 10) {
            this.homeRelativeStrength = 45;
            this.awayRelativeStrength = 55;
            this.relativeStrengthText = this.relativeStrengths[2];
          }
          if (this.rankingDifference > 10 && this.rankingDifference <= 30) {
            this.homeRelativeStrength = 40;
            this.awayRelativeStrength = 60;
            this.relativeStrengthText = this.relativeStrengths[1];
          }
          if (this.rankingDifference > 30) {
            this.homeRelativeStrength = 30;
            this.awayRelativeStrength = 70;
            this.relativeStrengthText = this.relativeStrengths[0];
          }
          if (this.rankingDifference < -5 && this.rankingDifference >= -10) {
            this.homeRelativeStrength = 55;
            this.awayRelativeStrength = 45;
            this.relativeStrengthText = this.relativeStrengths[4];
          }
          if (this.rankingDifference < -10 && this.rankingDifference >= -30) {
            this.homeRelativeStrength = 60;
            this.awayRelativeStrength = 40;
            this.relativeStrengthText = this.relativeStrengths[5];
          }
          if (this.rankingDifference < -30) {
            this.homeRelativeStrength = 70;
            this.awayRelativeStrength = 30;
            this.relativeStrengthText = this.relativeStrengths[6];
          }
          this._mainService.updateHomeRelativeStrength(this.homeRelativeStrength);
          this._mainService.updateAwayRelativeStrength(this.awayRelativeStrength);
        }
      }
    }
    this._mainService.updateMatchLocation(this.matchLocation);
    this._mainService.updateHomeTeamLogoLarge(this.homeTeamLogoLarge);
    if (this.homeTeamRanking && this.awayTeamRanking) {
      console.log('home team ranking: ' + this.homeTeamRanking, 'away team ranking: ' +this.awayTeamRanking)
      this.isBothFromDB = true;
      console.log('are both teams from DB? ' + this.isBothFromDB)
    } else {
      console.log('home team ranking: ' + this.homeTeamRanking, 'away team ranking: ' +this.awayTeamRanking)
      console.log('are both teams from DB? ' + this.isBothFromDB)
    }
  }
  awayTeamName = '';
  onChangeAwayTeamName(event){
    this.homeRelativeStrength = 50;
    this.awayRelativeStrength = 50;
    this.relativeStrengthText = this.relativeStrengths[3];
    this.awayTeamRanking = undefined;
    this.isBothFromDB = false;
    this.awayTeamName = event.target.value;
    this._mainService.updateAwayTeamName(this.awayTeamName);
    // determine whether the away team is a club or nation
    let clubs = this.possibleTeamObjects.filter(x => x.club_name == this.awayTeamName);
    if (clubs.length > 0) {
      // set the club's ranking from DB
      this.awayTeamRanking = clubs[0].club_ranking;
      this.awayTeamLogoLarge = clubs[0].club_logo_large;
      // if both teams in inputs come from DB
      if (this.homeTeamRanking && this.awayTeamRanking) {
        console.log('home team ranking: ' + this.homeTeamRanking, 'away team ranking: ' +this.awayTeamRanking)
        this.isBothFromDB = true;
        console.log('are both teams from DB? ' + this.isBothFromDB)
        // determine relative strengths of teams based from data from DB
        this.rankingDifference = this.homeTeamRanking - this.awayTeamRanking;
        if (this.rankingDifference <= 10 && this.rankingDifference >= -10) {
          this.homeRelativeStrength = 50;
          this.awayRelativeStrength = 50;
          this.relativeStrengthText = this.relativeStrengths[3];
        }
        if (this.rankingDifference > 10 && this.rankingDifference <= 20) {
          this.homeRelativeStrength = 45;
          this.awayRelativeStrength = 55;
          this.relativeStrengthText = this.relativeStrengths[2];
        }
        if (this.rankingDifference > 20 && this.rankingDifference <= 100) {
          this.homeRelativeStrength = 40;
          this.awayRelativeStrength = 60;
          this.relativeStrengthText = this.relativeStrengths[1];
        }
        if (this.rankingDifference > 100) {
          this.homeRelativeStrength = 30;
          this.awayRelativeStrength = 70;
          this.relativeStrengthText = this.relativeStrengths[0];
        }
        if (this.rankingDifference < -10 && this.rankingDifference >= -20) {
          this.homeRelativeStrength = 55;
          this.awayRelativeStrength = 45;
          this.relativeStrengthText = this.relativeStrengths[4];
        }
        if (this.rankingDifference < -20 && this.rankingDifference >= -100) {
          this.homeRelativeStrength = 60;
          this.awayRelativeStrength = 40;
          this.relativeStrengthText = this.relativeStrengths[5];
        }
        if (this.rankingDifference < -100) {
          this.homeRelativeStrength = 70;
          this.awayRelativeStrength = 30;
          this.relativeStrengthText = this.relativeStrengths[6];
        }
        this._mainService.updateHomeRelativeStrength(this.homeRelativeStrength);
        this._mainService.updateAwayRelativeStrength(this.awayRelativeStrength);
      }
    }
    let nations = this.possibleTeamObjects.filter(x => x.nation_name == this.awayTeamName);
    if (nations.length > 0) {
      // set the nation's ranking from DB
      this.awayTeamRanking = nations[0].fifa_nation_rank;
      this.awayTeamLogoLarge = nations[0].nation_flag_large;
      // if both teams in inputs come from DB
      if (this.homeTeamRanking && this.awayTeamRanking) {
        console.log('home team ranking: ' + this.homeTeamRanking, 'away team ranking: ' +this.awayTeamRanking)
        this.isBothFromDB = true;
        console.log('are both teams from DB? ' + this.isBothFromDB)
        // determine relative strengths of teams based from data from DB
        this.rankingDifference = this.homeTeamRanking - this.awayTeamRanking;
        if (this.rankingDifference <= 5 && this.rankingDifference >= -5) {
          this.homeRelativeStrength = 50;
          this.awayRelativeStrength = 50;
          this.relativeStrengthText = this.relativeStrengths[3];
        }
        if (this.rankingDifference > 5 && this.rankingDifference <= 10) {
          this.homeRelativeStrength = 45;
          this.awayRelativeStrength = 55;
          this.relativeStrengthText = this.relativeStrengths[2];
        }
        if (this.rankingDifference > 10 && this.rankingDifference <= 30) {
          this.homeRelativeStrength = 40;
          this.awayRelativeStrength = 60;
          this.relativeStrengthText = this.relativeStrengths[1];
        }
        if (this.rankingDifference > 30) {
          this.homeRelativeStrength = 30;
          this.awayRelativeStrength = 70;
          this.relativeStrengthText = this.relativeStrengths[0];
        }
        if (this.rankingDifference < -5 && this.rankingDifference >= -10) {
          this.homeRelativeStrength = 55;
          this.awayRelativeStrength = 45;
          this.relativeStrengthText = this.relativeStrengths[4];
        }
        if (this.rankingDifference < -10 && this.rankingDifference >= -30) {
          this.homeRelativeStrength = 60;
          this.awayRelativeStrength = 40;
          this.relativeStrengthText = this.relativeStrengths[5];
        }
        if (this.rankingDifference < -30) {
          this.homeRelativeStrength = 70;
          this.awayRelativeStrength = 30;
          this.relativeStrengthText = this.relativeStrengths[6];
        }
        this._mainService.updateHomeRelativeStrength(this.homeRelativeStrength);
        this._mainService.updateAwayRelativeStrength(this.awayRelativeStrength);
      }
      this._mainService.updateAwayTeamLogoLarge(this.awayTeamLogoLarge);
    }
  }

  // second leg stuff
  isSecondLeg:boolean = false;
  homeTeam1stLegGoals:number = undefined;
  awayTeam1stLegGoals:number = undefined;
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
    this.homeTeam1stLegGoals = Number(event.target.value);
    this._mainService.updateHomeTeam1stLegGoals(this.homeTeam1stLegGoals);
  }
  onChangeAwayTeam1stLegGoals(event) {
    this.awayTeam1stLegGoals = Number(event.target.value);
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
  relativeStrength:number;
  relativeStrengthText:string;
  homeRelativeStrength:number;
  awayRelativeStrength:number;
  onChangeRelativeStrength(event) {
    this.relativeStrength = event.target.selectedIndex;
    this.relativeStrengthText = event.target.value;
    switch(this.relativeStrength) {
      case 0:
        this.homeRelativeStrength = 30;
        this.awayRelativeStrength = 70;
      break;
      case 1:
        this.homeRelativeStrength = 40;
        this.awayRelativeStrength = 60;
      break;
      case 2:
        this.homeRelativeStrength = 45;
        this.awayRelativeStrength = 55;
      break;
      case 3:
        this.homeRelativeStrength = 50;
        this.awayRelativeStrength = 50;
      break;
      case 4:
        this.homeRelativeStrength = 55;
        this.awayRelativeStrength = 45;
      break;
      case 5:
        this.homeRelativeStrength = 60;
        this.awayRelativeStrength = 40;
      break;
      case 6:
        this.homeRelativeStrength = 70;
        this.awayRelativeStrength = 30;
      break;
    }
    this._mainService.updateHomeRelativeStrength(this.homeRelativeStrength);
    this._mainService.updateAwayRelativeStrength(this.awayRelativeStrength);
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
  homeCrowdSupportText:string;
  homeCrowdSupport:number;
  onChangeHomeCrowdSupport(event) {
    this.homeCrowdSupport = event.target.selectedIndex;
    this.homeCrowdSupportText = event.target.value;
    switch(this.homeCrowdSupport) {
      case 0:
        this.homeCrowdSupport = 0;
      break;
      case 1:
        this.homeCrowdSupport = 2;
      break;
      case 2:
        this.homeCrowdSupport = 3;
      break;
      case 3:
        this.homeCrowdSupport = 5;
      break;
      case 4:
        this.homeCrowdSupport = 7;
      break;
      case 5:
        this.homeCrowdSupport = 0;
      break;
      case 6:
        this.homeCrowdSupport = Math.round(Math.random()*8);
      break;
    }
    this._mainService.updateHomeCrowdSupport(this.homeCrowdSupport);
  }

  // motivation options
  motivations:string[] = [`Extremely low`, `Low`, `Average`, `High`, `Extremely high`, `Random`];
  homeTeamMorale:number;
  homeTeamMoraleText:string;
  awayTeamMorale:number;
  awayTeamMoraleText:string;
  onChangeHomeTeamMorale(event) {
    this.homeTeamMorale = event.target.selectedIndex;
    this.homeTeamMoraleText = event.target.value;
    switch(this.homeTeamMorale) {
      case 0:
        this.homeTeamMorale = 0;
      break;
      case 1:
        this.homeTeamMorale = 1;
      break;
      case 2:
        this.homeTeamMorale = 2;
      break;
      case 3:
        this.homeTeamMorale = 3;
      break;
      case 4:
        this.homeTeamMorale = 4;
      break;
      case 5:
        this.homeTeamMorale = Math.round(Math.random()*4);
      break;
    }
    this._mainService.updateHomeTeamMorale(this.homeTeamMorale);

  }
  onChangeAwayTeamMorale(event) {
    this.awayTeamMorale = event.target.selectedIndex;
    this.awayTeamMoraleText = event.target.value;
    switch(this.awayTeamMorale) {
      case 0:
        this.awayTeamMorale = 0;
      break;
      case 1:
        this.awayTeamMorale = 1;
      break;
      case 2:
        this.awayTeamMorale = 2;
      break;
      case 3:
        this.awayTeamMorale = 3;
      break;
      case 4:
        this.awayTeamMorale = 4;
      break;
      case 5:
        this.awayTeamMorale = Math.round(Math.random()*4);
      break;
    }
    this._mainService.updateAwayTeamMorale(this.awayTeamMorale);
  }

  // tactics options
  tactics:string[] = ['Defensive', 'Counter', 'Balanced', 'Possession', 'Attacking', 'Random'];
  homeTeamTactics:number;
  awayTeamTactics:number;
  homeTeamTacticsText:string;
  awayTeamTacticsText:string;
  onChangeHomeTeamTactics(event) {
    this.homeTeamTacticsText = event.target.value;
    this.homeTeamTactics = event.target.selectedIndex;
    switch(this.homeTeamTactics) {
      case 0:
        this.homeTeamTactics = 0.6;
      break;
      case 1:
        this.homeTeamTactics = 0.8;
      break;
      case 2:
        this.homeTeamTactics = 1;
      break;
      case 3:
        this.homeTeamTactics = 1.2;
      break;
      case 4:
        this.homeTeamTactics = 1.4;
      break;
      case 5:
        this.homeTeamTactics = Math.random() * (1.4 - 0.6) + 0.6;
      break;
    }
    this._mainService.updateHomeTeamTactics(this.homeTeamTactics);
  }
  onChangeAwayTeamTactics(event) {
    this.awayTeamTacticsText = event.target.value;
    this.awayTeamTactics = event.target.selectedIndex;
    switch(this.awayTeamTactics) {
      case 0:
        this.awayTeamTactics = 0.6;
      break;
      case 1:
        this.awayTeamTactics = 0.8;
      break;
      case 2:
        this.awayTeamTactics = 1;
      break;
      case 3:
        this.awayTeamTactics = 1.2;
      break;
      case 4:
        this.awayTeamTactics = 1.4;
      break;
      case 5:
        this.awayTeamTactics = Math.random() * (1.4 - 0.6) + 0.6;
      break;
    }
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
     this._mainService.homeRelativeStrength.next(this.homeRelativeStrength);
     this._mainService.awayRelativeStrength.next(this.awayRelativeStrength);
     this._mainService.tournamentName.next(this.tournamentName);
     this._mainService.isSecondLeg.next(this.isSecondLeg);
     this._mainService.homeCrowdSupport.next(this.homeCrowdSupport);
     this._mainService.homeTeamMorale.next(this.homeTeamMorale);
     this._mainService.awayTeamMorale.next(this.awayTeamMorale);
     this._mainService.homeTeamTactics.next(this.homeTeamTactics);
     this._mainService.awayTeamTactics.next(this.awayTeamTactics);
     /* onChangeTournament(); */
  }

}
interface TeamObject {
  venues: string;
}
