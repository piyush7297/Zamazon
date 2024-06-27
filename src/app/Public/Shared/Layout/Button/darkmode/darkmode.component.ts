import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-darkmode',
  templateUrl: './darkmode.component.html',
  styleUrls: ['./darkmode.component.css']
})
export class DarkmodeComponent implements OnInit {
  isDarkMode : boolean = false
  constructor() { }

  ngOnInit(): void {
  }
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.updateBodyClass();
  }

  updateBodyClass() {
    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}
