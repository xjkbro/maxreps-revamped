import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
import React from "react";
import StatusCard from "@/components/StatusCard";
import UpdateStatusCard from "@/components/UpdateStatusCard";
export default function dashboard() {
    return (
        <main className="h-full bg-gray-100">
            <div className="sticky top-0 h-24 w-full border-b z-10 border-slate-100 bg-gray-300">
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
            <div className="pb-12 max-w-[75%] mx-auto">
                <div className="flex items-center gap-4">
                    <h1 className="my-4 text-[2rem] font-bold">Workouts</h1>
                </div>
                <section className="flex gap-4">
                    <div className="w-2/3 flex flex-col gap-4 overflow-y-hidden h-fit">
                        <StatusCard />
                        <StatusCard />
                        <StatusCard />
                        <StatusCard />
                        <StatusCard />
                        <StatusCard />
                    </div>
                    <div className="w-1/3">
                        <UpdateStatusCard />
                    </div>
                </section>
            </div>
        </main>
    );
}
