import { Component, input, OnInit } from "@angular/core";

@Component({
    selector: "post",
    templateUrl: "post.html",
    styleUrl: "post.css"
})

export class Post implements OnInit {

  title = input.required<string>();
  description = input.required<string>();
  imgPath = input.required<string>();

  async ngOnInit() {


    var tmpstr : string = this.imgPath()
    await fetch("images/${tmpstr}")
    console.log(tmpstr);

    var titleElement = document.querySelector<HTMLHeadingElement>('#post-title');
    if(titleElement != null){
      titleElement.textContent = this.title();
    }

    var descriptionElement = document.getElementById('post-description') as HTMLParagraphElement;
    if(descriptionElement != null){
      descriptionElement.textContent = this.description();
    }

    var imageElement = document.getElementById('post-image') as HTMLImageElement;
    if(imageElement != null){
      imageElement.style.imageRendering = "crisp-edges";
      imageElement.src = 'images/' + tmpstr;
    }

  }
}
