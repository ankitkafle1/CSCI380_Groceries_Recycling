var express = require('express');
//const { rawListeners } = require('../app');
var router = express.Router();
const User = require('../model/User')


/* POST users listing. */
router.post('/',async (req,res)=>{
    const user= new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    userstory:req.body.userstory,
  })
  try {
    const savedUser = await user.save()
    res.json(savedUser)
  } catch(err) {
    res.json({message: err})
  }
});

/* GET all users users listing. */
router.get('/', async (req, res)=> {
  try {
    const user = await User.find(req.params)
    res.json(user)
  } catch(err){
    res.json({message: err})
  }
});

/* GET a single users from listing. */
router.get('/:userId', async (req, res)=> {
  try {
    const user = await User.findById(req.params.userId)
    res.json(user)
  } catch(err){
    res.json({message: err})
  }
});

/* Update a user by its id */
router.patch('/:userId', async (req,res)=>{
  try{

      const updatedUser = await User.updateOne(
      {_id : req.params.userId}, 
      {$set: 
        { firstname: req.body.firstname,
          lastname: req.body.lastname,
          userstory: req.body.userstory,
      }})

    res.json(removedUser)
  }catch (err){
    res.json({message: err})
  }
})

/* Delete a user by its id */
router.delete('/:userId', async (req,res)=>{
  try{
    const removedUser = await User.deleteOne({_id : req.params.userId})
    res.json(removedUser)
  }catch (err){
    res.json({message: err})
  }
})



module.exports = router;