import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { IRepo } from './app.repo-interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient){
  }

  path = 'https://api.github.com/search/repositories?q=';

  searchGithubRepos(searchString): Observable<any> {
    return this.http.get(`${this.path}${searchString}`)
      .pipe(
        retry(3),
        map((data: any) => data.items.map(
          (item: any) => {
            let model = new IRepo();
            model.created_at = item.created_at;
            model.default_branch = item.default_branch;
            model.description = item.description;
            model.full_name = item.full_name;
            model.git_url = item.git_url;
            model.owner = item.owner;
            model.svn_url = item.svn_url;
            
            return model;
          })
        )
      )
  }
}
