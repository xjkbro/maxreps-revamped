import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    console.log(request.body);
    // const data = await prisma.user.create({
    //     data: {},
    // });
    // return Response("HELLO");
    const { userId, username, firstname, lastname } = await request.json();
    const data = await prisma.user.create({
        data: {
            userId,
            // username,
            // firstname,
            // lastname,
        },
    });
    console.log(data);
    return NextResponse.json({ data });
    return new Response("Hello");
}
