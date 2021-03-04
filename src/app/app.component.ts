import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'entrevista-app';

  public isLoged:boolean = false;

  isLogin(event:any){
    this.isLoged = true;
    console.log(event)
  }
}
