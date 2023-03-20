import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";
import { uploadToS3 } from "../../shared/shared.utils";

const resolverFn = async (
  _,
  { username, email, name, password: newPassword, profileImage },
  { loggedInUser }
) => {
  let hashPassword = null;

  if (newPassword) {
    hashPassword = await bcrypt.hash(newPassword, 10);
  }

  let imageUrl = null;

  if (profileImage) {
    imageUrl = await uploadToS3(profileImage, loggedInUser.id, "profileImages");
  }

  const updateUser = await client.user.update({
    where: { id: loggedInUser.id },
    data: {
      username,
      email,
      name,
      ...(hashPassword && { password: hashPassword }),
      ...(imageUrl && { profileImage: imageUrl }),
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
};

export default {
  Mutation: {
    editProfile: protectedResolver(resolverFn),
  },
};
