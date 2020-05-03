import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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
  constructor(private modalService: NgbModal) {}
  closeResult = '';
  open(content) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  ngOnInit(): void {}
}
