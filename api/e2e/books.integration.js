const request = require('supertest');

const { generateManyBook } = require('../src/fakes/book.fake');

const mockGetAll = jest.fn();

// Utilizando tecnica de Mock, la suplantación va dentro de mockImplementation
jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

const createApp = require('../src/app');

describe('Prueba para Books', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();

    server = app.listen(3001);
  });

  afterAll(async () => {
    // Cierra la aplicación luego de terminar los casos de prueba
    await server.close();
  });

  describe('Pruebas por [GET] /api/v1/books', () => {
    test('Debería retornar una lista de libros', () => {
      // Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);

      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(fakeBooks.length);
        });
    });
  });
});
