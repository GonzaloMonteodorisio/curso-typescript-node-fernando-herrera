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

// Property decorator
function readOnly( isWritable: boolean = false ): Function {
  return function( target: any, propertyKey: string ) {
    console.info({ target, propertyKey })

    const descriptor: PropertyDescriptor = {
      get() {
        console.info('this, getter - readOnly: ', this)
        return 'Fernando'
      },
      // this sería la instancia de la clase
      set( this, val ) {
        console.info('this, setter - readOnly: ', this)
        console.info('val, setter - readOnly: ', val)

        // El tercer argumento es un property descriptor
        Object.defineProperty( this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        } )
      }
    }

    return descriptor
  }
}

@blockPrototype
@printToConSoleConditional(true)
export class Pokemon {

  @readOnly( false ) // se dispara cuando se accede o cuando se intenta leer la propiedad
  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) {}

  @checkValidPokemonId()
  savePokemonToDB( id: number ) {
    console.info(`Pokemon with id: ${id} has been saved to the database.`);
  }
}