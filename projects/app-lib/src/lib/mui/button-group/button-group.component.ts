import { Component } from '@angular/core';
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'button-group',
  standalone: true,
    imports: [
        MatButtonModule,
        MatDividerModule,
        MatIconModule
    ],
  templateUrl: './button-group.component.html',
  styleUrl: './button-group.component.css'
})
export class ButtonGroupComponent {

}
