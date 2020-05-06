import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { mergeMap, delay } from 'rxjs/operators';
import { ObsService } from './services/obs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private obsService: ObsService) { }

  ngOnInit(): void {
    // this.obsService.getGithuUser('balsalobre').subscribe( data => {
    //   console.log(data);
    // });

    const obsForkJoin = forkJoin([
      this.obsService.getGithuUser('balsalobre'),
      this.obsService.getGithuUser('odoo'),
      this.obsService.getGithuUser('angular')
    ]);

    obsForkJoin.subscribe(console.log);

    const obsMergeMap = this.obsService.getGithuUser('balsalobre').pipe(
      mergeMap(data => ajax(data.blog))
    );

    obsMergeMap.subscribe(data => console.log(data.status));
  }
}
