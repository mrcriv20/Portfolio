import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CaseStudy } from '../../../core/services/case-study';

@Component({
  selector: 'app-case-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './case-card.html',
  styleUrls: ['./case-card.scss'],
})
export class CaseCardComponent {
  @Input() study!: CaseStudy;
  @Input() large = false;
}
