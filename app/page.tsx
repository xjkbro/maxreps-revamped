import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
import { SignedIn, SignedOut, auth } from "@clerk/nextjs/app-beta";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withClerkMiddleware, getAuth } from "@clerk/nextjs/server";
import { RedirectButtons } from "./RedirectButtons";

export const revalidate = 3600;
export default async function Home() {
    const { sessionId } = auth();
    return (
        <main className="flex h-screen items-center justify-center flex-col bg-gray-100">
            <section className="my-12 text-center">
                <h1
                    className={
                        josefinSans.className +
                        " md:text-[12rem] mb-0 text-[5rem] font-bold uppercase leading-tight tracking-tighter"
                    }
                >
                    MAXREPS
                </h1>
                <p
                    className={
                        josefinSans.className +
                        " md:text-[1.5rem] text-xl font-light"
                    }
                >
                    One Rep closer to your fitness goals
                </p>
            </section>
            <RedirectButtons />

            {/* <div>{!!user.isSignedIn && <SignOutButton />}</div> */}
        </main>
    );
}
