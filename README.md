# Jest Testing JavaScript Framework Tutorial

## Table of Contents
- Writing our first test
- Breaking our test
- Mocking
- Testing the DOM

### What is it?
Red-Green-Refactor in Jest

### What does it do?
Shows us how to build a failing test and then get the test to pass

### How do we use it?
Use a TDD(Test-Driven Development)-style approach when developing your projects

Initialise your workspace by typing in your terminal
 ```
npm init
```

Continue to press the enter key until the prompt of test command appears, at this option you should type 
```
jest
```
so that the program expects it to run

For this tutorial we are using an older version of Jest
In your terminal type:
```
npm install --save-dev jest@26.6.3
```
Alternatively you can install the latest version by typing
```
npm install --save-dev jest
```

After installing the packages in your development environment you can run
```
npm test
```

After running the test for the first time you will recieve the following message in your terminal:
```

> jest-test-tutorial@1.0.0 test
> jest

No tests found, exiting with code 1
Run with `--passWithNoTests` to exit with code 0
In /workspace/jest-test-tutorial
  5 files checked.
  testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).[tj]s?(x) - 0 matches
  testPathIgnorePatterns: /node_modules/ - 5 matches
  testRegex:  - 0 matches
Pattern:  - 0 matches
```

To set up your workspace to save your tests

- Create a folder in your workspace, calling it whatever name you choose, for the purpose of
  this tutorial, I have called it "scripts"
- Create sub directory in the "scripts" folder, create a folder and name it "tests"

- Create your JS file (in the scripts folder), in this example we are going to use: 
```
calc.js
``` 
  for our calculation function
- Make your test file using the same file name but add 'test' or 'spec' in the file name like:
```
calc.test.js
```

- In your test folder you need to import your original .js file you want to perform the test on
```
// import the function from the file you want to run the test on 
const addition = require('../calc');
```
*Notice we are supply two dots ('../navigate_to_previous_directory_and_select_file.js') because calc.js is in the directory above our test file. You won't need them if your scripts & test files were in the same directory*

### Write your test code

```
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
});

```

Once you have your code written, It is always suggested to save your work, then in your terminal you can run your test using :
```
npm test
```
The following output should display from your terminal:
```

> jest-test-tutorial@1.0.0 test
> jest

 FAIL  scripts/tests/calc.test.js
  Calculator
    Addition function
      ✕ should return 42 for 20 + 22 (1 ms)

  ● Calculator › Addition function › should return 42 for 20 + 22

    TypeError: addition is not a function

       8 |         test('should return 42 for 20 + 22', () => {
       9 |             // it should expect<functionName(param1, param2)> and .toBe = it SHOULD be 42
    > 10 |             expect(addition(20, 22)).toBe(42);
         |                    ^
      11 |         })
      12 |     });
      13 |     describe('Subtraction function', () => { // Second Level Describe

      at Object.<anonymous> (scripts/tests/calc.test.js:10:20)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.84 s
Ran all test suites.
```

You should expect the test to fail as our function has not yet been defined, so lets define our function, keeping in mind that we just need to write enough code to pass the test and nothing else

In your 
```
calc.js
```
write the simplest function for the test to pass, my solution is

```
function addition() {
    return 42;
};

module.exports = addition;
```
*It's important t export your function so that the require statement in your calc.test.js file renders it*

Now, run
```
npm test
```

Your results should be
```

> jest-test-tutorial@1.0.0 test
> jest

 PASS  scripts/tests/calc.test.js
  Calculator
    Addition function
      ✓ should return 42 for 20 + 22 (2 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.811 s, estimated 1 s
Ran all test suites.
```

Our test has passed this time, well done on passing your first test, but be aware that because the function in this tutorial is so simple, you don't need to refactor any code


#### Summary

- We created our first test
- We set an expectation
- We wrote just enough code to pass the test

## Breaking Our Test

In order to break our test, we need to add to our expectations declared in the test script, for the purpose of this tutorial, we are demonstrating this

Return to 

```
calc.test.js
```

Add to your original code
```
// import the function from the file you want to run the test on 
const addition = require('../calc');

describe('Calculator', () => { //Top level Parent Describe
    describe('Addition function', () => { // Second Level Describe
        // Create a test with the test() method
        // then pass in the expectation using arrow function
        test('should return 42 for 20 + 22', () => {
            // it should expect<functionName(param1, param2)> and .toBe = it SHOULD be 42
            expect(addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            // it should expect<functionName(param1, param2)> and .toBe = it SHOULD be 73
            expect(addition(42, 31)).toBe(73);
        });
    });
    describe('Subtraction function', () => { // Second Level Describe

    });
    describe('Multiplication function', () => { // Second Level Describe

    });
    describe('Division function', () => { // Second Level Describe

    });
});
```
Now run your test in the terminal again using
```
npm test
```

Your output should be
```

> jest-test-tutorial@1.0.0 test
> jest

 FAIL  scripts/tests/calc.test.js
  Calculator
    Addition function
      ✓ should return 42 for 20 + 22 (1 ms)
      ✕ should return 73 for 42 + 31 (3 ms)

  ● Calculator › Addition function › should return 73 for 42 + 31

    expect(received).toBe(expected) // Object.is equality

    Expected: 73
    Received: 42

      12 |         test('should return 73 for 42 + 31', () => {
      13 |             // it should expect<functionName(param1, param2)> and .toBe = it SHOULD be 42
    > 14 |             expect(addition(42, 31)).toBe(73);
         |                                      ^
      15 |         });
      16 |     });
      17 |     describe('Subtraction function', () => { // Second Level Describe

      at Object.<anonymous> (scripts/tests/calc.test.js:14:38)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.833 s, estimated 1 s
Ran all test suites.
```

In case you are still new at understanding the process, 'jest' tells us which tests have passed and also which ones have failed, see the example with comments added at this point
```

> jest-test-tutorial@1.0.0 test
> jest

 FAIL  scripts/tests/calc.test.js
  Calculator
    Addition function
      ✓ should return 42 for 20 + 22 (1 ms) <--- Tells us this test has passed
      ✕ should return 73 for 42 + 31 (3 ms) <--- Tells us this test has failed

  ● Calculator › Addition function › should return 73 for 42 + 31

    expect(received).toBe(expected) // Object.is equality

    Expected: 73
    Received: 42

      12 |         test('should return 73 for 42 + 31', () => {
      13 |             // it should expect<functionName(param1, param2)> and .toBe = it SHOULD be 42
    > 14 |             expect(addition(42, 31)).toBe(73);
         |                                      ^
      15 |         });
      16 |     });
      17 |     describe('Subtraction function', () => { // Second Level Describe

      at Object.<anonymous> (scripts/tests/calc.test.js:14:38)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        0.833 s, estimated 1 s
Ran all test suites.
```
Now we need to implement the failing function in our
```
calc.js
```

In order to pass both tests using the same function name, you need to update your code, adding parameters to help sole the solution
```
function addition(num1, num2) {
    return num1 + num2;
};

// Export The Function ONLY
module.exports = addition;
```

*Your parameter names may be different and that's okay, if you got a similar code then well done:)*

Now, run the test again in your terminal
```
npm test
```

Your ouput should now read
```

> jest-test-tutorial@1.0.0 test
> jest

 PASS  scripts/tests/calc.test.js
  Calculator
    Addition function
      ✓ should return 42 for 20 + 22 (1 ms)
      ✓ should return 73 for 42 + 31 (1 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.805 s, estimated 1 s
Ran all test suites.
gitpod /workspace/jest-test-tutorial (main) $ 
```

The hard work is not done yet, this is the easy part, to produce a concise and stable test, you need to take into consideration that you might have forgotten to include some of the following considerations into your test,

    - Test for no parameters 
    - Test for missing parameter
    - String as one or both parameters
    - null as one or both paramters
    - undefined as a parameter
    - Does it work wkth floating point numbers?
    - What about negative numbers?

#### Summary

- How to build a function using tests
- How to be in the red part of the cycle when the test fails
- How to get back into the green by passing our tests

## Mocking

*Due to a change in Jest's default configuration, you need to add the following code to the top of your test file:*
```
/**
 * @jest-environment jsdom
 */

```
 *Your tests will fail if you forget to insert this* 

### References
- Jest: https://jestjs.io/docs/getting-started