/* exported getIndexes */
function getIndexes(array) {
  var indexArray = [];
  var indexNum = 0;
  for (var i = 0; i < array.length; i++) {
    indexArray.push(indexNum);
    indexNum = indexNum + 1;
  }
  return indexArray;
}
