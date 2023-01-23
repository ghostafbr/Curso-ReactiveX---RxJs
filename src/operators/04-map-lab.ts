import { fromEvent, map, tap } from 'rxjs';
const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim neque sit amet posuere interdum. Pellentesque tristique venenatis sem, vel consequat nunc. Etiam molestie consectetur nisi. Nam sollicitudin, sapien ac tristique lobortis, sapien ipsum elementum diam, eu cursus urna dolor ac nibh. Sed tristique purus eget mi scelerisque tristique. Aliquam eros leo, malesuada a imperdiet non, vestibulum quis dolor. Suspendisse ac viverra arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus orci velit, posuere a leo at, commodo vulputate nisi. Duis ac massa non nisi vehicula malesuada interdum nec magna. Aliquam eu placerat eros. Quisque eget bibendum eros, et ornare lorem.
<br>
Etiam ultrices dui ac arcu vestibulum ullamcorper. Proin finibus gravida suscipit. Nunc laoreet urna est, et semper magna porttitor vitae. Aliquam erat volutpat. Nullam sit amet dignissim velit, vel accumsan quam. Aenean sed ex a tortor tristique commodo nec vitae erat. Vestibulum eu urna accumsan, interdum risus ac, egestas ligula. Mauris et nisi consequat elit varius tempor a eget turpis. Aliquam sollicitudin mauris velit, tincidunt mollis diam volutpat at. Integer commodo nulla mauris, eu aliquet augue blandit ut. Maecenas a fermentum metus. Ut ut sagittis nunc. Morbi ac dui in dui rutrum sagittis ut ac diam. Mauris venenatis commodo ullamcorper. Suspendisse ultricies, justo quis dignissim efficitur, orci quam ultrices nisl, non posuere nisl lorem eget metus.
<br>
Fusce nec consequat augue, sit amet sagittis ipsum. Donec pellentesque lectus sed volutpat ultricies. Cras nec laoreet risus. Donec dui sapien, egestas sed posuere in, fermentum ac metus. Proin dapibus pretium dictum. Suspendisse accumsan arcu non erat porttitor, ut dapibus magna ornare. Aenean mauris ligula, lobortis quis magna vel, sollicitudin pretium lectus. Mauris sodales ipsum nec odio mollis, aliquet condimentum sem luctus. Quisque venenatis, tellus ac placerat posuere, urna sapien pharetra dui, in ullamcorper ligula tortor a risus. Quisque et varius velit. Fusce a ipsum risus. Quisque facilisis pellentesque ligula id pellentesque. Proin varius vitae dui quis malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent dignissim purus vitae nisi facilisis consectetur. Mauris ante eros, posuere eget tortor tristique, consectetur pellentesque dolor.
<br>
Aenean rutrum nulla in pharetra volutpat. Cras orci nunc, interdum id magna nec, consequat consectetur ante. Donec malesuada nunc velit, id commodo tortor laoreet sit amet. Curabitur blandit, nunc a porttitor sagittis, augue orci consequat ipsum, sed tincidunt nisl massa vel magna. Nullam consectetur nunc eget volutpat imperdiet. Vestibulum at rutrum libero. Mauris luctus consectetur commodo. Aliquam a turpis id urna convallis elementum quis ut nisi. Etiam vitae nisi at ipsum scelerisque ornare eu sit amet est. Sed porttitor nulla quam, eu interdum felis egestas at. Phasellus eget diam eget justo eleifend lacinia. Maecenas fermentum efficitur nisl. Sed vestibulum viverra justo ut sodales. Pellentesque finibus, turpis nec lobortis scelerisque, ipsum lectus venenatis justo, pulvinar maximus neque nunc sit amet felis. Ut commodo eros aliquam erat cursus faucibus vitae id velit. Nunc a felis ut ante rhoncus placerat nec et ligula.
<br>
Donec laoreet lacinia elementum. In lacinia purus mi, vitae ornare mauris posuere vitae. Morbi non ultricies justo. Curabitur cursus mollis euismod. Vestibulum dapibus mattis turpis nec fringilla. Sed quis libero elit. Sed in accumsan tortor. Nam accumsan pharetra ex, vel scelerisque neque elementum at. Aliquam nec laoreet sem.
`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// función que calculo el scroll
const calculatePercentajeScroll = (evt) => {
  // console.log(evt);
  const { scrollTop, scrollHeight, clientHeight } = evt.target.documentElement;
  return (scrollTop / (scrollHeight - clientHeight)) * 100;
};

// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe(
  map(calculatePercentajeScroll),
  tap(console.log)
);

progress$.subscribe((percentaje) => {
  progressBar.style.width = `${percentaje}%`;
});
