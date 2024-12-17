import express from "express";
import { registrationUser, activateUser } from "../controllers/user.controller";

const userRouter = express.Router();

// This will handle POST /api/v1/registration
userRouter.post("/registration", registrationUser);

// This will handle POST /api/v1/activate-user
userRouter.post("/activate-user", activateUser);

export default userRouter;
