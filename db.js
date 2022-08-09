//db.js
async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;


    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://suellenrosemberg@localhost:3308/crud")
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}
 
connect();

async function selectCustomers(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT *FROM clientes;');
    return rows;
    //return await conn.query('SELECT *FROM clientes');
}
async function insertCustomer(customer){
    const conn = await connect();
    const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);');
    const values = [customer.nome, customer.idade, customer.uf];
    return await conn.query(sql, values);
}
async function updateCustomer(id, customer){
    const conn = await connect();
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, custome.idade, customer.uf, customer.id]
    return await conn.query(sql, values);

async function deleteCustomer(id){
    const conn = await connect();
    const sql = 'DELETE FROM clientes where id=?;';
    return await conn.query(sql, [id]);
}    
}

module.exports = {selectCustomers, insertCustomer, updateCustomer, deleteCustomer}