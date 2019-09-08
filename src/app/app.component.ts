import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-observables-example';
  repos;
  STORAGE_ID = 'httpGithubRepoCache';
  mainObs; 
  searchTerm;
  page: number = 1;
  totalItems = 0;

  constructor(private appService : AppService){
    /* 
      //USED IF YOU WANTED TO CACHE IN LOCAL STORE
    const path = 'https: api.github.com/search/repositories?q=';
    this.repos = http.get<any>(`${path}angular`).pipe(
      map(data => data.items)
    ).pipe(share());
      
    this.repos.subscribe(next => {
        localStorage[this.STORAGE_ID] = JSON.stringify(next);
      }
    );
    
    this.repos = this.repos.pipe(
      startWith(JSON.parse(localStorage[this.STORAGE_ID] || '[]'))
    );
    */
  }

  ngOnInit(){
    
    this.searchTerm = 'angular';
    let element = document.getElementById('searchTerm');
    let event = new Event('keyup');
    element.dispatchEvent(event);
  }

  searchGithub() {
    this.mainObs = this.appService.searchGithubRepos(this.searchTerm).subscribe(data => {
      this.repos = data;
      this.totalItems = data.length;
    });

  }

  ngOnDestory(){
    this.mainObs.unsubscribe();
  }
}
