
const Person = require('./06-person');

describe('Test for Person', () => {

  let person;
  //Arange / Given (Dado)
  beforeEach(() => {
    person = new Person('Nicolas', 45, 1.7);
  });

  test('should return down', () => {
    /*


      METODOLOGÍA AAA
      * Arange / Given (Dado): Preparar o alistar nuestro escenario de pruebas
      * Act / When (Cuando): Ejecutar o actuar nuestro escenario de pruebas
      * Assert / Then (Entonces): Resolvemos nuestras hipótesis
    */

    //Arange / Given (Dado)
    person.weight = 45;
    //Act / When (Cuando)
    const imc = person.calcIMC();
    //Assert / Then (Entonces)
    expect(imc).toBe('down')
  });

  test('should return normal', () => {

    person.weight = 59;

    const imc = person.calcIMC();

    expect(imc).toBe('normal')
  });
});


