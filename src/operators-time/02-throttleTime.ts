import { asyncScheduler } from 'rxjs';
import {
  debounceTime,
  fromEvent,
  pluck,
  distinctUntilChanged,
  throttleTime,
} from 'rxjs';

const click$ = fromEvent(document, 'click');

click$.pipe(throttleTime(3000)); //.subscribe(console.log);

// Ejemplo2

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    throttleTime(1000, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
  )
  .subscribe(console.log);
