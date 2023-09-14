import express  from "express";
import mongoose from "mongoose";
import userController from "../controller/userController";

const router = express.Router()

router.post("/",userController.userCreate)
router.get("/",userController.getAllUser)
router.delete("/",userController.deleteAllUser)
router.delete("/:id",userController.deleteOneUser)
export default router