import { NavigationMenuDemo } from "@/components/NavigationMenuDemo";
import { Josefin_Sans } from "next/font/google";
import Link from "next/link";
const josefinSans = Josefin_Sans({ subsets: ["latin"] });
import React from "react";
import { DatePicker } from "@/components/DatePicker";
import { WorkoutVisualizer } from "@/components/WorkoutVisualizer";
import { WorkoutEntryCard } from "@/components/WorkoutEntryCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Overview } from "@/components/Overview";
import { WorkoutLogs } from "@/components/WorkoutLogs";

export default function Workouts() {
    return (
        <div className="pb-12 max-w-[75%] mx-auto">
            <div className="flex items-center justify-between gap-4">
                <h1 className="my-4 text-4xl font-bold">Workouts</h1>
                <DatePicker />
            </div>
            <Tabs defaultValue="logs" className="w-full space-y-4">
                <TabsList>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                </TabsList>
                <TabsContent value="logs" className="flex flex-col gap-4">
                    {/* <section className="flex gap-4"> */}
                    {/* <WorkoutVisualizer /> */}
                    <WorkoutEntryCard />
                    <WorkoutLogs />
                    {/* </section> */}
                </TabsContent>
                <TabsContent value="overview">
                    <Overview />
                </TabsContent>
            </Tabs>
            {/* <section className="flex gap-4">
                <WorkoutVisualizer />
                <WorkoutEntryCard />
            </section> */}
        </div>
    );
}
