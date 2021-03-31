import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServices } from '../services/posts.services';

@Component({
  selector: 'app-single-profil',
  templateUrl: './single-profil.component.html',
  styleUrls: ['./single-profil.component.scss']
})
export class SingleProfilComponent implements OnInit {

  name: string = 'name';
  statut: string = 'Statut';

  constructor(private postsServices: PostsServices,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.params['id'];
  }

}
