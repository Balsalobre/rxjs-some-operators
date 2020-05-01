import { Component, OnInit } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-rxjs';


  constructor() {
  }

  ngOnInit(): void {
    const time = timer(3000);

    const observable = time.pipe(
      tap(() => console.log('Tap On')),
      mapTo('END Observable')
    );

    const subscription01 = observable.subscribe(x => console.log(x));
    const subscription02 = observable.subscribe(x => console.log(x));

    const shareObservable = observable.pipe(share());

    const subscription03 = shareObservable.subscribe(x => console.log(x));
    const subscription04 = shareObservable.subscribe(x => console.log(x));

    /** Tenemos un observable con una sola parte "observable" la de tap
     *  si se van a suscribir varias variables a ese observable, nos podemos
     *  asegurar de que solo dispare una vez la parte observada en este caso tap.
     */
  }
}
