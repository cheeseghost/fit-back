import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators}from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  signupform: FormGroup;
 
  constructor(private _builder: FormBuilder) {
    this.signupform=this._builder.group({
      nombre:['',Validators.required],
      usuario:['',Validators.required],
      email:['', Validators.compose([Validators.email,Validators.required])],
      pass:['',Validators.required],
    })
  }
    enviar(values){
      console.log(values)
    }
  ngOnInit(): void {
  }

}
