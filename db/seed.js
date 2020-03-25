const Book = require('../lib/models/Book');
const Author = require('../lib/models/Author');
const chance = require('chance').Chance();

module.exports = async({ authorsToCreate = 10, booksToCreate = 100 } = {}) => {
  const names = ['Frank Reynolds', 'Brian Wilson', 'Bob Hoskins'];
  const authors = await Author.create([...Array(authorsToCreate)].map(() => ({
    name: chance.pickone(names)
  })));

  await Book.create([...Array(booksToCreate)].map(() => ({
    title: chance.sentence(),
    pages: chance.d100(),
    authorId: chance.pickone(authors)._id
  })));
};
