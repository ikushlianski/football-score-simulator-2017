import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MainserviceService {
  matchHasStarted = new Subject<boolean>();
  matchHasStarted$ = this.matchHasStarted.asObservable();
  updateMatchHasStarted(data:any){
    this.matchHasStarted.next(data);
  }

  homeTeamName = new Subject<string>();
  homeTeamName$ = this.homeTeamName.asObservable();
  updateHomeTeamName(data:any){
    this.homeTeamName.next(data);
  }
  awayTeamName = new Subject<string>();
  awayTeamName$ = this.awayTeamName.asObservable();
  updateAwayTeamName(data:any){
    this.awayTeamName.next(data);
  }

  isSecondLeg = new Subject<boolean>();
  isSecondLeg$ = this.isSecondLeg.asObservable();
  updateIsSecondLeg(data:boolean){
    this.isSecondLeg.next(data);
  }
  // home and away goals
  homeTeam1stLegGoals = new Subject<any>();
  homeTeam1stLegGoals$ = this.homeTeam1stLegGoals.asObservable();
  updateHomeTeam1stLegGoals(data:any){
    this.homeTeam1stLegGoals.next(data);
  }
  awayTeam1stLegGoals = new Subject<any>();
  awayTeam1stLegGoals$ = this.awayTeam1stLegGoals.asObservable();
  updateAwayTeam1stLegGoals(data:any){
    this.awayTeam1stLegGoals.next(data);
  }

  // relative strength home and away
  homeRelativeStrength = new Subject<number>();
  homeRelativeStrength$ = this.homeRelativeStrength.asObservable();
  updateHomeRelativeStrength(data:any){
    this.homeRelativeStrength.next(data);
  }
  awayRelativeStrength = new Subject<number>();
  awayRelativeStrength$ = this.awayRelativeStrength.asObservable();
  updateAwayRelativeStrength(data:any){
    this.awayRelativeStrength.next(data);
  }

  // home crowd support
  homeCrowdSupport = new Subject<number>();
  homeCrowdSupport$ = this.homeCrowdSupport.asObservable();
  updateHomeCrowdSupport(data:any){
    this.homeCrowdSupport.next(data);
  }

  // home team morale and motivation
  homeTeamMorale = new Subject<number>();
  homeTeamMorale$ = this.homeTeamMorale.asObservable();
  updateHomeTeamMorale(data:any){
    this.homeTeamMorale.next(data);
  }
  // away team morale and motivation
  awayTeamMorale = new Subject<number>();
  awayTeamMorale$ = this.awayTeamMorale.asObservable();
  updateAwayTeamMorale(data:any){
    this.awayTeamMorale.next(data);
  }
  // home and away team tactics
  homeTeamTactics = new Subject<number>();
  homeTeamTactics$ = this.homeTeamTactics.asObservable();
  updateHomeTeamTactics(data:any){
    this.homeTeamTactics.next(data);
  }

  awayTeamTactics = new Subject<number>();
  awayTeamTactics$ = this.awayTeamTactics.asObservable();
  updateAwayTeamTactics(data:any){
    this.awayTeamTactics.next(data);
  }


  ngOnInit(){

  }
}
