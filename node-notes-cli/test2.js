function test() {

  const fUnNyStRiNg = this.toLowerCase().split('');
  let i = 0;
  let capitalizeTest = false;
  const myRegex = /[A-Z]/i;

  while (i < fUnNyStRiNg.length) {
    if (!myRegex.test(fUnNyStRiNg[i]) &&
      !myRegex.test(fUnNyStRiNg[i + 1])) {
      i += 2;
      capitalizeTest = false;
      continue;
    }
    if (!myRegex.test(fUnNyStRiNg[i])) {
      i++;
      capitalizeTest = false;
      continue;
    }

    if (capitalizeTest === true) {
      fUnNyStRiNg.splice(i, 1, this[i].toUpperCase());
      i += 2;
      capitalizeTest = false;
    } else {
      i++;
      capitalizeTest = true;
    }
  }
  return fUnNyStRiNg.join('');
}

test('hi, there, hello!');
