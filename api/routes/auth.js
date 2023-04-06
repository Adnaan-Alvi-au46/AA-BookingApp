import Express  from "express";
import { login, register } from "../controllers/authController.js";

const router = Express.Router()

router.post('/register',register)
router.post('/login',login)


export default router