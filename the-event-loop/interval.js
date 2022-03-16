let countdown = 3;
let intervalId = null;

intervalId = setInterval(() => {
  if (countdown === 0) {
    clearInterval(intervalId);
    return console.log('Blast off!');
  }
  console.log(countdown);
  countdown--;
}, 1000);
