import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topHead = 'Over 10,000 flights are here for you';
  bottomHead = 'Choose flight';
  myControl = new FormControl();
  locations: string[] = [
    'Beijing',
    'Hongkong',
    'United States',
    'United Kingdom',
    'Bangladesh',
    'India',
    'pakistan',
    'Japan',
  ];
  constructor() {}

  ngOnInit(): void {}
}
