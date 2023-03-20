import client from "../../client";

export default {
  Query: {
    seeFollowing: async (_, { username, page }) => {
      const ok = await client.user.findUnique({
        where: { username },
        select: { id: true },
      });

      if (!ok) {
        return {
          ok: false,
          error: "해당 username을 찾을 수 없습니다.",
        };
      }

      const following = await client.user
        .findUnique({
          where: {
            username,
          },
        })
        .following({
          take: 5,
          skip: (page - 1) * 5,
        });

      return {
        ok: true,
        following,
      };
    },
  },
};
