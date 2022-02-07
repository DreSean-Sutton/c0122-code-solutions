/* exported defaults */

/*
-create a for key in source loop
  -if the key property of target is === undefined
    assign the value of the key property of source to the key property of target
*/

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
