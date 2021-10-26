import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(private userService: UserService, private admin: AdminService) {
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
    this.user.Roles!.push(event.option.viewValue);
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
      this.user.Roles!.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.roleCtrl.setValue(null);
  }

  remove(role: string): void {
    const index = this.user.Roles!.indexOf(role);

    if (index >= 0) {
      this.user.Roles!.splice(index, 1);
    }
  }

  EditMode() {
    this.userEditable = { ...this.user };
  }
  saveChanges() {
    console.log(this.userEditable);
  }

  ngOnInit(): void {
    this.user = this.userService.getUserData();
  }
}
