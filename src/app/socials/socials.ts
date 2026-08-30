import { Component } from "@angular/core";

@Component({
  selector: "socials",
  templateUrl: "./socials.html",
  styleUrl: "./socials.css"
})

export class Socials {

  facebook()  {window .open("https://www.facebook.com/4thlandstudios", "_blank");}
  github()    {window.open("https://github.com/4th-Land-Studios", "_blank");}
  instagram() {window.open("https://www.instagram.com/4thLandStudios", "_blank");}
  linkedin()  {window.open("https://www.linkedin.com/company/4thlandstudios", "_blank");}
  tiktok()    {window.open("https://www.tiktok.com/@4thlandstudios", "_blank");}
  x()         {window.open("https://x.com/4thLandStudios", "_blank");}
  youtube()   {window.open("https://www.youtube.com/@4thlandstudios", "_blank");}

}
