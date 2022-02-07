/* exported titleCase */
/*
-create a variable named capitalizeNextLetter and assign it the boolean value of false
-create a variable named apaStr and assign it the value of an empty array literal
-create a variable named splitStr and assign it the value of the toLowerCase method of the split method of
...str with ' ' as it's argument
-create a for loop that:
a. assigns the value of 0 to i
b. executes code block if i is less than the length property of splitStr
c. i++
  -if splitStr[i] is strictly equal to 'javascript':
    call the push method of apaStr with 'JavaScript' as it's argument
  -else if splitStr[i] is strictly equal to 'api':
    call the push method of apaStr with 'API' as it's argument
  -else:
    -create a for loop that:
    a. assigns the value of 0 to j
    b. execute code block if j is less than the length property of splitStr[i]
    c. j++
    -if capitalizeNextLetter is true:
      call the push method of apaStr with the toUpperCase method of splitStr[i][j] as it's argument
      assign capitalizeNextLetter the boolean value of false
    -else if i is strictly equal to 0 and
    j is strictly equal to 0:
      call the push method of apaStr with the toUpperCase method of splitStr[i][j] as it's argument
      assign the boolean value of false to capitalizeNextLetter
    -else if j is strictly equal to 0 and
    the length property of splitStr is greater than 3:
      call the push method of apaStr with the toUpperCase method of splitStr[i][j] as it's argument
    -else if splitStr[i][j] is strictly equal to ':' or
    splitStr[i][j] is strictly equal to '-':
      call the push method of apaStr with splitStr[i][j] as it's argument
      capitalizeNextLetter = true
    -else:
      call the push method of apaStr with splitStr[i][j] as it's argument
  -if the includes method of splitStr[i] with ':' as it's argument is true and
  apaStr at the index of length property of apaStr - 1 is not strictly equal to ':':
    call the push method of apaStr with ':' as it's argument
    capitalizeNextLetter = true
  -call the push method of apaStr with ' ' as it's argument
-call the splice method of apaStr with the length property of apaStr - 1 and  1 as it's arguments
-return apaStr.join(' ')
*/

function titleCase(str) {
  var capitalizeNextLetter = false;
  var apaStr = [];
  var splitStr = str.toLowerCase().split(' ');
  for (var i = 0; i < splitStr.length; i++) {
    if (splitStr[i].includes('javascript')) {
      apaStr.push('JavaScript');
    } else if (splitStr[i] === 'api') {
      apaStr.push('API');
    } else if (splitStr[i] === 'web') {
      apaStr.push('Web');
    } else {
      for (var j = 0; j < splitStr[i].length; j++) {
        if (capitalizeNextLetter === true) {
          apaStr.push(splitStr[i][j].toUpperCase());
          capitalizeNextLetter = false;
        } else if ((i === 0) &&
        (j === 0)) {
          apaStr.push(splitStr[i][j].toUpperCase());
          capitalizeNextLetter = false;
        } else if ((j === 0) &&
        (splitStr[i].length > 3)) {
          apaStr.push(splitStr[i][j].toUpperCase());
        } else if ((splitStr[i][j] === ':') ||
        (splitStr[i][j] === '-')) {
          apaStr.push(splitStr[i][j]);
          capitalizeNextLetter = true;
        } else {
          apaStr.push(splitStr[i][j]);
        }
      }
    }
    if ((splitStr[i].includes(':')) &&
     (apaStr[apaStr.length - 1] !== ':')) {
      apaStr.push(':');
      capitalizeNextLetter = true;
    }
    apaStr.push(' ');
  }
  apaStr.splice(apaStr.length - 1, 1);
  return apaStr.join('');
}
