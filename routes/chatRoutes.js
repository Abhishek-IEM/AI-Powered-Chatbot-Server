import express from "express";
import { isAuth } from "../middlewares/isAuth.js";
import {
  AddConversation,
  createChat,
  deleteChat,
  getAllChats,
  getConversation,
} from "../controllers/chatControllers.js";

const router = express.Router();

router.post("/new", isAuth, createChat);
router.get("/all", isAuth, getAllChats);
router.post("/:id", isAuth, AddConversation);
router.get("/:id", isAuth, getConversation);
router.delete("/:id", isAuth, deleteChat);

export default router;
