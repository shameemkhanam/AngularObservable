import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class DataService{
  // dataEmitter = new EventEmitter<string>(); //created a custom event

  dataEmitter = new Subject<string>();

  //now create a method which'll raise the above event
  raiseDataEmitterEvent(data: string) {
    // this.dataEmitter.emit(data);
    this.dataEmitter.next(data);
  }
}