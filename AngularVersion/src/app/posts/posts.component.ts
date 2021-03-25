import { Component, Input, OnInit } from '@angular/core';
import { PostsServices } from '../services/posts.services';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() postsName: string;
  @Input() postsContent: string;
  @Input() postsLike: string;
  @Input() index: number;

  lastUpdate = new Promise(
    (resolve, rejects) => {
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        }, 20
      );
    }
  );

  constructor(private postsServices: PostsServices) {
   }

  ngOnInit(): void {
  }

  onLike(){
    console.log('like');
     return this.postsLike === 'like'
  }

  onDisLike(){
    console.log('dislike');
     return this.postsLike === 'dislike'
  }

  getLikeIts(){
    if(this.onLike()){
      return 'green';
    } else if(this.onDisLike){
      return 'red';
    }
  }

  onSwitch() {
    if(this.postsLike === 'like') {
      this.postsServices.switchOffOne(this.index);
    } else if(this.postsLike === 'dislike') {
      this.postsServices.switchOnOne(this.index);
    }
  }
}
