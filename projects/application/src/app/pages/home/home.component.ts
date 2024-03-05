import { Component } from '@angular/core';
import { CustomTitleComponent } from '../../components/custom-title/custom-title.component';
import { CustomTextComponent } from '../../components/custom-text/custom-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CustomTitleComponent, CustomTextComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
