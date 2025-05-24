import "dotenv/config";
import { trpcServer } from "@hono/trpc-server";
import { appRouter } from "./routers/index";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";

const app = new Hono();

app.use(logger());
app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN || "",
    allowMethods: ["GET", "POST", "OPTIONS"],
  })
);

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

app.get("/", (c) => {
  return c.json({ message: "Connection Ok!" });
});

export default app;
