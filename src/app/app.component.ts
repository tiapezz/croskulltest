import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NFT-Test';

  @HostListener("document:scroll")
  scrollfunction(){
    let value = document.documentElement.scrollTop;
    /*stars.style.left = value * 0.25 + 'px';*/
    document.documentElement.getElementsByTagName('stars');
    let stars = document.getElementById('stars') as HTMLElement;
    let moon = document.getElementById('moon') as HTMLElement;
    let mountains_behind = document.getElementById('mountains_behind') as HTMLElement;
    //let text = document.getElementById('text') as HTMLElement;
    let btn = document.getElementById('btn') as HTMLElement;
    let mountains_front = document.getElementById('mountains_front') as HTMLElement;
    let header = document.querySelector('header') as HTMLElement;

    stars.style.top = value * 0.25 + 'px';
    moon.style.top = value * 0.9 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    //text.style.marginRight = value * 4 + 'px';
    //text.style.marginTop= value * 1.5 + 'px';
    btn.style.marginTop= value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';  

  }
}
