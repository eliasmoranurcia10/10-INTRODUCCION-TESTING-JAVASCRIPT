//SETUP AND TEARDOWN
//Configuración yscope de pruebas


//Reune todo un conjunto de pruebas, describe() encapsula los casos de prueba
describe('grupo 1',() => {

  //BeforeAll() sentencia de código que va a correr antes de todas las pruebas en seguida
  beforeAll(() => {
    console.log('beforeAll');
    // Para casos de integración, para levantamiento de una base de datos
    //Corre antes de los case
  });

  //BeforeAll() sentencia de código que va a correr después de todas las pruebas
  afterAll(() => {
    console.log('afterAll');
    // Después de haber recorrido todos los casos de prueba
    //Ejemplo: Bajar toda la base de datos
  });

  //Corre antes de cada uno de los casos de prueba
  beforeEach(() => {
    console.log('beforeEach');
  });

  //Corre después de cada uno de los casos de prueba
  afterEach(() => {
    console.log('afterEach');
  });

  test('case 1', () =>{
    console.log('case 1');
    expect(1+1).toBe(2);
  });

  test('case 2', () =>{
    console.log('case 2');
    expect(1+3).toBe(4);
  });

  describe('grupo 2', () => {
    //beforeAll respeta el alcance en que está, dentro de describe ()
    beforeAll(() => {
      console.log('beforeAll');
    });

    test('case 3', () =>{
      console.log('case 3');
      expect(1+1).toBe(2);
    });

    test('case 4', () =>{
      console.log('case 4');
      expect(1+3).toBe(4);
    });
  });
});
