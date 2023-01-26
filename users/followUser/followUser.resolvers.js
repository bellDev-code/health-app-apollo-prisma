import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    followUser: protectedResolver(async (_, { username }, { loggedInUser }) => {
      const existUserNotFollow = await client.user.findUnique({
        where: { username },
      });

      if (!existUserNotFollow) {
        return {
          ok: false,
          error: "존재하지 않은 username입니다. 팔로우를 할 수 없습니다.",
        };
      }

      await client.user.update({
        where: { id: loggedInUser.id },
        data: {
          following: {
            connect: {
              username,
            },
          },
        },
      });
      return {
        ok: true,
      };
    }),
  },
};
