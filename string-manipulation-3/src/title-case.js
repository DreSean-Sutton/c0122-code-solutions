/* exported titleCase */
/*
-create a variable named capitalizeNextLetter and assign it the boolean value of the false
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
  -else if the length property of splitStr[i] is less than 4 and
  capitalizeNextLetter is strictly equal to false:
    call the push method of apaStr with splitStr[i] as it's argument
  -else:
    -create a for loop that:
    a. assigns the value of 0 to j
    b. execute code block if j is less than the length property of splitStr[i]
    c. j++
    -if j is strictly equal to 0:
      call the push method of apaStr with the toUpperCase method of splitStr[i][j] as it's argument
      assign the boolean value of false to capitalizeNextLetter
    -else if splitStr[i][j] is strictly equal to ':' or
    splitStr[i][j] is strictly equal to '-':
      call the push method of apaStr with splitStr[i][j] as it's argument
      capitalizeNextLetter = true
    -else if capitalizeNextLetter is true:
      call the push method of apaStr with the toUpperCase method of splitStr[i][j] as it's argument
      assign capitalizeNextLetter the boolean value of false
    -else:
      call the push method of apaStr with splitStr[i][j] as it's argument
  -call the push method of apaStr with ' ' as it's argument
-call the splice method of apaStr with the length property of apaStr - 1 and  1 as it's arguments
-return apaStr.join(' ')
*/

function titleCase(str) {

}
