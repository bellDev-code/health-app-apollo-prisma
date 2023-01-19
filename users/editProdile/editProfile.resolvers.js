import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    editProfile: protectedResolver(
      async (
        _,
        { username, email, name, password: newPassword },
        { loggedInUser, protectResolver }
      ) => {
        protectResolver(loggedInUser);
        let hashPassword = null;

        if (newPassword) {
          hashPassword = await bcrypt.hash(newPassword, 10);
        }

        const updateUser = await client.user.update({
          where: { id: loggedInUser.id },
          data: {
            username,
            email,
            name,
            ...(hashPassword && { password: hashPassword }),
          },
        });

        if (updateUser) {
          return {
            ok: true,
          };
        } else {
          return {
            ok: false,
            error: "프로필을 업데이트 할 수 없습니다.",
          };
        }
      }
    ),
  },
};
