"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "../db";

export async function addLike(postId, userId) {
    const data = await prisma.likesOnPost.create({
        data: {
            postId,
            likeId: userId,
        },
    });
    revalidatePath("/");
}
export async function removeLike(postId, userId) {
    const data = await prisma.likesOnPost.delete({
        where: {
            postId_likeId: {
                likeId: userId,
                postId: postId,
            },
        },
    });
    revalidatePath("/");
}
