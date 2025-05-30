function printToConsole( constructor: Function ) {
  console.info('constructor: ', constructor);
}

@printToConsole
export class Pokemon {

  public publicApi: string = 'https://pokeapi.co';

  constructor(
    public name: string
  ) {}
}