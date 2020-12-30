// 第二次优化
import cssString from "./css-pikachu";
import scssString from "./scss-pikachu";

// 次要
const beautify = (string) => {
  return string.replace(/\n/g, '<br>')
    .replace(/ /g, '&nbsp;');
};
const textString = beautify(scssString);
const ratio = textString.length / cssString.length;

// main
const player = {
  timeout: 100,
  id: undefined,
  ui: {
    text: document.getElementById('text'),
    css: document.getElementById('css')
  },
  count: 0,
  events: {
    'btnPlay': 'play',
    'btnPause': 'pause',
    'btnSlow': 'slow',
    'btnNormal': 'normal',
    'btnFast': 'fast'
  },
  init: () => {
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        document.getElementById(key).onclick = player[value];
      }
    }
  },
  run: () => {
    player.count += 1;
    if (player.count > textString.length) {
      clearInterval(player.id);
      return;
    }
    player.ui.text.innerHTML = textString.substr(0, ratio * player.count);
    player.ui.text.scrollTop = player.ui.text.scrollHeight;
    player.ui.css.innerHTML = cssString.substr(0, player.count);
  },
  play: () => {
    clearInterval(player.id);
    player.id = setInterval(player.run, player.timeout);
  },
  pause: () => {
    clearInterval(player.id);
  },
  slow: () => {
    player.pause();
    player.timeout = 300;
    player.play();
  },
  normal: () => {
    player.pause();
    player.timeout = 100;
    player.play();
  },
  fast: () => {
    player.pause();
    player.timeout = 2;
    player.play();
  }
};

player.init();
