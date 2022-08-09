//index.js

(async () => {

const db = require ("./db");
console.log('Começou!')

console.log('INSERT INTO ')
await db.insertCustomer({nome: "Olivia", idade: 34, uf:"MS"})
console.log(result);

console.log('SELECT *FROM CLIENTES');
const clientes = await bd.selectCustomers();
console.log(clientes);

console.log('UPDATE CLIENTES')
const result2 = await db.updateCustomer(6, {nome:"Josefa", idade:34, uf:"RS"});
console.log(result);

console.log('DELETE FROM CLIENTES')
const result3 = await db.deleteCustomer(7);
console.log(result3);

}
)
();


