import { Router } from "express";
import { addBookingToCalendar } from "../controller/calendar.controller.js";

const bookingRouter = Router();

bookingRouter.post("/", addBookingToCalendar);

export default bookingRouter;
