import { from, reduce, scan, map } from 'rxjs';

const numbers = [1, 2, 3, 4, 5];

/* const totalAcumulador = (acc, cur) => {
  return acc + cur;
} */

const totalAcumulador = (acc, cur) => acc + cur;

// Reduce

from(numbers).pipe(reduce(totalAcumulador, 0)).subscribe(console.log);

// scan
from(numbers).pipe(scan(totalAcumulador, 0)).subscribe(console.log);

// Redux

interface User {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: User[] = [
  {
    id: 'afbr',
    autenticado: false,
    token: null,
  },
  {
    id: 'afbr',
    autenticado: true,
    token: 'werweradfs',
  },
  {
    id: 'afbr',
    autenticado: true,
    token: 'asdasdasd',
  },
];

const state$ = from(user).pipe(
  scan<User, User>(
    (acc: any, cur: any) => {
      return { ...acc, ...cur };
    },
    { edad: 33 }
  )
);

const id$ = state$.pipe(map((state: User) => state.id));

id$.subscribe(console.log);
