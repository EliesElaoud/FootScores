import { Component, Input } from '@angular/core';
import { List } from '../../models/list-models';

@Component({
  selector: 'app-custom-list',
  standalone: true,
  imports: [],
  templateUrl: './custom-list.component.html',
  styleUrl: './custom-list.component.scss'
})

export class CustomListComponent {

  @Input() list : List[] = []

}
