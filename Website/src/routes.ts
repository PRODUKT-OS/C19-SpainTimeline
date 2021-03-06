import { Router } from 'express';

// Models
import userController from './controllers/user.controller';
import pageController from './controllers/page.controller';
const routes = Router();

//Homepage
routes.get("/", pageController.login);

// Login
routes.get("/login",pageController.login)
routes.post("/login", userController.login);

//main pages
routes.get("/timeline", userController.auth, pageController.timeline);



export default routes;