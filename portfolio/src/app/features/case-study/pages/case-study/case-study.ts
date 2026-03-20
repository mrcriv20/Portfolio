import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CaseStudyService, CaseStudy } from '../../../../core/services/case-study';
import { CaseCardComponent } from '../../../../shared/components/case-card/case-card';
import { MetricsRowComponent } from '../../../../shared/components/metrics-row/metrics-row';
import { FadeUpDirective } from '../../../../shared/directives/fade-up.directive';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [CommonModule, RouterModule, CaseCardComponent, MetricsRowComponent, FadeUpDirective],
  templateUrl: './case-study.html',
  styleUrls: ['./case-study.scss'],
})
export class CaseStudyComponent implements OnInit {
  study?: CaseStudy;
  nextStudy?: CaseStudy;
  notFound = false;

  constructor(
    private route: ActivatedRoute,
    private caseStudyService: CaseStudyService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.route.params
      .pipe(
        switchMap(params =>
          this.caseStudyService.getAll().pipe(
            tap(studies => {
              this.study = studies.find(s => s.slug === params['slug']);
              if (!this.study) { this.notFound = true; return; }
              const idx = studies.indexOf(this.study);
              this.nextStudy = studies[(idx + 1) % studies.length];
              this.title.setTitle(`${this.study.title} — Mike Crivellaro`);
              this.meta.updateTag({ name: 'description', content: this.study.summary.substring(0, 160) });
            })
          )
        )
      )
      .subscribe();
  }

  formatParagraphs(text: string): string[] {
    return text.split('\n\n').filter(p => p.trim().length > 0);
  }
}
