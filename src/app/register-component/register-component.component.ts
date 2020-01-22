import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

  //TRADITIONAL - private logger: LoggerService;

  //Constructor requires service parameter to use it
  //private logger: LoggerService short-hand for private variable stored
  //in class

  constructor(private logger: LoggerService) {
    logger.log("Signup Component was created");
  //TRADITIONAL - this.logger = logger;
   }

  ngOnInit() {
  }

  //Function to call when button clicked
  signupButtonClicked(){
    this.logger.log("Sign-up button clicked");
  }

}
