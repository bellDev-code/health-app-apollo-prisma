import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    editProfile: async (
      _,
      { username, email, name, password: newPassword, token }
    ) => {
      let hashPassword = null;

      if (newPassword) {
        hashPassword = await bcrypt.hash(newPassword, 10);
      }

      const { id } = await jwt.verify(token, process.env.SECRET_KEY);

      const updateUser = await client.user.update({
        where: { id },
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
    },
  },
};
