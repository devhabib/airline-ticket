import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  countries: string[] = [
    'Bangladesh',
    'India',
    'Pakistan',
    'United States',
    'United Kingdom',
    'Saudi Arabia',
    'Canada',
    'Scotland',
    'Ireland',
  ];
  constructor() {}

  ngOnInit(): void {}
}
