import { Routes } from '@angular/router';
import { TopBar } from './top-bar/top-bar';
import { About } from './about/about';
import { Socials } from './socials/socials';

export const routes: Routes = [
{
  path:"",
  component: TopBar
},
{
  path:"about",
  component: About
},
{
  path:"socials",
  component: Socials
}

];
