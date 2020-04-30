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

    contador.subscribe((n) => console.log(`Llevamos ${n} segundos...`));

    const trigger = timer(2000);

    trigger.subscribe(() => console.log('Triggered 2 seg...'));
  }
}
