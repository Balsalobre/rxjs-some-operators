import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

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
    const el = document.getElementById('element');
    const clicks: Observable<Event> = fromEvent(el, 'click');

    const positions = clicks.pipe(
      tap(
        event => console.log(event),
        error => console.error(error)
      )
    );
    positions.subscribe();
  }
}
