import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav.html',
  styleUrls: ['./nav.scss'],
})
export class NavComponent implements OnInit {
  scrolled = false;
  menuOpen = false;
  activeRoute = '';

  navLinks = [
    { label: 'Work', path: '/work' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => {
        this.activeRoute = e.urlAfterRedirects;
        this.menuOpen = false;
      });
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 40;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
}
