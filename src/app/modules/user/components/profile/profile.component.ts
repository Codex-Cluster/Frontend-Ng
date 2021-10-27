import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { User } from 'src/app/shared/models/user';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;
  userEditable: User;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  roleCtrl = new FormControl();
  filteredRoles: Observable<string[]>;
  allRoles: string[] = ['Default', 'Admin', 'Customer', 'Guest'];

  constructor(
    private userService: UserService,
    private admin: AdminService,
    private auth: AuthService
  ) {
    this.user = new User();
    this.userEditable = new User();
    this.filteredRoles = this.roleCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allRoles.slice()
      )
    );
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.userEditable.Roles!.push(event.option.viewValue);
    this.roleCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allRoles.filter((role) =>
      role.toLowerCase().includes(filterValue)
    );
  }

  isAdmin() {
    return this.admin.isAdmin();
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.userEditable.Roles!.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.roleCtrl.setValue(null);
  }

  remove(role: string): void {
    const index = this.userEditable.Roles!.indexOf(role);

    if (index >= 0) {
      this.userEditable.Roles!.splice(index, 1);
    }
  }

  EditMode() {
    this.userEditable = { ...this.user };
    this.EditFormGroup.controls['Name'].setValue(this.userEditable.Name);
    this.EditFormGroup.controls['Address'].setValue(this.userEditable.Address);
    this.EditFormGroup.controls['Mobile'].setValue(this.userEditable.Mobile);
    this.EditFormGroup.controls['Email'].setValue(this.userEditable.Email);
    this.EditFormGroup.controls['Active'].setValue(
      String(this.userEditable.Active)
    );
  }
  saveChanges() {
    this.user = { ...this.user, ...this.EditFormGroup.value };
    console.log(this.user);
    this.userService.modifyUserData(this.user).subscribe(
      (response) => {
        if (response) {
          console.log('Modifying data...');
          this.auth.saveLoggedInData(response);
        } else {
          console.log('error occured');
        }
      },
      (error) => {
        console.log(error);
        console.log('Failed to modify data');
      },
      () => {
        console.log('Successfully modified user data');
      }
    );
  }

  readonly EditFormGroup = new FormGroup({
    Name: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    Mobile: new FormControl('', [
      Validators.required,
      Validators.pattern('[0-9+() ]*'),
    ]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Address: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9/():,. ]+'),
    ]),
    Active: new FormControl(null),
  });
  ngOnInit(): void {
    this.user = this.userService.getUserData();
  }
}
