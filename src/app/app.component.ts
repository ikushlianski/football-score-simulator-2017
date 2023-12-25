import { Component } from '@angular/core';
import {MainserviceService} from './mainservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  matchHasStarted:boolean;
  constructor(private _mainService:MainserviceService) {
    this._mainService.matchHasStarted$.subscribe(
      data => {
        this.matchHasStarted = data;
        console.log('app component received data ' + this.matchHasStarted)
      }
    )
  }
}
