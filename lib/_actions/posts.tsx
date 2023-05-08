"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../db";

export async function getPost(postId) {
    const post = prisma.post.findUnique({
        where: { id: postId },
        include: { user: true, likes: true, comments: true },
    });
    return post;
}

// export async function addUpdate(data, userId) {
//     const post = await prisma.post.create({
//         data: { content: data.get("status"), userId: userId },
//     });
//     revalidatePath("/");
// }
