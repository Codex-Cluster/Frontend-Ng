import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User
  agreementTerms: boolean = false;

  constructor(private auth: AuthService) {
    this.user = new User()
  }
  registerAsAdmin: boolean = false
  serviceKey: string = '';
  serviceKeyValid: boolean = true
  onSubmit(): void {
    this.serviceKeyValid = true
    if (this.registerAsAdmin) {
      this.auth.validateServiceKey(this.serviceKey).subscribe(
        (response) => {
          if (response) {
            this.user.Roles = ['Default', 'Admin']
            this.auth.register(this.user).subscribe(
              (response) => {
                console.log("Attempting to register user...")
                this.auth.saveLoggedInData(this.user)
              },
              (error) => {
                alert("Error registering user")
              },
              () => {
                alert("Successfully registered user!")
              }
            )
          } else {
            this.serviceKeyValid = false
          }
        }
      )
    } else {
      this.user.Roles = ['Default', 'Customer']
      this.auth.register(this.user).subscribe(
        (response) => {
          console.log("Attempting to register user...")
          this.auth.saveLoggedInData(this.user)
        },
        (error) => {
          alert("Error registering user")
        },
        () => {
          alert("Successfully registered user!")
        }
      )
    }

  }


  ngOnInit(): void {
  }

}
