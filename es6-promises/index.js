const takeAChance = require('./take-a-chance');

const chance = takeAChance('Bryan');

chance
  .then(resolve => { console.log(resolve); })
  .catch(reject => { const e = reject.message; console.error(e); });
