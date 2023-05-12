"use server";
import { prisma } from "../db";

export async function createUser(
    username,
    userId,
    firstName,
    lastName,
    email,
    avatar
) {
    const found = await prisma.user.findUnique({
        where: { username },
    });
    console.log(found);
    console.log(username, userId, firstName, lastName, email, avatar);

    if (found) return false;
    const newUser = await prisma.user.create({
        data: {
            username,
            userId,
            firstName,
            lastName,
            email,
            avatar,
        },
    });
    // redirect("/");
    return true;
}
