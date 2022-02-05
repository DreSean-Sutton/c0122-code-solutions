/* exported filterOutNulls */

function filterOutNulls(values) {
  var newValuesArr = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      newValuesArr.push(values[i]);
    }
  }
  return newValuesArr;
}
