const dbPool = require('../config/database')

const getAllUsers = () =>{
    const SQLQuery = 'SELECT * FROM users';

    return dbPool.execute(SQLQuery);
}

const createNewUser =(body) =>{
    const SQLQuery = `  INSERT INTO users (nama, email, alamat) VALUES ('${body.nama}', '${body.email}', '${body.alamat}')`;
    
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllUsers,
    createNewUser,
}