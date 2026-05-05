import { GraphService } from '../services/graph.service';
import data from '../../data/graph.json';
import type { Graph } from "../types/graph.types";
import { Request, Response } from "express";

export function graphController(req: Request, res: Response ) {
    const graphService = new GraphService(data as unknown as Graph);

    const graph = graphService.getGraph();
    console.log('graph: ', graph);
    res.json({
        nodes: Array.from(graph.nodes.values()),
        edges: graph.edges,
    });
}