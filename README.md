Check if a string exactly abides a regular expression

## Installation

```js
npm install exact-regex
```

## Example
```js
let exactRegex = require('exact-regex');

let value1 = '14px';
let value2 = ' 14px';
let value3 = '14';
let value4 = 'string';
let value5 = 'auto';
let value6 = 'inherit';
let value7 = '-5px';
let value8 = '-5';

let regex = /(auto|inherit|initial|0|(\-)?([0-9\.]+)(px|\%|em|rem|cm|mm|ch|pica|in|pt|pc|ex|vw|vh|vmin|vmax))/gi;

exactRegex(value1, regex); // returns true
exactRegex(value2, regex); // returns true
exactRegex(value3, regex); // returns false
exactRegex(value4, regex); // returns false
exactRegex(value5, regex); // returns true
exactRegex(value6, regex); // returns true
exactRegex(value7, regex); // returns true
exactRegex(value8, regex); // returns false
```
