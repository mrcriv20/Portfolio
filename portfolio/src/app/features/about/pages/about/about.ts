import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { SectionHeaderComponent } from '../../../../shared/components/section-header/section-header';
import { FadeUpDirective } from '../../../../shared/directives/fade-up.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, SectionHeaderComponent, FadeUpDirective],
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
})
export class AboutComponent implements OnInit {
  experience = [
    { role: 'Head of Product Design', company: 'Independent / Consulting', years: '2020 – Present', desc: 'Design leadership for enterprise and government clients. Scope: product strategy, design systems, team structure, and 0→1 product work.' },
    { role: 'Lead Product Designer', company: 'Multiple Engagements', years: '2016 – 2020', desc: 'End-to-end product design across B2B SaaS, HR tech, and federal government projects. Full design-to-development ownership.' },
    { role: 'UX/UI Designer', company: 'Agency & In-house', years: '2014 – 2016', desc: 'Built design practice from the ground up across digital, print, and brand identity. First design hire in multiple organizations.' },
  ];

  principles = [
    { number: '01', title: 'Clarity is a design decision', body: 'Every ambiguous interface is a failure of thinking, not a failure of style. Clarity is not a constraint — it is the work.' },
    { number: '02', title: 'Design without context is decoration', body: 'Good design starts with understanding why something needs to exist, not what it should look like. Strategy precedes system.' },
    { number: '03', title: 'Ship to learn, not to launch', body: 'The goal is not a perfect product — it is a product that earns trust and creates feedback. Iteration is the method.' },
    { number: '04', title: 'Systems multiply impact', body: 'A well-built design system is worth ten features. Consistency at scale is an organizational capability, not a visual nicety.' },
  ];

  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('About — Mike Crivellaro');
    this.meta.updateTag({ name: 'description', content: 'Mike Crivellaro is a Lead Product Designer and Head of Design with 10+ years building enterprise products and leading design teams.' });
  }
}
