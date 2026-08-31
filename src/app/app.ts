import { Component, signal } from '@angular/core';
import { TopBar } from './top-bar/top-bar';
import { Socials } from './socials/socials';
import { About } from './about/about';
import { News } from './news/news';
import { Projects } from './projects/projects';

@Component({
  selector: 'app-root',
  imports: [TopBar, Socials, About, News, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('4thlandstudios.com');
}
