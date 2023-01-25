import { concatMap, fromEvent, interval, take } from 'rxjs';

const clic$ = fromEvent(document, 'click');
const interval$ = interval(500).pipe(take(3));

clic$.pipe(concatMap(() => interval$)).subscribe(console.log);
