/* exported sumAll */
function sumAll(numbers) {
  var add = 0;
  for (var i = 0; i < numbers.length; i++) {
    add += numbers[i];
  }
  return add;
}
