import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Posts } from '../../../../posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: Posts[];

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService
      .fetchPosts()
      .subscribe((results) => {
        this.posts = results;
      });
  }

}
