import { Router, Request, Response } from 'express';
import data from '../../data/graph.json';

const router = Router();

router.get('/graph', (req: Request, res: Response) => {
   res.json({hello: 'graph'});
});

export { router as graphRoutes };