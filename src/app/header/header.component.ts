import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth = false;

  constructor(private appareilService : AppareilService, private route: Router) { }

  ngOnInit(): void {
    this.isAuth = this.appareilService.isAuth;
  }

  onLogin() {
    setTimeout(() => {
      this.appareilService.isAuth = !this.appareilService.isAuth;
      this.isAuth = !this.isAuth;

      if (this.isAuth) {
        this.route.navigateByUrl('appareils');
      }
    }, 3000);

  }

}
