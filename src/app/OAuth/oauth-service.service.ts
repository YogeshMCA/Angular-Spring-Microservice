import { Injectable } from '@angular/core';
import {UserManager,User, WebStorageStateStore} from 'oidc-client';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class OauthServiceService {

private userManager: UserManager;
private _user: User;
  constructor(private httpClient: HttpClient) {

    var config = {
      authority: 'https://dev-bedtkbb3.auth0.com',
      client_id: 'tqhIw7fr68SdztxJl3sKNGq145Ze7DMa',
      redirect_uri: `http://localhost:4200/searchFeedback`,
      scope: 'openid profile',
      response_type:'id_token token',
      userStore: new WebStorageStateStore({store:window.localStorage})
    };
    this.userManager = new UserManager(config);
    this.userManager.getUser().then(user =>{
      if(user && !user.expired){
        this._user = user;
      }
    });
   }

   login(): Promise<any>{
     return this.userManager.signinRedirect();
   }

}
