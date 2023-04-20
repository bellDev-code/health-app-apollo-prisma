import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createPosition: protectedResolver(
      async (_, { latitude, longitude, gymname }, { loggedInUser }) => {
        const foundPosition = await client.position.findUnique({
          where: {
            userId: loggedInUser.id,
          },
        });

        if (foundPosition) {
          await client.position.delete({
            where: {
              id: foundPosition.id,
            },
          });
        }

        await client.position.create({
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
        return {
          ok: true,
        };
      }
    ),
  },
};
