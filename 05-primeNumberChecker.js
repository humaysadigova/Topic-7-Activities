const userNum = +prompt('Enter number for check');

if (isNaN(userNum)) {
    alert('Please enter number')
} else {
    alert(isPrime(userNum));
}

function isPrime(number) {
    if (number < 2) {
        return false;
    } else if (number === 2) {
        return true;
    };

    for (let i = 2; i <= Math.sqrt(number); i++ ){
        if (number % i === 0){
            return false;
        };
    };
    return true;
};
