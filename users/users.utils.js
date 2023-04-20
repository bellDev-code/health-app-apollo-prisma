import client from "../client";
import jwt from "jsonwebtoken";

class UserNotExistsException extends Error {
  constructor() {
    super('"사용자 정보를 찾을 수 없습니다."');
  }
}

export const getUser = async (token) => {
  if (!token) {
    throw new Error("로그인 정보가 없습니다.");
  }

  const userId = verifyUserJwt(token);

  if (userId === null) {
    throw new Error("로그인 정보가 없습니다.");
  }

  const user = await client.user.findUnique({ where: { id: userId } });

  if (!user) {
    throw new UserNotExistsException();
  }

  return user;
};

const verifyUserJwt = (token) => {
  try {
    const userTwt = token.split(" ")[1];
    const res = jwt.verify(userTwt, process.env.SECRET_KEY);
    return res.id;
  } catch (error) {
    return null;
  }
};

export const protectedResolver =
  (ourResolver) => async (root, args, context, info) => {
    if (!context.loggedInUser) {
      return {
        ok: false,
        error: "로그인이 필요합니다.",
      };
    }
    return ourResolver(root, args, context, info);
  };
