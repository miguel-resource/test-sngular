import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-label-result',
  templateUrl: './label-result.component.html',
  styleUrls: ['./label-result.component.scss']
})
export class LabelResultComponent implements OnInit {

  @Input() resultado!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
