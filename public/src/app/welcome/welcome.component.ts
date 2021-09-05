import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  userData: any = {};

  constructor(public router: Router) { }

  ngOnInit(): void {
    const userData: any = localStorage.getItem('userData');
    if (userData) {
      this.userData = JSON.parse(userData);
    }
    console.log(this.userData);
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}
