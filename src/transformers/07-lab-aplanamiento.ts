import { fromEvent, tap, map, mergeMap, catchError, of, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
// Creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Helper

const httpQuery = (userPass) => {
  return ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map((resp: any) => resp.response.token),
    catchError((err) => of('xxx'))
  );
};

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingersar';

form.append(inputEmail, inputPass, submitBtn);

document.querySelector('body').append(form);

// Sstreams
const submitForm$ = fromEvent<Event>(form, 'submit').pipe(
  tap((evt) => evt.preventDefault()),
  map((evt) => ({
    email: evt.target[0].value,
    password: evt.target[1].value,
  })),
  switchMap(httpQuery)
);

submitForm$.subscribe((token) => console.log(token));
