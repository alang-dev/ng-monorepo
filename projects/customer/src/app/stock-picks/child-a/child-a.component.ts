import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {ButtonGroupComponent} from "app-lib";

@Component({
  selector: 'app-child-a',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule, MatDividerModule, MatIconModule,
    ButtonGroupComponent,
  ],
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.scss'
})
export class ChildAComponent {

}
