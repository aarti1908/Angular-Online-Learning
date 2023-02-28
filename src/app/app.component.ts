import { Component, OnInit } from '@angular/core';
import { concatAll, map, mergeAll, Observable, Subject, switchAll } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'onlineLearning';
  subject = new Subject<number>();

  constructor() {

  }

  ngOnInit(){
    const observable = new Observable((subscriber) => {
      subscriber.next(1);
    })

    const observable1 = new Observable((subscriber) => {
      subscriber.next('Aarti');
    })

    const observable2 = new Observable((subscriber) => {
      subscriber.next('Jyoti');
    })

    const observer = {
      next: (x) => {
        console.log('Observer got a next value: ' + x)
      },
      error: () => console.error('Observer got an error: '),
      complete: () => console.log('Observer got a complete notification'),
    };


    const observer2 = {
      next: (x) => {
        console.log('2.Observer got a next value: ' + x)
      },
      error: () => console.error('2.Observer got an error: '),
      complete: () => console.log('2.Observer got a complete notification'),
    };


    const newObservable = observable.pipe(
      map(x => observable1),
      map(y => observable2),
      switchAll()
    )


    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`),
    });
    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`),
    });

    this.subject.next(1)

    //checking output
    // observable.subscribe(observer);
    // console.log('Line after subscribing observable.');

    newObservable.subscribe(observer);
    newObservable.subscribe(observer2);

    


  }
}
