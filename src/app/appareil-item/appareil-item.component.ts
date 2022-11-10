import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil-item',
  templateUrl: './appareil-item.component.html',
  styleUrls: ['./appareil-item.component.css']
})
export class AppareilItemComponent implements OnInit {
  @Input()
  appareilName! : string;

  @Input()
  appareilStatus! : string;

  lastModified = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

}
