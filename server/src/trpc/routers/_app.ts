import { trpc } from "../trpc";

export const _appRouter = trpc.router({
  hello: trpc.procedure.query(() => "Hello World"),
});

export type AppRouter = typeof _appRouter;
