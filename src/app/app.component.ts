import { Component } from '@angular/core';
import {MainserviceService} from './mainservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MainserviceService]
})
export class AppComponent {
  title = 'app works!';
}
