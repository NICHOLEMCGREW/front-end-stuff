// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function comapareArr(arr) {
    if(arr[0] < arr[arr.length-1]) {
        console.log('hi')
    } else if (arr[0] > arr[arr.length-1]) {
        console.log('bye')
    } else {
        console.log("We close in an hour")
    }
}
comapareArr([1,2,3,4,1])