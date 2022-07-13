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

const sum = numbers.reduce((previousValue, currentValue) => previousValue + currentValue);

const multiply = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);

const balance = account.reduce((total, currentValue) => {
  if (currentValue.type === 'deposit') {
    total = total + currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    total = total - currentValue.amount;
  }
  return total;
}, 0);

const composite = traits.reduce((pokemon, trait) => {
  return Object.assign(pokemon, trait);
});

console.log('sum:', sum);
console.log('multiply:', multiply);
console.log('balance:', balance);
console.log('composite:', composite);
