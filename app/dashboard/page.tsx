import React from "react";
import StatusCard from "@/components/StatusCard";
import UpdateStatusCard from "@/components/UpdateStatusCard";
import { LocationPicker } from "@/components/LocationPicker";

export default function dashboard() {
    return (
        <div className="pb-12 max-w-[75%] mx-auto">
            <div className="flex items-center gap-4">
                <h1 className="my-4 text-4xl font-bold">Dashboard</h1>
                <LocationPicker />
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
    );
}
