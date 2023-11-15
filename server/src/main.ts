import "./environment";
import { createServer } from "./server";

async function main() {
  const server = createServer();
  server.listen(process.env.PORT, () => {
    console.log(`Listening at port ${process.env.PORT}`);
  });
}

void main();
