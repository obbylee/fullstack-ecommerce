import { PrismaClient } from "./generated/prisma/client";
import { Products } from "./data/products";

const prisma = new PrismaClient({
  log: ["query", "info", "warn", "error"],
});
// https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=${user.username}&size=64

async function main() {
  await prisma.product.createMany({
    data: Products,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seeding error :", e);
    await prisma.$disconnect();
    process.exit(1);
  });
