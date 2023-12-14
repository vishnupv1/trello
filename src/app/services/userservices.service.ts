import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { addBoard, addList, getBoards } from '../endpoint';
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
  addList(listData: any): Observable<any> {
    console.log(listData);

    return this.http.post<any>(addList, listData);
  }
  getList(boardname: any): Observable<any> {
    return this.http.get<any>(`${getBoards}?boardname=${boardname}`)
  }


}
