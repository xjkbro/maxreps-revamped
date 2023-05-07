"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { Dumbbell } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
// import { Icons } from "@/components/icons"

const components: { title: string; href: string; description: string }[] = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export function NavigationMenuDemo() {
    const { signOut } = useClerk();
    return (
        <NavigationMenu className="justify-end">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                        Dashboard
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-auto">
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] justify-center lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Dumbbell className="h-6 w-6" />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            MaxReps
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            One rep closer to your fitness
                                            goals.
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem
                                href="/dashboard/workouts"
                                title="Workouts"
                            >
                                Log your workouts by weights and reps per day.
                            </ListItem>
                            <ListItem
                                href="/dashboard/diary"
                                title="Food Diary"
                            >
                                Keep your macros in check with an intuitive food
                                diary
                            </ListItem>
                            <ListItem
                                href="/dashboard/programs"
                                title="Programs"
                            >
                                By leading fitness coaches, a new way to
                                approach your fitness journey.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className=" bg-transparent">
                        Tools
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {components.map((component) => (
                                <ListItem
                                    key={component.title}
                                    title={component.title}
                                    href={component.href}
                                >
                                    {component.description}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/settings" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={
                                navigationMenuTriggerStyle() + " bg-transparent"
                            }
                        >
                            Settings
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    {/* <Link href="/sign" legacyBehavior passHref>
                        <NavigationMenuLink
                            className={
                                navigationMenuTriggerStyle() + " bg-transparent"
                            }
                        >
                            Settings
                        </NavigationMenuLink>
                    </Link> */}
                    <button
                        onClick={() => {
                            signOut();
                            redirect("/");
                        }}
                    >
                        <NavigationMenuLink
                            className={
                                navigationMenuTriggerStyle() + " bg-transparent"
                            }
                        >
                            Sign Out
                        </NavigationMenuLink>
                    </button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = "ListItem";
