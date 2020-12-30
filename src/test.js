import cssString from "./css-pikachu";
import scssString from "./scss-pikachu";

//声明
const btnPlay = document.getElementById('btnPlay');
const btnPause = document.getElementById('btnPause');
const btnSlow = document.getElementById('btnSlow');
const btnNormal = document.getElementById('btnNormal');
const btnFast = document.getElementById('btnFast');
const text = document.getElementById('text');
const css = document.getElementById('css');
const beautify = (string) => {
  return string.replace(/\n/g, '<br>')
    .replace(/ /g, '&nbsp;');
};
let textString = beautify(scssString);
let n = 0;
const ratio = textString.length / cssString.length;
const run = () => {
  n += 1;
  if (n > textString.length) {
    clearInterval(id);
    return;
  }
  text.innerHTML = textString.substr(0, ratio * n);
  text.scrollTop = text.scrollHeight;
  css.innerHTML = cssString.substr(0, n);
};
let time = 100;
let id;
const play = (time) => {
  id = setInterval(run, time);
};
const pause = () => {
  clearInterval(id);
};

//逻辑  尽量做到语义化
play(time);

btnPlay.onclick = () => {
  play(time);
};
btnPause.onclick = () => {
  pause();
};
btnSlow.onclick = () => {
  pause();
  time = 300;
  play(time);
};
btnNormal.onclick = () => {
  pause();
  time = 100;
  play(time);
};
btnFast.onclick = () => {
  pause();
  time = 2;
  play(time);
};
