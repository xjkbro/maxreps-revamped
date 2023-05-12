"use server";
import { prisma } from "@/lib/db";

export async function addUser(user, username) {
    // const user = await currentUser();
    console.log(user.emailAddresses[0].emailAddress, username);
    const found = await prisma.user.findUnique({ where: { username } });
    if (found) return { success: false, message: "Username already exists" };
    await prisma.user.create({
        data: {
            userId: user.id,
            username,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.emailAddresses[0].emailAddress,
            avatar: user.profileImageUrl,
        },
    });

    return { success: true, message: "User was successfully created." };
}
