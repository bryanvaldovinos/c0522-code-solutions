/* exported oddOrEven */
function oddOrEven(numbers) {
  var resultsArray = [];
  var odd = 'odd';
  var even = 'even';

  for (var i = 0; i < numbers.length; i++) {
    if ((numbers[i] % 2) > 0) {
      resultsArray.push(odd);
    } else if ((numbers[i] % 2) === 0) {
      resultsArray.push(even);
    }
  } return resultsArray;
}
