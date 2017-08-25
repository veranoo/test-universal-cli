import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Posts } from '../../../posts';

const URL = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class PostsService {

  constructor(private _httpService: Http) {}

  fetchPosts(): Observable<Posts[]> {
    return this.fetchJSON(`${URL}/posts`);
  }

  fetchPost(idx: string) {
    return this.fetchJSON(`${URL}/posts/${idx}`);
  }

  fetchUser(idx: string) {
    return this.fetchJSON(`${URL}/users/${idx}`);
  }

  fetchComments(postId: string) {
    return this.fetchJSON(`${URL}/comments?postId=${postId}`);
  }

  fetchJSON(url: string): Observable<any> {
    const results$ = new Subject();
    this._httpService.get(url)
      .map(res => res.json())
      .subscribe((results) => {
        results$.next(results);
        results$.complete();
      });
    return results$;
  }

}
