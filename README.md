# Jest Testing JavaScript Framework Tutorial

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