import client from "../../client";
import bcrypt from "bcrypt";

export default {
  Mutation: {
    createAccount: async (_, { username, email, name, password }) => {
      try {
        const exitingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });
        if (exitingUser) {
          throw new Error("username과 email이 같은 계정이 존재합니다.");
        }

        const hashPassword = await bcrypt.hash(password, 10);

        return client.user.create({
          data: {
            username,
            email,
            name,
            password: hashPassword,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
