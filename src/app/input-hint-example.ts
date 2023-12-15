import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'input-hint-example',
  templateUrl: 'input-hint-example.html',
  styleUrls: ['input-hint-example.css'],
})
export class InputHintExample implements OnInit {
  inputValue = new FormControl('Value');

  ngOnInit() {
    this.inputValue.disable();
  }
}
