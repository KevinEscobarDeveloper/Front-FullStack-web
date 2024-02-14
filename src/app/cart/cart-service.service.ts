import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Character } from '../models/character';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  private apiUrl = environment.apiUrl+'/characters';
  
  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<{ characters: any[] }>(this.apiUrl).pipe(
      map((data) => {
        return data.characters.map((characterData) => new Character(characterData));
      })
    );
  }
}
