import {APIRequestContext} from '@playwright/test';

export type AuthResponse = {

    token: string;
    status: number;
}

export default class AuthService {
    
   constructor(private request: APIRequestContext) {}
   async getToken(): Promise<AuthResponse>{
       const response = await this.request.post('/auth',{
           data: {
               username: process.env.USER_NAME,
               password: process.env.PASSWORD
           }
       })
       const body = await response.json();
       return{
              token: body.token,
              status: response.status()
       }
   }
}