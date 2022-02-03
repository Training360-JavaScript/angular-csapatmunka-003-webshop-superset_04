import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Admin } from 'src/app/model/admin';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  loginFailed: boolean = false;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  login(form: NgForm) {
    this.loginService
      .getAdminByCredentials(form.value)
      .subscribe((response) => {
        if (response.length > 0) {
          let admin: Admin = response[0];
          this.onSubmit.emit(admin);
        } else {
          this.loginFailed = true;
        }
      });
  }
}
