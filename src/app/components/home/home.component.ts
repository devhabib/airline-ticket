import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  model: NgbDateStruct;
  topHead = 'Where to next?';
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
