import { interval, fromEvent, takeUntil, skip, tap } from 'rxjs';

const btn = document.createElement('button');
btn.innerHTML = 'Detener Timer';

document.querySelector('body').append(btn);

const counter$ = interval(1000);
// const clickBtn$ = fromEvent(btn, 'click');
const clickBtn$ = fromEvent(btn, 'click').pipe(
  tap(() => console.log('Tap Antes de skip')),
  skip(1),
  tap(() => console.log('Tap después de skip'))
);

counter$.pipe(takeUntil(clickBtn$)).subscribe({
  next: (val) => console.log('Next', val),
  complete: () => console.log('Complete'),
});
