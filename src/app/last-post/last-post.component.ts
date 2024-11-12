import { Component, OnInit } from '@angular/core';
import { MyApiService } from '../services/my-api.service';

@Component({
  selector: 'app-last-post',
  templateUrl: './last-post.component.html',
  styleUrls: ['./last-post.component.css']
})
export class LastPostComponent implements OnInit {
  posts: any[] = [];

  constructor(private myApiService: MyApiService) {}

  ngOnInit(): void {
    this.loadPosts();  // Chama o método ao inicializar o componente
  }

  loadPosts() {
    this.myApiService.getPosts()
      .then(data => {
        this.posts = data; // Atribui os dados aos posts
      })
      .catch(error => {
        console.error('Erro ao carregar posts', error);
      });
  }
}
