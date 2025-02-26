//matches

//PRUEBA PARA OBJETOS
test('test obj', () => {
  const data = {name: 'nico'};
  data.lastname = 'molina';
  expect(data).toEqual({name: 'nico', lastname: 'molina'});
});

//PRUEBA PARA NULOS
test('null', () => {
  const data = null;
  //Espera que el valor esté definido como nulo
  expect(data).toBeNull();
  //Espera que el valor esté definido o declarado
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

//PRUEBA PARA VALORES BOOLEANOS
test('Booleano', () => {
  //Espera que el valor coincida lógicamente
  expect(true).toEqual(true);
  expect(false).toEqual(false);

  // los valore 0, '', false son considerados como falso
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

//PRUEBA PARA VALORES STRINGS
test('Strings', () => {
  //Espera que la palabra contenga la cadena
  expect('Cristian').toMatch(/tian/);
});

//PRUEBA PARA LISTAS
test('list / arrays', () => {
  const numbers = [1, 2, 3, 4, 5];
  //Espera que el array con tenga un cierto número
  expect(numbers).toContain(3);
});
