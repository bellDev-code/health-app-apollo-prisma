import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createPosition: protectedResolver(
      async (
        _,
        { latitude, longitude, gymname, gymTime },
        { loggedInUser }
      ) => {
        const changeLat = Number(latitude).toFixed(6);
        const changeLong = Number(longitude).toFixed(6);
        await client.position.create({
          data: {
            latitude: changeLat,
            longitude: changeLong,
            gymname,
            gymTime,
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
