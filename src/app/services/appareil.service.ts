import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  // injecter le service HttpClient pour pouvoir se connecter au serveur node
  constructor(private http: HttpClient) {
    this.chargerListAppareil().subscribe((listApp) => {
      console.log(listApp);
    });
  }

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

  switchAppareil(i: number) {
    if (this.appareils[i].status === 'éteint') {
      this.appareils[i].status = 'allumé'
    } else {
      this.appareils[i].status = 'éteint';
    }
  }

  // exemple de méthode pour lancer une requete http get qui retourne un Observable (Callback)
  chargerListAppareil() : Observable<Appareil[]>{
    return this.http.get<Appareil[]>('http://localhost:3000/appareilsAPI');
  }

}
