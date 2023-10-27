import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

interface Registro{
  nombres: string;
  apellidos: string;
  edad: number;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registro!: FormGroup;
  ngOnInit(): void {
    this.registro = new FormGroup({
      nombres: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      apellidos: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      edad: new FormControl('', [Validators.required, Validators.max(20)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

  formRegister: FormGroup = this.formgroup.group({
    nombres: ["", [Validators.required, Validators.maxLength(50)]],
    apellidos: ["", [Validators.required, Validators.maxLength(50)]],
    edad: ["", [Validators.required, Validators.max(20)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.maxLength(8)]]
  })

  modalRef!: BsModalRef;
  constructor(private formgroup: FormBuilder, private modalService: BsModalService){
  }

  
  OnRegister(template: TemplateRef<any> ): void{
    this.modalRef = this.modalService.show(template)
  }
}
