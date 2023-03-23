import express from "express";
import { PrismaClient } from "@prisma/client";
import router from "./routes/router.js";
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const PORT = 4444;
const HOST = "0.0.0.0";

async function main() {
  await prisma.$connect();
  console.log("database connected");
}

main()
  // catch any erroes
  .catch(console.error)
  // disconnect the prisma client once all processes are executed
  .finally(() => prisma.$disconnect());

app.use("/", router);
app.get("/user", (req, res) => {
  res.json({ name: "kalvin" });
});

app.listen(PORT, HOST, () => {
  console.log(`app running port ${PORT}`);
});
