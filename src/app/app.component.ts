import { Component, OnInit } from '@angular/core';
import { concat, interval, range } from 'rxjs';
import { take } from 'rxjs/operators';

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
    // Este observable se va a disparar tan solo 4 veces en los 4 segundos que dura.
    const timer = interval(1000).pipe(take(4));

    // Este observable cuenta.
    const rango = range(1, 10);

    // Une streams de datos de un observable a otro.
    const result = concat(timer, rango);

    result.subscribe(x => console.log(x));
  }
}
