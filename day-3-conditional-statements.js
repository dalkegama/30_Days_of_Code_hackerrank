const weiredFunc = (input) => {
    const conditionOne = (oddOrEven(input) === 'odd');
    const conditionTwo = (oddOrEven(input) === 'even' && input >= 2 && input <= 5)
    const conditionThree = (oddOrEven(input) === 'even' && input >= 6 && input <= 20);
    const conditionFour = (oddOrEven(input) === 'even' && input > 20);

    if (conditionOne || conditionThree) {
        console.log('Weird');
    }
    if (conditionTwo || conditionFour) {
        console.log('Not Weird');
    }
}

function oddOrEven(inputNum) {
    if (inputNum % 2) {
        return 'odd';
    } else {
        return 'even';
    }
}