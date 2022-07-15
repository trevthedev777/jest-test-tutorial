# Jest Testing JavaScript Framework Tutorial

## Table of Contents
- [Writing our first test](#writing-our-first-test)
- [Breaking our test](#breaking-our-test)
- [Mocking](#mocking)
- [Testing the DOM](#testing-the-dom)

## Writing our first test

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

[Back to Home](#jest-testing-javascript-framework-tutorial)

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

[Back to Home](#jest-testing-javascript-framework-tutorial)

## Mocking

*Due to a change in Jest's default configuration, you need to add the following code to the top of your test file:*
```
/**
 * @jest-environment jsdom
 */

```
 *Your tests will fail if you forget to insert this* 

 ## Mocking

Well done on making it this far :), As we continue with the tutorial, we will be looking at 'Mocking', for this demonstration, you can copy and paste the index.html and then we need to create a button click function in a new script, so in the /scripts folder, create a new file and call it
```
button.js
```

Inside this .js file I have inserted some basic code to change the innerText of the button to originally show:

<button>Click Me</button>

and after the function is fired, to change to:

<button>Click Me</button>

<p>You Clicked</p>

The code to create this function is

```
function buttonClick() {
    document.getElementById('par').innerHTML = 'You Clicked';
};

module.exports = buttonClick;
```

Here we are testing to see if the contents of the <p> really do change, to do this we will need to use a 'mock DOM', in the

```
button.test.js
```

I added the following test requirement

```
/**
 * @jest-environment jsdom <--- YOU NEED THIS TO RUN A SIMULATED DOM
 */

 const buttonClick = require("../button");

 beforeEach(() => {
     document.body.innerHTML = "<p id='par'></p>";
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
 });
 ```
Great, then in your terminal run

```
npm test
```

If you have followed correctly so far, you should get the following response from the output

```

> jest-test-tutorial@1.0.0 test
> jest

 PASS  scripts/tests/button.test.js
 PASS  scripts/tests/calc.test.js

Test Suites: 2 passed, 2 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        1.114 s
Ran all test suites.
```

#### Summary

- used beforeEach() directive, which runs before each test
- Used the mock DOM to test interactivity

[Back to Home](#jest-testing-javascript-framework-tutorial)

## Testing The DOM

The final step of this tutorial will allow us to test the entire 'index.html' if our mock DOM environment, its really simple, just add to the following code to your 
```
button.test.js
```

you will notice that the test has been refactored to include the whole 'index.html' file

```
/**
 * @jest-environment jsdom
 */

 const buttonClick = require("../button");

 beforeEach(() => {
     let fs = require('fs'); // This is a file system handling module which allows you to open and read files
     let fileContents = fs.readFileSync('index.html', 'utf-8'); // Open the file you want to test
     document.open();
     document.write(fileContents);
     document.close();
 });
 
 describe("DOM tests", () => {
     test("Expects content to change", () => {
         buttonClick();
         expect(document.getElementById("par")
             .innerHTML).toEqual("You Clicked");
     });
     test("h1 should exist", () => {
        expect(document.getElementsByTagName('h1').length).toBe(1); // the one (1) is to see how many of those elements should exist in the file
     })
 });
```

Now, as usual, run the test in your terminal using

```
npm test
```

If you have followed correctly, your output should read

```

> jest-test-tutorial@1.0.0 test
> jest

 PASS  scripts/tests/button.test.js
 PASS  scripts/tests/calc.test.js

Test Suites: 2 passed, 2 total
Tests:       4 passed, 4 total
Snapshots:   0 total
Time:        1.098 s
Ran all test suites.
```
#### Summary

- How to install Jest testing suite
- Build simple tests to match the output of JavaScript functions
- Build more advanced tests to check the DOM

### References
- Jest: https://jestjs.io/docs/getting-started