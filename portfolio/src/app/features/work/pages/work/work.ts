import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { CaseStudyService, CaseStudy } from '../../../../core/services/case-study';
import { CaseCardComponent } from '../../../../shared/components/case-card/case-card';
import { FadeUpDirective } from '../../../../shared/directives/fade-up.directive';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [CommonModule, RouterModule, CaseCardComponent, FadeUpDirective],
  templateUrl: './work.html',
  styleUrls: ['./work.scss'],
})
export class WorkComponent implements OnInit {
  studies: CaseStudy[] = [];

  constructor(
    private caseStudyService: CaseStudyService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Work — Mike Crivellaro');
    this.meta.updateTag({
      name: 'description',
      content: 'Product design case studies across enterprise platforms, government systems, and design systems.',
    });
    this.caseStudyService.getAll().subscribe(s => (this.studies = s));
  }
}
