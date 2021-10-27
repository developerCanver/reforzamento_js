

let firstName;
let lastName;

console.log(`${ firstName || 'No firstNAme' } ${ lastName || 'No LastName'}`)


const isActive= true;


// if (isActive) {
//     message='Activo'
// } else {
//     message=']Inactivo'    
// }

const message = (isActive===true) ? 'Activo' : 'Inactivo' 
console.log(message)