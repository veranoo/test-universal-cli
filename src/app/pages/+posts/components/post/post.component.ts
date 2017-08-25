import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Posts } from '../../../../posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  post: Posts;
  user;
  comments;

  constructor(private _activatedRoute: ActivatedRoute,
              private _postsService: PostsService) {
  }

  ngOnInit() {
    const params = this._activatedRoute.snapshot.params;
    const postID = params['postID'];
    this._postsService.fetchPost(postID)
      .subscribe((result) => {
        this.post = result;
      });
    this._postsService.fetchUser(postID)
      .subscribe((results) => {
        this.user = results;
      });
    this._postsService.fetchComments(postID)
      .subscribe((results) => {
        this.comments = results;
      });
  }

}
