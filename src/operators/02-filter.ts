import { filter, range, map, from, fromEvent } from 'rxjs';

/* range(1, 10)
  .pipe(filter((val) => val % 2 === 1))
  .subscribe(console.log); */

range(20, 30).pipe(
  filter((val, i) => {
    console.log('Index', i);

    return val % 2 === 1;
  })
);
//.subscribe(console.log);

interface Personaje {
  type: string;
  name: string;
}

const personajes: Personaje[] = [
  {
    type: 'Heroe',
    name: 'IronMan',
  },
  {
    type: 'Villano',
    name: 'Tanos',
  },
  {
    type: 'Heroe',
    name: 'Batman',
  },
];

from<Personaje[]>(personajes)
  .pipe(filter((p) => p.type === 'Heroe'))
  .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map((event) => event.code), // keyboardEvent, string
  filter((key) => key === 'Enter')
);

keyUp$.subscribe(console.log);
