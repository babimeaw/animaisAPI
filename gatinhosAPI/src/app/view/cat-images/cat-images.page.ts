import { Component, OnInit } from '@angular/core';
import { CatapiService } from 'src/app/services/catapi.service';

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.page.html',
  styleUrls: ['./cat-images.page.scss'],
})
export class CatImagesPage implements OnInit {

  cats: any[] = [];
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1.5, // Altere o valor para exibir mais ou menos imagens lado a lado
    centeredSlides: true,
    speed: 400
  };
  constructor(private CatApiService : CatapiService) { }

  ngOnInit() {
  }

  getRandomCat() {
    this.CatApiService.getRandomCat().subscribe(
      (data: any) => {
        this.cats = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTenRandomCats() {
    this.CatApiService.getTenRandomCats().subscribe(
      (data: any) => {
        this.cats = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTenBengalCats() {
    this.CatApiService.getTenBengalCats().subscribe(
      (data: any) => {
        this.cats = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
