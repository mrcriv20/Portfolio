import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.html',
  styleUrls: ['./section-header.scss'],
})
export class SectionHeaderComponent {
  @Input() label = '';
  @Input() title = '';
  @Input() subtitle = '';
  @Input() align: 'left' | 'center' = 'left';
}
