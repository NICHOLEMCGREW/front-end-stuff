function showMessage(from, text) {

    from = '*' + from + '*'; // make "from" look nicer
  
    // alert( from + ': ' + text );
  }
  
  let from = "Ann";
  
  showMessage(from, "Hello"); // *Ann*: Hello
  
  the value of "from" is the same, the function modified a local copy
  alert( from ); // Ann

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
    alert( 'Access granted' );
} else {
    alert( 'Access denied');
}

function checkAge(age) {
    return (age > 18) ? true : confirm('Do you have permission from your parents?');
}

function checkAge2(age) {
    return (age > 18) || confirm('Do you have permission from your parents?');
}

function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function min2(a, b) {
    return a < b ? a : b;
}

function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}
    let x = prompt("x?", '');
    let n = prompt("n?", '');

    if (n < 1) {
        alert(`Power ${n} is not supported, use a positive integer`);
    } else {
        alert( pow(x, n) );
    }

    pow(4)