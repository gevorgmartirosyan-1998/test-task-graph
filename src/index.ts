import express from 'express';
import { graphRoutes } from './routes/graph.routes';
import { queryRoutes } from './routes/query.routes';

async function startApp() {
    const app = express();
    const port = process.env.PORT || 3000;
    app.use(express.json());

    app.use('/api/v1', graphRoutes);
    app.use('/api/v1', queryRoutes);

  try {
    await app.listen({ port: port });
    console.log(`Server running at http://localhost:${String(port)}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

void startApp();