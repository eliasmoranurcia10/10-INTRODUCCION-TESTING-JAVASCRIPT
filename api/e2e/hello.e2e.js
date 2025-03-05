const request = require('supertest');

const createApp = require('../src/app');

describe('Test para el endpoint hello', () => {
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

  describe('Pruebas por [GET] /', () => {
    test('Debería retornar Hello Word', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toEqual('Hello World!');
      }));
  });
});
