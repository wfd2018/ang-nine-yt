import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// i used ng g c users/login

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule],

  exports: [LoginComponent]
})
export class UsersModule {}
