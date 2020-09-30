
exports.min = (array) => {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    array.sort((a, b) => a - b);
    return array[0];
  }
}

exports.max = (array) => {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    array.sort((a, b) => a - b);
    return array[array.length-1];
  } 
}

exports.avg = (array) => {
  if (array === undefined || array.length === 0) {
    return 0;
  } else {
    return array.reduce(function(previousValue, currentValue) {
      return previousValue + currentValue;
    }) / array.length;
  } 
}
