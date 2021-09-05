import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData = {
    email: 'amitdubey8888@gmail.com',
    password: 'amit'
  };
  errors: any = [];

  constructor(public router: Router, public apiService: ApiService) { }

  ngOnInit(): void {
  }

  login() {

    console.log(this.userData);
    this.errors = [];
    if (!this.userData.email) {
      this.errors.push('Please enter email address.');
    }
    if (!this.apiService.isEmail(this.userData.email)) {
      this.errors.push('Please enter valid email address.');
    }
    if (!this.userData.password) {
      this.errors.push('Please enter your password.');
    }
    else {
      this.errors = [];
      console.log(this.userData);
      this.apiService.post('user/login', this.userData).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          Swal.fire({
            title: 'Success',
            text: 'Logged in successfully!',
            icon: 'success',
            confirmButtonText: 'Okay'
          }).then(() => {
            localStorage.setItem('userData', JSON.stringify(res.data));
            this.router.navigateByUrl('welcome');
          });
        } else {
          Swal.fire({
            title: 'Error',
            text: res.message,
            icon: 'error',
            confirmButtonText: 'Okay'
          });
        }
      }, (err) => {
        console.log(err);
        Swal.fire({
          title: 'Error',
          text: 'Oops, something went wrong!',
          icon: 'error',
          confirmButtonText: 'Okay'
        });
      });
    }
  }

  register() {
    this.router.navigateByUrl('register');
  }
}
