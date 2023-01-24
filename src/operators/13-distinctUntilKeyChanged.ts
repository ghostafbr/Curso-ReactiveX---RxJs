import {
  distinct,
  of,
  from,
  distinctUntilChanged,
  distinctUntilKeyChanged,
} from 'rxjs';

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

from(personajes).pipe(distinctUntilKeyChanged('name')).subscribe(console.log);
