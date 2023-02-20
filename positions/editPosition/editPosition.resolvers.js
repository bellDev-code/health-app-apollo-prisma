import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    editPosition: protectedResolver(
      async (_, { latitude, longitude, timestamp }, { loggedInUser }) => {
        const position = await client.position.findUnique({
          where: {
            id: loggedInUser.id,
          },
        });

        if (!position) {
          return {
            ok: false,
            error: "해당 데이터가 존재하지 않습니다.",
          };
        } else if (position.userId !== loggedInUser.id) {
          return {
            ok: false,
            error: "해당 권한이 없습니다.",
          };
        } else {
          await client.position.update({
            data: {
              latitude,
              longitude,
              timestamp,
            },
          });
        }
        return {
          ok: true,
        };
      }
    ),
  },
};
