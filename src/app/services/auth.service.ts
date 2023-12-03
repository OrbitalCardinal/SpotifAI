import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from "@environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  getCredentials() {
    let redirect_uri = environment.redirect_uri;
    let client_id = 'd15d203c65804daa8ba59b87b34479b3';
    let client_secret ='54298d5da3384099ad1625e111b49c81';

    const data = new URLSearchParams();
    data.append('response_type', 'code');
    data.append('client_id', client_id);
    data.append(
      'scope',
      `playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public user-read-playback-state user-modify-playback-state user-read-currently-playing`
      );
      data.append('redirect_uri', redirect_uri);
      window.location.href = 'https://accounts.spotify.com/authorize?' + data.toString();
  }
}
