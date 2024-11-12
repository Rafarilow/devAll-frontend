import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyApiService {

  constructor() {}

  // Método para fazer requisição GET com fetch
  getPosts(searchTerm: string = ''): Promise<any> {
    const url = `https://api.devall.com.br/api/v1/post?search=${searchTerm}`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao buscar os posts');
        }
        return response.json(); // Retorna o JSON
      })
      .catch(error => {
        console.error('Erro na requisição:', error);
        throw error;
      });
  }
}
