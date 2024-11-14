import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  fetchData() {
    return [{ name: 'User1' }, { name: 'User2' }];
  }
}
