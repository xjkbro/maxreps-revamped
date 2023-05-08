import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: Request) {
    const { userId, postId, action } = await request.json();

    console.log(userId);
    if (action == "add") {
        const data = await prisma.likesOnPost.create({
            data: {
                postId: postId,
                likeId: userId,
            },
        });
    }
    if (action == "remove") {
        const data = await prisma.likesOnPost.delete({
            where: {
                postId_likeId: {
                    likeId: userId,
                    postId: postId,
                },
            },
        });
    }
    return NextResponse.json({ status: 200, error: false });
}
