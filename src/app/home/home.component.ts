import { Component} from '@angular/core';
// import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  customOptions: any = {
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    navText: [
      '<i class="custom-prev">&lt;</i>', // Custom previous button symbol
      '<i class="custom-next">&gt;</i>'  // Custom next button symbol
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    },
    center: true, // Center option to ensure the middle item is centered
    smartSpeed: 450, // Smooth transition speed
  };
}
