import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createPosition: protectedResolver(
      async (_, { latitude, longitude, timestamp }, { loggedInUser }) => {
        await client.position.create({
          data: {
            latitude,
            longitude,
            timestamp,
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
