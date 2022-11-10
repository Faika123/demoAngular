import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

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

  @Input()
  appareilIndex! : number;

  lastModified = new Date();

  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus() {
    return this.appareilStatus;
  }

  onSwitch() {
    console.log(this.appareilName);
    this.appareilService.switchAppareil(this.appareilIndex);
  }

}
