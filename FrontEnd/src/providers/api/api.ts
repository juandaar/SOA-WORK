import { Injectable } from '@angular/core';
import {HttpHeaders,HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class Api {
  url: string = 'http://localhost:10000';

  constructor(public http: HttpClient) { }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get(this.url + '/' + endpoint, reqOpts);
  }

  getExternal(url: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }
    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params.set(k, params[k]);
      }
    }
    return this.http.get(url, reqOpts);
  }


   post(endpoint: string, body: any, reqOpts?: any) {
    var headers = new HttpHeaders();
    //headers.append('Access-Control-Allow-Origin', '*');
    //headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers.append('Content-Type', 'application/json' );
    return this.http.post(this.url + '/' + endpoint, body,{headers});
  }

}