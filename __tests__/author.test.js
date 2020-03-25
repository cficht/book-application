const { getAuthor, getAuthors, getBook, getBooks } = require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');

describe('author routes', () => {

  it('creates an author', () => {
    return request(app)
      .post('/api/v1/authors')
      .send({ name: 'bob' })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'bob',
          __v: 0
        });
      });
  });

  it('gets an author by id', async() => {
    const author = await getAuthor();

    return request(app)
      .get(`/api/v1/authors/${author._id}`)
      .then(res => {
        console.log(res.body);
        expect(res.body).toEqual({
          ...author
        });
      });
  });


});
