# COMP.SE.200 Software testing course fall 2025

School project that should be hosted in GitHub. Group number 42.

[![Coverage Status](https://coveralls.io/repos/github/Agglu/softwaretesting/badge.svg?branch=main)](https://coveralls.io/github/Agglu/softwaretesting?branch=main)

# Chosen functions to be tested
Source code containing functions to be tested can be found [here](https://github.com/otula/COMP.SE.200-2024-2025-1) (copied into this project).

List of the 10 functions we chose for testing in this assignment:
- add.js
- capitalize.js
- ceil.js
- compact.js
- defaultTo.js
- drop.js
- filter.js
- isDate.js
- isEmpty.js
- toString.js

# Installation

You should have [Node.js](https://nodejs.org/en/) installed (version 18).

Clone this repository using `git clone`

Install necessary packages `npm install`

Run tests `npm test`

Run tests with coverage `npm test:coverage`

Coverage report is generated in `/coverage` folder. You can open `/coverage/lcov-report/index.html` in browser to see test coverage report.

# Technology stack
Testing framework used for creating tests is [Jest](https://jestjs.io/) framework.

Pipeline is created with GitHub [Actions](https://docs.github.com/en/actions).

Testing coverage report is created with [Coveralls](https://docs.coveralls.io/).