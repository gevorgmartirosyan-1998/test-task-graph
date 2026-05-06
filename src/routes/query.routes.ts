import { Router } from 'express';
import { queryController } from '../controller/query.controller';

const router = Router();

router.get('/route', queryController);

export { router as queryRoutes };
