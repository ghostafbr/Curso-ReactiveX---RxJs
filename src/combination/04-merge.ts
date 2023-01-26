import { fromEvent, merge, map } from 'rxjs';

const keyup$ = fromEvent(document, 'keyup');
const click$ = fromEvent(document, 'click');

merge(
  keyup$.pipe(map((data) => data.type)),
  click$.pipe(map((data) => data.type))
).subscribe(console.log);
