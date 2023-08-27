import '../css/normalize.css';
import '../css/style.scss';
import '../css/background.scss';
import '../css/card.scss';

console.log('You\'re a curious one! I like you <3')

document.querySelectorAll('.icon svg').forEach((card, index) => {
  card.style.marginTop = `${1.2 * index}rem`;
});


