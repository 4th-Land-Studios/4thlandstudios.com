import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.html",
  styleUrl: "./top-bar.css"
})

export class TopBar implements AfterViewInit {

  newsElement!:HTMLElement;
  aboutElement!:HTMLElement;
  socialsElement!:HTMLElement;
  projectsElement!:HTMLElement;

  ngAfterViewInit() {
    this.newsElement = document.getElementById("news")!;
    this.aboutElement = document.getElementById("about")!;
    this.socialsElement = document.getElementById("socials")!;
    this.projectsElement = document.getElementById("projects")!;
  }

  sitelink() {
    window.location.href = "https://4thlandstudios.com";
  }

  news() {
    this.newsElement.scrollIntoView({ behavior: "smooth" });
  }

  about() {
    this.aboutElement.scrollIntoView({ behavior: "smooth" });
  }

  socials() {
    this.socialsElement.scrollIntoView({ behavior: "smooth" });
  }

  projects() {
    this.projectsElement.scrollIntoView({ behavior: "smooth" });
  }

}
