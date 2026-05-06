import { Request, Response } from 'express';

export function queryController(req: Request, res: Response ) {
    console.log('routesController: 8878: ');
    res.json({
        'routesController': 'test value'
    });
}