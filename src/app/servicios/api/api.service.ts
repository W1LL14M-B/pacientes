import { Injectable } from '@angular/core';
import { ResponseL } from 'src/app/modelos/response.interface';
import { LoginI } from 'src/app/modelos/login.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = "http://solodata.es";

  constructor(private http: HttpClient) { }

/*   loginByEmail(form: LoginI):Observable<ResponseL>{

return
  } */

loginByEmail(form: LoginI): Observable<ResponseL> {

let direccion = this.url + "auth";

  return this.http.post<ResponseL>(direccion,form) 
}

}
