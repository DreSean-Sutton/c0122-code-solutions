/* eslint-disable no-extend-native */

String.prototype.toMoCkInGcAsE = function () {
  let string = '';
  let capitalTest = false;
  const myRegex = /[A-Z]/i;
  for (let i = 0; i < this.length; i++) {
    if (!myRegex.test(this[i])) {
      string += this[i];
      continue;
    }
    if (capitalTest) {
      string += this[i].toUpperCase();
      capitalTest = false;
    } else {
      string += this[i].toLowerCase();
      capitalTest = true;
    }
  }
  return string;
};

String.prototype.toMoCkInGcAsE = function () {
  debugger;
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
    if (!myRegex.test(fUnNyStRiNg[i + 1])) {
      i++;
      continue;
    }
    if (!myRegex.test(fUnNyStRiNg[i])) {
      i++;
      capitalizeTest = false;
      continue;
    }

    if (capitalizeTest) {
      fUnNyStRiNg.splice(i, 1, this[i].toUpperCase());
      i += 2;
    } else {
      i++;
      capitalizeTest = true;
    }
  }
  return fUnNyStRiNg.join('');
};
