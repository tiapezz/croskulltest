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
    
    const text1 = document.querySelector('.text1 p') as HTMLElement;
    text1.innerHTML = text1.innerText.split("").map(
      (char,i) =>
      '<span style="transform:rotate('+(i * 16)+'deg); position: absolute; left: 50%; transform-origin: 0 100px;">'+char+'</span>'
    ).join("");
    
    const text2 = document.querySelector('.text2 p') as HTMLElement;
    text2.innerHTML = text2.innerText.split("").map(
      (char,i) =>
      '<span style="transform:rotate('+(i * 22)+'deg); position: absolute; left: 50%; transform-origin: 0 100px;">'+char+'</span>'
    ).join("");
    
    const text3 = document.querySelector('.text3 p') as HTMLElement;
    text3.innerHTML = text3.innerText.split("").map(
      (char,i) =>
      '<span style="transform:rotate('+(i * 22)+'deg); position: absolute; left: 50%; transform-origin: 0 100px;">'+char+'</span>'
    ).join("");


    const text4 = document.querySelector('.text4 p') as HTMLElement;
    text4.innerHTML = text4.innerText.split("").map(
      (char,i) =>
      '<span style="transform:rotate('+(i * 20)+'deg); position: absolute; left: 50%; transform-origin: 0 100px;">'+char+'</span>'
    ).join("");

  }


  @HostListener("document:scroll")
  scrollfunction(){
    let value = document.documentElement.scrollTop;
    /*stars.style.left = value * 0.25 + 'px';*/
    document.documentElement.getElementsByTagName('cloud');
    let cloud = document.getElementById('cloud') as HTMLElement;
    let moon = document.getElementById('moon') as HTMLElement;
    let grass = document.getElementById('grass') as HTMLElement;
    let text = document.getElementById('logo-section') as HTMLElement;
    let btn = document.getElementById('btn') as HTMLElement;
    let graves = document.getElementById('graves') as HTMLElement;
    let header = document.querySelector('header') as HTMLElement;

    moon.style.top = value * 0.9 + 'px';
    grass.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop= value  * 1.5 + 'px';
    btn.style.marginTop= value * 1.5 + 'px';
    header.style.top = value * 0.000000000000000000001 + 'px';  

  }




}
