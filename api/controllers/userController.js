import Users from "../models/Users.js";

export const updateUser = async(req,res)=>{
    // const newHotel = new Hotels(req.body)
    try {
        const updatedUser = await Users.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
};

export const deleteUser = async(req,res)=>{
    // const newUser = new Users(req.body)
    try {
        await Users.findByIdAndDelete(req.params.id)
        res.status(200).json("user has been deleted")
    } catch (error) {
        next(error)
    }
};

export const getUser = async(req,res)=>{
    try {
        const user =  await Users.findById(req.params.id)
         res.status(200).json(user)
     } catch (error) {
        next(error)
     }
};

export const getUsers = async(req,res)=>{
    try {
        const users =  await Users.find()
         res.status(200).json(users)
     } catch (error) {
         // res.status(500).json(error)
         next(error)
     }
};