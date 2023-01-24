import { distinct, of, from, distinctUntilChanged } from 'rxjs';

const numbers$ = of(1, 1, '1', 1, 3, 2, 2, 4, 4, 5, 3, 1, '1');

numbers$.pipe(distinctUntilChanged()).subscribe(console.log);

interface Personaje {
  name: string;
}

const personajes: Personaje[] = [
  {
    name: 'Megaman',
  },
  {
    name: 'Megaman',
  },
  {
    name: 'Zero',
  },
  {
    name: 'Dr. Willy',
  },
  {
    name: 'X',
  },
  {
    name: 'X',
  },
  {
    name: 'Zero',
  },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.name === act.name))
  .subscribe(console.log);
