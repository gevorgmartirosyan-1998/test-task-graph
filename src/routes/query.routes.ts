import { Router, Request, Response } from 'express';
import data from '../../data/graph.json';

const router = Router();

router.get('/route', (req: Request, res: Response) => {
    res.json({hello: 'route'});
});

export { router as queryRoutes };