import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'anime-generator';

  animeLink = '';

  ngOnInit() {
    this.generateRandomAnime();
  }

  generateRandomAnime = () => {
    const options = {
      method: 'GET',
      url: 'https://any-anime.p.rapidapi.com/anime',
      headers: {
        'X-RapidAPI-Key': '52a3bb1012msh259072fccca1860p1905aejsndb71618bb49a',
        'X-RapidAPI-Host': 'any-anime.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        try {
          this.animeLink = response.data.stuff[0].image;
        } catch (error) {}
      })
      .catch(function (error) {
        console.error(error);
      });
  };
}
