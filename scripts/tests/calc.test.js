// import the function from the file you want to run the test on 
const addition = require('../calc');

describe('Calculator', () => { //Top level Parent Describe
    describe('Addition function', () => { // Second Level Describe
        // Create a test with the test() method
        // then pass in the expectation using arrow function
        test('should return 42 for 20 + 22', () => {
            // it should expect<functionName(param1, param2)> and .toBe = it SHOULD be 42
            expect(addition(20, 22)).toBe(42);
        })
    });
    describe('Subtraction function', () => { // Second Level Describe

    });
    describe('Multiplication function', () => { // Second Level Describe

    });
    describe('Division function', () => { // Second Level Describe

    });
})