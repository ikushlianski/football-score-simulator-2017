import { Component, OnInit } from '@angular/core';
import {MainserviceService} from '../mainservice.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent implements OnInit {
  matchHasStarted:boolean;
  constructor(private _mainService:MainserviceService) {
    this._mainService.matchHasStarted$.subscribe(
      data => {
        this.matchHasStarted = data;
        console.log(this.matchHasStarted);
      }
    )
  }

  ngOnInit() {
  }

}
