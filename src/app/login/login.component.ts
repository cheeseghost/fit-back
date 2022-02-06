import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup, Validators}from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
 signupform: FormGroup;
 
  constructor(private _builder: FormBuilder) {
    this.signupform=this._builder.group({
      usuario:['  ',Validators.required],
      pass:['',Validators.required],
    })
  
  }
enviar(values){
  console.log(values)
}

  ngOnInit(): void {
  
  }
  
}
