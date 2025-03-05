// Prmero son las importaciones de terceros y
// Luego nuestras importaciones
const request = require('supertest');
const { MongoClient } = require('mongodb');
const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Prueba para Books', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3002);

    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    // Cierra la aplicación luego de terminar los casos de prueba
    await server.close();
    // Borrar la base de datos de prueba
    await database.dropDatabase();
  });

  describe('Pruebas por [GET] /api/v1/books', () => {
    test('Debería retornar una lista de libros', async () => {
      // Arrange
      const seedData = await database.collection('books').insertMany([
        {
          name: 'Book1',
          year: 1998,
          autor: 'Elias',
        },
        {
          name: 'Book2',
          year: 1999,
          autor: 'Daniel',
        },
        {
          name: 'Book3',
          year: 2000,
          autor: 'Angie',
        },
        {
          name: 'Book4',
          year: 2001,
          autor: 'Kiara',
        },
        {
          name: 'Book5',
          year: 2002,
          autor: 'Danilo',
        },
      ]);
      console.log(seedData);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          console.log(body);
          // Assert
          expect(body.length).toEqual(seedData.insertedCount);
        });
    });
  });
});
