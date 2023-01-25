import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const clic$ = fromEvent(document, 'click');
const interval$ = interval(1000);

clic$
  .pipe(switchMap(() => interval$))
  // mergeMap(() => interval$)),
  .subscribe(console.log);
