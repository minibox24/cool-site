import { PrismaClient } from "@prisma/client";
import { getChannel } from "../../../../utils/channel";

const prisma = new PrismaClient();

export default async function callback(req, res) {
  const channel = await getChannel(req, res, prisma);
  if (!channel) return;

  res.status(200).json(channel);
}
