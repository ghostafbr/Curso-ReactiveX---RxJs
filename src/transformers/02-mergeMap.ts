import {
  mergeMap,
  of,
  interval,
  take,
  map,
  fromEvent,
  merge,
  takeUntil,
} from 'rxjs';

const letters$ = of('a', 'b', 'c');

letters$.pipe(
  mergeMap((letter) =>
    interval(1000).pipe(
      map((i) => letter + i),
      take(3)
    )
  )
);

/*   .subscribe({
    next: (val) => console.log('next: ', val),
    complete: () => console.log('Complete'),
  }); */

const mousedown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();

mousedown$
  .pipe(mergeMap(() => interval$.pipe(takeUntil(mouseup$))))
  .subscribe(console.log);
