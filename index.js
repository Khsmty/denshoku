require('dotenv').config();

const denshoku = '電飾まだですか'
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
