import { forkJoin, catchError, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'ghostafbr';

forkJoin({
  user: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax
    .getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`)
    .pipe(catchError((err) => of([]))),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((err) => of(err)))
  .subscribe(console.log);
