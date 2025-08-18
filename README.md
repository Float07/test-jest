# test-jest
A repo for practicing, testing and learning the [Jest package](https://jestjs.io/)

# Usage
Have npm and Node installed. Clone this repo into your machine and inside it run `npm i` to install dependencies. After that, you can run the tests like this:

```bash
# Run every test
npm test

# Run a specific test - In this case, I'm running only the database tests
npm test -t database
```

You should see something like this:

<img width="1917" height="863" alt="image" src="https://github.com/user-attachments/assets/68625158-58fe-4b19-bf6f-0c2c1b9e68be" />

# Project structure
Here's a brief explanation of each folder in this project.

## `tests`
The folder that contains all the tests files (in the form of `.test.js` files).

## `lib`
Contains some simple modules on which the tests in the `tests` folder are built.

## `database`
An empty folder (except for a `.gitignore` file because of [reasons](https://stackoverflow.com/a/932982)) that will be populated by `.json` files created by the `database.js` module. The empty folder exists in this repo only to facilitate the code, since it would need to handle checking and creating the folder otherwise.

# Tests
## `tests.test.js`

## `passing-tests.test.js`

## `async-tests.test.js`

## `database-tests.test.js`
