import { Router } from 'express';

// Models
import userController from './controllers/user.controller';
import pageController from './controllers/page.controller';
import slotsController from './controllers/slots.controller';
import casinosController from './controllers/casinos.controller';
import statisticsController from './controllers/statistics.controller';

import alertsController from './controllers/alerts.controller';
const routes = Router();


// Users
// routes.get("/users", userController.select);
// routes.get("/users/:id", userController.select);
// routes.post("/users", userController.create);

//Homepage
routes.get("/", pageController.login);

//Register
routes.get("/register", pageController.register);
routes.post("/register", userController.create);

// Login
routes.get("/login",pageController.login)
routes.post("/login", userController.login);

//main pages
routes.get("/timeline", userController.auth, pageController.timeline);
routes.post("/timeline", userController.auth, statisticsController.select);
routes.get("/slots", userController.auth,pageController.slots);
routes.post("/slots", userController.auth,slotsController.create);
routes.delete("/slots", userController.auth,slotsController.delete);
routes.get("/casinos", userController.auth,pageController.casinos);
routes.post("/casinos", userController.auth,casinosController.create);
routes.delete("/casinos", userController.auth,casinosController.delete);
routes.get("/alerts", userController.auth,pageController.alerts);
routes.post("/alerts", userController.auth,alertsController.update);
routes.delete("/alerts", userController.auth,alertsController.delete);

// routes.get("/client/js/slots", pageController.slotsJs);
// routes.get("/client/js/casinos", pageController.casinosJs);
// routes.get("/client/js/login", pageController.loginJs);



export default routes;