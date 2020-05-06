import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Injectable({
  providedIn: 'root'
})
export class ObsService {

  constructor() { }

  getGithuUser(user: string): Observable<any> {
    const gh = ajax.getJSON(`http://api.github.com/users/${user}`);
    const data = new Observable(observer => {
      gh.subscribe(res => {
        observer.next(res);
        observer.complete();
      },
      error => console.error(error));
    });

    return data;
  }
}
