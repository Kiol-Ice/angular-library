import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-detail-card',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    RouterLink,
    RouterLinkActive,
    ],
  templateUrl: './detail-card.component.html',
  styleUrl: './detail-card.component.css'
})
export class DetailCardComponent {
  @Input() headerText: string;
  @Input() backRoute: string;
}
