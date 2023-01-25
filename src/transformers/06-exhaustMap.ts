import { concatMap, exhaustMap, fromEvent, interval, take } from 'rxjs';

const clic$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

clic$.pipe(exhaustMap(() => interval$)).subscribe(console.log);
