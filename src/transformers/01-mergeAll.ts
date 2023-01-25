import { fromEvent, debounceTime, map, mergeAll, Observable } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubUser } from '../interfaces/item';
// References
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append(textInput, orderList);

// Helpers
const showUsers = (users: GitHubUser[]) => {
  console.log(users);
  orderList.innerHTML = '';

  for (const user of users) {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Ver perfil';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  }
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$
  .pipe(
    debounceTime(500),
    map((event) =>
      ajax.getJSON(
        `https://api.github.com/search/users?q=${event.target['value']}`
      )
    ),
    mergeAll(),
    map<any, GitHubUser[]>((data: any) => data.items)
  )
  .subscribe(showUsers);
