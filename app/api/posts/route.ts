import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
        select: {
            content: true,
        },
    });
    console.log("hello" + posts);
    return NextResponse.json(posts);
}
