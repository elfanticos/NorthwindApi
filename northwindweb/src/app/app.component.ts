import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'northwindweb';
  private _displayLogin = false;

  public get displayLogin(): boolean {
    return this._displayLogin;
  }
}

