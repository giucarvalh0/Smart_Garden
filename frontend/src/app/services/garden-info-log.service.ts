import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GardenInfoLog } from '../models/garden-info-log';

@Injectable({
  providedIn: 'root'
})
export class gardenInfoServiceLog {

  url = 'http://localhost:3001/gardenInfo_LOG'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getGardenInfos_LOG(): Observable<GardenInfoLog[]> {
    return this.httpClient.get<GardenInfoLog[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  getGardenInfo_LOGById(id: number): Observable<GardenInfoLog> {
    return this.httpClient.get<GardenInfoLog>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveGardenInfo_LOG(gardenInfo_LOG: GardenInfoLog): Observable<GardenInfoLog> {
    return this.httpClient.post<GardenInfoLog>(this.url, JSON.stringify(gardenInfo_LOG), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  updateGardenInfo_LOG(gardenInfo_LOG: GardenInfoLog): Observable<GardenInfoLog> {
    return this.httpClient.put<GardenInfoLog>(this.url + '/' + gardenInfo_LOG.id, JSON.stringify(gardenInfo_LOG), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteGardenInfo_LOG(gardenInfo_LOG: GardenInfoLog) {
    return this.httpClient.delete<GardenInfoLog>(this.url + '/' + gardenInfo_LOG.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}