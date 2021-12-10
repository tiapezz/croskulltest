import { Component, OnInit,HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {  

  }


  @HostListener("document:scroll")
  scrollfunction(){
    let value = document.documentElement.scrollTop;
    /*stars.style.left = value * 0.25 + 'px';*/
    document.documentElement.getElementsByTagName('cloud');
    let cloud = document.getElementById('cloud') as HTMLElement;
    let moon = document.getElementById('moon') as HTMLElement;
    let grass = document.getElementById('grass') as HTMLElement;
    let text = document.getElementById('text') as HTMLElement;
    let btn = document.getElementById('btn') as HTMLElement;
    let graves = document.getElementById('graves') as HTMLElement;
    let header = document.querySelector('header') as HTMLElement;

    moon.style.top = value * 0.9 + 'px';
    grass.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop= value * 1.5 + 'px';
    btn.style.marginTop= value * 1.5 + 'px';
    header.style.top = value * 0.000000000000000000001 + 'px';  

  }




}
