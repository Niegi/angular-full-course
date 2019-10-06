import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  userName: string = '';
  isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.userName = '';
    this.isDisabled = true;
  }

  onInputChange() {
    if (!this.userName || this.userName.length === 0) {
      this.isDisabled = true;
    } else {
      this.isDisabled = false;
    }
  }

}
