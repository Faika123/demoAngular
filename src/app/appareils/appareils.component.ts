import { Component, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareils',
  templateUrl: 'appareils.component.html'
})

export class AppareilsComponent implements OnInit {
  isAuth = false;

  // appareils = [
  //   {'name': 'Machine à laver', 'status': 'éteint'},
  //   {'name': 'TV', 'status': 'allumé'},
  //   {'name': 'Ordinateur', 'status': 'allumé'},
  //   {'name': 'Micro Onde', 'status': 'éteint'},
  //   {'name': 'Four', 'status': 'éteint'},
  //   {'name': 'XBOX', 'status': 'éteint'},
  // ];

  // appareils = [
  //   new Appareil('Machine à laver', 'éteint'),
  //   new Appareil('TV', 'allumé'),
  //   new Appareil('Ordinateur', 'allumé'),
  //   new Appareil('Micro Onde', 'éteint'),
  //   new Appareil('Four', 'éteint'),
  //   new Appareil('XBOX', 'éteint'),
  // ];

  appareils : Appareil[];

  // injection de dependance - dependency injection
  constructor(private appareilService: AppareilService) {
    this.appareils = this.appareilService.appareils;
   }

  ngOnInit() { }
}