import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  userData = {
    name: null,
    email: null,
    mobile: null,
    password: null,
    confirmPassword: null,
    gender: null,
    dob: null,
  };
  errors: any = [];

  constructor(public router: Router, public apiService: ApiService) { }

  ngOnInit(): void {
  }

  register() {
    console.log(this.userData);
    this.errors = [];
    if (!this.userData.name) {
      this.errors.push('Please enter your name.');
    }
    if (!this.userData.email) {
      this.errors.push('Please enter email address.');
    }
    if (!this.apiService.isEmail(this.userData.email)) {
      this.errors.push('Please enter valid email address.');
    }
    if (!this.userData.mobile) {
      this.errors.push('Please enter your mobile.');
    }
    if (!this.apiService.isMobile(this.userData.mobile)) {
      this.errors.push('Please enter valid mobile number.');
    }
    if (!this.userData.password) {
      this.errors.push('Please enter your password.');
    }
    if (!this.userData.confirmPassword) {
      this.errors.push('Please enter your confirm password.');
    }
    if (this.userData.password !== this.userData.confirmPassword) {
      this.errors.push('Password does not match.');
    }
    if (!this.userData.gender) {
      this.errors.push('Please select your gender.');
    }
    if (!this.userData.dob) {
      this.errors.push('Please select your dob.');
    }
    else {
      this.errors = [];
      console.log(this.userData);
      this.apiService.post('user/register', this.userData).subscribe((res: any) => {
        console.log(res);
        if (res.status) {
          Swal.fire({
            title: 'Success',
            text: 'User registered successfully!',
            icon: 'success',
            confirmButtonText: 'Okay'
          }).then((res) => {
            this.router.navigateByUrl('login');
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

  login() {
    this.router.navigateByUrl('login');
  }
}
