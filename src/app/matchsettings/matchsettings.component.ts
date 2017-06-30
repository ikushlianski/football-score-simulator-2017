import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-matchsettings',
  templateUrl: './matchsettings.component.html',
  styleUrls: ['./matchsettings.component.css']
})
export class MatchsettingsComponent implements OnInit {
  constructor() {
    this.relativeStrength = this.relativeStrengths[3];
    this.homeCrowdSupport = this.homeCrowdSupports[2]
    this.homeTeamMorale = this.motivations[2];
    this.awayTeamMorale = this.motivations[2];
    this.homeTeamTactics = this.tactics[2];
    this.awayTeamTactics = this.tactics[2];
  }

  // team names
  homeTeamName = '';
  awayTeamName = '';

  // second leg stuff
  isSecondLeg:boolean = false;
  awayTeam1stLegGoals = undefined;
  homeTeam1stLegGoals = undefined;
  onChangeSecondLeg(event){
    console.log(this.homeTeamName, this.awayTeamName)
    if (event.target.checked){
      this.isSecondLeg = true;
    } else {
      this.isSecondLeg = false;
      this.awayTeam1stLegGoals = undefined;
      this.homeTeam1stLegGoals = undefined;
    };
  }
  onChangeAwayTeam1stLegGoals(event) {
    this.awayTeam1stLegGoals = event.target.value;
  }
  onChangeHomeTeam1stLegGoals(event) {
    this.homeTeam1stLegGoals = event.target.value;
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

  // motivation options
  motivations:string[] = [`Extremely low`, `Low`, `Average`, `High`, `Extremely high`, `Random`];
  homeTeamMorale:string;
  awayTeamMorale:string;

  // tactics options
  tactics:string[] = ['Defensive', 'Counter', 'Balanced', 'Possession', 'Attacking', 'Random'];
  homeTeamTactics:string;
  awayTeamTactics:string;

  ngOnInit() {
    $('.firstLegGoalsSetter').hide();
    $("#isSecondLeg").change(function(event){
      if (event.target.checked) {
        $('.firstLegGoalsSetter').show();
      } else {
        $('.firstLegGoalsSetter').hide();
      }
    });
  }

}
