import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addBoard, addCard, addList, getBoard, getBoards, getList, getLists } from '../endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserservicesService {

  constructor(private http: HttpClient) { }

  addBoard(boardData: any): Observable<any> {
    return this.http.post<any>(addBoard, boardData);
  }
  getBoards(boardname: any): Observable<any> {
    return this.http.get<any>(`${getBoards}?boardname=${boardname}`)
  }
  getBoard(): Observable<any> {
    return this.http.get<any>(`${getBoard}`)
  }
  addList(listData: any): Observable<any> {
    return this.http.post<any>(addList, listData);
  }
  addCard(cardData: any, listname: string): Observable<any> {
    return this.http.post<any>(`${addCard}?listname=${listname}`, cardData);
  }
  getList(): Observable<any> {
    return this.http.get<any>(`${getList}`)
  }
  getLists(boardname: any): Observable<any> {
    return this.http.get<any>(`${getLists}?boardname=${boardname}`)
  }

}
