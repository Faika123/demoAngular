import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil.model';

@Injectable({
  providedIn: 'root'
})
export class AppareilService {
  appareils = [
    new Appareil('Machine à laver', 'éteint'),
    new Appareil('TV', 'allumé'),
    new Appareil('Ordinateur', 'allumé'),
    new Appareil('Micro Onde', 'éteint'),
    new Appareil('Four', 'allumé'),
    new Appareil('XBOX', 'éteint'),
    new Appareil('Hot', 'allumé'),
  ];

  isAuth = false;

  constructor() { }

  allumerTout() {
    this.appareils.forEach(app => {
      app.status = 'allumé';
    });
  }

  eteindreTout() {
    this.appareils.forEach(app => {
      app.status = 'éteint';
    });
  }
}
