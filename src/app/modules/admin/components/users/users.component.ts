import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private admin: AdminService,
    private auth: AuthService,
    private location: Location
  ) {}

  goBack() {
    this.location.back();
  }
  ngOnInit(): void {}
}
