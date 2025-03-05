const { generateManyBook } = require('../fakes/book.fake');
const BooksService = require('./books.service');

const mockGetAll = jest.fn();

// Utilizando tecnica de Mock, la suplantación va dentro de mockImplementation
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('test for BooksService', () => {
  let service;
  beforeEach(() => {
    service = new BooksService();
    // Limpia todos los Mocks que se han hecho antes de realizar el caso de prueba
    jest.clearAllMocks();
  });

  describe('test for getBooks', () => {
    test('Debería retornar la longitud de la lista de libros', async () => {
      const fakeBooks = generateManyBook(20);
      // Arrange - Give - Dado que
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act - When - Cuando
      const books = await service.getBooks({});
      console.log(books);
      // Assert - Then - Entonces
      expect(books.length).toEqual(fakeBooks.length);
      // Pregunto al espía si fue llamado, cuantas veces fue llamado
      // y con qué parámetros fue llamado
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Debería retornar el segundo nombre de la lista de libros', async () => {
      const fakeBooks = generateManyBook(4);
      // Arrange - Give - Dado que
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act - When - Cuando
      const books = await service.getBooks({});
      console.log(books[0]);
      // Assert - Then - Entonces
      expect(books[0].name).toEqual(fakeBooks[0].name);
    });
  });
});
