"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

export const RedirectButtons = () => {
    const { isSignedIn } = useUser();
    return (
        <section className="flex flex-col items-center gap-2">
            {/* <SignedIn /> */}
            {isSignedIn ? (
                <Link href="/dashboard">
                    <Button
                        variant={"outline"}
                        className=" w-full max-w-sm rounded-full  bg-gray-300 p-4 text-center transition-all hover:bg-gray-200"
                    >
                        Go to the Dashboard
                    </Button>
                </Link>
            ) : (
                <Link href="/sign-in">
                    <Button
                        variant={"outline"}
                        className=" w-full max-w-sm rounded-full  bg-gray-300 p-4 text-center transition-all hover:bg-gray-200"
                    >
                        Sign In
                    </Button>
                </Link>
            )}
        </section>
    );
};
