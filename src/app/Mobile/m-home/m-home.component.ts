import { Component, OnInit, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-m-home',
  templateUrl: './m-home.component.html',
  styleUrls: ['./m-home.component.css']
})
export class MHomeComponent implements OnInit {

  constructor() { }

  public  height = '';

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

    cloud.style.top = value * 0.25 + 'px';
    moon.style.top = value * 0.9 + 'px';
    grass.style.top = value * 0.5 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop= value * 1.5 + 'px';
    btn.style.marginTop= value * 1.5 + 'px'; 

  }

}
