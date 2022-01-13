import { PrismaClient } from "@prisma/client";
import { checkChannel } from "../../../../utils/channel";

const prisma = new PrismaClient();

export default async function callback(req, res) {
  const channel = await checkChannel(req, res, prisma);
  if (!channel) return;

  res.status(200).json(channel);
}
