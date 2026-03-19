import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CaseStudyService, CaseStudy } from '../../../../core/services/case-study';
import { CaseCardComponent } from '../../../../shared/components/case-card/case-card';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header';
import { FadeUpDirective } from '../../../../shared/directives/fade-up.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CaseCardComponent, SectionHeaderComponent, FadeUpDirective],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class HomeComponent implements OnInit {
  featured: CaseStudy[] = [];

  skills = [
    { label: 'Product Strategy', desc: 'From zero-to-one and scale' },
    { label: 'Design Systems', desc: 'Component libraries at enterprise scale' },
    { label: 'UX Research', desc: 'Contextual inquiry to usability testing' },
    { label: 'Design Leadership', desc: 'Growing and managing design teams' },
    { label: 'Front-End Development', desc: 'Closing the design-code gap' },
    { label: 'Accessibility', desc: 'WCAG 2.1 AA and Section 508' },
  ];

  constructor(
    private caseStudyService: CaseStudyService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Mike Crivellaro — Head of Product Design');
    this.meta.updateTag({
      name: 'description',
      content: 'Mike Crivellaro is a Lead Product Designer and design leader building enterprise-grade products, design systems, and teams.',
    });
    this.caseStudyService.getFeatured().subscribe(studies => {
      this.featured = studies;
    });
  }
}
