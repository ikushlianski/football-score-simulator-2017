import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MainserviceService {
  private matchHasStarted = new Subject<boolean>();
  matchHasStarted$ = this.matchHasStarted.asObservable();

  updateServiceData(data:any){
    this.matchHasStarted.next(data);
  }
}
