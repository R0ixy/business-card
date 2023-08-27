import '../css/preLoader.scss';

export const PreLoader = () => {
  const quotes = ['Think Different', 'Stay foolish', 'Dream', 'Just Do it'];
  document.getElementById('preLoaderContent').innerHTML = quotes[Math.floor(Math.random() * quotes.length)];

  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('preLoader').style.display = 'none';
      document.getElementById('app').style.display = 'block';
    }, 1000);
  });
};
