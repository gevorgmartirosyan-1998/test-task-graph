import { Request, Response } from 'express';
import {GraphService} from '../services/graph.service';
import data from '../../data/graph.json';
import type {Graph} from '../types/graph.types';

export async function queryController(req: Request, res: Response ) {
    const graphService = new GraphService(data as unknown as Graph);
    const allRoutes = graphService.findAllRoutes();
    const graph = graphService.getGraph();

    console.log('log: query controller: allRoutes: ', allRoutes)

    res.json({
        'routesController': 'test value'
    });
}