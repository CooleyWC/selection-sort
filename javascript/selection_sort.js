function selectionSort(arr) {

  // make a copy of the origional arr
  // find the lowest value of the arr
  // push the lowest value to a new array
  // remove the lowest value from the copy
  // find the new lowest value and push that
  let ogCopy = [...arr]
  let newArr = []
  
  for(let i=0; i<=arr.length-1; i++){
    let minny = Math.min(...ogCopy)
    newArr.push(minny)
    let filteredArr = ogCopy.filter((element)=>{
      return element !== minny
    })
    ogCopy = filteredArr
  }
  return newArr

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([9, -10, 6, 11, 15, 64, 24]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
