import { Hero } from './classes/Hero';
import { printObject, genericFunction } from './generics/functions';

// import * as HeroClasses from './classes/Hero';
// import powers2, { Power } from './data/powers'; // como es importación por defecto puedo importarlo con el nombre que quiera

// const Hero = 123

const ironMan = new Hero('Iron Man', 1, 55);

console.info('ironMan: ', ironMan);

console.info('ironMan.power: ', ironMan.power);

// Generic functions

printObject(123);
printObject(new Date());
printObject( { a: 1, b: 2, c: 3 } )
printObject( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] )
printObject('Hola Mundo');


console.info('genericFunction(3.1416).toFixed(2): ', genericFunction(3.1416).toFixed(2));

console.info('genericFunction("Hola Mundo").toFixed(2): ', genericFunction("Hola Mundo").toFixed(2));








