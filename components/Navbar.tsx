import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
import React from "react";

export default function Navbar() {
    return (
        <div className="sticky top-0 h-24 w-full border-b z-[1000] border-slate-100 bg-['rgba(255, 255, 255, 0.3)'] backdrop-blur-md backdrop-brightness-125">
            <div className=" mx-auto flex h-24 w-3/4 items-center justify-between">
                <Link
                    href={"/dashboard"}
                    className={
                        josefinSans.className + " mt-2 text-3xl font-bold"
                    }
                >
                    MAXREPS
                </Link>

                <NavigationMenuDemo />
            </div>
        </div>
    );
}
