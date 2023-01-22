import { asyncScheduler } from 'rxjs';

/* setTimeout(() => {}, 3000);
setInterval(() => {}, 3000); */

const saludar = () => console.log('Hola Mundo');
const saludar2 = ({ name, lastName }) =>
  console.log(`Hola ${name} ${lastName}`);

// asyncScheduler.schedule(saludar, 2000);
/* asyncScheduler.schedule(saludar2, 2000, {
  name: 'Andrés',
  lastName: 'Bolaños',
}); */

const sub = asyncScheduler.schedule(
  function (state) {
    console.log('state: ', state);

    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

/* setTimeout(() => {
  sub.unsubscribe();
}, 6000); */

asyncScheduler.schedule(() => sub.unsubscribe(), 6000);
