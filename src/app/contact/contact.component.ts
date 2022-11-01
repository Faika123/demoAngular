import { Component, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  list_apps : Appareil[];

  constructor(private appareilService: AppareilService) { 
    this.list_apps = this.appareilService.appareils;
  }

  ngOnInit(): void {
  }

}
