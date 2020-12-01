import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Loja } from './models/loja.model';

@Injectable({
    providedIn:'root'

})
export class JsonService{
    apiUrl = 'https://fortnite-api.com/v2/shop/br/?language=pt-BR';

    constructor(private http:HttpClient){}
    getJson():Observable<Loja>{
        return this.http.get<Loja>(this.apiUrl);
    }
}