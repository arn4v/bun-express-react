import { initTRPC } from "@trpc/server";
import { Context } from "./create_context";

export const trpc = initTRPC.context<Context>().create();
