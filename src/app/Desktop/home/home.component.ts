import { Component, OnInit,HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public  height = '';

  ngOnInit(): void {  
    let h = document.getElementById('sec');
    let he = h?.style.height;
  }


  @HostListener("document:scroll")
  scrollfunction(){
    let value = document.documentElement.scrollTop;
    /*stars.style.left = value * 0.25 + 'px';*/
    document.documentElement.getElementsByTagName('stars');
    let stars = document.getElementById('stars') as HTMLElement;
    let moon = document.getElementById('moon') as HTMLElement;
    let mountains_behind = document.getElementById('mountains_behind') as HTMLElement;
    let text = document.getElementById('text') as HTMLElement;
    let btn = document.getElementById('btn') as HTMLElement;
    let mountains_front = document.getElementById('mountains_front') as HTMLElement;
    let header = document.querySelector('header') as HTMLElement;

    stars.style.top = value * 0.25 + 'px';
    moon.style.top = value * 0.9 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop= value * 1.5 + 'px';
    btn.style.marginTop= value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';  

    console.log(value);
  }


}
