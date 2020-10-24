/*eslint-disable*/
//Nunca inferir tipos antes. typeof(var) === any ? inferir tipo : não inferir tipo;

let nome: string = 'Rodrigo';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');

//Declarações de arrays
//const arrayOfNumbers: number[] = [1,2,3];
const arrayOfNumbers: Array<number>  = [1,2,3];
const arrayOfStrings: Array<string>  = ['1','2','3'];

//objects
const pessoa:{nome: string, idade: number, adulto?: boolean} = {
  nome: 'Rodrigo',
  idade: 30,
  adulto: true,
};

//functions
function soma(x:number, y: number): number{
  return x+y;
}
const soma2: (x: number, y:number) => number = (x, y) => x + y;