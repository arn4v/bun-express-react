import { z } from "zod";

export const envSchema = z.object({
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

export type Env = z.infer<typeof envSchema>;

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {
      NODE_ENV: "development" | "production" | "test";
    }
  }
}

export const parseResult = envSchema.safeParse(process.env);

if (parseResult.success) {
  process.env = parseResult.data as any;
} else {
  console.error(
    parseResult.error.issues.reduce((acc, issue) => {
      return acc + `❌ ${issue.path} - ${issue.message}\n`;
    }, "")
  );
  process.exit(0);
}
