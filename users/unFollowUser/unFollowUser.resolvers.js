import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    unFollowUser: protectedResolver(
      async (_, { username }, { loggedInUser }) => {
        const notExistUser = await client.user.findUnique({
          where: { username },
        });

        if (!notExistUser) {
          return {
            ok: false,
            error: "존재하지 않은 username입니다.",
          };
        }

        await client.user.update({
          where: { id: loggedInUser.id },
          data: {
            following: {
              disconnect: {
                username,
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
