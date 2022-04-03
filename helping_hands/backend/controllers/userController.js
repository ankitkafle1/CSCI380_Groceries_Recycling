
const data = {
    users: require('../model/customer.json'),
    setUsers: function (data) { this.users = data}
}

const getAllUsers = (req,res) =>{
    res.json(data.users)
}

const addNewUser = (req,res)=>{
    const newUser = {
        id: data.users?.length ? data.users[data.users.length-1].id+1 :1,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        userstory: req.body.userstory
    }
    
    if(!newUser.firstname || !newUser.lastname || !newUser.userstory){
        return res.status(400).json({'message':'Invalid entry, please enter first name lastname, and user story'})
    }
    data.setUsers([...data.users, newUser])
    res.status(201).json(data.users)
}
/*
const addBlog= (req,res) =>{
    try {
        const result = await Blog.create(
            {
                "title":user,
                "author":author,
                "body":story,
            }
        )
    } catch(err) {
        console.error(err)
    }
    }
    */
module.exports ={
    getAllUsers,
    addNewUser,
  //  addBlog,
}