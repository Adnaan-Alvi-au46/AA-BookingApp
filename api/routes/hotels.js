import Express  from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verfiyToken.js";

const router = Express.Router()
//create
router.post("/",verifyAdmin,createHotel);
//update
router.put("/:id",verifyAdmin,updateHotel);
//delete
router.delete("/:id",verifyAdmin,deleteHotel);
//get
router.get("/find/:id",getHotel);
// getAll
router.get("/",getHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
router.get("/room/:id",getHotelRooms);

export default router