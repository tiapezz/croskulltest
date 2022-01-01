import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rights',
  templateUrl: './rights.component.html',
  styleUrls: ['./rights.component.css']
})
export class RightsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const text = document.querySelector('.text p') as HTMLElement;
    text.innerHTML = text.innerText.split("").map(
      (char,i) =>
      '<span style="transform:rotate('+(i * 17)+'deg); position: absolute; left: 50%; transform-origin: 0 100px;">'+char+'</span>'
    ).join("");
  }

}
