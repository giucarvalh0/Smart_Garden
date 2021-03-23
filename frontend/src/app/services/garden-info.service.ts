import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { GardenInfo } from '../models/garden-info';

@Injectable({
  providedIn: 'root'
})
export class gardenInfoService {

  url = 'http://localhost:3001/gardenInfo'; // api rest fake

  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }


  getGardenInfos(): Observable<GardenInfo[]> {
    return this.httpClient.get<GardenInfo[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }


  getGardenInfoById(id: number): Observable<GardenInfo> {
    return this.httpClient.get<GardenInfo>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  saveGardenInfo(gardenInfo: GardenInfo): Observable<GardenInfo> {
    return this.httpClient.post<GardenInfo>(this.url, JSON.stringify(gardenInfo), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  updateGardenInfo(gardenInfo: GardenInfo): Observable<GardenInfo> {
    return this.httpClient.put<GardenInfo>(this.url + '/' + gardenInfo.id, JSON.stringify(gardenInfo), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deleteGardenInfo(gardenInfo: GardenInfo) {
    return this.httpClient.delete<GardenInfo>(this.url + '/' + gardenInfo.id, this.httpOptions)
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