const {sum, multiplicar, divide, promedio } = require('./02-math');

describe('test for math', () => {

  describe('test para sumar', () =>{
    test('adds 1 + 3 to equal 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });

  describe('test para multiplicar',() =>{
    test('adds 1 * 4 to equal 4', () => {
      const rta = multiplicar(1, 4);
      expect(rta).toBe(4);
    });
  });

  describe('test para dividir', () => {
    test('debería dividir correctamente en 2 escenarios', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });

    test('debería dividir por cero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  });

  describe('test para promediar 2 numeros', () => {
    test('debería promediar 2 numeros, 4+8/2 = 6', () => {
      const rta = promedio(4, 8);
      expect(rta).toBe(6);
    });
  });

});






