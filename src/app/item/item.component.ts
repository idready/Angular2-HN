import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  // inputs: ['item:itemData'] //Internal / External property name, alternative to @Input decorator
})
export class ItemComponent implements OnInit {
  // Thanks to @Input decorator we can specify different external property name.
  // @Input are used to bind data to parent component instead of using a property attached to the component itself.
  @Input('itemData') item = {};
  // public item = 0; // To use with alternative to @Input decorator
  constructor() {}

  ngOnInit() {
  }

}
