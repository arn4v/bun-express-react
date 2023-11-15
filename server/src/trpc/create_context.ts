import { trpcExpress } from "./express";

export async function createContext(
  opts: trpcExpress.CreateExpressContextOptions
) {
  return {
    req: opts.req,
    res: opts.res,
  };
}

export type Context = typeof createContext;
