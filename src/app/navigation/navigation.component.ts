import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.sass']
})
export class NavigationComponent {
  currentSlide = 1;

  constructor( private route: ActivatedRoute, private router: Router ) {
    this.router.navigate( [ this.currentSlide ] );
  }

  onPreviousSlide(): void {
    if ( this.currentSlide > 1 ) {
      this.currentSlide--;
      this.router.navigate( [ this.currentSlide ] );
    }
  }

  onNextSlide(): void {
    this.currentSlide++;
    this.router.navigate( [ this.currentSlide ] );
  }

}
