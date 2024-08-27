// Tipar variables en JSDoc
/**
 * Nombre de usuario
 * @type {string}
 */
let userName = "John";

/**
 * Edad del usuario
 * @type {number}
*/
let userAge = 18;

/**
 * Lista de edades de usuarios
 * @type {Array<Number>}
*/
const usersAges = [23, 24, 30];

/**
 * Lista de valores
 * @type {Array<Number | String | Boolean>}
 */
const mixedArray = [42, 'Hey', true];

/* Tipar objetos: */
/**
 * Usuario
 * @type {{ id: number, name: string, age: number, isActive: boolean }}
 */
const user = {
  id: 1,
  name: 'John',
  age: 17,
  isActive: true,
}

/**
 * @typedef {object} User
 * @property {number} id Este es el ID del usuario
 * @property {string} name Este es el nombre del usuario
 * @property {number} age Este es la edad del usuario
 * @property {boolean} isActive Este es el estado del usuario
 */
const user2 = {
  id: 1,
  name: 'John',
  age: 17,
  isActive: true,
}

/**
 * @type {User}
 */
const user3 = {
  id: 1,
  name: 'John',
  age: 17,
  isActive: true,
}