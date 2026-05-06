import { Router } from 'express';
import { routeController } from '../controller/route.controller';

const router = Router();

router.get('/route', routeController);

export { router as queryRoutes };
