const UsersModel = require('../models/users')

const getAllUSers = async (req, res) => {

    try {
        const [data] = await UsersModel.getAllUsers();
    
        res.json({
            message: "GET all users success",
            data: data
        })
        
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }

}

const createNewUSer = async (req, res) => {
    const {body} = req;

    try {
        await UsersModel.createNewUser(body);
        res.json({
            message: "CREATE new users success",
            data: body
        })
    } catch (error) { 
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error
        })
    }

}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log('idUser: ', idUser);
    res.json({
        message: "UPDATE user success",
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json({
        message:"DELETE user success",
        data:{
            id: idUser,
            name: "Hafizh Zaghlul",
            email: "hafizhzaghlul882@gmail.com",
            address: "bandar lampung"
        }
    })
}

module.exports = {
    getAllUSers,
    createNewUSer,
    deleteUser,
    updateUser
}