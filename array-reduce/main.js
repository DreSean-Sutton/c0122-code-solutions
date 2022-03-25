const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum = numbers.reduce((x, y) => x + y);
const product = numbers.reduce((x, y) => x * y);
const balance = account.reduce((x, y) => {
  if (y.type === 'deposit') {
    x += y.amount;
  } else {
    x -= y.amount;
  }
  return x;
}, 0);

const composite = traits.reduce((x, y) => Object.assign(x, y));
