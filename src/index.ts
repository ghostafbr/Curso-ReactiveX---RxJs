/*
 * of = toma argumentos y genera una secuencia
 * from = array, promise, iterable, observable
 */

import { from, of } from 'rxjs';

const observer = {
  next: (val) => console.log('next:', val),
  complete: () => console.log('Completed'),
};

const myGenerator = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
};

const myIterable = myGenerator();

/* for (let id of myIterable) {
  console.log(id);
} */

from(myIterable).subscribe(observer);

// const source$ = from([1, 2, 3, 4, 5]);
// const source$ = from([1, 2, 3, 4, 5]);
//const source$ = from('Andrés');
const source$ = from(fetch('https://api.github.com/users/ghostafbr'));

/* source$.subscribe(async (resp) => {
  const dataResp = await resp.json();
  console.log(dataResp);
}); */
