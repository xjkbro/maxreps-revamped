import {
    withClerkMiddleware,
    getAuth,
    clerkClient,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

// Set the paths that don't require the user to be signed in
const publicPaths = ["/", "/sign-in*", "/sign-up*"];

const isPublic = (path: string) => {
    return publicPaths.find((x) =>
        path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
    );
};

export default withClerkMiddleware((request: NextRequest) => {
    if (isPublic(request.nextUrl.pathname)) {
        return NextResponse.next();
    }
    // if the user is not signed in redirect them to the sign in page.
    const { userId } = getAuth(request);
    // const data = getAuth(request);

    // async function checkUser(userId: string) {
    //     const prisma = new PrismaClient();
    //     const user = await prisma.user.findUnique({
    //         where: {
    //             userId,
    //         },
    //     });
    //     if (user) return true;
    //     else return false;
    // }
    // if (userId && request.nextUrl.pathname == "/new-account") {
    //     const found = checkUser(userId);
    //     if (found) {
    //         const dashboard = new URL("/", "dashboard");
    //         return NextResponse.redirect(dashboard);
    //     } else return NextResponse.next();
    // }

    if (!userId) {
        // redirect the users to /pages/sign-in/[[...index]].ts

        const signInUrl = new URL("/", request.url);
        signInUrl.searchParams.set("redirect_url", request.url);
        return NextResponse.redirect(signInUrl);
    }
    return NextResponse.next();
});

export const config = {
    matcher: "/((?!_next/image|_next/static|favicon.ico).*)",
};
