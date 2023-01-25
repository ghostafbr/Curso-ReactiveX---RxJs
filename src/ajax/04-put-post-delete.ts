import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://httpbin.org/delay/1';

/* ajax
  .post(
    url,
    {
      id: 1,
      name: 'Andrés',
    },
    {
      'mi-token': 'ABC123',
    }
  )
  .subscribe(console.log); */

ajax({
  url: url,
  method: 'PUT',
  headers: {
    'mi-token': 'ABC123',
  },
  body: {
    id: 1,
    name: 'Andrés',
  },
}).subscribe(console.log);

const manejaError = (err: AjaxError) => {
  console.error('Error en', err);
  return of({
    ok: false,
    users: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

/* obs$
  .pipe(catchError(manejaError))
  .subscribe((data) => console.log('data:', data));
obs2$
  .pipe(catchError(manejaError))
  .subscribe((data) => console.log('dataAjax:', data)); */
