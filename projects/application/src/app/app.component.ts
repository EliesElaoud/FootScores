import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomSideMenuComponent } from './components/custom-side-menu/custom-side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomSideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'application';
}
