import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { trpcExpress } from "./trpc/express";
import { _appRouter } from "./trpc/routers/_app";
import { createContext } from "./trpc/create_context";

export function createServer() {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.disable("x-powered-by");
  app.use(cors());
  app.use(morgan(process.env.NODE_ENV === "development" ? "dev" : "combined"));
  app.use(helmet());

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: _appRouter,
      createContext: createContext,
    })
  );

  return app;
}
