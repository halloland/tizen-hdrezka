import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, throwError } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class ParserService {
  constructor(private http: HttpClient) {
  }

  public parse(url: string) {
    return this.http.get(url,{
      responseType: 'text'
    }).pipe(
      map((text) => {
        const body = text.match(/<body[^>]*>((.|[\n\r])*)<\/body>/im);

        if (body) {
          const html = document.createElement('html');
          html.innerHTML = body[0];
          return html;
        }

        return throwError(() =>'no body found')
      })
    );
  }
}
