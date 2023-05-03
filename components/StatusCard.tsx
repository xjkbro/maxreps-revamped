import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function StatusCard() {
    return (
        <Card className="">
            <div className="flex items-center justify-between gap-4 p-4">
                <div className="flex gap-4 items-center">
                    <Avatar className="">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <CardHeader className="p-0">
                        <CardTitle className="flex gap-4">
                            <Link href="/dashboard">@shadcn</Link>
                        </CardTitle>
                    </CardHeader>
                </div>
                <Button variant={"outline"}>
                    <Heart />
                    <span className="pl-2">Follow</span>
                </Button>
            </div>
            <hr />
            <div className="p-4">
                <CardContent className="p-0 mb-4 min-h-[2rem]">
                    <p>Card Content</p>
                </CardContent>
                <CardFooter className="p-0 flex justify-between w-full text-sm text-gray-500">
                    <div className="gap-4 flex ">
                        <Button variant={"link"} className="text-xs">
                            (14) Like
                        </Button>
                        <Button variant={"link"} className="text-xs">
                            (3) Comment
                        </Button>
                    </div>
                    <span>Feb 23, 2023 @ 10:45am</span>
                </CardFooter>
            </div>
        </Card>
    );
}
