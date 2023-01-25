import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://httXXXpbin.org/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

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

obs$.pipe(catchError(manejaError)).subscribe({
  next: (val) => console.log('next:', val),
  error: (err) => console.log('Error en:', err),
  complete: () => console.log('Complete'),
});
// obs2$.subscribe((data) => console.log('dataAjax:', data));
