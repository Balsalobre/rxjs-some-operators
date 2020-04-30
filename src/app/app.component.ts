import { Component, OnInit } from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-rxjs';

  ngOnInit(): void {

    const contador = interval(1000);

    contador.subscribe({
      next: (n) => console.log(`Llevamos ${n} segundos...`),
      error: e => console.error(e)
    });
  }
}
