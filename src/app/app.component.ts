import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { scan, delay, takeLast } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const src = of(1, 2, 3, 4, 5, 6).pipe(delay(1000));
    const scanObs = src.pipe(scan((acc, curr) => [...acc, curr], []));

    scanObs.pipe(takeLast(1)).subscribe(console.log);
  }
}
