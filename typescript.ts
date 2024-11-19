// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// map(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
// find(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 
// Triple igual en comparaciones: https://developer.mozilla.org/es/docs/Web/JavaScript/Equality_comparisons_and_sameness 


// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()
let nombre: string = "Chiara";
let edad: number = 28;
let esEstudiante: boolean = true;

console.log(nombre,edad,esEstudiante)
// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.
function sumar (a:number, b:number): number {
    return a + b;
}
console.log('Suma: ', sumar(15,5))
function restar (a:number, b:number): number {
    return a - b;
}
console.log('Resta: ', restar(15,5))
function multiplicar (a:number, b:number): number {
    return a * b;
}
console.log('Multiplicacion: ', multiplicar(2,5))


// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())
let numeros: number [] = [1,2,3,4]

numeros.forEach(num =>{console.log(multiplicar(num,2));})


// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.
interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

const persona: Persona[] =[{
    nombre: 'Chiara',
    edad: 28,
    esEstudiante: true,
},
{
    nombre: 'Juli',
    edad: 20,
    esEstudiante: true,
},
{
    nombre: 'Sol',
    edad: 30,
    esEstudiante: false,
}]

console.log(persona)

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.
let valor: string|number;
valor = 'Hola';
console.log(valor);
valor = 10;
console.log(valor);

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
interface Producto {
    nombre: string,
    precio: number,
    enStock: boolean
}

const productos: Producto[] = [
    {nombre: 'Telefono',
    precio: 100,
    enStock:true},
    {nombre: 'Tablet',
    precio: 150,
    enStock:false},
    {nombre: 'Teclado',
    precio: 50,
    enStock:true},
    {nombre: 'PC',
    precio: 1000,
    enStock:true},
    {nombre: 'Audifonos',
    precio: 80,
    enStock:true},
    {nombre: 'Mouse',
    precio: 10,
    enStock:false}
]
function enStock(array:Producto[]): Producto[] {
    return array.filter((productos) => productos.enStock = true)
}
function sinStock(array:Producto[]): Producto[] {
    return array.filter((productos) => productos.enStock = false)
}


// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 

interface Cliente {
    nombre: string,
    id: number,
    estado: boolean
}

const clientes: Cliente[] = [
    {nombre: 'Telefono',
    id: 1,
    estado:true},
    {nombre: 'Tablet',
    id: 2,
    estado:false},
    {nombre: 'Teclado',
    id: 3,
    estado:true},
    {nombre: 'PC',
    id: 4,
    estado:false},
    {nombre: 'Audifonos',
    id: 5,
    estado:true},
    {nombre: 'Mouse',
    id: 6,
    estado:false}
]
function activos(array:Cliente[]): Cliente[] {
    return array.filter((clientes) => clientes.estado = true)
}
function inactivos(array:Cliente[]): Cliente[] {
    return array.filter((clientes) => clientes.estado = false)
}
