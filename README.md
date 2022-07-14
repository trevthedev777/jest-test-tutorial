# Jest Testing JavaScript Framework Tutorial

Initialise your workspace by typing in your terminal
 ```
npm init
```
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