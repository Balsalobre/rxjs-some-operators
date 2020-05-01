import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { bufferTime } from 'rxjs/operators';

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
    const timer = interval(500);

    // const buffer = timer.pipe(
    //   bufferTime(2000)
    // );

    const buffer = timer.pipe(
      bufferTime(2000, 1000)
    );

    buffer.subscribe(console.log);
  }
}
