import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  queryUpdated = new EventEmitter<any>();

  public query: any;

  getQuery() {
    return this.query;
  }
  setQuery(value: any) {
    this.query = value;
    this.queryUpdated.emit(this.query);
  }
}
