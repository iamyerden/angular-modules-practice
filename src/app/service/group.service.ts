import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

  getAllGroups(): Observable<any> {
    return this.http.get('/api/groups');
  }

  getGroupById(groupId: number): Observable<any> {
    return this.http.get('/api/groups/' + groupId);
  }
}
