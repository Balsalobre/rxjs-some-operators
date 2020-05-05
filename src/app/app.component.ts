import { Component, OnInit } from '@angular/core';
import { forkJoin, of, interval, Observable } from 'rxjs';
import { delay, take } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // Resuelve los valores en el orden en el cual se van emitiendo en el stream.
    const fork = forkJoin([
      of('Hola'),
      of('¿Qué tal estamos?').pipe(delay(500)),
      interval(2000).pipe(take(3)),
      interval(1000).pipe(take(2))
    ]);

    fork.subscribe(console.log);

    // ForkJoin Puede servirnos para componer un diccionario de recursos.
    const src = forkJoin(
      {
        google: ajax.getJSON('https://api.github.com/users/google'),
        microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
        balsalobre: ajax.getJSON('https://api.github.com/users/balsalobre'),
      }
    );

    src.subscribe(console.log);
  }
}
