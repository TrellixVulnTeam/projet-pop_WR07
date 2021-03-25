import { Component, OnInit } from '@angular/core';
import { PostsServices } from '../services/posts.services';

@Component({
  selector: 'app-posts-view',
  templateUrl: './posts-view.component.html',
  styleUrls: ['./posts-view.component.scss']
})
export class PostsViewComponent implements OnInit {
  isAuth = false;
  posts: any[];

  constructor(private postsServices: PostsServices){
    setTimeout(
      () => {
      this.isAuth = true
    }, 4000
    );
  }
  ngOnInit() {
    this.posts = this.postsServices.posts;
  }

  onLike() {
    this.postsServices.switchOnAll();
  }

  onDisLike() {
    if(confirm('Etes-vous sûre de tous liké ?')) {
      this.postsServices.switchOffAll();
    } else {
      return null;
    }
  }
}