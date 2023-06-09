import Express  from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verfiyToken.js";

const router = Express.Router()

//create
router.post("/:hotelId",verifyAdmin,createRoom);
//update
router.put("/:id",verifyAdmin,updateRoom);

router.put("/availability/:id",updateRoomAvailability);
//delete
router.delete("/:id/:hotelId",verifyAdmin,deleteRoom);
//get
router.get("/:id",getRoom);
// getAll
router.get("/",getRooms);

export default router