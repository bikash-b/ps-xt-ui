import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Program } from '../models/program.model';

import { environment } from '../../environments/environment';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpCliet: HttpClient
  ) { }

  /**
   * This method fetches the static filter options and returns as observable
   */
  public getFilterOptions(): Observable<any>{
    return this.httpCliet
      .get(
        'assets/json/filter/filter-options.json'
      );
  }

  /**
   * This method fetches the programs from the API
   * @param filter options
   */
  public getPrograms(filter?: Filter): Observable<Program[]>{
    const queryStrings = this.queryStrings(filter);
    return this.httpCliet
      .get<Program[]>(
        `${environment.apiHost}/v3/launches?${queryStrings}`
      );
  }

  /**
   * This method forms and return the query string
   * @param filter options
   */
  public queryStrings(filter?: Filter): string{
    const str = [];
    if (!filter){
      filter = { limit: environment.dataLimit };
    }else{
      filter.limit = environment.dataLimit;
    }
    for (const key in filter) {
      if (filter.hasOwnProperty(key)) {
        str.push(
          encodeURIComponent(key)
          + '='
          + encodeURIComponent(filter[key]));
      }
    }
    return str.join('&');
  }
}

