import { Injectable } from '@angular/core';
//'Injectable' to all components in application
//ng generate service Logger

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  private enable: boolean = false;

  constructor() { }

  log(msg: string){
    if(this.enable){
      console.log(msg);
    } 
  }

  toggle(){
    if(this.enable){
      this.enable = false;
      console.log("Off");
    }
    else{
      this.enable = true;
      console.log("On");
    }
  }
  
}
