import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService } from './shared/services/auth.service';
import { MakeDatePipe } from './shared/pipes/make-date.pipe';
import { SharedModule } from './shared/shared.module';
import { PromotedComponent } from './components/promoted/promoted.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    MakeDatePipe,
    PromotedComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
