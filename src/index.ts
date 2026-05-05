import express from "express";

async function startApp() {
    const app = express();
    const port = process.env.PORT || 3000;

  try {
    await app.listen({ port: port });
    console.log(`Server running at http://localhost:${String(port)}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

void startApp();