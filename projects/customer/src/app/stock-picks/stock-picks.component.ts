import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-stock-picks',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './stock-picks.component.html',
  styleUrl: './stock-picks.component.scss'
})
export class StockPicksComponent {

}
