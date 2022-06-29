/* exported unique */
function unique(array) {
  var newArray = [];
  var repeat = 'no';

  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < newArray.length; j++) {
      if (array[i] === newArray[j]) {
        repeat = 'yes';
      }
    }
    if (repeat !== 'yes') {
      newArray.push(array[i]);
    }
    repeat = 'no';
  }
  return newArray;
}

// new array w only unique elements, no repeat
// in order too - run through array
// also newarray and its values
// if array index values same as newarray index value
// assign 'yes' to repeat var
// if repeat var is not 'yes' then push array[i] to newarray
// reassign 'no' to repeat var and continue loop
