import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { FadeUpDirective } from '../../../../shared/directives/fade-up.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FadeUpDirective],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
})
export class ContactComponent implements OnInit {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle('Contact — Mike Crivellaro');
    this.meta.updateTag({ name: 'description', content: 'Get in touch with Mike Crivellaro — Lead Product Designer and Head of Design.' });
  }
}
