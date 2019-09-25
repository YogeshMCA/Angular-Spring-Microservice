import { Injectable } from '@angular/core';
import {UserManager,User} from 'oidc-client';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OauthServiceService {

private userManager: UserManager;

  constructor(private httpClient: HttpClient) {

    var config = {
      authority: 'https://dev-bedtkbb3.auth0.com',
      client_id: 'tqhIw7fr68SdztxJl3sKNGq145Ze7DMa',
      redirect_uri: `${window.location.origin}/callback`,
      scope: 'openid profile',
      response_type:'id_token token'
    };
    this.userManager = new UserManager(config);
   }

   login(): Promise<any>{
     return this.userManager.signinRedirect();
   }

}
