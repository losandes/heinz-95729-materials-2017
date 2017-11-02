Welcome to the CMU Heinz 95729 E-Commerce Tech course materials!

### Head over to the [Course Wiki](https://github.com/losandes/heinz-95729-materials-2017/wiki) to see the materials

#### LICENSE

The material for this course is licensed under the [Creative Commons Attribution Share Alike 4.0](LICENSE-CONTENT) license. Source code provided for this course is licensed under the [MIT license](LICENSE-SOFTWARE). All materials and source code are copyrighted, Andrew Wright 2016, unless otherwise specified.

## Exercises

To get started with the exercises, clone this repository. Several tests require other libraries to work. Before running these exercises, navigate to this directory in a terminal, and run the following to get the dependencies:

```
$ npm install
```

### Running the Exercises

You can run the exercises from this directory using `npm`:

```Shell
# Run all exercises
$ npm test

# Run week-1 exercises
$ npm run test:week1

# Run week-2 exercises
$ npm run test:week2
```

To run tests one-at-a-time, execute the `exercise` with node. For example, to execute the _freezing-and-sealing_ exercise, you can execute it from this directory:

```Shell
$ node SOLID/02-01-freezing-and-sealing/exercise
```

Or you can navigate to that directory and run the exercise from there:

```Shell
$ cd SOLID/02-01-freezing-and-sealing
$ node exercise
```

### Debugging the Exercises
You can run the exercises in debug mode, by adding `:debug` to the end of the command:

```Shell
# Run all exercises
$ npm test:debug

# Run week-1 exercises
$ npm run debug:week1

# Run week-2 exercises
$ npm run debug:week2
```

#### Adding breakpoints and evaluating state with REPL
You can add breakpoints to your code, by adding `debugger` to the line of code that you want to break on. You can set breakpoints at run time (in debug mode), using `setBreakpoint`. i.e.:

```
# This example assumes your in the exercises directory
$ npm run test:debug

> heinz-95729-exercises@1.0.0 test:debug /Users/andes/Documents/dev_git/heinz-95729-answers/exercises
> node debug index

< Debugger listening on [::]:5858
connecting to 127.0.0.1:5858 ... ok
# When you start in debug mode, it always breaks on the first line
# so you can set breakpoints as needed
break in index.js:1
> 1 'use strict';
  2
  3 require('./hilary-and-polyn');
# In debug mode, our prompt is "debug>"
# In this example, we set a breakpoint in blueprints exercise 1, on line 49
debug> setBreakpoint('hilary-and-polyn/10-blueprints/exercise-1/exercise.js', 49);
# Type c for continue
debug> c
# When node.js loads the file, it will break on line 49
break in hilary-and-polyn/10-blueprints/exercise-1/exercise.js:49
 47             // TODO: Refactor this constructor to get the test to pass
 48
>49             var book = new Book({
 50                 title: 'Hello World',
 51                 author: 'Hello World',
# We are given a debug prompt to explore the code in this state, however
# we need to enter REPL mode if we want to evaluate anything:
debug>repl
## REPL will drop us down to a ">" prompt. From here, we can evaluate the code
Press Ctrl + C to leave debug repl
> console.log(Book);
# ...
```

Alternatively, you can [use an IDE that supports debugging](https://code.visualstudio.com/docs/nodejs/nodejs-debugging).
