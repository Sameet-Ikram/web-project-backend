import express from "express";
import { invitePerson } from "../Controllers/EventController.js";
const router = express.Router();

router.post('/invite', invitePerson);

export default router;