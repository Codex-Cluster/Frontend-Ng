import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User;
  agreementTerms: boolean = false;
  submitted: boolean = false;

  registrationForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9+() ]*'),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9/():,. ]+'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(24),
      Validators.minLength(6),
    ]),
  });

  constructor(private auth: AuthService, private router: Router) {
    this.user = new User();
  }

  serviceKeyControl = new FormControl('', [Validators.required]);
  setAdmin() {
    this.registerAsAdmin = !this.registerAsAdmin;
  }
  registerAsAdmin: boolean = false;
  serviceKey: string = '';
  serviceKeyValid: boolean = true;
  onSubmit(): void {
    this.user.Name = this.registrationForm.controls['name'].value;
    this.user.Mobile = this.registrationForm.controls['mobile'].value;
    this.user.Address = this.registrationForm.controls['address'].value;
    this.user.Email = this.registrationForm.controls['email'].value;
    this.user.Password = this.registrationForm.controls['password'].value;
    if (this.registerAsAdmin) {
      this.serviceKeyValid = true;
      this.serviceKey = this.serviceKeyControl.value;
      this.auth.validateServiceKey(this.serviceKey).subscribe((response) => {
        if (response) {
          this.user.Roles = ['Default', 'Admin'];
          this.auth.register(this.user).subscribe(
            (response) => {
              console.log('Attempting to register user...');
              this.auth.saveLoggedInData(response);
              this.router.navigate(['']);
            },
            (error) => {
              alert('Error registering user');
            },
            () => {
              alert('Successfully registered user!');
            }
          );
        } else {
          this.serviceKeyValid = false;
        }
      });
    } else {
      this.user.Roles = ['Default', 'Customer'];
      this.auth.register(this.user).subscribe(
        (response) => {
          console.log('Attempting to register user...');
          this.auth.saveLoggedInData(this.user);
          this.router.navigate(['']);
        },
        (error) => {
          alert('Error registering user');
        },
        () => {
          alert('Successfully registered user!');
        }
      );
    }
  }

  ngOnInit(): void {}
}
