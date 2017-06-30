import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-matchsettings',
  templateUrl: './matchsettings.component.html',
  styleUrls: ['./matchsettings.component.css']
})
export class MatchsettingsComponent implements OnInit {
  // team names
  homeTeamName = undefined;
  awayTeamName = undefined;
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

  constructor() {

  }

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
