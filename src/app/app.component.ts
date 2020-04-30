import { Component, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-rxjs';

  obs: Observable<any>;

  ngOnInit(): void {
    this.obs = new Observable((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);

      setTimeout(() => {
        observer.next(4);
        // throw new Error('This is not an error');
        observer.complete();
      }, 1000);
    });

    // this.obs.subscribe(console.log);

    this.obs.subscribe({
      next: x => console.log('Obtenemos el valor: ' + x),
      error: err => console.error('Error:' + err),
      complete: () => console.log('COMPLETADO'),
    });
  }
}
