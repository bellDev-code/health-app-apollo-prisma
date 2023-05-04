import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    login: async (_, { username, password }) => {
      try {
        const user = await client.user.findUnique({
          where: { username },
        });

        if (!user) {
          return {
            ok: false,
            error: "해당 유저를 찾지 못했습니다.",
          };
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (!checkPassword) {
          return {
            ok: false,
            error: "잘못된 패스워드입니다.",
          };
        }

        const token = await jwt.sign({ id: user.id }, process.env.SECRET_KEY);
        return {
          ok: true,
          token,
        };
      } catch (error) {
        console.log(error);
      }
    },
  },
};
