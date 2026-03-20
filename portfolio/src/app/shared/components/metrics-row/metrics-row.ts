import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudyMetric } from '../../../core/services/case-study';

@Component({
  selector: 'app-metrics-row',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metrics-row.html',
  styleUrls: ['./metrics-row.scss'],
})
export class MetricsRowComponent {
  @Input() metrics: CaseStudyMetric[] = [];
}
