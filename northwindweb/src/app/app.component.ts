import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'northwindweb';
  private _displayLogin = false;

  constructor(private _authService: AuthService) { }
  public get displayLogin(): boolean {
    return this._displayLogin;
  }

  ngOnInit(): void {
    this._authService.authStatus.subscribe(authStatus => {
      const jwt = this._authService.getToken();
      setTimeout(() => (this._displayLogin = !(jwt == null || jwt === ''), 0));
    });
  }
}

