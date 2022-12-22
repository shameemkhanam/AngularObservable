import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'AngularObservables';

  //  USING CONSTRUCTOR METHOD:
  // myObservable = new Observable((observer) => {
  //   console.log('Observable starts..');
  //   setTimeout(() => {observer.next('1')}, 1000);
  //   setTimeout(() => {observer.next('2')}, 2000);
  //   setTimeout(() => {observer.next('3')}, 3000);
  //   // setTimeout(() => {observer.error(new Error("There is an error!"))}, 3000);
  //   setTimeout(() => {observer.next('4')}, 4000);
  //   setTimeout(() => {observer.next('5')}, 5000);
  //   setTimeout(() => {observer.complete()}, 3000); //here after 3sec no data will be emitted
  // observer.next('1');
  // observer.next('2');
  // observer.next('3');
  // observer.next('4');
  // observer.next('5');
  // });

  //USING CREATE METHOD:
  // myObservable = Observable.create((observer: { next: (arg0: string) => void; error: (arg0: Error) => void; complete: () => void; }) => {
  //   setTimeout(() => { observer.next("A") }, 1000);
  //   setTimeout(() => { observer.next("B") }, 2000);
  //   // setTimeout(() => { observer.error(new Error("error occured!!")) }, 2000);
  //   setTimeout(() => { observer.next("C") }, 3000);
  //   setTimeout(() => { observer.complete() }, 4000);
  // });

  array1 = [1, 2, 6,7,8];
  array2 = ['A', 'B', 'C'];

  //'OF' OPERATOR
  // myObservable = of(this.array1, this.array2, 20, 30, "hello");
  
  //'FROM' OPERATOR
  // myObservable = from(this.array1); //1,2,3,4,5

  //map() operator
  // transformedObs = this.myObservable.pipe(map((val) => {  //5,10,15,20,25
  //   return val * 5;
  // }), filter((val) => {
  //   return val >= 30;
  // }));

  //filter() operator
  // filteredObs = this.transformedObs.pipe(filter((val) => {
  //   return val >= 30;
  // }));

  //simplied version of above:
  myObservable = from(this.array1).pipe(map((val) => {
    return val * 5;
  }), filter((val) => {
    return val >= 30;
  }));


  ngOnInit() {
    this.myObservable.subscribe(
      (val: any) => {
        console.log(val);
      },
      (error: { message: any }) => {
        alert(error.message);
      },
      () => {
        alert('completed emitting');
      }
    );
  }

}
