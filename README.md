# Proyecto inicial - Curso de TypeScript

* Lo primero que debemos de hacer después de descargar el código es ejecutar el comando:

```
npm install
```
Ese comando descargará todos los módulos de node necesarios para ejecutar el proyecto.


* Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, recuerden que deben de ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto que configuré para este proyecto es el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack serve --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


# curso-typescript

## Decoradores
Los decoradores son una forma de añadir comportamiento a clases, funciones, métodos y propiedades. Los decoradores se pueden aplicar a cualquier tipo de elemento, incluyendo constructores, propiedades, métodos, y métodos estáticos.

### Ejemplo
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('log:', target, propertyKey, descriptor);
}

class Person {
  @log
  sayHi() {
    console.log('Hi!');
  }
}

const p = new Person();
p.sayHi();
```

### Ejemplo de uso
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('log:', target, propertyKey, descriptor);
}

class Person {
  @log
  sayHi() {
    console.log('Hi!');
  }
}

const p = new Person();
p.sayHi();
```

### Ejemplo de uso
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('log:', target, propertyKey, descriptor);
}

class Person {
  @log
  sayHi() {
    console.log('Hi!');
  }
}

const p = new Person();
p.sayHi();
```

### Ejemplo de uso
```typescript
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  console.log('log:', target, propertyKey, descriptor);
}

class Person {
  @log
  sayHi() {
    console.log('Hi!');
  }
}

const p = new Person();
p.sayHi();
```

## Generics
Las generics son una característica de TypeScript que permite definir tipos genéricos para clases, interfaces, funciones, etc. Estos tipos genéricos se utilizan para crear tipos flexibles y genéricos que pueden adaptarse a diferentes usos y situaciones.

### Ejemplo
```typescript
interface Box<T> {
  value: T;
}

class BoxImpl<T> implements Box<T> {
  value: T;
}

const box = new BoxImpl<number>();
box.value = 42;
console.log(box.value); // 42
```

## Interfaces
Interfaces son una característica de TypeScript que permiten definir las propiedades y métodos que una clase debe implementar. Esto permite crear una interfaz que define los requisitos de una clase y permite a otras clases implementar esa interfaz.

### Ejemplo
```typescript
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  area(): number {
    return this.width * this.height;
  }
}