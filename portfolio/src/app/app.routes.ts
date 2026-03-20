import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/pages/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'work',
    loadComponent: () =>
      import('./features/work/pages/work/work').then(m => m.WorkComponent),
  },
  {
    path: 'work/:slug',
    loadComponent: () =>
      import('./features/case-study/pages/case-study/case-study').then(m => m.CaseStudyComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./features/about/pages/about/about').then(m => m.AboutComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/pages/contact/contact').then(m => m.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
