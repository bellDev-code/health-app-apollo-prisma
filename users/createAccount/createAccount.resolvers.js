import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (_, { username, email, name, password }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser) {
          throw new Error("username 또는 email이 같은 계정이 존재합니다.");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const createdUser = await client.user.create({
          data: {
            username,
            email,
            name,
            password: hashPassword,
          },
        });

        return {
          ok: true,
          user: createdUser,
        };
      } catch (error) {
        return {
          ok: false,
          error: error.message,
        };
      }
    },
  },
};
