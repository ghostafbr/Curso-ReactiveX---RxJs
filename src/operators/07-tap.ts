import { of, take, tap } from 'rxjs';

const numbers$ = of(1, 2, 3, 4, 5);

numbers$
  .pipe(
    tap((t) => console.log('tap', t)),
    take(2)
  )
  .subscribe({
    next: (val) => console.log('Next', val),
    complete: () => console.log('Completed'),
  });
