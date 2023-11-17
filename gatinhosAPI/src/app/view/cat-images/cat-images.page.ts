import { Component } from '@angular/core';
import { CatapiService } from 'src/app/services/catapi.service';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-cat-images',
  templateUrl: './cat-images.page.html',
  styleUrls: ['./cat-images.page.scss'],
})
export class CatImagesPage {
  cats: any[] = [];
  currentCat: any;
  
  constructor(private catApiService: CatapiService) { }

  getRandomCat() {
    this.catApiService.getRandomCat().subscribe(
      (data: any) => {
        this.cats = [data];
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTenRandomCats() {
    this.catApiService.getTenRandomCats().subscribe(
      (data: any[]) => {
        this.cats = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  getTenBengalCats() {
    this.catApiService.getTenBengalCats().subscribe(
      (data: any[]) => {
        console.log('a')
        this.cats = data;
      },
      (error: any) => {
        console.log('b')
        console.log(error);
      }
    );
  }

  nextCat() {
    const currentIndex = this.cats.indexOf(this.currentCat);
    if (currentIndex < this.cats.length - 1) {
      this.currentCat = this.cats[currentIndex + 1];
    }
  }

  prevCat() {
    const currentIndex = this.cats.indexOf(this.currentCat);
    if (currentIndex > 0) {
      this.currentCat = this.cats[currentIndex - 1];
    }
  }


}
