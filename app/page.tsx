import Image from "next/image";
import { Josefin_Sans } from "next/font/google";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta";
import { SignInButton, SignOutButton } from "@clerk/nextjs";
import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
    return (
        <main className="flex h-screen flex-col bg-gray-100">
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
            <section className="flex flex-col items-center gap-2">
                <SignedIn />

                <Link href="/dashboard">
                    <Button
                        variant={"outline"}
                        className=" w-full max-w-sm rounded-full  bg-gray-300 p-4 text-center transition-all hover:bg-gray-200"
                    >
                        Go to the Dashboard
                    </Button>
                </Link>
            </section>
            {/* <div>{!!user.isSignedIn && <SignOutButton />}</div> */}
        </main>
    );
}
