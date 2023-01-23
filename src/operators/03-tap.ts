import { range, tap, map } from 'rxjs';

const numbers = range(1, 5);

numbers
  .pipe(
    tap((x) => {
      console.log('Antes', x);
      return 100;
    }),
    map((val) => (val * 10).toString()),
    tap({
      next: (value) => console.log('después', value),
      complete: () => console.log('Se terminó todo'),
    })
  )
  .subscribe((val) => console.log('Subs', val));
