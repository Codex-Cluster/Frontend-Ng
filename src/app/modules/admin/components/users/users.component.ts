import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userList: User[] = [];
  userEditable: User;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  roleCtrl = new FormControl();
  filteredRoles: Observable<string[]>;
  allRoles: string[] = ['Default', 'Admin', 'Customer', 'Guest'];

  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private location: Location
  ) {
    this.userEditable = new User();
    this.filteredRoles = this.roleCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) =>
        fruit ? this._filter(fruit) : this.allRoles.slice()
      )
    );
  }

  goBack() {
    this.location.back();
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
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add new role
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

  setSelectedUser(user: User) {
    this.userEditable = { ...user };
    this.userEditFormGroup.controls['UserID'].setValue(
      this.userEditable.UserID
    );
    this.userEditFormGroup.controls['Name'].setValue(this.userEditable.Name);
    this.userEditFormGroup.controls['Address'].setValue(
      this.userEditable.Address
    );
    this.userEditFormGroup.controls['Mobile'].setValue(
      this.userEditable.Mobile
    );
    this.userEditFormGroup.controls['Email'].setValue(this.userEditable.Email);
    this.userEditFormGroup.controls['Active'].setValue(
      String(this.userEditable.Active)
    );
  }

  readonly userEditFormGroup: FormGroup = new FormGroup({
    UserID: new FormControl(''),
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

  saveChanges() {
    let id = this.userEditFormGroup.get('UserID')!.value!;
    let idx = this.userList.findIndex((c) => c.UserID == id);
    this.userList[idx] = {
      ...this.userEditable,
      ...this.userEditFormGroup.value,
    };
    console.log(this.userList[idx]);
    this.admin.modifyUser(this.userList[idx]).subscribe(
      (response) => {
        console.log('Modifying user info');
      },
      (error) => {
        console.log('Failed to modify user info');
      },
      () => {
        console.log('Successfully modified user info');
      }
    );
  }
  ngOnInit(): void {
    this.admin.getUsers(this.auth.getUserID()).subscribe(
      (response) => {
        this.userList = response;
        console.log('Fetching users');
      },
      (error) => {
        console.log('Error occured');
      },
      () => {
        console.log('Completed');
      }
    );
  }
}
