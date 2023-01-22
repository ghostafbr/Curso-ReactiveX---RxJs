import { interval, timer } from 'rxjs';

const observer = {
  next: (val) => console.log('next:', val),
  complete: () => console.log('complete'),
};

const toDayPass5 = new Date(); // now
toDayPass5.setSeconds(toDayPass5.getSeconds() + 5);

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(2000, 1000);
const timer$ = timer(toDayPass5);

console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
