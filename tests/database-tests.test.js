const { test, expect, beforeAll } = require('@jest/globals');
const { fakerPT_BR: faker } = require('@faker-js/faker');
const { Database } = require('../lib/database');

beforeAll(async () => {
  // Crate people database and populate it
  const peopleDatabase = new Database('people');
  await peopleDatabase.untilReady;

  const people = Array.from({length: 100000}, () => ({
    firstName: faker.person.firstName(),
    middleName: faker.person.middleName(),
    lastName: faker.person.lastName(),
    job: faker.person.jobTitle(),
    bio: faker.person.bio(),
  }))

  peopleDatabase.documents = people;

  await peopleDatabase.save();
});

test('database has 100000 documents', async () => {
  const peopleDatabase = new Database('people');
  await peopleDatabase.untilReady;
  expect(peopleDatabase.documents.length).toBe(100000);
})
