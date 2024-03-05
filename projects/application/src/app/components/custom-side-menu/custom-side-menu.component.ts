import { Component } from '@angular/core';
import { CustomLinkComponent } from '../custom-link/custom-link.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-custom-side-menu',
  standalone: true,
  imports: [CustomLinkComponent],
  templateUrl: './custom-side-menu.component.html',
  styleUrl: './custom-side-menu.component.scss'
})

export class CustomSideMenuComponent {

  activeScreen : string = '';

  constructor (private router: Router) {
    
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe((event: NavigationEnd) => {
        this.activeScreen = event.url;
      });
  }
}
