import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for standalone component
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

  slidesStore = [
    {
      src: 'assets/tequila.png',
      title: 'Tequila Blanco',
      rating: '4.5',
      oldPrice: '$200',
      newPrice: '$150',
      offPrice: '30% off',
    },
    {
      src: 'assets/vodka.png',
      title: 'Tequila Blanco',
      rating: '4.5',
      oldPrice: '$200',
      newPrice: '$150',
      offPrice: '30% off',
    },
    {
      src: 'assets/rum.png',
      title: 'Tequila Blanco',
      rating: '4.5',
      oldPrice: '$200',
      newPrice: '$150',
      offPrice: '10% off',
    },
    {
      src: 'assets/gin.png',
      title: 'Tequila Blanco',
      rating: '4.5',
      oldPrice: '$200',
      newPrice: '$150',
      offPrice: '50% off',
    },
    {
      src: 'assets/wine.png',
      title: 'Tequila Blanco',
      rating: '4.5',
      oldPrice: '$200',
      newPrice: '$150',
      offPrice: '31% off',
    },
 

    // // More products here
  ];
  testimonials = [
    {
      src: 'assets/client.png',
      title: 'Tequila Blanco',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      name: 'Alisa rahman',
      designation: 'Businessman',
    },
    {
      src: 'assets/client.png',
      title: 'Tequila Blanco',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      name: 'Alisa rahman',
      designation: 'Businessman',
    },
    {
      src: 'assets/client.png',
      title: 'Tequila Blanco',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      name: 'Alisa rahman',
      designation: 'Businessman',
    },
    {
      src: 'assets/client.png',
      title: 'Tequila Blanco',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley.',
      name: 'Alisa rahman',
      designation: 'Businessman',
    },
   // // More products here
  ];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

  
  testimonialsOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 2
      }
    },
    nav: true
  }
}
