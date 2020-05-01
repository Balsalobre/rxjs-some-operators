import { Component, OnInit } from '@angular/core';
import { pipe, of } from 'rxjs';
import { map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'angular-rxjs';

  constructor() {
  }

  ngOnInit(): void {
    const numns = of(1, 2, 4, 5);

    const alCuadrado = pipe(
      filter((n: number) => n % 2 === 0),
      map(n => n * n),
    );

    const cuadrado = alCuadrado(numns);
    cuadrado.subscribe(x => console.log(x));
  }
}
