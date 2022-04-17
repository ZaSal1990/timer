// Input node timer1.js 10 3 5 15 9

const timer = function(array) { //extracts useful information from cmd and sort in ascending order
  let newArray = [];
  if (array[2] && Number(array[2]) > 0 && !isNaN(Number(array[2]))) { //edge cases
    for (let i = 2; i < array.length; i++) {
      newArray.push(~~array[i]); // ~~ converts str to number
    } newArray = newArray.sort((a,b) => {
      if (a < b)
        return -1;
      return 1;
    });
    for (let i = 0; i < newArray.length; i++) { //calling fns
      setTimeout(() => {
        process.stdout.write('\x07');
      }, newArray[i] * 1000);
    }
  } else if (!array[2] || Number(array[2]) < 0 || isNaN(Number(array[2]))) {
    console.log('no can do'); //edge cases
  }
};

let userInput = process.argv;
timer(userInput);





 