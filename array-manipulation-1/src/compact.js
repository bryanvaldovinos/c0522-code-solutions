/* exported compact */
// no false, no null, no Nan, no 0 or -0, no undefined,
// no empty ----- maintain order

function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (!array[i]) {
      continue;
    } newArray.push(array[i]);
  } return newArray;
}

// need to return a new array that filters out
// falsy values
// a loop is needed to check for every element in original array
// is there a way to skip over array element/ not include?
// continue will skip over iteration
// not a falsy is true... so if true then continue
// not truthy is false.. so dont continue
//  ---> push  truthy array at index to new array
// return new array
