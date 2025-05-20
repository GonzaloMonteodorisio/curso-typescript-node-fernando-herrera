import { Hero as HeroClass } from './classes/Hero';
import { printObject, genericFunction, genericFunctionArrow } from './generics/functions';
import { Hero } from './interfaces/hero'
import { Villian } from './interfaces/villian'

// import * as HeroClasses from './classes/Hero';
// import powers2, { Power } from './data/powers'; // como es importación por defecto puedo importarlo con el nombre que quiera

// const Hero = 123

const ironMan = new HeroClass('Iron Man', 1, 55);

console.info('ironMan: ', ironMan);

console.info('ironMan.power: ', ironMan.power);

// Generic functions

printObject(123);
printObject(new Date());
printObject( { a: 1, b: 2, c: 3 } )
printObject( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )
printObject('Hola Mundo');

const name: string = 'Gonzalo'

console.info('genericFunction(3.1416).toFixed(2): ', genericFunction(3.1416).toFixed(2));

console.info('genericFunction(name).toUpperCase(): ', genericFunction(name).toUpperCase());

console.info('genericFunction( new Date() ).getDate(): ', genericFunction( new Date() ).getDate());

console.info('genericFunctionArrow(3.1416).toFixed(2): ', genericFunctionArrow(3.1416).toFixed(2));

console.info('genericFunctionArrow(name).toUpperCase(): ', genericFunctionArrow(name).toUpperCase());

console.info('genericFunctionArrow( new Date() ).getDate(): ', genericFunctionArrow( new Date() ).getDate());

// Generic function example

const deadPool = {
  name: 'Dead Pool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130,
}

console.info('genericFunctionArrow<Hero>(deadPool).realName:', genericFunctionArrow<Hero>(deadPool).realName);

console.info('genericFunctionArrow<Villian>(deadPool).dangerLevel:', genericFunctionArrow<Villian>(deadPool).dangerLevel);








