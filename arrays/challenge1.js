// given an array [0, 10, 2, -2, 14, -5, 1, -6, 18]

// return new array that follow these rules
// [firstPart, secondsPart, thirdPart]

// firstPart contains numbers that greater than 10

// secondsPart contains negative number

// thirdPart contains number that greater than -1 and less than 11

function reOrder(arr) {
  const firstPart = [];
  const secondsPart = [];
  const thirdPart = [];
  for (let ele of arr) {
    if (ele < 0) {
      secondsPart.push(ele);
    } else if (ele < 11) {
      thirdPart.push(ele);
    } else {
      firstPart.push(ele);
    }
  }
  return [...firstPart, ...secondsPart, ...thirdPart];
}

console.log(reOrder([0, 10, 2, -2, 14, -5, 1, -6, 18]));
