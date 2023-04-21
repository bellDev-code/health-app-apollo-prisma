import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createPosition: protectedResolver(
      async (_, { latitude, longitude, gymname }, { loggedInUser }) => {
        return await client.$transaction(async (prisma) => {
          const existingPosition = await prisma.position.findUnique({
            where: {
              userId: loggedInUser.id,
            },
          });

          if (existingPosition) {
            await prisma.position.update({
              where: {
                id: existingPosition.id,
              },
              data: {
                latitude,
                longitude,
                gymname,
              },
            });
          } else {
            await prisma.position.create({
              data: {
                latitude,
                longitude,
                gymname,
                user: {
                  connect: {
                    id: loggedInUser.id,
                  },
                },
              },
            });
          }

          return { ok: true };
        });
      }
    ),
  },
};
