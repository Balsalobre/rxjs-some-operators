import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { interval, fromEvent, merge, empty, Subscription, of } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {

  // @ViewChild('remaining') remainingLabel: ElementRef;
  @ViewChild('pause') pauseButton: ElementRef;
  @ViewChild('resume') resumeButton: ElementRef;

  remainingLabel = 33;

  title = 'angular-rxjs';
  private subscription: Subscription;

  constructor() {
  }

  ngOnInit(): void {
  // PRIMER EJEMPLO
  //   const el = document.getElementById('element');
  //   const obs = fromEvent(el, 'click').pipe(
  //     switchMap(() => interval(1000))
  //   );

  //   obs.subscribe(console.log);
  }

  ngAfterViewInit(): void {
    // SEGUNDO EJEMPLO
    const obsInterval = interval(1000).pipe(mapTo(-1));
    const pause = fromEvent(this.pauseButton.nativeElement, 'click').pipe(mapTo(false));
    const resume = fromEvent(this.resumeButton.nativeElement, 'click').pipe(mapTo(true));

    const timer = merge(pause, resume).pipe(
      // forzamos que empieze con un valor.
      startWith(true),
      // si el valor el verdadero ejecutamos de nuevo el observable si no ponemos un observable vacío.
      switchMap(val => (val ? obsInterval : of<number>() )),
      // usamos scan para lanzar una función de acumulardor.
      scan((acc, curr) => (curr ? curr + acc : acc), 33),
      takeWhile(v => v >= 0)
    );

    timer.subscribe(x => this.remainingLabel = x);
  }
}
