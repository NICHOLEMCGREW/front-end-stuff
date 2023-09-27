//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function arrayOfNums(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr.splice(i, 1)
        }
    }
    return arr;
}
console.log(arrayOfNums([1,2,3,4,1]))

function onlyEvens(arr) {
    let onlyEvens = []
    arr.forEach(e => {
        if (e % 2 === 0) {
            onlyEvens.push(e)
        }
    })
    return onlyEvens
}