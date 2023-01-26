import { fromEvent, map, take, concatWith } from 'rxjs';
// Listen for one mouse click, then listen for all mouse moves
const clicks$ = fromEvent(document, 'click');
const moves$ = fromEvent(document, 'mousemove');

clicks$
  .pipe(
    map(() => 'click'),
    take(1),
    concatWith(moves$.pipe(map(() => 'move')))
  )
  .subscribe((x) => console.log(x));
