import "dotenv/config";

import express from "express";
import Lab5 from "./Lab5/index.js";
import cors from "cors";
import CourseRoutes from "./Kanbas/Courses/routes.js";
import ModuleRoutes from "./Kanbas/Modules/routes.js";
import AssignmentRoutes from "./Kanbas/Assignments/routes.js";
import mongoose from "mongoose";
import UserRoutes from "./User/routes.js";

const CONNECTION_STRING =
  process.env.MONGO_CONNECTION_STRING ||
  "mongodb+srv://peihao:lph199588@kanbas.kk75t.mongodb.net/?retryWrites=true&w=majority&appName=Kanbas";
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors());
app.use(express.json());
UserRoutes(app);

CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);
