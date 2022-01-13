export async function getChannel(req, res, prisma) {
  const channel = await prisma.channel.findUnique({ where: { id: req.query.id } });

  if (!channel) res.status(404).json({ error: "CHANNEL_NOT_FOUND" });

  return channel;
}
