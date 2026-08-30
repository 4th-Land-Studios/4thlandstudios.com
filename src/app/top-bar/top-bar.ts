import { Component } from "@angular/core";

@Component({
  selector: "top-bar",
  templateUrl: "./top-bar.html",
  styleUrl: "./top-bar.css"
})

export class TopBar {

  news() {}
  about() { window.location.href = "/about"; }
  socials() { window.location.href = "/socials"; }
  projects() {}

}
