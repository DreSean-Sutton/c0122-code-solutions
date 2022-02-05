/* exported includesSeven */

function includesSeven(array) {
  var isTrue = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      isTrue = true;
    }
  }
  return isTrue;
}
