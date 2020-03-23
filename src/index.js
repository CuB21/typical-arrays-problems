
exports.min = function min (array) {
  if (array===undefined || array.length === 0) {
    return 0;
  }
  array.sort((a,b) => {
    return a - b;
  })
  return array[0];
}

exports.max = function max (array) {
  if (array===undefined || array.length === 0) {
    return 0;
  }
  array.sort((a,b) => {
    return b - a;
  })
  return array[0];
}

exports.avg = function avg (array) {
  if (array===undefined || array.length === 0) {
    return 0;
  }
  let num = 0;
  array.forEach((element) => {
    num += element;
  })
  return num/array.length;
}
