import { Injectable } from '@angular/core';
import { Racao } from '../modelo/racao.model';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable ({ providedIn : 'root' }) 
export class RacaoService {

    private url = 'http://localhost:62329/api/racao';

    readonly httpOptions = { 

        headers: new HttpHeaders ({ 'Content-Type ': 'application/x-www-form-urlencoded' })

    };

    constructor (private http: HttpClient ) { }

    getRacoes(): Observable<any> {

        return this.http.get<any>(this.url, this.httpOptions)

    }

    getRacao(id: number): Observable<any> {

        let url_ = this.url + '/' + id

        return this.http.get<any>(url_, this.httpOptions)

    }

    addRacao(racao: Racao): Observable<any> {

        let u = new URLSearchParams();
        u.set('Id', racao.Id.toString());
        u.set('Peso', racao.Peso.toString());
        u.set('Nome', racao.Nome.toString());

        return this.http.post<any>(this.url, u.toString(), this.httpOptions)

    }

    updateRacao(racao: Racao): Observable<any> {

        let u = new URLSearchParams();
        u.set('Id', racao.Id.toString());
        u.set('Peso', racao.Peso.toString());
        u.set('Nome', racao.Nome.toString());

        let url_ = this.url + '/' + racao.Id
        return this.http.put<any>(url_, u.toString(), this.httpOptions)

    }

    deleteRacao(id: Number): Observable<any> {

        let url_ = this.url + '/' + id
        return this.http.delete<any>(url_, this.httpOptions)
        
    }

}