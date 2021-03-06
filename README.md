# intent.js

Functional testing for Node.js and the browser.

If you have any questions or feedback, feel free to contact us using [@goloroden](https://twitter.com/goloroden) or [@pro_cessor](https://twitter.com/pro_cessor) on Twitter.

## Installation

    $ npm install intent.js

## Quick start

See `samples` folder for sample usage.

## Vocabulary

We came to the understanding that, there might be something different about the way that we view things here.
Rather than naming something "It should do this and that" or falling into standard AAA/GivenWhenThen syntax, or calling something a specification or a fixture or something, we tried to make this system all about communication. Our tests are trying to communicate intent. Rather than just saying what happens, we are trying to tell the reader why we think it should be happening. This is why our tests are called "intents". An intent is described by a reason. You want something - so why do you really want it? Each intent is made up of separate goals. You desire to get something done, you would like to achieve something. First you aren't sure whether a goal can be met. Goals can be contradicting with other goals sometimes. However, you wish for all of them to be fulfilled until you are satisfied.
 
You will not encounter these terms in your code. When we talk about these things, we use the terms to describe the internals of what is going on:

```javascript
test(div, {                   
  'A calculator devides numbers': [ // Intent - What would you want to work? Why?
    { in: [ 6, 3 ], out: 2 },       // Goal   - What do you need, so that you are happy?
    { in: [ 2, 1 ], out: 2 }        // Goal
  ],
  'Dividing by zero': {             // Another intent
    in: [ 6, 0 ], out: Error        // Another goal
  } 
});
```
*Note: Sure, the reason is pretty lame, but giving a reason for why a calculator needs a division is pretty hard.*

This is one test, with two intents. The first intent is satisfied, when two goals are met. 

It is important to us, that the test runner is nice to you. 

That's it :-)!

## License

The MIT License (MIT)
Copyright (c) 2012 Johannes Hofmeister and Golo Roden.
 
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.