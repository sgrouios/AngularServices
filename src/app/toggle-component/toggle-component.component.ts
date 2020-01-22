import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-toggle-component',
  templateUrl: './toggle-component.component.html',
  styleUrls: ['./toggle-component.component.css']
})
export class ToggleComponentComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
  }

  toggleOption(){
    this.logger.toggle();
    }
  
}
