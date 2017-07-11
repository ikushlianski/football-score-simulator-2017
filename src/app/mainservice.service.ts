import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Http } from '@angular/http';

@Injectable()
export class MainserviceService {
  // base url
  baseUrl:string = "https://football-results-simulator.firebaseio.com";

  constructor(private http:Http){}
  getUEFAClubObjects(){
    return this.http.get (`${this.baseUrl}/uefa_clubs_nations/uefa_clubs.json`).map(res => res.json());
  }
  getUEFANationsObjects(){
    return this.http.get (`${this.baseUrl}/uefa_clubs_nations/uefa_nations.json`)
    .map(res => res.json());
  }

  matchHasStarted = new Subject<boolean>();
  matchHasStarted$ = this.matchHasStarted.asObservable();
  updateMatchHasStarted(data:any){
    this.matchHasStarted.next(data);
  }

  // monitor tournament name change in settings
  tournamentName = new Subject<string>();
  tournamentName$ = this.tournamentName.asObservable();
  updateTournamentName(data:any){
    this.tournamentName.next(data);
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

  matchLocation = new Subject<string>();
  matchLocation$ = this.matchLocation.asObservable();
  updateMatchLocation(data:any){
    this.matchLocation.next(data);
  }

  isSecondLeg = new Subject<boolean>();
  isSecondLeg$ = this.isSecondLeg.asObservable();
  updateIsSecondLeg(data:boolean){
    this.isSecondLeg.next(data);
  }
  // home and away goals
  homeTeam1stLegGoals = new Subject<number>();
  homeTeam1stLegGoals$ = this.homeTeam1stLegGoals.asObservable();
  updateHomeTeam1stLegGoals(data:number){
    this.homeTeam1stLegGoals.next(data);
  }
  awayTeam1stLegGoals = new Subject<number>();
  awayTeam1stLegGoals$ = this.awayTeam1stLegGoals.asObservable();
  updateAwayTeam1stLegGoals(data:number){
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

  // teams' ball possession
  homeTeamPossession = new Subject<number>();
  homeTeamPossession$ = this.homeTeamPossession.asObservable();
  updateHomeTeamPossession(data:any){
    this.homeTeamPossession.next(data);
  }
  awayTeamPossession = new Subject<number>();
  awayTeamPossession$ = this.awayTeamPossession.asObservable();
  updateAwayTeamPossession(data:any){
    this.awayTeamPossession.next(data);
  }

  // teams' fouls
  homeTeamFouls = new Subject<number>();
  homeTeamFouls$ = this.homeTeamFouls.asObservable();
  updateHomeTeamFouls(data:any){
    this.homeTeamFouls.next(data);
  }
  awayTeamFouls = new Subject<number>();
  awayTeamFouls$ = this.awayTeamFouls.asObservable();
  updateAwayTeamFouls(data:any){
    this.awayTeamFouls.next(data);
  }

  // teams' yellow cards
  homeTeamYellowCards = new Subject<number>();
  homeTeamYellowCards$ = this.homeTeamYellowCards.asObservable();
  updateHomeTeamYellowCards(data:any){
    this.homeTeamYellowCards.next(data);
  }
  awayTeamYellowCards = new Subject<number>();
  awayTeamYellowCards$ = this.awayTeamYellowCards.asObservable();
  updateAwayTeamYellowCards(data:any){
    this.awayTeamYellowCards.next(data);
  }

  // teams' red cards
  homeTeamRedCards = new Subject<number>();
  homeTeamRedCards$ = this.homeTeamRedCards.asObservable();
  updateHomeTeamRedCards(data:any){
    this.homeTeamRedCards.next(data);
  }
  awayTeamRedCards = new Subject<number>();
  awayTeamRedCards$ = this.awayTeamRedCards.asObservable();
  updateAwayTeamRedCards(data:any){
    this.awayTeamRedCards.next(data);
  }

  // teams' overall shots
  homeTeamActualShots = new Subject<number>();
  homeTeamActualShots$ = this.homeTeamActualShots.asObservable();
  updateHomeTeamActualShots(data:any){
    this.homeTeamActualShots.next(data);
  }
  awayTeamActualShots = new Subject<number>();
  awayTeamActualShots$ = this.awayTeamActualShots.asObservable();
  updateAwayTeamActualShots(data:any){
    this.awayTeamActualShots.next(data);
  }

  // teams' overall shots
  homeTeamShotsOnGoal = new Subject<number>();
  homeTeamShotsOnGoal$ = this.homeTeamShotsOnGoal.asObservable();
  updateHomeTeamShotsOnGoal(data:any){
    this.homeTeamShotsOnGoal.next(data);
  }
  awayTeamShotsOnGoal = new Subject<number>();
  awayTeamShotsOnGoal$ = this.awayTeamShotsOnGoal.asObservable();
  updateAwayTeamShotsOnGoal(data:any){
    this.awayTeamShotsOnGoal.next(data);
  }

  // teams' goals
  homeTeamGoals = new Subject<number>();
  homeTeamGoals$ = this.homeTeamGoals.asObservable();
  updateHomeTeamGoals(data:any){
    this.homeTeamGoals.next(data);
  }
  awayTeamGoals = new Subject<number>();
  awayTeamGoals$ = this.awayTeamGoals.asObservable();
  updateAwayTeamGoals(data:any){
    this.awayTeamGoals.next(data);
  }

  ngOnInit(){

  }
}
