import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, SharedModule],
  declarations: [LoginFormComponent],
})
export class AuthModule {}
