import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private logger:LoggerService) { }

  ngOnInit() {
  }

  loginButtonClicked(){
    this.logger.log("Login button clicked");
  }

}
