import client from "../client";
import jwt from "jsonwebtoken";

export const getUser = async (token) => {
  try {
    if (!token) {
      return null;
    }

    const { id } = await jwt.verify(token, process.env.SECRET_KEY);
    const user = await client.user.findUnique({ where: { id } });

    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const protectResolver = (user) => {
  if (!user) {
    throw new Error("로그인이 필요합니다.");
  }
};
