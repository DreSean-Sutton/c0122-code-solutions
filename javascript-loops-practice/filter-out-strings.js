/* exported filterOutStrings */

function filterOutStrings(values) {
  var newValuesArr = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof (values[i]) !== 'string') {
      newValuesArr.push(values[i]);
    }
  }
  return newValuesArr;
}
