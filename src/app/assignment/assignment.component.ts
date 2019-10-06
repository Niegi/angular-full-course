import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  userName: string = '';
  isDisabled = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.userName = '';
  }

  onInputChange() {
    console.log('onInputChange');
  }

}
