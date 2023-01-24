import { first, fromEvent, take, tap, map } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    tap(console.log),

    map(({ clientY, clientX }) => ({
      clientY,
      clientX,
    })),

    /* map((evt) => ({
      clientY: evt.clientY,
      clientX: evt.clientX,
    })) */

    /* first<PointerEvent>((evt) => evt.clientY >= 150) */
    first((evt) => evt.clientY >= 150)
  )
  .subscribe({
    next: (val) => console.log('Next', val),
    complete: () => console.log('Complete'),
  });
