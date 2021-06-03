import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/core/service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder,
    private service: ServiceService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      usuario: [''],
      password: ['']
    })
  }

  login() {
    this.service.login(this.loginForm.value.usuario, this.loginForm.value.password).subscribe((datos:string) => {
      localStorage.setItem("token", datos);
    })
    if (localStorage.getItem("token") != null) {
      this.router.navigate(['/principal/nuevo']);
    }
  }

}
