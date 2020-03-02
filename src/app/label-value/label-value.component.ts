import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-value',
  templateUrl: './label-value.component.html',
  styleUrls: ['./label-value.component.scss']
})
export class LabelValueComponent implements OnInit {
  @Input() label: string;
  @Input() set value(value: string | number | boolean) {
    if (typeof value === 'boolean') {
      this._value = value ? 'Yes' : 'No';

      return;
    }

    this._value = value as string;
  }

  get value() {
    return this._value;
  }

  private _value: string;

  constructor() { }

  ngOnInit(): void {
  }
}
