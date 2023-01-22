import { asapScheduler, of, range } from 'rxjs';

// const src$ = of(1, 2, 3, 4, 5, 6);
const src$ = range(1, 10, asapScheduler);

console.log('Inicio');

src$.subscribe(console.log);
console.log('Fin');
