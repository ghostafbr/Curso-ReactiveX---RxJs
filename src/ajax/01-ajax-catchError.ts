import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, of } from 'rxjs';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
};

const atrapaError = (err: AjaxError) => {
  console.error('Error en', err);
  return of([]);
};

const fetchPromesa = fetch(url);

/* fetchPromesa
  .then((resp) => resp.json().then(console.log))
  .catch((err) => console.error(err)); */

/* fetchPromesa
  .then(manejaErrores)
  .then((resp) => resp.json())
  .catch((err) => console.error(err)); */

ajax(url)
  .pipe(
    map((resp) => resp.response),
    catchError(atrapaError)
  )
  .subscribe(console.log);
