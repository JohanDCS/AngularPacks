import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup; 
  constructor(private formgroup: FormBuilder){
  }

  ngOnInit(): void {
    this.formLogin = this.formgroup.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["",[Validators.required, Validators.minLength(8)]]
    })
  }

  OnSubmit(): void{
    console.log(this.formLogin.get("email")?.value)
    console.log(this.formLogin.get("password")?.value)
  }
}
