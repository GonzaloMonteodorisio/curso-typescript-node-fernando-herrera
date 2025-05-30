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

@blockPrototype
@printToConSoleConditional(true)
export class Pokemon {

  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) {}
}