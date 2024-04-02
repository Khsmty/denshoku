require('dotenv').config();

let str = '電飾まだですか';
if (new Date().getDate() === 2 && new Date().getHours() === 21) {
  str = 'おみやげまだですか';
}

const denshoku = str
  .split('')
  .sort(() => Math.random() - 0.5)
  .join('');

fetch('https://notify-api.line.me/api/notify', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${process.env.LINE_NOTIFY_TOKEN}`,
  },
  body: `message=${denshoku}`,
});
