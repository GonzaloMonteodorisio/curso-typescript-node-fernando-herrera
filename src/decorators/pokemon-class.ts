function printToConsole( constructor: Function ) {
  console.info('constructor: ', constructor);
}

// Factory constructor -> Debe retornar una función
const printToConSoleConditional = ( print: boolean = false ): Function => {
  if ( print ) {
    return printToConsole
  }

  return () => console.info('Hello world')
}

const blockPrototype = function( constructor: Function ) {
  Object.seal( constructor );
  Object.seal( constructor.prototype );
}

// Method decorator
function checkValidPokemonId() {
  return function( target: any, propertyKey: string, descriptor: PropertyDescriptor ) {
    console.info({ target, propertyKey, descriptor });

    const originalMethod = descriptor.value; // No pasa por referencia

    descriptor.value = ( id: number ) => {
      if ( id < 1 || id > 800) {
        return console.error('Pokemon id must be between 1 and 800');
      }

      return originalMethod(id)
    }
  }
}

@blockPrototype
@printToConSoleConditional(true)
export class Pokemon {

  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) {}

  @checkValidPokemonId()
  savePokemonToDB( id: number ) {
    console.info(`Pokemon with id: ${id} has been saved to the database.`);
  }
}