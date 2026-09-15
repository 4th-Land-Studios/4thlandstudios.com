import { Component } from '@angular/core';
import { Post } from '../post/post';

@Component({
  selector: 'projects',
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})

export class Projects {

  post!: Array<Post>;

}
