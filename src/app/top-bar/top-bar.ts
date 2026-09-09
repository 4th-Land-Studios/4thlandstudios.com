import { Component } from "@angular/core";

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.html",
  styleUrl: "./top-bar.css"
})

export class TopBar {

  news() {window.location.hash = "news"; }
  about() { window.location.hash = "about"; }
  socials() {window.location.hash = "socials"; }
  projects() {window.location.hash = "projects"; }

}
