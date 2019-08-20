import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Order} from './order'; 

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configUrl = 'https://5d5649add3db4b0014a03a27.mockapi.io/api/order';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getConfig (): Observable<Order[]> {
    return this.http.get<Order[]>(this.configUrl).pipe(
      tap(_ => console.log(`fetched hero`)),
      catchError(this.handleError<Order[]>('getConfig',[]))
    );
  };

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
