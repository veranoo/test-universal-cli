import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {

  constructor(private _httpService: Http) {}

  fetchPosts() {
    const results$ = new Subject();
    this._httpService.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json())
      .subscribe((results) => {
        results$.next(results);
        results$.complete();
      });
    return results$;
  }

}
