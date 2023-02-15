import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createPosition: protectedResolver(
      async (_, { latitude, longitude }, { loggedInUser }) => {
        await client.position.create({
          data: {
            latitude,
            longitude,
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
