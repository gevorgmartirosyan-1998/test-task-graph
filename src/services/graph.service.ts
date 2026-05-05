import type { Graph } from '../types/graph.types.js';

export class GraphService {
  private readonly list: Map<string, string[]>;

  constructor(private readonly graph: Graph) {
    this.list = this.buildData();
  }

  getGraph(): Graph {
    return this.graph;
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
