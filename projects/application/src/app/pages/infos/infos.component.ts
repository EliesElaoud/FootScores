import { Component } from '@angular/core';
import { CustomTitleComponent } from '../../components/custom-title/custom-title.component';
import { CustomTextComponent } from '../../components/custom-text/custom-text.component';

@Component({
  selector: 'app-infos',
  standalone: true,
  imports: [CustomTitleComponent, CustomTextComponent],
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.scss'
})
export class InfosComponent {

}
