import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../User';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  message: string;
  hidePassword = true;
  goodpw: boolean;
  regUser: User;

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    passwordAgain: ['', [Validators.required]],
  });

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get passwordAgain() { return this.form.get('passwordAgain'); }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,

  ) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.goodpw = (this.password.value == this.passwordAgain.value);

   if(this.goodpw){
     this.regUser=new User();
     this.regUser.userName = this.username.value;
     this.regUser.password = this.password.value;
     this.regUser.enabled = true;
     this.regUser= await this.authService.register(
      this.regUser
    )
   }else{
    this.message = 'Hibás jelszó megadás!';
   }
 
  if (this.regUser!=null) {
    const url = this.authService.redirectUrl
      ? this.authService.redirectUrl
      : '/login';
    this.router.navigate([url])
  } else{
    this.message='Hiba a regisztraciokor!';
  }
}

}
