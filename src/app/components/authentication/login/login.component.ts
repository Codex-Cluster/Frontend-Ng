import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User;

  status: string = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(24),
    ]),
  });

  constructor(private auth: AuthService, private router: Router) {
    this.user = new User();
  }

  onSubmit(): void {
    this.status = '';
    this.user.Email = this.loginForm.controls['email'].value;
    this.user.Password = this.loginForm.controls['password'].value;
    this.auth.login(this.user).subscribe(
      (response) => {
        this.status = 'success';
        this.auth.saveLoggedInData(response);
      },
      (error) => {
        this.status = 'failure';
      },
      () => {
        this.router.navigate(['']).catch((error) => {
          console.log('Failed to navigate to home');
        });
      }
    );
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  ngOnInit(): void {}
}
