import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryDTO } from '../model/categoryDTO';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  AddCategory(token: any, category: CategoryDTO) {
    var header = {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
    };
    return this.http.post<CategoryDTO>(
      this.baseUrl + '/Category/Add/',
      category,
      header,
    );
  }

}
