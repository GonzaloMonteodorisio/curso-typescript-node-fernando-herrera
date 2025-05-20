import powers, { Power } from '../data/powers'; // como es importación por defecto puedo importarlo con el nombre que quiera

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
  ) {}

  get power(): string { // return string
    return powers.find((power: Power) => power.id === this.powerId)?.description || 'Power not found'
  }
}

export class Hero2 {}

export class Hero3 {}

export class Hero4 {}

export const PI = 3.1416

export const miNombre = 'Gonzalo'