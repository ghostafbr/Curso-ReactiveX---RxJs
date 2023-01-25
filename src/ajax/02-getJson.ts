import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON(url, {
  'Content-Type': 'application/json',
  'mi-token': 'ABC123',
});

obs$.subscribe((data) => console.log('data:', data));
