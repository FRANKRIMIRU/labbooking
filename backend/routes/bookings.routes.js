import { Router } from "express";
import { addBookingToCalendar } from "../controllers/calendar.controller.js";

const bookingRouter = Router();

bookingRouter.post("/", addBookingToCalendar);

export default bookingRouter;
