import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, shareReplay, catchError } from 'rxjs/operators';

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  client?: string;
  year?: string;
  category: string;
  role: string[];
  heroImage: string;
  thumbnail: string;
  accentColor: string;
  summary: string;
  problem: string;
  context: string;
  approach: string;
  keyDecisions: string[];
  outcome: string;
  metrics: CaseStudyMetric[];
  images: string[];
  tags: string[];
  featured: boolean;
  order: number;
}

@Injectable({ providedIn: 'root' })
export class CaseStudyService {
  private cache$?: Observable<CaseStudy[]>;

  constructor(private http: HttpClient) {}

  getAll(): Observable<CaseStudy[]> {
    if (!this.cache$) {
      this.cache$ = this.http
        .get<CaseStudy[]>('/assets/data/case-studies.json')
        .pipe(
          map(studies => [...studies].sort((a, b) => a.order - b.order)),
          shareReplay(1),
          catchError(() => of([]))
        );
    }
    return this.cache$;
  }

  getFeatured(): Observable<CaseStudy[]> {
    return this.getAll().pipe(map(studies => studies.filter(s => s.featured)));
  }

  getBySlug(slug: string): Observable<CaseStudy | undefined> {
    return this.getAll().pipe(map(studies => studies.find(s => s.slug === slug)));
  }
}
