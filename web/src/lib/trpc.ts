import type { AppRouter } from "@podmate/server/src/trpc/routers/_app";
import { createTRPCReact, httpBatchLink } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_APP_SERVER_URL + "/trpc",
      fetch(url, init) {
        return fetch(url, {
          ...init,
          credentials: "include",
        });
      },
    }),
  ],
});
