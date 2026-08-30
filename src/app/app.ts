import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopBar } from './top-bar/top-bar';
import { Socials } from './socials/socials';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TopBar, Socials],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('4thlandstudios.com');
}
