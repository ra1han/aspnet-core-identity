import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BaseRequestOptions } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthguardGuard } from './shared/authguard.guard';
import { UserService } from './shared/user.service';
import { AuthenticationService } from './shared/authentication.service';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    canActivate: [AuthguardGuard],
    component: HomeComponent
  },
  { path: '**', redirectTo: '' }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    AuthguardGuard,
    BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
