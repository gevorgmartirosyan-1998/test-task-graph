import { Router } from 'express';
import { graphController } from "../controller/graph.controller";

const router = Router();

router.get('/graph', graphController);

export { router as graphRoutes };