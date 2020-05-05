import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const source = of(1000, 2000, 3000);

    const obsMergeMap = source.pipe(
      mergeMap(data => of(`Valor: ${data}`).pipe(delay(data)))
    );

    obsMergeMap.subscribe(console.log);

    /** A diferencia de concatMap ahora el observable va a emitir
     *  antes el que primero se resuelva como siendo el primero 1000,
     *  que es el que tiene el menor delay.
     */

    const source2 = of(
      ajax.getJSON('http://api.github.com/users/balsalobre'),
      ajax.getJSON('http://api.github.com/users/google'),
    );

    const obsMergeMap2 = source2.pipe(
      mergeMap(data => data)
    );

    obsMergeMap2.subscribe(console.log);
  }
}
