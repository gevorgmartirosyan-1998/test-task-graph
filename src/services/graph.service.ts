import type {Graph, GraphEdge, GraphNode} from '../types/graph.types.js';
import {Route} from "../types/query.types";

export class GraphService {
  private readonly list: Map<string, string[]>;

  constructor(private readonly graph: Graph) {
    this.list = this.buildData();
  }

  getGraph(): Graph {
    return this.graph;
  }

  findAllRoutes(): Route[] {
        const routes: Route[] = [];
        const targetNodes = this.getNodesWithEdges();
        console.log('targetNodes: ', targetNodes);

        targetNodes.forEach(startNode => {
            console.log('log: startNode: ', startNode);
            // this.findAllPathsFrom(startNode);
        })

        return routes;
    }

    private getNodesWithEdges(): string[] {
        const nodesWithEdges = new Set<string>();

        console.log('log: this.graph.edges: ', this.graph.edges)
        for (const edge of this.graph.edges) {
            console.log('log: edge.from: ', edge.from);
            nodesWithEdges.add(edge.from);
        }
        return Array.from(nodesWithEdges);
    }

  private buildData(): Map<string, string[]> {
    const list = new Map<string, string[]>();

    for (const edge of this.graph.edges) {
      const existing = list.get(edge.from) || [];
      list.set(edge.from, [...existing, ...edge.to]);
    }

      console.log('list: ', list);

    return list;
  }
}
