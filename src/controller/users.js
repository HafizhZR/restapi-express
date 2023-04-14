const getAllUSers = (req, res) => {
    const data = {
        id: '1',
        name: "Hafizh Zaghlul",
        email: "hafizhzz@gmail.com",
        address: "Kota bandar lampung"
    }

    res.json({
        message: "GET all users success",
        data: data
    })
}

const createNewUSer = (req, res) => {
    console.log(req.body);
    res.json({
        message: "CREATE new users success",
        data: req.body
    })
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