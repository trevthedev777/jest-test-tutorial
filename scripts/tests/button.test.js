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