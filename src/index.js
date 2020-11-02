import './styles.css';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('[data-action="start"]'),
  stopBtn: document.querySelector('[data-action="stop"]'),
  body: document.querySelector('body'),
}
const TIME_CHANGE_COLOR = 1000;
let intervalId = null;

refs.startBtn.addEventListener('click', startChange);
refs.stopBtn.addEventListener('click', stopChange);


function startChange() {
  intervalId = setInterval(() => {
  refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];  
  }, TIME_CHANGE_COLOR);

  refs.startBtn.disabled = true;
 
}

function stopChange() { 
  clearInterval(intervalId);
  refs.startBtn.disabled = false;

}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

