import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const source = of(2000, 1000, 3000);

    const obsConcatMap = source.pipe(
      concatMap(data => of(`Valor: ${data}`).pipe(delay(data)))
    );

    obsConcatMap.subscribe(console.log);

    /** La diferencia principal que hay con concat es que concat
     *  concatena observables y concatMap concaterna lo que son los
     *  streams y permite mapearlos.
     *
     * Fuerza y orden y concatena los datos util para por ejemplo
     * 3 peticiones HTTP.
     */
  }
}
