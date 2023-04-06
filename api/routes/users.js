import Express  from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { verifyUser, verifyToken, verifyAdmin } from "../utils/verfiyToken.js";


const router = Express.Router()


// router.get("/checkauthentication", verifyToken,(req,res,next)=>{
//     res.send("user logged In")
// })

// router.get("/checkuser/:id", verifyUser,(req,res,next)=>{
//     res.send("user logged in and can delete your account")
// })

// router.get("/checkadmin/:id", verifyAdmin ,(req,res,next)=>{
//     res.send("admin logged in and can delete all account")
// })


//update
router.put("/:id",verifyUser,updateUser);
//delete
router.delete("/:id",verifyUser,deleteUser);
//get
router.get("/:id",verifyUser,getUser);
// getAll
router.get("/",verifyAdmin,getUsers);


export default router