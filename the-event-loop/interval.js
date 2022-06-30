let count = 3;

const blast = rocket => {
  if (count > 0) {
    console.log(count);
    count--;
  } else if (count === 0) {
    clearInterval(between);
    console.log('Blast Off!');
  }
};

const between = setInterval(blast, 1000);
