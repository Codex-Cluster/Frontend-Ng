import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
})
export class ControlsComponent implements OnInit {
  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}
  goTo(loc: string) {
    this.router.navigate(['admin', loc]).catch((error) => {
      console.log('Failed to navigate to ' + loc + error);
    });
  }
}
