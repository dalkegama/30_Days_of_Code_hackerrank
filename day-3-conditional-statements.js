process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    weiredFunc(inputString);
    main();
});

const weiredFunc = (input) => {
    const conditionOne = !oddOrEven(input);
    const conditionTwo = oddOrEven(input) && input >= 2 && input <= 5;
    const conditionThree = oddOrEven(input) && input >= 6 && input <= 20;
    const conditionFour = oddOrEven(input) && input > 20;

    if (conditionOne || conditionThree) {
        console.log('Weird');
    }
    if (conditionTwo || conditionFour) {
        console.log('Not Weird');
    }
}

const oddOrEven = inputNum => {
    return inputNum % 2 === 0 ? true : false;
}